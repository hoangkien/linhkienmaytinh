/*! jQuery v1.10.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery-1.10.2.min.map
*/

(function(e,t){var n,r,i=typeof t,o=e.location,a=e.document,s=a.documentElement,l=e.jQuery,u=e.$,c={},p=[],f="1.10.2",d=p.concat,h=p.push,g=p.slice,m=p.indexOf,y=c.toString,v=c.hasOwnProperty,b=f.trim,x=function(e,t){return new x.fn.init(e,t,r)},w=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=/\S+/g,C=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,k=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,E=/^[\],:{}\s]*$/,S=/(?:^|:|,)(?:\s*\[)+/g,A=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,j=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,D=/^-ms-/,L=/-([\da-z])/gi,H=function(e,t){return t.toUpperCase()},q=function(e){(a.addEventListener||"load"===e.type||"complete"===a.readyState)&&(_(),x.ready())},_=function(){a.addEventListener?(a.removeEventListener("DOMContentLoaded",q,!1),e.removeEventListener("load",q,!1)):(a.detachEvent("onreadystatechange",q),e.detachEvent("onload",q))};x.fn=x.prototype={jquery:f,constructor:x,init:function(e,n,r){var i,o;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof x?n[0]:n,x.merge(this,x.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:a,!0)),k.test(i[1])&&x.isPlainObject(n))for(i in n)x.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(o=a.getElementById(i[2]),o&&o.parentNode){if(o.id!==i[2])return r.find(e);this.length=1,this[0]=o}return this.context=a,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return g.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(g.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},l=1,u=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},l=2),"object"==typeof s||x.isFunction(s)||(s={}),u===l&&(s=this,--l);u>l;l++)if(null!=(o=arguments[l]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(x.isPlainObject(r)||(n=x.isArray(r)))?(n?(n=!1,a=e&&x.isArray(e)?e:[]):a=e&&x.isPlainObject(e)?e:{},s[i]=x.extend(c,a,r)):r!==t&&(s[i]=r));return s},x.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=l),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){if(e===!0?!--x.readyWait:!x.isReady){if(!a.body)return setTimeout(x.ready);x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(a,[x]),x.fn.trigger&&x(a).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray||function(e){return"array"===x.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?c[y.call(e)]||"object":typeof e},isPlainObject:function(e){var n;if(!e||"object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!v.call(e,"constructor")&&!v.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(r){return!1}if(x.support.ownLast)for(n in e)return v.call(e,n);for(n in e);return n===t||v.call(e,n)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||a;var r=k.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=x.trim(n),n&&E.test(n.replace(A,"@").replace(j,"]").replace(S,"")))?Function("return "+n)():(x.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||x.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&x.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(D,"ms-").replace(L,H)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:b&&!b.call("\ufeff\u00a0")?function(e){return null==e?"":b.call(e)}:function(e){return null==e?"":(e+"").replace(C,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(m)return m.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return d.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),x.isFunction(e)?(r=g.call(arguments,2),i=function(){return e.apply(n||this,r.concat(g.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):t},access:function(e,n,r,i,o,a,s){var l=0,u=e.length,c=null==r;if("object"===x.type(r)){o=!0;for(l in r)x.access(e,n,l,r[l],!0,a,s)}else if(i!==t&&(o=!0,x.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(x(e),n)})),n))for(;u>l;l++)n(e[l],r,s?i:i.call(e[l],l,n(e[l],r)));return o?e:c?n.call(e):u?n(e[0],r):a},now:function(){return(new Date).getTime()},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),x.ready.promise=function(t){if(!n)if(n=x.Deferred(),"complete"===a.readyState)setTimeout(x.ready);else if(a.addEventListener)a.addEventListener("DOMContentLoaded",q,!1),e.addEventListener("load",q,!1);else{a.attachEvent("onreadystatechange",q),e.attachEvent("onload",q);var r=!1;try{r=null==e.frameElement&&a.documentElement}catch(i){}r&&r.doScroll&&function o(){if(!x.isReady){try{r.doScroll("left")}catch(e){return setTimeout(o,50)}_(),x.ready()}}()}return n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){c["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=x(a),function(e,t){var n,r,i,o,a,s,l,u,c,p,f,d,h,g,m,y,v,b="sizzle"+-new Date,w=e.document,T=0,C=0,N=st(),k=st(),E=st(),S=!1,A=function(e,t){return e===t?(S=!0,0):0},j=typeof t,D=1<<31,L={}.hasOwnProperty,H=[],q=H.pop,_=H.push,M=H.push,O=H.slice,F=H.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},B="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",P="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",W=R.replace("w","w#"),$="\\["+P+"*("+R+")"+P+"*(?:([*^$|!~]?=)"+P+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+W+")|)|)"+P+"*\\]",I=":("+R+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+$.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+P+"+|((?:^|[^\\\\])(?:\\\\.)*)"+P+"+$","g"),X=RegExp("^"+P+"*,"+P+"*"),U=RegExp("^"+P+"*([>+~]|"+P+")"+P+"*"),V=RegExp(P+"*[+~]"),Y=RegExp("="+P+"*([^\\]'\"]*)"+P+"*\\]","g"),J=RegExp(I),G=RegExp("^"+W+"$"),Q={ID:RegExp("^#("+R+")"),CLASS:RegExp("^\\.("+R+")"),TAG:RegExp("^("+R.replace("w","w*")+")"),ATTR:RegExp("^"+$),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+P+"*(even|odd|(([+-]|)(\\d*)n|)"+P+"*(?:([+-]|)"+P+"*(\\d+)|))"+P+"*\\)|)","i"),bool:RegExp("^(?:"+B+")$","i"),needsContext:RegExp("^"+P+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+P+"*((?:-\\d)?\\d*)"+P+"*\\)|)(?=[^-]|$)","i")},K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,et=/^(?:input|select|textarea|button)$/i,tt=/^h\d$/i,nt=/'|\\/g,rt=RegExp("\\\\([\\da-f]{1,6}"+P+"?|("+P+")|.)","ig"),it=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{M.apply(H=O.call(w.childNodes),w.childNodes),H[w.childNodes.length].nodeType}catch(ot){M={apply:H.length?function(e,t){_.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function at(e,t,n,i){var o,a,s,l,u,c,d,m,y,x;if((t?t.ownerDocument||t:w)!==f&&p(t),t=t||f,n=n||[],!e||"string"!=typeof e)return n;if(1!==(l=t.nodeType)&&9!==l)return[];if(h&&!i){if(o=Z.exec(e))if(s=o[1]){if(9===l){if(a=t.getElementById(s),!a||!a.parentNode)return n;if(a.id===s)return n.push(a),n}else if(t.ownerDocument&&(a=t.ownerDocument.getElementById(s))&&v(t,a)&&a.id===s)return n.push(a),n}else{if(o[2])return M.apply(n,t.getElementsByTagName(e)),n;if((s=o[3])&&r.getElementsByClassName&&t.getElementsByClassName)return M.apply(n,t.getElementsByClassName(s)),n}if(r.qsa&&(!g||!g.test(e))){if(m=d=b,y=t,x=9===l&&e,1===l&&"object"!==t.nodeName.toLowerCase()){c=mt(e),(d=t.getAttribute("id"))?m=d.replace(nt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",u=c.length;while(u--)c[u]=m+yt(c[u]);y=V.test(e)&&t.parentNode||t,x=c.join(",")}if(x)try{return M.apply(n,y.querySelectorAll(x)),n}catch(T){}finally{d||t.removeAttribute("id")}}}return kt(e.replace(z,"$1"),t,n,i)}function st(){var e=[];function t(n,r){return e.push(n+=" ")>o.cacheLength&&delete t[e.shift()],t[n]=r}return t}function lt(e){return e[b]=!0,e}function ut(e){var t=f.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function ct(e,t){var n=e.split("|"),r=e.length;while(r--)o.attrHandle[n[r]]=t}function pt(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function ft(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function dt(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function ht(e){return lt(function(t){return t=+t,lt(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}s=at.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},r=at.support={},p=at.setDocument=function(e){var n=e?e.ownerDocument||e:w,i=n.defaultView;return n!==f&&9===n.nodeType&&n.documentElement?(f=n,d=n.documentElement,h=!s(n),i&&i.attachEvent&&i!==i.top&&i.attachEvent("onbeforeunload",function(){p()}),r.attributes=ut(function(e){return e.className="i",!e.getAttribute("className")}),r.getElementsByTagName=ut(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),r.getElementsByClassName=ut(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),r.getById=ut(function(e){return d.appendChild(e).id=b,!n.getElementsByName||!n.getElementsByName(b).length}),r.getById?(o.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){return e.getAttribute("id")===t}}):(delete o.find.ID,o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");return n&&n.value===t}}),o.find.TAG=r.getElementsByTagName?function(e,n){return typeof n.getElementsByTagName!==j?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},o.find.CLASS=r.getElementsByClassName&&function(e,n){return typeof n.getElementsByClassName!==j&&h?n.getElementsByClassName(e):t},m=[],g=[],(r.qsa=K.test(n.querySelectorAll))&&(ut(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||g.push("\\["+P+"*(?:value|"+B+")"),e.querySelectorAll(":checked").length||g.push(":checked")}),ut(function(e){var t=n.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&g.push("[*^$]="+P+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||g.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),g.push(",.*:")})),(r.matchesSelector=K.test(y=d.webkitMatchesSelector||d.mozMatchesSelector||d.oMatchesSelector||d.msMatchesSelector))&&ut(function(e){r.disconnectedMatch=y.call(e,"div"),y.call(e,"[s!='']:x"),m.push("!=",I)}),g=g.length&&RegExp(g.join("|")),m=m.length&&RegExp(m.join("|")),v=K.test(d.contains)||d.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},A=d.compareDocumentPosition?function(e,t){if(e===t)return S=!0,0;var i=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t);return i?1&i||!r.sortDetached&&t.compareDocumentPosition(e)===i?e===n||v(w,e)?-1:t===n||v(w,t)?1:c?F.call(c,e)-F.call(c,t):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return S=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:c?F.call(c,e)-F.call(c,t):0;if(o===a)return pt(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?pt(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},n):f},at.matches=function(e,t){return at(e,null,null,t)},at.matchesSelector=function(e,t){if((e.ownerDocument||e)!==f&&p(e),t=t.replace(Y,"='$1']"),!(!r.matchesSelector||!h||m&&m.test(t)||g&&g.test(t)))try{var n=y.call(e,t);if(n||r.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(i){}return at(t,f,null,[e]).length>0},at.contains=function(e,t){return(e.ownerDocument||e)!==f&&p(e),v(e,t)},at.attr=function(e,n){(e.ownerDocument||e)!==f&&p(e);var i=o.attrHandle[n.toLowerCase()],a=i&&L.call(o.attrHandle,n.toLowerCase())?i(e,n,!h):t;return a===t?r.attributes||!h?e.getAttribute(n):(a=e.getAttributeNode(n))&&a.specified?a.value:null:a},at.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},at.uniqueSort=function(e){var t,n=[],i=0,o=0;if(S=!r.detectDuplicates,c=!r.sortStable&&e.slice(0),e.sort(A),S){while(t=e[o++])t===e[o]&&(i=n.push(o));while(i--)e.splice(n[i],1)}return e},a=at.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=a(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=a(t);return n},o=at.selectors={cacheLength:50,createPseudo:lt,match:Q,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(rt,it),e[3]=(e[4]||e[5]||"").replace(rt,it),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||at.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&at.error(e[0]),e},PSEUDO:function(e){var n,r=!e[5]&&e[2];return Q.CHILD.test(e[0])?null:(e[3]&&e[4]!==t?e[2]=e[4]:r&&J.test(r)&&(n=mt(r,!0))&&(n=r.indexOf(")",r.length-n)-r.length)&&(e[0]=e[0].slice(0,n),e[2]=r.slice(0,n)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(rt,it).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=N[e+" "];return t||(t=RegExp("(^|"+P+")"+e+"("+P+"|$)"))&&N(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=at.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,l){var u,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!l&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[b]||(m[b]={}),u=c[e]||[],d=u[0]===T&&u[1],f=u[0]===T&&u[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[T,d,f];break}}else if(v&&(u=(t[b]||(t[b]={}))[e])&&u[0]===T)f=u[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[b]||(p[b]={}))[e]=[T,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=o.pseudos[e]||o.setFilters[e.toLowerCase()]||at.error("unsupported pseudo: "+e);return r[b]?r(t):r.length>1?(n=[e,e,"",t],o.setFilters.hasOwnProperty(e.toLowerCase())?lt(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=F.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:lt(function(e){var t=[],n=[],r=l(e.replace(z,"$1"));return r[b]?lt(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:lt(function(e){return function(t){return at(e,t).length>0}}),contains:lt(function(e){return function(t){return(t.textContent||t.innerText||a(t)).indexOf(e)>-1}}),lang:lt(function(e){return G.test(e||"")||at.error("unsupported lang: "+e),e=e.replace(rt,it).toLowerCase(),function(t){var n;do if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===d},focus:function(e){return e===f.activeElement&&(!f.hasFocus||f.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!o.pseudos.empty(e)},header:function(e){return tt.test(e.nodeName)},input:function(e){return et.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:ht(function(){return[0]}),last:ht(function(e,t){return[t-1]}),eq:ht(function(e,t,n){return[0>n?n+t:n]}),even:ht(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:ht(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:ht(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:ht(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}},o.pseudos.nth=o.pseudos.eq;for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})o.pseudos[n]=ft(n);for(n in{submit:!0,reset:!0})o.pseudos[n]=dt(n);function gt(){}gt.prototype=o.filters=o.pseudos,o.setFilters=new gt;function mt(e,t){var n,r,i,a,s,l,u,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,l=[],u=o.preFilter;while(s){(!n||(r=X.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),l.push(i=[])),n=!1,(r=U.exec(s))&&(n=r.shift(),i.push({value:n,type:r[0].replace(z," ")}),s=s.slice(n.length));for(a in o.filter)!(r=Q[a].exec(s))||u[a]&&!(r=u[a](r))||(n=r.shift(),i.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?at.error(e):k(e,l).slice(0)}function yt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function vt(e,t,n){var r=t.dir,o=n&&"parentNode"===r,a=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||o)return e(t,n,i)}:function(t,n,s){var l,u,c,p=T+" "+a;if(s){while(t=t[r])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[r])if(1===t.nodeType||o)if(c=t[b]||(t[b]={}),(u=c[r])&&u[0]===p){if((l=u[1])===!0||l===i)return l===!0}else if(u=c[r]=[p],u[1]=e(t,n,s)||i,u[1]===!0)return!0}}function bt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function xt(e,t,n,r,i){var o,a=[],s=0,l=e.length,u=null!=t;for(;l>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),u&&t.push(s));return a}function wt(e,t,n,r,i,o){return r&&!r[b]&&(r=wt(r)),i&&!i[b]&&(i=wt(i,o)),lt(function(o,a,s,l){var u,c,p,f=[],d=[],h=a.length,g=o||Nt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:xt(g,f,e,s,l),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,l),r){u=xt(y,d),r(u,[],s,l),c=u.length;while(c--)(p=u[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){u=[],c=y.length;while(c--)(p=y[c])&&u.push(m[c]=p);i(null,y=[],u,l)}c=y.length;while(c--)(p=y[c])&&(u=i?F.call(o,p):f[c])>-1&&(o[u]=!(a[u]=p))}}else y=xt(y===a?y.splice(h,y.length):y),i?i(null,a,y,l):M.apply(a,y)})}function Tt(e){var t,n,r,i=e.length,a=o.relative[e[0].type],s=a||o.relative[" "],l=a?1:0,c=vt(function(e){return e===t},s,!0),p=vt(function(e){return F.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;i>l;l++)if(n=o.relative[e[l].type])f=[vt(bt(f),n)];else{if(n=o.filter[e[l].type].apply(null,e[l].matches),n[b]){for(r=++l;i>r;r++)if(o.relative[e[r].type])break;return wt(l>1&&bt(f),l>1&&yt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&Tt(e.slice(l,r)),i>r&&Tt(e=e.slice(r)),i>r&&yt(e))}f.push(n)}return bt(f)}function Ct(e,t){var n=0,r=t.length>0,a=e.length>0,s=function(s,l,c,p,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,C=u,N=s||a&&o.find.TAG("*",d&&l.parentNode||l),k=T+=null==C?1:Math.random()||.1;for(w&&(u=l!==f&&l,i=n);null!=(h=N[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,l,c)){p.push(h);break}w&&(T=k,i=++n)}r&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,r&&b!==v){g=0;while(m=t[g++])m(x,y,l,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=q.call(p));y=xt(y)}M.apply(p,y),w&&!s&&y.length>0&&v+t.length>1&&at.uniqueSort(p)}return w&&(T=k,u=C),x};return r?lt(s):s}l=at.compile=function(e,t){var n,r=[],i=[],o=E[e+" "];if(!o){t||(t=mt(e)),n=t.length;while(n--)o=Tt(t[n]),o[b]?r.push(o):i.push(o);o=E(e,Ct(i,r))}return o};function Nt(e,t,n){var r=0,i=t.length;for(;i>r;r++)at(e,t[r],n);return n}function kt(e,t,n,i){var a,s,u,c,p,f=mt(e);if(!i&&1===f.length){if(s=f[0]=f[0].slice(0),s.length>2&&"ID"===(u=s[0]).type&&r.getById&&9===t.nodeType&&h&&o.relative[s[1].type]){if(t=(o.find.ID(u.matches[0].replace(rt,it),t)||[])[0],!t)return n;e=e.slice(s.shift().value.length)}a=Q.needsContext.test(e)?0:s.length;while(a--){if(u=s[a],o.relative[c=u.type])break;if((p=o.find[c])&&(i=p(u.matches[0].replace(rt,it),V.test(s[0].type)&&t.parentNode||t))){if(s.splice(a,1),e=i.length&&yt(s),!e)return M.apply(n,i),n;break}}}return l(e,f)(i,t,!h,n,V.test(e)),n}r.sortStable=b.split("").sort(A).join("")===b,r.detectDuplicates=S,p(),r.sortDetached=ut(function(e){return 1&e.compareDocumentPosition(f.createElement("div"))}),ut(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||ct("type|href|height|width",function(e,n,r){return r?t:e.getAttribute(n,"type"===n.toLowerCase()?1:2)}),r.attributes&&ut(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||ct("value",function(e,n,r){return r||"input"!==e.nodeName.toLowerCase()?t:e.defaultValue}),ut(function(e){return null==e.getAttribute("disabled")})||ct(B,function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&i.specified?i.value:e[n]===!0?n.toLowerCase():null}),x.find=at,x.expr=at.selectors,x.expr[":"]=x.expr.pseudos,x.unique=at.uniqueSort,x.text=at.getText,x.isXMLDoc=at.isXML,x.contains=at.contains}(e);var O={};function F(e){var t=O[e]={};return x.each(e.match(T)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?O[e]||F(e):x.extend({},e);var n,r,i,o,a,s,l=[],u=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=l.length,n=!0;l&&o>a;a++)if(l[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,l&&(u?u.length&&c(u.shift()):r?l=[]:p.disable())},p={add:function(){if(l){var t=l.length;(function i(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&p.has(n)||l.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=l.length:r&&(s=t,c(r))}return this},remove:function(){return l&&x.each(arguments,function(e,t){var r;while((r=x.inArray(t,l,r))>-1)l.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?x.inArray(e,l)>-1:!(!l||!l.length)},empty:function(){return l=[],o=0,this},disable:function(){return l=u=r=t,this},disabled:function(){return!l},lock:function(){return u=t,r||p.disable(),this},locked:function(){return!u},fireWith:function(e,t){return!l||i&&!u||(t=t||[],t=[e,t.slice?t.slice():t],n?u.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var a=o[0],s=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=g.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?g.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,l,u;if(r>1)for(s=Array(r),l=Array(r),u=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(a(t,u,n)).fail(o.reject).progress(a(t,l,s)):--i;return i||o.resolveWith(u,n),o.promise()}}),x.support=function(t){var n,r,o,s,l,u,c,p,f,d=a.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*")||[],r=d.getElementsByTagName("a")[0],!r||!r.style||!n.length)return t;s=a.createElement("select"),u=s.appendChild(a.createElement("option")),o=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t.getSetAttribute="t"!==d.className,t.leadingWhitespace=3===d.firstChild.nodeType,t.tbody=!d.getElementsByTagName("tbody").length,t.htmlSerialize=!!d.getElementsByTagName("link").length,t.style=/top/.test(r.getAttribute("style")),t.hrefNormalized="/a"===r.getAttribute("href"),t.opacity=/^0.5/.test(r.style.opacity),t.cssFloat=!!r.style.cssFloat,t.checkOn=!!o.value,t.optSelected=u.selected,t.enctype=!!a.createElement("form").enctype,t.html5Clone="<:nav></:nav>"!==a.createElement("nav").cloneNode(!0).outerHTML,t.inlineBlockNeedsLayout=!1,t.shrinkWrapBlocks=!1,t.pixelPosition=!1,t.deleteExpando=!0,t.noCloneEvent=!0,t.reliableMarginRight=!0,t.boxSizingReliable=!0,o.checked=!0,t.noCloneChecked=o.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!u.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}o=a.createElement("input"),o.setAttribute("value",""),t.input=""===o.getAttribute("value"),o.value="t",o.setAttribute("type","radio"),t.radioValue="t"===o.value,o.setAttribute("checked","t"),o.setAttribute("name","t"),l=a.createDocumentFragment(),l.appendChild(o),t.appendChecked=o.checked,t.checkClone=l.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip;for(f in x(t))break;return t.ownLast="0"!==f,x(function(){var n,r,o,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",l=a.getElementsByTagName("body")[0];l&&(n=a.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",l.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",o=d.getElementsByTagName("td"),o[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===o[0].offsetHeight,o[0].style.display="",o[1].style.display="none",t.reliableHiddenOffsets=p&&0===o[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",x.swap(l,null!=l.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===d.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(a.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(l.style.zoom=1)),l.removeChild(n),n=d=o=r=null)}),n=s=l=u=r=o=null,t
}({});var B=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;function R(e,n,r,i){if(x.acceptData(e)){var o,a,s=x.expando,l=e.nodeType,u=l?x.cache:e,c=l?e[s]:e[s]&&s;if(c&&u[c]&&(i||u[c].data)||r!==t||"string"!=typeof n)return c||(c=l?e[s]=p.pop()||x.guid++:s),u[c]||(u[c]=l?{}:{toJSON:x.noop}),("object"==typeof n||"function"==typeof n)&&(i?u[c]=x.extend(u[c],n):u[c].data=x.extend(u[c].data,n)),a=u[c],i||(a.data||(a.data={}),a=a.data),r!==t&&(a[x.camelCase(n)]=r),"string"==typeof n?(o=a[n],null==o&&(o=a[x.camelCase(n)])):o=a,o}}function W(e,t,n){if(x.acceptData(e)){var r,i,o=e.nodeType,a=o?x.cache:e,s=o?e[x.expando]:x.expando;if(a[s]){if(t&&(r=n?a[s]:a[s].data)){x.isArray(t)?t=t.concat(x.map(t,x.camelCase)):t in r?t=[t]:(t=x.camelCase(t),t=t in r?[t]:t.split(" ")),i=t.length;while(i--)delete r[t[i]];if(n?!I(r):!x.isEmptyObject(r))return}(n||(delete a[s].data,I(a[s])))&&(o?x.cleanData([e],!0):x.support.deleteExpando||a!=a.window?delete a[s]:a[s]=null)}}}x.extend({cache:{},noData:{applet:!0,embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(e){return e=e.nodeType?x.cache[e[x.expando]]:e[x.expando],!!e&&!I(e)},data:function(e,t,n){return R(e,t,n)},removeData:function(e,t){return W(e,t)},_data:function(e,t,n){return R(e,t,n,!0)},_removeData:function(e,t){return W(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&x.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),x.fn.extend({data:function(e,n){var r,i,o=null,a=0,s=this[0];if(e===t){if(this.length&&(o=x.data(s),1===s.nodeType&&!x._data(s,"parsedAttrs"))){for(r=s.attributes;r.length>a;a++)i=r[a].name,0===i.indexOf("data-")&&(i=x.camelCase(i.slice(5)),$(s,i,o[i]));x._data(s,"parsedAttrs",!0)}return o}return"object"==typeof e?this.each(function(){x.data(this,e)}):arguments.length>1?this.each(function(){x.data(this,e,n)}):s?$(s,e,x.data(s,e)):null},removeData:function(e){return this.each(function(){x.removeData(this,e)})}});function $(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(P,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:B.test(r)?x.parseJSON(r):r}catch(o){}x.data(e,n,r)}else r=t}return r}function I(e){var t;for(t in e)if(("data"!==t||!x.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}x.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=x._data(e,n),r&&(!i||x.isArray(r)?i=x._data(e,n,x.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),a=function(){x.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return x._data(e,n)||x._data(e,n,{empty:x.Callbacks("once memory").add(function(){x._removeData(e,t+"queue"),x._removeData(e,n)})})}}),x.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?x.queue(this[0],e):n===t?this:this.each(function(){var t=x.queue(this,e,n);x._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=x.Deferred(),a=this,s=this.length,l=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=x._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(l));return l(),o.promise(n)}});var z,X,U=/[\t\r\n\f]/g,V=/\r/g,Y=/^(?:input|select|textarea|button|object)$/i,J=/^(?:a|area)$/i,G=/^(?:checked|selected)$/i,Q=x.support.getSetAttribute,K=x.support.input;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return e=x.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,l="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,l=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var t,r=0,o=x(this),a=e.match(T)||[];while(t=a[r++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else(n===i||"boolean"===n)&&(this.className&&x._data(this,"__className__",this.className),this.className=this.className||e===!1?"":x._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(U," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=x.isFunction(e),this.each(function(n){var o;1===this.nodeType&&(o=i?e.call(this,n,x(this).val()):e,null==o?o="":"number"==typeof o?o+="":x.isArray(o)&&(o=x.map(o,function(e){return null==e?"":e+""})),r=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=x.valHooks[o.type]||x.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(V,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=x.find.attr(e,"value");return null!=t?t:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,l=0>i?s:o?i:0;for(;s>l;l++)if(n=r[l],!(!n.selected&&l!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),a=i.length;while(a--)r=i[a],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,n,r){var o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===i?x.prop(e,n,r):(1===s&&x.isXMLDoc(e)||(n=n.toLowerCase(),o=x.attrHooks[n]||(x.expr.match.bool.test(n)?X:z)),r===t?o&&"get"in o&&null!==(a=o.get(e,n))?a:(a=x.find.attr(e,n),null==a?t:a):null!==r?o&&"set"in o&&(a=o.set(e,r,n))!==t?a:(e.setAttribute(n,r+""),r):(x.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(T);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)?K&&Q||!G.test(n)?e[r]=!1:e[x.camelCase("default-"+n)]=e[r]=!1:x.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!x.isXMLDoc(e),a&&(n=x.propFix[n]||n,o=x.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var t=x.find.attr(e,"tabindex");return t?parseInt(t,10):Y.test(e.nodeName)||J.test(e.nodeName)&&e.href?0:-1}}}}),X={set:function(e,t,n){return t===!1?x.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&x.propFix[n]||n,n):e[x.camelCase("default-"+n)]=e[n]=!0,n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,n){var r=x.expr.attrHandle[n]||x.find.attr;x.expr.attrHandle[n]=K&&Q||!G.test(n)?function(e,n,i){var o=x.expr.attrHandle[n],a=i?t:(x.expr.attrHandle[n]=t)!=r(e,n,i)?n.toLowerCase():null;return x.expr.attrHandle[n]=o,a}:function(e,n,r){return r?t:e[x.camelCase("default-"+n)]?n.toLowerCase():null}}),K&&Q||(x.attrHooks.value={set:function(e,n,r){return x.nodeName(e,"input")?(e.defaultValue=n,t):z&&z.set(e,n,r)}}),Q||(z={set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},x.expr.attrHandle.id=x.expr.attrHandle.name=x.expr.attrHandle.coords=function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&""!==i.value?i.value:null},x.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&r.specified?r.value:t},set:z.set},x.attrHooks.contenteditable={set:function(e,t,n){z.set(e,""===t?!1:t,n)}},x.each(["width","height"],function(e,n){x.attrHooks[n]={set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}}})),x.support.hrefNormalized||x.each(["href","src"],function(e,t){x.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}}),x.support.style||(x.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.support.enctype||(x.propFix.enctype="encoding"),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,n){return x.isArray(n)?e.checked=x.inArray(x(e).val(),n)>=0:t}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}function at(){try{return a.activeElement}catch(e){}}x.event={global:{},add:function(e,n,r,o,a){var s,l,u,c,p,f,d,h,g,m,y,v=x._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=x.guid++),(l=v.events)||(l=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof x===i||e&&x.event.triggered===e.type?t:x.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(T)||[""],u=n.length;while(u--)s=rt.exec(n[u])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),g&&(p=x.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=x.event.special[g]||{},d=x.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&x.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=l[g])||(h=l[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),x.event.global[g]=!0);e=null}},remove:function(e,t,n,r,i){var o,a,s,l,u,c,p,f,d,h,g,m=x.hasData(e)&&x._data(e);if(m&&(c=m.events)){t=(t||"").match(T)||[""],u=t.length;while(u--)if(s=rt.exec(t[u])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=x.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),l=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));l&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||x.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)x.event.remove(e,d+t[u],n,r,!0);x.isEmptyObject(c)&&(delete m.handle,x._removeData(e,"events"))}},trigger:function(n,r,i,o){var s,l,u,c,p,f,d,h=[i||a],g=v.call(n,"type")?n.type:n,m=v.call(n,"namespace")?n.namespace.split("."):[];if(u=f=i=i||a,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+x.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),l=0>g.indexOf(":")&&"on"+g,n=n[x.expando]?n:new x.Event(g,"object"==typeof n&&n),n.isTrigger=o?2:3,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:x.makeArray(r,[n]),p=x.event.special[g]||{},o||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!o&&!p.noBubble&&!x.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(u=u.parentNode);u;u=u.parentNode)h.push(u),f=u;f===(i.ownerDocument||a)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((u=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(x._data(u,"events")||{})[n.type]&&x._data(u,"handle"),s&&s.apply(u,r),s=l&&u[l],s&&x.acceptData(u)&&s.apply&&s.apply(u,r)===!1&&n.preventDefault();if(n.type=g,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(h.pop(),r)===!1)&&x.acceptData(i)&&l&&i[g]&&!x.isWindow(i)){f=i[l],f&&(i[l]=null),x.event.triggered=g;try{i[g]()}catch(y){}x.event.triggered=t,f&&(i[l]=f)}return n.result}},dispatch:function(e){e=x.event.fix(e);var n,r,i,o,a,s=[],l=g.call(arguments),u=(x._data(this,"events")||{})[e.type]||[],c=x.event.special[e.type]||{};if(l[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((x.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,l),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],l=n.delegateCount,u=e.target;if(l&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!=this;u=u.parentNode||this)if(1===u.nodeType&&(u.disabled!==!0||"click"!==e.type)){for(o=[],a=0;l>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?x(r,this).index(u)>=0:x.find(r,this,null,[u]).length),o[r]&&o.push(i);o.length&&s.push({elem:u,handlers:o})}return n.length>l&&s.push({elem:this,handlers:n.slice(l)}),s},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,o=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new x.Event(o),t=r.length;while(t--)n=r[t],e[n]=o[n];return e.target||(e.target=o.srcElement||a),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,o):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,o,s=n.button,l=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||a,o=i.documentElement,r=i.body,e.pageX=n.clientX+(o&&o.scrollLeft||r&&r.scrollLeft||0)-(o&&o.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(o&&o.scrollTop||r&&r.scrollTop||0)-(o&&o.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&l&&(e.relatedTarget=l===e.target?n.toElement:l),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==at()&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===at()&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},click:{trigger:function(){return x.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=a.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},x.Event=function(e,n){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&x.extend(this,n),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,t):new x.Event(e,n)},x.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.submitBubbles||(x.event.special.submit={setup:function(){return x.nodeName(this,"form")?!1:(x.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=x.nodeName(n,"input")||x.nodeName(n,"button")?n.form:t;r&&!x._data(r,"submitBubbles")&&(x.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),x._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&x.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return x.nodeName(this,"form")?!1:(x.event.remove(this,"._submit"),t)}}),x.support.changeBubbles||(x.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(x.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),x.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),x.event.simulate("change",this,e,!0)})),!1):(x.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!x._data(t,"changeBubbles")&&(x.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||x.event.simulate("change",this.parentNode,e,!0)}),x._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return x.event.remove(this,"._change"),!Z.test(this.nodeName)}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&a.addEventListener(e,r,!0)},teardown:function(){0===--n&&a.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return x().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=x.guid++)),this.each(function(){x.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,x(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){x.event.remove(this,e,r,n)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?x.event.trigger(e,n,r,!0):t}});var st=/^.[^:#\[\.,]*$/,lt=/^(?:parents|prev(?:Until|All))/,ut=x.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;i>t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i>t;t++)x.find(e,r[t],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t,n=x(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(x.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e||[],!0))},filter:function(e){return this.pushStack(ft(this,e||[],!1))},is:function(e){return!!ft(this,"string"==typeof e&&ut.test(e)?x(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,o=[],a=ut.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(a?a.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?x.inArray(this[0],x(e)):x.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return x.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(ct[e]||(i=x.unique(i)),lt.test(e)&&(i=i.reverse())),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!x(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(st.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return x.inArray(e,t)>=0!==n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Ct=/^(?:checkbox|radio)$/i,Nt=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:x.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(a),Dt=jt.appendChild(a.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===t?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||a).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(Ft(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&_t(Ft(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&x.cleanData(Ft(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&x.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!x.support.htmlSerialize&&mt.test(e)||!x.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(x.cleanData(Ft(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=d.apply([],e);var r,i,o,a,s,l,u=0,c=this.length,p=this,f=c-1,h=e[0],g=x.isFunction(h);if(g||!(1>=c||"string"!=typeof h||x.support.checkClone)&&Nt.test(h))return this.each(function(r){var i=p.eq(r);g&&(e[0]=h.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(l=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),r=l.firstChild,1===l.childNodes.length&&(l=r),r)){for(a=x.map(Ft(l,"script"),Ht),o=a.length;c>u;u++)i=l,u!==f&&(i=x.clone(i,!0,!0),o&&x.merge(a,Ft(i,"script"))),t.call(this[u],i,u);if(o)for(s=a[a.length-1].ownerDocument,x.map(a,qt),u=0;o>u;u++)i=a[u],kt.test(i.type||"")&&!x._data(i,"globalEval")&&x.contains(s,i)&&(i.src?x._evalUrl(i.src):x.globalEval((i.text||i.textContent||i.innerHTML||"").replace(St,"")));l=r=null}return this}});function Lt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function Ht(e){return e.type=(null!==x.find.attr(e,"type"))+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function _t(e,t){var n,r=0;for(;null!=(n=e[r]);r++)x._data(n,"globalEval",!t||x._data(t[r],"globalEval"))}function Mt(e,t){if(1===t.nodeType&&x.hasData(e)){var n,r,i,o=x._data(e),a=x._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)x.event.add(t,n,s[n][r])}a.data&&(a.data=x.extend({},a.data))}}function Ot(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!x.support.noCloneEvent&&t[x.expando]){i=x._data(t);for(r in i.events)x.removeEvent(t,r,i.handle);t.removeAttribute(x.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),x.support.html5Clone&&e.innerHTML&&!x.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Ct.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=0,i=[],o=x(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),x(o[r])[t](n),h.apply(i,n.get());return this.pushStack(i)}});function Ft(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||x.nodeName(o,n)?s.push(o):x.merge(s,Ft(o,n));return n===t||n&&x.nodeName(e,n)?x.merge([e],s):s}function Bt(e){Ct.test(e.type)&&(e.defaultChecked=e.checked)}x.extend({clone:function(e,t,n){var r,i,o,a,s,l=x.contains(e.ownerDocument,e);if(x.support.html5Clone||x.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(x.support.noCloneEvent&&x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(r=Ft(o),s=Ft(e),a=0;null!=(i=s[a]);++a)r[a]&&Ot(i,r[a]);if(t)if(n)for(s=s||Ft(e),r=r||Ft(o),a=0;null!=(i=s[a]);a++)Mt(i,r[a]);else Mt(e,o);return r=Ft(o,"script"),r.length>0&&_t(r,!l&&Ft(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,l,u,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===x.type(o))x.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),l=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[l]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!x.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!x.support.tbody){o="table"!==l||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)x.nodeName(u=o.childNodes[i],"tbody")&&!u.childNodes.length&&o.removeChild(u)}x.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),x.support.appendChecked||x.grep(Ft(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===x.inArray(o,r))&&(a=x.contains(o.ownerDocument,o),s=Ft(f.appendChild(o),"script"),a&&_t(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,l=x.expando,u=x.cache,c=x.support.deleteExpando,f=x.event.special;for(;null!=(n=e[s]);s++)if((t||x.acceptData(n))&&(o=n[l],a=o&&u[o])){if(a.events)for(r in a.events)f[r]?x.event.remove(n,r):x.removeEvent(n,r,a.handle);
u[o]&&(delete u[o],c?delete n[l]:typeof n.removeAttribute!==i?n.removeAttribute(l):n[l]=null,p.push(o))}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}}),x.fn.extend({wrapAll:function(e){if(x.isFunction(e))return this.each(function(t){x(this).wrapAll(e.call(this,t))});if(this[0]){var t=x(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))}):this.each(function(){var t=x(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=x.isFunction(e);return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)}).end()}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+w+")(.*)$","i"),Yt=RegExp("^("+w+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+w+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=x._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=x._data(r,"olddisplay",ln(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&x._data(r,"olddisplay",i?n:x.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}x.fn.extend({css:function(e,n){return x.access(this,function(e,n,r){var i,o,a={},s=0;if(x.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=x.css(e,n[s],!1,o);return a}return r!==t?x.style(e,n,r):x.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){nn(this)?x(this).show():x(this).hide()})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":x.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,l=x.camelCase(n),u=e.style;if(n=x.cssProps[l]||(x.cssProps[l]=tn(u,l)),s=x.cssHooks[n]||x.cssHooks[l],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:u[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(x.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||x.cssNumber[l]||(r+="px"),x.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(u[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{u[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,l=x.camelCase(n);return n=x.cssProps[l]||(x.cssProps[l]=tn(e.style,l)),s=x.cssHooks[n]||x.cssHooks[l],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||x.isNumeric(o)?o||0:a):a}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s.getPropertyValue(n)||s[n]:t,u=e.style;return s&&(""!==l||x.contains(e.ownerDocument,e)||(l=x.style(e,n)),Yt.test(l)&&Ut.test(n)&&(i=u.width,o=u.minWidth,a=u.maxWidth,u.minWidth=u.maxWidth=u.width=l,l=s.width,u.width=i,u.minWidth=o,u.maxWidth=a)),l}):a.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s[n]:t,u=e.style;return null==l&&u&&u[n]&&(l=u[n]),Yt.test(l)&&!zt.test(n)&&(i=u.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),u.left="fontSize"===n?"1em":l,l=u.pixelLeft+"px",u.left=i,a&&(o.left=a)),""===l?"auto":l});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=x.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=x.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=x.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=x.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=x.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function ln(e){var t=a,n=Gt[e];return n||(n=un(e,t),"none"!==n&&n||(Pt=(Pt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=un(e,t),Pt.detach()),Gt[e]=n),n}function un(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");return n.remove(),r}x.each(["height","width"],function(e,n){x.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(x.css(e,"display"))?x.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)}}}),x.support.opacity||(x.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=x.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===x.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,n){return n?x.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,n){x.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?x(e).position()[n]+"px":r):t}}})}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!x.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||x.css(e,"display"))},x.expr.filters.visible=function(e){return!x.expr.filters.hidden(e)}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(x.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Ct.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),x.param=function(e,n){var r,i=[],o=function(e,t){t=x.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var mn,yn,vn=x.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Cn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Nn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=x.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=o.href}catch(Ln){yn=a.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(T)||[];if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(l){var u;return o[l]=!0,x.each(e[l]||[],function(e,l){var c=l(n,r,i);return"string"!=typeof c||a||o[c]?a?!(u=c):t:(n.dataTypes.unshift(c),s(c),!1)}),u}return s(n.dataTypes[0])||!o["*"]&&s("*")}function _n(e,n){var r,i,o=x.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&x.extend(!0,e,r),e}x.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,l=e.indexOf(" ");return l>=0&&(i=e.slice(l,e.length),e=e.slice(0,l)),x.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&x.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?x("<div>").append(x.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Cn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?_n(_n(e,x.ajaxSettings),t):_n(x.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,l,u,c,p=x.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?x(f):x.event,h=x.Deferred(),g=x.Callbacks("once memory"),m=p.statusCode||{},y={},v={},b=0,w="canceled",C={readyState:0,getResponseHeader:function(e){var t;if(2===b){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===b?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return b||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return b||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>b)for(t in e)m[t]=[m[t],e[t]];else C.always(e[C.status]);return this},abort:function(e){var t=e||w;return u&&u.abort(t),k(0,t),this}};if(h.promise(C).complete=g.add,C.success=C.done,C.error=C.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=x.trim(p.dataType||"*").toLowerCase().match(T)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?"80":"443"))===(mn[3]||("http:"===mn[1]?"80":"443")))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=x.param(p.data,p.traditional)),qn(An,p,n,C),2===b)return C;l=p.global,l&&0===x.active++&&x.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Nn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(x.lastModified[o]&&C.setRequestHeader("If-Modified-Since",x.lastModified[o]),x.etag[o]&&C.setRequestHeader("If-None-Match",x.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&C.setRequestHeader("Content-Type",p.contentType),C.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)C.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,C,p)===!1||2===b))return C.abort();w="abort";for(i in{success:1,error:1,complete:1})C[i](p[i]);if(u=qn(jn,p,n,C)){C.readyState=1,l&&d.trigger("ajaxSend",[C,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){C.abort("timeout")},p.timeout));try{b=1,u.send(y,k)}catch(N){if(!(2>b))throw N;k(-1,N)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,N=n;2!==b&&(b=2,s&&clearTimeout(s),u=t,a=i||"",C.readyState=e>0?4:0,c=e>=200&&300>e||304===e,r&&(w=Mn(p,C,r)),w=On(p,w,C,c),c?(p.ifModified&&(T=C.getResponseHeader("Last-Modified"),T&&(x.lastModified[o]=T),T=C.getResponseHeader("etag"),T&&(x.etag[o]=T)),204===e||"HEAD"===p.type?N="nocontent":304===e?N="notmodified":(N=w.state,y=w.data,v=w.error,c=!v)):(v=N,(e||!N)&&(N="error",0>e&&(e=0))),C.status=e,C.statusText=(n||N)+"",c?h.resolveWith(f,[y,N,C]):h.rejectWith(f,[C,N,v]),C.statusCode(m),m=t,l&&d.trigger(c?"ajaxSuccess":"ajaxError",[C,p,c?y:v]),g.fireWith(f,[C,N]),l&&(d.trigger("ajaxComplete",[C,p]),--x.active||x.event.trigger("ajaxStop")))}return C},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,n){return x.get(e,t,n,"script")}}),x.each(["get","post"],function(e,n){x[n]=function(e,r,i,o){return x.isFunction(r)&&(o=o||i,i=r,r=t),x.ajax({url:e,type:n,dataType:o,data:r,success:i})}});function Mn(e,n,r){var i,o,a,s,l=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in l)if(l[s]&&l[s].test(o)){u.unshift(s);break}if(u[0]in r)a=u[0];else{for(s in r){if(!u[0]||e.converters[s+" "+u[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==u[0]&&u.unshift(a),r[a]):t}function On(e,t,n,r){var i,o,a,s,l,u={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)u[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!l&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=o,o=c.shift())if("*"===o)o=l;else if("*"!==l&&l!==o){if(a=u[l+" "+o]||u["* "+o],!a)for(i in u)if(s=i.split(" "),s[1]===o&&(a=u[l+" "+s[0]]||u["* "+s[0]])){a===!0?a=u[i]:u[i]!==!0&&(o=s[0],c.unshift(s[1]));break}if(a!==!0)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(p){return{state:"parsererror",error:a?p:"No conversion from "+l+" to "+o}}}return{state:"success",data:t}}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),x.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=a.head||x("head")[0]||a.documentElement;return{send:function(t,i){n=a.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var Fn=[],Bn=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Fn.pop()||x.expando+"_"+vn++;return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,l=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return l||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=x.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,l?n[l]=n[l].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||x.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,Fn.push(o)),s&&x.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}x.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=x.ajaxSettings.xhr(),x.support.cors=!!Rn&&"withCredentials"in Rn,Rn=x.support.ajax=!!Rn,Rn&&x.ajaxTransport(function(n){if(!n.crossDomain||x.support.cors){var r;return{send:function(i,o){var a,s,l=n.xhr();if(n.username?l.open(n.type,n.url,n.async,n.username,n.password):l.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)l[s]=n.xhrFields[s];n.mimeType&&l.overrideMimeType&&l.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)l.setRequestHeader(s,i[s])}catch(u){}l.send(n.hasContent&&n.data||null),r=function(e,i){var s,u,c,p;try{if(r&&(i||4===l.readyState))if(r=t,a&&(l.onreadystatechange=x.noop,$n&&delete Pn[a]),i)4!==l.readyState&&l.abort();else{p={},s=l.status,u=l.getAllResponseHeaders(),"string"==typeof l.responseText&&(p.text=l.responseText);try{c=l.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,u)},n.async?4===l.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},x(e).unload($n)),Pn[a]=r),l.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+w+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Yn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),a=(x.cssNumber[e]||"px"!==o&&+r)&&Yn.exec(x.css(n.elem,e)),s=1,l=20;if(a&&a[3]!==o){o=o||a[3],i=i||[],a=+r||1;do s=s||".5",a/=s,x.style(n.elem,e,a+o);while(s!==(s=n.cur()/r)&&1!==s&&--l)}return i&&(a=n.start=+a||+r||0,n.unit=o,n.end=i[1]?a+(i[1]+1)*i[2]:+i[2]),n}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=x.now()}function Zn(e,t,n){var r,i=(Qn[t]||[]).concat(Qn["*"]),o=0,a=i.length;for(;a>o;o++)if(r=i[o].call(n,t,e))return r}function er(e,t,n){var r,i,o=0,a=Gn.length,s=x.Deferred().always(function(){delete l.elem}),l=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,u.startTime+u.duration-t),r=n/u.duration||0,o=1-r,a=0,l=u.tweens.length;for(;l>a;a++)u.tweens[a].run(o);return s.notifyWith(e,[u,o,n]),1>o&&l?n:(s.resolveWith(e,[u]),!1)},u=s.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,u.opts,t,n,u.opts.specialEasing[t]||u.opts.easing);return u.tweens.push(r),r},stop:function(t){var n=0,r=t?u.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)u.tweens[n].run(1);return t?s.resolveWith(e,[u,t]):s.rejectWith(e,[u,t]),this}}),c=u.props;for(tr(c,u.opts.specialEasing);a>o;o++)if(r=Gn[o].call(u,e,c,u.opts))return r;return x.map(c,Zn,u),x.isFunction(u.opts.start)&&u.opts.start.call(e,u),x.fx.timer(x.extend(l,{elem:e,anim:u,queue:u.opts.queue})),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always)}function tr(e,t){var n,r,i,o,a;for(n in e)if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),a=x.cssHooks[r],a&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}x.Animation=x.extend(er,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,l,u=this,c={},p=e.style,f=e.nodeType&&nn(e),d=x._data(e,"fxshow");n.queue||(s=x._queueHooks(e,"fx"),null==s.unqueued&&(s.unqueued=0,l=s.empty.fire,s.empty.fire=function(){s.unqueued||l()}),s.unqueued++,u.always(function(){u.always(function(){s.unqueued--,x.queue(e,"fx").length||s.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(x.support.inlineBlockNeedsLayout&&"inline"!==ln(e.nodeName)?p.zoom=1:p.display="inline-block")),n.overflow&&(p.overflow="hidden",x.support.shrinkWrapBlocks||u.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],Vn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(f?"hide":"show"))continue;c[r]=d&&d[r]||x.style(e,r)}if(!x.isEmptyObject(c)){d?"hidden"in d&&(f=d.hidden):d=x._data(e,"fxshow",{}),o&&(d.hidden=!f),f?x(e).show():u.done(function(){x(e).hide()}),u.done(function(){var t;x._removeData(e,"fxshow");for(t in c)x.style(e,t,c[t])});for(r in c)a=Zn(f?d[r]:0,r,u),r in d||(d[r]=a.start,f&&(a.end=a.start,a.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}x.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),a=function(){var t=er(this,x.extend({},e),o);(i||x._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=x.timers,a=x._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&x.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=x._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,a=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}x.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)},r},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},x.timers=[],x.fx=rr.prototype.init,x.fx.tick=function(){var e,n=x.timers,r=0;for(Xn=x.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||x.fx.stop(),Xn=t},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()},x.fx.interval=13,x.fx.start=function(){Un||(Un=setInterval(x.fx.tick,x.fx.interval))},x.fx.stop=function(){clearInterval(Un),Un=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem}).length}),x.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){x.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,x.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},x.offset={setOffset:function(e,t,n){var r=x.css(e,"position");"static"===r&&(e.style.position="relative");var i=x(e),o=i.offset(),a=x.css(e,"top"),s=x.css(e,"left"),l=("absolute"===r||"fixed"===r)&&x.inArray("auto",[a,s])>-1,u={},c={},p,f;l?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),x.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(u.top=t.top-o.top+p),null!=t.left&&(u.left=t.left-o.left+f),"using"in t?t.using.call(e,u):i.css(u)}},x.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===x.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(n=e.offset()),n.top+=x.css(e[0],"borderTopWidth",!0),n.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-x.css(r,"marginTop",!0),left:t.left-n.left-x.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position"))e=e.offsetParent;return e||s})}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);x.fn[e]=function(i){return x.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?x(a).scrollLeft():o,r?o:x(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return x.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}x.each({Height:"height",Width:"width"},function(e,n){x.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){x.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return x.access(this,function(n,r,i){var o;return x.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?x.css(n,r,s):x.style(n,r,i,s)},n,a?i:t,a,null)}})}),x.fn.size=function(){return this.length},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:(e.jQuery=e.$=x,"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}))})(window);
(function($, undefined) {

/**
 * Unobtrusive scripting adapter for jQuery
 * https://github.com/rails/jquery-ujs
 *
 * Requires jQuery 1.8.0 or later.
 *
 * Released under the MIT license
 *
 */

  // Cut down on the number of issues from people inadvertently including jquery_ujs twice
  // by detecting and raising an error when it happens.
  if ( $.rails !== undefined ) {
    $.error('jquery-ujs has already been loaded!');
  }

  // Shorthand to make it a little easier to call public rails functions from within rails.js
  var rails;
  var $document = $(document);

  $.rails = rails = {
    // Link elements bound by jquery-ujs
    linkClickSelector: 'a[data-confirm], a[data-method], a[data-remote], a[data-disable-with], a[data-disable]',

    // Button elements bound by jquery-ujs
    buttonClickSelector: 'button[data-remote]:not(form button), button[data-confirm]:not(form button)',

    // Select elements bound by jquery-ujs
    inputChangeSelector: 'select[data-remote], input[data-remote], textarea[data-remote]',

    // Form elements bound by jquery-ujs
    formSubmitSelector: 'form',

    // Form input elements bound by jquery-ujs
    formInputClickSelector: 'form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])',

    // Form input elements disabled during form submission
    disableSelector: 'input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled',

    // Form input elements re-enabled after form submission
    enableSelector: 'input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled',

    // Form required input elements
    requiredInputSelector: 'input[name][required]:not([disabled]),textarea[name][required]:not([disabled])',

    // Form file input elements
    fileInputSelector: 'input[type=file]',

    // Link onClick disable selector with possible reenable after remote submission
    linkDisableSelector: 'a[data-disable-with], a[data-disable]',

    // Button onClick disable selector with possible reenable after remote submission
    buttonDisableSelector: 'button[data-remote][data-disable-with], button[data-remote][data-disable]',

    // Make sure that every Ajax request sends the CSRF token
    CSRFProtection: function(xhr) {
      var token = $('meta[name="csrf-token"]').attr('content');
      if (token) xhr.setRequestHeader('X-CSRF-Token', token);
    },

    // making sure that all forms have actual up-to-date token(cached forms contain old one)
    refreshCSRFTokens: function(){
      var csrfToken = $('meta[name=csrf-token]').attr('content');
      var csrfParam = $('meta[name=csrf-param]').attr('content');
      $('form input[name="' + csrfParam + '"]').val(csrfToken);
    },

    // Triggers an event on an element and returns false if the event result is false
    fire: function(obj, name, data) {
      var event = $.Event(name);
      obj.trigger(event, data);
      return event.result !== false;
    },

    // Default confirm dialog, may be overridden with custom confirm dialog in $.rails.confirm
    confirm: function(message) {
      return confirm(message);
    },

    // Default ajax function, may be overridden with custom function in $.rails.ajax
    ajax: function(options) {
      return $.ajax(options);
    },

    // Default way to get an element's href. May be overridden at $.rails.href.
    href: function(element) {
      return element[0].href;
    },

    // Submits "remote" forms and links with ajax
    handleRemote: function(element) {
      var method, url, data, withCredentials, dataType, options;

      if (rails.fire(element, 'ajax:before')) {
        withCredentials = element.data('with-credentials') || null;
        dataType = element.data('type') || ($.ajaxSettings && $.ajaxSettings.dataType);

        if (element.is('form')) {
          method = element.attr('method');
          url = element.attr('action');
          data = element.serializeArray();
          // memoized value from clicked submit button
          var button = element.data('ujs:submit-button');
          if (button) {
            data.push(button);
            element.data('ujs:submit-button', null);
          }
        } else if (element.is(rails.inputChangeSelector)) {
          method = element.data('method');
          url = element.data('url');
          data = element.serialize();
          if (element.data('params')) data = data + "&" + element.data('params');
        } else if (element.is(rails.buttonClickSelector)) {
          method = element.data('method') || 'get';
          url = element.data('url');
          data = element.serialize();
          if (element.data('params')) data = data + "&" + element.data('params');
        } else {
          method = element.data('method');
          url = rails.href(element);
          data = element.data('params') || null;
        }

        options = {
          type: method || 'GET', data: data, dataType: dataType,
          // stopping the "ajax:beforeSend" event will cancel the ajax request
          beforeSend: function(xhr, settings) {
            if (settings.dataType === undefined) {
              xhr.setRequestHeader('accept', '*/*;q=0.5, ' + settings.accepts.script);
            }
            if (rails.fire(element, 'ajax:beforeSend', [xhr, settings])) {
              element.trigger('ajax:send', xhr);
            } else {
              return false;
            }
          },
          success: function(data, status, xhr) {
            element.trigger('ajax:success', [data, status, xhr]);
          },
          complete: function(xhr, status) {
            element.trigger('ajax:complete', [xhr, status]);
          },
          error: function(xhr, status, error) {
            element.trigger('ajax:error', [xhr, status, error]);
          },
          crossDomain: rails.isCrossDomain(url)
        };

        // There is no withCredentials for IE6-8 when
        // "Enable native XMLHTTP support" is disabled
        if (withCredentials) {
          options.xhrFields = {
            withCredentials: withCredentials
          };
        }

        // Only pass url to `ajax` options if not blank
        if (url) { options.url = url; }

        return rails.ajax(options);
      } else {
        return false;
      }
    },

    // Determines if the request is a cross domain request.
    isCrossDomain: function(url) {
      var originAnchor = document.createElement("a");
      originAnchor.href = location.href;
      var urlAnchor = document.createElement("a");

      try {
        urlAnchor.href = url;
        // This is a workaround to a IE bug.
        urlAnchor.href = urlAnchor.href;

        // Make sure that the browser parses the URL and that the protocols and hosts match.
        return !urlAnchor.protocol || !urlAnchor.host ||
          (originAnchor.protocol + "//" + originAnchor.host !==
            urlAnchor.protocol + "//" + urlAnchor.host);
      } catch (e) {
        // If there is an error parsing the URL, assume it is crossDomain.
        return true;
      }
    },

    // Handles "data-method" on links such as:
    // <a href="/users/5" data-method="delete" rel="nofollow" data-confirm="Are you sure?">Delete</a>
    handleMethod: function(link) {
      var href = rails.href(link),
        method = link.data('method'),
        target = link.attr('target'),
        csrfToken = $('meta[name=csrf-token]').attr('content'),
        csrfParam = $('meta[name=csrf-param]').attr('content'),
        form = $('<form method="post" action="' + href + '"></form>'),
        metadataInput = '<input name="_method" value="' + method + '" type="hidden" />';

      if (csrfParam !== undefined && csrfToken !== undefined && !rails.isCrossDomain(href)) {
        metadataInput += '<input name="' + csrfParam + '" value="' + csrfToken + '" type="hidden" />';
      }

      if (target) { form.attr('target', target); }

      form.hide().append(metadataInput).appendTo('body');
      form.submit();
    },

    // Helper function that returns form elements that match the specified CSS selector
    // If form is actually a "form" element this will return associated elements outside the from that have
    // the html form attribute set
    formElements: function(form, selector) {
      return form.is('form') ? $(form[0].elements).filter(selector) : form.find(selector);
    },

    /* Disables form elements:
      - Caches element value in 'ujs:enable-with' data store
      - Replaces element text with value of 'data-disable-with' attribute
      - Sets disabled property to true
    */
    disableFormElements: function(form) {
      rails.formElements(form, rails.disableSelector).each(function() {
        rails.disableFormElement($(this));
      });
    },

    disableFormElement: function(element) {
      var method, replacement;

      method = element.is('button') ? 'html' : 'val';
      replacement = element.data('disable-with');

      element.data('ujs:enable-with', element[method]());
      if (replacement !== undefined) {
        element[method](replacement);
      }

      element.prop('disabled', true);
    },

    /* Re-enables disabled form elements:
      - Replaces element text with cached value from 'ujs:enable-with' data store (created in `disableFormElements`)
      - Sets disabled property to false
    */
    enableFormElements: function(form) {
      rails.formElements(form, rails.enableSelector).each(function() {
        rails.enableFormElement($(this));
      });
    },

    enableFormElement: function(element) {
      var method = element.is('button') ? 'html' : 'val';
      if (element.data('ujs:enable-with')) element[method](element.data('ujs:enable-with'));
      element.prop('disabled', false);
    },

   /* For 'data-confirm' attribute:
      - Fires `confirm` event
      - Shows the confirmation dialog
      - Fires the `confirm:complete` event

      Returns `true` if no function stops the chain and user chose yes; `false` otherwise.
      Attaching a handler to the element's `confirm` event that returns a `falsy` value cancels the confirmation dialog.
      Attaching a handler to the element's `confirm:complete` event that returns a `falsy` value makes this function
      return false. The `confirm:complete` event is fired whether or not the user answered true or false to the dialog.
   */
    allowAction: function(element) {
      var message = element.data('confirm'),
          answer = false, callback;
      if (!message) { return true; }

      if (rails.fire(element, 'confirm')) {
        answer = rails.confirm(message);
        callback = rails.fire(element, 'confirm:complete', [answer]);
      }
      return answer && callback;
    },

    // Helper function which checks for blank inputs in a form that match the specified CSS selector
    blankInputs: function(form, specifiedSelector, nonBlank) {
      var inputs = $(), input, valueToCheck,
          selector = specifiedSelector || 'input,textarea',
          allInputs = form.find(selector);

      allInputs.each(function() {
        input = $(this);
        valueToCheck = input.is('input[type=checkbox],input[type=radio]') ? input.is(':checked') : input.val();
        // If nonBlank and valueToCheck are both truthy, or nonBlank and valueToCheck are both falsey
        if (!valueToCheck === !nonBlank) {

          // Don't count unchecked required radio if other radio with same name is checked
          if (input.is('input[type=radio]') && allInputs.filter('input[type=radio]:checked[name="' + input.attr('name') + '"]').length) {
            return true; // Skip to next input
          }

          inputs = inputs.add(input);
        }
      });
      return inputs.length ? inputs : false;
    },

    // Helper function which checks for non-blank inputs in a form that match the specified CSS selector
    nonBlankInputs: function(form, specifiedSelector) {
      return rails.blankInputs(form, specifiedSelector, true); // true specifies nonBlank
    },

    // Helper function, needed to provide consistent behavior in IE
    stopEverything: function(e) {
      $(e.target).trigger('ujs:everythingStopped');
      e.stopImmediatePropagation();
      return false;
    },

    //  replace element's html with the 'data-disable-with' after storing original html
    //  and prevent clicking on it
    disableElement: function(element) {
      var replacement = element.data('disable-with');

      element.data('ujs:enable-with', element.html()); // store enabled state
      if (replacement !== undefined) {
        element.html(replacement);
      }

      element.bind('click.railsDisable', function(e) { // prevent further clicking
        return rails.stopEverything(e);
      });
    },

    // restore element to its original state which was disabled by 'disableElement' above
    enableElement: function(element) {
      if (element.data('ujs:enable-with') !== undefined) {
        element.html(element.data('ujs:enable-with')); // set to old enabled state
        element.removeData('ujs:enable-with'); // clean up cache
      }
      element.unbind('click.railsDisable'); // enable element
    }
  };

  if (rails.fire($document, 'rails:attachBindings')) {

    $.ajaxPrefilter(function(options, originalOptions, xhr){ if ( !options.crossDomain ) { rails.CSRFProtection(xhr); }});

    // This event works the same as the load event, except that it fires every
    // time the page is loaded.
    //
    // See https://github.com/rails/jquery-ujs/issues/357
    // See https://developer.mozilla.org/en-US/docs/Using_Firefox_1.5_caching
    $(window).on("pageshow.rails", function () {
      $($.rails.enableSelector).each(function () {
        var element = $(this);

        if (element.data("ujs:enable-with")) {
          $.rails.enableFormElement(element);
        }
      });

      $($.rails.linkDisableSelector).each(function () {
        var element = $(this);

        if (element.data("ujs:enable-with")) {
          $.rails.enableElement(element);
        }
      });
    });

    $document.delegate(rails.linkDisableSelector, 'ajax:complete', function() {
        rails.enableElement($(this));
    });

    $document.delegate(rails.buttonDisableSelector, 'ajax:complete', function() {
        rails.enableFormElement($(this));
    });

    $document.delegate(rails.linkClickSelector, 'click.rails', function(e) {
      var link = $(this), method = link.data('method'), data = link.data('params'), metaClick = e.metaKey || e.ctrlKey;
      if (!rails.allowAction(link)) return rails.stopEverything(e);

      if (!metaClick && link.is(rails.linkDisableSelector)) rails.disableElement(link);

      if (link.data('remote') !== undefined) {
        if (metaClick && (!method || method === 'GET') && !data) { return true; }

        var handleRemote = rails.handleRemote(link);
        // response from rails.handleRemote() will either be false or a deferred object promise.
        if (handleRemote === false) {
          rails.enableElement(link);
        } else {
          handleRemote.fail( function() { rails.enableElement(link); } );
        }
        return false;

      } else if (method) {
        rails.handleMethod(link);
        return false;
      }
    });

    $document.delegate(rails.buttonClickSelector, 'click.rails', function(e) {
      var button = $(this);

      if (!rails.allowAction(button)) return rails.stopEverything(e);

      if (button.is(rails.buttonDisableSelector)) rails.disableFormElement(button);

      var handleRemote = rails.handleRemote(button);
      // response from rails.handleRemote() will either be false or a deferred object promise.
      if (handleRemote === false) {
        rails.enableFormElement(button);
      } else {
        handleRemote.fail( function() { rails.enableFormElement(button); } );
      }
      return false;
    });

    $document.delegate(rails.inputChangeSelector, 'change.rails', function(e) {
      var link = $(this);
      if (!rails.allowAction(link)) return rails.stopEverything(e);

      rails.handleRemote(link);
      return false;
    });

    $document.delegate(rails.formSubmitSelector, 'submit.rails', function(e) {
      var form = $(this),
        remote = form.data('remote') !== undefined,
        blankRequiredInputs,
        nonBlankFileInputs;

      if (!rails.allowAction(form)) return rails.stopEverything(e);

      // skip other logic when required values are missing or file upload is present
      if (form.attr('novalidate') == undefined) {
        blankRequiredInputs = rails.blankInputs(form, rails.requiredInputSelector);
        if (blankRequiredInputs && rails.fire(form, 'ajax:aborted:required', [blankRequiredInputs])) {
          return rails.stopEverything(e);
        }
      }

      if (remote) {
        nonBlankFileInputs = rails.nonBlankInputs(form, rails.fileInputSelector);
        if (nonBlankFileInputs) {
          // slight timeout so that the submit button gets properly serialized
          // (make it easy for event handler to serialize form without disabled values)
          setTimeout(function(){ rails.disableFormElements(form); }, 13);
          var aborted = rails.fire(form, 'ajax:aborted:file', [nonBlankFileInputs]);

          // re-enable form elements if event bindings return false (canceling normal form submission)
          if (!aborted) { setTimeout(function(){ rails.enableFormElements(form); }, 13); }

          return aborted;
        }

        rails.handleRemote(form);
        return false;

      } else {
        // slight timeout so that the submit button gets properly serialized
        setTimeout(function(){ rails.disableFormElements(form); }, 13);
      }
    });

    $document.delegate(rails.formInputClickSelector, 'click.rails', function(event) {
      var button = $(this);

      if (!rails.allowAction(button)) return rails.stopEverything(event);

      // register the pressed submit button
      var name = button.attr('name'),
        data = name ? {name:name, value:button.val()} : null;

      button.closest('form').data('ujs:submit-button', data);
    });

    $document.delegate(rails.formSubmitSelector, 'ajax:send.rails', function(event) {
      if (this == event.target) rails.disableFormElements($(this));
    });

    $document.delegate(rails.formSubmitSelector, 'ajax:complete.rails', function(event) {
      if (this == event.target) rails.enableFormElements($(this));
    });

    $(function(){
      rails.refreshCSRFTokens();
    });
  }

})( jQuery );
/* ===================================================
 * bootstrap-transition.js v2.3.2
 * http://twitter.github.com/bootstrap/javascript.html#transitions
 * ===================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */



!function ($) {

  "use strict"; // jshint ;_;


  /* CSS TRANSITION SUPPORT (http://www.modernizr.com/)
   * ======================================================= */

  $(function () {

    $.support.transition = (function () {

      var transitionEnd = (function () {

        var el = document.createElement('bootstrap')
          , transEndEventNames = {
               'WebkitTransition' : 'webkitTransitionEnd'
            ,  'MozTransition'    : 'transitionend'
            ,  'OTransition'      : 'oTransitionEnd otransitionend'
            ,  'transition'       : 'transitionend'
            }
          , name

        for (name in transEndEventNames){
          if (el.style[name] !== undefined) {
            return transEndEventNames[name]
          }
        }

      }())

      return transitionEnd && {
        end: transitionEnd
      }

    })()

  })

}(window.jQuery);
/* ==========================================================
 * bootstrap-affix.js v2.3.2
 * http://twitter.github.com/bootstrap/javascript.html#affix
 * ==========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */



!function ($) {

  "use strict"; // jshint ;_;


 /* AFFIX CLASS DEFINITION
  * ====================== */

  var Affix = function (element, options) {
    this.options = $.extend({}, $.fn.affix.defaults, options)
    this.$window = $(window)
      .on('scroll.affix.data-api', $.proxy(this.checkPosition, this))
      .on('click.affix.data-api',  $.proxy(function () { setTimeout($.proxy(this.checkPosition, this), 1) }, this))
    this.$element = $(element)
    this.checkPosition()
  }

  Affix.prototype.checkPosition = function () {
    if (!this.$element.is(':visible')) return

    var scrollHeight = $(document).height()
      , scrollTop = this.$window.scrollTop()
      , position = this.$element.offset()
      , offset = this.options.offset
      , offsetBottom = offset.bottom
      , offsetTop = offset.top
      , reset = 'affix affix-top affix-bottom'
      , affix

    if (typeof offset != 'object') offsetBottom = offsetTop = offset
    if (typeof offsetTop == 'function') offsetTop = offset.top()
    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom()

    affix = this.unpin != null && (scrollTop + this.unpin <= position.top) ?
      false    : offsetBottom != null && (position.top + this.$element.height() >= scrollHeight - offsetBottom) ?
      'bottom' : offsetTop != null && scrollTop <= offsetTop ?
      'top'    : false

    if (this.affixed === affix) return

    this.affixed = affix
    this.unpin = affix == 'bottom' ? position.top - scrollTop : null

    this.$element.removeClass(reset).addClass('affix' + (affix ? '-' + affix : ''))
  }


 /* AFFIX PLUGIN DEFINITION
  * ======================= */

  var old = $.fn.affix

  $.fn.affix = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('affix')
        , options = typeof option == 'object' && option
      if (!data) $this.data('affix', (data = new Affix(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.affix.Constructor = Affix

  $.fn.affix.defaults = {
    offset: 0
  }


 /* AFFIX NO CONFLICT
  * ================= */

  $.fn.affix.noConflict = function () {
    $.fn.affix = old
    return this
  }


 /* AFFIX DATA-API
  * ============== */

  $(window).on('load', function () {
    $('[data-spy="affix"]').each(function () {
      var $spy = $(this)
        , data = $spy.data()

      data.offset = data.offset || {}

      data.offsetBottom && (data.offset.bottom = data.offsetBottom)
      data.offsetTop && (data.offset.top = data.offsetTop)

      $spy.affix(data)
    })
  })


}(window.jQuery);
/* ==========================================================
 * bootstrap-alert.js v2.3.2
 * http://twitter.github.com/bootstrap/javascript.html#alerts
 * ==========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */



!function ($) {

  "use strict"; // jshint ;_;


 /* ALERT CLASS DEFINITION
  * ====================== */

  var dismiss = '[data-dismiss="alert"]'
    , Alert = function (el) {
        $(el).on('click', dismiss, this.close)
      }

  Alert.prototype.close = function (e) {
    var $this = $(this)
      , selector = $this.attr('data-target')
      , $parent

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
    }

    $parent = $(selector)

    e && e.preventDefault()

    $parent.length || ($parent = $this.hasClass('alert') ? $this : $this.parent())

    $parent.trigger(e = $.Event('close'))

    if (e.isDefaultPrevented()) return

    $parent.removeClass('in')

    function removeElement() {
      $parent
        .trigger('closed')
        .remove()
    }

    $.support.transition && $parent.hasClass('fade') ?
      $parent.on($.support.transition.end, removeElement) :
      removeElement()
  }


 /* ALERT PLUGIN DEFINITION
  * ======================= */

  var old = $.fn.alert

  $.fn.alert = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('alert')
      if (!data) $this.data('alert', (data = new Alert(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  $.fn.alert.Constructor = Alert


 /* ALERT NO CONFLICT
  * ================= */

  $.fn.alert.noConflict = function () {
    $.fn.alert = old
    return this
  }


 /* ALERT DATA-API
  * ============== */

  $(document).on('click.alert.data-api', dismiss, Alert.prototype.close)

}(window.jQuery);
/* ============================================================
 * bootstrap-button.js v2.3.2
 * http://twitter.github.com/bootstrap/javascript.html#buttons
 * ============================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */



!function ($) {

  "use strict"; // jshint ;_;


 /* BUTTON PUBLIC CLASS DEFINITION
  * ============================== */

  var Button = function (element, options) {
    this.$element = $(element)
    this.options = $.extend({}, $.fn.button.defaults, options)
  }

  Button.prototype.setState = function (state) {
    var d = 'disabled'
      , $el = this.$element
      , data = $el.data()
      , val = $el.is('input') ? 'val' : 'html'

    state = state + 'Text'
    data.resetText || $el.data('resetText', $el[val]())

    $el[val](data[state] || this.options[state])

    // push to event loop to allow forms to submit
    setTimeout(function () {
      state == 'loadingText' ?
        $el.addClass(d).attr(d, d) :
        $el.removeClass(d).removeAttr(d)
    }, 0)
  }

  Button.prototype.toggle = function () {
    var $parent = this.$element.closest('[data-toggle="buttons-radio"]')

    $parent && $parent
      .find('.active')
      .removeClass('active')

    this.$element.toggleClass('active')
  }


 /* BUTTON PLUGIN DEFINITION
  * ======================== */

  var old = $.fn.button

  $.fn.button = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('button')
        , options = typeof option == 'object' && option
      if (!data) $this.data('button', (data = new Button(this, options)))
      if (option == 'toggle') data.toggle()
      else if (option) data.setState(option)
    })
  }

  $.fn.button.defaults = {
    loadingText: 'loading...'
  }

  $.fn.button.Constructor = Button


 /* BUTTON NO CONFLICT
  * ================== */

  $.fn.button.noConflict = function () {
    $.fn.button = old
    return this
  }


 /* BUTTON DATA-API
  * =============== */

  $(document).on('click.button.data-api', '[data-toggle^=button]', function (e) {
    var $btn = $(e.target)
    if (!$btn.hasClass('btn')) $btn = $btn.closest('.btn')
    $btn.button('toggle')
  })

}(window.jQuery);
/* ==========================================================
 * bootstrap-carousel.js v2.3.2
 * http://twitter.github.com/bootstrap/javascript.html#carousel
 * ==========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */



!function ($) {

  "use strict"; // jshint ;_;


 /* CAROUSEL CLASS DEFINITION
  * ========================= */

  var Carousel = function (element, options) {
    this.$element = $(element)
    this.$indicators = this.$element.find('.carousel-indicators')
    this.options = options
    this.options.pause == 'hover' && this.$element
      .on('mouseenter', $.proxy(this.pause, this))
      .on('mouseleave', $.proxy(this.cycle, this))
  }

  Carousel.prototype = {

    cycle: function (e) {
      if (!e) this.paused = false
      if (this.interval) clearInterval(this.interval);
      this.options.interval
        && !this.paused
        && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))
      return this
    }

  , getActiveIndex: function () {
      this.$active = this.$element.find('.item.active')
      this.$items = this.$active.parent().children()
      return this.$items.index(this.$active)
    }

  , to: function (pos) {
      var activeIndex = this.getActiveIndex()
        , that = this

      if (pos > (this.$items.length - 1) || pos < 0) return

      if (this.sliding) {
        return this.$element.one('slid', function () {
          that.to(pos)
        })
      }

      if (activeIndex == pos) {
        return this.pause().cycle()
      }

      return this.slide(pos > activeIndex ? 'next' : 'prev', $(this.$items[pos]))
    }

  , pause: function (e) {
      if (!e) this.paused = true
      if (this.$element.find('.next, .prev').length && $.support.transition.end) {
        this.$element.trigger($.support.transition.end)
        this.cycle(true)
      }
      clearInterval(this.interval)
      this.interval = null
      return this
    }

  , next: function () {
      if (this.sliding) return
      return this.slide('next')
    }

  , prev: function () {
      if (this.sliding) return
      return this.slide('prev')
    }

  , slide: function (type, next) {
      var $active = this.$element.find('.item.active')
        , $next = next || $active[type]()
        , isCycling = this.interval
        , direction = type == 'next' ? 'left' : 'right'
        , fallback  = type == 'next' ? 'first' : 'last'
        , that = this
        , e

      this.sliding = true

      isCycling && this.pause()

      $next = $next.length ? $next : this.$element.find('.item')[fallback]()

      e = $.Event('slide', {
        relatedTarget: $next[0]
      , direction: direction
      })

      if ($next.hasClass('active')) return

      if (this.$indicators.length) {
        this.$indicators.find('.active').removeClass('active')
        this.$element.one('slid', function () {
          var $nextIndicator = $(that.$indicators.children()[that.getActiveIndex()])
          $nextIndicator && $nextIndicator.addClass('active')
        })
      }

      if ($.support.transition && this.$element.hasClass('slide')) {
        this.$element.trigger(e)
        if (e.isDefaultPrevented()) return
        $next.addClass(type)
        $next[0].offsetWidth // force reflow
        $active.addClass(direction)
        $next.addClass(direction)
        this.$element.one($.support.transition.end, function () {
          $next.removeClass([type, direction].join(' ')).addClass('active')
          $active.removeClass(['active', direction].join(' '))
          that.sliding = false
          setTimeout(function () { that.$element.trigger('slid') }, 0)
        })
      } else {
        this.$element.trigger(e)
        if (e.isDefaultPrevented()) return
        $active.removeClass('active')
        $next.addClass('active')
        this.sliding = false
        this.$element.trigger('slid')
      }

      isCycling && this.cycle()

      return this
    }

  }


 /* CAROUSEL PLUGIN DEFINITION
  * ========================== */

  var old = $.fn.carousel

  $.fn.carousel = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('carousel')
        , options = $.extend({}, $.fn.carousel.defaults, typeof option == 'object' && option)
        , action = typeof option == 'string' ? option : options.slide
      if (!data) $this.data('carousel', (data = new Carousel(this, options)))
      if (typeof option == 'number') data.to(option)
      else if (action) data[action]()
      else if (options.interval) data.pause().cycle()
    })
  }

  $.fn.carousel.defaults = {
    interval: 5000
  , pause: 'hover'
  }

  $.fn.carousel.Constructor = Carousel


 /* CAROUSEL NO CONFLICT
  * ==================== */

  $.fn.carousel.noConflict = function () {
    $.fn.carousel = old
    return this
  }

 /* CAROUSEL DATA-API
  * ================= */

  $(document).on('click.carousel.data-api', '[data-slide], [data-slide-to]', function (e) {
    var $this = $(this), href
      , $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) //strip for ie7
      , options = $.extend({}, $target.data(), $this.data())
      , slideIndex

    $target.carousel(options)

    if (slideIndex = $this.attr('data-slide-to')) {
      $target.data('carousel').pause().to(slideIndex).cycle()
    }

    e.preventDefault()
  })

}(window.jQuery);
/* =============================================================
 * bootstrap-collapse.js v2.3.2
 * http://twitter.github.com/bootstrap/javascript.html#collapse
 * =============================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */



!function ($) {

  "use strict"; // jshint ;_;


 /* COLLAPSE PUBLIC CLASS DEFINITION
  * ================================ */

  var Collapse = function (element, options) {
    this.$element = $(element)
    this.options = $.extend({}, $.fn.collapse.defaults, options)

    if (this.options.parent) {
      this.$parent = $(this.options.parent)
    }

    this.options.toggle && this.toggle()
  }

  Collapse.prototype = {

    constructor: Collapse

  , dimension: function () {
      var hasWidth = this.$element.hasClass('width')
      return hasWidth ? 'width' : 'height'
    }

  , show: function () {
      var dimension
        , scroll
        , actives
        , hasData

      if (this.transitioning || this.$element.hasClass('in')) return

      dimension = this.dimension()
      scroll = $.camelCase(['scroll', dimension].join('-'))
      actives = this.$parent && this.$parent.find('> .accordion-group > .in')

      if (actives && actives.length) {
        hasData = actives.data('collapse')
        if (hasData && hasData.transitioning) return
        actives.collapse('hide')
        hasData || actives.data('collapse', null)
      }

      this.$element[dimension](0)
      this.transition('addClass', $.Event('show'), 'shown')
      $.support.transition && this.$element[dimension](this.$element[0][scroll])
    }

  , hide: function () {
      var dimension
      if (this.transitioning || !this.$element.hasClass('in')) return
      dimension = this.dimension()
      this.reset(this.$element[dimension]())
      this.transition('removeClass', $.Event('hide'), 'hidden')
      this.$element[dimension](0)
    }

  , reset: function (size) {
      var dimension = this.dimension()

      this.$element
        .removeClass('collapse')
        [dimension](size || 'auto')
        [0].offsetWidth

      this.$element[size !== null ? 'addClass' : 'removeClass']('collapse')

      return this
    }

  , transition: function (method, startEvent, completeEvent) {
      var that = this
        , complete = function () {
            if (startEvent.type == 'show') that.reset()
            that.transitioning = 0
            that.$element.trigger(completeEvent)
          }

      this.$element.trigger(startEvent)

      if (startEvent.isDefaultPrevented()) return

      this.transitioning = 1

      this.$element[method]('in')

      $.support.transition && this.$element.hasClass('collapse') ?
        this.$element.one($.support.transition.end, complete) :
        complete()
    }

  , toggle: function () {
      this[this.$element.hasClass('in') ? 'hide' : 'show']()
    }

  }


 /* COLLAPSE PLUGIN DEFINITION
  * ========================== */

  var old = $.fn.collapse

  $.fn.collapse = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('collapse')
        , options = $.extend({}, $.fn.collapse.defaults, $this.data(), typeof option == 'object' && option)
      if (!data) $this.data('collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.collapse.defaults = {
    toggle: true
  }

  $.fn.collapse.Constructor = Collapse


 /* COLLAPSE NO CONFLICT
  * ==================== */

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old
    return this
  }


 /* COLLAPSE DATA-API
  * ================= */

  $(document).on('click.collapse.data-api', '[data-toggle=collapse]', function (e) {
    var $this = $(this), href
      , target = $this.attr('data-target')
        || e.preventDefault()
        || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') //strip for ie7
      , option = $(target).data('collapse') ? 'toggle' : $this.data()
    $this[$(target).hasClass('in') ? 'addClass' : 'removeClass']('collapsed')
    $(target).collapse(option)
  })

}(window.jQuery);
/* ============================================================
 * bootstrap-dropdown.js v2.3.2
 * http://twitter.github.com/bootstrap/javascript.html#dropdowns
 * ============================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */



!function ($) {

  "use strict"; // jshint ;_;


 /* DROPDOWN CLASS DEFINITION
  * ========================= */

  var toggle = '[data-toggle=dropdown]'
    , Dropdown = function (element) {
        var $el = $(element).on('click.dropdown.data-api', this.toggle)
        $('html').on('click.dropdown.data-api', function () {
          $el.parent().removeClass('open')
        })
      }

  Dropdown.prototype = {

    constructor: Dropdown

  , toggle: function (e) {
      var $this = $(this)
        , $parent
        , isActive

      if ($this.is('.disabled, :disabled')) return

      $parent = getParent($this)

      isActive = $parent.hasClass('open')

      clearMenus()

      if (!isActive) {
        if ('ontouchstart' in document.documentElement) {
          // if mobile we we use a backdrop because click events don't delegate
          $('<div class="dropdown-backdrop"/>').insertBefore($(this)).on('click', clearMenus)
        }
        $parent.toggleClass('open')
      }

      $this.focus()

      return false
    }

  , keydown: function (e) {
      var $this
        , $items
        , $active
        , $parent
        , isActive
        , index

      if (!/(38|40|27)/.test(e.keyCode)) return

      $this = $(this)

      e.preventDefault()
      e.stopPropagation()

      if ($this.is('.disabled, :disabled')) return

      $parent = getParent($this)

      isActive = $parent.hasClass('open')

      if (!isActive || (isActive && e.keyCode == 27)) {
        if (e.which == 27) $parent.find(toggle).focus()
        return $this.click()
      }

      $items = $('[role=menu] li:not(.divider):visible a', $parent)

      if (!$items.length) return

      index = $items.index($items.filter(':focus'))

      if (e.keyCode == 38 && index > 0) index--                                        // up
      if (e.keyCode == 40 && index < $items.length - 1) index++                        // down
      if (!~index) index = 0

      $items
        .eq(index)
        .focus()
    }

  }

  function clearMenus() {
    $('.dropdown-backdrop').remove()
    $(toggle).each(function () {
      getParent($(this)).removeClass('open')
    })
  }

  function getParent($this) {
    var selector = $this.attr('data-target')
      , $parent

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && /#/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
    }

    $parent = selector && $(selector)

    if (!$parent || !$parent.length) $parent = $this.parent()

    return $parent
  }


  /* DROPDOWN PLUGIN DEFINITION
   * ========================== */

  var old = $.fn.dropdown

  $.fn.dropdown = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('dropdown')
      if (!data) $this.data('dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  $.fn.dropdown.Constructor = Dropdown


 /* DROPDOWN NO CONFLICT
  * ==================== */

  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old
    return this
  }


  /* APPLY TO STANDARD DROPDOWN ELEMENTS
   * =================================== */

  $(document)
    .on('click.dropdown.data-api', clearMenus)
    .on('click.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
    .on('click.dropdown.data-api'  , toggle, Dropdown.prototype.toggle)
    .on('keydown.dropdown.data-api', toggle + ', [role=menu]' , Dropdown.prototype.keydown)

}(window.jQuery);
/* =========================================================
 * bootstrap-modal.js v2.3.2
 * http://twitter.github.com/bootstrap/javascript.html#modals
 * =========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */



!function ($) {

  "use strict"; // jshint ;_;


 /* MODAL CLASS DEFINITION
  * ====================== */

  var Modal = function (element, options) {
    this.options = options
    this.$element = $(element)
      .delegate('[data-dismiss="modal"]', 'click.dismiss.modal', $.proxy(this.hide, this))
    this.options.remote && this.$element.find('.modal-body').load(this.options.remote)
  }

  Modal.prototype = {

      constructor: Modal

    , toggle: function () {
        return this[!this.isShown ? 'show' : 'hide']()
      }

    , show: function () {
        var that = this
          , e = $.Event('show')

        this.$element.trigger(e)

        if (this.isShown || e.isDefaultPrevented()) return

        this.isShown = true

        this.escape()

        this.backdrop(function () {
          var transition = $.support.transition && that.$element.hasClass('fade')

          if (!that.$element.parent().length) {
            that.$element.appendTo(document.body) //don't move modals dom position
          }

          that.$element.show()

          if (transition) {
            that.$element[0].offsetWidth // force reflow
          }

          that.$element
            .addClass('in')
            .attr('aria-hidden', false)

          that.enforceFocus()

          transition ?
            that.$element.one($.support.transition.end, function () { that.$element.focus().trigger('shown') }) :
            that.$element.focus().trigger('shown')

        })
      }

    , hide: function (e) {
        e && e.preventDefault()

        var that = this

        e = $.Event('hide')

        this.$element.trigger(e)

        if (!this.isShown || e.isDefaultPrevented()) return

        this.isShown = false

        this.escape()

        $(document).off('focusin.modal')

        this.$element
          .removeClass('in')
          .attr('aria-hidden', true)

        $.support.transition && this.$element.hasClass('fade') ?
          this.hideWithTransition() :
          this.hideModal()
      }

    , enforceFocus: function () {
        var that = this
        $(document).on('focusin.modal', function (e) {
          if (that.$element[0] !== e.target && !that.$element.has(e.target).length) {
            that.$element.focus()
          }
        })
      }

    , escape: function () {
        var that = this
        if (this.isShown && this.options.keyboard) {
          this.$element.on('keyup.dismiss.modal', function ( e ) {
            e.which == 27 && that.hide()
          })
        } else if (!this.isShown) {
          this.$element.off('keyup.dismiss.modal')
        }
      }

    , hideWithTransition: function () {
        var that = this
          , timeout = setTimeout(function () {
              that.$element.off($.support.transition.end)
              that.hideModal()
            }, 500)

        this.$element.one($.support.transition.end, function () {
          clearTimeout(timeout)
          that.hideModal()
        })
      }

    , hideModal: function () {
        var that = this
        this.$element.hide()
        this.backdrop(function () {
          that.removeBackdrop()
          that.$element.trigger('hidden')
        })
      }

    , removeBackdrop: function () {
        this.$backdrop && this.$backdrop.remove()
        this.$backdrop = null
      }

    , backdrop: function (callback) {
        var that = this
          , animate = this.$element.hasClass('fade') ? 'fade' : ''

        if (this.isShown && this.options.backdrop) {
          var doAnimate = $.support.transition && animate

          this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />')
            .appendTo(document.body)

          this.$backdrop.click(
            this.options.backdrop == 'static' ?
              $.proxy(this.$element[0].focus, this.$element[0])
            : $.proxy(this.hide, this)
          )

          if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

          this.$backdrop.addClass('in')

          if (!callback) return

          doAnimate ?
            this.$backdrop.one($.support.transition.end, callback) :
            callback()

        } else if (!this.isShown && this.$backdrop) {
          this.$backdrop.removeClass('in')

          $.support.transition && this.$element.hasClass('fade')?
            this.$backdrop.one($.support.transition.end, callback) :
            callback()

        } else if (callback) {
          callback()
        }
      }
  }


 /* MODAL PLUGIN DEFINITION
  * ======================= */

  var old = $.fn.modal

  $.fn.modal = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('modal')
        , options = $.extend({}, $.fn.modal.defaults, $this.data(), typeof option == 'object' && option)
      if (!data) $this.data('modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option]()
      else if (options.show) data.show()
    })
  }

  $.fn.modal.defaults = {
      backdrop: true
    , keyboard: true
    , show: true
  }

  $.fn.modal.Constructor = Modal


 /* MODAL NO CONFLICT
  * ================= */

  $.fn.modal.noConflict = function () {
    $.fn.modal = old
    return this
  }


 /* MODAL DATA-API
  * ============== */

  $(document).on('click.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this = $(this)
      , href = $this.attr('href')
      , $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) //strip for ie7
      , option = $target.data('modal') ? 'toggle' : $.extend({ remote:!/#/.test(href) && href }, $target.data(), $this.data())

    e.preventDefault()

    $target
      .modal(option)
      .one('hide', function () {
        $this.focus()
      })
  })

}(window.jQuery);
/* =============================================================
 * bootstrap-scrollspy.js v2.3.2
 * http://twitter.github.com/bootstrap/javascript.html#scrollspy
 * =============================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================== */



!function ($) {

  "use strict"; // jshint ;_;


 /* SCROLLSPY CLASS DEFINITION
  * ========================== */

  function ScrollSpy(element, options) {
    var process = $.proxy(this.process, this)
      , $element = $(element).is('body') ? $(window) : $(element)
      , href
    this.options = $.extend({}, $.fn.scrollspy.defaults, options)
    this.$scrollElement = $element.on('scroll.scroll-spy.data-api', process)
    this.selector = (this.options.target
      || ((href = $(element).attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) //strip for ie7
      || '') + ' .nav li > a'
    this.$body = $('body')
    this.refresh()
    this.process()
  }

  ScrollSpy.prototype = {

      constructor: ScrollSpy

    , refresh: function () {
        var self = this
          , $targets

        this.offsets = $([])
        this.targets = $([])

        $targets = this.$body
          .find(this.selector)
          .map(function () {
            var $el = $(this)
              , href = $el.data('target') || $el.attr('href')
              , $href = /^#\w/.test(href) && $(href)
            return ( $href
              && $href.length
              && [[ $href.position().top + (!$.isWindow(self.$scrollElement.get(0)) && self.$scrollElement.scrollTop()), href ]] ) || null
          })
          .sort(function (a, b) { return a[0] - b[0] })
          .each(function () {
            self.offsets.push(this[0])
            self.targets.push(this[1])
          })
      }

    , process: function () {
        var scrollTop = this.$scrollElement.scrollTop() + this.options.offset
          , scrollHeight = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight
          , maxScroll = scrollHeight - this.$scrollElement.height()
          , offsets = this.offsets
          , targets = this.targets
          , activeTarget = this.activeTarget
          , i

        if (scrollTop >= maxScroll) {
          return activeTarget != (i = targets.last()[0])
            && this.activate ( i )
        }

        for (i = offsets.length; i--;) {
          activeTarget != targets[i]
            && scrollTop >= offsets[i]
            && (!offsets[i + 1] || scrollTop <= offsets[i + 1])
            && this.activate( targets[i] )
        }
      }

    , activate: function (target) {
        var active
          , selector

        this.activeTarget = target

        $(this.selector)
          .parent('.active')
          .removeClass('active')

        selector = this.selector
          + '[data-target="' + target + '"],'
          + this.selector + '[href="' + target + '"]'

        active = $(selector)
          .parent('li')
          .addClass('active')

        if (active.parent('.dropdown-menu').length)  {
          active = active.closest('li.dropdown').addClass('active')
        }

        active.trigger('activate')
      }

  }


 /* SCROLLSPY PLUGIN DEFINITION
  * =========================== */

  var old = $.fn.scrollspy

  $.fn.scrollspy = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('scrollspy')
        , options = typeof option == 'object' && option
      if (!data) $this.data('scrollspy', (data = new ScrollSpy(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.scrollspy.Constructor = ScrollSpy

  $.fn.scrollspy.defaults = {
    offset: 10
  }


 /* SCROLLSPY NO CONFLICT
  * ===================== */

  $.fn.scrollspy.noConflict = function () {
    $.fn.scrollspy = old
    return this
  }


 /* SCROLLSPY DATA-API
  * ================== */

  $(window).on('load', function () {
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this)
      $spy.scrollspy($spy.data())
    })
  })

}(window.jQuery);
/* ========================================================
 * bootstrap-tab.js v2.3.2
 * http://twitter.github.com/bootstrap/javascript.html#tabs
 * ========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================== */



!function ($) {

  "use strict"; // jshint ;_;


 /* TAB CLASS DEFINITION
  * ==================== */

  var Tab = function (element) {
    this.element = $(element)
  }

  Tab.prototype = {

    constructor: Tab

  , show: function () {
      var $this = this.element
        , $ul = $this.closest('ul:not(.dropdown-menu)')
        , selector = $this.attr('data-target')
        , previous
        , $target
        , e

      if (!selector) {
        selector = $this.attr('href')
        selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
      }

      if ( $this.parent('li').hasClass('active') ) return

      previous = $ul.find('.active:last a')[0]

      e = $.Event('show', {
        relatedTarget: previous
      })

      $this.trigger(e)

      if (e.isDefaultPrevented()) return

      $target = $(selector)

      this.activate($this.parent('li'), $ul)
      this.activate($target, $target.parent(), function () {
        $this.trigger({
          type: 'shown'
        , relatedTarget: previous
        })
      })
    }

  , activate: function ( element, container, callback) {
      var $active = container.find('> .active')
        , transition = callback
            && $.support.transition
            && $active.hasClass('fade')

      function next() {
        $active
          .removeClass('active')
          .find('> .dropdown-menu > .active')
          .removeClass('active')

        element.addClass('active')

        if (transition) {
          element[0].offsetWidth // reflow for transition
          element.addClass('in')
        } else {
          element.removeClass('fade')
        }

        if ( element.parent('.dropdown-menu') ) {
          element.closest('li.dropdown').addClass('active')
        }

        callback && callback()
      }

      transition ?
        $active.one($.support.transition.end, next) :
        next()

      $active.removeClass('in')
    }
  }


 /* TAB PLUGIN DEFINITION
  * ===================== */

  var old = $.fn.tab

  $.fn.tab = function ( option ) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('tab')
      if (!data) $this.data('tab', (data = new Tab(this)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.tab.Constructor = Tab


 /* TAB NO CONFLICT
  * =============== */

  $.fn.tab.noConflict = function () {
    $.fn.tab = old
    return this
  }


 /* TAB DATA-API
  * ============ */

  $(document).on('click.tab.data-api', '[data-toggle="tab"], [data-toggle="pill"]', function (e) {
    e.preventDefault()
    $(this).tab('show')
  })

}(window.jQuery);
/* ===========================================================
 * bootstrap-tooltip.js v2.3.2
 * http://twitter.github.com/bootstrap/javascript.html#tooltips
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ===========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */



!function ($) {

  "use strict"; // jshint ;_;


 /* TOOLTIP PUBLIC CLASS DEFINITION
  * =============================== */

  var Tooltip = function (element, options) {
    this.init('tooltip', element, options)
  }

  Tooltip.prototype = {

    constructor: Tooltip

  , init: function (type, element, options) {
      var eventIn
        , eventOut
        , triggers
        , trigger
        , i

      this.type = type
      this.$element = $(element)
      this.options = this.getOptions(options)
      this.enabled = true

      triggers = this.options.trigger.split(' ')

      for (i = triggers.length; i--;) {
        trigger = triggers[i]
        if (trigger == 'click') {
          this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
        } else if (trigger != 'manual') {
          eventIn = trigger == 'hover' ? 'mouseenter' : 'focus'
          eventOut = trigger == 'hover' ? 'mouseleave' : 'blur'
          this.$element.on(eventIn + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
          this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
        }
      }

      this.options.selector ?
        (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
        this.fixTitle()
    }

  , getOptions: function (options) {
      options = $.extend({}, $.fn[this.type].defaults, this.$element.data(), options)

      if (options.delay && typeof options.delay == 'number') {
        options.delay = {
          show: options.delay
        , hide: options.delay
        }
      }

      return options
    }

  , enter: function (e) {
      var defaults = $.fn[this.type].defaults
        , options = {}
        , self

      this._options && $.each(this._options, function (key, value) {
        if (defaults[key] != value) options[key] = value
      }, this)

      self = $(e.currentTarget)[this.type](options).data(this.type)

      if (!self.options.delay || !self.options.delay.show) return self.show()

      clearTimeout(this.timeout)
      self.hoverState = 'in'
      this.timeout = setTimeout(function() {
        if (self.hoverState == 'in') self.show()
      }, self.options.delay.show)
    }

  , leave: function (e) {
      var self = $(e.currentTarget)[this.type](this._options).data(this.type)

      if (this.timeout) clearTimeout(this.timeout)
      if (!self.options.delay || !self.options.delay.hide) return self.hide()

      self.hoverState = 'out'
      this.timeout = setTimeout(function() {
        if (self.hoverState == 'out') self.hide()
      }, self.options.delay.hide)
    }

  , show: function () {
      var $tip
        , pos
        , actualWidth
        , actualHeight
        , placement
        , tp
        , e = $.Event('show')

      if (this.hasContent() && this.enabled) {
        this.$element.trigger(e)
        if (e.isDefaultPrevented()) return
        $tip = this.tip()
        this.setContent()

        if (this.options.animation) {
          $tip.addClass('fade')
        }

        placement = typeof this.options.placement == 'function' ?
          this.options.placement.call(this, $tip[0], this.$element[0]) :
          this.options.placement

        $tip
          .detach()
          .css({ top: 0, left: 0, display: 'block' })

        this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)

        pos = this.getPosition()

        actualWidth = $tip[0].offsetWidth
        actualHeight = $tip[0].offsetHeight

        switch (placement) {
          case 'bottom':
            tp = {top: pos.top + pos.height, left: pos.left + pos.width / 2 - actualWidth / 2}
            break
          case 'top':
            tp = {top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2}
            break
          case 'left':
            tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth}
            break
          case 'right':
            tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width}
            break
        }

        this.applyPlacement(tp, placement)
        this.$element.trigger('shown')
      }
    }

  , applyPlacement: function(offset, placement){
      var $tip = this.tip()
        , width = $tip[0].offsetWidth
        , height = $tip[0].offsetHeight
        , actualWidth
        , actualHeight
        , delta
        , replace

      $tip
        .offset(offset)
        .addClass(placement)
        .addClass('in')

      actualWidth = $tip[0].offsetWidth
      actualHeight = $tip[0].offsetHeight

      if (placement == 'top' && actualHeight != height) {
        offset.top = offset.top + height - actualHeight
        replace = true
      }

      if (placement == 'bottom' || placement == 'top') {
        delta = 0

        if (offset.left < 0){
          delta = offset.left * -2
          offset.left = 0
          $tip.offset(offset)
          actualWidth = $tip[0].offsetWidth
          actualHeight = $tip[0].offsetHeight
        }

        this.replaceArrow(delta - width + actualWidth, actualWidth, 'left')
      } else {
        this.replaceArrow(actualHeight - height, actualHeight, 'top')
      }

      if (replace) $tip.offset(offset)
    }

  , replaceArrow: function(delta, dimension, position){
      this
        .arrow()
        .css(position, delta ? (50 * (1 - delta / dimension) + "%") : '')
    }

  , setContent: function () {
      var $tip = this.tip()
        , title = this.getTitle()

      $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
      $tip.removeClass('fade in top bottom left right')
    }

  , hide: function () {
      var that = this
        , $tip = this.tip()
        , e = $.Event('hide')

      this.$element.trigger(e)
      if (e.isDefaultPrevented()) return

      $tip.removeClass('in')

      function removeWithAnimation() {
        var timeout = setTimeout(function () {
          $tip.off($.support.transition.end).detach()
        }, 500)

        $tip.one($.support.transition.end, function () {
          clearTimeout(timeout)
          $tip.detach()
        })
      }

      $.support.transition && this.$tip.hasClass('fade') ?
        removeWithAnimation() :
        $tip.detach()

      this.$element.trigger('hidden')

      return this
    }

  , fixTitle: function () {
      var $e = this.$element
      if ($e.attr('title') || typeof($e.attr('data-original-title')) != 'string') {
        $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
      }
    }

  , hasContent: function () {
      return this.getTitle()
    }

  , getPosition: function () {
      var el = this.$element[0]
      return $.extend({}, (typeof el.getBoundingClientRect == 'function') ? el.getBoundingClientRect() : {
        width: el.offsetWidth
      , height: el.offsetHeight
      }, this.$element.offset())
    }

  , getTitle: function () {
      var title
        , $e = this.$element
        , o = this.options

      title = $e.attr('data-original-title')
        || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

      return title
    }

  , tip: function () {
      return this.$tip = this.$tip || $(this.options.template)
    }

  , arrow: function(){
      return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }

  , validate: function () {
      if (!this.$element[0].parentNode) {
        this.hide()
        this.$element = null
        this.options = null
      }
    }

  , enable: function () {
      this.enabled = true
    }

  , disable: function () {
      this.enabled = false
    }

  , toggleEnabled: function () {
      this.enabled = !this.enabled
    }

  , toggle: function (e) {
      var self = e ? $(e.currentTarget)[this.type](this._options).data(this.type) : this
      self.tip().hasClass('in') ? self.hide() : self.show()
    }

  , destroy: function () {
      this.hide().$element.off('.' + this.type).removeData(this.type)
    }

  }


 /* TOOLTIP PLUGIN DEFINITION
  * ========================= */

  var old = $.fn.tooltip

  $.fn.tooltip = function ( option ) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('tooltip')
        , options = typeof option == 'object' && option
      if (!data) $this.data('tooltip', (data = new Tooltip(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.tooltip.Constructor = Tooltip

  $.fn.tooltip.defaults = {
    animation: true
  , placement: 'top'
  , selector: false
  , template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
  , trigger: 'hover focus'
  , title: ''
  , delay: 0
  , html: false
  , container: false
  }


 /* TOOLTIP NO CONFLICT
  * =================== */

  $.fn.tooltip.noConflict = function () {
    $.fn.tooltip = old
    return this
  }

}(window.jQuery);
/* ===========================================================
 * bootstrap-popover.js v2.3.2
 * http://twitter.github.com/bootstrap/javascript.html#popovers
 * ===========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =========================================================== */



!function ($) {

  "use strict"; // jshint ;_;


 /* POPOVER PUBLIC CLASS DEFINITION
  * =============================== */

  var Popover = function (element, options) {
    this.init('popover', element, options)
  }


  /* NOTE: POPOVER EXTENDS BOOTSTRAP-TOOLTIP.js
     ========================================== */

  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype, {

    constructor: Popover

  , setContent: function () {
      var $tip = this.tip()
        , title = this.getTitle()
        , content = this.getContent()

      $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
      $tip.find('.popover-content')[this.options.html ? 'html' : 'text'](content)

      $tip.removeClass('fade top bottom left right in')
    }

  , hasContent: function () {
      return this.getTitle() || this.getContent()
    }

  , getContent: function () {
      var content
        , $e = this.$element
        , o = this.options

      content = (typeof o.content == 'function' ? o.content.call($e[0]) :  o.content)
        || $e.attr('data-content')

      return content
    }

  , tip: function () {
      if (!this.$tip) {
        this.$tip = $(this.options.template)
      }
      return this.$tip
    }

  , destroy: function () {
      this.hide().$element.off('.' + this.type).removeData(this.type)
    }

  })


 /* POPOVER PLUGIN DEFINITION
  * ======================= */

  var old = $.fn.popover

  $.fn.popover = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('popover')
        , options = typeof option == 'object' && option
      if (!data) $this.data('popover', (data = new Popover(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.popover.Constructor = Popover

  $.fn.popover.defaults = $.extend({} , $.fn.tooltip.defaults, {
    placement: 'right'
  , trigger: 'click'
  , content: ''
  , template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  })


 /* POPOVER NO CONFLICT
  * =================== */

  $.fn.popover.noConflict = function () {
    $.fn.popover = old
    return this
  }

}(window.jQuery);
/* =============================================================
 * bootstrap-typeahead.js v2.3.2
 * http://twitter.github.com/bootstrap/javascript.html#typeahead
 * =============================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */



!function($){

  "use strict"; // jshint ;_;


 /* TYPEAHEAD PUBLIC CLASS DEFINITION
  * ================================= */

  var Typeahead = function (element, options) {
    this.$element = $(element)
    this.options = $.extend({}, $.fn.typeahead.defaults, options)
    this.matcher = this.options.matcher || this.matcher
    this.sorter = this.options.sorter || this.sorter
    this.highlighter = this.options.highlighter || this.highlighter
    this.updater = this.options.updater || this.updater
    this.source = this.options.source
    this.$menu = $(this.options.menu)
    this.shown = false
    this.listen()
  }

  Typeahead.prototype = {

    constructor: Typeahead

  , select: function () {
      var val = this.$menu.find('.active').attr('data-value')
      this.$element
        .val(this.updater(val))
        .change()
      return this.hide()
    }

  , updater: function (item) {
      return item
    }

  , show: function () {
      var pos = $.extend({}, this.$element.position(), {
        height: this.$element[0].offsetHeight
      })

      this.$menu
        .insertAfter(this.$element)
        .css({
          top: pos.top + pos.height
        , left: pos.left
        })
        .show()

      this.shown = true
      return this
    }

  , hide: function () {
      this.$menu.hide()
      this.shown = false
      return this
    }

  , lookup: function (event) {
      var items

      this.query = this.$element.val()

      if (!this.query || this.query.length < this.options.minLength) {
        return this.shown ? this.hide() : this
      }

      items = $.isFunction(this.source) ? this.source(this.query, $.proxy(this.process, this)) : this.source

      return items ? this.process(items) : this
    }

  , process: function (items) {
      var that = this

      items = $.grep(items, function (item) {
        return that.matcher(item)
      })

      items = this.sorter(items)

      if (!items.length) {
        return this.shown ? this.hide() : this
      }

      return this.render(items.slice(0, this.options.items)).show()
    }

  , matcher: function (item) {
      return ~item.toLowerCase().indexOf(this.query.toLowerCase())
    }

  , sorter: function (items) {
      var beginswith = []
        , caseSensitive = []
        , caseInsensitive = []
        , item

      while (item = items.shift()) {
        if (!item.toLowerCase().indexOf(this.query.toLowerCase())) beginswith.push(item)
        else if (~item.indexOf(this.query)) caseSensitive.push(item)
        else caseInsensitive.push(item)
      }

      return beginswith.concat(caseSensitive, caseInsensitive)
    }

  , highlighter: function (item) {
      var query = this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&')
      return item.replace(new RegExp('(' + query + ')', 'ig'), function ($1, match) {
        return '<strong>' + match + '</strong>'
      })
    }

  , render: function (items) {
      var that = this

      items = $(items).map(function (i, item) {
        i = $(that.options.item).attr('data-value', item)
        i.find('a').html(that.highlighter(item))
        return i[0]
      })

      items.first().addClass('active')
      this.$menu.html(items)
      return this
    }

  , next: function (event) {
      var active = this.$menu.find('.active').removeClass('active')
        , next = active.next()

      if (!next.length) {
        next = $(this.$menu.find('li')[0])
      }

      next.addClass('active')
    }

  , prev: function (event) {
      var active = this.$menu.find('.active').removeClass('active')
        , prev = active.prev()

      if (!prev.length) {
        prev = this.$menu.find('li').last()
      }

      prev.addClass('active')
    }

  , listen: function () {
      this.$element
        .on('focus',    $.proxy(this.focus, this))
        .on('blur',     $.proxy(this.blur, this))
        .on('keypress', $.proxy(this.keypress, this))
        .on('keyup',    $.proxy(this.keyup, this))

      if (this.eventSupported('keydown')) {
        this.$element.on('keydown', $.proxy(this.keydown, this))
      }

      this.$menu
        .on('click', $.proxy(this.click, this))
        .on('mouseenter', 'li', $.proxy(this.mouseenter, this))
        .on('mouseleave', 'li', $.proxy(this.mouseleave, this))
    }

  , eventSupported: function(eventName) {
      var isSupported = eventName in this.$element
      if (!isSupported) {
        this.$element.setAttribute(eventName, 'return;')
        isSupported = typeof this.$element[eventName] === 'function'
      }
      return isSupported
    }

  , move: function (e) {
      if (!this.shown) return

      switch(e.keyCode) {
        case 9: // tab
        case 13: // enter
        case 27: // escape
          e.preventDefault()
          break

        case 38: // up arrow
          e.preventDefault()
          this.prev()
          break

        case 40: // down arrow
          e.preventDefault()
          this.next()
          break
      }

      e.stopPropagation()
    }

  , keydown: function (e) {
      this.suppressKeyPressRepeat = ~$.inArray(e.keyCode, [40,38,9,13,27])
      this.move(e)
    }

  , keypress: function (e) {
      if (this.suppressKeyPressRepeat) return
      this.move(e)
    }

  , keyup: function (e) {
      switch(e.keyCode) {
        case 40: // down arrow
        case 38: // up arrow
        case 16: // shift
        case 17: // ctrl
        case 18: // alt
          break

        case 9: // tab
        case 13: // enter
          if (!this.shown) return
          this.select()
          break

        case 27: // escape
          if (!this.shown) return
          this.hide()
          break

        default:
          this.lookup()
      }

      e.stopPropagation()
      e.preventDefault()
  }

  , focus: function (e) {
      this.focused = true
    }

  , blur: function (e) {
      this.focused = false
      if (!this.mousedover && this.shown) this.hide()
    }

  , click: function (e) {
      e.stopPropagation()
      e.preventDefault()
      this.select()
      this.$element.focus()
    }

  , mouseenter: function (e) {
      this.mousedover = true
      this.$menu.find('.active').removeClass('active')
      $(e.currentTarget).addClass('active')
    }

  , mouseleave: function (e) {
      this.mousedover = false
      if (!this.focused && this.shown) this.hide()
    }

  }


  /* TYPEAHEAD PLUGIN DEFINITION
   * =========================== */

  var old = $.fn.typeahead

  $.fn.typeahead = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('typeahead')
        , options = typeof option == 'object' && option
      if (!data) $this.data('typeahead', (data = new Typeahead(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.typeahead.defaults = {
    source: []
  , items: 8
  , menu: '<ul class="typeahead dropdown-menu"></ul>'
  , item: '<li><a href="#"></a></li>'
  , minLength: 1
  }

  $.fn.typeahead.Constructor = Typeahead


 /* TYPEAHEAD NO CONFLICT
  * =================== */

  $.fn.typeahead.noConflict = function () {
    $.fn.typeahead = old
    return this
  }


 /* TYPEAHEAD DATA-API
  * ================== */

  $(document).on('focus.typeahead.data-api', '[data-provide="typeahead"]', function (e) {
    var $this = $(this)
    if ($this.data('typeahead')) return
    $this.typeahead($this.data())
  })

}(window.jQuery);













(function() {
  var CSRFToken, Click, ComponentUrl, EVENTS, Link, ProgressBar, browserIsntBuggy, browserSupportsCustomEvents, browserSupportsPushState, browserSupportsTurbolinks, bypassOnLoadPopstate, cacheCurrentPage, cacheSize, changePage, clone, constrainPageCacheTo, createDocument, crossOriginRedirect, currentState, enableProgressBar, enableTransitionCache, executeScriptTags, extractTitleAndBody, fetch, fetchHistory, fetchReplacement, historyStateIsDefined, initializeTurbolinks, installDocumentReadyPageEventTriggers, installHistoryChangeHandler, installJqueryAjaxSuccessPageUpdateTrigger, loadedAssets, manuallyTriggerHashChangeForFirefox, pageCache, pageChangePrevented, pagesCached, popCookie, processResponse, progressBar, recallScrollPosition, ref, referer, reflectNewUrl, reflectRedirectedUrl, rememberCurrentState, rememberCurrentUrl, rememberReferer, removeNoscriptTags, requestMethodIsSafe, resetScrollPosition, setAutofocusElement, transitionCacheEnabled, transitionCacheFor, triggerEvent, visit, xhr,
    indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty,
    slice = [].slice,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  pageCache = {};

  cacheSize = 10;

  transitionCacheEnabled = false;

  progressBar = null;

  currentState = null;

  loadedAssets = null;

  referer = null;

  xhr = null;

  EVENTS = {
    BEFORE_CHANGE: 'page:before-change',
    FETCH: 'page:fetch',
    RECEIVE: 'page:receive',
    CHANGE: 'page:change',
    UPDATE: 'page:update',
    LOAD: 'page:load',
    RESTORE: 'page:restore',
    BEFORE_UNLOAD: 'page:before-unload',
    EXPIRE: 'page:expire'
  };

  fetch = function(url) {
    var cachedPage;
    url = new ComponentUrl(url);
    rememberReferer();
    cacheCurrentPage();
    if (progressBar != null) {
      progressBar.start();
    }
    if (transitionCacheEnabled && (cachedPage = transitionCacheFor(url.absolute))) {
      fetchHistory(cachedPage);
      return fetchReplacement(url, null, false);
    } else {
      return fetchReplacement(url, resetScrollPosition);
    }
  };

  transitionCacheFor = function(url) {
    var cachedPage;
    cachedPage = pageCache[url];
    if (cachedPage && !cachedPage.transitionCacheDisabled) {
      return cachedPage;
    }
  };

  enableTransitionCache = function(enable) {
    if (enable == null) {
      enable = true;
    }
    return transitionCacheEnabled = enable;
  };

  enableProgressBar = function(enable) {
    if (enable == null) {
      enable = true;
    }
    if (!browserSupportsTurbolinks) {
      return;
    }
    if (enable) {
      return progressBar != null ? progressBar : progressBar = new ProgressBar('html');
    } else {
      if (progressBar != null) {
        progressBar.uninstall();
      }
      return progressBar = null;
    }
  };

  fetchReplacement = function(url, onLoadFunction, showProgressBar) {
    if (showProgressBar == null) {
      showProgressBar = true;
    }
    triggerEvent(EVENTS.FETCH, {
      url: url.absolute
    });
    if (xhr != null) {
      xhr.abort();
    }
    xhr = new XMLHttpRequest;
    xhr.open('GET', url.withoutHashForIE10compatibility(), true);
    xhr.setRequestHeader('Accept', 'text/html, application/xhtml+xml, application/xml');
    xhr.setRequestHeader('X-XHR-Referer', referer);
    xhr.onload = function() {
      var doc;
      triggerEvent(EVENTS.RECEIVE, {
        url: url.absolute
      });
      if (doc = processResponse()) {
        reflectNewUrl(url);
        reflectRedirectedUrl();
        changePage.apply(null, extractTitleAndBody(doc));
        manuallyTriggerHashChangeForFirefox();
        if (typeof onLoadFunction === "function") {
          onLoadFunction();
        }
        return triggerEvent(EVENTS.LOAD);
      } else {
        return document.location.href = crossOriginRedirect() || url.absolute;
      }
    };
    if (progressBar && showProgressBar) {
      xhr.onprogress = (function(_this) {
        return function(event) {
          var percent;
          percent = event.lengthComputable ? event.loaded / event.total * 100 : progressBar.value + (100 - progressBar.value) / 10;
          return progressBar.advanceTo(percent);
        };
      })(this);
    }
    xhr.onloadend = function() {
      return xhr = null;
    };
    xhr.onerror = function() {
      return document.location.href = url.absolute;
    };
    return xhr.send();
  };

  fetchHistory = function(cachedPage) {
    if (xhr != null) {
      xhr.abort();
    }
    changePage(cachedPage.title, cachedPage.body);
    recallScrollPosition(cachedPage);
    return triggerEvent(EVENTS.RESTORE);
  };

  cacheCurrentPage = function() {
    var currentStateUrl;
    currentStateUrl = new ComponentUrl(currentState.url);
    pageCache[currentStateUrl.absolute] = {
      url: currentStateUrl.relative,
      body: document.body,
      title: document.title,
      positionY: window.pageYOffset,
      positionX: window.pageXOffset,
      cachedAt: new Date().getTime(),
      transitionCacheDisabled: document.querySelector('[data-no-transition-cache]') != null
    };
    return constrainPageCacheTo(cacheSize);
  };

  pagesCached = function(size) {
    if (size == null) {
      size = cacheSize;
    }
    if (/^[\d]+$/.test(size)) {
      return cacheSize = parseInt(size);
    }
  };

  constrainPageCacheTo = function(limit) {
    var cacheTimesRecentFirst, i, key, len, pageCacheKeys, results;
    pageCacheKeys = Object.keys(pageCache);
    cacheTimesRecentFirst = pageCacheKeys.map(function(url) {
      return pageCache[url].cachedAt;
    }).sort(function(a, b) {
      return b - a;
    });
    results = [];
    for (i = 0, len = pageCacheKeys.length; i < len; i++) {
      key = pageCacheKeys[i];
      if (!(pageCache[key].cachedAt <= cacheTimesRecentFirst[limit])) {
        continue;
      }
      triggerEvent(EVENTS.EXPIRE, pageCache[key]);
      results.push(delete pageCache[key]);
    }
    return results;
  };

  changePage = function(title, body, csrfToken, runScripts) {
    triggerEvent(EVENTS.BEFORE_UNLOAD);
    document.title = title;
    document.documentElement.replaceChild(body, document.body);
    if (csrfToken != null) {
      CSRFToken.update(csrfToken);
    }
    setAutofocusElement();
    if (runScripts) {
      executeScriptTags();
    }
    currentState = window.history.state;
    if (progressBar != null) {
      progressBar.done();
    }
    triggerEvent(EVENTS.CHANGE);
    return triggerEvent(EVENTS.UPDATE);
  };

  executeScriptTags = function() {
    var attr, copy, i, j, len, len1, nextSibling, parentNode, ref, ref1, script, scripts;
    scripts = Array.prototype.slice.call(document.body.querySelectorAll('script:not([data-turbolinks-eval="false"])'));
    for (i = 0, len = scripts.length; i < len; i++) {
      script = scripts[i];
      if (!((ref = script.type) === '' || ref === 'text/javascript')) {
        continue;
      }
      copy = document.createElement('script');
      ref1 = script.attributes;
      for (j = 0, len1 = ref1.length; j < len1; j++) {
        attr = ref1[j];
        copy.setAttribute(attr.name, attr.value);
      }
      if (!script.hasAttribute('async')) {
        copy.async = false;
      }
      copy.appendChild(document.createTextNode(script.innerHTML));
      parentNode = script.parentNode, nextSibling = script.nextSibling;
      parentNode.removeChild(script);
      parentNode.insertBefore(copy, nextSibling);
    }
  };

  removeNoscriptTags = function(node) {
    node.innerHTML = node.innerHTML.replace(/<noscript[\S\s]*?<\/noscript>/ig, '');
    return node;
  };

  setAutofocusElement = function() {
    var autofocusElement, list;
    autofocusElement = (list = document.querySelectorAll('input[autofocus], textarea[autofocus]'))[list.length - 1];
    if (autofocusElement && document.activeElement !== autofocusElement) {
      return autofocusElement.focus();
    }
  };

  reflectNewUrl = function(url) {
    if ((url = new ComponentUrl(url)).absolute !== referer) {
      return window.history.pushState({
        turbolinks: true,
        url: url.absolute
      }, '', url.absolute);
    }
  };

  reflectRedirectedUrl = function() {
    var location, preservedHash;
    if (location = xhr.getResponseHeader('X-XHR-Redirected-To')) {
      location = new ComponentUrl(location);
      preservedHash = location.hasNoHash() ? document.location.hash : '';
      return window.history.replaceState(window.history.state, '', location.href + preservedHash);
    }
  };

  crossOriginRedirect = function() {
    var redirect;
    if (((redirect = xhr.getResponseHeader('Location')) != null) && (new ComponentUrl(redirect)).crossOrigin()) {
      return redirect;
    }
  };

  rememberReferer = function() {
    return referer = document.location.href;
  };

  rememberCurrentUrl = function() {
    return window.history.replaceState({
      turbolinks: true,
      url: document.location.href
    }, '', document.location.href);
  };

  rememberCurrentState = function() {
    return currentState = window.history.state;
  };

  manuallyTriggerHashChangeForFirefox = function() {
    var url;
    if (navigator.userAgent.match(/Firefox/) && !(url = new ComponentUrl).hasNoHash()) {
      window.history.replaceState(currentState, '', url.withoutHash());
      return document.location.hash = url.hash;
    }
  };

  recallScrollPosition = function(page) {
    return window.scrollTo(page.positionX, page.positionY);
  };

  resetScrollPosition = function() {
    if (document.location.hash) {
      return document.location.href = document.location.href;
    } else {
      return window.scrollTo(0, 0);
    }
  };

  clone = function(original) {
    var copy, key, value;
    if ((original == null) || typeof original !== 'object') {
      return original;
    }
    copy = new original.constructor();
    for (key in original) {
      value = original[key];
      copy[key] = clone(value);
    }
    return copy;
  };

  popCookie = function(name) {
    var ref, value;
    value = ((ref = document.cookie.match(new RegExp(name + "=(\\w+)"))) != null ? ref[1].toUpperCase() : void 0) || '';
    document.cookie = name + '=; expires=Thu, 01-Jan-70 00:00:01 GMT; path=/';
    return value;
  };

  triggerEvent = function(name, data) {
    var event;
    if (typeof Prototype !== 'undefined') {
      Event.fire(document, name, data, true);
    }
    event = document.createEvent('Events');
    if (data) {
      event.data = data;
    }
    event.initEvent(name, true, true);
    return document.dispatchEvent(event);
  };

  pageChangePrevented = function(url) {
    return !triggerEvent(EVENTS.BEFORE_CHANGE, {
      url: url
    });
  };

  processResponse = function() {
    var assetsChanged, clientOrServerError, doc, extractTrackAssets, intersection, validContent;
    clientOrServerError = function() {
      var ref;
      return (400 <= (ref = xhr.status) && ref < 600);
    };
    validContent = function() {
      var contentType;
      return ((contentType = xhr.getResponseHeader('Content-Type')) != null) && contentType.match(/^(?:text\/html|application\/xhtml\+xml|application\/xml)(?:;|$)/);
    };
    extractTrackAssets = function(doc) {
      var i, len, node, ref, results;
      ref = doc.querySelector('head').childNodes;
      results = [];
      for (i = 0, len = ref.length; i < len; i++) {
        node = ref[i];
        if ((typeof node.getAttribute === "function" ? node.getAttribute('data-turbolinks-track') : void 0) != null) {
          results.push(node.getAttribute('src') || node.getAttribute('href'));
        }
      }
      return results;
    };
    assetsChanged = function(doc) {
      var fetchedAssets;
      loadedAssets || (loadedAssets = extractTrackAssets(document));
      fetchedAssets = extractTrackAssets(doc);
      return fetchedAssets.length !== loadedAssets.length || intersection(fetchedAssets, loadedAssets).length !== loadedAssets.length;
    };
    intersection = function(a, b) {
      var i, len, ref, results, value;
      if (a.length > b.length) {
        ref = [b, a], a = ref[0], b = ref[1];
      }
      results = [];
      for (i = 0, len = a.length; i < len; i++) {
        value = a[i];
        if (indexOf.call(b, value) >= 0) {
          results.push(value);
        }
      }
      return results;
    };
    if (!clientOrServerError() && validContent()) {
      doc = createDocument(xhr.responseText);
      if (doc && !assetsChanged(doc)) {
        return doc;
      }
    }
  };

  extractTitleAndBody = function(doc) {
    var title;
    title = doc.querySelector('title');
    return [title != null ? title.textContent : void 0, removeNoscriptTags(doc.querySelector('body')), CSRFToken.get(doc).token, 'runScripts'];
  };

  CSRFToken = {
    get: function(doc) {
      var tag;
      if (doc == null) {
        doc = document;
      }
      return {
        node: tag = doc.querySelector('meta[name="csrf-token"]'),
        token: tag != null ? typeof tag.getAttribute === "function" ? tag.getAttribute('content') : void 0 : void 0
      };
    },
    update: function(latest) {
      var current;
      current = this.get();
      if ((current.token != null) && (latest != null) && current.token !== latest) {
        return current.node.setAttribute('content', latest);
      }
    }
  };

  createDocument = function(html) {
    var doc;
    doc = document.documentElement.cloneNode();
    doc.innerHTML = html;
    doc.head = doc.querySelector('head');
    doc.body = doc.querySelector('body');
    return doc;
  };

  ComponentUrl = (function() {
    function ComponentUrl(original1) {
      this.original = original1 != null ? original1 : document.location.href;
      if (this.original.constructor === ComponentUrl) {
        return this.original;
      }
      this._parse();
    }

    ComponentUrl.prototype.withoutHash = function() {
      return this.href.replace(this.hash, '').replace('#', '');
    };

    ComponentUrl.prototype.withoutHashForIE10compatibility = function() {
      return this.withoutHash();
    };

    ComponentUrl.prototype.hasNoHash = function() {
      return this.hash.length === 0;
    };

    ComponentUrl.prototype.crossOrigin = function() {
      return this.origin !== (new ComponentUrl).origin;
    };

    ComponentUrl.prototype._parse = function() {
      var ref;
      (this.link != null ? this.link : this.link = document.createElement('a')).href = this.original;
      ref = this.link, this.href = ref.href, this.protocol = ref.protocol, this.host = ref.host, this.hostname = ref.hostname, this.port = ref.port, this.pathname = ref.pathname, this.search = ref.search, this.hash = ref.hash;
      this.origin = [this.protocol, '//', this.hostname].join('');
      if (this.port.length !== 0) {
        this.origin += ":" + this.port;
      }
      this.relative = [this.pathname, this.search, this.hash].join('');
      return this.absolute = this.href;
    };

    return ComponentUrl;

  })();

  Link = (function(superClass) {
    extend(Link, superClass);

    Link.HTML_EXTENSIONS = ['html'];

    Link.allowExtensions = function() {
      var extension, extensions, i, len;
      extensions = 1 <= arguments.length ? slice.call(arguments, 0) : [];
      for (i = 0, len = extensions.length; i < len; i++) {
        extension = extensions[i];
        Link.HTML_EXTENSIONS.push(extension);
      }
      return Link.HTML_EXTENSIONS;
    };

    function Link(link1) {
      this.link = link1;
      if (this.link.constructor === Link) {
        return this.link;
      }
      this.original = this.link.href;
      this.originalElement = this.link;
      this.link = this.link.cloneNode(false);
      Link.__super__.constructor.apply(this, arguments);
    }

    Link.prototype.shouldIgnore = function() {
      return this.crossOrigin() || this._anchored() || this._nonHtml() || this._optOut() || this._target();
    };

    Link.prototype._anchored = function() {
      return (this.hash.length > 0 || this.href.charAt(this.href.length - 1) === '#') && (this.withoutHash() === (new ComponentUrl).withoutHash());
    };

    Link.prototype._nonHtml = function() {
      return this.pathname.match(/\.[a-z]+$/g) && !this.pathname.match(new RegExp("\\.(?:" + (Link.HTML_EXTENSIONS.join('|')) + ")?$", 'g'));
    };

    Link.prototype._optOut = function() {
      var ignore, link;
      link = this.originalElement;
      while (!(ignore || link === document)) {
        ignore = link.getAttribute('data-no-turbolink') != null;
        link = link.parentNode;
      }
      return ignore;
    };

    Link.prototype._target = function() {
      return this.link.target.length !== 0;
    };

    return Link;

  })(ComponentUrl);

  Click = (function() {
    Click.installHandlerLast = function(event) {
      if (!event.defaultPrevented) {
        document.removeEventListener('click', Click.handle, false);
        return document.addEventListener('click', Click.handle, false);
      }
    };

    Click.handle = function(event) {
      return new Click(event);
    };

    function Click(event1) {
      this.event = event1;
      if (this.event.defaultPrevented) {
        return;
      }
      this._extractLink();
      if (this._validForTurbolinks()) {
        if (!pageChangePrevented(this.link.absolute)) {
          visit(this.link.href);
        }
        this.event.preventDefault();
      }
    }

    Click.prototype._extractLink = function() {
      var link;
      link = this.event.target;
      while (!(!link.parentNode || link.nodeName === 'A')) {
        link = link.parentNode;
      }
      if (link.nodeName === 'A' && link.href.length !== 0) {
        return this.link = new Link(link);
      }
    };

    Click.prototype._validForTurbolinks = function() {
      return (this.link != null) && !(this.link.shouldIgnore() || this._nonStandardClick());
    };

    Click.prototype._nonStandardClick = function() {
      return this.event.which > 1 || this.event.metaKey || this.event.ctrlKey || this.event.shiftKey || this.event.altKey;
    };

    return Click;

  })();

  ProgressBar = (function() {
    var className;

    className = 'turbolinks-progress-bar';

    function ProgressBar(elementSelector) {
      this.elementSelector = elementSelector;
      this._trickle = bind(this._trickle, this);
      this.value = 0;
      this.content = '';
      this.speed = 300;
      this.opacity = 0.99;
      this.install();
    }

    ProgressBar.prototype.install = function() {
      this.element = document.querySelector(this.elementSelector);
      this.element.classList.add(className);
      this.styleElement = document.createElement('style');
      document.head.appendChild(this.styleElement);
      return this._updateStyle();
    };

    ProgressBar.prototype.uninstall = function() {
      this.element.classList.remove(className);
      return document.head.removeChild(this.styleElement);
    };

    ProgressBar.prototype.start = function() {
      return this.advanceTo(5);
    };

    ProgressBar.prototype.advanceTo = function(value) {
      var ref;
      if ((value > (ref = this.value) && ref <= 100)) {
        this.value = value;
        this._updateStyle();
        if (this.value === 100) {
          return this._stopTrickle();
        } else if (this.value > 0) {
          return this._startTrickle();
        }
      }
    };

    ProgressBar.prototype.done = function() {
      if (this.value > 0) {
        this.advanceTo(100);
        return this._reset();
      }
    };

    ProgressBar.prototype._reset = function() {
      var originalOpacity;
      originalOpacity = this.opacity;
      setTimeout((function(_this) {
        return function() {
          _this.opacity = 0;
          return _this._updateStyle();
        };
      })(this), this.speed / 2);
      return setTimeout((function(_this) {
        return function() {
          _this.value = 0;
          _this.opacity = originalOpacity;
          return _this._withSpeed(0, function() {
            return _this._updateStyle(true);
          });
        };
      })(this), this.speed);
    };

    ProgressBar.prototype._startTrickle = function() {
      if (this.trickling) {
        return;
      }
      this.trickling = true;
      return setTimeout(this._trickle, this.speed);
    };

    ProgressBar.prototype._stopTrickle = function() {
      return delete this.trickling;
    };

    ProgressBar.prototype._trickle = function() {
      if (!this.trickling) {
        return;
      }
      this.advanceTo(this.value + Math.random() / 2);
      return setTimeout(this._trickle, this.speed);
    };

    ProgressBar.prototype._withSpeed = function(speed, fn) {
      var originalSpeed, result;
      originalSpeed = this.speed;
      this.speed = speed;
      result = fn();
      this.speed = originalSpeed;
      return result;
    };

    ProgressBar.prototype._updateStyle = function(forceRepaint) {
      if (forceRepaint == null) {
        forceRepaint = false;
      }
      if (forceRepaint) {
        this._changeContentToForceRepaint();
      }
      return this.styleElement.textContent = this._createCSSRule();
    };

    ProgressBar.prototype._changeContentToForceRepaint = function() {
      return this.content = this.content === '' ? ' ' : '';
    };

    ProgressBar.prototype._createCSSRule = function() {
      return this.elementSelector + "." + className + "::before {\n  content: '" + this.content + "';\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 2000;\n  background-color: #0076ff;\n  height: 3px;\n  opacity: " + this.opacity + ";\n  width: " + this.value + "%;\n  transition: width " + this.speed + "ms ease-out, opacity " + (this.speed / 2) + "ms ease-in;\n  transform: translate3d(0,0,0);\n}";
    };

    return ProgressBar;

  })();

  bypassOnLoadPopstate = function(fn) {
    return setTimeout(fn, 500);
  };

  installDocumentReadyPageEventTriggers = function() {
    return document.addEventListener('DOMContentLoaded', (function() {
      triggerEvent(EVENTS.CHANGE);
      return triggerEvent(EVENTS.UPDATE);
    }), true);
  };

  installJqueryAjaxSuccessPageUpdateTrigger = function() {
    if (typeof jQuery !== 'undefined') {
      return jQuery(document).on('ajaxSuccess', function(event, xhr, settings) {
        if (!jQuery.trim(xhr.responseText)) {
          return;
        }
        return triggerEvent(EVENTS.UPDATE);
      });
    }
  };

  installHistoryChangeHandler = function(event) {
    var cachedPage, ref;
    if ((ref = event.state) != null ? ref.turbolinks : void 0) {
      if (cachedPage = pageCache[(new ComponentUrl(event.state.url)).absolute]) {
        cacheCurrentPage();
        return fetchHistory(cachedPage);
      } else {
        return visit(event.target.location.href);
      }
    }
  };

  initializeTurbolinks = function() {
    rememberCurrentUrl();
    rememberCurrentState();
    document.addEventListener('click', Click.installHandlerLast, true);
    window.addEventListener('hashchange', function(event) {
      rememberCurrentUrl();
      return rememberCurrentState();
    }, false);
    return bypassOnLoadPopstate(function() {
      return window.addEventListener('popstate', installHistoryChangeHandler, false);
    });
  };

  historyStateIsDefined = window.history.state !== void 0 || navigator.userAgent.match(/Firefox\/2[6|7]/);

  browserSupportsPushState = window.history && window.history.pushState && window.history.replaceState && historyStateIsDefined;

  browserIsntBuggy = !navigator.userAgent.match(/CriOS\//);

  requestMethodIsSafe = (ref = popCookie('request_method')) === 'GET' || ref === '';

  browserSupportsTurbolinks = browserSupportsPushState && browserIsntBuggy && requestMethodIsSafe;

  browserSupportsCustomEvents = document.addEventListener && document.createEvent;

  if (browserSupportsCustomEvents) {
    installDocumentReadyPageEventTriggers();
    installJqueryAjaxSuccessPageUpdateTrigger();
  }

  if (browserSupportsTurbolinks) {
    visit = fetch;
    initializeTurbolinks();
  } else {
    visit = function(url) {
      return document.location.href = url;
    };
  }

  this.Turbolinks = {
    visit: visit,
    pagesCached: pagesCached,
    enableTransitionCache: enableTransitionCache,
    enableProgressBar: enableProgressBar,
    allowLinkExtensions: Link.allowExtensions,
    supported: browserSupportsTurbolinks,
    EVENTS: clone(EVENTS)
  };

}).call(this);



(function() {
  if (typeof window['CKEDITOR_BASEPATH'] === "undefined" || window['CKEDITOR_BASEPATH'] === null) {
    window['CKEDITOR_BASEPATH'] = "/assets/ckeditor/";
  }
}).call(this);
/*
Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.md or http://ckeditor.com/license
*/

(function(){if(window.CKEDITOR&&window.CKEDITOR.dom)return;window.CKEDITOR||(window.CKEDITOR=function(){var a=/(^|.*[\\\/])ckeditor\.js(?:\?.*|;.*)?$/i,f={timestamp:"F0RD",version:"4.4.7",revision:"3a35b3d",rnd:Math.floor(900*Math.random())+100,_:{pending:[],basePathSrcPattern:a},status:"unloaded",basePath:function(){var e=window.CKEDITOR_BASEPATH||"";if(!e)for(var d=document.getElementsByTagName("script"),c=0;c<d.length;c++){var b=d[c].src.match(a);if(b){e=b[1];break}}-1==e.indexOf(":/")&&"//"!=e.slice(0,2)&&(e=0===e.indexOf("/")?location.href.match(/^.*?:\/\/[^\/]*/)[0]+
e:location.href.match(/^[^\?]*\/(?:)/)[0]+e);if(!e)throw'The CKEditor installation path could not be automatically detected. Please set the global variable "CKEDITOR_BASEPATH" before creating editor instances.';return e}(),getUrl:function(a){-1==a.indexOf(":/")&&0!==a.indexOf("/")&&(a=this.basePath+a);this.timestamp&&("/"!=a.charAt(a.length-1)&&!/[&?]t=/.test(a))&&(a+=(0<=a.indexOf("?")?"&":"?")+"t="+this.timestamp);return a},domReady:function(){function a(){try{document.addEventListener?(document.removeEventListener("DOMContentLoaded",
a,!1),d()):document.attachEvent&&"complete"===document.readyState&&(document.detachEvent("onreadystatechange",a),d())}catch(c){}}function d(){for(var a;a=c.shift();)a()}var c=[];return function(d){function b(){try{document.documentElement.doScroll("left")}catch(m){setTimeout(b,1);return}a()}c.push(d);"complete"===document.readyState&&setTimeout(a,1);if(1==c.length)if(document.addEventListener)document.addEventListener("DOMContentLoaded",a,!1),window.addEventListener("load",a,!1);else if(document.attachEvent){document.attachEvent("onreadystatechange",
a);window.attachEvent("onload",a);d=!1;try{d=!window.frameElement}catch(f){}document.documentElement.doScroll&&d&&b()}}}()},b=window.CKEDITOR_GETURL;if(b){var c=f.getUrl;f.getUrl=function(a){return b.call(f,a)||c.call(f,a)}}return f}());
CKEDITOR.event||(CKEDITOR.event=function(){},CKEDITOR.event.implementOn=function(a){var f=CKEDITOR.event.prototype,b;for(b in f)a[b]==null&&(a[b]=f[b])},CKEDITOR.event.prototype=function(){function a(a){var e=f(this);return e[a]||(e[a]=new b(a))}var f=function(a){a=a.getPrivate&&a.getPrivate()||a._||(a._={});return a.events||(a.events={})},b=function(a){this.name=a;this.listeners=[]};b.prototype={getListenerIndex:function(a){for(var e=0,d=this.listeners;e<d.length;e++)if(d[e].fn==a)return e;return-1}};
return{define:function(b,e){var d=a.call(this,b);CKEDITOR.tools.extend(d,e,true)},on:function(b,e,d,f,k){function j(a,m,y,s){a={name:b,sender:this,editor:a,data:m,listenerData:f,stop:y,cancel:s,removeListener:g};return e.call(d,a)===false?false:a.data}function g(){y.removeListener(b,e)}var m=a.call(this,b);if(m.getListenerIndex(e)<0){m=m.listeners;d||(d=this);isNaN(k)&&(k=10);var y=this;j.fn=e;j.priority=k;for(var s=m.length-1;s>=0;s--)if(m[s].priority<=k){m.splice(s+1,0,j);return{removeListener:g}}m.unshift(j)}return{removeListener:g}},
once:function(){var a=Array.prototype.slice.call(arguments),e=a[1];a[1]=function(a){a.removeListener();return e.apply(this,arguments)};return this.on.apply(this,a)},capture:function(){CKEDITOR.event.useCapture=1;var a=this.on.apply(this,arguments);CKEDITOR.event.useCapture=0;return a},fire:function(){var a=0,e=function(){a=1},d=0,b=function(){d=1};return function(k,j,g){var m=f(this)[k],k=a,y=d;a=d=0;if(m){var s=m.listeners;if(s.length)for(var s=s.slice(0),w,q=0;q<s.length;q++){if(m.errorProof)try{w=
s[q].call(this,g,j,e,b)}catch(t){}else w=s[q].call(this,g,j,e,b);w===false?d=1:typeof w!="undefined"&&(j=w);if(a||d)break}}j=d?false:typeof j=="undefined"?true:j;a=k;d=y;return j}}(),fireOnce:function(a,e,d){e=this.fire(a,e,d);delete f(this)[a];return e},removeListener:function(a,e){var d=f(this)[a];if(d){var b=d.getListenerIndex(e);b>=0&&d.listeners.splice(b,1)}},removeAllListeners:function(){var a=f(this),e;for(e in a)delete a[e]},hasListeners:function(a){return(a=f(this)[a])&&a.listeners.length>
0}}}());CKEDITOR.editor||(CKEDITOR.editor=function(){CKEDITOR._.pending.push([this,arguments]);CKEDITOR.event.call(this)},CKEDITOR.editor.prototype.fire=function(a,f){a in{instanceReady:1,loaded:1}&&(this[a]=true);return CKEDITOR.event.prototype.fire.call(this,a,f,this)},CKEDITOR.editor.prototype.fireOnce=function(a,f){a in{instanceReady:1,loaded:1}&&(this[a]=true);return CKEDITOR.event.prototype.fireOnce.call(this,a,f,this)},CKEDITOR.event.implementOn(CKEDITOR.editor.prototype));
CKEDITOR.env||(CKEDITOR.env=function(){var a=navigator.userAgent.toLowerCase(),f={ie:a.indexOf("trident/")>-1,webkit:a.indexOf(" applewebkit/")>-1,air:a.indexOf(" adobeair/")>-1,mac:a.indexOf("macintosh")>-1,quirks:document.compatMode=="BackCompat"&&(!document.documentMode||document.documentMode<10),mobile:a.indexOf("mobile")>-1,iOS:/(ipad|iphone|ipod)/.test(a),isCustomDomain:function(){if(!this.ie)return false;var a=document.domain,d=window.location.hostname;return a!=d&&a!="["+d+"]"},secure:location.protocol==
"https:"};f.gecko=navigator.product=="Gecko"&&!f.webkit&&!f.ie;if(f.webkit)a.indexOf("chrome")>-1?f.chrome=true:f.safari=true;var b=0;if(f.ie){b=f.quirks||!document.documentMode?parseFloat(a.match(/msie (\d+)/)[1]):document.documentMode;f.ie9Compat=b==9;f.ie8Compat=b==8;f.ie7Compat=b==7;f.ie6Compat=b<7||f.quirks}if(f.gecko){var c=a.match(/rv:([\d\.]+)/);if(c){c=c[1].split(".");b=c[0]*1E4+(c[1]||0)*100+(c[2]||0)*1}}f.air&&(b=parseFloat(a.match(/ adobeair\/(\d+)/)[1]));f.webkit&&(b=parseFloat(a.match(/ applewebkit\/(\d+)/)[1]));
f.version=b;f.isCompatible=f.iOS&&b>=534||!f.mobile&&(f.ie&&b>6||f.gecko&&b>=2E4||f.air&&b>=1||f.webkit&&b>=522||false);f.hidpi=window.devicePixelRatio>=2;f.needsBrFiller=f.gecko||f.webkit||f.ie&&b>10;f.needsNbspFiller=f.ie&&b<11;f.cssClass="cke_browser_"+(f.ie?"ie":f.gecko?"gecko":f.webkit?"webkit":"unknown");if(f.quirks)f.cssClass=f.cssClass+" cke_browser_quirks";if(f.ie)f.cssClass=f.cssClass+(" cke_browser_ie"+(f.quirks?"6 cke_browser_iequirks":f.version));if(f.air)f.cssClass=f.cssClass+" cke_browser_air";
if(f.iOS)f.cssClass=f.cssClass+" cke_browser_ios";if(f.hidpi)f.cssClass=f.cssClass+" cke_hidpi";return f}());
"unloaded"==CKEDITOR.status&&function(){CKEDITOR.event.implementOn(CKEDITOR);CKEDITOR.loadFullCore=function(){if(CKEDITOR.status!="basic_ready")CKEDITOR.loadFullCore._load=1;else{delete CKEDITOR.loadFullCore;var a=document.createElement("script");a.type="text/javascript";a.src=CKEDITOR.basePath+"ckeditor.js";document.getElementsByTagName("head")[0].appendChild(a)}};CKEDITOR.loadFullCoreTimeout=0;CKEDITOR.add=function(a){(this._.pending||(this._.pending=[])).push(a)};(function(){CKEDITOR.domReady(function(){var a=
CKEDITOR.loadFullCore,f=CKEDITOR.loadFullCoreTimeout;if(a){CKEDITOR.status="basic_ready";a&&a._load?a():f&&setTimeout(function(){CKEDITOR.loadFullCore&&CKEDITOR.loadFullCore()},f*1E3)}})})();CKEDITOR.status="basic_loaded"}();CKEDITOR.dom={};
(function(){var a=[],f=CKEDITOR.env.gecko?"-moz-":CKEDITOR.env.webkit?"-webkit-":CKEDITOR.env.ie?"-ms-":"",b=/&/g,c=/>/g,e=/</g,d=/"/g,h=/&amp;/g,k=/&gt;/g,j=/&lt;/g,g=/&quot;/g;CKEDITOR.on("reset",function(){a=[]});CKEDITOR.tools={arrayCompare:function(a,e){if(!a&&!e)return true;if(!a||!e||a.length!=e.length)return false;for(var d=0;d<a.length;d++)if(a[d]!=e[d])return false;return true},clone:function(a){var e;if(a&&a instanceof Array){e=[];for(var d=0;d<a.length;d++)e[d]=CKEDITOR.tools.clone(a[d]);
return e}if(a===null||typeof a!="object"||a instanceof String||a instanceof Number||a instanceof Boolean||a instanceof Date||a instanceof RegExp||a.nodeType||a.window===a)return a;e=new a.constructor;for(d in a)e[d]=CKEDITOR.tools.clone(a[d]);return e},capitalize:function(a,e){return a.charAt(0).toUpperCase()+(e?a.slice(1):a.slice(1).toLowerCase())},extend:function(a){var e=arguments.length,d,b;if(typeof(d=arguments[e-1])=="boolean")e--;else if(typeof(d=arguments[e-2])=="boolean"){b=arguments[e-1];
e=e-2}for(var c=1;c<e;c++){var f=arguments[c],i;for(i in f)if(d===true||a[i]==null)if(!b||i in b)a[i]=f[i]}return a},prototypedCopy:function(a){var e=function(){};e.prototype=a;return new e},copy:function(a){var e={},d;for(d in a)e[d]=a[d];return e},isArray:function(a){return Object.prototype.toString.call(a)=="[object Array]"},isEmpty:function(a){for(var e in a)if(a.hasOwnProperty(e))return false;return true},cssVendorPrefix:function(a,e,d){if(d)return f+a+":"+e+";"+a+":"+e;d={};d[a]=e;d[f+a]=e;
return d},cssStyleToDomStyle:function(){var a=document.createElement("div").style,e=typeof a.cssFloat!="undefined"?"cssFloat":typeof a.styleFloat!="undefined"?"styleFloat":"float";return function(a){return a=="float"?e:a.replace(/-./g,function(a){return a.substr(1).toUpperCase()})}}(),buildStyleHtml:function(a){for(var a=[].concat(a),e,d=[],b=0;b<a.length;b++)if(e=a[b])/@import|[{}]/.test(e)?d.push("<style>"+e+"</style>"):d.push('<link type="text/css" rel=stylesheet href="'+e+'">');return d.join("")},
htmlEncode:function(a){return(""+a).replace(b,"&amp;").replace(c,"&gt;").replace(e,"&lt;")},htmlDecode:function(a){return a.replace(h,"&").replace(k,">").replace(j,"<")},htmlEncodeAttr:function(a){return a.replace(d,"&quot;").replace(e,"&lt;").replace(c,"&gt;")},htmlDecodeAttr:function(a){return a.replace(g,'"').replace(j,"<").replace(k,">")},getNextNumber:function(){var a=0;return function(){return++a}}(),getNextId:function(){return"cke_"+this.getNextNumber()},override:function(a,e){var d=e(a);d.prototype=
a.prototype;return d},setTimeout:function(a,e,d,b,c){c||(c=window);d||(d=c);return c.setTimeout(function(){b?a.apply(d,[].concat(b)):a.apply(d)},e||0)},trim:function(){var a=/(?:^[ \t\n\r]+)|(?:[ \t\n\r]+$)/g;return function(e){return e.replace(a,"")}}(),ltrim:function(){var a=/^[ \t\n\r]+/g;return function(e){return e.replace(a,"")}}(),rtrim:function(){var a=/[ \t\n\r]+$/g;return function(e){return e.replace(a,"")}}(),indexOf:function(a,e){if(typeof e=="function")for(var d=0,b=a.length;d<b;d++){if(e(a[d]))return d}else{if(a.indexOf)return a.indexOf(e);
d=0;for(b=a.length;d<b;d++)if(a[d]===e)return d}return-1},search:function(a,e){var d=CKEDITOR.tools.indexOf(a,e);return d>=0?a[d]:null},bind:function(a,e){return function(){return a.apply(e,arguments)}},createClass:function(a){var e=a.$,d=a.base,b=a.privates||a._,c=a.proto,a=a.statics;!e&&(e=function(){d&&this.base.apply(this,arguments)});if(b)var f=e,e=function(){var a=this._||(this._={}),e;for(e in b){var d=b[e];a[e]=typeof d=="function"?CKEDITOR.tools.bind(d,this):d}f.apply(this,arguments)};if(d){e.prototype=
this.prototypedCopy(d.prototype);e.prototype.constructor=e;e.base=d;e.baseProto=d.prototype;e.prototype.base=function(){this.base=d.prototype.base;d.apply(this,arguments);this.base=arguments.callee}}c&&this.extend(e.prototype,c,true);a&&this.extend(e,a,true);return e},addFunction:function(e,d){return a.push(function(){return e.apply(d||this,arguments)})-1},removeFunction:function(e){a[e]=null},callFunction:function(e){var d=a[e];return d&&d.apply(window,Array.prototype.slice.call(arguments,1))},cssLength:function(){var a=
/^-?\d+\.?\d*px$/,e;return function(d){e=CKEDITOR.tools.trim(d+"")+"px";return a.test(e)?e:d||""}}(),convertToPx:function(){var a;return function(e){if(!a){a=CKEDITOR.dom.element.createFromHtml('<div style="position:absolute;left:-9999px;top:-9999px;margin:0px;padding:0px;border:0px;"></div>',CKEDITOR.document);CKEDITOR.document.getBody().append(a)}if(!/%$/.test(e)){a.setStyle("width",e);return a.$.clientWidth}return e}}(),repeat:function(a,e){return Array(e+1).join(a)},tryThese:function(){for(var a,
e=0,d=arguments.length;e<d;e++){var b=arguments[e];try{a=b();break}catch(c){}}return a},genKey:function(){return Array.prototype.slice.call(arguments).join("-")},defer:function(a){return function(){var e=arguments,d=this;window.setTimeout(function(){a.apply(d,e)},0)}},normalizeCssText:function(a,e){var d=[],b,c=CKEDITOR.tools.parseCssText(a,true,e);for(b in c)d.push(b+":"+c[b]);d.sort();return d.length?d.join(";")+";":""},convertRgbToHex:function(a){return a.replace(/(?:rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\))/gi,
function(a,e,d,b){a=[e,d,b];for(e=0;e<3;e++)a[e]=("0"+parseInt(a[e],10).toString(16)).slice(-2);return"#"+a.join("")})},parseCssText:function(a,e,d){var b={};if(d){d=new CKEDITOR.dom.element("span");d.setAttribute("style",a);a=CKEDITOR.tools.convertRgbToHex(d.getAttribute("style")||"")}if(!a||a==";")return b;a.replace(/&quot;/g,'"').replace(/\s*([^:;\s]+)\s*:\s*([^;]+)\s*(?=;|$)/g,function(a,d,m){if(e){d=d.toLowerCase();d=="font-family"&&(m=m.toLowerCase().replace(/["']/g,"").replace(/\s*,\s*/g,","));
m=CKEDITOR.tools.trim(m)}b[d]=m});return b},writeCssText:function(a,e){var d,b=[];for(d in a)b.push(d+":"+a[d]);e&&b.sort();return b.join("; ")},objectCompare:function(a,e,d){var b;if(!a&&!e)return true;if(!a||!e)return false;for(b in a)if(a[b]!=e[b])return false;if(!d)for(b in e)if(a[b]!=e[b])return false;return true},objectKeys:function(a){var e=[],d;for(d in a)e.push(d);return e},convertArrayToObject:function(a,e){var d={};arguments.length==1&&(e=true);for(var b=0,c=a.length;b<c;++b)d[a[b]]=e;
return d},fixDomain:function(){for(var a;;)try{a=window.parent.document.domain;break}catch(e){a=a?a.replace(/.+?(?:\.|$)/,""):document.domain;if(!a)break;document.domain=a}return!!a},eventsBuffer:function(a,e){function d(){c=(new Date).getTime();b=false;e()}var b,c=0;return{input:function(){if(!b){var e=(new Date).getTime()-c;e<a?b=setTimeout(d,a-e):d()}},reset:function(){b&&clearTimeout(b);b=c=0}}},enableHtml5Elements:function(a,e){for(var d=["abbr","article","aside","audio","bdi","canvas","data",
"datalist","details","figcaption","figure","footer","header","hgroup","mark","meter","nav","output","progress","section","summary","time","video"],b=d.length,c;b--;){c=a.createElement(d[b]);e&&a.appendChild(c)}},checkIfAnyArrayItemMatches:function(a,e){for(var d=0,b=a.length;d<b;++d)if(a[d].match(e))return true;return false},checkIfAnyObjectPropertyMatches:function(a,e){for(var d in a)if(d.match(e))return true;return false},transparentImageData:"data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw=="}})();
CKEDITOR.dtd=function(){var a=CKEDITOR.tools.extend,f=function(a,e){for(var d=CKEDITOR.tools.clone(a),b=1;b<arguments.length;b++){var e=arguments[b],c;for(c in e)delete d[c]}return d},b={},c={},e={address:1,article:1,aside:1,blockquote:1,details:1,div:1,dl:1,fieldset:1,figure:1,footer:1,form:1,h1:1,h2:1,h3:1,h4:1,h5:1,h6:1,header:1,hgroup:1,hr:1,main:1,menu:1,nav:1,ol:1,p:1,pre:1,section:1,table:1,ul:1},d={command:1,link:1,meta:1,noscript:1,script:1,style:1},h={},k={"#":1},j={center:1,dir:1,noframes:1};
a(b,{a:1,abbr:1,area:1,audio:1,b:1,bdi:1,bdo:1,br:1,button:1,canvas:1,cite:1,code:1,command:1,datalist:1,del:1,dfn:1,em:1,embed:1,i:1,iframe:1,img:1,input:1,ins:1,kbd:1,keygen:1,label:1,map:1,mark:1,meter:1,noscript:1,object:1,output:1,progress:1,q:1,ruby:1,s:1,samp:1,script:1,select:1,small:1,span:1,strong:1,sub:1,sup:1,textarea:1,time:1,u:1,"var":1,video:1,wbr:1},k,{acronym:1,applet:1,basefont:1,big:1,font:1,isindex:1,strike:1,style:1,tt:1});a(c,e,b,j);f={a:f(b,{a:1,button:1}),abbr:b,address:c,
area:h,article:c,aside:c,audio:a({source:1,track:1},c),b:b,base:h,bdi:b,bdo:b,blockquote:c,body:c,br:h,button:f(b,{a:1,button:1}),canvas:b,caption:c,cite:b,code:b,col:h,colgroup:{col:1},command:h,datalist:a({option:1},b),dd:c,del:b,details:a({summary:1},c),dfn:b,div:c,dl:{dt:1,dd:1},dt:c,em:b,embed:h,fieldset:a({legend:1},c),figcaption:c,figure:a({figcaption:1},c),footer:c,form:c,h1:b,h2:b,h3:b,h4:b,h5:b,h6:b,head:a({title:1,base:1},d),header:c,hgroup:{h1:1,h2:1,h3:1,h4:1,h5:1,h6:1},hr:h,html:a({head:1,
body:1},c,d),i:b,iframe:k,img:h,input:h,ins:b,kbd:b,keygen:h,label:b,legend:b,li:c,link:h,main:c,map:c,mark:b,menu:a({li:1},c),meta:h,meter:f(b,{meter:1}),nav:c,noscript:a({link:1,meta:1,style:1},b),object:a({param:1},b),ol:{li:1},optgroup:{option:1},option:k,output:b,p:b,param:h,pre:b,progress:f(b,{progress:1}),q:b,rp:b,rt:b,ruby:a({rp:1,rt:1},b),s:b,samp:b,script:k,section:c,select:{optgroup:1,option:1},small:b,source:h,span:b,strong:b,style:k,sub:b,summary:b,sup:b,table:{caption:1,colgroup:1,thead:1,
tfoot:1,tbody:1,tr:1},tbody:{tr:1},td:c,textarea:k,tfoot:{tr:1},th:c,thead:{tr:1},time:f(b,{time:1}),title:k,tr:{th:1,td:1},track:h,u:b,ul:{li:1},"var":b,video:a({source:1,track:1},c),wbr:h,acronym:b,applet:a({param:1},c),basefont:h,big:b,center:c,dialog:h,dir:{li:1},font:b,isindex:h,noframes:c,strike:b,tt:b};a(f,{$block:a({audio:1,dd:1,dt:1,figcaption:1,li:1,video:1},e,j),$blockLimit:{article:1,aside:1,audio:1,body:1,caption:1,details:1,dir:1,div:1,dl:1,fieldset:1,figcaption:1,figure:1,footer:1,
form:1,header:1,hgroup:1,main:1,menu:1,nav:1,ol:1,section:1,table:1,td:1,th:1,tr:1,ul:1,video:1},$cdata:{script:1,style:1},$editable:{address:1,article:1,aside:1,blockquote:1,body:1,details:1,div:1,fieldset:1,figcaption:1,footer:1,form:1,h1:1,h2:1,h3:1,h4:1,h5:1,h6:1,header:1,hgroup:1,main:1,nav:1,p:1,pre:1,section:1},$empty:{area:1,base:1,basefont:1,br:1,col:1,command:1,dialog:1,embed:1,hr:1,img:1,input:1,isindex:1,keygen:1,link:1,meta:1,param:1,source:1,track:1,wbr:1},$inline:b,$list:{dl:1,ol:1,
ul:1},$listItem:{dd:1,dt:1,li:1},$nonBodyContent:a({body:1,head:1,html:1},f.head),$nonEditable:{applet:1,audio:1,button:1,embed:1,iframe:1,map:1,object:1,option:1,param:1,script:1,textarea:1,video:1},$object:{applet:1,audio:1,button:1,hr:1,iframe:1,img:1,input:1,object:1,select:1,table:1,textarea:1,video:1},$removeEmpty:{abbr:1,acronym:1,b:1,bdi:1,bdo:1,big:1,cite:1,code:1,del:1,dfn:1,em:1,font:1,i:1,ins:1,label:1,kbd:1,mark:1,meter:1,output:1,q:1,ruby:1,s:1,samp:1,small:1,span:1,strike:1,strong:1,
sub:1,sup:1,time:1,tt:1,u:1,"var":1},$tabIndex:{a:1,area:1,button:1,input:1,object:1,select:1,textarea:1},$tableContent:{caption:1,col:1,colgroup:1,tbody:1,td:1,tfoot:1,th:1,thead:1,tr:1},$transparent:{a:1,audio:1,canvas:1,del:1,ins:1,map:1,noscript:1,object:1,video:1},$intermediate:{caption:1,colgroup:1,dd:1,dt:1,figcaption:1,legend:1,li:1,optgroup:1,option:1,rp:1,rt:1,summary:1,tbody:1,td:1,tfoot:1,th:1,thead:1,tr:1}});return f}();CKEDITOR.dom.event=function(a){this.$=a};
CKEDITOR.dom.event.prototype={getKey:function(){return this.$.keyCode||this.$.which},getKeystroke:function(){var a=this.getKey();if(this.$.ctrlKey||this.$.metaKey)a=a+CKEDITOR.CTRL;this.$.shiftKey&&(a=a+CKEDITOR.SHIFT);this.$.altKey&&(a=a+CKEDITOR.ALT);return a},preventDefault:function(a){var f=this.$;f.preventDefault?f.preventDefault():f.returnValue=false;a&&this.stopPropagation()},stopPropagation:function(){var a=this.$;a.stopPropagation?a.stopPropagation():a.cancelBubble=true},getTarget:function(){var a=
this.$.target||this.$.srcElement;return a?new CKEDITOR.dom.node(a):null},getPhase:function(){return this.$.eventPhase||2},getPageOffset:function(){var a=this.getTarget().getDocument().$;return{x:this.$.pageX||this.$.clientX+(a.documentElement.scrollLeft||a.body.scrollLeft),y:this.$.pageY||this.$.clientY+(a.documentElement.scrollTop||a.body.scrollTop)}}};CKEDITOR.CTRL=1114112;CKEDITOR.SHIFT=2228224;CKEDITOR.ALT=4456448;CKEDITOR.EVENT_PHASE_CAPTURING=1;CKEDITOR.EVENT_PHASE_AT_TARGET=2;
CKEDITOR.EVENT_PHASE_BUBBLING=3;CKEDITOR.dom.domObject=function(a){if(a)this.$=a};
CKEDITOR.dom.domObject.prototype=function(){var a=function(a,b){return function(c){typeof CKEDITOR!="undefined"&&a.fire(b,new CKEDITOR.dom.event(c))}};return{getPrivate:function(){var a;if(!(a=this.getCustomData("_")))this.setCustomData("_",a={});return a},on:function(f){var b=this.getCustomData("_cke_nativeListeners");if(!b){b={};this.setCustomData("_cke_nativeListeners",b)}if(!b[f]){b=b[f]=a(this,f);this.$.addEventListener?this.$.addEventListener(f,b,!!CKEDITOR.event.useCapture):this.$.attachEvent&&
this.$.attachEvent("on"+f,b)}return CKEDITOR.event.prototype.on.apply(this,arguments)},removeListener:function(a){CKEDITOR.event.prototype.removeListener.apply(this,arguments);if(!this.hasListeners(a)){var b=this.getCustomData("_cke_nativeListeners"),c=b&&b[a];if(c){this.$.removeEventListener?this.$.removeEventListener(a,c,false):this.$.detachEvent&&this.$.detachEvent("on"+a,c);delete b[a]}}},removeAllListeners:function(){var a=this.getCustomData("_cke_nativeListeners"),b;for(b in a){var c=a[b];this.$.detachEvent?
this.$.detachEvent("on"+b,c):this.$.removeEventListener&&this.$.removeEventListener(b,c,false);delete a[b]}CKEDITOR.event.prototype.removeAllListeners.call(this)}}}();
(function(a){var f={};CKEDITOR.on("reset",function(){f={}});a.equals=function(a){try{return a&&a.$===this.$}catch(c){return false}};a.setCustomData=function(a,c){var e=this.getUniqueId();(f[e]||(f[e]={}))[a]=c;return this};a.getCustomData=function(a){var c=this.$["data-cke-expando"];return(c=c&&f[c])&&a in c?c[a]:null};a.removeCustomData=function(a){var c=this.$["data-cke-expando"],c=c&&f[c],e,d;if(c){e=c[a];d=a in c;delete c[a]}return d?e:null};a.clearCustomData=function(){this.removeAllListeners();
var a=this.$["data-cke-expando"];a&&delete f[a]};a.getUniqueId=function(){return this.$["data-cke-expando"]||(this.$["data-cke-expando"]=CKEDITOR.tools.getNextNumber())};CKEDITOR.event.implementOn(a)})(CKEDITOR.dom.domObject.prototype);
CKEDITOR.dom.node=function(a){return a?new CKEDITOR.dom[a.nodeType==CKEDITOR.NODE_DOCUMENT?"document":a.nodeType==CKEDITOR.NODE_ELEMENT?"element":a.nodeType==CKEDITOR.NODE_TEXT?"text":a.nodeType==CKEDITOR.NODE_COMMENT?"comment":a.nodeType==CKEDITOR.NODE_DOCUMENT_FRAGMENT?"documentFragment":"domObject"](a):this};CKEDITOR.dom.node.prototype=new CKEDITOR.dom.domObject;CKEDITOR.NODE_ELEMENT=1;CKEDITOR.NODE_DOCUMENT=9;CKEDITOR.NODE_TEXT=3;CKEDITOR.NODE_COMMENT=8;CKEDITOR.NODE_DOCUMENT_FRAGMENT=11;
CKEDITOR.POSITION_IDENTICAL=0;CKEDITOR.POSITION_DISCONNECTED=1;CKEDITOR.POSITION_FOLLOWING=2;CKEDITOR.POSITION_PRECEDING=4;CKEDITOR.POSITION_IS_CONTAINED=8;CKEDITOR.POSITION_CONTAINS=16;
CKEDITOR.tools.extend(CKEDITOR.dom.node.prototype,{appendTo:function(a,f){a.append(this,f);return a},clone:function(a,f){var b=this.$.cloneNode(a),c=function(e){e["data-cke-expando"]&&(e["data-cke-expando"]=false);if(e.nodeType==CKEDITOR.NODE_ELEMENT){f||e.removeAttribute("id",false);if(a)for(var e=e.childNodes,d=0;d<e.length;d++)c(e[d])}};c(b);return new CKEDITOR.dom.node(b)},hasPrevious:function(){return!!this.$.previousSibling},hasNext:function(){return!!this.$.nextSibling},insertAfter:function(a){a.$.parentNode.insertBefore(this.$,
a.$.nextSibling);return a},insertBefore:function(a){a.$.parentNode.insertBefore(this.$,a.$);return a},insertBeforeMe:function(a){this.$.parentNode.insertBefore(a.$,this.$);return a},getAddress:function(a){for(var f=[],b=this.getDocument().$.documentElement,c=this.$;c&&c!=b;){var e=c.parentNode;e&&f.unshift(this.getIndex.call({$:c},a));c=e}return f},getDocument:function(){return new CKEDITOR.dom.document(this.$.ownerDocument||this.$.parentNode.ownerDocument)},getIndex:function(a){function f(a,e){var b=
e?a.nextSibling:a.previousSibling;return!b||b.nodeType!=CKEDITOR.NODE_TEXT?null:b.nodeValue?b:f(b,e)}var b=this.$,c=-1,e;if(!this.$.parentNode||a&&b.nodeType==CKEDITOR.NODE_TEXT&&!b.nodeValue&&!f(b)&&!f(b,true))return-1;do if(!a||!(b!=this.$&&b.nodeType==CKEDITOR.NODE_TEXT&&(e||!b.nodeValue))){c++;e=b.nodeType==CKEDITOR.NODE_TEXT}while(b=b.previousSibling);return c},getNextSourceNode:function(a,f,b){if(b&&!b.call)var c=b,b=function(a){return!a.equals(c)};var a=!a&&this.getFirst&&this.getFirst(),e;
if(!a){if(this.type==CKEDITOR.NODE_ELEMENT&&b&&b(this,true)===false)return null;a=this.getNext()}for(;!a&&(e=(e||this).getParent());){if(b&&b(e,true)===false)return null;a=e.getNext()}return!a||b&&b(a)===false?null:f&&f!=a.type?a.getNextSourceNode(false,f,b):a},getPreviousSourceNode:function(a,f,b){if(b&&!b.call)var c=b,b=function(a){return!a.equals(c)};var a=!a&&this.getLast&&this.getLast(),e;if(!a){if(this.type==CKEDITOR.NODE_ELEMENT&&b&&b(this,true)===false)return null;a=this.getPrevious()}for(;!a&&
(e=(e||this).getParent());){if(b&&b(e,true)===false)return null;a=e.getPrevious()}return!a||b&&b(a)===false?null:f&&a.type!=f?a.getPreviousSourceNode(false,f,b):a},getPrevious:function(a){var f=this.$,b;do b=(f=f.previousSibling)&&f.nodeType!=10&&new CKEDITOR.dom.node(f);while(b&&a&&!a(b));return b},getNext:function(a){var f=this.$,b;do b=(f=f.nextSibling)&&new CKEDITOR.dom.node(f);while(b&&a&&!a(b));return b},getParent:function(a){var f=this.$.parentNode;return f&&(f.nodeType==CKEDITOR.NODE_ELEMENT||
a&&f.nodeType==CKEDITOR.NODE_DOCUMENT_FRAGMENT)?new CKEDITOR.dom.node(f):null},getParents:function(a){var f=this,b=[];do b[a?"push":"unshift"](f);while(f=f.getParent());return b},getCommonAncestor:function(a){if(a.equals(this))return this;if(a.contains&&a.contains(this))return a;var f=this.contains?this:this.getParent();do if(f.contains(a))return f;while(f=f.getParent());return null},getPosition:function(a){var f=this.$,b=a.$;if(f.compareDocumentPosition)return f.compareDocumentPosition(b);if(f==
b)return CKEDITOR.POSITION_IDENTICAL;if(this.type==CKEDITOR.NODE_ELEMENT&&a.type==CKEDITOR.NODE_ELEMENT){if(f.contains){if(f.contains(b))return CKEDITOR.POSITION_CONTAINS+CKEDITOR.POSITION_PRECEDING;if(b.contains(f))return CKEDITOR.POSITION_IS_CONTAINED+CKEDITOR.POSITION_FOLLOWING}if("sourceIndex"in f)return f.sourceIndex<0||b.sourceIndex<0?CKEDITOR.POSITION_DISCONNECTED:f.sourceIndex<b.sourceIndex?CKEDITOR.POSITION_PRECEDING:CKEDITOR.POSITION_FOLLOWING}for(var f=this.getAddress(),a=a.getAddress(),
b=Math.min(f.length,a.length),c=0;c<=b-1;c++)if(f[c]!=a[c]){if(c<b)return f[c]<a[c]?CKEDITOR.POSITION_PRECEDING:CKEDITOR.POSITION_FOLLOWING;break}return f.length<a.length?CKEDITOR.POSITION_CONTAINS+CKEDITOR.POSITION_PRECEDING:CKEDITOR.POSITION_IS_CONTAINED+CKEDITOR.POSITION_FOLLOWING},getAscendant:function(a,f){var b=this.$,c,e;if(!f)b=b.parentNode;if(typeof a=="function"){e=true;c=a}else{e=false;c=function(e){e=typeof e.nodeName=="string"?e.nodeName.toLowerCase():"";return typeof a=="string"?e==
a:e in a}}for(;b;){if(c(e?new CKEDITOR.dom.node(b):b))return new CKEDITOR.dom.node(b);try{b=b.parentNode}catch(d){b=null}}return null},hasAscendant:function(a,f){var b=this.$;if(!f)b=b.parentNode;for(;b;){if(b.nodeName&&b.nodeName.toLowerCase()==a)return true;b=b.parentNode}return false},move:function(a,f){a.append(this.remove(),f)},remove:function(a){var f=this.$,b=f.parentNode;if(b){if(a)for(;a=f.firstChild;)b.insertBefore(f.removeChild(a),f);b.removeChild(f)}return this},replace:function(a){this.insertBefore(a);
a.remove()},trim:function(){this.ltrim();this.rtrim()},ltrim:function(){for(var a;this.getFirst&&(a=this.getFirst());){if(a.type==CKEDITOR.NODE_TEXT){var f=CKEDITOR.tools.ltrim(a.getText()),b=a.getLength();if(f){if(f.length<b){a.split(b-f.length);this.$.removeChild(this.$.firstChild)}}else{a.remove();continue}}break}},rtrim:function(){for(var a;this.getLast&&(a=this.getLast());){if(a.type==CKEDITOR.NODE_TEXT){var f=CKEDITOR.tools.rtrim(a.getText()),b=a.getLength();if(f){if(f.length<b){a.split(f.length);
this.$.lastChild.parentNode.removeChild(this.$.lastChild)}}else{a.remove();continue}}break}if(CKEDITOR.env.needsBrFiller)(a=this.$.lastChild)&&(a.type==1&&a.nodeName.toLowerCase()=="br")&&a.parentNode.removeChild(a)},isReadOnly:function(){var a=this;this.type!=CKEDITOR.NODE_ELEMENT&&(a=this.getParent());if(a&&typeof a.$.isContentEditable!="undefined")return!(a.$.isContentEditable||a.data("cke-editable"));for(;a;){if(a.data("cke-editable"))break;if(a.getAttribute("contentEditable")=="false")return true;
if(a.getAttribute("contentEditable")=="true")break;a=a.getParent()}return!a}});CKEDITOR.dom.window=function(a){CKEDITOR.dom.domObject.call(this,a)};CKEDITOR.dom.window.prototype=new CKEDITOR.dom.domObject;
CKEDITOR.tools.extend(CKEDITOR.dom.window.prototype,{focus:function(){this.$.focus()},getViewPaneSize:function(){var a=this.$.document,f=a.compatMode=="CSS1Compat";return{width:(f?a.documentElement.clientWidth:a.body.clientWidth)||0,height:(f?a.documentElement.clientHeight:a.body.clientHeight)||0}},getScrollPosition:function(){var a=this.$;if("pageXOffset"in a)return{x:a.pageXOffset||0,y:a.pageYOffset||0};a=a.document;return{x:a.documentElement.scrollLeft||a.body.scrollLeft||0,y:a.documentElement.scrollTop||
a.body.scrollTop||0}},getFrame:function(){var a=this.$.frameElement;return a?new CKEDITOR.dom.element.get(a):null}});CKEDITOR.dom.document=function(a){CKEDITOR.dom.domObject.call(this,a)};CKEDITOR.dom.document.prototype=new CKEDITOR.dom.domObject;
CKEDITOR.tools.extend(CKEDITOR.dom.document.prototype,{type:CKEDITOR.NODE_DOCUMENT,appendStyleSheet:function(a){if(this.$.createStyleSheet)this.$.createStyleSheet(a);else{var f=new CKEDITOR.dom.element("link");f.setAttributes({rel:"stylesheet",type:"text/css",href:a});this.getHead().append(f)}},appendStyleText:function(a){if(this.$.createStyleSheet){var f=this.$.createStyleSheet("");f.cssText=a}else{var b=new CKEDITOR.dom.element("style",this);b.append(new CKEDITOR.dom.text(a,this));this.getHead().append(b)}return f||
b.$.sheet},createElement:function(a,f){var b=new CKEDITOR.dom.element(a,this);if(f){f.attributes&&b.setAttributes(f.attributes);f.styles&&b.setStyles(f.styles)}return b},createText:function(a){return new CKEDITOR.dom.text(a,this)},focus:function(){this.getWindow().focus()},getActive:function(){var a;try{a=this.$.activeElement}catch(f){return null}return new CKEDITOR.dom.element(a)},getById:function(a){return(a=this.$.getElementById(a))?new CKEDITOR.dom.element(a):null},getByAddress:function(a,f){for(var b=
this.$.documentElement,c=0;b&&c<a.length;c++){var e=a[c];if(f)for(var d=-1,h=0;h<b.childNodes.length;h++){var k=b.childNodes[h];if(!(f===true&&k.nodeType==3&&k.previousSibling&&k.previousSibling.nodeType==3)){d++;if(d==e){b=k;break}}}else b=b.childNodes[e]}return b?new CKEDITOR.dom.node(b):null},getElementsByTag:function(a,f){!(CKEDITOR.env.ie&&document.documentMode<=8)&&f&&(a=f+":"+a);return new CKEDITOR.dom.nodeList(this.$.getElementsByTagName(a))},getHead:function(){var a=this.$.getElementsByTagName("head")[0];
return a=a?new CKEDITOR.dom.element(a):this.getDocumentElement().append(new CKEDITOR.dom.element("head"),true)},getBody:function(){return new CKEDITOR.dom.element(this.$.body)},getDocumentElement:function(){return new CKEDITOR.dom.element(this.$.documentElement)},getWindow:function(){return new CKEDITOR.dom.window(this.$.parentWindow||this.$.defaultView)},write:function(a){this.$.open("text/html","replace");CKEDITOR.env.ie&&(a=a.replace(/(?:^\s*<!DOCTYPE[^>]*?>)|^/i,'$&\n<script data-cke-temp="1">('+
CKEDITOR.tools.fixDomain+")();<\/script>"));this.$.write(a);this.$.close()},find:function(a){return new CKEDITOR.dom.nodeList(this.$.querySelectorAll(a))},findOne:function(a){return(a=this.$.querySelector(a))?new CKEDITOR.dom.element(a):null},_getHtml5ShivFrag:function(){var a=this.getCustomData("html5ShivFrag");if(!a){a=this.$.createDocumentFragment();CKEDITOR.tools.enableHtml5Elements(a,true);this.setCustomData("html5ShivFrag",a)}return a}});CKEDITOR.dom.nodeList=function(a){this.$=a};
CKEDITOR.dom.nodeList.prototype={count:function(){return this.$.length},getItem:function(a){if(a<0||a>=this.$.length)return null;return(a=this.$[a])?new CKEDITOR.dom.node(a):null}};CKEDITOR.dom.element=function(a,f){typeof a=="string"&&(a=(f?f.$:document).createElement(a));CKEDITOR.dom.domObject.call(this,a)};CKEDITOR.dom.element.get=function(a){return(a=typeof a=="string"?document.getElementById(a)||document.getElementsByName(a)[0]:a)&&(a.$?a:new CKEDITOR.dom.element(a))};
CKEDITOR.dom.element.prototype=new CKEDITOR.dom.node;CKEDITOR.dom.element.createFromHtml=function(a,f){var b=new CKEDITOR.dom.element("div",f);b.setHtml(a);return b.getFirst().remove()};
CKEDITOR.dom.element.setMarker=function(a,f,b,c){var e=f.getCustomData("list_marker_id")||f.setCustomData("list_marker_id",CKEDITOR.tools.getNextNumber()).getCustomData("list_marker_id"),d=f.getCustomData("list_marker_names")||f.setCustomData("list_marker_names",{}).getCustomData("list_marker_names");a[e]=f;d[b]=1;return f.setCustomData(b,c)};CKEDITOR.dom.element.clearAllMarkers=function(a){for(var f in a)CKEDITOR.dom.element.clearMarkers(a,a[f],1)};
CKEDITOR.dom.element.clearMarkers=function(a,f,b){var c=f.getCustomData("list_marker_names"),e=f.getCustomData("list_marker_id"),d;for(d in c)f.removeCustomData(d);f.removeCustomData("list_marker_names");if(b){f.removeCustomData("list_marker_id");delete a[e]}};
(function(){function a(a){var d=true;if(!a.$.id){a.$.id="cke_tmp_"+CKEDITOR.tools.getNextNumber();d=false}return function(){d||a.removeAttribute("id")}}function f(a,d){return"#"+a.$.id+" "+d.split(/,\s*/).join(", #"+a.$.id+" ")}function b(a){for(var d=0,b=0,f=c[a].length;b<f;b++)d=d+(parseInt(this.getComputedStyle(c[a][b])||0,10)||0);return d}CKEDITOR.tools.extend(CKEDITOR.dom.element.prototype,{type:CKEDITOR.NODE_ELEMENT,addClass:function(a){var d=this.$.className;d&&(RegExp("(?:^|\\s)"+a+"(?:\\s|$)",
"").test(d)||(d=d+(" "+a)));this.$.className=d||a;return this},removeClass:function(a){var d=this.getAttribute("class");if(d){a=RegExp("(?:^|\\s+)"+a+"(?=\\s|$)","i");if(a.test(d))(d=d.replace(a,"").replace(/^\s+/,""))?this.setAttribute("class",d):this.removeAttribute("class")}return this},hasClass:function(a){return RegExp("(?:^|\\s+)"+a+"(?=\\s|$)","").test(this.getAttribute("class"))},append:function(a,d){typeof a=="string"&&(a=this.getDocument().createElement(a));d?this.$.insertBefore(a.$,this.$.firstChild):
this.$.appendChild(a.$);return a},appendHtml:function(a){if(this.$.childNodes.length){var d=new CKEDITOR.dom.element("div",this.getDocument());d.setHtml(a);d.moveChildren(this)}else this.setHtml(a)},appendText:function(a){this.$.text!=null?this.$.text=this.$.text+a:this.append(new CKEDITOR.dom.text(a))},appendBogus:function(a){if(a||CKEDITOR.env.needsBrFiller){for(a=this.getLast();a&&a.type==CKEDITOR.NODE_TEXT&&!CKEDITOR.tools.rtrim(a.getText());)a=a.getPrevious();if(!a||!a.is||!a.is("br")){a=this.getDocument().createElement("br");
CKEDITOR.env.gecko&&a.setAttribute("type","_moz");this.append(a)}}},breakParent:function(a){var d=new CKEDITOR.dom.range(this.getDocument());d.setStartAfter(this);d.setEndAfter(a);a=d.extractContents();d.insertNode(this.remove());a.insertAfterNode(this)},contains:CKEDITOR.env.ie||CKEDITOR.env.webkit?function(a){var d=this.$;return a.type!=CKEDITOR.NODE_ELEMENT?d.contains(a.getParent().$):d!=a.$&&d.contains(a.$)}:function(a){return!!(this.$.compareDocumentPosition(a.$)&16)},focus:function(){function a(){try{this.$.focus()}catch(e){}}
return function(d){d?CKEDITOR.tools.setTimeout(a,100,this):a.call(this)}}(),getHtml:function(){var a=this.$.innerHTML;return CKEDITOR.env.ie?a.replace(/<\?[^>]*>/g,""):a},getOuterHtml:function(){if(this.$.outerHTML)return this.$.outerHTML.replace(/<\?[^>]*>/,"");var a=this.$.ownerDocument.createElement("div");a.appendChild(this.$.cloneNode(true));return a.innerHTML},getClientRect:function(){var a=CKEDITOR.tools.extend({},this.$.getBoundingClientRect());!a.width&&(a.width=a.right-a.left);!a.height&&
(a.height=a.bottom-a.top);return a},setHtml:CKEDITOR.env.ie&&CKEDITOR.env.version<9?function(a){try{var d=this.$;if(this.getParent())return d.innerHTML=a;var b=this.getDocument()._getHtml5ShivFrag();b.appendChild(d);d.innerHTML=a;b.removeChild(d);return a}catch(c){this.$.innerHTML="";d=new CKEDITOR.dom.element("body",this.getDocument());d.$.innerHTML=a;for(d=d.getChildren();d.count();)this.append(d.getItem(0));return a}}:function(a){return this.$.innerHTML=a},setText:function(){var a=document.createElement("p");
a.innerHTML="x";a=a.textContent;return function(d){this.$[a?"textContent":"innerText"]=d}}(),getAttribute:function(){var a=function(a){return this.$.getAttribute(a,2)};return CKEDITOR.env.ie&&(CKEDITOR.env.ie7Compat||CKEDITOR.env.quirks)?function(a){switch(a){case "class":a="className";break;case "http-equiv":a="httpEquiv";break;case "name":return this.$.name;case "tabindex":a=this.$.getAttribute(a,2);a!==0&&this.$.tabIndex===0&&(a=null);return a;case "checked":a=this.$.attributes.getNamedItem(a);
return(a.specified?a.nodeValue:this.$.checked)?"checked":null;case "hspace":case "value":return this.$[a];case "style":return this.$.style.cssText;case "contenteditable":case "contentEditable":return this.$.attributes.getNamedItem("contentEditable").specified?this.$.getAttribute("contentEditable"):null}return this.$.getAttribute(a,2)}:a}(),getChildren:function(){return new CKEDITOR.dom.nodeList(this.$.childNodes)},getComputedStyle:CKEDITOR.env.ie?function(a){return this.$.currentStyle[CKEDITOR.tools.cssStyleToDomStyle(a)]}:
function(a){var d=this.getWindow().$.getComputedStyle(this.$,null);return d?d.getPropertyValue(a):""},getDtd:function(){var a=CKEDITOR.dtd[this.getName()];this.getDtd=function(){return a};return a},getElementsByTag:CKEDITOR.dom.document.prototype.getElementsByTag,getTabIndex:CKEDITOR.env.ie?function(){var a=this.$.tabIndex;a===0&&(!CKEDITOR.dtd.$tabIndex[this.getName()]&&parseInt(this.getAttribute("tabindex"),10)!==0)&&(a=-1);return a}:CKEDITOR.env.webkit?function(){var a=this.$.tabIndex;if(a===void 0){a=
parseInt(this.getAttribute("tabindex"),10);isNaN(a)&&(a=-1)}return a}:function(){return this.$.tabIndex},getText:function(){return this.$.textContent||this.$.innerText||""},getWindow:function(){return this.getDocument().getWindow()},getId:function(){return this.$.id||null},getNameAtt:function(){return this.$.name||null},getName:function(){var a=this.$.nodeName.toLowerCase();if(CKEDITOR.env.ie&&document.documentMode<=8){var d=this.$.scopeName;d!="HTML"&&(a=d.toLowerCase()+":"+a)}this.getName=function(){return a};
return this.getName()},getValue:function(){return this.$.value},getFirst:function(a){var d=this.$.firstChild;(d=d&&new CKEDITOR.dom.node(d))&&(a&&!a(d))&&(d=d.getNext(a));return d},getLast:function(a){var d=this.$.lastChild;(d=d&&new CKEDITOR.dom.node(d))&&(a&&!a(d))&&(d=d.getPrevious(a));return d},getStyle:function(a){return this.$.style[CKEDITOR.tools.cssStyleToDomStyle(a)]},is:function(){var a=this.getName();if(typeof arguments[0]=="object")return!!arguments[0][a];for(var d=0;d<arguments.length;d++)if(arguments[d]==
a)return true;return false},isEditable:function(a){var d=this.getName();if(this.isReadOnly()||this.getComputedStyle("display")=="none"||this.getComputedStyle("visibility")=="hidden"||CKEDITOR.dtd.$nonEditable[d]||CKEDITOR.dtd.$empty[d]||this.is("a")&&(this.data("cke-saved-name")||this.hasAttribute("name"))&&!this.getChildCount())return false;if(a!==false){a=CKEDITOR.dtd[d]||CKEDITOR.dtd.span;return!(!a||!a["#"])}return true},isIdentical:function(a){var d=this.clone(0,1),a=a.clone(0,1);d.removeAttributes(["_moz_dirty",
"data-cke-expando","data-cke-saved-href","data-cke-saved-name"]);a.removeAttributes(["_moz_dirty","data-cke-expando","data-cke-saved-href","data-cke-saved-name"]);if(d.$.isEqualNode){d.$.style.cssText=CKEDITOR.tools.normalizeCssText(d.$.style.cssText);a.$.style.cssText=CKEDITOR.tools.normalizeCssText(a.$.style.cssText);return d.$.isEqualNode(a.$)}d=d.getOuterHtml();a=a.getOuterHtml();if(CKEDITOR.env.ie&&CKEDITOR.env.version<9&&this.is("a")){var b=this.getParent();if(b.type==CKEDITOR.NODE_ELEMENT){b=
b.clone();b.setHtml(d);d=b.getHtml();b.setHtml(a);a=b.getHtml()}}return d==a},isVisible:function(){var a=(this.$.offsetHeight||this.$.offsetWidth)&&this.getComputedStyle("visibility")!="hidden",d,b;if(a&&CKEDITOR.env.webkit){d=this.getWindow();if(!d.equals(CKEDITOR.document.getWindow())&&(b=d.$.frameElement))a=(new CKEDITOR.dom.element(b)).isVisible()}return!!a},isEmptyInlineRemoveable:function(){if(!CKEDITOR.dtd.$removeEmpty[this.getName()])return false;for(var a=this.getChildren(),d=0,b=a.count();d<
b;d++){var c=a.getItem(d);if(!(c.type==CKEDITOR.NODE_ELEMENT&&c.data("cke-bookmark"))&&(c.type==CKEDITOR.NODE_ELEMENT&&!c.isEmptyInlineRemoveable()||c.type==CKEDITOR.NODE_TEXT&&CKEDITOR.tools.trim(c.getText())))return false}return true},hasAttributes:CKEDITOR.env.ie&&(CKEDITOR.env.ie7Compat||CKEDITOR.env.quirks)?function(){for(var a=this.$.attributes,d=0;d<a.length;d++){var b=a[d];switch(b.nodeName){case "class":if(this.getAttribute("class"))return true;case "data-cke-expando":continue;default:if(b.specified)return true}}return false}:
function(){var a=this.$.attributes,d=a.length,b={"data-cke-expando":1,_moz_dirty:1};return d>0&&(d>2||!b[a[0].nodeName]||d==2&&!b[a[1].nodeName])},hasAttribute:function(){function a(d){var e=this.$.attributes.getNamedItem(d);if(this.getName()=="input")switch(d){case "class":return this.$.className.length>0;case "checked":return!!this.$.checked;case "value":d=this.getAttribute("type");return d=="checkbox"||d=="radio"?this.$.value!="on":!!this.$.value}return!e?false:e.specified}return CKEDITOR.env.ie?
CKEDITOR.env.version<8?function(d){return d=="name"?!!this.$.name:a.call(this,d)}:a:function(a){return!!this.$.attributes.getNamedItem(a)}}(),hide:function(){this.setStyle("display","none")},moveChildren:function(a,d){var b=this.$,a=a.$;if(b!=a){var c;if(d)for(;c=b.lastChild;)a.insertBefore(b.removeChild(c),a.firstChild);else for(;c=b.firstChild;)a.appendChild(b.removeChild(c))}},mergeSiblings:function(){function a(d,b,e){if(b&&b.type==CKEDITOR.NODE_ELEMENT){for(var c=[];b.data("cke-bookmark")||b.isEmptyInlineRemoveable();){c.push(b);
b=e?b.getNext():b.getPrevious();if(!b||b.type!=CKEDITOR.NODE_ELEMENT)return}if(d.isIdentical(b)){for(var f=e?d.getLast():d.getFirst();c.length;)c.shift().move(d,!e);b.moveChildren(d,!e);b.remove();f&&f.type==CKEDITOR.NODE_ELEMENT&&f.mergeSiblings()}}}return function(d){if(d===false||CKEDITOR.dtd.$removeEmpty[this.getName()]||this.is("a")){a(this,this.getNext(),true);a(this,this.getPrevious())}}}(),show:function(){this.setStyles({display:"",visibility:""})},setAttribute:function(){var a=function(a,
b){this.$.setAttribute(a,b);return this};return CKEDITOR.env.ie&&(CKEDITOR.env.ie7Compat||CKEDITOR.env.quirks)?function(d,b){d=="class"?this.$.className=b:d=="style"?this.$.style.cssText=b:d=="tabindex"?this.$.tabIndex=b:d=="checked"?this.$.checked=b:d=="contenteditable"?a.call(this,"contentEditable",b):a.apply(this,arguments);return this}:CKEDITOR.env.ie8Compat&&CKEDITOR.env.secure?function(d,b){if(d=="src"&&b.match(/^http:\/\//))try{a.apply(this,arguments)}catch(c){}else a.apply(this,arguments);
return this}:a}(),setAttributes:function(a){for(var d in a)this.setAttribute(d,a[d]);return this},setValue:function(a){this.$.value=a;return this},removeAttribute:function(){var a=function(a){this.$.removeAttribute(a)};return CKEDITOR.env.ie&&(CKEDITOR.env.ie7Compat||CKEDITOR.env.quirks)?function(a){a=="class"?a="className":a=="tabindex"?a="tabIndex":a=="contenteditable"&&(a="contentEditable");this.$.removeAttribute(a)}:a}(),removeAttributes:function(a){if(CKEDITOR.tools.isArray(a))for(var b=0;b<
a.length;b++)this.removeAttribute(a[b]);else for(b in a)a.hasOwnProperty(b)&&this.removeAttribute(b)},removeStyle:function(a){var b=this.$.style;if(!b.removeProperty&&(a=="border"||a=="margin"||a=="padding")){var c=["top","left","right","bottom"],f;a=="border"&&(f=["color","style","width"]);for(var b=[],j=0;j<c.length;j++)if(f)for(var g=0;g<f.length;g++)b.push([a,c[j],f[g]].join("-"));else b.push([a,c[j]].join("-"));for(a=0;a<b.length;a++)this.removeStyle(b[a])}else{b.removeProperty?b.removeProperty(a):
b.removeAttribute(CKEDITOR.tools.cssStyleToDomStyle(a));this.$.style.cssText||this.removeAttribute("style")}},setStyle:function(a,b){this.$.style[CKEDITOR.tools.cssStyleToDomStyle(a)]=b;return this},setStyles:function(a){for(var b in a)this.setStyle(b,a[b]);return this},setOpacity:function(a){if(CKEDITOR.env.ie&&CKEDITOR.env.version<9){a=Math.round(a*100);this.setStyle("filter",a>=100?"":"progid:DXImageTransform.Microsoft.Alpha(opacity="+a+")")}else this.setStyle("opacity",a)},unselectable:function(){this.setStyles(CKEDITOR.tools.cssVendorPrefix("user-select",
"none"));if(CKEDITOR.env.ie){this.setAttribute("unselectable","on");for(var a,b=this.getElementsByTag("*"),c=0,f=b.count();c<f;c++){a=b.getItem(c);a.setAttribute("unselectable","on")}}},getPositionedAncestor:function(){for(var a=this;a.getName()!="html";){if(a.getComputedStyle("position")!="static")return a;a=a.getParent()}return null},getDocumentPosition:function(a){var b=0,c=0,f=this.getDocument(),j=f.getBody(),g=CKEDITOR.env.quirks;if(document.documentElement.getBoundingClientRect){var m=this.$.getBoundingClientRect(),
y=f.$.documentElement,s=y.clientTop||j.$.clientTop||0,w=y.clientLeft||j.$.clientLeft||0,q=true;if(CKEDITOR.env.ie){q=f.getDocumentElement().contains(this);f=f.getBody().contains(this);q=g&&f||!g&&q}if(q){if(CKEDITOR.env.webkit){b=j.$.scrollLeft||y.scrollLeft;c=j.$.scrollTop||y.scrollTop}else{c=g?j.$:y;b=c.scrollLeft;c=c.scrollTop}b=m.left+b-w;c=m.top+c-s}}else{s=this;for(w=null;s&&!(s.getName()=="body"||s.getName()=="html");){b=b+(s.$.offsetLeft-s.$.scrollLeft);c=c+(s.$.offsetTop-s.$.scrollTop);if(!s.equals(this)){b=
b+(s.$.clientLeft||0);c=c+(s.$.clientTop||0)}for(;w&&!w.equals(s);){b=b-w.$.scrollLeft;c=c-w.$.scrollTop;w=w.getParent()}w=s;s=(m=s.$.offsetParent)?new CKEDITOR.dom.element(m):null}}if(a){m=this.getWindow();s=a.getWindow();if(!m.equals(s)&&m.$.frameElement){a=(new CKEDITOR.dom.element(m.$.frameElement)).getDocumentPosition(a);b=b+a.x;c=c+a.y}}if(!document.documentElement.getBoundingClientRect&&CKEDITOR.env.gecko&&!g){b=b+(this.$.clientLeft?1:0);c=c+(this.$.clientTop?1:0)}return{x:b,y:c}},scrollIntoView:function(a){var b=
this.getParent();if(b){do{(b.$.clientWidth&&b.$.clientWidth<b.$.scrollWidth||b.$.clientHeight&&b.$.clientHeight<b.$.scrollHeight)&&!b.is("body")&&this.scrollIntoParent(b,a,1);if(b.is("html")){var c=b.getWindow();try{var f=c.$.frameElement;f&&(b=new CKEDITOR.dom.element(f))}catch(j){}}}while(b=b.getParent())}},scrollIntoParent:function(a,b,c){var f,j,g,m;function y(b,d){if(/body|html/.test(a.getName()))a.getWindow().$.scrollBy(b,d);else{a.$.scrollLeft=a.$.scrollLeft+b;a.$.scrollTop=a.$.scrollTop+d}}
function s(a,b){var d={x:0,y:0};if(!a.is(q?"body":"html")){var c=a.$.getBoundingClientRect();d.x=c.left;d.y=c.top}c=a.getWindow();if(!c.equals(b)){c=s(CKEDITOR.dom.element.get(c.$.frameElement),b);d.x=d.x+c.x;d.y=d.y+c.y}return d}function w(a,b){return parseInt(a.getComputedStyle("margin-"+b)||0,10)||0}!a&&(a=this.getWindow());g=a.getDocument();var q=g.$.compatMode=="BackCompat";a instanceof CKEDITOR.dom.window&&(a=q?g.getBody():g.getDocumentElement());g=a.getWindow();j=s(this,g);var t=s(a,g),i=this.$.offsetHeight;
f=this.$.offsetWidth;var A=a.$.clientHeight,u=a.$.clientWidth;g=j.x-w(this,"left")-t.x||0;m=j.y-w(this,"top")-t.y||0;f=j.x+f+w(this,"right")-(t.x+u)||0;j=j.y+i+w(this,"bottom")-(t.y+A)||0;if(m<0||j>0)y(0,b===true?m:b===false?j:m<0?m:j);if(c&&(g<0||f>0))y(g<0?g:f,0)},setState:function(a,b,c){b=b||"cke";switch(a){case CKEDITOR.TRISTATE_ON:this.addClass(b+"_on");this.removeClass(b+"_off");this.removeClass(b+"_disabled");c&&this.setAttribute("aria-pressed",true);c&&this.removeAttribute("aria-disabled");
break;case CKEDITOR.TRISTATE_DISABLED:this.addClass(b+"_disabled");this.removeClass(b+"_off");this.removeClass(b+"_on");c&&this.setAttribute("aria-disabled",true);c&&this.removeAttribute("aria-pressed");break;default:this.addClass(b+"_off");this.removeClass(b+"_on");this.removeClass(b+"_disabled");c&&this.removeAttribute("aria-pressed");c&&this.removeAttribute("aria-disabled")}},getFrameDocument:function(){var a=this.$;try{a.contentWindow.document}catch(b){a.src=a.src}return a&&new CKEDITOR.dom.document(a.contentWindow.document)},
copyAttributes:function(a,b){for(var c=this.$.attributes,b=b||{},f=0;f<c.length;f++){var j=c[f],g=j.nodeName.toLowerCase(),m;if(!(g in b))if(g=="checked"&&(m=this.getAttribute(g)))a.setAttribute(g,m);else if(!CKEDITOR.env.ie||this.hasAttribute(g)){m=this.getAttribute(g);if(m===null)m=j.nodeValue;a.setAttribute(g,m)}}if(this.$.style.cssText!=="")a.$.style.cssText=this.$.style.cssText},renameNode:function(a){if(this.getName()!=a){var b=this.getDocument(),a=new CKEDITOR.dom.element(a,b);this.copyAttributes(a);
this.moveChildren(a);this.getParent()&&this.$.parentNode.replaceChild(a.$,this.$);a.$["data-cke-expando"]=this.$["data-cke-expando"];this.$=a.$;delete this.getName}},getChild:function(){function a(b,c){var e=b.childNodes;if(c>=0&&c<e.length)return e[c]}return function(b){var c=this.$;if(b.slice)for(;b.length>0&&c;)c=a(c,b.shift());else c=a(c,b);return c?new CKEDITOR.dom.node(c):null}}(),getChildCount:function(){return this.$.childNodes.length},disableContextMenu:function(){this.on("contextmenu",function(a){a.data.getTarget().hasClass("cke_enable_context_menu")||
a.data.preventDefault()})},getDirection:function(a){return a?this.getComputedStyle("direction")||this.getDirection()||this.getParent()&&this.getParent().getDirection(1)||this.getDocument().$.dir||"ltr":this.getStyle("direction")||this.getAttribute("dir")},data:function(a,b){a="data-"+a;if(b===void 0)return this.getAttribute(a);b===false?this.removeAttribute(a):this.setAttribute(a,b);return null},getEditor:function(){var a=CKEDITOR.instances,b,c;for(b in a){c=a[b];if(c.element.equals(this)&&c.elementMode!=
CKEDITOR.ELEMENT_MODE_APPENDTO)return c}return null},find:function(b){var c=a(this),b=new CKEDITOR.dom.nodeList(this.$.querySelectorAll(f(this,b)));c();return b},findOne:function(b){var c=a(this),b=this.$.querySelector(f(this,b));c();return b?new CKEDITOR.dom.element(b):null},forEach:function(a,b,c){if(!c&&(!b||this.type==b))var f=a(this);if(f!==false)for(var c=this.getChildren(),j=0;j<c.count();j++){f=c.getItem(j);f.type==CKEDITOR.NODE_ELEMENT?f.forEach(a,b):(!b||f.type==b)&&a(f)}}});var c={width:["border-left-width",
"border-right-width","padding-left","padding-right"],height:["border-top-width","border-bottom-width","padding-top","padding-bottom"]};CKEDITOR.dom.element.prototype.setSize=function(a,c,f){if(typeof c=="number"){if(f&&(!CKEDITOR.env.ie||!CKEDITOR.env.quirks))c=c-b.call(this,a);this.setStyle(a,c+"px")}};CKEDITOR.dom.element.prototype.getSize=function(a,c){var f=Math.max(this.$["offset"+CKEDITOR.tools.capitalize(a)],this.$["client"+CKEDITOR.tools.capitalize(a)])||0;c&&(f=f-b.call(this,a));return f}})();
CKEDITOR.dom.documentFragment=function(a){a=a||CKEDITOR.document;this.$=a.type==CKEDITOR.NODE_DOCUMENT?a.$.createDocumentFragment():a};
CKEDITOR.tools.extend(CKEDITOR.dom.documentFragment.prototype,CKEDITOR.dom.element.prototype,{type:CKEDITOR.NODE_DOCUMENT_FRAGMENT,insertAfterNode:function(a){a=a.$;a.parentNode.insertBefore(this.$,a.nextSibling)}},!0,{append:1,appendBogus:1,getFirst:1,getLast:1,getParent:1,getNext:1,getPrevious:1,appendTo:1,moveChildren:1,insertBefore:1,insertAfterNode:1,replace:1,trim:1,type:1,ltrim:1,rtrim:1,getDocument:1,getChildCount:1,getChild:1,getChildren:1});
(function(){function a(a,b){var c=this.range;if(this._.end)return null;if(!this._.start){this._.start=1;if(c.collapsed){this.end();return null}c.optimize()}var d,e=c.startContainer;d=c.endContainer;var m=c.startOffset,f=c.endOffset,h,o=this.guard,l=this.type,p=a?"getPreviousSourceNode":"getNextSourceNode";if(!a&&!this._.guardLTR){var r=d.type==CKEDITOR.NODE_ELEMENT?d:d.getParent(),n=d.type==CKEDITOR.NODE_ELEMENT?d.getChild(f):d.getNext();this._.guardLTR=function(a,b){return(!b||!r.equals(a))&&(!n||
!a.equals(n))&&(a.type!=CKEDITOR.NODE_ELEMENT||!b||!a.equals(c.root))}}if(a&&!this._.guardRTL){var g=e.type==CKEDITOR.NODE_ELEMENT?e:e.getParent(),C=e.type==CKEDITOR.NODE_ELEMENT?m?e.getChild(m-1):null:e.getPrevious();this._.guardRTL=function(a,b){return(!b||!g.equals(a))&&(!C||!a.equals(C))&&(a.type!=CKEDITOR.NODE_ELEMENT||!b||!a.equals(c.root))}}var j=a?this._.guardRTL:this._.guardLTR;h=o?function(a,b){return j(a,b)===false?false:o(a,b)}:j;if(this.current)d=this.current[p](false,l,h);else{if(a)d.type==
CKEDITOR.NODE_ELEMENT&&(d=f>0?d.getChild(f-1):h(d,true)===false?null:d.getPreviousSourceNode(true,l,h));else{d=e;if(d.type==CKEDITOR.NODE_ELEMENT&&!(d=d.getChild(m)))d=h(e,true)===false?null:e.getNextSourceNode(true,l,h)}d&&h(d)===false&&(d=null)}for(;d&&!this._.end;){this.current=d;if(!this.evaluator||this.evaluator(d)!==false){if(!b)return d}else if(b&&this.evaluator)return false;d=d[p](false,l,h)}this.end();return this.current=null}function f(b){for(var c,d=null;c=a.call(this,b);)d=c;return d}
function b(a){if(g(a))return false;if(a.type==CKEDITOR.NODE_TEXT)return true;if(a.type==CKEDITOR.NODE_ELEMENT){if(a.is(CKEDITOR.dtd.$inline)||a.is("hr")||a.getAttribute("contenteditable")=="false")return true;var b;if(b=!CKEDITOR.env.needsBrFiller)if(b=a.is(m))a:{b=0;for(var c=a.getChildCount();b<c;++b)if(!g(a.getChild(b))){b=false;break a}b=true}if(b)return true}return false}CKEDITOR.dom.walker=CKEDITOR.tools.createClass({$:function(a){this.range=a;this._={}},proto:{end:function(){this._.end=1},
next:function(){return a.call(this)},previous:function(){return a.call(this,1)},checkForward:function(){return a.call(this,0,1)!==false},checkBackward:function(){return a.call(this,1,1)!==false},lastForward:function(){return f.call(this)},lastBackward:function(){return f.call(this,1)},reset:function(){delete this.current;this._={}}}});var c={block:1,"list-item":1,table:1,"table-row-group":1,"table-header-group":1,"table-footer-group":1,"table-row":1,"table-column-group":1,"table-column":1,"table-cell":1,
"table-caption":1},e={absolute:1,fixed:1};CKEDITOR.dom.element.prototype.isBlockBoundary=function(a){return this.getComputedStyle("float")=="none"&&!(this.getComputedStyle("position")in e)&&c[this.getComputedStyle("display")]?true:!!(this.is(CKEDITOR.dtd.$block)||a&&this.is(a))};CKEDITOR.dom.walker.blockBoundary=function(a){return function(b){return!(b.type==CKEDITOR.NODE_ELEMENT&&b.isBlockBoundary(a))}};CKEDITOR.dom.walker.listItemBoundary=function(){return this.blockBoundary({br:1})};CKEDITOR.dom.walker.bookmark=
function(a,b){function c(a){return a&&a.getName&&a.getName()=="span"&&a.data("cke-bookmark")}return function(d){var e,m;e=d&&d.type!=CKEDITOR.NODE_ELEMENT&&(m=d.getParent())&&c(m);e=a?e:e||c(d);return!!(b^e)}};CKEDITOR.dom.walker.whitespaces=function(a){return function(b){var c;b&&b.type==CKEDITOR.NODE_TEXT&&(c=!CKEDITOR.tools.trim(b.getText())||CKEDITOR.env.webkit&&b.getText()=="​");return!!(a^c)}};CKEDITOR.dom.walker.invisible=function(a){var b=CKEDITOR.dom.walker.whitespaces(),c=CKEDITOR.env.webkit?
1:0;return function(d){if(b(d))d=1;else{d.type==CKEDITOR.NODE_TEXT&&(d=d.getParent());d=d.$.offsetWidth<=c}return!!(a^d)}};CKEDITOR.dom.walker.nodeType=function(a,b){return function(c){return!!(b^c.type==a)}};CKEDITOR.dom.walker.bogus=function(a){function b(a){return!h(a)&&!k(a)}return function(c){var e=CKEDITOR.env.needsBrFiller?c.is&&c.is("br"):c.getText&&d.test(c.getText());if(e){e=c.getParent();c=c.getNext(b);e=e.isBlockBoundary()&&(!c||c.type==CKEDITOR.NODE_ELEMENT&&c.isBlockBoundary())}return!!(a^
e)}};CKEDITOR.dom.walker.temp=function(a){return function(b){b.type!=CKEDITOR.NODE_ELEMENT&&(b=b.getParent());b=b&&b.hasAttribute("data-cke-temp");return!!(a^b)}};var d=/^[\t\r\n ]*(?:&nbsp;|\xa0)$/,h=CKEDITOR.dom.walker.whitespaces(),k=CKEDITOR.dom.walker.bookmark(),j=CKEDITOR.dom.walker.temp();CKEDITOR.dom.walker.ignored=function(a){return function(b){b=h(b)||k(b)||j(b);return!!(a^b)}};var g=CKEDITOR.dom.walker.ignored(),m=function(a){var b={},c;for(c in a)CKEDITOR.dtd[c]["#"]&&(b[c]=1);return b}(CKEDITOR.dtd.$block);
CKEDITOR.dom.walker.editable=function(a){return function(c){return!!(a^b(c))}};CKEDITOR.dom.element.prototype.getBogus=function(){var a=this;do a=a.getPreviousSourceNode();while(k(a)||h(a)||a.type==CKEDITOR.NODE_ELEMENT&&a.is(CKEDITOR.dtd.$inline)&&!a.is(CKEDITOR.dtd.$empty));return a&&(CKEDITOR.env.needsBrFiller?a.is&&a.is("br"):a.getText&&d.test(a.getText()))?a:false}})();
CKEDITOR.dom.range=function(a){this.endOffset=this.endContainer=this.startOffset=this.startContainer=null;this.collapsed=true;var f=a instanceof CKEDITOR.dom.document;this.document=f?a:a.getDocument();this.root=f?a.getBody():a};
(function(){function a(){var a=false,b=CKEDITOR.dom.walker.whitespaces(),c=CKEDITOR.dom.walker.bookmark(true),e=CKEDITOR.dom.walker.bogus();return function(f){if(c(f)||b(f))return true;if(e(f)&&!a)return a=true;return f.type==CKEDITOR.NODE_TEXT&&(f.hasAscendant("pre")||CKEDITOR.tools.trim(f.getText()).length)||f.type==CKEDITOR.NODE_ELEMENT&&!f.is(d)?false:true}}function f(a){var b=CKEDITOR.dom.walker.whitespaces(),c=CKEDITOR.dom.walker.bookmark(1);return function(d){return c(d)||b(d)?true:!a&&h(d)||
d.type==CKEDITOR.NODE_ELEMENT&&d.is(CKEDITOR.dtd.$removeEmpty)}}function b(a){return function(){var b;return this[a?"getPreviousNode":"getNextNode"](function(a){!b&&g(a)&&(b=a);return j(a)&&!(h(a)&&a.equals(b))})}}var c=function(a){a.collapsed=a.startContainer&&a.endContainer&&a.startContainer.equals(a.endContainer)&&a.startOffset==a.endOffset},e=function(a,b,c,d){a.optimizeBookmark();var e=a.startContainer,f=a.endContainer,i=a.startOffset,A=a.endOffset,h,o;if(f.type==CKEDITOR.NODE_TEXT)f=f.split(A);
else if(f.getChildCount()>0)if(A>=f.getChildCount()){f=f.append(a.document.createText(""));o=true}else f=f.getChild(A);if(e.type==CKEDITOR.NODE_TEXT){e.split(i);e.equals(f)&&(f=e.getNext())}else if(i)if(i>=e.getChildCount()){e=e.append(a.document.createText(""));h=true}else e=e.getChild(i).getPrevious();else{e=e.append(a.document.createText(""),1);h=true}var i=e.getParents(),A=f.getParents(),l,p,r;for(l=0;l<i.length;l++){p=i[l];r=A[l];if(!p.equals(r))break}for(var n=c,g,C,j,F=l;F<i.length;F++){g=
i[F];n&&!g.equals(e)&&(C=n.append(g.clone()));for(g=g.getNext();g;){if(g.equals(A[F])||g.equals(f))break;j=g.getNext();if(b==2)n.append(g.clone(true));else{g.remove();b==1&&n.append(g)}g=j}n&&(n=C)}n=c;for(c=l;c<A.length;c++){g=A[c];b>0&&!g.equals(f)&&(C=n.append(g.clone()));if(!i[c]||g.$.parentNode!=i[c].$.parentNode)for(g=g.getPrevious();g;){if(g.equals(i[c])||g.equals(e))break;j=g.getPrevious();if(b==2)n.$.insertBefore(g.$.cloneNode(true),n.$.firstChild);else{g.remove();b==1&&n.$.insertBefore(g.$,
n.$.firstChild)}g=j}n&&(n=C)}if(b==2){p=a.startContainer;if(p.type==CKEDITOR.NODE_TEXT){p.$.data=p.$.data+p.$.nextSibling.data;p.$.parentNode.removeChild(p.$.nextSibling)}a=a.endContainer;if(a.type==CKEDITOR.NODE_TEXT&&a.$.nextSibling){a.$.data=a.$.data+a.$.nextSibling.data;a.$.parentNode.removeChild(a.$.nextSibling)}}else{if(p&&r&&(e.$.parentNode!=p.$.parentNode||f.$.parentNode!=r.$.parentNode)){b=r.getIndex();h&&r.$.parentNode==e.$.parentNode&&b--;if(d&&p.type==CKEDITOR.NODE_ELEMENT){d=CKEDITOR.dom.element.createFromHtml('<span data-cke-bookmark="1" style="display:none">&nbsp;</span>',
a.document);d.insertAfter(p);p.mergeSiblings(false);a.moveToBookmark({startNode:d})}else a.setStart(r.getParent(),b)}a.collapse(true)}h&&e.remove();o&&f.$.parentNode&&f.remove()},d={abbr:1,acronym:1,b:1,bdo:1,big:1,cite:1,code:1,del:1,dfn:1,em:1,font:1,i:1,ins:1,label:1,kbd:1,q:1,samp:1,small:1,span:1,strike:1,strong:1,sub:1,sup:1,tt:1,u:1,"var":1},h=CKEDITOR.dom.walker.bogus(),k=/^[\t\r\n ]*(?:&nbsp;|\xa0)$/,j=CKEDITOR.dom.walker.editable(),g=CKEDITOR.dom.walker.ignored(true);CKEDITOR.dom.range.prototype=
{clone:function(){var a=new CKEDITOR.dom.range(this.root);a._setStartContainer(this.startContainer);a.startOffset=this.startOffset;a._setEndContainer(this.endContainer);a.endOffset=this.endOffset;a.collapsed=this.collapsed;return a},collapse:function(a){if(a){this._setEndContainer(this.startContainer);this.endOffset=this.startOffset}else{this._setStartContainer(this.endContainer);this.startOffset=this.endOffset}this.collapsed=true},cloneContents:function(){var a=new CKEDITOR.dom.documentFragment(this.document);
this.collapsed||e(this,2,a);return a},deleteContents:function(a){this.collapsed||e(this,0,null,a)},extractContents:function(a){var b=new CKEDITOR.dom.documentFragment(this.document);this.collapsed||e(this,1,b,a);return b},createBookmark:function(a){var b,c,d,e,f=this.collapsed;b=this.document.createElement("span");b.data("cke-bookmark",1);b.setStyle("display","none");b.setHtml("&nbsp;");if(a){d="cke_bm_"+CKEDITOR.tools.getNextNumber();b.setAttribute("id",d+(f?"C":"S"))}if(!f){c=b.clone();c.setHtml("&nbsp;");
a&&c.setAttribute("id",d+"E");e=this.clone();e.collapse();e.insertNode(c)}e=this.clone();e.collapse(true);e.insertNode(b);if(c){this.setStartAfter(b);this.setEndBefore(c)}else this.moveToPosition(b,CKEDITOR.POSITION_AFTER_END);return{startNode:a?d+(f?"C":"S"):b,endNode:a?d+"E":c,serializable:a,collapsed:f}},createBookmark2:function(){function a(c){var d=c.container,e=c.offset,f;f=d;var m=e;f=f.type!=CKEDITOR.NODE_ELEMENT||m===0||m==f.getChildCount()?0:f.getChild(m-1).type==CKEDITOR.NODE_TEXT&&f.getChild(m).type==
CKEDITOR.NODE_TEXT;if(f){d=d.getChild(e-1);e=d.getLength()}d.type==CKEDITOR.NODE_ELEMENT&&e>1&&(e=d.getChild(e-1).getIndex(true)+1);if(d.type==CKEDITOR.NODE_TEXT){f=d;for(m=0;(f=f.getPrevious())&&f.type==CKEDITOR.NODE_TEXT;)m=m+f.getLength();f=m;if(d.getText())e=e+f;else{m=d.getPrevious(b);if(f){e=f;d=m?m.getNext():d.getParent().getFirst()}else{d=d.getParent();e=m?m.getIndex(true)+1:0}}}c.container=d;c.offset=e}var b=CKEDITOR.dom.walker.nodeType(CKEDITOR.NODE_TEXT,true);return function(b){var c=this.collapsed,
d={container:this.startContainer,offset:this.startOffset},e={container:this.endContainer,offset:this.endOffset};if(b){a(d);c||a(e)}return{start:d.container.getAddress(b),end:c?null:e.container.getAddress(b),startOffset:d.offset,endOffset:e.offset,normalized:b,collapsed:c,is2:true}}}(),moveToBookmark:function(a){if(a.is2){var b=this.document.getByAddress(a.start,a.normalized),c=a.startOffset,d=a.end&&this.document.getByAddress(a.end,a.normalized),a=a.endOffset;this.setStart(b,c);d?this.setEnd(d,a):
this.collapse(true)}else{b=(c=a.serializable)?this.document.getById(a.startNode):a.startNode;a=c?this.document.getById(a.endNode):a.endNode;this.setStartBefore(b);b.remove();if(a){this.setEndBefore(a);a.remove()}else this.collapse(true)}},getBoundaryNodes:function(){var a=this.startContainer,b=this.endContainer,c=this.startOffset,d=this.endOffset,e;if(a.type==CKEDITOR.NODE_ELEMENT){e=a.getChildCount();if(e>c)a=a.getChild(c);else if(e<1)a=a.getPreviousSourceNode();else{for(a=a.$;a.lastChild;)a=a.lastChild;
a=new CKEDITOR.dom.node(a);a=a.getNextSourceNode()||a}}if(b.type==CKEDITOR.NODE_ELEMENT){e=b.getChildCount();if(e>d)b=b.getChild(d).getPreviousSourceNode(true);else if(e<1)b=b.getPreviousSourceNode();else{for(b=b.$;b.lastChild;)b=b.lastChild;b=new CKEDITOR.dom.node(b)}}a.getPosition(b)&CKEDITOR.POSITION_FOLLOWING&&(a=b);return{startNode:a,endNode:b}},getCommonAncestor:function(a,b){var c=this.startContainer,d=this.endContainer,c=c.equals(d)?a&&c.type==CKEDITOR.NODE_ELEMENT&&this.startOffset==this.endOffset-
1?c.getChild(this.startOffset):c:c.getCommonAncestor(d);return b&&!c.is?c.getParent():c},optimize:function(){var a=this.startContainer,b=this.startOffset;a.type!=CKEDITOR.NODE_ELEMENT&&(b?b>=a.getLength()&&this.setStartAfter(a):this.setStartBefore(a));a=this.endContainer;b=this.endOffset;a.type!=CKEDITOR.NODE_ELEMENT&&(b?b>=a.getLength()&&this.setEndAfter(a):this.setEndBefore(a))},optimizeBookmark:function(){var a=this.startContainer,b=this.endContainer;a.is&&(a.is("span")&&a.data("cke-bookmark"))&&
this.setStartAt(a,CKEDITOR.POSITION_BEFORE_START);b&&(b.is&&b.is("span")&&b.data("cke-bookmark"))&&this.setEndAt(b,CKEDITOR.POSITION_AFTER_END)},trim:function(a,b){var c=this.startContainer,d=this.startOffset,e=this.collapsed;if((!a||e)&&c&&c.type==CKEDITOR.NODE_TEXT){if(d)if(d>=c.getLength()){d=c.getIndex()+1;c=c.getParent()}else{var f=c.split(d),d=c.getIndex()+1,c=c.getParent();if(this.startContainer.equals(this.endContainer))this.setEnd(f,this.endOffset-this.startOffset);else if(c.equals(this.endContainer))this.endOffset=
this.endOffset+1}else{d=c.getIndex();c=c.getParent()}this.setStart(c,d);if(e){this.collapse(true);return}}c=this.endContainer;d=this.endOffset;if(!b&&!e&&c&&c.type==CKEDITOR.NODE_TEXT){if(d){d>=c.getLength()||c.split(d);d=c.getIndex()+1}else d=c.getIndex();c=c.getParent();this.setEnd(c,d)}},enlarge:function(a,b){function c(a){return a&&a.type==CKEDITOR.NODE_ELEMENT&&a.hasAttribute("contenteditable")?null:a}var d=RegExp(/[^\s\ufeff]/);switch(a){case CKEDITOR.ENLARGE_INLINE:var e=1;case CKEDITOR.ENLARGE_ELEMENT:if(this.collapsed)break;
var f=this.getCommonAncestor(),i=this.root,h,g,o,l,p,r=false,n,j;n=this.startContainer;var C=this.startOffset;if(n.type==CKEDITOR.NODE_TEXT){if(C){n=!CKEDITOR.tools.trim(n.substring(0,C)).length&&n;r=!!n}if(n&&!(l=n.getPrevious()))o=n.getParent()}else{C&&(l=n.getChild(C-1)||n.getLast());l||(o=n)}for(o=c(o);o||l;){if(o&&!l){!p&&o.equals(f)&&(p=true);if(e?o.isBlockBoundary():!i.contains(o))break;if(!r||o.getComputedStyle("display")!="inline"){r=false;p?h=o:this.setStartBefore(o)}l=o.getPrevious()}for(;l;){n=
false;if(l.type==CKEDITOR.NODE_COMMENT)l=l.getPrevious();else{if(l.type==CKEDITOR.NODE_TEXT){j=l.getText();d.test(j)&&(l=null);n=/[\s\ufeff]$/.test(j)}else if((l.$.offsetWidth>(CKEDITOR.env.webkit?1:0)||b&&l.is("br"))&&!l.data("cke-bookmark"))if(r&&CKEDITOR.dtd.$removeEmpty[l.getName()]){j=l.getText();if(d.test(j))l=null;else for(var C=l.$.getElementsByTagName("*"),k=0,F;F=C[k++];)if(!CKEDITOR.dtd.$removeEmpty[F.nodeName.toLowerCase()]){l=null;break}l&&(n=!!j.length)}else l=null;n&&(r?p?h=o:o&&this.setStartBefore(o):
r=true);if(l){n=l.getPrevious();if(!o&&!n){o=l;l=null;break}l=n}else o=null}}o&&(o=c(o.getParent()))}n=this.endContainer;C=this.endOffset;o=l=null;p=r=false;var K=function(a,b){var c=new CKEDITOR.dom.range(i);c.setStart(a,b);c.setEndAt(i,CKEDITOR.POSITION_BEFORE_END);var c=new CKEDITOR.dom.walker(c),e;for(c.guard=function(a){return!(a.type==CKEDITOR.NODE_ELEMENT&&a.isBlockBoundary())};e=c.next();){if(e.type!=CKEDITOR.NODE_TEXT)return false;j=e!=a?e.getText():e.substring(b);if(d.test(j))return false}return true};
if(n.type==CKEDITOR.NODE_TEXT)if(CKEDITOR.tools.trim(n.substring(C)).length)r=true;else{r=!n.getLength();if(C==n.getLength()){if(!(l=n.getNext()))o=n.getParent()}else K(n,C)&&(o=n.getParent())}else(l=n.getChild(C))||(o=n);for(;o||l;){if(o&&!l){!p&&o.equals(f)&&(p=true);if(e?o.isBlockBoundary():!i.contains(o))break;if(!r||o.getComputedStyle("display")!="inline"){r=false;p?g=o:o&&this.setEndAfter(o)}l=o.getNext()}for(;l;){n=false;if(l.type==CKEDITOR.NODE_TEXT){j=l.getText();K(l,0)||(l=null);n=/^[\s\ufeff]/.test(j)}else if(l.type==
CKEDITOR.NODE_ELEMENT){if((l.$.offsetWidth>0||b&&l.is("br"))&&!l.data("cke-bookmark"))if(r&&CKEDITOR.dtd.$removeEmpty[l.getName()]){j=l.getText();if(d.test(j))l=null;else{C=l.$.getElementsByTagName("*");for(k=0;F=C[k++];)if(!CKEDITOR.dtd.$removeEmpty[F.nodeName.toLowerCase()]){l=null;break}}l&&(n=!!j.length)}else l=null}else n=1;n&&r&&(p?g=o:this.setEndAfter(o));if(l){n=l.getNext();if(!o&&!n){o=l;l=null;break}l=n}else o=null}o&&(o=c(o.getParent()))}if(h&&g){f=h.contains(g)?g:h;this.setStartBefore(f);
this.setEndAfter(f)}break;case CKEDITOR.ENLARGE_BLOCK_CONTENTS:case CKEDITOR.ENLARGE_LIST_ITEM_CONTENTS:o=new CKEDITOR.dom.range(this.root);i=this.root;o.setStartAt(i,CKEDITOR.POSITION_AFTER_START);o.setEnd(this.startContainer,this.startOffset);o=new CKEDITOR.dom.walker(o);var I,v,G=CKEDITOR.dom.walker.blockBoundary(a==CKEDITOR.ENLARGE_LIST_ITEM_CONTENTS?{br:1}:null),z=null,B=function(a){if(a.type==CKEDITOR.NODE_ELEMENT&&a.getAttribute("contenteditable")=="false")if(z){if(z.equals(a)){z=null;return}}else z=
a;else if(z)return;var b=G(a);b||(I=a);return b},e=function(a){var b=B(a);!b&&(a.is&&a.is("br"))&&(v=a);return b};o.guard=B;o=o.lastBackward();I=I||i;this.setStartAt(I,!I.is("br")&&(!o&&this.checkStartOfBlock()||o&&I.contains(o))?CKEDITOR.POSITION_AFTER_START:CKEDITOR.POSITION_AFTER_END);if(a==CKEDITOR.ENLARGE_LIST_ITEM_CONTENTS){o=this.clone();o=new CKEDITOR.dom.walker(o);var x=CKEDITOR.dom.walker.whitespaces(),E=CKEDITOR.dom.walker.bookmark();o.evaluator=function(a){return!x(a)&&!E(a)};if((o=o.previous())&&
o.type==CKEDITOR.NODE_ELEMENT&&o.is("br"))break}o=this.clone();o.collapse();o.setEndAt(i,CKEDITOR.POSITION_BEFORE_END);o=new CKEDITOR.dom.walker(o);o.guard=a==CKEDITOR.ENLARGE_LIST_ITEM_CONTENTS?e:B;I=z=v=null;o=o.lastForward();I=I||i;this.setEndAt(I,!o&&this.checkEndOfBlock()||o&&I.contains(o)?CKEDITOR.POSITION_BEFORE_END:CKEDITOR.POSITION_BEFORE_START);v&&this.setEndAfter(v)}},shrink:function(a,b,c){if(!this.collapsed){var a=a||CKEDITOR.SHRINK_TEXT,d=this.clone(),e=this.startContainer,f=this.endContainer,
i=this.startOffset,h=this.endOffset,g=1,o=1;if(e&&e.type==CKEDITOR.NODE_TEXT)if(i)if(i>=e.getLength())d.setStartAfter(e);else{d.setStartBefore(e);g=0}else d.setStartBefore(e);if(f&&f.type==CKEDITOR.NODE_TEXT)if(h)if(h>=f.getLength())d.setEndAfter(f);else{d.setEndAfter(f);o=0}else d.setEndBefore(f);var d=new CKEDITOR.dom.walker(d),l=CKEDITOR.dom.walker.bookmark();d.evaluator=function(b){return b.type==(a==CKEDITOR.SHRINK_ELEMENT?CKEDITOR.NODE_ELEMENT:CKEDITOR.NODE_TEXT)};var p;d.guard=function(b,d){if(l(b))return true;
if(a==CKEDITOR.SHRINK_ELEMENT&&b.type==CKEDITOR.NODE_TEXT||d&&b.equals(p)||c===false&&b.type==CKEDITOR.NODE_ELEMENT&&b.isBlockBoundary()||b.type==CKEDITOR.NODE_ELEMENT&&b.hasAttribute("contenteditable"))return false;!d&&b.type==CKEDITOR.NODE_ELEMENT&&(p=b);return true};if(g)(e=d[a==CKEDITOR.SHRINK_ELEMENT?"lastForward":"next"]())&&this.setStartAt(e,b?CKEDITOR.POSITION_AFTER_START:CKEDITOR.POSITION_BEFORE_START);if(o){d.reset();(d=d[a==CKEDITOR.SHRINK_ELEMENT?"lastBackward":"previous"]())&&this.setEndAt(d,
b?CKEDITOR.POSITION_BEFORE_END:CKEDITOR.POSITION_AFTER_END)}return!(!g&&!o)}},insertNode:function(a){this.optimizeBookmark();this.trim(false,true);var b=this.startContainer,c=b.getChild(this.startOffset);c?a.insertBefore(c):b.append(a);a.getParent()&&a.getParent().equals(this.endContainer)&&this.endOffset++;this.setStartBefore(a)},moveToPosition:function(a,b){this.setStartAt(a,b);this.collapse(true)},moveToRange:function(a){this.setStart(a.startContainer,a.startOffset);this.setEnd(a.endContainer,
a.endOffset)},selectNodeContents:function(a){this.setStart(a,0);this.setEnd(a,a.type==CKEDITOR.NODE_TEXT?a.getLength():a.getChildCount())},setStart:function(a,b){if(a.type==CKEDITOR.NODE_ELEMENT&&CKEDITOR.dtd.$empty[a.getName()]){b=a.getIndex();a=a.getParent()}this._setStartContainer(a);this.startOffset=b;if(!this.endContainer){this._setEndContainer(a);this.endOffset=b}c(this)},setEnd:function(a,b){if(a.type==CKEDITOR.NODE_ELEMENT&&CKEDITOR.dtd.$empty[a.getName()]){b=a.getIndex()+1;a=a.getParent()}this._setEndContainer(a);
this.endOffset=b;if(!this.startContainer){this._setStartContainer(a);this.startOffset=b}c(this)},setStartAfter:function(a){this.setStart(a.getParent(),a.getIndex()+1)},setStartBefore:function(a){this.setStart(a.getParent(),a.getIndex())},setEndAfter:function(a){this.setEnd(a.getParent(),a.getIndex()+1)},setEndBefore:function(a){this.setEnd(a.getParent(),a.getIndex())},setStartAt:function(a,b){switch(b){case CKEDITOR.POSITION_AFTER_START:this.setStart(a,0);break;case CKEDITOR.POSITION_BEFORE_END:a.type==
CKEDITOR.NODE_TEXT?this.setStart(a,a.getLength()):this.setStart(a,a.getChildCount());break;case CKEDITOR.POSITION_BEFORE_START:this.setStartBefore(a);break;case CKEDITOR.POSITION_AFTER_END:this.setStartAfter(a)}c(this)},setEndAt:function(a,b){switch(b){case CKEDITOR.POSITION_AFTER_START:this.setEnd(a,0);break;case CKEDITOR.POSITION_BEFORE_END:a.type==CKEDITOR.NODE_TEXT?this.setEnd(a,a.getLength()):this.setEnd(a,a.getChildCount());break;case CKEDITOR.POSITION_BEFORE_START:this.setEndBefore(a);break;
case CKEDITOR.POSITION_AFTER_END:this.setEndAfter(a)}c(this)},fixBlock:function(a,b){var c=this.createBookmark(),d=this.document.createElement(b);this.collapse(a);this.enlarge(CKEDITOR.ENLARGE_BLOCK_CONTENTS);this.extractContents().appendTo(d);d.trim();d.appendBogus();this.insertNode(d);this.moveToBookmark(c);return d},splitBlock:function(a){var b=new CKEDITOR.dom.elementPath(this.startContainer,this.root),c=new CKEDITOR.dom.elementPath(this.endContainer,this.root),d=b.block,e=c.block,f=null;if(!b.blockLimit.equals(c.blockLimit))return null;
if(a!="br"){if(!d){d=this.fixBlock(true,a);e=(new CKEDITOR.dom.elementPath(this.endContainer,this.root)).block}e||(e=this.fixBlock(false,a))}a=d&&this.checkStartOfBlock();b=e&&this.checkEndOfBlock();this.deleteContents();if(d&&d.equals(e))if(b){f=new CKEDITOR.dom.elementPath(this.startContainer,this.root);this.moveToPosition(e,CKEDITOR.POSITION_AFTER_END);e=null}else if(a){f=new CKEDITOR.dom.elementPath(this.startContainer,this.root);this.moveToPosition(d,CKEDITOR.POSITION_BEFORE_START);d=null}else{e=
this.splitElement(d);d.is("ul","ol")||d.appendBogus()}return{previousBlock:d,nextBlock:e,wasStartOfBlock:a,wasEndOfBlock:b,elementPath:f}},splitElement:function(a){if(!this.collapsed)return null;this.setEndAt(a,CKEDITOR.POSITION_BEFORE_END);var b=this.extractContents(),c=a.clone(false);b.appendTo(c);c.insertAfter(a);this.moveToPosition(a,CKEDITOR.POSITION_AFTER_END);return c},removeEmptyBlocksAtEnd:function(){function a(d){return function(a){return b(a)||(c(a)||a.type==CKEDITOR.NODE_ELEMENT&&a.isEmptyInlineRemoveable())||
d.is("table")&&a.is("caption")?false:true}}var b=CKEDITOR.dom.walker.whitespaces(),c=CKEDITOR.dom.walker.bookmark(false);return function(b){for(var c=this.createBookmark(),d=this[b?"endPath":"startPath"](),e=d.block||d.blockLimit,f;e&&!e.equals(d.root)&&!e.getFirst(a(e));){f=e.getParent();this[b?"setEndAt":"setStartAt"](e,CKEDITOR.POSITION_AFTER_END);e.remove(1);e=f}this.moveToBookmark(c)}}(),startPath:function(){return new CKEDITOR.dom.elementPath(this.startContainer,this.root)},endPath:function(){return new CKEDITOR.dom.elementPath(this.endContainer,
this.root)},checkBoundaryOfElement:function(a,b){var c=b==CKEDITOR.START,d=this.clone();d.collapse(c);d[c?"setStartAt":"setEndAt"](a,c?CKEDITOR.POSITION_AFTER_START:CKEDITOR.POSITION_BEFORE_END);d=new CKEDITOR.dom.walker(d);d.evaluator=f(c);return d[c?"checkBackward":"checkForward"]()},checkStartOfBlock:function(){var b=this.startContainer,c=this.startOffset;if(CKEDITOR.env.ie&&c&&b.type==CKEDITOR.NODE_TEXT){b=CKEDITOR.tools.ltrim(b.substring(0,c));k.test(b)&&this.trim(0,1)}this.trim();b=new CKEDITOR.dom.elementPath(this.startContainer,
this.root);c=this.clone();c.collapse(true);c.setStartAt(b.block||b.blockLimit,CKEDITOR.POSITION_AFTER_START);b=new CKEDITOR.dom.walker(c);b.evaluator=a();return b.checkBackward()},checkEndOfBlock:function(){var b=this.endContainer,c=this.endOffset;if(CKEDITOR.env.ie&&b.type==CKEDITOR.NODE_TEXT){b=CKEDITOR.tools.rtrim(b.substring(c));k.test(b)&&this.trim(1,0)}this.trim();b=new CKEDITOR.dom.elementPath(this.endContainer,this.root);c=this.clone();c.collapse(false);c.setEndAt(b.block||b.blockLimit,CKEDITOR.POSITION_BEFORE_END);
b=new CKEDITOR.dom.walker(c);b.evaluator=a();return b.checkForward()},getPreviousNode:function(a,b,c){var d=this.clone();d.collapse(1);d.setStartAt(c||this.root,CKEDITOR.POSITION_AFTER_START);c=new CKEDITOR.dom.walker(d);c.evaluator=a;c.guard=b;return c.previous()},getNextNode:function(a,b,c){var d=this.clone();d.collapse();d.setEndAt(c||this.root,CKEDITOR.POSITION_BEFORE_END);c=new CKEDITOR.dom.walker(d);c.evaluator=a;c.guard=b;return c.next()},checkReadOnly:function(){function a(b,c){for(;b;){if(b.type==
CKEDITOR.NODE_ELEMENT){if(b.getAttribute("contentEditable")=="false"&&!b.data("cke-editable"))return 0;if(b.is("html")||b.getAttribute("contentEditable")=="true"&&(b.contains(c)||b.equals(c)))break}b=b.getParent()}return 1}return function(){var b=this.startContainer,c=this.endContainer;return!(a(b,c)&&a(c,b))}}(),moveToElementEditablePosition:function(a,b){if(a.type==CKEDITOR.NODE_ELEMENT&&!a.isEditable(false)){this.moveToPosition(a,b?CKEDITOR.POSITION_AFTER_END:CKEDITOR.POSITION_BEFORE_START);return true}for(var c=
0;a;){if(a.type==CKEDITOR.NODE_TEXT){b&&this.endContainer&&this.checkEndOfBlock()&&k.test(a.getText())?this.moveToPosition(a,CKEDITOR.POSITION_BEFORE_START):this.moveToPosition(a,b?CKEDITOR.POSITION_AFTER_END:CKEDITOR.POSITION_BEFORE_START);c=1;break}if(a.type==CKEDITOR.NODE_ELEMENT)if(a.isEditable()){this.moveToPosition(a,b?CKEDITOR.POSITION_BEFORE_END:CKEDITOR.POSITION_AFTER_START);c=1}else if(b&&a.is("br")&&this.endContainer&&this.checkEndOfBlock())this.moveToPosition(a,CKEDITOR.POSITION_BEFORE_START);
else if(a.getAttribute("contenteditable")=="false"&&a.is(CKEDITOR.dtd.$block)){this.setStartBefore(a);this.setEndAfter(a);return true}var d=a,e=c,f=void 0;d.type==CKEDITOR.NODE_ELEMENT&&d.isEditable(false)&&(f=d[b?"getLast":"getFirst"](g));!e&&!f&&(f=d[b?"getPrevious":"getNext"](g));a=f}return!!c},moveToClosestEditablePosition:function(a,b){var c=new CKEDITOR.dom.range(this.root),d=0,e,f=[CKEDITOR.POSITION_AFTER_END,CKEDITOR.POSITION_BEFORE_START];c.moveToPosition(a,f[b?0:1]);if(a.is(CKEDITOR.dtd.$block)){if(e=
c[b?"getNextEditableNode":"getPreviousEditableNode"]()){d=1;if(e.type==CKEDITOR.NODE_ELEMENT&&e.is(CKEDITOR.dtd.$block)&&e.getAttribute("contenteditable")=="false"){c.setStartAt(e,CKEDITOR.POSITION_BEFORE_START);c.setEndAt(e,CKEDITOR.POSITION_AFTER_END)}else c.moveToPosition(e,f[b?1:0])}}else d=1;d&&this.moveToRange(c);return!!d},moveToElementEditStart:function(a){return this.moveToElementEditablePosition(a)},moveToElementEditEnd:function(a){return this.moveToElementEditablePosition(a,true)},getEnclosedNode:function(){var a=
this.clone();a.optimize();if(a.startContainer.type!=CKEDITOR.NODE_ELEMENT||a.endContainer.type!=CKEDITOR.NODE_ELEMENT)return null;var a=new CKEDITOR.dom.walker(a),b=CKEDITOR.dom.walker.bookmark(false,true),c=CKEDITOR.dom.walker.whitespaces(true);a.evaluator=function(a){return c(a)&&b(a)};var d=a.next();a.reset();return d&&d.equals(a.previous())?d:null},getTouchedStartNode:function(){var a=this.startContainer;return this.collapsed||a.type!=CKEDITOR.NODE_ELEMENT?a:a.getChild(this.startOffset)||a},getTouchedEndNode:function(){var a=
this.endContainer;return this.collapsed||a.type!=CKEDITOR.NODE_ELEMENT?a:a.getChild(this.endOffset-1)||a},getNextEditableNode:b(),getPreviousEditableNode:b(1),scrollIntoView:function(){var a=new CKEDITOR.dom.element.createFromHtml("<span>&nbsp;</span>",this.document),b,c,d,e=this.clone();e.optimize();if(d=e.startContainer.type==CKEDITOR.NODE_TEXT){c=e.startContainer.getText();b=e.startContainer.split(e.startOffset);a.insertAfter(e.startContainer)}else e.insertNode(a);a.scrollIntoView();if(d){e.startContainer.setText(c);
b.remove()}a.remove()},_setStartContainer:function(a){this.startContainer=a},_setEndContainer:function(a){this.endContainer=a}}})();CKEDITOR.POSITION_AFTER_START=1;CKEDITOR.POSITION_BEFORE_END=2;CKEDITOR.POSITION_BEFORE_START=3;CKEDITOR.POSITION_AFTER_END=4;CKEDITOR.ENLARGE_ELEMENT=1;CKEDITOR.ENLARGE_BLOCK_CONTENTS=2;CKEDITOR.ENLARGE_LIST_ITEM_CONTENTS=3;CKEDITOR.ENLARGE_INLINE=4;CKEDITOR.START=1;CKEDITOR.END=2;CKEDITOR.SHRINK_ELEMENT=1;CKEDITOR.SHRINK_TEXT=2;"use strict";
(function(){function a(a){if(!(arguments.length<1)){this.range=a;this.forceBrBreak=0;this.enlargeBr=1;this.enforceRealBlocks=0;this._||(this._={})}}function f(a){var b=[];a.forEach(function(a){if(a.getAttribute("contenteditable")=="true"){b.push(a);return false}},CKEDITOR.NODE_ELEMENT,true);return b}function b(a,c,d,e){a:{e==null&&(e=f(d));for(var h;h=e.shift();)if(h.getDtd().p){e={element:h,remaining:e};break a}e=null}if(!e)return 0;if((h=CKEDITOR.filter.instances[e.element.data("cke-filter")])&&
!h.check(c))return b(a,c,d,e.remaining);c=new CKEDITOR.dom.range(e.element);c.selectNodeContents(e.element);c=c.createIterator();c.enlargeBr=a.enlargeBr;c.enforceRealBlocks=a.enforceRealBlocks;c.activeFilter=c.filter=h;a._.nestedEditable={element:e.element,container:d,remaining:e.remaining,iterator:c};return 1}function c(a,b,c){if(!b)return false;a=a.clone();a.collapse(!c);return a.checkBoundaryOfElement(b,c?CKEDITOR.START:CKEDITOR.END)}var e=/^[\r\n\t ]+$/,d=CKEDITOR.dom.walker.bookmark(false,true),
h=CKEDITOR.dom.walker.whitespaces(true),k=function(a){return d(a)&&h(a)},j={dd:1,dt:1,li:1};a.prototype={getNextParagraph:function(a){var f,h,s,w,q,a=a||"p";if(this._.nestedEditable){if(f=this._.nestedEditable.iterator.getNextParagraph(a)){this.activeFilter=this._.nestedEditable.iterator.activeFilter;return f}this.activeFilter=this.filter;if(b(this,a,this._.nestedEditable.container,this._.nestedEditable.remaining)){this.activeFilter=this._.nestedEditable.iterator.activeFilter;return this._.nestedEditable.iterator.getNextParagraph(a)}this._.nestedEditable=
null}if(!this.range.root.getDtd()[a])return null;if(!this._.started){var t=this.range.clone();h=t.startPath();var i=t.endPath(),A=!t.collapsed&&c(t,h.block),u=!t.collapsed&&c(t,i.block,1);t.shrink(CKEDITOR.SHRINK_ELEMENT,true);A&&t.setStartAt(h.block,CKEDITOR.POSITION_BEFORE_END);u&&t.setEndAt(i.block,CKEDITOR.POSITION_AFTER_START);h=t.endContainer.hasAscendant("pre",true)||t.startContainer.hasAscendant("pre",true);t.enlarge(this.forceBrBreak&&!h||!this.enlargeBr?CKEDITOR.ENLARGE_LIST_ITEM_CONTENTS:
CKEDITOR.ENLARGE_BLOCK_CONTENTS);if(!t.collapsed){h=new CKEDITOR.dom.walker(t.clone());i=CKEDITOR.dom.walker.bookmark(true,true);h.evaluator=i;this._.nextNode=h.next();h=new CKEDITOR.dom.walker(t.clone());h.evaluator=i;h=h.previous();this._.lastNode=h.getNextSourceNode(true,null,t.root);if(this._.lastNode&&this._.lastNode.type==CKEDITOR.NODE_TEXT&&!CKEDITOR.tools.trim(this._.lastNode.getText())&&this._.lastNode.getParent().isBlockBoundary()){i=this.range.clone();i.moveToPosition(this._.lastNode,CKEDITOR.POSITION_AFTER_END);
if(i.checkEndOfBlock()){i=new CKEDITOR.dom.elementPath(i.endContainer,i.root);this._.lastNode=(i.block||i.blockLimit).getNextSourceNode(true)}}if(!this._.lastNode||!t.root.contains(this._.lastNode)){this._.lastNode=this._.docEndMarker=t.document.createText("");this._.lastNode.insertAfter(h)}t=null}this._.started=1;h=t}i=this._.nextNode;t=this._.lastNode;for(this._.nextNode=null;i;){var A=0,u=i.hasAscendant("pre"),o=i.type!=CKEDITOR.NODE_ELEMENT,l=0;if(o)i.type==CKEDITOR.NODE_TEXT&&e.test(i.getText())&&
(o=0);else{var p=i.getName();if(CKEDITOR.dtd.$block[p]&&i.getAttribute("contenteditable")=="false"){f=i;b(this,a,f);break}else if(i.isBlockBoundary(this.forceBrBreak&&!u&&{br:1})){if(p=="br")o=1;else if(!h&&!i.getChildCount()&&p!="hr"){f=i;s=i.equals(t);break}if(h){h.setEndAt(i,CKEDITOR.POSITION_BEFORE_START);if(p!="br")this._.nextNode=i}A=1}else{if(i.getFirst()){if(!h){h=this.range.clone();h.setStartAt(i,CKEDITOR.POSITION_BEFORE_START)}i=i.getFirst();continue}o=1}}if(o&&!h){h=this.range.clone();
h.setStartAt(i,CKEDITOR.POSITION_BEFORE_START)}s=(!A||o)&&i.equals(t);if(h&&!A)for(;!i.getNext(k)&&!s;){p=i.getParent();if(p.isBlockBoundary(this.forceBrBreak&&!u&&{br:1})){A=1;o=0;s||p.equals(t);h.setEndAt(p,CKEDITOR.POSITION_BEFORE_END);break}i=p;o=1;s=i.equals(t);l=1}o&&h.setEndAt(i,CKEDITOR.POSITION_AFTER_END);i=this._getNextSourceNode(i,l,t);if((s=!i)||A&&h)break}if(!f){if(!h){this._.docEndMarker&&this._.docEndMarker.remove();return this._.nextNode=null}f=new CKEDITOR.dom.elementPath(h.startContainer,
h.root);i=f.blockLimit;A={div:1,th:1,td:1};f=f.block;if(!f&&i&&!this.enforceRealBlocks&&A[i.getName()]&&h.checkStartOfBlock()&&h.checkEndOfBlock()&&!i.equals(h.root))f=i;else if(!f||this.enforceRealBlocks&&f.is(j)){f=this.range.document.createElement(a);h.extractContents().appendTo(f);f.trim();h.insertNode(f);w=q=true}else if(f.getName()!="li"){if(!h.checkStartOfBlock()||!h.checkEndOfBlock()){f=f.clone(false);h.extractContents().appendTo(f);f.trim();q=h.splitBlock();w=!q.wasStartOfBlock;q=!q.wasEndOfBlock;
h.insertNode(f)}}else if(!s)this._.nextNode=f.equals(t)?null:this._getNextSourceNode(h.getBoundaryNodes().endNode,1,t)}if(w)(w=f.getPrevious())&&w.type==CKEDITOR.NODE_ELEMENT&&(w.getName()=="br"?w.remove():w.getLast()&&w.getLast().$.nodeName.toLowerCase()=="br"&&w.getLast().remove());if(q)(w=f.getLast())&&w.type==CKEDITOR.NODE_ELEMENT&&w.getName()=="br"&&(!CKEDITOR.env.needsBrFiller||w.getPrevious(d)||w.getNext(d))&&w.remove();if(!this._.nextNode)this._.nextNode=s||f.equals(t)||!t?null:this._getNextSourceNode(f,
1,t);return f},_getNextSourceNode:function(a,b,c){function e(a){return!(a.equals(c)||a.equals(f))}for(var f=this.range.root,a=a.getNextSourceNode(b,null,e);!d(a);)a=a.getNextSourceNode(b,null,e);return a}};CKEDITOR.dom.range.prototype.createIterator=function(){return new a(this)}})();
CKEDITOR.command=function(a,f){this.uiItems=[];this.exec=function(b){if(this.state==CKEDITOR.TRISTATE_DISABLED||!this.checkAllowed())return false;this.editorFocus&&a.focus();return this.fire("exec")===false?true:f.exec.call(this,a,b)!==false};this.refresh=function(a,b){if(!this.readOnly&&a.readOnly)return true;if(this.context&&!b.isContextFor(this.context)){this.disable();return true}if(!this.checkAllowed(true)){this.disable();return true}this.startDisabled||this.enable();this.modes&&!this.modes[a.mode]&&
this.disable();return this.fire("refresh",{editor:a,path:b})===false?true:f.refresh&&f.refresh.apply(this,arguments)!==false};var b;this.checkAllowed=function(c){return!c&&typeof b=="boolean"?b:b=a.activeFilter.checkFeature(this)};CKEDITOR.tools.extend(this,f,{modes:{wysiwyg:1},editorFocus:1,contextSensitive:!!f.context,state:CKEDITOR.TRISTATE_DISABLED});CKEDITOR.event.call(this)};
CKEDITOR.command.prototype={enable:function(){this.state==CKEDITOR.TRISTATE_DISABLED&&this.checkAllowed()&&this.setState(!this.preserveState||typeof this.previousState=="undefined"?CKEDITOR.TRISTATE_OFF:this.previousState)},disable:function(){this.setState(CKEDITOR.TRISTATE_DISABLED)},setState:function(a){if(this.state==a||a!=CKEDITOR.TRISTATE_DISABLED&&!this.checkAllowed())return false;this.previousState=this.state;this.state=a;this.fire("state");return true},toggleState:function(){this.state==CKEDITOR.TRISTATE_OFF?
this.setState(CKEDITOR.TRISTATE_ON):this.state==CKEDITOR.TRISTATE_ON&&this.setState(CKEDITOR.TRISTATE_OFF)}};CKEDITOR.event.implementOn(CKEDITOR.command.prototype);CKEDITOR.ENTER_P=1;CKEDITOR.ENTER_BR=2;CKEDITOR.ENTER_DIV=3;
CKEDITOR.config={customConfig:"config.js",autoUpdateElement:!0,language:"",defaultLanguage:"en",contentsLangDirection:"",enterMode:CKEDITOR.ENTER_P,forceEnterMode:!1,shiftEnterMode:CKEDITOR.ENTER_BR,docType:"<!DOCTYPE html>",bodyId:"",bodyClass:"",fullPage:!1,height:200,extraPlugins:"",removePlugins:"",protectedSource:[],tabIndex:0,width:"",baseFloatZIndex:1E4,blockedKeystrokes:[CKEDITOR.CTRL+66,CKEDITOR.CTRL+73,CKEDITOR.CTRL+85]};
(function(){function a(a,b,c,d,e){var f,p,a=[];for(f in b){p=b[f];p=typeof p=="boolean"?{}:typeof p=="function"?{match:p}:K(p);if(f.charAt(0)!="$")p.elements=f;if(c)p.featureName=c.toLowerCase();var i=p;i.elements=h(i.elements,/\s+/)||null;i.propertiesOnly=i.propertiesOnly||i.elements===true;var l=/\s*,\s*/,r=void 0;for(r in z){i[r]=h(i[r],l)||null;var x=i,n=B[r],v=h(i[B[r]],l),q=i[r],E=[],g=true,o=void 0;v?g=false:v={};for(o in q)if(o.charAt(0)=="!"){o=o.slice(1);E.push(o);v[o]=true;g=false}for(;o=
E.pop();){q[o]=q["!"+o];delete q["!"+o]}x[n]=(g?false:v)||null}i.match=i.match||null;d.push(p);a.push(p)}for(var b=e.elements,e=e.generic,C,c=0,d=a.length;c<d;++c){f=K(a[c]);p=f.classes===true||f.styles===true||f.attributes===true;i=f;r=n=l=void 0;for(l in z)i[l]=A(i[l]);x=true;for(r in B){l=B[r];n=i[l];v=[];q=void 0;for(q in n)q.indexOf("*")>-1?v.push(RegExp("^"+q.replace(/\*/g,".*")+"$")):v.push(q);n=v;if(n.length){i[l]=n;x=false}}i.nothingRequired=x;i.noProperties=!(i.attributes||i.classes||i.styles);
if(f.elements===true||f.elements===null)e[p?"unshift":"push"](f);else{i=f.elements;delete f.elements;for(C in i)if(b[C])b[C][p?"unshift":"push"](f);else b[C]=[f]}}}function f(a,c,d,e){if(!a.match||a.match(c))if(e||k(a,c)){if(!a.propertiesOnly)d.valid=true;if(!d.allAttributes)d.allAttributes=b(a.attributes,c.attributes,d.validAttributes);if(!d.allStyles)d.allStyles=b(a.styles,c.styles,d.validStyles);if(!d.allClasses){a=a.classes;c=c.classes;e=d.validClasses;if(a)if(a===true)a=true;else{for(var f=0,
p=c.length,i;f<p;++f){i=c[f];e[i]||(e[i]=a(i))}a=false}else a=false;d.allClasses=a}}}function b(a,b,c){if(!a)return false;if(a===true)return true;for(var d in b)c[d]||(c[d]=a(d));return false}function c(a,b,c){if(!a.match||a.match(b)){if(a.noProperties)return false;c.hadInvalidAttribute=e(a.attributes,b.attributes)||c.hadInvalidAttribute;c.hadInvalidStyle=e(a.styles,b.styles)||c.hadInvalidStyle;a=a.classes;b=b.classes;if(a){for(var d=false,f=a===true,p=b.length;p--;)if(f||a(b[p])){b.splice(p,1);d=
true}a=d}else a=false;c.hadInvalidClass=a||c.hadInvalidClass}}function e(a,b){if(!a)return false;var c=false,d=a===true,e;for(e in b)if(d||a(e)){delete b[e];c=true}return c}function d(a,b,c){if(a.disabled||a.customConfig&&!c||!b)return false;a._.cachedChecks={};return true}function h(a,b){if(!a)return false;if(a===true)return a;if(typeof a=="string"){a=I(a);return a=="*"?true:CKEDITOR.tools.convertArrayToObject(a.split(b))}if(CKEDITOR.tools.isArray(a))return a.length?CKEDITOR.tools.convertArrayToObject(a):
false;var c={},d=0,e;for(e in a){c[e]=a[e];d++}return d?c:false}function k(a,b){if(a.nothingRequired)return true;var c,d,e,f;if(e=a.requiredClasses){f=b.classes;for(c=0;c<e.length;++c){d=e[c];if(typeof d=="string"){if(CKEDITOR.tools.indexOf(f,d)==-1)return false}else if(!CKEDITOR.tools.checkIfAnyArrayItemMatches(f,d))return false}}return j(b.styles,a.requiredStyles)&&j(b.attributes,a.requiredAttributes)}function j(a,b){if(!b)return true;for(var c=0,d;c<b.length;++c){d=b[c];if(typeof d=="string"){if(!(d in
a))return false}else if(!CKEDITOR.tools.checkIfAnyObjectPropertyMatches(a,d))return false}return true}function g(a){if(!a)return{};for(var a=a.split(/\s*,\s*/).sort(),b={};a.length;)b[a.shift()]=v;return b}function m(a){for(var b,c,d,e,f={},p=1,a=I(a);b=a.match(x);){if(c=b[2]){d=y(c,"styles");e=y(c,"attrs");c=y(c,"classes")}else d=e=c=null;f["$"+p++]={elements:b[1],classes:c,styles:d,attributes:e};a=a.slice(b[0].length)}return f}function y(a,b){var c=a.match(E[b]);return c?I(c[1]):null}function s(a){var b=
a.styleBackup=a.attributes.style,c=a.classBackup=a.attributes["class"];if(!a.styles)a.styles=CKEDITOR.tools.parseCssText(b||"",1);if(!a.classes)a.classes=c?c.split(/\s+/):[]}function w(a,b,d,e){var l=0,r;if(e.toHtml)b.name=b.name.replace($,"$1");if(e.doCallbacks&&a.elementCallbacks){a:for(var x=a.elementCallbacks,h=0,n=x.length,v;h<n;++h)if(v=x[h](b)){r=v;break a}if(r)return r}if(e.doTransform)if(r=a._.transformations[b.name]){s(b);for(x=0;x<r.length;++x)p(a,b,r[x]);t(b)}if(e.doFilter){a:{x=b.name;
h=a._;a=h.allowedRules.elements[x];r=h.allowedRules.generic;x=h.disallowedRules.elements[x];h=h.disallowedRules.generic;n=e.skipRequired;v={valid:false,validAttributes:{},validClasses:{},validStyles:{},allAttributes:false,allClasses:false,allStyles:false,hadInvalidAttribute:false,hadInvalidClass:false,hadInvalidStyle:false};var q,z;if(!a&&!r)a=null;else{s(b);if(x){q=0;for(z=x.length;q<z;++q)if(c(x[q],b,v)===false){a=null;break a}}if(h){q=0;for(z=h.length;q<z;++q)c(h[q],b,v)}if(a){q=0;for(z=a.length;q<
z;++q)f(a[q],b,v,n)}if(r){q=0;for(z=r.length;q<z;++q)f(r[q],b,v,n)}a=v}}if(!a){d.push(b);return F}if(!a.valid){d.push(b);return F}z=a.validAttributes;var E=a.validStyles;r=a.validClasses;var x=b.attributes,A=b.styles,h=b.classes,n=b.classBackup,o=b.styleBackup,g,B,C=[];v=[];var j=/^data-cke-/;q=false;delete x.style;delete x["class"];delete b.classBackup;delete b.styleBackup;if(!a.allAttributes)for(g in x)if(!z[g])if(j.test(g)){if(g!=(B=g.replace(/^data-cke-saved-/,""))&&!z[B]){delete x[g];q=true}}else{delete x[g];
q=true}if(!a.allStyles||a.hadInvalidStyle){for(g in A)a.allStyles||E[g]?C.push(g+":"+A[g]):q=true;if(C.length)x.style=C.sort().join("; ")}else if(o)x.style=o;if(!a.allClasses||a.hadInvalidClass){for(g=0;g<h.length;++g)(a.allClasses||r[h[g]])&&v.push(h[g]);v.length&&(x["class"]=v.sort().join(" "));n&&v.length<n.split(/\s+/).length&&(q=true)}else n&&(x["class"]=n);q&&(l=F);if(!e.skipFinalValidation&&!i(b)){d.push(b);return F}}if(e.toHtml)b.name=b.name.replace(aa,"cke:$1");return l}function q(a){var b=
[],c;for(c in a)c.indexOf("*")>-1&&b.push(c.replace(/\*/g,".*"));return b.length?RegExp("^(?:"+b.join("|")+")$"):null}function t(a){var b=a.attributes,c;delete b.style;delete b["class"];if(c=CKEDITOR.tools.writeCssText(a.styles,true))b.style=c;a.classes.length&&(b["class"]=a.classes.sort().join(" "))}function i(a){switch(a.name){case "a":if(!a.children.length&&!a.attributes.name)return false;break;case "img":if(!a.attributes.src)return false}return true}function A(a){if(!a)return false;if(a===true)return true;
var b=q(a);return function(c){return c in a||b&&c.match(b)}}function u(){return new CKEDITOR.htmlParser.element("br")}function o(a){return a.type==CKEDITOR.NODE_ELEMENT&&(a.name=="br"||L.$block[a.name])}function l(a,b,c){var d=a.name;if(L.$empty[d]||!a.children.length)if(d=="hr"&&b=="br")a.replaceWith(u());else{a.parent&&c.push({check:"it",el:a.parent});a.remove()}else if(L.$block[d]||d=="tr")if(b=="br"){if(a.previous&&!o(a.previous)){b=u();b.insertBefore(a)}if(a.next&&!o(a.next)){b=u();b.insertAfter(a)}a.replaceWithChildren()}else{var d=
a.children,e;b:{e=L[b];for(var f=0,p=d.length,i;f<p;++f){i=d[f];if(i.type==CKEDITOR.NODE_ELEMENT&&!e[i.name]){e=false;break b}}e=true}if(e){a.name=b;a.attributes={};c.push({check:"parent-down",el:a})}else{e=a.parent;for(var f=e.type==CKEDITOR.NODE_DOCUMENT_FRAGMENT||e.name=="body",l,r,p=d.length;p>0;){i=d[--p];if(f&&(i.type==CKEDITOR.NODE_TEXT||i.type==CKEDITOR.NODE_ELEMENT&&L.$inline[i.name])){if(!l){l=new CKEDITOR.htmlParser.element(b);l.insertAfter(a);c.push({check:"parent-down",el:l})}l.add(i,
0)}else{l=null;r=L[e.name]||L.span;i.insertAfter(a);e.type!=CKEDITOR.NODE_DOCUMENT_FRAGMENT&&(i.type==CKEDITOR.NODE_ELEMENT&&!r[i.name])&&c.push({check:"el-up",el:i})}}a.remove()}}else if(d=="style")a.remove();else{a.parent&&c.push({check:"it",el:a.parent});a.replaceWithChildren()}}function p(a,b,c){var d,e;for(d=0;d<c.length;++d){e=c[d];if((!e.check||a.check(e.check,false))&&(!e.left||e.left(b))){e.right(b,ba);break}}}function r(a,b){var c=b.getDefinition(),d=c.attributes,e=c.styles,f,p,i,l;if(a.name!=
c.element)return false;for(f in d)if(f=="class"){c=d[f].split(/\s+/);for(i=a.classes.join("|");l=c.pop();)if(i.indexOf(l)==-1)return false}else if(a.attributes[f]!=d[f])return false;for(p in e)if(a.styles[p]!=e[p])return false;return true}function n(a,b){var c,d;if(typeof a=="string")c=a;else if(a instanceof CKEDITOR.style)d=a;else{c=a[0];d=a[1]}return[{element:c,left:d,right:function(a,c){c.transform(a,b)}}]}function P(a){return function(b){return r(b,a)}}function C(a){return function(b,c){c[a](b)}}
var L=CKEDITOR.dtd,F=1,K=CKEDITOR.tools.copy,I=CKEDITOR.tools.trim,v="cke-test",G=["","p","br","div"];CKEDITOR.FILTER_SKIP_TREE=2;CKEDITOR.filter=function(a){this.allowedContent=[];this.disallowedContent=[];this.elementCallbacks=null;this.disabled=false;this.editor=null;this.id=CKEDITOR.tools.getNextNumber();this._={allowedRules:{elements:{},generic:[]},disallowedRules:{elements:{},generic:[]},transformations:{},cachedTests:{}};CKEDITOR.filter.instances[this.id]=this;if(a instanceof CKEDITOR.editor){a=
this.editor=a;this.customConfig=true;var b=a.config.allowedContent;if(b===true)this.disabled=true;else{if(!b)this.customConfig=false;this.allow(b,"config",1);this.allow(a.config.extraAllowedContent,"extra",1);this.allow(G[a.enterMode]+" "+G[a.shiftEnterMode],"default",1);this.disallow(a.config.disallowedContent)}}else{this.customConfig=false;this.allow(a,"default",1)}};CKEDITOR.filter.instances={};CKEDITOR.filter.prototype={allow:function(b,c,e){if(!d(this,b,e))return false;var f,p;if(typeof b=="string")b=
m(b);else if(b instanceof CKEDITOR.style){if(b.toAllowedContentRules)return this.allow(b.toAllowedContentRules(this.editor),c,e);f=b.getDefinition();b={};e=f.attributes;b[f.element]=f={styles:f.styles,requiredStyles:f.styles&&CKEDITOR.tools.objectKeys(f.styles)};if(e){e=K(e);f.classes=e["class"]?e["class"].split(/\s+/):null;f.requiredClasses=f.classes;delete e["class"];f.attributes=e;f.requiredAttributes=e&&CKEDITOR.tools.objectKeys(e)}}else if(CKEDITOR.tools.isArray(b)){for(f=0;f<b.length;++f)p=
this.allow(b[f],c,e);return p}a(this,b,c,this.allowedContent,this._.allowedRules);return true},applyTo:function(a,b,c,d){if(this.disabled)return false;var e=this,f=[],p=this.editor&&this.editor.config.protectedSource,r,x=false,h={doFilter:!c,doTransform:true,doCallbacks:true,toHtml:b};a.forEach(function(a){if(a.type==CKEDITOR.NODE_ELEMENT){if(a.attributes["data-cke-filter"]=="off")return false;if(!b||!(a.name=="span"&&~CKEDITOR.tools.objectKeys(a.attributes).join("|").indexOf("data-cke-"))){r=w(e,
a,f,h);if(r&F)x=true;else if(r&2)return false}}else if(a.type==CKEDITOR.NODE_COMMENT&&a.value.match(/^\{cke_protected\}(?!\{C\})/)){var c;a:{var d=decodeURIComponent(a.value.replace(/^\{cke_protected\}/,""));c=[];var i,l,n;if(p)for(l=0;l<p.length;++l)if((n=d.match(p[l]))&&n[0].length==d.length){c=true;break a}d=CKEDITOR.htmlParser.fragment.fromHtml(d);d.children.length==1&&(i=d.children[0]).type==CKEDITOR.NODE_ELEMENT&&w(e,i,c,h);c=!c.length}c||f.push(a)}},null,true);f.length&&(x=true);for(var n,
a=[],d=G[d||(this.editor?this.editor.enterMode:CKEDITOR.ENTER_P)],q;c=f.pop();)c.type==CKEDITOR.NODE_ELEMENT?l(c,d,a):c.remove();for(;n=a.pop();){c=n.el;if(c.parent){q=L[c.parent.name]||L.span;switch(n.check){case "it":L.$removeEmpty[c.name]&&!c.children.length?l(c,d,a):i(c)||l(c,d,a);break;case "el-up":c.parent.type!=CKEDITOR.NODE_DOCUMENT_FRAGMENT&&!q[c.name]&&l(c,d,a);break;case "parent-down":c.parent.type!=CKEDITOR.NODE_DOCUMENT_FRAGMENT&&!q[c.name]&&l(c.parent,d,a)}}}return x},checkFeature:function(a){if(this.disabled||
!a)return true;a.toFeature&&(a=a.toFeature(this.editor));return!a.requiredContent||this.check(a.requiredContent)},disable:function(){this.disabled=true},disallow:function(b){if(!d(this,b,true))return false;typeof b=="string"&&(b=m(b));a(this,b,null,this.disallowedContent,this._.disallowedRules);return true},addContentForms:function(a){if(!this.disabled&&a){var b,c,d=[],e;for(b=0;b<a.length&&!e;++b){c=a[b];if((typeof c=="string"||c instanceof CKEDITOR.style)&&this.check(c))e=c}if(e){for(b=0;b<a.length;++b)d.push(n(a[b],
e));this.addTransformations(d)}}},addElementCallback:function(a){if(!this.elementCallbacks)this.elementCallbacks=[];this.elementCallbacks.push(a)},addFeature:function(a){if(this.disabled||!a)return true;a.toFeature&&(a=a.toFeature(this.editor));this.allow(a.allowedContent,a.name);this.addTransformations(a.contentTransformations);this.addContentForms(a.contentForms);return a.requiredContent&&(this.customConfig||this.disallowedContent.length)?this.check(a.requiredContent):true},addTransformations:function(a){var b,
c;if(!this.disabled&&a){var d=this._.transformations,e;for(e=0;e<a.length;++e){b=a[e];var f=void 0,p=void 0,i=void 0,l=void 0,r=void 0,x=void 0;c=[];for(p=0;p<b.length;++p){i=b[p];if(typeof i=="string"){i=i.split(/\s*:\s*/);l=i[0];r=null;x=i[1]}else{l=i.check;r=i.left;x=i.right}if(!f){f=i;f=f.element?f.element:l?l.match(/^([a-z0-9]+)/i)[0]:f.left.getDefinition().element}r instanceof CKEDITOR.style&&(r=P(r));c.push({check:l==f?null:l,left:r,right:typeof x=="string"?C(x):x})}b=f;d[b]||(d[b]=[]);d[b].push(c)}}},
check:function(a,b,c){if(this.disabled)return true;if(CKEDITOR.tools.isArray(a)){for(var d=a.length;d--;)if(this.check(a[d],b,c))return true;return false}var e,f;if(typeof a=="string"){f=a+"<"+(b===false?"0":"1")+(c?"1":"0")+">";if(f in this._.cachedChecks)return this._.cachedChecks[f];d=m(a).$1;e=d.styles;var i=d.classes;d.name=d.elements;d.classes=i=i?i.split(/\s*,\s*/):[];d.styles=g(e);d.attributes=g(d.attributes);d.children=[];i.length&&(d.attributes["class"]=i.join(" "));if(e)d.attributes.style=
CKEDITOR.tools.writeCssText(d.styles);e=d}else{d=a.getDefinition();e=d.styles;i=d.attributes||{};if(e){e=K(e);i.style=CKEDITOR.tools.writeCssText(e,true)}else e={};e={name:d.element,attributes:i,classes:i["class"]?i["class"].split(/\s+/):[],styles:e,children:[]}}var i=CKEDITOR.tools.clone(e),l=[],r;if(b!==false&&(r=this._.transformations[e.name])){for(d=0;d<r.length;++d)p(this,e,r[d]);t(e)}w(this,i,l,{doFilter:true,doTransform:b!==false,skipRequired:!c,skipFinalValidation:!c});b=l.length>0?false:
CKEDITOR.tools.objectCompare(e.attributes,i.attributes,true)?true:false;typeof a=="string"&&(this._.cachedChecks[f]=b);return b},getAllowedEnterMode:function(){var a=["p","div","br"],b={p:CKEDITOR.ENTER_P,div:CKEDITOR.ENTER_DIV,br:CKEDITOR.ENTER_BR};return function(c,d){var e=a.slice(),f;if(this.check(G[c]))return c;for(d||(e=e.reverse());f=e.pop();)if(this.check(f))return b[f];return CKEDITOR.ENTER_BR}}(),destroy:function(){delete CKEDITOR.filter.instances[this.id];delete this._;delete this.allowedContent;
delete this.disallowedContent}};var z={styles:1,attributes:1,classes:1},B={styles:"requiredStyles",attributes:"requiredAttributes",classes:"requiredClasses"},x=/^([a-z0-9\-*\s]+)((?:\s*\{[!\w\-,\s\*]+\}\s*|\s*\[[!\w\-,\s\*]+\]\s*|\s*\([!\w\-,\s\*]+\)\s*){0,3})(?:;\s*|$)/i,E={styles:/{([^}]+)}/,attrs:/\[([^\]]+)\]/,classes:/\(([^\)]+)\)/},$=/^cke:(object|embed|param)$/,aa=/^(object|embed|param)$/,ba=CKEDITOR.filter.transformationsTools={sizeToStyle:function(a){this.lengthToStyle(a,"width");this.lengthToStyle(a,
"height")},sizeToAttribute:function(a){this.lengthToAttribute(a,"width");this.lengthToAttribute(a,"height")},lengthToStyle:function(a,b,c){c=c||b;if(!(c in a.styles)){var d=a.attributes[b];if(d){/^\d+$/.test(d)&&(d=d+"px");a.styles[c]=d}}delete a.attributes[b]},lengthToAttribute:function(a,b,c){c=c||b;if(!(c in a.attributes)){var d=a.styles[b],e=d&&d.match(/^(\d+)(?:\.\d*)?px$/);e?a.attributes[c]=e[1]:d==v&&(a.attributes[c]=v)}delete a.styles[b]},alignmentToStyle:function(a){if(!("float"in a.styles)){var b=
a.attributes.align;if(b=="left"||b=="right")a.styles["float"]=b}delete a.attributes.align},alignmentToAttribute:function(a){if(!("align"in a.attributes)){var b=a.styles["float"];if(b=="left"||b=="right")a.attributes.align=b}delete a.styles["float"]},matchesStyle:r,transform:function(a,b){if(typeof b=="string")a.name=b;else{var c=b.getDefinition(),d=c.styles,e=c.attributes,f,i,p,l;a.name=c.element;for(f in e)if(f=="class"){c=a.classes.join("|");for(p=e[f].split(/\s+/);l=p.pop();)c.indexOf(l)==-1&&
a.classes.push(l)}else a.attributes[f]=e[f];for(i in d)a.styles[i]=d[i]}}}})();
(function(){CKEDITOR.focusManager=function(a){if(a.focusManager)return a.focusManager;this.hasFocus=false;this.currentActive=null;this._={editor:a};return this};CKEDITOR.focusManager._={blurDelay:200};CKEDITOR.focusManager.prototype={focus:function(a){this._.timer&&clearTimeout(this._.timer);if(a)this.currentActive=a;if(!this.hasFocus&&!this._.locked){(a=CKEDITOR.currentInstance)&&a.focusManager.blur(1);this.hasFocus=true;(a=this._.editor.container)&&a.addClass("cke_focus");this._.editor.fire("focus")}},
lock:function(){this._.locked=1},unlock:function(){delete this._.locked},blur:function(a){function f(){if(this.hasFocus){this.hasFocus=false;var a=this._.editor.container;a&&a.removeClass("cke_focus");this._.editor.fire("blur")}}if(!this._.locked){this._.timer&&clearTimeout(this._.timer);var b=CKEDITOR.focusManager._.blurDelay;a||!b?f.call(this):this._.timer=CKEDITOR.tools.setTimeout(function(){delete this._.timer;f.call(this)},b,this)}},add:function(a,f){var b=a.getCustomData("focusmanager");if(!b||
b!=this){b&&b.remove(a);var b="focus",c="blur";if(f)if(CKEDITOR.env.ie){b="focusin";c="focusout"}else CKEDITOR.event.useCapture=1;var e={blur:function(){a.equals(this.currentActive)&&this.blur()},focus:function(){this.focus(a)}};a.on(b,e.focus,this);a.on(c,e.blur,this);if(f)CKEDITOR.event.useCapture=0;a.setCustomData("focusmanager",this);a.setCustomData("focusmanager_handlers",e)}},remove:function(a){a.removeCustomData("focusmanager");var f=a.removeCustomData("focusmanager_handlers");a.removeListener("blur",
f.blur);a.removeListener("focus",f.focus)}}})();CKEDITOR.keystrokeHandler=function(a){if(a.keystrokeHandler)return a.keystrokeHandler;this.keystrokes={};this.blockedKeystrokes={};this._={editor:a};return this};
(function(){var a,f=function(b){var b=b.data,e=b.getKeystroke(),d=this.keystrokes[e],f=this._.editor;a=f.fire("key",{keyCode:e,domEvent:b})===false;if(!a){d&&(a=f.execCommand(d,{from:"keystrokeHandler"})!==false);a||(a=!!this.blockedKeystrokes[e])}a&&b.preventDefault(true);return!a},b=function(b){if(a){a=false;b.data.preventDefault(true)}};CKEDITOR.keystrokeHandler.prototype={attach:function(a){a.on("keydown",f,this);if(CKEDITOR.env.gecko&&CKEDITOR.env.mac)a.on("keypress",b,this)}}})();
(function(){CKEDITOR.lang={languages:{af:1,ar:1,bg:1,bn:1,bs:1,ca:1,cs:1,cy:1,da:1,de:1,el:1,"en-au":1,"en-ca":1,"en-gb":1,en:1,eo:1,es:1,et:1,eu:1,fa:1,fi:1,fo:1,"fr-ca":1,fr:1,gl:1,gu:1,he:1,hi:1,hr:1,hu:1,id:1,is:1,it:1,ja:1,ka:1,km:1,ko:1,ku:1,lt:1,lv:1,mk:1,mn:1,ms:1,nb:1,nl:1,no:1,pl:1,"pt-br":1,pt:1,ro:1,ru:1,si:1,sk:1,sl:1,sq:1,"sr-latn":1,sr:1,sv:1,th:1,tr:1,tt:1,ug:1,uk:1,vi:1,"zh-cn":1,zh:1},rtl:{ar:1,fa:1,he:1,ku:1,ug:1},load:function(a,f,b){if(!a||!CKEDITOR.lang.languages[a])a=this.detect(f,
a);var c=this,f=function(){c[a].dir=c.rtl[a]?"rtl":"ltr";b(a,c[a])};this[a]?f():CKEDITOR.scriptLoader.load(CKEDITOR.getUrl("lang/"+a+".js"),f,this)},detect:function(a,f){var b=this.languages,f=f||navigator.userLanguage||navigator.language||a,c=f.toLowerCase().match(/([a-z]+)(?:-([a-z]+))?/),e=c[1],c=c[2];b[e+"-"+c]?e=e+"-"+c:b[e]||(e=null);CKEDITOR.lang.detect=e?function(){return e}:function(a){return a};return e||a}}})();
CKEDITOR.scriptLoader=function(){var a={},f={};return{load:function(b,c,e,d){var h=typeof b=="string";h&&(b=[b]);e||(e=CKEDITOR);var k=b.length,j=[],g=[],m=function(a){c&&(h?c.call(e,a):c.call(e,j,g))};if(k===0)m(true);else{var y=function(a,b){(b?j:g).push(a);if(--k<=0){d&&CKEDITOR.document.getDocumentElement().removeStyle("cursor");m(b)}},s=function(b,c){a[b]=1;var d=f[b];delete f[b];for(var e=0;e<d.length;e++)d[e](b,c)},w=function(b){if(a[b])y(b,true);else{var d=f[b]||(f[b]=[]);d.push(y);if(!(d.length>
1)){var e=new CKEDITOR.dom.element("script");e.setAttributes({type:"text/javascript",src:b});if(c)if(CKEDITOR.env.ie&&CKEDITOR.env.version<11)e.$.onreadystatechange=function(){if(e.$.readyState=="loaded"||e.$.readyState=="complete"){e.$.onreadystatechange=null;s(b,true)}};else{e.$.onload=function(){setTimeout(function(){s(b,true)},0)};e.$.onerror=function(){s(b,false)}}e.appendTo(CKEDITOR.document.getHead())}}};d&&CKEDITOR.document.getDocumentElement().setStyle("cursor","wait");for(var q=0;q<k;q++)w(b[q])}},
queue:function(){function a(){var b;(b=c[0])&&this.load(b.scriptUrl,b.callback,CKEDITOR,0)}var c=[];return function(e,d){var f=this;c.push({scriptUrl:e,callback:function(){d&&d.apply(this,arguments);c.shift();a.call(f)}});c.length==1&&a.call(this)}}()}}();CKEDITOR.resourceManager=function(a,f){this.basePath=a;this.fileName=f;this.registered={};this.loaded={};this.externals={};this._={waitingList:{}}};
CKEDITOR.resourceManager.prototype={add:function(a,f){if(this.registered[a])throw'[CKEDITOR.resourceManager.add] The resource name "'+a+'" is already registered.';var b=this.registered[a]=f||{};b.name=a;b.path=this.getPath(a);CKEDITOR.fire(a+CKEDITOR.tools.capitalize(this.fileName)+"Ready",b);return this.get(a)},get:function(a){return this.registered[a]||null},getPath:function(a){var f=this.externals[a];return CKEDITOR.getUrl(f&&f.dir||this.basePath+a+"/")},getFilePath:function(a){var f=this.externals[a];
return CKEDITOR.getUrl(this.getPath(a)+(f?f.file:this.fileName+".js"))},addExternal:function(a,f,b){for(var a=a.split(","),c=0;c<a.length;c++){var e=a[c];b||(f=f.replace(/[^\/]+$/,function(a){b=a;return""}));this.externals[e]={dir:f,file:b||this.fileName+".js"}}},load:function(a,f,b){CKEDITOR.tools.isArray(a)||(a=a?[a]:[]);for(var c=this.loaded,e=this.registered,d=[],h={},k={},j=0;j<a.length;j++){var g=a[j];if(g)if(!c[g]&&!e[g]){var m=this.getFilePath(g);d.push(m);m in h||(h[m]=[]);h[m].push(g)}else k[g]=
this.get(g)}CKEDITOR.scriptLoader.load(d,function(a,d){if(d.length)throw'[CKEDITOR.resourceManager.load] Resource name "'+h[d[0]].join(",")+'" was not found at "'+d[0]+'".';for(var e=0;e<a.length;e++)for(var q=h[a[e]],g=0;g<q.length;g++){var i=q[g];k[i]=this.get(i);c[i]=1}f.call(b,k)},this)}};CKEDITOR.plugins=new CKEDITOR.resourceManager("plugins/","plugin");
CKEDITOR.plugins.load=CKEDITOR.tools.override(CKEDITOR.plugins.load,function(a){var f={};return function(b,c,e){var d={},h=function(b){a.call(this,b,function(a){CKEDITOR.tools.extend(d,a);var b=[],m;for(m in a){var k=a[m],s=k&&k.requires;if(!f[m]){if(k.icons)for(var w=k.icons.split(","),q=w.length;q--;)CKEDITOR.skin.addIcon(w[q],k.path+"icons/"+(CKEDITOR.env.hidpi&&k.hidpi?"hidpi/":"")+w[q]+".png");f[m]=1}if(s){s.split&&(s=s.split(","));for(k=0;k<s.length;k++)d[s[k]]||b.push(s[k])}}if(b.length)h.call(this,
b);else{for(m in d){k=d[m];if(k.onLoad&&!k.onLoad._called){k.onLoad()===false&&delete d[m];k.onLoad._called=1}}c&&c.call(e||window,d)}},this)};h.call(this,b)}});CKEDITOR.plugins.setLang=function(a,f,b){var c=this.get(a),a=c.langEntries||(c.langEntries={}),c=c.lang||(c.lang=[]);c.split&&(c=c.split(","));CKEDITOR.tools.indexOf(c,f)==-1&&c.push(f);a[f]=b};CKEDITOR.ui=function(a){if(a.ui)return a.ui;this.items={};this.instances={};this.editor=a;this._={handlers:{}};return this};
CKEDITOR.ui.prototype={add:function(a,f,b){b.name=a.toLowerCase();var c=this.items[a]={type:f,command:b.command||null,args:Array.prototype.slice.call(arguments,2)};CKEDITOR.tools.extend(c,b)},get:function(a){return this.instances[a]},create:function(a){var f=this.items[a],b=f&&this._.handlers[f.type],c=f&&f.command&&this.editor.getCommand(f.command),b=b&&b.create.apply(this,f.args);this.instances[a]=b;c&&c.uiItems.push(b);if(b&&!b.type)b.type=f.type;return b},addHandler:function(a,f){this._.handlers[a]=
f},space:function(a){return CKEDITOR.document.getById(this.spaceId(a))},spaceId:function(a){return this.editor.id+"_"+a}};CKEDITOR.event.implementOn(CKEDITOR.ui);
(function(){function a(a,c,d){CKEDITOR.event.call(this);a=a&&CKEDITOR.tools.clone(a);if(c!==void 0){if(c instanceof CKEDITOR.dom.element){if(!d)throw Error("One of the element modes must be specified.");}else throw Error("Expect element of type CKEDITOR.dom.element.");if(CKEDITOR.env.ie&&CKEDITOR.env.quirks&&d==CKEDITOR.ELEMENT_MODE_INLINE)throw Error("Inline element mode is not supported on IE quirks.");if(!(d==CKEDITOR.ELEMENT_MODE_INLINE?c.is(CKEDITOR.dtd.$editable)||c.is("textarea"):d==CKEDITOR.ELEMENT_MODE_REPLACE?
!c.is(CKEDITOR.dtd.$nonBodyContent):1))throw Error('The specified element mode is not supported on element: "'+c.getName()+'".');this.element=c;this.elementMode=d;this.name=this.elementMode!=CKEDITOR.ELEMENT_MODE_APPENDTO&&(c.getId()||c.getNameAtt())}else this.elementMode=CKEDITOR.ELEMENT_MODE_NONE;this._={};this.commands={};this.templates={};this.name=this.name||f();this.id=CKEDITOR.tools.getNextId();this.status="unloaded";this.config=CKEDITOR.tools.prototypedCopy(CKEDITOR.config);this.ui=new CKEDITOR.ui(this);
this.focusManager=new CKEDITOR.focusManager(this);this.keystrokeHandler=new CKEDITOR.keystrokeHandler(this);this.on("readOnly",b);this.on("selectionChange",function(a){e(this,a.data.path)});this.on("activeFilterChange",function(){e(this,this.elementPath(),true)});this.on("mode",b);this.on("instanceReady",function(){this.config.startupFocus&&this.focus()});CKEDITOR.fire("instanceCreated",null,this);CKEDITOR.add(this);CKEDITOR.tools.setTimeout(function(){h(this,a)},0,this)}function f(){do var a="editor"+
++s;while(CKEDITOR.instances[a]);return a}function b(){var a=this.commands,b;for(b in a)c(this,a[b])}function c(a,b){b[b.startDisabled?"disable":a.readOnly&&!b.readOnly?"disable":b.modes[a.mode]?"enable":"disable"]()}function e(a,b,c){if(b){var d,e,f=a.commands;for(e in f){d=f[e];(c||d.contextSensitive)&&d.refresh(a,b)}}}function d(a){var b=a.config.customConfig;if(!b)return false;var b=CKEDITOR.getUrl(b),c=w[b]||(w[b]={});if(c.fn){c.fn.call(a,a.config);(CKEDITOR.getUrl(a.config.customConfig)==b||
!d(a))&&a.fireOnce("customConfigLoaded")}else CKEDITOR.scriptLoader.queue(b,function(){c.fn=CKEDITOR.editorConfig?CKEDITOR.editorConfig:function(){};d(a)});return true}function h(a,b){a.on("customConfigLoaded",function(){if(b){if(b.on)for(var c in b.on)a.on(c,b.on[c]);CKEDITOR.tools.extend(a.config,b,true);delete a.config.on}c=a.config;a.readOnly=!(!c.readOnly&&!(a.elementMode==CKEDITOR.ELEMENT_MODE_INLINE?a.element.is("textarea")?a.element.hasAttribute("disabled"):a.element.isReadOnly():a.elementMode==
CKEDITOR.ELEMENT_MODE_REPLACE&&a.element.hasAttribute("disabled")));a.blockless=a.elementMode==CKEDITOR.ELEMENT_MODE_INLINE?!(a.element.is("textarea")||CKEDITOR.dtd[a.element.getName()].p):false;a.tabIndex=c.tabIndex||a.element&&a.element.getAttribute("tabindex")||0;a.activeEnterMode=a.enterMode=a.blockless?CKEDITOR.ENTER_BR:c.enterMode;a.activeShiftEnterMode=a.shiftEnterMode=a.blockless?CKEDITOR.ENTER_BR:c.shiftEnterMode;if(c.skin)CKEDITOR.skinName=c.skin;a.fireOnce("configLoaded");a.dataProcessor=
new CKEDITOR.htmlDataProcessor(a);a.filter=a.activeFilter=new CKEDITOR.filter(a);k(a)});if(b&&b.customConfig!=null)a.config.customConfig=b.customConfig;d(a)||a.fireOnce("customConfigLoaded")}function k(a){CKEDITOR.skin.loadPart("editor",function(){j(a)})}function j(a){CKEDITOR.lang.load(a.config.language,a.config.defaultLanguage,function(b,c){var d=a.config.title;a.langCode=b;a.lang=CKEDITOR.tools.prototypedCopy(c);a.title=typeof d=="string"||d===false?d:[a.lang.editor,a.name].join(", ");if(!a.config.contentsLangDirection)a.config.contentsLangDirection=
a.elementMode==CKEDITOR.ELEMENT_MODE_INLINE?a.element.getDirection(1):a.lang.dir;a.fire("langLoaded");g(a)})}function g(a){a.getStylesSet(function(b){a.once("loaded",function(){a.fire("stylesSet",{styles:b})},null,null,1);m(a)})}function m(a){var b=a.config,c=b.plugins,d=b.extraPlugins,e=b.removePlugins;if(d)var f=RegExp("(?:^|,)(?:"+d.replace(/\s*,\s*/g,"|")+")(?=,|$)","g"),c=c.replace(f,""),c=c+(","+d);if(e)var l=RegExp("(?:^|,)(?:"+e.replace(/\s*,\s*/g,"|")+")(?=,|$)","g"),c=c.replace(l,"");CKEDITOR.env.air&&
(c=c+",adobeair");CKEDITOR.plugins.load(c.split(","),function(c){var d=[],e=[],f=[];a.plugins=c;for(var i in c){var h=c[i],g=h.lang,o=null,A=h.requires,v;CKEDITOR.tools.isArray(A)&&(A=A.join(","));if(A&&(v=A.match(l)))for(;A=v.pop();)CKEDITOR.tools.setTimeout(function(a,b){throw Error('Plugin "'+a.replace(",","")+'" cannot be removed from the plugins list, because it\'s required by "'+b+'" plugin.');},0,null,[A,i]);if(g&&!a.lang[i]){g.split&&(g=g.split(","));if(CKEDITOR.tools.indexOf(g,a.langCode)>=
0)o=a.langCode;else{o=a.langCode.replace(/-.*/,"");o=o!=a.langCode&&CKEDITOR.tools.indexOf(g,o)>=0?o:CKEDITOR.tools.indexOf(g,"en")>=0?"en":g[0]}if(!h.langEntries||!h.langEntries[o])f.push(CKEDITOR.getUrl(h.path+"lang/"+o+".js"));else{a.lang[i]=h.langEntries[o];o=null}}e.push(o);d.push(h)}CKEDITOR.scriptLoader.load(f,function(){for(var c=["beforeInit","init","afterInit"],f=0;f<c.length;f++)for(var p=0;p<d.length;p++){var i=d[p];f===0&&(e[p]&&i.lang&&i.langEntries)&&(a.lang[i.name]=i.langEntries[e[p]]);
if(i[c[f]])i[c[f]](a)}a.fireOnce("pluginsLoaded");b.keystrokes&&a.setKeystroke(a.config.keystrokes);for(p=0;p<a.config.blockedKeystrokes.length;p++)a.keystrokeHandler.blockedKeystrokes[a.config.blockedKeystrokes[p]]=1;a.status="loaded";a.fireOnce("loaded");CKEDITOR.fire("instanceLoaded",null,a)})})}function y(){var a=this.element;if(a&&this.elementMode!=CKEDITOR.ELEMENT_MODE_APPENDTO){var b=this.getData();this.config.htmlEncodeOutput&&(b=CKEDITOR.tools.htmlEncode(b));a.is("textarea")?a.setValue(b):
a.setHtml(b);return true}return false}a.prototype=CKEDITOR.editor.prototype;CKEDITOR.editor=a;var s=0,w={};CKEDITOR.tools.extend(CKEDITOR.editor.prototype,{addCommand:function(a,b){b.name=a.toLowerCase();var d=new CKEDITOR.command(this,b);this.mode&&c(this,d);return this.commands[a]=d},_attachToForm:function(){function a(d){b.updateElement();b._.required&&(!c.getValue()&&b.fire("required")===false)&&d.data.preventDefault()}var b=this,c=b.element,d=new CKEDITOR.dom.element(c.$.form);if(c.is("textarea")&&
d){d.on("submit",a);if(d.$.submit&&d.$.submit.call&&d.$.submit.apply)d.$.submit=CKEDITOR.tools.override(d.$.submit,function(b){return function(){a();b.apply?b.apply(this):b()}});b.on("destroy",function(){d.removeListener("submit",a)})}},destroy:function(a){this.fire("beforeDestroy");!a&&y.call(this);this.editable(null);this.filter.destroy();delete this.filter;delete this.activeFilter;this.status="destroyed";this.fire("destroy");this.removeAllListeners();CKEDITOR.remove(this);CKEDITOR.fire("instanceDestroyed",
null,this)},elementPath:function(a){if(!a){a=this.getSelection();if(!a)return null;a=a.getStartElement()}return a?new CKEDITOR.dom.elementPath(a,this.editable()):null},createRange:function(){var a=this.editable();return a?new CKEDITOR.dom.range(a):null},execCommand:function(a,b){var c=this.getCommand(a),d={name:a,commandData:b,command:c};if(c&&c.state!=CKEDITOR.TRISTATE_DISABLED&&this.fire("beforeCommandExec",d)!==false){d.returnValue=c.exec(d.commandData);if(!c.async&&this.fire("afterCommandExec",
d)!==false)return d.returnValue}return false},getCommand:function(a){return this.commands[a]},getData:function(a){!a&&this.fire("beforeGetData");var b=this._.data;if(typeof b!="string")b=(b=this.element)&&this.elementMode==CKEDITOR.ELEMENT_MODE_REPLACE?b.is("textarea")?b.getValue():b.getHtml():"";b={dataValue:b};!a&&this.fire("getData",b);return b.dataValue},getSnapshot:function(){var a=this.fire("getSnapshot");if(typeof a!="string"){var b=this.element;b&&this.elementMode==CKEDITOR.ELEMENT_MODE_REPLACE&&
(a=b.is("textarea")?b.getValue():b.getHtml())}return a},loadSnapshot:function(a){this.fire("loadSnapshot",a)},setData:function(a,b,c){var d=true,e=b;if(b&&typeof b=="object"){c=b.internal;e=b.callback;d=!b.noSnapshot}!c&&d&&this.fire("saveSnapshot");if(e||!c)this.once("dataReady",function(a){!c&&d&&this.fire("saveSnapshot");e&&e.call(a.editor)});a={dataValue:a};!c&&this.fire("setData",a);this._.data=a.dataValue;!c&&this.fire("afterSetData",a)},setReadOnly:function(a){a=a==null||a;if(this.readOnly!=
a){this.readOnly=a;this.keystrokeHandler.blockedKeystrokes[8]=+a;this.editable().setReadOnly(a);this.fire("readOnly")}},insertHtml:function(a,b){this.fire("insertHtml",{dataValue:a,mode:b})},insertText:function(a){this.fire("insertText",a)},insertElement:function(a){this.fire("insertElement",a)},focus:function(){this.fire("beforeFocus")},checkDirty:function(){return this.status=="ready"&&this._.previousValue!==this.getSnapshot()},resetDirty:function(){this._.previousValue=this.getSnapshot()},updateElement:function(){return y.call(this)},
setKeystroke:function(){for(var a=this.keystrokeHandler.keystrokes,b=CKEDITOR.tools.isArray(arguments[0])?arguments[0]:[[].slice.call(arguments,0)],c,d,e=b.length;e--;){c=b[e];d=0;if(CKEDITOR.tools.isArray(c)){d=c[1];c=c[0]}d?a[c]=d:delete a[c]}},addFeature:function(a){return this.filter.addFeature(a)},setActiveFilter:function(a){if(!a)a=this.filter;if(this.activeFilter!==a){this.activeFilter=a;this.fire("activeFilterChange");a===this.filter?this.setActiveEnterMode(null,null):this.setActiveEnterMode(a.getAllowedEnterMode(this.enterMode),
a.getAllowedEnterMode(this.shiftEnterMode,true))}},setActiveEnterMode:function(a,b){a=a?this.blockless?CKEDITOR.ENTER_BR:a:this.enterMode;b=b?this.blockless?CKEDITOR.ENTER_BR:b:this.shiftEnterMode;if(this.activeEnterMode!=a||this.activeShiftEnterMode!=b){this.activeEnterMode=a;this.activeShiftEnterMode=b;this.fire("activeEnterModeChange")}}})})();CKEDITOR.ELEMENT_MODE_NONE=0;CKEDITOR.ELEMENT_MODE_REPLACE=1;CKEDITOR.ELEMENT_MODE_APPENDTO=2;CKEDITOR.ELEMENT_MODE_INLINE=3;
CKEDITOR.htmlParser=function(){this._={htmlPartsRegex:/<(?:(?:\/([^>]+)>)|(?:!--([\S|\s]*?)--\>)|(?:([^\/\s>]+)((?:\s+[\w\-:.]+(?:\s*=\s*?(?:(?:"[^"]*")|(?:'[^']*')|[^\s"'\/>]+))?)*)[\S\s]*?(\/?)>))/g}};
(function(){var a=/([\w\-:.]+)(?:(?:\s*=\s*(?:(?:"([^"]*)")|(?:'([^']*)')|([^\s>]+)))|(?=\s|$))/g,f={checked:1,compact:1,declare:1,defer:1,disabled:1,ismap:1,multiple:1,nohref:1,noresize:1,noshade:1,nowrap:1,readonly:1,selected:1};CKEDITOR.htmlParser.prototype={onTagOpen:function(){},onTagClose:function(){},onText:function(){},onCDATA:function(){},onComment:function(){},parse:function(b){for(var c,e,d=0,h;c=this._.htmlPartsRegex.exec(b);){e=c.index;if(e>d){d=b.substring(d,e);if(h)h.push(d);else this.onText(d)}d=
this._.htmlPartsRegex.lastIndex;if(e=c[1]){e=e.toLowerCase();if(h&&CKEDITOR.dtd.$cdata[e]){this.onCDATA(h.join(""));h=null}if(!h){this.onTagClose(e);continue}}if(h)h.push(c[0]);else if(e=c[3]){e=e.toLowerCase();if(!/="/.test(e)){var k={},j,g=c[4];c=!!c[5];if(g)for(;j=a.exec(g);){var m=j[1].toLowerCase();j=j[2]||j[3]||j[4]||"";k[m]=!j&&f[m]?m:CKEDITOR.tools.htmlDecodeAttr(j)}this.onTagOpen(e,k,c);!h&&CKEDITOR.dtd.$cdata[e]&&(h=[])}}else if(e=c[2])this.onComment(e)}if(b.length>d)this.onText(b.substring(d,
b.length))}}})();
CKEDITOR.htmlParser.basicWriter=CKEDITOR.tools.createClass({$:function(){this._={output:[]}},proto:{openTag:function(a){this._.output.push("<",a)},openTagClose:function(a,f){f?this._.output.push(" />"):this._.output.push(">")},attribute:function(a,f){typeof f=="string"&&(f=CKEDITOR.tools.htmlEncodeAttr(f));this._.output.push(" ",a,'="',f,'"')},closeTag:function(a){this._.output.push("</",a,">")},text:function(a){this._.output.push(a)},comment:function(a){this._.output.push("<\!--",a,"--\>")},write:function(a){this._.output.push(a)},
reset:function(){this._.output=[];this._.indent=false},getHtml:function(a){var f=this._.output.join("");a&&this.reset();return f}}});"use strict";
(function(){CKEDITOR.htmlParser.node=function(){};CKEDITOR.htmlParser.node.prototype={remove:function(){var a=this.parent.children,f=CKEDITOR.tools.indexOf(a,this),b=this.previous,c=this.next;b&&(b.next=c);c&&(c.previous=b);a.splice(f,1);this.parent=null},replaceWith:function(a){var f=this.parent.children,b=CKEDITOR.tools.indexOf(f,this),c=a.previous=this.previous,e=a.next=this.next;c&&(c.next=a);e&&(e.previous=a);f[b]=a;a.parent=this.parent;this.parent=null},insertAfter:function(a){var f=a.parent.children,
b=CKEDITOR.tools.indexOf(f,a),c=a.next;f.splice(b+1,0,this);this.next=a.next;this.previous=a;a.next=this;c&&(c.previous=this);this.parent=a.parent},insertBefore:function(a){var f=a.parent.children,b=CKEDITOR.tools.indexOf(f,a);f.splice(b,0,this);this.next=a;(this.previous=a.previous)&&(a.previous.next=this);a.previous=this;this.parent=a.parent},getAscendant:function(a){var f=typeof a=="function"?a:typeof a=="string"?function(b){return b.name==a}:function(b){return b.name in a},b=this.parent;for(;b&&
b.type==CKEDITOR.NODE_ELEMENT;){if(f(b))return b;b=b.parent}return null},wrapWith:function(a){this.replaceWith(a);a.add(this);return a},getIndex:function(){return CKEDITOR.tools.indexOf(this.parent.children,this)},getFilterContext:function(a){return a||{}}}})();"use strict";CKEDITOR.htmlParser.comment=function(a){this.value=a;this._={isBlockLike:false}};
CKEDITOR.htmlParser.comment.prototype=CKEDITOR.tools.extend(new CKEDITOR.htmlParser.node,{type:CKEDITOR.NODE_COMMENT,filter:function(a,f){var b=this.value;if(!(b=a.onComment(f,b,this))){this.remove();return false}if(typeof b!="string"){this.replaceWith(b);return false}this.value=b;return true},writeHtml:function(a,f){f&&this.filter(f);a.comment(this.value)}});"use strict";
(function(){CKEDITOR.htmlParser.text=function(a){this.value=a;this._={isBlockLike:false}};CKEDITOR.htmlParser.text.prototype=CKEDITOR.tools.extend(new CKEDITOR.htmlParser.node,{type:CKEDITOR.NODE_TEXT,filter:function(a,f){if(!(this.value=a.onText(f,this.value,this))){this.remove();return false}},writeHtml:function(a,f){f&&this.filter(f);a.text(this.value)}})})();"use strict";
(function(){CKEDITOR.htmlParser.cdata=function(a){this.value=a};CKEDITOR.htmlParser.cdata.prototype=CKEDITOR.tools.extend(new CKEDITOR.htmlParser.node,{type:CKEDITOR.NODE_TEXT,filter:function(){},writeHtml:function(a){a.write(this.value)}})})();"use strict";CKEDITOR.htmlParser.fragment=function(){this.children=[];this.parent=null;this._={isBlockLike:true,hasInlineStarted:false}};
(function(){function a(a){return a.attributes["data-cke-survive"]?false:a.name=="a"&&a.attributes.href||CKEDITOR.dtd.$removeEmpty[a.name]}var f=CKEDITOR.tools.extend({table:1,ul:1,ol:1,dl:1},CKEDITOR.dtd.table,CKEDITOR.dtd.ul,CKEDITOR.dtd.ol,CKEDITOR.dtd.dl),b={ol:1,ul:1},c=CKEDITOR.tools.extend({},{html:1},CKEDITOR.dtd.html,CKEDITOR.dtd.body,CKEDITOR.dtd.head,{style:1,script:1}),e={ul:"li",ol:"li",dl:"dd",table:"tbody",tbody:"tr",thead:"tr",tfoot:"tr",tr:"td"};CKEDITOR.htmlParser.fragment.fromHtml=
function(d,h,k){function j(a){var b;if(i.length>0)for(var c=0;c<i.length;c++){var d=i[c],e=d.name,f=CKEDITOR.dtd[e],l=u.name&&CKEDITOR.dtd[u.name];if((!l||l[e])&&(!a||!f||f[a]||!CKEDITOR.dtd[a])){if(!b){g();b=1}d=d.clone();d.parent=u;u=d;i.splice(c,1);c--}else if(e==u.name){y(u,u.parent,1);c--}}}function g(){for(;A.length;)y(A.shift(),u)}function m(a){if(a._.isBlockLike&&a.name!="pre"&&a.name!="textarea"){var b=a.children.length,c=a.children[b-1],d;if(c&&c.type==CKEDITOR.NODE_TEXT)(d=CKEDITOR.tools.rtrim(c.value))?
c.value=d:a.children.length=b-1}}function y(b,c,d){var c=c||u||t,e=u;if(b.previous===void 0){if(s(c,b)){u=c;q.onTagOpen(k,{});b.returnPoint=c=u}m(b);(!a(b)||b.children.length)&&c.add(b);b.name=="pre"&&(l=false);b.name=="textarea"&&(o=false)}if(b.returnPoint){u=b.returnPoint;delete b.returnPoint}else u=d?c:e}function s(a,b){if((a==t||a.name=="body")&&k&&(!a.name||CKEDITOR.dtd[a.name][k])){var c,d;return(c=b.attributes&&(d=b.attributes["data-cke-real-element-type"])?d:b.name)&&c in CKEDITOR.dtd.$inline&&
!(c in CKEDITOR.dtd.head)&&!b.isOrphan||b.type==CKEDITOR.NODE_TEXT}}function w(a,b){return a in CKEDITOR.dtd.$listItem||a in CKEDITOR.dtd.$tableContent?a==b||a=="dt"&&b=="dd"||a=="dd"&&b=="dt":false}var q=new CKEDITOR.htmlParser,t=h instanceof CKEDITOR.htmlParser.element?h:typeof h=="string"?new CKEDITOR.htmlParser.element(h):new CKEDITOR.htmlParser.fragment,i=[],A=[],u=t,o=t.name=="textarea",l=t.name=="pre";q.onTagOpen=function(d,e,h,m){e=new CKEDITOR.htmlParser.element(d,e);if(e.isUnknown&&h)e.isEmpty=
true;e.isOptionalClose=m;if(a(e))i.push(e);else{if(d=="pre")l=true;else{if(d=="br"&&l){u.add(new CKEDITOR.htmlParser.text("\n"));return}d=="textarea"&&(o=true)}if(d=="br")A.push(e);else{for(;;){m=(h=u.name)?CKEDITOR.dtd[h]||(u._.isBlockLike?CKEDITOR.dtd.div:CKEDITOR.dtd.span):c;if(!e.isUnknown&&!u.isUnknown&&!m[d])if(u.isOptionalClose)q.onTagClose(h);else if(d in b&&h in b){h=u.children;(h=h[h.length-1])&&h.name=="li"||y(h=new CKEDITOR.htmlParser.element("li"),u);!e.returnPoint&&(e.returnPoint=u);
u=h}else if(d in CKEDITOR.dtd.$listItem&&!w(d,h))q.onTagOpen(d=="li"?"ul":"dl",{},0,1);else if(h in f&&!w(d,h)){!e.returnPoint&&(e.returnPoint=u);u=u.parent}else{h in CKEDITOR.dtd.$inline&&i.unshift(u);if(u.parent)y(u,u.parent,1);else{e.isOrphan=1;break}}else break}j(d);g();e.parent=u;e.isEmpty?y(e):u=e}}};q.onTagClose=function(a){for(var b=i.length-1;b>=0;b--)if(a==i[b].name){i.splice(b,1);return}for(var c=[],d=[],e=u;e!=t&&e.name!=a;){e._.isBlockLike||d.unshift(e);c.push(e);e=e.returnPoint||e.parent}if(e!=
t){for(b=0;b<c.length;b++){var f=c[b];y(f,f.parent)}u=e;e._.isBlockLike&&g();y(e,e.parent);if(e==u)u=u.parent;i=i.concat(d)}a=="body"&&(k=false)};q.onText=function(a){if((!u._.hasInlineStarted||A.length)&&!l&&!o){a=CKEDITOR.tools.ltrim(a);if(a.length===0)return}var b=u.name,d=b?CKEDITOR.dtd[b]||(u._.isBlockLike?CKEDITOR.dtd.div:CKEDITOR.dtd.span):c;if(!o&&!d["#"]&&b in f){q.onTagOpen(e[b]||"");q.onText(a)}else{g();j();!l&&!o&&(a=a.replace(/[\t\r\n ]{2,}|[\t\r\n]/g," "));a=new CKEDITOR.htmlParser.text(a);
if(s(u,a))this.onTagOpen(k,{},0,1);u.add(a)}};q.onCDATA=function(a){u.add(new CKEDITOR.htmlParser.cdata(a))};q.onComment=function(a){g();j();u.add(new CKEDITOR.htmlParser.comment(a))};q.parse(d);for(g();u!=t;)y(u,u.parent,1);m(t);return t};CKEDITOR.htmlParser.fragment.prototype={type:CKEDITOR.NODE_DOCUMENT_FRAGMENT,add:function(a,b){isNaN(b)&&(b=this.children.length);var c=b>0?this.children[b-1]:null;if(c){if(a._.isBlockLike&&c.type==CKEDITOR.NODE_TEXT){c.value=CKEDITOR.tools.rtrim(c.value);if(c.value.length===
0){this.children.pop();this.add(a);return}}c.next=a}a.previous=c;a.parent=this;this.children.splice(b,0,a);if(!this._.hasInlineStarted)this._.hasInlineStarted=a.type==CKEDITOR.NODE_TEXT||a.type==CKEDITOR.NODE_ELEMENT&&!a._.isBlockLike},filter:function(a,b){b=this.getFilterContext(b);a.onRoot(b,this);this.filterChildren(a,false,b)},filterChildren:function(a,b,c){if(this.childrenFilteredBy!=a.id){c=this.getFilterContext(c);if(b&&!this.parent)a.onRoot(c,this);this.childrenFilteredBy=a.id;for(b=0;b<this.children.length;b++)this.children[b].filter(a,
c)===false&&b--}},writeHtml:function(a,b){b&&this.filter(b);this.writeChildrenHtml(a)},writeChildrenHtml:function(a,b,c){var e=this.getFilterContext();if(c&&!this.parent&&b)b.onRoot(e,this);b&&this.filterChildren(b,false,e);b=0;c=this.children;for(e=c.length;b<e;b++)c[b].writeHtml(a)},forEach:function(a,b,c){if(!c&&(!b||this.type==b))var e=a(this);if(e!==false)for(var c=this.children,f=0;f<c.length;f++){e=c[f];e.type==CKEDITOR.NODE_ELEMENT?e.forEach(a,b):(!b||e.type==b)&&a(e)}},getFilterContext:function(a){return a||
{}}}})();"use strict";
(function(){function a(){this.rules=[]}function f(b,c,e,d){var f,k;for(f in c){(k=b[f])||(k=b[f]=new a);k.add(c[f],e,d)}}CKEDITOR.htmlParser.filter=CKEDITOR.tools.createClass({$:function(b){this.id=CKEDITOR.tools.getNextNumber();this.elementNameRules=new a;this.attributeNameRules=new a;this.elementsRules={};this.attributesRules={};this.textRules=new a;this.commentRules=new a;this.rootRules=new a;b&&this.addRules(b,10)},proto:{addRules:function(a,c){var e;if(typeof c=="number")e=c;else if(c&&"priority"in
c)e=c.priority;typeof e!="number"&&(e=10);typeof c!="object"&&(c={});a.elementNames&&this.elementNameRules.addMany(a.elementNames,e,c);a.attributeNames&&this.attributeNameRules.addMany(a.attributeNames,e,c);a.elements&&f(this.elementsRules,a.elements,e,c);a.attributes&&f(this.attributesRules,a.attributes,e,c);a.text&&this.textRules.add(a.text,e,c);a.comment&&this.commentRules.add(a.comment,e,c);a.root&&this.rootRules.add(a.root,e,c)},applyTo:function(a){a.filter(this)},onElementName:function(a,c){return this.elementNameRules.execOnName(a,
c)},onAttributeName:function(a,c){return this.attributeNameRules.execOnName(a,c)},onText:function(a,c,e){return this.textRules.exec(a,c,e)},onComment:function(a,c,e){return this.commentRules.exec(a,c,e)},onRoot:function(a,c){return this.rootRules.exec(a,c)},onElement:function(a,c){for(var e=[this.elementsRules["^"],this.elementsRules[c.name],this.elementsRules.$],d,f=0;f<3;f++)if(d=e[f]){d=d.exec(a,c,this);if(d===false)return null;if(d&&d!=c)return this.onNode(a,d);if(c.parent&&!c.name)break}return c},
onNode:function(a,c){var e=c.type;return e==CKEDITOR.NODE_ELEMENT?this.onElement(a,c):e==CKEDITOR.NODE_TEXT?new CKEDITOR.htmlParser.text(this.onText(a,c.value)):e==CKEDITOR.NODE_COMMENT?new CKEDITOR.htmlParser.comment(this.onComment(a,c.value)):null},onAttribute:function(a,c,e,d){return(e=this.attributesRules[e])?e.exec(a,d,c,this):d}}});CKEDITOR.htmlParser.filterRulesGroup=a;a.prototype={add:function(a,c,e){this.rules.splice(this.findIndex(c),0,{value:a,priority:c,options:e})},addMany:function(a,
c,e){for(var d=[this.findIndex(c),0],f=0,k=a.length;f<k;f++)d.push({value:a[f],priority:c,options:e});this.rules.splice.apply(this.rules,d)},findIndex:function(a){for(var c=this.rules,e=c.length-1;e>=0&&a<c[e].priority;)e--;return e+1},exec:function(a,c){var e=c instanceof CKEDITOR.htmlParser.node||c instanceof CKEDITOR.htmlParser.fragment,d=Array.prototype.slice.call(arguments,1),f=this.rules,k=f.length,j,g,m,y;for(y=0;y<k;y++){if(e){j=c.type;g=c.name}m=f[y];if(!(a.nonEditable&&!m.options.applyToAll||
a.nestedEditable&&m.options.excludeNestedEditable)){m=m.value.apply(null,d);if(m===false||e&&m&&(m.name!=g||m.type!=j))return m;m!=null&&(d[0]=c=m)}}return c},execOnName:function(a,c){for(var e=0,d=this.rules,f=d.length,k;c&&e<f;e++){k=d[e];!(a.nonEditable&&!k.options.applyToAll||a.nestedEditable&&k.options.excludeNestedEditable)&&(c=c.replace(k.value[0],k.value[1]))}return c}}})();
(function(){function a(a,f){function p(a){return a||CKEDITOR.env.needsNbspFiller?new CKEDITOR.htmlParser.text(" "):new CKEDITOR.htmlParser.element("br",{"data-cke-bogus":1})}function r(a,e){return function(f){if(f.type!=CKEDITOR.NODE_DOCUMENT_FRAGMENT){var i=[],l=b(f),x,r;if(l)for(v(l,1)&&i.push(l);l;){if(d(l)&&(x=c(l))&&v(x))if((r=c(x))&&!d(r))i.push(x);else{p(g).insertAfter(x);x.remove()}l=l.previous}for(l=0;l<i.length;l++)i[l].remove();if(i=!a||(typeof e=="function"?e(f):e)!==false)if(!g&&!CKEDITOR.env.needsBrFiller&&
f.type==CKEDITOR.NODE_DOCUMENT_FRAGMENT)i=false;else if(!g&&!CKEDITOR.env.needsBrFiller&&(document.documentMode>7||f.name in CKEDITOR.dtd.tr||f.name in CKEDITOR.dtd.$listItem))i=false;else{i=b(f);i=!i||f.name=="form"&&i.name=="input"}i&&f.add(p(a))}}}function v(a,b){if((!g||CKEDITOR.env.needsBrFiller)&&a.type==CKEDITOR.NODE_ELEMENT&&a.name=="br"&&!a.attributes["data-cke-eol"])return true;var c;if(a.type==CKEDITOR.NODE_TEXT&&(c=a.value.match(i))){if(c.index){(new CKEDITOR.htmlParser.text(a.value.substring(0,
c.index))).insertBefore(a);a.value=c[0]}if(!CKEDITOR.env.needsBrFiller&&g&&(!b||a.parent.name in z))return true;if(!g)if((c=a.previous)&&c.name=="br"||!c||d(c))return true}return false}var n={elements:{}},g=f=="html",z=CKEDITOR.tools.extend({},l),o;for(o in z)"#"in u[o]||delete z[o];for(o in z)n.elements[o]=r(g,a.config.fillEmptyBlocks);n.root=r(g,false);n.elements.br=function(a){return function(b){if(b.parent.type!=CKEDITOR.NODE_DOCUMENT_FRAGMENT){var f=b.attributes;if("data-cke-bogus"in f||"data-cke-eol"in
f)delete f["data-cke-bogus"];else{for(f=b.next;f&&e(f);)f=f.next;var i=c(b);!f&&d(b.parent)?h(b.parent,p(a)):d(f)&&(i&&!d(i))&&p(a).insertBefore(f)}}}}(g);return n}function f(a,b){return a!=CKEDITOR.ENTER_BR&&b!==false?a==CKEDITOR.ENTER_DIV?"div":"p":false}function b(a){for(a=a.children[a.children.length-1];a&&e(a);)a=a.previous;return a}function c(a){for(a=a.previous;a&&e(a);)a=a.previous;return a}function e(a){return a.type==CKEDITOR.NODE_TEXT&&!CKEDITOR.tools.trim(a.value)||a.type==CKEDITOR.NODE_ELEMENT&&
a.attributes["data-cke-bookmark"]}function d(a){return a&&(a.type==CKEDITOR.NODE_ELEMENT&&a.name in l||a.type==CKEDITOR.NODE_DOCUMENT_FRAGMENT)}function h(a,b){var c=a.children[a.children.length-1];a.children.push(b);b.parent=a;if(c){c.next=b;b.previous=c}}function k(a){a=a.attributes;a.contenteditable!="false"&&(a["data-cke-editable"]=a.contenteditable?"true":1);a.contenteditable="false"}function j(a){a=a.attributes;switch(a["data-cke-editable"]){case "true":a.contenteditable="true";break;case "1":delete a.contenteditable}}
function g(a){return a.replace(C,function(a,b,c){return"<"+b+c.replace(L,function(a,b){return F.test(b)&&c.indexOf("data-cke-saved-"+b)==-1?" data-cke-saved-"+a+" data-cke-"+CKEDITOR.rnd+"-"+a:a})+">"})}function m(a,b){return a.replace(b,function(a,b,c){a.indexOf("<textarea")===0&&(a=b+w(c).replace(/</g,"&lt;").replace(/>/g,"&gt;")+"</textarea>");return"<cke:encoded>"+encodeURIComponent(a)+"</cke:encoded>"})}function y(a){return a.replace(v,function(a,b){return decodeURIComponent(b)})}function s(a){return a.replace(/<\!--(?!{cke_protected})[\s\S]+?--\>/g,
function(a){return"<\!--"+A+"{C}"+encodeURIComponent(a).replace(/--/g,"%2D%2D")+"--\>"})}function w(a){return a.replace(/<\!--\{cke_protected\}\{C\}([\s\S]+?)--\>/g,function(a,b){return decodeURIComponent(b)})}function q(a,b){var c=b._.dataStore;return a.replace(/<\!--\{cke_protected\}([\s\S]+?)--\>/g,function(a,b){return decodeURIComponent(b)}).replace(/\{cke_protected_(\d+)\}/g,function(a,b){return c&&c[b]||""})}function t(a,b){for(var c=[],d=b.config.protectedSource,e=b._.dataStore||(b._.dataStore=
{id:1}),f=/<\!--\{cke_temp(comment)?\}(\d*?)--\>/g,d=[/<script[\s\S]*?<\/script>/gi,/<noscript[\s\S]*?<\/noscript>/gi,/<meta[\s\S]*?\/?>/gi].concat(d),a=a.replace(/<\!--[\s\S]*?--\>/g,function(a){return"<\!--{cke_tempcomment}"+(c.push(a)-1)+"--\>"}),i=0;i<d.length;i++)a=a.replace(d[i],function(a){a=a.replace(f,function(a,b,d){return c[d]});return/cke_temp(comment)?/.test(a)?a:"<\!--{cke_temp}"+(c.push(a)-1)+"--\>"});a=a.replace(f,function(a,b,d){return"<\!--"+A+(b?"{C}":"")+encodeURIComponent(c[d]).replace(/--/g,
"%2D%2D")+"--\>"});a=a.replace(/<\w+(?:\s+(?:(?:[^\s=>]+\s*=\s*(?:[^'"\s>]+|'[^']*'|"[^"]*"))|[^\s=>]+))+\s*>/g,function(a){return a.replace(/<\!--\{cke_protected\}([^>]*)--\>/g,function(a,b){e[e.id]=decodeURIComponent(b);return"{cke_protected_"+e.id++ +"}"})});return a=a.replace(/<(title|iframe|textarea)([^>]*)>([\s\S]*?)<\/\1>/g,function(a,c,d,e){return"<"+c+d+">"+q(w(e),b)+"</"+c+">"})}CKEDITOR.htmlDataProcessor=function(b){var c,d,e=this;this.editor=b;this.dataFilter=c=new CKEDITOR.htmlParser.filter;
this.htmlFilter=d=new CKEDITOR.htmlParser.filter;this.writer=new CKEDITOR.htmlParser.basicWriter;c.addRules(p);c.addRules(r,{applyToAll:true});c.addRules(a(b,"data"),{applyToAll:true});d.addRules(n);d.addRules(P,{applyToAll:true});d.addRules(a(b,"html"),{applyToAll:true});b.on("toHtml",function(a){var a=a.data,c=a.dataValue,d,c=t(c,b),c=m(c,I),c=g(c),c=m(c,K),c=c.replace(G,"$1cke:$2"),c=c.replace(B,"<cke:$1$2></cke:$1>"),c=c.replace(/(<pre\b[^>]*>)(\r\n|\n)/g,"$1$2$2"),c=c.replace(/([^a-z0-9<\-])(on\w{3,})(?!>)/gi,
"$1data-cke-"+CKEDITOR.rnd+"-$2");d=a.context||b.editable().getName();var e;if(CKEDITOR.env.ie&&CKEDITOR.env.version<9&&d=="pre"){d="div";c="<pre>"+c+"</pre>";e=1}d=b.document.createElement(d);d.setHtml("a"+c);c=d.getHtml().substr(1);c=c.replace(RegExp("data-cke-"+CKEDITOR.rnd+"-","ig"),"");e&&(c=c.replace(/^<pre>|<\/pre>$/gi,""));c=c.replace(z,"$1$2");c=y(c);c=w(c);d=a.fixForBody===false?false:f(a.enterMode,b.config.autoParagraph);c=CKEDITOR.htmlParser.fragment.fromHtml(c,a.context,d);if(d){e=c;
if(!e.children.length&&CKEDITOR.dtd[e.name][d]){d=new CKEDITOR.htmlParser.element(d);e.add(d)}}a.dataValue=c},null,null,5);b.on("toHtml",function(a){a.data.filter.applyTo(a.data.dataValue,true,a.data.dontFilter,a.data.enterMode)&&b.fire("dataFiltered")},null,null,6);b.on("toHtml",function(a){a.data.dataValue.filterChildren(e.dataFilter,true)},null,null,10);b.on("toHtml",function(a){var a=a.data,b=a.dataValue,c=new CKEDITOR.htmlParser.basicWriter;b.writeChildrenHtml(c);b=c.getHtml(true);a.dataValue=
s(b)},null,null,15);b.on("toDataFormat",function(a){var c=a.data.dataValue;a.data.enterMode!=CKEDITOR.ENTER_BR&&(c=c.replace(/^<br *\/?>/i,""));a.data.dataValue=CKEDITOR.htmlParser.fragment.fromHtml(c,a.data.context,f(a.data.enterMode,b.config.autoParagraph))},null,null,5);b.on("toDataFormat",function(a){a.data.dataValue.filterChildren(e.htmlFilter,true)},null,null,10);b.on("toDataFormat",function(a){a.data.filter.applyTo(a.data.dataValue,false,true)},null,null,11);b.on("toDataFormat",function(a){var c=
a.data.dataValue,d=e.writer;d.reset();c.writeChildrenHtml(d);c=d.getHtml(true);c=w(c);c=q(c,b);a.data.dataValue=c},null,null,15)};CKEDITOR.htmlDataProcessor.prototype={toHtml:function(a,b,c,d){var e=this.editor,f,i,l;if(b&&typeof b=="object"){f=b.context;c=b.fixForBody;d=b.dontFilter;i=b.filter;l=b.enterMode}else f=b;!f&&f!==null&&(f=e.editable().getName());return e.fire("toHtml",{dataValue:a,context:f,fixForBody:c,dontFilter:d,filter:i||e.filter,enterMode:l||e.enterMode}).dataValue},toDataFormat:function(a,
b){var c,d,e;if(b){c=b.context;d=b.filter;e=b.enterMode}!c&&c!==null&&(c=this.editor.editable().getName());return this.editor.fire("toDataFormat",{dataValue:a,filter:d||this.editor.filter,context:c,enterMode:e||this.editor.enterMode}).dataValue}};var i=/(?:&nbsp;|\xa0)$/,A="{cke_protected}",u=CKEDITOR.dtd,o=["caption","colgroup","col","thead","tfoot","tbody"],l=CKEDITOR.tools.extend({},u.$blockLimit,u.$block),p={elements:{input:k,textarea:k}},r={attributeNames:[[/^on/,"data-cke-pa-on"],[/^data-cke-expando$/,
""]]},n={elements:{embed:function(a){var b=a.parent;if(b&&b.name=="object"){var c=b.attributes.width,b=b.attributes.height;if(c)a.attributes.width=c;if(b)a.attributes.height=b}},a:function(a){if(!a.children.length&&!a.attributes.name&&!a.attributes["data-cke-saved-name"])return false}}},P={elementNames:[[/^cke:/,""],[/^\?xml:namespace$/,""]],attributeNames:[[/^data-cke-(saved|pa)-/,""],[/^data-cke-.*/,""],["hidefocus",""]],elements:{$:function(a){var b=a.attributes;if(b){if(b["data-cke-temp"])return false;
for(var c=["name","href","src"],d,e=0;e<c.length;e++){d="data-cke-saved-"+c[e];d in b&&delete b[c[e]]}}return a},table:function(a){a.children.slice(0).sort(function(a,b){var c,d;if(a.type==CKEDITOR.NODE_ELEMENT&&b.type==a.type){c=CKEDITOR.tools.indexOf(o,a.name);d=CKEDITOR.tools.indexOf(o,b.name)}if(!(c>-1&&d>-1&&c!=d)){c=a.parent?a.getIndex():-1;d=b.parent?b.getIndex():-1}return c>d?1:-1})},param:function(a){a.children=[];a.isEmpty=true;return a},span:function(a){a.attributes["class"]=="Apple-style-span"&&
delete a.name},html:function(a){delete a.attributes.contenteditable;delete a.attributes["class"]},body:function(a){delete a.attributes.spellcheck;delete a.attributes.contenteditable},style:function(a){var b=a.children[0];if(b&&b.value)b.value=CKEDITOR.tools.trim(b.value);if(!a.attributes.type)a.attributes.type="text/css"},title:function(a){var b=a.children[0];!b&&h(a,b=new CKEDITOR.htmlParser.text);b.value=a.attributes["data-cke-title"]||""},input:j,textarea:j},attributes:{"class":function(a){return CKEDITOR.tools.ltrim(a.replace(/(?:^|\s+)cke_[^\s]*/g,
""))||false}}};if(CKEDITOR.env.ie)P.attributes.style=function(a){return a.replace(/(^|;)([^\:]+)/g,function(a){return a.toLowerCase()})};var C=/<(a|area|img|input|source)\b([^>]*)>/gi,L=/([\w-]+)\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|(?:[^ "'>]+))/gi,F=/^(href|src|name)$/i,K=/(?:<style(?=[ >])[^>]*>[\s\S]*?<\/style>)|(?:<(:?link|meta|base)[^>]*>)/gi,I=/(<textarea(?=[ >])[^>]*>)([\s\S]*?)(?:<\/textarea>)/gi,v=/<cke:encoded>([^<]*)<\/cke:encoded>/gi,G=/(<\/?)((?:object|embed|param|html|body|head|title)[^>]*>)/gi,
z=/(<\/?)cke:((?:html|body|head|title)[^>]*>)/gi,B=/<cke:(param|embed)([^>]*?)\/?>(?!\s*<\/cke:\1)/gi})();"use strict";
CKEDITOR.htmlParser.element=function(a,f){this.name=a;this.attributes=f||{};this.children=[];var b=a||"",c=b.match(/^cke:(.*)/);c&&(b=c[1]);b=!(!CKEDITOR.dtd.$nonBodyContent[b]&&!CKEDITOR.dtd.$block[b]&&!CKEDITOR.dtd.$listItem[b]&&!CKEDITOR.dtd.$tableContent[b]&&!(CKEDITOR.dtd.$nonEditable[b]||b=="br"));this.isEmpty=!!CKEDITOR.dtd.$empty[a];this.isUnknown=!CKEDITOR.dtd[a];this._={isBlockLike:b,hasInlineStarted:this.isEmpty||!b}};
CKEDITOR.htmlParser.cssStyle=function(a){var f={};((a instanceof CKEDITOR.htmlParser.element?a.attributes.style:a)||"").replace(/&quot;/g,'"').replace(/\s*([^ :;]+)\s*:\s*([^;]+)\s*(?=;|$)/g,function(a,c,e){c=="font-family"&&(e=e.replace(/["']/g,""));f[c.toLowerCase()]=e});return{rules:f,populate:function(a){var c=this.toString();if(c)a instanceof CKEDITOR.dom.element?a.setAttribute("style",c):a instanceof CKEDITOR.htmlParser.element?a.attributes.style=c:a.style=c},toString:function(){var a=[],c;
for(c in f)f[c]&&a.push(c,":",f[c],";");return a.join("")}}};
(function(){function a(a){return function(b){return b.type==CKEDITOR.NODE_ELEMENT&&(typeof a=="string"?b.name==a:b.name in a)}}var f=function(a,b){a=a[0];b=b[0];return a<b?-1:a>b?1:0},b=CKEDITOR.htmlParser.fragment.prototype;CKEDITOR.htmlParser.element.prototype=CKEDITOR.tools.extend(new CKEDITOR.htmlParser.node,{type:CKEDITOR.NODE_ELEMENT,add:b.add,clone:function(){return new CKEDITOR.htmlParser.element(this.name,this.attributes)},filter:function(a,b){var d=this,f,k,b=d.getFilterContext(b);if(b.off)return true;
if(!d.parent)a.onRoot(b,d);for(;;){f=d.name;if(!(k=a.onElementName(b,f))){this.remove();return false}d.name=k;if(!(d=a.onElement(b,d))){this.remove();return false}if(d!==this){this.replaceWith(d);return false}if(d.name==f)break;if(d.type!=CKEDITOR.NODE_ELEMENT){this.replaceWith(d);return false}if(!d.name){this.replaceWithChildren();return false}}f=d.attributes;var j,g;for(j in f){g=j;for(k=f[j];;)if(g=a.onAttributeName(b,j))if(g!=j){delete f[j];j=g}else break;else{delete f[j];break}g&&((k=a.onAttribute(b,
d,g,k))===false?delete f[g]:f[g]=k)}d.isEmpty||this.filterChildren(a,false,b);return true},filterChildren:b.filterChildren,writeHtml:function(a,b){b&&this.filter(b);var d=this.name,h=[],k=this.attributes,j,g;a.openTag(d,k);for(j in k)h.push([j,k[j]]);a.sortAttributes&&h.sort(f);j=0;for(g=h.length;j<g;j++){k=h[j];a.attribute(k[0],k[1])}a.openTagClose(d,this.isEmpty);this.writeChildrenHtml(a);this.isEmpty||a.closeTag(d)},writeChildrenHtml:b.writeChildrenHtml,replaceWithChildren:function(){for(var a=
this.children,b=a.length;b;)a[--b].insertAfter(this);this.remove()},forEach:b.forEach,getFirst:function(b){if(!b)return this.children.length?this.children[0]:null;typeof b!="function"&&(b=a(b));for(var e=0,d=this.children.length;e<d;++e)if(b(this.children[e]))return this.children[e];return null},getHtml:function(){var a=new CKEDITOR.htmlParser.basicWriter;this.writeChildrenHtml(a);return a.getHtml()},setHtml:function(a){for(var a=this.children=CKEDITOR.htmlParser.fragment.fromHtml(a).children,b=0,
d=a.length;b<d;++b)a[b].parent=this},getOuterHtml:function(){var a=new CKEDITOR.htmlParser.basicWriter;this.writeHtml(a);return a.getHtml()},split:function(a){for(var b=this.children.splice(a,this.children.length-a),d=this.clone(),f=0;f<b.length;++f)b[f].parent=d;d.children=b;if(b[0])b[0].previous=null;if(a>0)this.children[a-1].next=null;this.parent.add(d,this.getIndex()+1);return d},addClass:function(a){if(!this.hasClass(a)){var b=this.attributes["class"]||"";this.attributes["class"]=b+(b?" ":"")+
a}},removeClass:function(a){var b=this.attributes["class"];if(b)(b=CKEDITOR.tools.trim(b.replace(RegExp("(?:\\s+|^)"+a+"(?:\\s+|$)")," ")))?this.attributes["class"]=b:delete this.attributes["class"]},hasClass:function(a){var b=this.attributes["class"];return!b?false:RegExp("(?:^|\\s)"+a+"(?=\\s|$)").test(b)},getFilterContext:function(a){var b=[];a||(a={off:false,nonEditable:false,nestedEditable:false});!a.off&&this.attributes["data-cke-processor"]=="off"&&b.push("off",true);!a.nonEditable&&this.attributes.contenteditable==
"false"?b.push("nonEditable",true):a.nonEditable&&(!a.nestedEditable&&this.attributes.contenteditable=="true")&&b.push("nestedEditable",true);if(b.length)for(var a=CKEDITOR.tools.copy(a),d=0;d<b.length;d=d+2)a[b[d]]=b[d+1];return a}},true)})();
(function(){var a={},f=/{([^}]+)}/g,b=/([\\'])/g,c=/\n/g,e=/\r/g;CKEDITOR.template=function(d){if(a[d])this.output=a[d];else{var h=d.replace(b,"\\$1").replace(c,"\\n").replace(e,"\\r").replace(f,function(a,b){return"',data['"+b+"']==undefined?'{"+b+"}':data['"+b+"'],'"});this.output=a[d]=Function("data","buffer","return buffer?buffer.push('"+h+"'):['"+h+"'].join('');")}}})();delete CKEDITOR.loadFullCore;CKEDITOR.instances={};CKEDITOR.document=new CKEDITOR.dom.document(document);
CKEDITOR.add=function(a){CKEDITOR.instances[a.name]=a;a.on("focus",function(){if(CKEDITOR.currentInstance!=a){CKEDITOR.currentInstance=a;CKEDITOR.fire("currentInstance")}});a.on("blur",function(){if(CKEDITOR.currentInstance==a){CKEDITOR.currentInstance=null;CKEDITOR.fire("currentInstance")}});CKEDITOR.fire("instance",null,a)};CKEDITOR.remove=function(a){delete CKEDITOR.instances[a.name]};
(function(){var a={};CKEDITOR.addTemplate=function(f,b){var c=a[f];if(c)return c;c={name:f,source:b};CKEDITOR.fire("template",c);return a[f]=new CKEDITOR.template(c.source)};CKEDITOR.getTemplate=function(f){return a[f]}})();(function(){var a=[];CKEDITOR.addCss=function(f){a.push(f)};CKEDITOR.getCss=function(){return a.join("\n")}})();CKEDITOR.on("instanceDestroyed",function(){CKEDITOR.tools.isEmpty(this.instances)&&CKEDITOR.fire("reset")});CKEDITOR.TRISTATE_ON=1;CKEDITOR.TRISTATE_OFF=2;
CKEDITOR.TRISTATE_DISABLED=0;
(function(){CKEDITOR.inline=function(a,f){if(!CKEDITOR.env.isCompatible)return null;a=CKEDITOR.dom.element.get(a);if(a.getEditor())throw'The editor instance "'+a.getEditor().name+'" is already attached to the provided element.';var b=new CKEDITOR.editor(f,a,CKEDITOR.ELEMENT_MODE_INLINE),c=a.is("textarea")?a:null;if(c){b.setData(c.getValue(),null,true);a=CKEDITOR.dom.element.createFromHtml('<div contenteditable="'+!!b.readOnly+'" class="cke_textarea_inline">'+c.getValue()+"</div>",CKEDITOR.document);
a.insertAfter(c);c.hide();c.$.form&&b._attachToForm()}else b.setData(a.getHtml(),null,true);b.on("loaded",function(){b.fire("uiReady");b.editable(a);b.container=a;b.setData(b.getData(1));b.resetDirty();b.fire("contentDom");b.mode="wysiwyg";b.fire("mode");b.status="ready";b.fireOnce("instanceReady");CKEDITOR.fire("instanceReady",null,b)},null,null,1E4);b.on("destroy",function(){if(c){b.container.clearCustomData();b.container.remove();c.show()}b.element.clearCustomData();delete b.element});return b};
CKEDITOR.inlineAll=function(){var a,f,b;for(b in CKEDITOR.dtd.$editable)for(var c=CKEDITOR.document.getElementsByTag(b),e=0,d=c.count();e<d;e++){a=c.getItem(e);if(a.getAttribute("contenteditable")=="true"){f={element:a,config:{}};CKEDITOR.fire("inline",f)!==false&&CKEDITOR.inline(a,f.config)}}};CKEDITOR.domReady(function(){!CKEDITOR.disableAutoInline&&CKEDITOR.inlineAll()})})();CKEDITOR.replaceClass="ckeditor";
(function(){function a(a,e,d,h){if(!CKEDITOR.env.isCompatible)return null;a=CKEDITOR.dom.element.get(a);if(a.getEditor())throw'The editor instance "'+a.getEditor().name+'" is already attached to the provided element.';var k=new CKEDITOR.editor(e,a,h);if(h==CKEDITOR.ELEMENT_MODE_REPLACE){a.setStyle("visibility","hidden");k._.required=a.hasAttribute("required");a.removeAttribute("required")}d&&k.setData(d,null,true);k.on("loaded",function(){b(k);h==CKEDITOR.ELEMENT_MODE_REPLACE&&(k.config.autoUpdateElement&&
a.$.form)&&k._attachToForm();k.setMode(k.config.startupMode,function(){k.resetDirty();k.status="ready";k.fireOnce("instanceReady");CKEDITOR.fire("instanceReady",null,k)})});k.on("destroy",f);return k}function f(){var a=this.container,b=this.element;if(a){a.clearCustomData();a.remove()}if(b){b.clearCustomData();if(this.elementMode==CKEDITOR.ELEMENT_MODE_REPLACE){b.show();this._.required&&b.setAttribute("required","required")}delete this.element}}function b(a){var b=a.name,d=a.element,f=a.elementMode,
k=a.fire("uiSpace",{space:"top",html:""}).html,j=a.fire("uiSpace",{space:"bottom",html:""}).html,g=new CKEDITOR.template('<{outerEl} id="cke_{name}" class="{id} cke cke_reset cke_chrome cke_editor_{name} cke_{langDir} '+CKEDITOR.env.cssClass+'"  dir="{langDir}" lang="{langCode}" role="application"'+(a.title?' aria-labelledby="cke_{name}_arialbl"':"")+">"+(a.title?'<span id="cke_{name}_arialbl" class="cke_voice_label">{voiceLabel}</span>':"")+'<{outerEl} class="cke_inner cke_reset" role="presentation">{topHtml}<{outerEl} id="{contentId}" class="cke_contents cke_reset" role="presentation"></{outerEl}>{bottomHtml}</{outerEl}></{outerEl}>'),
b=CKEDITOR.dom.element.createFromHtml(g.output({id:a.id,name:b,langDir:a.lang.dir,langCode:a.langCode,voiceLabel:a.title,topHtml:k?'<span id="'+a.ui.spaceId("top")+'" class="cke_top cke_reset_all" role="presentation" style="height:auto">'+k+"</span>":"",contentId:a.ui.spaceId("contents"),bottomHtml:j?'<span id="'+a.ui.spaceId("bottom")+'" class="cke_bottom cke_reset_all" role="presentation">'+j+"</span>":"",outerEl:CKEDITOR.env.ie?"span":"div"}));if(f==CKEDITOR.ELEMENT_MODE_REPLACE){d.hide();b.insertAfter(d)}else d.append(b);
a.container=b;k&&a.ui.space("top").unselectable();j&&a.ui.space("bottom").unselectable();d=a.config.width;f=a.config.height;d&&b.setStyle("width",CKEDITOR.tools.cssLength(d));f&&a.ui.space("contents").setStyle("height",CKEDITOR.tools.cssLength(f));b.disableContextMenu();CKEDITOR.env.webkit&&b.on("focus",function(){a.focus()});a.fireOnce("uiReady")}CKEDITOR.replace=function(b,e){return a(b,e,null,CKEDITOR.ELEMENT_MODE_REPLACE)};CKEDITOR.appendTo=function(b,e,d){return a(b,e,d,CKEDITOR.ELEMENT_MODE_APPENDTO)};
CKEDITOR.replaceAll=function(){for(var a=document.getElementsByTagName("textarea"),b=0;b<a.length;b++){var d=null,f=a[b];if(f.name||f.id){if(typeof arguments[0]=="string"){if(!RegExp("(?:^|\\s)"+arguments[0]+"(?:$|\\s)").test(f.className))continue}else if(typeof arguments[0]=="function"){d={};if(arguments[0](f,d)===false)continue}this.replace(f,d)}}};CKEDITOR.editor.prototype.addMode=function(a,b){(this._.modes||(this._.modes={}))[a]=b};CKEDITOR.editor.prototype.setMode=function(a,b){var d=this,f=
this._.modes;if(!(a==d.mode||!f||!f[a])){d.fire("beforeSetMode",a);if(d.mode){var k=d.checkDirty(),f=d._.previousModeData,j,g=0;d.fire("beforeModeUnload");d.editable(0);d._.previousMode=d.mode;d._.previousModeData=j=d.getData(1);if(d.mode=="source"&&f==j){d.fire("lockSnapshot",{forceUpdate:true});g=1}d.ui.space("contents").setHtml("");d.mode=""}else d._.previousModeData=d.getData(1);this._.modes[a](function(){d.mode=a;k!==void 0&&!k&&d.resetDirty();g?d.fire("unlockSnapshot"):a=="wysiwyg"&&d.fire("saveSnapshot");
setTimeout(function(){d.fire("mode");b&&b.call(d)},0)})}};CKEDITOR.editor.prototype.resize=function(a,b,d,f){var k=this.container,j=this.ui.space("contents"),g=CKEDITOR.env.webkit&&this.document&&this.document.getWindow().$.frameElement,f=f?this.container.getFirst(function(a){return a.type==CKEDITOR.NODE_ELEMENT&&a.hasClass("cke_inner")}):k;f.setSize("width",a,true);g&&(g.style.width="1%");j.setStyle("height",Math.max(b-(d?0:(f.$.offsetHeight||0)-(j.$.clientHeight||0)),0)+"px");g&&(g.style.width=
"100%");this.fire("resize")};CKEDITOR.editor.prototype.getResizable=function(a){return a?this.ui.space("contents"):this.container};CKEDITOR.domReady(function(){CKEDITOR.replaceClass&&CKEDITOR.replaceAll(CKEDITOR.replaceClass)})})();CKEDITOR.config.startupMode="wysiwyg";
(function(){function a(a){var b=a.editor,d=a.data.path,e=d.blockLimit,l=a.data.selection,p=l.getRanges()[0],r;if(CKEDITOR.env.gecko||CKEDITOR.env.ie&&CKEDITOR.env.needsBrFiller)if(l=f(l,d)){l.appendBogus();r=CKEDITOR.env.ie}if(h(b,d.block,e)&&p.collapsed&&!p.getCommonAncestor().isReadOnly()){d=p.clone();d.enlarge(CKEDITOR.ENLARGE_BLOCK_CONTENTS);e=new CKEDITOR.dom.walker(d);e.guard=function(a){return!c(a)||a.type==CKEDITOR.NODE_COMMENT||a.isReadOnly()};if(!e.checkForward()||d.checkStartOfBlock()&&
d.checkEndOfBlock()){b=p.fixBlock(true,b.activeEnterMode==CKEDITOR.ENTER_DIV?"div":"p");if(!CKEDITOR.env.needsBrFiller)(b=b.getFirst(c))&&(b.type==CKEDITOR.NODE_TEXT&&CKEDITOR.tools.trim(b.getText()).match(/^(?:&nbsp;|\xa0)$/))&&b.remove();r=1;a.cancel()}}r&&p.select()}function f(a,b){if(a.isFake)return 0;var d=b.block||b.blockLimit,e=d&&d.getLast(c);if(d&&d.isBlockBoundary()&&(!e||!(e.type==CKEDITOR.NODE_ELEMENT&&e.isBlockBoundary()))&&!d.is("pre")&&!d.getBogus())return d}function b(a){var b=a.data.getTarget();
if(b.is("input")){b=b.getAttribute("type");(b=="submit"||b=="reset")&&a.data.preventDefault()}}function c(a){return s(a)&&w(a)}function e(a,b){return function(c){var d=CKEDITOR.dom.element.get(c.data.$.toElement||c.data.$.fromElement||c.data.$.relatedTarget);(!d||!b.equals(d)&&!b.contains(d))&&a.call(this,c)}}function d(a){function b(a){return function(b,e){e&&(b.type==CKEDITOR.NODE_ELEMENT&&b.is(f))&&(d=b);if(!e&&c(b)&&(!a||!m(b)))return false}}var d,e=a.getRanges()[0],a=a.root,f={table:1,ul:1,ol:1,
dl:1};if(e.startPath().contains(f)){var p=e.clone();p.collapse(1);p.setStartAt(a,CKEDITOR.POSITION_AFTER_START);a=new CKEDITOR.dom.walker(p);a.guard=b();a.checkBackward();if(d){p=e.clone();p.collapse();p.setEndAt(d,CKEDITOR.POSITION_AFTER_END);a=new CKEDITOR.dom.walker(p);a.guard=b(true);d=false;a.checkForward();return d}}return null}function h(a,b,c){return a.config.autoParagraph!==false&&a.activeEnterMode!=CKEDITOR.ENTER_BR&&a.editable().equals(c)&&!b||b&&b.getAttribute("contenteditable")=="true"}
function k(a){a.editor.focus();a.editor.fire("saveSnapshot")}function j(a){var b=a.editor;b.getSelection().scrollIntoView();setTimeout(function(){b.fire("saveSnapshot")},0)}function g(a,b,c){for(var d=a.getCommonAncestor(b),b=a=c?b:a;(a=a.getParent())&&!d.equals(a)&&a.getChildCount()==1;)b=a;b.remove()}CKEDITOR.editable=CKEDITOR.tools.createClass({base:CKEDITOR.dom.element,$:function(a,b){this.base(b.$||b);this.editor=a;this.status="unloaded";this.hasFocus=false;this.setup()},proto:{focus:function(){var a;
if(CKEDITOR.env.webkit&&!this.hasFocus){a=this.editor._.previousActive||this.getDocument().getActive();if(this.contains(a)){a.focus();return}}try{this.$[CKEDITOR.env.ie&&this.getDocument().equals(CKEDITOR.document)?"setActive":"focus"]()}catch(b){if(!CKEDITOR.env.ie)throw b;}if(CKEDITOR.env.safari&&!this.isInline()){a=CKEDITOR.document.getActive();a.equals(this.getWindow().getFrame())||this.getWindow().focus()}},on:function(a,b){var c=Array.prototype.slice.call(arguments,0);if(CKEDITOR.env.ie&&/^focus|blur$/.exec(a)){a=
a=="focus"?"focusin":"focusout";b=e(b,this);c[0]=a;c[1]=b}return CKEDITOR.dom.element.prototype.on.apply(this,c)},attachListener:function(a){!this._.listeners&&(this._.listeners=[]);var b=Array.prototype.slice.call(arguments,1),b=a.on.apply(a,b);this._.listeners.push(b);return b},clearListeners:function(){var a=this._.listeners;try{for(;a.length;)a.pop().removeListener()}catch(b){}},restoreAttrs:function(){var a=this._.attrChanges,b,c;for(c in a)if(a.hasOwnProperty(c)){b=a[c];b!==null?this.setAttribute(c,
b):this.removeAttribute(c)}},attachClass:function(a){var b=this.getCustomData("classes");if(!this.hasClass(a)){!b&&(b=[]);b.push(a);this.setCustomData("classes",b);this.addClass(a)}},changeAttr:function(a,b){var c=this.getAttribute(a);if(b!==c){!this._.attrChanges&&(this._.attrChanges={});a in this._.attrChanges||(this._.attrChanges[a]=c);this.setAttribute(a,b)}},insertHtml:function(a,b){k(this);q(this,b||"html",a)},insertText:function(a){k(this);var b=this.editor,c=b.getSelection().getStartElement().hasAscendant("pre",
true)?CKEDITOR.ENTER_BR:b.activeEnterMode,b=c==CKEDITOR.ENTER_BR,d=CKEDITOR.tools,a=d.htmlEncode(a.replace(/\r\n/g,"\n")),a=a.replace(/\t/g,"&nbsp;&nbsp; &nbsp;"),c=c==CKEDITOR.ENTER_P?"p":"div";if(!b){var e=/\n{2}/g;if(e.test(a))var f="<"+c+">",r="</"+c+">",a=f+a.replace(e,function(){return r+f})+r}a=a.replace(/\n/g,"<br>");b||(a=a.replace(RegExp("<br>(?=</"+c+">)"),function(a){return d.repeat(a,2)}));a=a.replace(/^ | $/g,"&nbsp;");a=a.replace(/(>|\s) /g,function(a,b){return b+"&nbsp;"}).replace(/ (?=<)/g,
"&nbsp;");q(this,"text",a)},insertElement:function(a,b){b?this.insertElementIntoRange(a,b):this.insertElementIntoSelection(a)},insertElementIntoRange:function(a,b){var c=this.editor,d=c.config.enterMode,e=a.getName(),f=CKEDITOR.dtd.$block[e];if(b.checkReadOnly())return false;b.deleteContents(1);b.startContainer.type==CKEDITOR.NODE_ELEMENT&&b.startContainer.is({tr:1,table:1,tbody:1,thead:1,tfoot:1})&&t(b);var r,n;if(f)for(;(r=b.getCommonAncestor(0,1))&&(n=CKEDITOR.dtd[r.getName()])&&(!n||!n[e]);)if(r.getName()in
CKEDITOR.dtd.span)b.splitElement(r);else if(b.checkStartOfBlock()&&b.checkEndOfBlock()){b.setStartBefore(r);b.collapse(true);r.remove()}else b.splitBlock(d==CKEDITOR.ENTER_DIV?"div":"p",c.editable());b.insertNode(a);return true},insertElementIntoSelection:function(a){k(this);var b=this.editor,d=b.activeEnterMode,b=b.getSelection(),e=b.getRanges()[0],f=a.getName(),f=CKEDITOR.dtd.$block[f];if(this.insertElementIntoRange(a,e)){e.moveToPosition(a,CKEDITOR.POSITION_AFTER_END);if(f)if((f=a.getNext(function(a){return c(a)&&
!m(a)}))&&f.type==CKEDITOR.NODE_ELEMENT&&f.is(CKEDITOR.dtd.$block))f.getDtd()["#"]?e.moveToElementEditStart(f):e.moveToElementEditEnd(a);else if(!f&&d!=CKEDITOR.ENTER_BR){f=e.fixBlock(true,d==CKEDITOR.ENTER_DIV?"div":"p");e.moveToElementEditStart(f)}}b.selectRanges([e]);j(this)},setData:function(a,b){b||(a=this.editor.dataProcessor.toHtml(a));this.setHtml(a);this.fixInitialSelection();if(this.status=="unloaded")this.status="ready";this.editor.fire("dataReady")},getData:function(a){var b=this.getHtml();
a||(b=this.editor.dataProcessor.toDataFormat(b));return b},setReadOnly:function(a){this.setAttribute("contenteditable",!a)},detach:function(){this.removeClass("cke_editable");this.status="detached";var a=this.editor;this._.detach();delete a.document;delete a.window},isInline:function(){return this.getDocument().equals(CKEDITOR.document)},fixInitialSelection:function(){function a(){var b=c.getDocument().$,d=b.getSelection(),e;if(d.anchorNode&&d.anchorNode==c.$)e=true;else if(CKEDITOR.env.webkit){var f=
c.getDocument().getActive();f&&(f.equals(c)&&!d.anchorNode)&&(e=true)}if(e){e=new CKEDITOR.dom.range(c);e.moveToElementEditStart(c);b=b.createRange();b.setStart(e.startContainer.$,e.startOffset);b.collapse(true);d.removeAllRanges();d.addRange(b)}}function b(){var a=c.getDocument().$,d=a.selection,e=c.getDocument().getActive();if(d.type=="None"&&e.equals(c)){d=new CKEDITOR.dom.range(c);a=a.body.createTextRange();d.moveToElementEditStart(c);d=d.startContainer;d.type!=CKEDITOR.NODE_ELEMENT&&(d=d.getParent());
a.moveToElementText(d.$);a.collapse(true);a.select()}}var c=this;if(CKEDITOR.env.ie&&(CKEDITOR.env.version<9||CKEDITOR.env.quirks)){if(this.hasFocus){this.focus();b()}}else if(this.hasFocus){this.focus();a()}else this.once("focus",function(){a()},null,null,-999)},setup:function(){var a=this.editor;this.attachListener(a,"beforeGetData",function(){var b=this.getData();this.is("textarea")||a.config.ignoreEmptyParagraph!==false&&(b=b.replace(y,function(a,b){return b}));a.setData(b,null,1)},this);this.attachListener(a,
"getSnapshot",function(a){a.data=this.getData(1)},this);this.attachListener(a,"afterSetData",function(){this.setData(a.getData(1))},this);this.attachListener(a,"loadSnapshot",function(a){this.setData(a.data,1)},this);this.attachListener(a,"beforeFocus",function(){var b=a.getSelection();(b=b&&b.getNative())&&b.type=="Control"||this.focus()},this);this.attachListener(a,"insertHtml",function(a){this.insertHtml(a.data.dataValue,a.data.mode)},this);this.attachListener(a,"insertElement",function(a){this.insertElement(a.data)},
this);this.attachListener(a,"insertText",function(a){this.insertText(a.data)},this);this.setReadOnly(a.readOnly);this.attachClass("cke_editable");this.attachClass(a.elementMode==CKEDITOR.ELEMENT_MODE_INLINE?"cke_editable_inline":a.elementMode==CKEDITOR.ELEMENT_MODE_REPLACE||a.elementMode==CKEDITOR.ELEMENT_MODE_APPENDTO?"cke_editable_themed":"");this.attachClass("cke_contents_"+a.config.contentsLangDirection);a.keystrokeHandler.blockedKeystrokes[8]=+a.readOnly;a.keystrokeHandler.attach(this);this.on("blur",
function(){this.hasFocus=false},null,null,-1);this.on("focus",function(){this.hasFocus=true},null,null,-1);a.focusManager.add(this);if(this.equals(CKEDITOR.document.getActive())){this.hasFocus=true;a.once("contentDom",function(){a.focusManager.focus(this)},this)}this.isInline()&&this.changeAttr("tabindex",a.tabIndex);if(!this.is("textarea")){a.document=this.getDocument();a.window=this.getWindow();var e=a.document;this.changeAttr("spellcheck",!a.config.disableNativeSpellChecker);var f=a.config.contentsLangDirection;
this.getDirection(1)!=f&&this.changeAttr("dir",f);var h=CKEDITOR.getCss();if(h){f=e.getHead();if(!f.getCustomData("stylesheet")){h=e.appendStyleText(h);h=new CKEDITOR.dom.element(h.ownerNode||h.owningElement);f.setCustomData("stylesheet",h);h.data("cke-temp",1)}}f=e.getCustomData("stylesheet_ref")||0;e.setCustomData("stylesheet_ref",f+1);this.setCustomData("cke_includeReadonly",!a.config.disableReadonlyStyling);this.attachListener(this,"click",function(a){var a=a.data,b=(new CKEDITOR.dom.elementPath(a.getTarget(),
this)).contains("a");b&&(a.$.button!=2&&b.isReadOnly())&&a.preventDefault()});var l={8:1,46:1};this.attachListener(a,"key",function(b){if(a.readOnly)return true;var c=b.data.domEvent.getKey(),e;if(c in l){var b=a.getSelection(),f,h=b.getRanges()[0],g=h.startPath(),o,m,j,c=c==8;if(CKEDITOR.env.ie&&CKEDITOR.env.version<11&&(f=b.getSelectedElement())||(f=d(b))){a.fire("saveSnapshot");h.moveToPosition(f,CKEDITOR.POSITION_BEFORE_START);f.remove();h.select();a.fire("saveSnapshot");e=1}else if(h.collapsed)if((o=
g.block)&&(j=o[c?"getPrevious":"getNext"](s))&&j.type==CKEDITOR.NODE_ELEMENT&&j.is("table")&&h[c?"checkStartOfBlock":"checkEndOfBlock"]()){a.fire("saveSnapshot");h[c?"checkEndOfBlock":"checkStartOfBlock"]()&&o.remove();h["moveToElementEdit"+(c?"End":"Start")](j);h.select();a.fire("saveSnapshot");e=1}else if(g.blockLimit&&g.blockLimit.is("td")&&(m=g.blockLimit.getAscendant("table"))&&h.checkBoundaryOfElement(m,c?CKEDITOR.START:CKEDITOR.END)&&(j=m[c?"getPrevious":"getNext"](s))){a.fire("saveSnapshot");
h["moveToElementEdit"+(c?"End":"Start")](j);h.checkStartOfBlock()&&h.checkEndOfBlock()?j.remove():h.select();a.fire("saveSnapshot");e=1}else if((m=g.contains(["td","th","caption"]))&&h.checkBoundaryOfElement(m,c?CKEDITOR.START:CKEDITOR.END))e=1}return!e});a.blockless&&(CKEDITOR.env.ie&&CKEDITOR.env.needsBrFiller)&&this.attachListener(this,"keyup",function(b){if(b.data.getKeystroke()in l&&!this.getFirst(c)){this.appendBogus();b=a.createRange();b.moveToPosition(this,CKEDITOR.POSITION_AFTER_START);b.select()}});
this.attachListener(this,"dblclick",function(b){if(a.readOnly)return false;b={element:b.data.getTarget()};a.fire("doubleclick",b)});CKEDITOR.env.ie&&this.attachListener(this,"click",b);CKEDITOR.env.ie||this.attachListener(this,"mousedown",function(b){var c=b.data.getTarget();if(c.is("img","hr","input","textarea","select")&&!c.isReadOnly()){a.getSelection().selectElement(c);c.is("input","textarea","select")&&b.data.preventDefault()}});CKEDITOR.env.gecko&&this.attachListener(this,"mouseup",function(b){if(b.data.$.button==
2){b=b.data.getTarget();if(!b.getOuterHtml().replace(y,"")){var c=a.createRange();c.moveToElementEditStart(b);c.select(true)}}});if(CKEDITOR.env.webkit){this.attachListener(this,"click",function(a){a.data.getTarget().is("input","select")&&a.data.preventDefault()});this.attachListener(this,"mouseup",function(a){a.data.getTarget().is("input","textarea")&&a.data.preventDefault()})}CKEDITOR.env.webkit&&this.attachListener(a,"key",function(b){b=b.data.domEvent.getKey();if(b in l){var c=b==8,d=a.getSelection().getRanges()[0],
b=d.startPath();if(d.collapsed){var e;a:{var f=b.block;if(f)if(d[c?"checkStartOfBlock":"checkEndOfBlock"]())if(!d.moveToClosestEditablePosition(f,!c)||!d.collapsed)e=false;else{if(d.startContainer.type==CKEDITOR.NODE_ELEMENT){var h=d.startContainer.getChild(d.startOffset-(c?1:0));if(h&&h.type==CKEDITOR.NODE_ELEMENT&&h.is("hr")){a.fire("saveSnapshot");h.remove();e=true;break a}}if((d=d.startPath().block)&&(!d||!d.contains(f))){a.fire("saveSnapshot");var j;(j=(c?d:f).getBogus())&&j.remove();e=a.getSelection();
j=e.createBookmarks();(c?f:d).moveChildren(c?d:f,false);b.lastElement.mergeSiblings();g(f,d,!c);e.selectBookmarks(j);e=true}}else e=false;else e=false}if(!e)return}else{c=d;e=b.block;j=c.endPath().block;if(!e||!j||e.equals(j))b=false;else{a.fire("saveSnapshot");(f=e.getBogus())&&f.remove();c.deleteContents();if(j.getParent()){j.moveChildren(e,false);b.lastElement.mergeSiblings();g(e,j,true)}c=a.getSelection().getRanges()[0];c.collapse(1);c.select();b=true}if(!b)return}a.getSelection().scrollIntoView();
a.fire("saveSnapshot");return false}},this,null,100)}}},_:{detach:function(){this.editor.setData(this.editor.getData(),0,1);this.clearListeners();this.restoreAttrs();var a;if(a=this.removeCustomData("classes"))for(;a.length;)this.removeClass(a.pop());if(!this.is("textarea")){a=this.getDocument();var b=a.getHead();if(b.getCustomData("stylesheet")){var c=a.getCustomData("stylesheet_ref");if(--c)a.setCustomData("stylesheet_ref",c);else{a.removeCustomData("stylesheet_ref");b.removeCustomData("stylesheet").remove()}}}this.editor.fire("contentDomUnload");
delete this.editor}}});CKEDITOR.editor.prototype.editable=function(a){var b=this._.editable;if(b&&a)return 0;if(arguments.length)b=this._.editable=a?a instanceof CKEDITOR.editable?a:new CKEDITOR.editable(this,a):(b&&b.detach(),null);return b};var m=CKEDITOR.dom.walker.bogus(),y=/(^|<body\b[^>]*>)\s*<(p|div|address|h\d|center|pre)[^>]*>\s*(?:<br[^>]*>|&nbsp;|\u00A0|&#160;)?\s*(:?<\/\2>)?\s*(?=$|<\/body>)/gi,s=CKEDITOR.dom.walker.whitespaces(true),w=CKEDITOR.dom.walker.bookmark(false,true);CKEDITOR.on("instanceLoaded",
function(b){var c=b.editor;c.on("insertElement",function(a){a=a.data;if(a.type==CKEDITOR.NODE_ELEMENT&&(a.is("input")||a.is("textarea"))){a.getAttribute("contentEditable")!="false"&&a.data("cke-editable",a.hasAttribute("contenteditable")?"true":"1");a.setAttribute("contentEditable",false)}});c.on("selectionChange",function(b){if(!c.readOnly){var d=c.getSelection();if(d&&!d.isLocked){d=c.checkDirty();c.fire("lockSnapshot");a(b);c.fire("unlockSnapshot");!d&&c.resetDirty()}}})});CKEDITOR.on("instanceCreated",
function(a){var b=a.editor;b.on("mode",function(){var a=b.editable();if(a&&a.isInline()){var c=b.title;a.changeAttr("role","textbox");a.changeAttr("aria-label",c);c&&a.changeAttr("title",c);var d=b.fire("ariaEditorHelpLabel",{}).label;if(d)if(c=this.ui.space(this.elementMode==CKEDITOR.ELEMENT_MODE_INLINE?"top":"contents")){var e=CKEDITOR.tools.getNextId(),d=CKEDITOR.dom.element.createFromHtml('<span id="'+e+'" class="cke_voice_label">'+d+"</span>");c.append(d);a.changeAttr("aria-describedby",e)}}})});
CKEDITOR.addCss(".cke_editable{cursor:text}.cke_editable img,.cke_editable input,.cke_editable textarea{cursor:default}");var q=function(){function a(b){return b.type==CKEDITOR.NODE_ELEMENT}function b(c,d){var e,f,l,p,h=[],g=d.range.startContainer;e=d.range.startPath();for(var g=r[g.getName()],n=0,j=c.getChildren(),m=j.count(),o=-1,C=-1,k=0,q=e.contains(r.$list);n<m;++n){e=j.getItem(n);if(a(e)){l=e.getName();if(q&&l in CKEDITOR.dtd.$list)h=h.concat(b(e,d));else{p=!!g[l];if(l=="br"&&e.data("cke-eol")&&
(!n||n==m-1)){k=(f=n?h[n-1].node:j.getItem(n+1))&&(!a(f)||!f.is("br"));f=f&&a(f)&&r.$block[f.getName()]}o==-1&&!p&&(o=n);p||(C=n);h.push({isElement:1,isLineBreak:k,isBlock:e.isBlockBoundary(),hasBlockSibling:f,node:e,name:l,allowed:p});f=k=0}}else h.push({isElement:0,node:e,allowed:1})}if(o>-1)h[o].firstNotAllowed=1;if(C>-1)h[C].lastNotAllowed=1;return h}function d(b,c){var e=[],f=b.getChildren(),l=f.count(),p,h=0,g=r[c],n=!b.is(r.$inline)||b.is("br");for(n&&e.push(" ");h<l;h++){p=f.getItem(h);a(p)&&
!p.is(g)?e=e.concat(d(p,c)):e.push(p)}n&&e.push(" ");return e}function e(b){return b&&a(b)&&(b.is(r.$removeEmpty)||b.is("a")&&!b.isBlockBoundary())}function f(b,c,d,e){var p=b.clone(),h,r;p.setEndAt(c,CKEDITOR.POSITION_BEFORE_END);if((h=(new CKEDITOR.dom.walker(p)).next())&&a(h)&&g[h.getName()]&&(r=h.getPrevious())&&a(r)&&!r.getParent().equals(b.startContainer)&&d.contains(r)&&e.contains(h)&&h.isIdentical(r)){h.moveChildren(r);h.remove();f(b,c,d,e)}}function p(b,c){function d(b,c){if(c.isBlock&&c.isElement&&
!c.node.is("br")&&a(b)&&b.is("br")){b.remove();return 1}}var e=c.endContainer.getChild(c.endOffset),f=c.endContainer.getChild(c.endOffset-1);e&&d(e,b[b.length-1]);if(f&&d(f,b[0])){c.setEnd(c.endContainer,c.endOffset-1);c.collapse()}}var r=CKEDITOR.dtd,g={p:1,div:1,h1:1,h2:1,h3:1,h4:1,h5:1,h6:1,ul:1,ol:1,li:1,pre:1,dl:1,blockquote:1},m={p:1,div:1,h1:1,h2:1,h3:1,h4:1,h5:1,h6:1},C=CKEDITOR.tools.extend({},r.$inline);delete C.br;return function(g,n,k){var q=g.editor,v=q.getSelection().getRanges()[0],
G=false;if(n=="unfiltered_html"){n="html";G=true}if(!v.checkReadOnly()){var z=(new CKEDITOR.dom.elementPath(v.startContainer,v.root)).blockLimit||v.root,n={type:n,dontFilter:G,editable:g,editor:q,range:v,blockLimit:z,mergeCandidates:[],zombies:[]},q=n.range,G=n.mergeCandidates,B,x,E,s;if(n.type=="text"&&q.shrink(CKEDITOR.SHRINK_ELEMENT,true,false)){B=CKEDITOR.dom.element.createFromHtml("<span>&nbsp;</span>",q.document);q.insertNode(B);q.setStartAfter(B)}x=new CKEDITOR.dom.elementPath(q.startContainer);
n.endPath=E=new CKEDITOR.dom.elementPath(q.endContainer);if(!q.collapsed){var z=E.block||E.blockLimit,w=q.getCommonAncestor();z&&(!z.equals(w)&&!z.contains(w)&&q.checkEndOfBlock())&&n.zombies.push(z);q.deleteContents()}for(;(s=a(q.startContainer)&&q.startContainer.getChild(q.startOffset-1))&&a(s)&&s.isBlockBoundary()&&x.contains(s);)q.moveToPosition(s,CKEDITOR.POSITION_BEFORE_END);f(q,n.blockLimit,x,E);if(B){q.setEndBefore(B);q.collapse();B.remove()}B=q.startPath();if(z=B.contains(e,false,1)){q.splitElement(z);
n.inlineStylesRoot=z;n.inlineStylesPeak=B.lastElement}B=q.createBookmark();(z=B.startNode.getPrevious(c))&&a(z)&&e(z)&&G.push(z);(z=B.startNode.getNext(c))&&a(z)&&e(z)&&G.push(z);for(z=B.startNode;(z=z.getParent())&&e(z);)G.push(z);q.moveToBookmark(B);if(B=k){B=n.range;if(n.type=="text"&&n.inlineStylesRoot){s=n.inlineStylesPeak;q=s.getDocument().createText("{cke-peak}");for(G=n.inlineStylesRoot.getParent();!s.equals(G);){q=q.appendTo(s.clone());s=s.getParent()}k=q.getOuterHtml().split("{cke-peak}").join(k)}s=
n.blockLimit.getName();if(/^\s+|\s+$/.test(k)&&"span"in CKEDITOR.dtd[s])var y='<span data-cke-marker="1">&nbsp;</span>',k=y+k+y;k=n.editor.dataProcessor.toHtml(k,{context:null,fixForBody:false,dontFilter:n.dontFilter,filter:n.editor.activeFilter,enterMode:n.editor.activeEnterMode});s=B.document.createElement("body");s.setHtml(k);if(y){s.getFirst().remove();s.getLast().remove()}if((y=B.startPath().block)&&!(y.getChildCount()==1&&y.getBogus()))a:{var t;if(s.getChildCount()==1&&a(t=s.getFirst())&&t.is(m)){y=
t.getElementsByTag("*");B=0;for(G=y.count();B<G;B++){q=y.getItem(B);if(!q.is(C))break a}t.moveChildren(t.getParent(1));t.remove()}}n.dataWrapper=s;B=k}if(B){t=n.range;var y=t.document,D,k=n.blockLimit;B=0;var J;s=[];var H,Q,G=q=0,M,S;x=t.startContainer;var z=n.endPath.elements[0],T;E=z.getPosition(x);w=!!z.getCommonAncestor(x)&&E!=CKEDITOR.POSITION_IDENTICAL&&!(E&CKEDITOR.POSITION_CONTAINS+CKEDITOR.POSITION_IS_CONTAINED);x=b(n.dataWrapper,n);for(p(x,t);B<x.length;B++){E=x[B];if(D=E.isLineBreak){D=
t;M=k;var O=void 0,V=void 0;if(E.hasBlockSibling)D=1;else{O=D.startContainer.getAscendant(r.$block,1);if(!O||!O.is({div:1,p:1}))D=0;else{V=O.getPosition(M);if(V==CKEDITOR.POSITION_IDENTICAL||V==CKEDITOR.POSITION_CONTAINS)D=0;else{M=D.splitElement(O);D.moveToPosition(M,CKEDITOR.POSITION_AFTER_START);D=1}}}}if(D)G=B>0;else{D=t.startPath();if(!E.isBlock&&h(n.editor,D.block,D.blockLimit)&&(Q=n.editor.activeEnterMode!=CKEDITOR.ENTER_BR&&n.editor.config.autoParagraph!==false?n.editor.activeEnterMode==CKEDITOR.ENTER_DIV?
"div":"p":false)){Q=y.createElement(Q);Q.appendBogus();t.insertNode(Q);CKEDITOR.env.needsBrFiller&&(J=Q.getBogus())&&J.remove();t.moveToPosition(Q,CKEDITOR.POSITION_BEFORE_END)}if((D=t.startPath().block)&&!D.equals(H)){if(J=D.getBogus()){J.remove();s.push(D)}H=D}E.firstNotAllowed&&(q=1);if(q&&E.isElement){D=t.startContainer;for(M=null;D&&!r[D.getName()][E.name];){if(D.equals(k)){D=null;break}M=D;D=D.getParent()}if(D){if(M){S=t.splitElement(M);n.zombies.push(S);n.zombies.push(M)}}else{M=k.getName();
T=!B;D=B==x.length-1;M=d(E.node,M);for(var O=[],V=M.length,W=0,Y=void 0,Z=0,U=-1;W<V;W++){Y=M[W];if(Y==" "){if(!Z&&(!T||W)){O.push(new CKEDITOR.dom.text(" "));U=O.length}Z=1}else{O.push(Y);Z=0}}D&&U==O.length&&O.pop();T=O}}if(T){for(;D=T.pop();)t.insertNode(D);T=0}else t.insertNode(E.node);if(E.lastNotAllowed&&B<x.length-1){(S=w?z:S)&&t.setEndAt(S,CKEDITOR.POSITION_AFTER_START);q=0}t.collapse()}}n.dontMoveCaret=G;n.bogusNeededBlocks=s}J=n.range;var N;S=n.bogusNeededBlocks;for(T=J.createBookmark();H=
n.zombies.pop();)if(H.getParent()){Q=J.clone();Q.moveToElementEditStart(H);Q.removeEmptyBlocksAtEnd()}if(S)for(;H=S.pop();)CKEDITOR.env.needsBrFiller?H.appendBogus():H.append(J.document.createText(" "));for(;H=n.mergeCandidates.pop();)H.mergeSiblings();J.moveToBookmark(T);if(!n.dontMoveCaret){for(H=a(J.startContainer)&&J.startContainer.getChild(J.startOffset-1);H&&a(H)&&!H.is(r.$empty);){if(H.isBlockBoundary())J.moveToPosition(H,CKEDITOR.POSITION_BEFORE_END);else{if(e(H)&&H.getHtml().match(/(\s|&nbsp;)$/g)){N=
null;break}N=J.clone();N.moveToPosition(H,CKEDITOR.POSITION_BEFORE_END)}H=H.getLast(c)}N&&J.moveToRange(N)}v.select();j(g)}}}(),t=function(){function a(b){b=new CKEDITOR.dom.walker(b);b.guard=function(a,b){if(b)return false;if(a.type==CKEDITOR.NODE_ELEMENT)return a.is(CKEDITOR.dtd.$tableContent)};b.evaluator=function(a){return a.type==CKEDITOR.NODE_ELEMENT};return b}function b(a,c,d){c=a.getDocument().createElement(c);a.append(c,d);return c}function c(a){var b=a.count(),d;for(b;b-- >0;){d=a.getItem(b);
if(!CKEDITOR.tools.trim(d.getHtml())){d.appendBogus();CKEDITOR.env.ie&&(CKEDITOR.env.version<9&&d.getChildCount())&&d.getFirst().remove()}}}return function(d){var e=d.startContainer,f=e.getAscendant("table",1),h=false;c(f.getElementsByTag("td"));c(f.getElementsByTag("th"));f=d.clone();f.setStart(e,0);f=a(f).lastBackward();if(!f){f=d.clone();f.setEndAt(e,CKEDITOR.POSITION_BEFORE_END);f=a(f).lastForward();h=true}f||(f=e);if(f.is("table")){d.setStartAt(f,CKEDITOR.POSITION_BEFORE_START);d.collapse(true);
f.remove()}else{f.is({tbody:1,thead:1,tfoot:1})&&(f=b(f,"tr",h));f.is("tr")&&(f=b(f,f.getParent().is("thead")?"th":"td",h));(e=f.getBogus())&&e.remove();d.moveToPosition(f,h?CKEDITOR.POSITION_AFTER_START:CKEDITOR.POSITION_BEFORE_END)}}}()})();
(function(){function a(){var a=this._.fakeSelection,b;if(a){b=this.getSelection(1);if(!b||!b.isHidden()){a.reset();a=0}}if(!a){a=b||this.getSelection(1);if(!a||a.getType()==CKEDITOR.SELECTION_NONE)return}this.fire("selectionCheck",a);b=this.elementPath();if(!b.compare(this._.selectionPreviousPath)){if(CKEDITOR.env.webkit)this._.previousActive=this.document.getActive();this._.selectionPreviousPath=b;this.fire("selectionChange",{selection:a,path:b})}}function f(){q=true;if(!w){b.call(this);w=CKEDITOR.tools.setTimeout(b,
200,this)}}function b(){w=null;if(q){CKEDITOR.tools.setTimeout(a,0,this);q=false}}function c(a){return t(a)||a.type==CKEDITOR.NODE_ELEMENT&&!a.is(CKEDITOR.dtd.$empty)?true:false}function e(a){function b(c,d){return!c||c.type==CKEDITOR.NODE_TEXT?false:a.clone()["moveToElementEdit"+(d?"End":"Start")](c)}if(!(a.root instanceof CKEDITOR.editable))return false;var d=a.startContainer,e=a.getPreviousNode(c,null,d),f=a.getNextNode(c,null,d);return b(e)||b(f,1)||!e&&!f&&!(d.type==CKEDITOR.NODE_ELEMENT&&d.isBlockBoundary()&&
d.getBogus())?true:false}function d(a){return a.getCustomData("cke-fillingChar")}function h(a,b){var c=a&&a.removeCustomData("cke-fillingChar");if(c){if(b!==false){var d,e=a.getDocument().getSelection().getNative(),f=e&&e.type!="None"&&e.getRangeAt(0);if(c.getLength()>1&&f&&f.intersectsNode(c.$)){d=j(e);f=e.focusNode==c.$&&e.focusOffset>0;e.anchorNode==c.$&&e.anchorOffset>0&&d[0].offset--;f&&d[1].offset--}}c.setText(k(c.getText()));d&&g(a.getDocument().$,d)}}function k(a){return a.replace(/\u200B( )?/g,
function(a){return a[1]?" ":""})}function j(a){return[{node:a.anchorNode,offset:a.anchorOffset},{node:a.focusNode,offset:a.focusOffset}]}function g(a,b){var c=a.getSelection(),d=a.createRange();d.setStart(b[0].node,b[0].offset);d.collapse(true);c.removeAllRanges();c.addRange(d);c.extend(b[1].node,b[1].offset)}function m(a){var b=CKEDITOR.dom.element.createFromHtml('<div data-cke-hidden-sel="1" data-cke-temp="1" style="'+(CKEDITOR.env.ie?"display:none":"position:fixed;top:0;left:-1000px")+'">&nbsp;</div>',
a.document);a.fire("lockSnapshot");a.editable().append(b);var c=a.getSelection(1),d=a.createRange(),e=c.root.on("selectionchange",function(a){a.cancel()},null,null,0);d.setStartAt(b,CKEDITOR.POSITION_AFTER_START);d.setEndAt(b,CKEDITOR.POSITION_BEFORE_END);c.selectRanges([d]);e.removeListener();a.fire("unlockSnapshot");a._.hiddenSelectionContainer=b}function y(a){var b={37:1,39:1,8:1,46:1};return function(c){var d=c.data.getKeystroke();if(b[d]){var e=a.getSelection().getRanges(),f=e[0];if(e.length==
1&&f.collapsed)if((d=f[d<38?"getPreviousEditableNode":"getNextEditableNode"]())&&d.type==CKEDITOR.NODE_ELEMENT&&d.getAttribute("contenteditable")=="false"){a.getSelection().fake(d);c.data.preventDefault();c.cancel()}}}}function s(a){for(var b=0;b<a.length;b++){var c=a[b];c.getCommonAncestor().isReadOnly()&&a.splice(b,1);if(!c.collapsed){if(c.startContainer.isReadOnly())for(var d=c.startContainer,e;d;){if((e=d.type==CKEDITOR.NODE_ELEMENT)&&d.is("body")||!d.isReadOnly())break;e&&d.getAttribute("contentEditable")==
"false"&&c.setStartAfter(d);d=d.getParent()}d=c.startContainer;e=c.endContainer;var f=c.startOffset,h=c.endOffset,g=c.clone();d&&d.type==CKEDITOR.NODE_TEXT&&(f>=d.getLength()?g.setStartAfter(d):g.setStartBefore(d));e&&e.type==CKEDITOR.NODE_TEXT&&(h?g.setEndAfter(e):g.setEndBefore(e));d=new CKEDITOR.dom.walker(g);d.evaluator=function(d){if(d.type==CKEDITOR.NODE_ELEMENT&&d.isReadOnly()){var e=c.clone();c.setEndBefore(d);c.collapsed&&a.splice(b--,1);if(!(d.getPosition(g.endContainer)&CKEDITOR.POSITION_CONTAINS)){e.setStartAfter(d);
e.collapsed||a.splice(b+1,0,e)}return true}return false};d.next()}}return a}var w,q,t=CKEDITOR.dom.walker.invisible(1),i=function(){function a(b){return function(a){var c=a.editor.createRange();c.moveToClosestEditablePosition(a.selected,b)&&a.editor.getSelection().selectRanges([c]);return false}}function b(a){return function(b){var c=b.editor,d=c.createRange(),e;if(!(e=d.moveToClosestEditablePosition(b.selected,a)))e=d.moveToClosestEditablePosition(b.selected,!a);e&&c.getSelection().selectRanges([d]);
c.fire("saveSnapshot");b.selected.remove();if(!e){d.moveToElementEditablePosition(c.editable());c.getSelection().selectRanges([d])}c.fire("saveSnapshot");return false}}var c=a(),d=a(1);return{37:c,38:c,39:d,40:d,8:b(),46:b(1)}}();CKEDITOR.on("instanceCreated",function(b){function c(){var a=d.getSelection();a&&a.removeAllRanges()}var d=b.editor;d.on("contentDom",function(){function b(){z=new CKEDITOR.dom.selection(d.getSelection());z.lock()}function c(){l.removeListener("mouseup",c);i.removeListener("mouseup",
c);var a=CKEDITOR.document.$.selection,b=a.createRange();a.type!="None"&&b.parentElement().ownerDocument==e.$&&b.select()}var e=d.document,l=CKEDITOR.document,g=d.editable(),p=e.getBody(),i=e.getDocumentElement(),v=g.isInline(),j,z;CKEDITOR.env.gecko&&g.attachListener(g,"focus",function(a){a.removeListener();if(j!==0)if((a=d.getSelection().getNative())&&a.isCollapsed&&a.anchorNode==g.$){a=d.createRange();a.moveToElementEditStart(g);a.select()}},null,null,-2);g.attachListener(g,CKEDITOR.env.webkit?
"DOMFocusIn":"focus",function(){j&&CKEDITOR.env.webkit&&(j=d._.previousActive&&d._.previousActive.equals(e.getActive()));d.unlockSelection(j);j=0},null,null,-1);g.attachListener(g,"mousedown",function(){j=0});if(CKEDITOR.env.ie||v){A?g.attachListener(g,"beforedeactivate",b,null,null,-1):g.attachListener(d,"selectionCheck",b,null,null,-1);g.attachListener(g,CKEDITOR.env.webkit?"DOMFocusOut":"blur",function(){d.lockSelection(z);j=1},null,null,-1);g.attachListener(g,"mousedown",function(){j=0})}if(CKEDITOR.env.ie&&
!v){var B;g.attachListener(g,"mousedown",function(a){if(a.data.$.button==2){a=d.document.getSelection();if(!a||a.getType()==CKEDITOR.SELECTION_NONE)B=d.window.getScrollPosition()}});g.attachListener(g,"mouseup",function(a){if(a.data.$.button==2&&B){d.document.$.documentElement.scrollLeft=B.x;d.document.$.documentElement.scrollTop=B.y}B=null});if(e.$.compatMode!="BackCompat"){if(CKEDITOR.env.ie7Compat||CKEDITOR.env.ie6Compat)i.on("mousedown",function(a){function b(a){a=a.data.$;if(d){var c=p.$.createTextRange();
try{c.moveToPoint(a.clientX,a.clientY)}catch(e){}d.setEndPoint(f.compareEndPoints("StartToStart",c)<0?"EndToEnd":"StartToStart",c);d.select()}}function c(){i.removeListener("mousemove",b);l.removeListener("mouseup",c);i.removeListener("mouseup",c);d.select()}a=a.data;if(a.getTarget().is("html")&&a.$.y<i.$.clientHeight&&a.$.x<i.$.clientWidth){var d=p.$.createTextRange();try{d.moveToPoint(a.$.clientX,a.$.clientY)}catch(e){}var f=d.duplicate();i.on("mousemove",b);l.on("mouseup",c);i.on("mouseup",c)}});
if(CKEDITOR.env.version>7&&CKEDITOR.env.version<11)i.on("mousedown",function(a){if(a.data.getTarget().is("html")){l.on("mouseup",c);i.on("mouseup",c)}})}}g.attachListener(g,"selectionchange",a,d);g.attachListener(g,"keyup",f,d);g.attachListener(g,CKEDITOR.env.webkit?"DOMFocusIn":"focus",function(){d.forceNextSelectionCheck();d.selectionChange(1)});if(v&&(CKEDITOR.env.webkit||CKEDITOR.env.gecko)){var x;g.attachListener(g,"mousedown",function(){x=1});g.attachListener(e.getDocumentElement(),"mouseup",
function(){x&&f.call(d);x=0})}else g.attachListener(CKEDITOR.env.ie?g:e.getDocumentElement(),"mouseup",f,d);CKEDITOR.env.webkit&&g.attachListener(e,"keydown",function(a){switch(a.data.getKey()){case 13:case 33:case 34:case 35:case 36:case 37:case 39:case 8:case 45:case 46:h(g)}},null,null,-1);g.attachListener(g,"keydown",y(d),null,null,-1)});d.on("setData",function(){d.unlockSelection();CKEDITOR.env.webkit&&c()});d.on("contentDomUnload",function(){d.unlockSelection()});if(CKEDITOR.env.ie9Compat)d.on("beforeDestroy",
c,null,null,9);d.on("dataReady",function(){delete d._.fakeSelection;delete d._.hiddenSelectionContainer;d.selectionChange(1)});d.on("loadSnapshot",function(){var a=CKEDITOR.dom.walker.nodeType(CKEDITOR.NODE_ELEMENT),b=d.editable().getLast(a);if(b&&b.hasAttribute("data-cke-hidden-sel")){b.remove();if(CKEDITOR.env.gecko)(a=d.editable().getFirst(a))&&(a.is("br")&&a.getAttribute("_moz_editor_bogus_node"))&&a.remove()}},null,null,100);d.on("key",function(a){if(d.mode=="wysiwyg"){var b=d.getSelection();
if(b.isFake){var c=i[a.data.keyCode];if(c)return c({editor:d,selected:b.getSelectedElement(),selection:b,keyEvent:a})}}})});CKEDITOR.on("instanceReady",function(a){function b(){var a=e.editable();if(a)if(a=d(a)){var c=e.document.$.getSelection();if(c.type!="None"&&(c.anchorNode==a.$||c.focusNode==a.$))i=j(c);f=a.getText();a.setText(k(f))}}function c(){var a=e.editable();if(a)if(a=d(a)){a.setText(f);if(i){g(e.document.$,i);i=null}}}var e=a.editor,f,i;if(CKEDITOR.env.webkit){e.on("selectionChange",
function(){var a=e.editable(),b=d(a);b&&(b.getCustomData("ready")?h(a):b.setCustomData("ready",1))},null,null,-1);e.on("beforeSetMode",function(){h(e.editable())},null,null,-1);e.on("beforeUndoImage",b);e.on("afterUndoImage",c);e.on("beforeGetData",b,null,null,0);e.on("getData",c)}});CKEDITOR.editor.prototype.selectionChange=function(b){(b?a:f).call(this)};CKEDITOR.editor.prototype.getSelection=function(a){if((this._.savedSelection||this._.fakeSelection)&&!a)return this._.savedSelection||this._.fakeSelection;
return(a=this.editable())&&this.mode=="wysiwyg"?new CKEDITOR.dom.selection(a):null};CKEDITOR.editor.prototype.lockSelection=function(a){a=a||this.getSelection(1);if(a.getType()!=CKEDITOR.SELECTION_NONE){!a.isLocked&&a.lock();this._.savedSelection=a;return true}return false};CKEDITOR.editor.prototype.unlockSelection=function(a){var b=this._.savedSelection;if(b){b.unlock(a);delete this._.savedSelection;return true}return false};CKEDITOR.editor.prototype.forceNextSelectionCheck=function(){delete this._.selectionPreviousPath};
CKEDITOR.dom.document.prototype.getSelection=function(){return new CKEDITOR.dom.selection(this)};CKEDITOR.dom.range.prototype.select=function(){var a=this.root instanceof CKEDITOR.editable?this.root.editor.getSelection():new CKEDITOR.dom.selection(this.root);a.selectRanges([this]);return a};CKEDITOR.SELECTION_NONE=1;CKEDITOR.SELECTION_TEXT=2;CKEDITOR.SELECTION_ELEMENT=3;var A=typeof window.getSelection!="function",u=1;CKEDITOR.dom.selection=function(a){if(a instanceof CKEDITOR.dom.selection)var b=
a,a=a.root;var c=a instanceof CKEDITOR.dom.element;this.rev=b?b.rev:u++;this.document=a instanceof CKEDITOR.dom.document?a:a.getDocument();this.root=c?a:this.document.getBody();this.isLocked=0;this._={cache:{}};if(b){CKEDITOR.tools.extend(this._.cache,b._.cache);this.isFake=b.isFake;this.isLocked=b.isLocked;return this}var a=this.getNative(),d,e;if(a)if(a.getRangeAt)d=(e=a.rangeCount&&a.getRangeAt(0))&&new CKEDITOR.dom.node(e.commonAncestorContainer);else{try{e=a.createRange()}catch(f){}d=e&&CKEDITOR.dom.element.get(e.item&&
e.item(0)||e.parentElement())}if(!d||!(d.type==CKEDITOR.NODE_ELEMENT||d.type==CKEDITOR.NODE_TEXT)||!this.root.equals(d)&&!this.root.contains(d)){this._.cache.type=CKEDITOR.SELECTION_NONE;this._.cache.startElement=null;this._.cache.selectedElement=null;this._.cache.selectedText="";this._.cache.ranges=new CKEDITOR.dom.rangeList}return this};var o={img:1,hr:1,li:1,table:1,tr:1,td:1,th:1,embed:1,object:1,ol:1,ul:1,a:1,input:1,form:1,select:1,textarea:1,button:1,fieldset:1,thead:1,tfoot:1};CKEDITOR.dom.selection.prototype=
{getNative:function(){return this._.cache.nativeSel!==void 0?this._.cache.nativeSel:this._.cache.nativeSel=A?this.document.$.selection:this.document.getWindow().$.getSelection()},getType:A?function(){var a=this._.cache;if(a.type)return a.type;var b=CKEDITOR.SELECTION_NONE;try{var c=this.getNative(),d=c.type;if(d=="Text")b=CKEDITOR.SELECTION_TEXT;if(d=="Control")b=CKEDITOR.SELECTION_ELEMENT;if(c.createRange().parentElement())b=CKEDITOR.SELECTION_TEXT}catch(e){}return a.type=b}:function(){var a=this._.cache;
if(a.type)return a.type;var b=CKEDITOR.SELECTION_TEXT,c=this.getNative();if(!c||!c.rangeCount)b=CKEDITOR.SELECTION_NONE;else if(c.rangeCount==1){var c=c.getRangeAt(0),d=c.startContainer;if(d==c.endContainer&&d.nodeType==1&&c.endOffset-c.startOffset==1&&o[d.childNodes[c.startOffset].nodeName.toLowerCase()])b=CKEDITOR.SELECTION_ELEMENT}return a.type=b},getRanges:function(){var a=A?function(){function a(b){return(new CKEDITOR.dom.node(b)).getIndex()}var b=function(b,c){b=b.duplicate();b.collapse(c);
var d=b.parentElement();if(!d.hasChildNodes())return{container:d,offset:0};for(var e=d.children,f,g,h=b.duplicate(),v=0,l=e.length-1,i=-1,j,x;v<=l;){i=Math.floor((v+l)/2);f=e[i];h.moveToElementText(f);j=h.compareEndPoints("StartToStart",b);if(j>0)l=i-1;else if(j<0)v=i+1;else return{container:d,offset:a(f)}}if(i==-1||i==e.length-1&&j<0){h.moveToElementText(d);h.setEndPoint("StartToStart",b);h=h.text.replace(/(\r\n|\r)/g,"\n").length;e=d.childNodes;if(!h){f=e[e.length-1];return f.nodeType!=CKEDITOR.NODE_TEXT?
{container:d,offset:e.length}:{container:f,offset:f.nodeValue.length}}for(d=e.length;h>0&&d>0;){g=e[--d];if(g.nodeType==CKEDITOR.NODE_TEXT){x=g;h=h-g.nodeValue.length}}return{container:x,offset:-h}}h.collapse(j>0?true:false);h.setEndPoint(j>0?"StartToStart":"EndToStart",b);h=h.text.replace(/(\r\n|\r)/g,"\n").length;if(!h)return{container:d,offset:a(f)+(j>0?0:1)};for(;h>0;)try{g=f[j>0?"previousSibling":"nextSibling"];if(g.nodeType==CKEDITOR.NODE_TEXT){h=h-g.nodeValue.length;x=g}f=g}catch(m){return{container:d,
offset:a(f)}}return{container:x,offset:j>0?-h:x.nodeValue.length+h}};return function(){var a=this.getNative(),c=a&&a.createRange(),d=this.getType();if(!a)return[];if(d==CKEDITOR.SELECTION_TEXT){a=new CKEDITOR.dom.range(this.root);d=b(c,true);a.setStart(new CKEDITOR.dom.node(d.container),d.offset);d=b(c);a.setEnd(new CKEDITOR.dom.node(d.container),d.offset);a.endContainer.getPosition(a.startContainer)&CKEDITOR.POSITION_PRECEDING&&a.endOffset<=a.startContainer.getIndex()&&a.collapse();return[a]}if(d==
CKEDITOR.SELECTION_ELEMENT){for(var d=[],e=0;e<c.length;e++){for(var f=c.item(e),h=f.parentNode,g=0,a=new CKEDITOR.dom.range(this.root);g<h.childNodes.length&&h.childNodes[g]!=f;g++);a.setStart(new CKEDITOR.dom.node(h),g);a.setEnd(new CKEDITOR.dom.node(h),g+1);d.push(a)}return d}return[]}}():function(){var a=[],b,c=this.getNative();if(!c)return a;for(var d=0;d<c.rangeCount;d++){var e=c.getRangeAt(d);b=new CKEDITOR.dom.range(this.root);b.setStart(new CKEDITOR.dom.node(e.startContainer),e.startOffset);
b.setEnd(new CKEDITOR.dom.node(e.endContainer),e.endOffset);a.push(b)}return a};return function(b){var c=this._.cache,d=c.ranges;if(!d)c.ranges=d=new CKEDITOR.dom.rangeList(a.call(this));return!b?d:s(new CKEDITOR.dom.rangeList(d.slice()))}}(),getStartElement:function(){var a=this._.cache;if(a.startElement!==void 0)return a.startElement;var b;switch(this.getType()){case CKEDITOR.SELECTION_ELEMENT:return this.getSelectedElement();case CKEDITOR.SELECTION_TEXT:var c=this.getRanges()[0];if(c){if(c.collapsed){b=
c.startContainer;b.type!=CKEDITOR.NODE_ELEMENT&&(b=b.getParent())}else{for(c.optimize();;){b=c.startContainer;if(c.startOffset==(b.getChildCount?b.getChildCount():b.getLength())&&!b.isBlockBoundary())c.setStartAfter(b);else break}b=c.startContainer;if(b.type!=CKEDITOR.NODE_ELEMENT)return b.getParent();b=b.getChild(c.startOffset);if(!b||b.type!=CKEDITOR.NODE_ELEMENT)b=c.startContainer;else for(c=b.getFirst();c&&c.type==CKEDITOR.NODE_ELEMENT;){b=c;c=c.getFirst()}}b=b.$}}return a.startElement=b?new CKEDITOR.dom.element(b):
null},getSelectedElement:function(){var a=this._.cache;if(a.selectedElement!==void 0)return a.selectedElement;var b=this,c=CKEDITOR.tools.tryThese(function(){return b.getNative().createRange().item(0)},function(){for(var a=b.getRanges()[0].clone(),c,d,e=2;e&&(!(c=a.getEnclosedNode())||!(c.type==CKEDITOR.NODE_ELEMENT&&o[c.getName()]&&(d=c)));e--)a.shrink(CKEDITOR.SHRINK_ELEMENT);return d&&d.$});return a.selectedElement=c?new CKEDITOR.dom.element(c):null},getSelectedText:function(){var a=this._.cache;
if(a.selectedText!==void 0)return a.selectedText;var b=this.getNative(),b=A?b.type=="Control"?"":b.createRange().text:b.toString();return a.selectedText=b},lock:function(){this.getRanges();this.getStartElement();this.getSelectedElement();this.getSelectedText();this._.cache.nativeSel=null;this.isLocked=1},unlock:function(a){if(this.isLocked){if(a)var b=this.getSelectedElement(),c=!b&&this.getRanges(),d=this.isFake;this.isLocked=0;this.reset();if(a)(a=b||c[0]&&c[0].getCommonAncestor())&&a.getAscendant("body",
1)&&(d?this.fake(b):b?this.selectElement(b):this.selectRanges(c))}},reset:function(){this._.cache={};this.isFake=0;var a=this.root.editor;if(a&&a._.fakeSelection&&this.rev==a._.fakeSelection.rev){delete a._.fakeSelection;var b=a._.hiddenSelectionContainer;if(b){var c=a.checkDirty();a.fire("lockSnapshot");b.remove();a.fire("unlockSnapshot");!c&&a.resetDirty()}delete a._.hiddenSelectionContainer}this.rev=u++},selectElement:function(a){var b=new CKEDITOR.dom.range(this.root);b.setStartBefore(a);b.setEndAfter(a);
this.selectRanges([b])},selectRanges:function(a){var b=this.root.editor,b=b&&b._.hiddenSelectionContainer;this.reset();if(b)for(var b=this.root,c,d=0;d<a.length;++d){c=a[d];if(c.endContainer.equals(b))c.endOffset=Math.min(c.endOffset,b.getChildCount())}if(a.length)if(this.isLocked){var f=CKEDITOR.document.getActive();this.unlock();this.selectRanges(a);this.lock();f&&!f.equals(this.root)&&f.focus()}else{var g;a:{var i,j;if(a.length==1&&!(j=a[0]).collapsed&&(g=j.getEnclosedNode())&&g.type==CKEDITOR.NODE_ELEMENT){j=
j.clone();j.shrink(CKEDITOR.SHRINK_ELEMENT,true);if((i=j.getEnclosedNode())&&i.type==CKEDITOR.NODE_ELEMENT)g=i;if(g.getAttribute("contenteditable")=="false")break a}g=void 0}if(g)this.fake(g);else{if(A){j=CKEDITOR.dom.walker.whitespaces(true);i=/\ufeff|\u00a0/;b={table:1,tbody:1,tr:1};if(a.length>1){g=a[a.length-1];a[0].setEnd(g.endContainer,g.endOffset)}g=a[0];var a=g.collapsed,m,k,v;if((c=g.getEnclosedNode())&&c.type==CKEDITOR.NODE_ELEMENT&&c.getName()in o&&(!c.is("a")||!c.getText()))try{v=c.$.createControlRange();
v.addElement(c.$);v.select();return}catch(q){}if(g.startContainer.type==CKEDITOR.NODE_ELEMENT&&g.startContainer.getName()in b||g.endContainer.type==CKEDITOR.NODE_ELEMENT&&g.endContainer.getName()in b){g.shrink(CKEDITOR.NODE_ELEMENT,true);a=g.collapsed}v=g.createBookmark();b=v.startNode;if(!a)f=v.endNode;v=g.document.$.body.createTextRange();v.moveToElementText(b.$);v.moveStart("character",1);if(f){i=g.document.$.body.createTextRange();i.moveToElementText(f.$);v.setEndPoint("EndToEnd",i);v.moveEnd("character",
-1)}else{m=b.getNext(j);k=b.hasAscendant("pre");m=!(m&&m.getText&&m.getText().match(i))&&(k||!b.hasPrevious()||b.getPrevious().is&&b.getPrevious().is("br"));k=g.document.createElement("span");k.setHtml("&#65279;");k.insertBefore(b);m&&g.document.createText("﻿").insertBefore(b)}g.setStartBefore(b);b.remove();if(a){if(m){v.moveStart("character",-1);v.select();g.document.$.selection.clear()}else v.select();g.moveToPosition(k,CKEDITOR.POSITION_BEFORE_START);k.remove()}else{g.setEndBefore(f);f.remove();
v.select()}}else{f=this.getNative();if(!f)return;this.removeAllRanges();for(v=0;v<a.length;v++){if(v<a.length-1){m=a[v];k=a[v+1];i=m.clone();i.setStart(m.endContainer,m.endOffset);i.setEnd(k.startContainer,k.startOffset);if(!i.collapsed){i.shrink(CKEDITOR.NODE_ELEMENT,true);g=i.getCommonAncestor();i=i.getEnclosedNode();if(g.isReadOnly()||i&&i.isReadOnly()){k.setStart(m.startContainer,m.startOffset);a.splice(v--,1);continue}}}g=a[v];k=this.document.$.createRange();if(g.collapsed&&CKEDITOR.env.webkit&&
e(g)){m=this.root;h(m,false);i=m.getDocument().createText("​");m.setCustomData("cke-fillingChar",i);g.insertNode(i);if((m=i.getNext())&&!i.getPrevious()&&m.type==CKEDITOR.NODE_ELEMENT&&m.getName()=="br"){h(this.root);g.moveToPosition(m,CKEDITOR.POSITION_BEFORE_START)}else g.moveToPosition(i,CKEDITOR.POSITION_AFTER_END)}k.setStart(g.startContainer.$,g.startOffset);try{k.setEnd(g.endContainer.$,g.endOffset)}catch(z){if(z.toString().indexOf("NS_ERROR_ILLEGAL_VALUE")>=0){g.collapse(1);k.setEnd(g.endContainer.$,
g.endOffset)}else throw z;}f.addRange(k)}}this.reset();this.root.fire("selectionchange")}}},fake:function(a){var b=this.root.editor;this.reset();m(b);var c=this._.cache,d=new CKEDITOR.dom.range(this.root);d.setStartBefore(a);d.setEndAfter(a);c.ranges=new CKEDITOR.dom.rangeList(d);c.selectedElement=c.startElement=a;c.type=CKEDITOR.SELECTION_ELEMENT;c.selectedText=c.nativeSel=null;this.isFake=1;this.rev=u++;b._.fakeSelection=this;this.root.fire("selectionchange")},isHidden:function(){var a=this.getCommonAncestor();
a&&a.type==CKEDITOR.NODE_TEXT&&(a=a.getParent());return!(!a||!a.data("cke-hidden-sel"))},createBookmarks:function(a){a=this.getRanges().createBookmarks(a);this.isFake&&(a.isFake=1);return a},createBookmarks2:function(a){a=this.getRanges().createBookmarks2(a);this.isFake&&(a.isFake=1);return a},selectBookmarks:function(a){for(var b=[],c=0;c<a.length;c++){var d=new CKEDITOR.dom.range(this.root);d.moveToBookmark(a[c]);b.push(d)}a.isFake?this.fake(b[0].getEnclosedNode()):this.selectRanges(b);return this},
getCommonAncestor:function(){var a=this.getRanges();return!a.length?null:a[0].startContainer.getCommonAncestor(a[a.length-1].endContainer)},scrollIntoView:function(){this.type!=CKEDITOR.SELECTION_NONE&&this.getRanges()[0].scrollIntoView()},removeAllRanges:function(){if(this.getType()!=CKEDITOR.SELECTION_NONE){var a=this.getNative();try{a&&a[A?"empty":"removeAllRanges"]()}catch(b){}this.reset()}}}})();"use strict";CKEDITOR.STYLE_BLOCK=1;CKEDITOR.STYLE_INLINE=2;CKEDITOR.STYLE_OBJECT=3;
(function(){function a(a,b){for(var c,d;a=a.getParent();){if(a.equals(b))break;if(a.getAttribute("data-nostyle"))c=a;else if(!d){var e=a.getAttribute("contentEditable");e=="false"?c=a:e=="true"&&(d=1)}}return c}function f(b){var d=b.document;if(b.collapsed){d=i(this,d);b.insertNode(d);b.moveToPosition(d,CKEDITOR.POSITION_BEFORE_END)}else{var e=this.element,g=this._.definition,h,j=g.ignoreReadonly,m=j||g.includeReadonly;m==null&&(m=b.root.getCustomData("cke_includeReadonly"));var k=CKEDITOR.dtd[e];
if(!k){h=true;k=CKEDITOR.dtd.span}b.enlarge(CKEDITOR.ENLARGE_INLINE,1);b.trim();var l=b.createBookmark(),q=l.startNode,o=l.endNode,n=q,p;if(!j){var s=b.getCommonAncestor(),j=a(q,s),s=a(o,s);j&&(n=j.getNextSourceNode(true));s&&(o=s)}for(n.getPosition(o)==CKEDITOR.POSITION_FOLLOWING&&(n=0);n;){j=false;if(n.equals(o)){n=null;j=true}else{var r=n.type==CKEDITOR.NODE_ELEMENT?n.getName():null,s=r&&n.getAttribute("contentEditable")=="false",t=r&&n.getAttribute("data-nostyle");if(r&&n.data("cke-bookmark")){n=
n.getNextSourceNode(true);continue}if(s&&m&&CKEDITOR.dtd.$block[r])for(var y=n,u=c(y),A=void 0,C=u.length,F=0,y=C&&new CKEDITOR.dom.range(y.getDocument());F<C;++F){var A=u[F],P=CKEDITOR.filter.instances[A.data("cke-filter")];if(P?P.check(this):1){y.selectNodeContents(A);f.call(this,y)}}u=r?!k[r]||t?0:s&&!m?0:(n.getPosition(o)|K)==K&&(!g.childRule||g.childRule(n)):1;if(u)if((u=n.getParent())&&((u.getDtd()||CKEDITOR.dtd.span)[e]||h)&&(!g.parentRule||g.parentRule(u))){if(!p&&(!r||!CKEDITOR.dtd.$removeEmpty[r]||
(n.getPosition(o)|K)==K)){p=b.clone();p.setStartBefore(n)}r=n.type;if(r==CKEDITOR.NODE_TEXT||s||r==CKEDITOR.NODE_ELEMENT&&!n.getChildCount()){for(var r=n,U;(j=!r.getNext(L))&&(U=r.getParent(),k[U.getName()])&&(U.getPosition(q)|I)==I&&(!g.childRule||g.childRule(U));)r=U;p.setEndAfter(r)}}else j=true;else j=true;n=n.getNextSourceNode(t||s)}if(j&&p&&!p.collapsed){for(var j=i(this,d),s=j.hasAttributes(),t=p.getCommonAncestor(),r={},u={},A={},C={},N,R,X;j&&t;){if(t.getName()==e){for(N in g.attributes)if(!C[N]&&
(X=t.getAttribute(R)))j.getAttribute(N)==X?u[N]=1:C[N]=1;for(R in g.styles)if(!A[R]&&(X=t.getStyle(R)))j.getStyle(R)==X?r[R]=1:A[R]=1}t=t.getParent()}for(N in u)j.removeAttribute(N);for(R in r)j.removeStyle(R);s&&!j.hasAttributes()&&(j=null);if(j){p.extractContents().appendTo(j);p.insertNode(j);w.call(this,j);j.mergeSiblings();CKEDITOR.env.ie||j.$.normalize()}else{j=new CKEDITOR.dom.element("span");p.extractContents().appendTo(j);p.insertNode(j);w.call(this,j);j.remove(true)}p=null}}b.moveToBookmark(l);
b.shrink(CKEDITOR.SHRINK_TEXT);b.shrink(CKEDITOR.NODE_ELEMENT,true)}}function b(a){function b(){for(var a=new CKEDITOR.dom.elementPath(d.getParent()),c=new CKEDITOR.dom.elementPath(j.getParent()),e=null,f=null,g=0;g<a.elements.length;g++){var h=a.elements[g];if(h==a.block||h==a.blockLimit)break;m.checkElementRemovable(h,true)&&(e=h)}for(g=0;g<c.elements.length;g++){h=c.elements[g];if(h==c.block||h==c.blockLimit)break;m.checkElementRemovable(h,true)&&(f=h)}f&&j.breakParent(f);e&&d.breakParent(e)}a.enlarge(CKEDITOR.ENLARGE_INLINE,
1);var c=a.createBookmark(),d=c.startNode;if(a.collapsed){for(var e=new CKEDITOR.dom.elementPath(d.getParent(),a.root),f,g=0,h;g<e.elements.length&&(h=e.elements[g]);g++){if(h==e.block||h==e.blockLimit)break;if(this.checkElementRemovable(h)){var i;if(a.collapsed&&(a.checkBoundaryOfElement(h,CKEDITOR.END)||(i=a.checkBoundaryOfElement(h,CKEDITOR.START)))){f=h;f.match=i?"start":"end"}else{h.mergeSiblings();h.is(this.element)?s.call(this,h):q(h,o(this)[h.getName()])}}}if(f){h=d;for(g=0;;g++){i=e.elements[g];
if(i.equals(f))break;else if(i.match)continue;else i=i.clone();i.append(h);h=i}h[f.match=="start"?"insertBefore":"insertAfter"](f)}}else{var j=c.endNode,m=this;b();for(e=d;!e.equals(j);){f=e.getNextSourceNode();if(e.type==CKEDITOR.NODE_ELEMENT&&this.checkElementRemovable(e)){e.getName()==this.element?s.call(this,e):q(e,o(this)[e.getName()]);if(f.type==CKEDITOR.NODE_ELEMENT&&f.contains(d)){b();f=d.getNext()}}e=f}}a.moveToBookmark(c);a.shrink(CKEDITOR.NODE_ELEMENT,true)}function c(a){var b=[];a.forEach(function(a){if(a.getAttribute("contenteditable")==
"true"){b.push(a);return false}},CKEDITOR.NODE_ELEMENT,true);return b}function e(a){var b=a.getEnclosedNode()||a.getCommonAncestor(false,true);(a=(new CKEDITOR.dom.elementPath(b,a.root)).contains(this.element,1))&&!a.isReadOnly()&&A(a,this)}function d(a){var b=a.getCommonAncestor(true,true);if(a=(new CKEDITOR.dom.elementPath(b,a.root)).contains(this.element,1)){var b=this._.definition,c=b.attributes;if(c)for(var d in c)a.removeAttribute(d,c[d]);if(b.styles)for(var e in b.styles)b.styles.hasOwnProperty(e)&&
a.removeStyle(e)}}function h(a){var b=a.createBookmark(true),c=a.createIterator();c.enforceRealBlocks=true;if(this._.enterMode)c.enlargeBr=this._.enterMode!=CKEDITOR.ENTER_BR;for(var d,e=a.document,f;d=c.getNextParagraph();)if(!d.isReadOnly()&&(c.activeFilter?c.activeFilter.check(this):1)){f=i(this,e,d);j(d,f)}a.moveToBookmark(b)}function k(a){var b=a.createBookmark(1),c=a.createIterator();c.enforceRealBlocks=true;c.enlargeBr=this._.enterMode!=CKEDITOR.ENTER_BR;for(var d,e;d=c.getNextParagraph();)if(this.checkElementRemovable(d))if(d.is("pre")){(e=
this._.enterMode==CKEDITOR.ENTER_BR?null:a.document.createElement(this._.enterMode==CKEDITOR.ENTER_P?"p":"div"))&&d.copyAttributes(e);j(d,e)}else s.call(this,d);a.moveToBookmark(b)}function j(a,b){var c=!b;if(c){b=a.getDocument().createElement("div");a.copyAttributes(b)}var d=b&&b.is("pre"),e=a.is("pre"),f=!d&&e;if(d&&!e){e=b;(f=a.getBogus())&&f.remove();f=a.getHtml();f=m(f,/(?:^[ \t\n\r]+)|(?:[ \t\n\r]+$)/g,"");f=f.replace(/[ \t\r\n]*(<br[^>]*>)[ \t\r\n]*/gi,"$1");f=f.replace(/([ \t\n\r]+|&nbsp;)/g,
" ");f=f.replace(/<br\b[^>]*>/gi,"\n");if(CKEDITOR.env.ie){var h=a.getDocument().createElement("div");h.append(e);e.$.outerHTML="<pre>"+f+"</pre>";e.copyAttributes(h.getFirst());e=h.getFirst().remove()}else e.setHtml(f);b=e}else f?b=y(c?[a.getHtml()]:g(a),b):a.moveChildren(b);b.replace(a);if(d){var c=b,i;if((i=c.getPrevious(F))&&i.type==CKEDITOR.NODE_ELEMENT&&i.is("pre")){d=m(i.getHtml(),/\n$/,"")+"\n\n"+m(c.getHtml(),/^\n/,"");CKEDITOR.env.ie?c.$.outerHTML="<pre>"+d+"</pre>":c.setHtml(d);i.remove()}}else c&&
t(b)}function g(a){var b=[];m(a.getOuterHtml(),/(\S\s*)\n(?:\s|(<span[^>]+data-cke-bookmark.*?\/span>))*\n(?!$)/gi,function(a,b,c){return b+"</pre>"+c+"<pre>"}).replace(/<pre\b.*?>([\s\S]*?)<\/pre>/gi,function(a,c){b.push(c)});return b}function m(a,b,c){var d="",e="",a=a.replace(/(^<span[^>]+data-cke-bookmark.*?\/span>)|(<span[^>]+data-cke-bookmark.*?\/span>$)/gi,function(a,b,c){b&&(d=b);c&&(e=c);return""});return d+a.replace(b,c)+e}function y(a,b){var c;a.length>1&&(c=new CKEDITOR.dom.documentFragment(b.getDocument()));
for(var d=0;d<a.length;d++){var e=a[d],e=e.replace(/(\r\n|\r)/g,"\n"),e=m(e,/^[ \t]*\n/,""),e=m(e,/\n$/,""),e=m(e,/^[ \t]+|[ \t]+$/g,function(a,b){return a.length==1?"&nbsp;":b?" "+CKEDITOR.tools.repeat("&nbsp;",a.length-1):CKEDITOR.tools.repeat("&nbsp;",a.length-1)+" "}),e=e.replace(/\n/g,"<br>"),e=e.replace(/[ \t]{2,}/g,function(a){return CKEDITOR.tools.repeat("&nbsp;",a.length-1)+" "});if(c){var f=b.clone();f.setHtml(e);c.append(f)}else b.setHtml(e)}return c||b}function s(a,b){var c=this._.definition,
d=c.attributes,c=c.styles,e=o(this)[a.getName()],f=CKEDITOR.tools.isEmpty(d)&&CKEDITOR.tools.isEmpty(c),g;for(g in d)if(!((g=="class"||this._.definition.fullMatch)&&a.getAttribute(g)!=l(g,d[g]))&&!(b&&g.slice(0,5)=="data-")){f=a.hasAttribute(g);a.removeAttribute(g)}for(var h in c)if(!(this._.definition.fullMatch&&a.getStyle(h)!=l(h,c[h],true))){f=f||!!a.getStyle(h);a.removeStyle(h)}q(a,e,r[a.getName()]);f&&(this._.definition.alwaysRemoveElement?t(a,1):!CKEDITOR.dtd.$block[a.getName()]||this._.enterMode==
CKEDITOR.ENTER_BR&&!a.hasAttributes()?t(a):a.renameNode(this._.enterMode==CKEDITOR.ENTER_P?"p":"div"))}function w(a){for(var b=o(this),c=a.getElementsByTag(this.element),d,e=c.count();--e>=0;){d=c.getItem(e);d.isReadOnly()||s.call(this,d,true)}for(var f in b)if(f!=this.element){c=a.getElementsByTag(f);for(e=c.count()-1;e>=0;e--){d=c.getItem(e);d.isReadOnly()||q(d,b[f])}}}function q(a,b,c){if(b=b&&b.attributes)for(var d=0;d<b.length;d++){var e=b[d][0],f;if(f=a.getAttribute(e)){var g=b[d][1];(g===null||
g.test&&g.test(f)||typeof g=="string"&&f==g)&&a.removeAttribute(e)}}c||t(a)}function t(a,b){if(!a.hasAttributes()||b)if(CKEDITOR.dtd.$block[a.getName()]){var c=a.getPrevious(F),d=a.getNext(F);c&&(c.type==CKEDITOR.NODE_TEXT||!c.isBlockBoundary({br:1}))&&a.append("br",1);d&&(d.type==CKEDITOR.NODE_TEXT||!d.isBlockBoundary({br:1}))&&a.append("br");a.remove(true)}else{c=a.getFirst();d=a.getLast();a.remove(true);if(c){c.type==CKEDITOR.NODE_ELEMENT&&c.mergeSiblings();d&&(!c.equals(d)&&d.type==CKEDITOR.NODE_ELEMENT)&&
d.mergeSiblings()}}}function i(a,b,c){var d;d=a.element;d=="*"&&(d="span");d=new CKEDITOR.dom.element(d,b);c&&c.copyAttributes(d);d=A(d,a);b.getCustomData("doc_processing_style")&&d.hasAttribute("id")?d.removeAttribute("id"):b.setCustomData("doc_processing_style",1);return d}function A(a,b){var c=b._.definition,d=c.attributes,c=CKEDITOR.style.getStyleText(c);if(d)for(var e in d)a.setAttribute(e,d[e]);c&&a.setAttribute("style",c);return a}function u(a,b){for(var c in a)a[c]=a[c].replace(C,function(a,
c){return b[c]})}function o(a){if(a._.overrides)return a._.overrides;var b=a._.overrides={},c=a._.definition.overrides;if(c){CKEDITOR.tools.isArray(c)||(c=[c]);for(var d=0;d<c.length;d++){var e=c[d],f,g;if(typeof e=="string")f=e.toLowerCase();else{f=e.element?e.element.toLowerCase():a.element;g=e.attributes}e=b[f]||(b[f]={});if(g){var e=e.attributes=e.attributes||[],h;for(h in g)e.push([h.toLowerCase(),g[h]])}}}return b}function l(a,b,c){var d=new CKEDITOR.dom.element("span");d[c?"setStyle":"setAttribute"](a,
b);return d[c?"getStyle":"getAttribute"](a)}function p(a,b,c){for(var d=a.document,e=a.getRanges(),b=b?this.removeFromRange:this.applyToRange,f,g=e.createIterator();f=g.getNextRange();)b.call(this,f,c);a.selectRanges(e);d.removeCustomData("doc_processing_style")}var r={address:1,div:1,h1:1,h2:1,h3:1,h4:1,h5:1,h6:1,p:1,pre:1,section:1,header:1,footer:1,nav:1,article:1,aside:1,figure:1,dialog:1,hgroup:1,time:1,meter:1,menu:1,command:1,keygen:1,output:1,progress:1,details:1,datagrid:1,datalist:1},n=
{a:1,blockquote:1,embed:1,hr:1,img:1,li:1,object:1,ol:1,table:1,td:1,tr:1,th:1,ul:1,dl:1,dt:1,dd:1,form:1,audio:1,video:1},P=/\s*(?:;\s*|$)/,C=/#\((.+?)\)/g,L=CKEDITOR.dom.walker.bookmark(0,1),F=CKEDITOR.dom.walker.whitespaces(1);CKEDITOR.style=function(a,b){if(typeof a.type=="string")return new CKEDITOR.style.customHandlers[a.type](a);var c=a.attributes;if(c&&c.style){a.styles=CKEDITOR.tools.extend({},a.styles,CKEDITOR.tools.parseCssText(c.style));delete c.style}if(b){a=CKEDITOR.tools.clone(a);u(a.attributes,
b);u(a.styles,b)}c=this.element=a.element?typeof a.element=="string"?a.element.toLowerCase():a.element:"*";this.type=a.type||(r[c]?CKEDITOR.STYLE_BLOCK:n[c]?CKEDITOR.STYLE_OBJECT:CKEDITOR.STYLE_INLINE);if(typeof this.element=="object")this.type=CKEDITOR.STYLE_OBJECT;this._={definition:a}};CKEDITOR.style.prototype={apply:function(a){if(a instanceof CKEDITOR.dom.document)return p.call(this,a.getSelection());if(this.checkApplicable(a.elementPath(),a)){var b=this._.enterMode;if(!b)this._.enterMode=a.activeEnterMode;
p.call(this,a.getSelection(),0,a);this._.enterMode=b}},remove:function(a){if(a instanceof CKEDITOR.dom.document)return p.call(this,a.getSelection(),1);if(this.checkApplicable(a.elementPath(),a)){var b=this._.enterMode;if(!b)this._.enterMode=a.activeEnterMode;p.call(this,a.getSelection(),1,a);this._.enterMode=b}},applyToRange:function(a){this.applyToRange=this.type==CKEDITOR.STYLE_INLINE?f:this.type==CKEDITOR.STYLE_BLOCK?h:this.type==CKEDITOR.STYLE_OBJECT?e:null;return this.applyToRange(a)},removeFromRange:function(a){this.removeFromRange=
this.type==CKEDITOR.STYLE_INLINE?b:this.type==CKEDITOR.STYLE_BLOCK?k:this.type==CKEDITOR.STYLE_OBJECT?d:null;return this.removeFromRange(a)},applyToObject:function(a){A(a,this)},checkActive:function(a,b){switch(this.type){case CKEDITOR.STYLE_BLOCK:return this.checkElementRemovable(a.block||a.blockLimit,true,b);case CKEDITOR.STYLE_OBJECT:case CKEDITOR.STYLE_INLINE:for(var c=a.elements,d=0,e;d<c.length;d++){e=c[d];if(!(this.type==CKEDITOR.STYLE_INLINE&&(e==a.block||e==a.blockLimit))){if(this.type==
CKEDITOR.STYLE_OBJECT){var f=e.getName();if(!(typeof this.element=="string"?f==this.element:f in this.element))continue}if(this.checkElementRemovable(e,true,b))return true}}}return false},checkApplicable:function(a,b,c){b&&b instanceof CKEDITOR.filter&&(c=b);if(c&&!c.check(this))return false;switch(this.type){case CKEDITOR.STYLE_OBJECT:return!!a.contains(this.element);case CKEDITOR.STYLE_BLOCK:return!!a.blockLimit.getDtd()[this.element]}return true},checkElementMatch:function(a,b){var c=this._.definition;
if(!a||!c.ignoreReadonly&&a.isReadOnly())return false;var d=a.getName();if(typeof this.element=="string"?d==this.element:d in this.element){if(!b&&!a.hasAttributes())return true;if(d=c._AC)c=d;else{var d={},e=0,f=c.attributes;if(f)for(var g in f){e++;d[g]=f[g]}if(g=CKEDITOR.style.getStyleText(c)){d.style||e++;d.style=g}d._length=e;c=c._AC=d}if(c._length){for(var h in c)if(h!="_length"){e=a.getAttribute(h)||"";if(h=="style")a:{d=c[h];typeof d=="string"&&(d=CKEDITOR.tools.parseCssText(d));typeof e==
"string"&&(e=CKEDITOR.tools.parseCssText(e,true));g=void 0;for(g in d)if(!(g in e&&(e[g]==d[g]||d[g]=="inherit"||e[g]=="inherit"))){d=false;break a}d=true}else d=c[h]==e;if(d){if(!b)return true}else if(b)return false}if(b)return true}else return true}return false},checkElementRemovable:function(a,b,c){if(this.checkElementMatch(a,b,c))return true;if(b=o(this)[a.getName()]){var d;if(!(b=b.attributes))return true;for(c=0;c<b.length;c++){d=b[c][0];if(d=a.getAttribute(d)){var e=b[c][1];if(e===null)return true;
if(typeof e=="string"){if(d==e)return true}else if(e.test(d))return true}}}return false},buildPreview:function(a){var b=this._.definition,c=[],d=b.element;d=="bdo"&&(d="span");var c=["<",d],e=b.attributes;if(e)for(var f in e)c.push(" ",f,'="',e[f],'"');(e=CKEDITOR.style.getStyleText(b))&&c.push(' style="',e,'"');c.push(">",a||b.name,"</",d,">");return c.join("")},getDefinition:function(){return this._.definition}};CKEDITOR.style.getStyleText=function(a){var b=a._ST;if(b)return b;var b=a.styles,c=
a.attributes&&a.attributes.style||"",d="";c.length&&(c=c.replace(P,";"));for(var e in b){var f=b[e],g=(e+":"+f).replace(P,";");f=="inherit"?d=d+g:c=c+g}c.length&&(c=CKEDITOR.tools.normalizeCssText(c,true));return a._ST=c+d};CKEDITOR.style.customHandlers={};CKEDITOR.style.addCustomHandler=function(a){var b=function(a){this._={definition:a};this.setup&&this.setup(a)};b.prototype=CKEDITOR.tools.extend(CKEDITOR.tools.prototypedCopy(CKEDITOR.style.prototype),{assignedTo:CKEDITOR.STYLE_OBJECT},a,true);
return this.customHandlers[a.type]=b};var K=CKEDITOR.POSITION_PRECEDING|CKEDITOR.POSITION_IDENTICAL|CKEDITOR.POSITION_IS_CONTAINED,I=CKEDITOR.POSITION_FOLLOWING|CKEDITOR.POSITION_IDENTICAL|CKEDITOR.POSITION_IS_CONTAINED})();CKEDITOR.styleCommand=function(a,f){this.requiredContent=this.allowedContent=this.style=a;CKEDITOR.tools.extend(this,f,true)};
CKEDITOR.styleCommand.prototype.exec=function(a){a.focus();this.state==CKEDITOR.TRISTATE_OFF?a.applyStyle(this.style):this.state==CKEDITOR.TRISTATE_ON&&a.removeStyle(this.style)};CKEDITOR.stylesSet=new CKEDITOR.resourceManager("","stylesSet");CKEDITOR.addStylesSet=CKEDITOR.tools.bind(CKEDITOR.stylesSet.add,CKEDITOR.stylesSet);CKEDITOR.loadStylesSet=function(a,f,b){CKEDITOR.stylesSet.addExternal(a,f,"");CKEDITOR.stylesSet.load(a,b)};
CKEDITOR.tools.extend(CKEDITOR.editor.prototype,{attachStyleStateChange:function(a,f){var b=this._.styleStateChangeCallbacks;if(!b){b=this._.styleStateChangeCallbacks=[];this.on("selectionChange",function(a){for(var e=0;e<b.length;e++){var d=b[e],f=d.style.checkActive(a.data.path,this)?CKEDITOR.TRISTATE_ON:CKEDITOR.TRISTATE_OFF;d.fn.call(this,f)}})}b.push({style:a,fn:f})},applyStyle:function(a){a.apply(this)},removeStyle:function(a){a.remove(this)},getStylesSet:function(a){if(this._.stylesDefinitions)a(this._.stylesDefinitions);
else{var f=this,b=f.config.stylesCombo_stylesSet||f.config.stylesSet;if(b===false)a(null);else if(b instanceof Array){f._.stylesDefinitions=b;a(b)}else{b||(b="default");var b=b.split(":"),c=b[0];CKEDITOR.stylesSet.addExternal(c,b[1]?b.slice(1).join(":"):CKEDITOR.getUrl("styles.js"),"");CKEDITOR.stylesSet.load(c,function(b){f._.stylesDefinitions=b[c];a(f._.stylesDefinitions)})}}}});
CKEDITOR.dom.comment=function(a,f){typeof a=="string"&&(a=(f?f.$:document).createComment(a));CKEDITOR.dom.domObject.call(this,a)};CKEDITOR.dom.comment.prototype=new CKEDITOR.dom.node;CKEDITOR.tools.extend(CKEDITOR.dom.comment.prototype,{type:CKEDITOR.NODE_COMMENT,getOuterHtml:function(){return"<\!--"+this.$.nodeValue+"--\>"}});"use strict";
(function(){var a={},f={},b;for(b in CKEDITOR.dtd.$blockLimit)b in CKEDITOR.dtd.$list||(a[b]=1);for(b in CKEDITOR.dtd.$block)b in CKEDITOR.dtd.$blockLimit||b in CKEDITOR.dtd.$empty||(f[b]=1);CKEDITOR.dom.elementPath=function(b,e){var d=null,h=null,k=[],j=b,g,e=e||b.getDocument().getBody();do if(j.type==CKEDITOR.NODE_ELEMENT){k.push(j);if(!this.lastElement){this.lastElement=j;if(j.is(CKEDITOR.dtd.$object)||j.getAttribute("contenteditable")=="false")continue}if(j.equals(e))break;if(!h){g=j.getName();
j.getAttribute("contenteditable")=="true"?h=j:!d&&f[g]&&(d=j);if(a[g]){var m;if(m=!d){if(g=g=="div"){a:{g=j.getChildren();m=0;for(var y=g.count();m<y;m++){var s=g.getItem(m);if(s.type==CKEDITOR.NODE_ELEMENT&&CKEDITOR.dtd.$block[s.getName()]){g=true;break a}}g=false}g=!g}m=g}m?d=j:h=j}}}while(j=j.getParent());h||(h=e);this.block=d;this.blockLimit=h;this.root=e;this.elements=k}})();
CKEDITOR.dom.elementPath.prototype={compare:function(a){var f=this.elements,a=a&&a.elements;if(!a||f.length!=a.length)return false;for(var b=0;b<f.length;b++)if(!f[b].equals(a[b]))return false;return true},contains:function(a,f,b){var c;typeof a=="string"&&(c=function(b){return b.getName()==a});a instanceof CKEDITOR.dom.element?c=function(b){return b.equals(a)}:CKEDITOR.tools.isArray(a)?c=function(b){return CKEDITOR.tools.indexOf(a,b.getName())>-1}:typeof a=="function"?c=a:typeof a=="object"&&(c=
function(b){return b.getName()in a});var e=this.elements,d=e.length;f&&d--;if(b){e=Array.prototype.slice.call(e,0);e.reverse()}for(f=0;f<d;f++)if(c(e[f]))return e[f];return null},isContextFor:function(a){var f;if(a in CKEDITOR.dtd.$block){f=this.contains(CKEDITOR.dtd.$intermediate)||this.root.equals(this.block)&&this.block||this.blockLimit;return!!f.getDtd()[a]}return true},direction:function(){return(this.block||this.blockLimit||this.root).getDirection(1)}};
CKEDITOR.dom.text=function(a,f){typeof a=="string"&&(a=(f?f.$:document).createTextNode(a));this.$=a};CKEDITOR.dom.text.prototype=new CKEDITOR.dom.node;
CKEDITOR.tools.extend(CKEDITOR.dom.text.prototype,{type:CKEDITOR.NODE_TEXT,getLength:function(){return this.$.nodeValue.length},getText:function(){return this.$.nodeValue},setText:function(a){this.$.nodeValue=a},split:function(a){var f=this.$.parentNode,b=f.childNodes.length,c=this.getLength(),e=this.getDocument(),d=new CKEDITOR.dom.text(this.$.splitText(a),e);if(f.childNodes.length==b)if(a>=c){d=e.createText("");d.insertAfter(this)}else{a=e.createText("");a.insertAfter(d);a.remove()}return d},substring:function(a,
f){return typeof f!="number"?this.$.nodeValue.substr(a):this.$.nodeValue.substring(a,f)}});
(function(){function a(a,c,e){var d=a.serializable,f=c[e?"endContainer":"startContainer"],k=e?"endOffset":"startOffset",j=d?c.document.getById(a.startNode):a.startNode,a=d?c.document.getById(a.endNode):a.endNode;if(f.equals(j.getPrevious())){c.startOffset=c.startOffset-f.getLength()-a.getPrevious().getLength();f=a.getNext()}else if(f.equals(a.getPrevious())){c.startOffset=c.startOffset-f.getLength();f=a.getNext()}f.equals(j.getParent())&&c[k]++;f.equals(a.getParent())&&c[k]++;c[e?"endContainer":"startContainer"]=
f;return c}CKEDITOR.dom.rangeList=function(a){if(a instanceof CKEDITOR.dom.rangeList)return a;a?a instanceof CKEDITOR.dom.range&&(a=[a]):a=[];return CKEDITOR.tools.extend(a,f)};var f={createIterator:function(){var a=this,c=CKEDITOR.dom.walker.bookmark(),e=[],d;return{getNextRange:function(f){d=d===void 0?0:d+1;var k=a[d];if(k&&a.length>1){if(!d)for(var j=a.length-1;j>=0;j--)e.unshift(a[j].createBookmark(true));if(f)for(var g=0;a[d+g+1];){for(var m=k.document,f=0,j=m.getById(e[g].endNode),m=m.getById(e[g+
1].startNode);;){j=j.getNextSourceNode(false);if(m.equals(j))f=1;else if(c(j)||j.type==CKEDITOR.NODE_ELEMENT&&j.isBlockBoundary())continue;break}if(!f)break;g++}for(k.moveToBookmark(e.shift());g--;){j=a[++d];j.moveToBookmark(e.shift());k.setEnd(j.endContainer,j.endOffset)}}return k}}},createBookmarks:function(b){for(var c=[],e,d=0;d<this.length;d++){c.push(e=this[d].createBookmark(b,true));for(var f=d+1;f<this.length;f++){this[f]=a(e,this[f]);this[f]=a(e,this[f],true)}}return c},createBookmarks2:function(a){for(var c=
[],e=0;e<this.length;e++)c.push(this[e].createBookmark2(a));return c},moveToBookmarks:function(a){for(var c=0;c<this.length;c++)this[c].moveToBookmark(a[c])}}})();
(function(){function a(){return CKEDITOR.getUrl(CKEDITOR.skinName.split(",")[1]||"skins/"+CKEDITOR.skinName.split(",")[0]+"/")}function f(b){var c=CKEDITOR.skin["ua_"+b],d=CKEDITOR.env;if(c)for(var c=c.split(",").sort(function(a,b){return a>b?-1:1}),e=0,f;e<c.length;e++){f=c[e];if(d.ie&&(f.replace(/^ie/,"")==d.version||d.quirks&&f=="iequirks"))f="ie";if(d[f]){b=b+("_"+c[e]);break}}return CKEDITOR.getUrl(a()+b+".css")}function b(a,b){if(!d[a]){CKEDITOR.document.appendStyleSheet(f(a));d[a]=1}b&&b()}
function c(a){var b=a.getById(h);if(!b){b=a.getHead().append("style");b.setAttribute("id",h);b.setAttribute("type","text/css")}return b}function e(a,b,c){var d,e,f;if(CKEDITOR.env.webkit){b=b.split("}").slice(0,-1);for(e=0;e<b.length;e++)b[e]=b[e].split("{")}for(var h=0;h<a.length;h++)if(CKEDITOR.env.webkit)for(e=0;e<b.length;e++){f=b[e][1];for(d=0;d<c.length;d++)f=f.replace(c[d][0],c[d][1]);a[h].$.sheet.addRule(b[e][0],f)}else{f=b;for(d=0;d<c.length;d++)f=f.replace(c[d][0],c[d][1]);CKEDITOR.env.ie&&
CKEDITOR.env.version<11?a[h].$.styleSheet.cssText=a[h].$.styleSheet.cssText+f:a[h].$.innerHTML=a[h].$.innerHTML+f}}var d={};CKEDITOR.skin={path:a,loadPart:function(c,d){CKEDITOR.skin.name!=CKEDITOR.skinName.split(",")[0]?CKEDITOR.scriptLoader.load(CKEDITOR.getUrl(a()+"skin.js"),function(){b(c,d)}):b(c,d)},getPath:function(a){return CKEDITOR.getUrl(f(a))},icons:{},addIcon:function(a,b,c,d){a=a.toLowerCase();this.icons[a]||(this.icons[a]={path:b,offset:c||0,bgsize:d||"16px"})},getIconStyle:function(a,
b,c,d,e){var f;if(a){a=a.toLowerCase();b&&(f=this.icons[a+"-rtl"]);f||(f=this.icons[a])}a=c||f&&f.path||"";d=d||f&&f.offset;e=e||f&&f.bgsize||"16px";return a&&"background-image:url("+CKEDITOR.getUrl(a)+");background-position:0 "+d+"px;background-size:"+e+";"}};CKEDITOR.tools.extend(CKEDITOR.editor.prototype,{getUiColor:function(){return this.uiColor},setUiColor:function(a){var b=c(CKEDITOR.document);return(this.setUiColor=function(a){this.uiColor=a;var c=CKEDITOR.skin.chameleon,d="",f="";if(typeof c==
"function"){d=c(this,"editor");f=c(this,"panel")}a=[[j,a]];e([b],d,a);e(k,f,a)}).call(this,a)}});var h="cke_ui_color",k=[],j=/\$color/g;CKEDITOR.on("instanceLoaded",function(a){if(!CKEDITOR.env.ie||!CKEDITOR.env.quirks){var b=a.editor,a=function(a){a=(a.data[0]||a.data).element.getElementsByTag("iframe").getItem(0).getFrameDocument();if(!a.getById("cke_ui_color")){a=c(a);k.push(a);var d=b.getUiColor();d&&e([a],CKEDITOR.skin.chameleon(b,"panel"),[[j,d]])}};b.on("panelShow",a);b.on("menuShow",a);b.config.uiColor&&
b.setUiColor(b.config.uiColor)}})})();
(function(){if(CKEDITOR.env.webkit)CKEDITOR.env.hc=false;else{var a=CKEDITOR.dom.element.createFromHtml('<div style="width:0;height:0;position:absolute;left:-10000px;border:1px solid;border-color:red blue"></div>',CKEDITOR.document);a.appendTo(CKEDITOR.document.getHead());try{var f=a.getComputedStyle("border-top-color"),b=a.getComputedStyle("border-right-color");CKEDITOR.env.hc=!!(f&&f==b)}catch(c){CKEDITOR.env.hc=false}a.remove()}if(CKEDITOR.env.hc)CKEDITOR.env.cssClass=CKEDITOR.env.cssClass+" cke_hc";
CKEDITOR.document.appendStyleText(".cke{visibility:hidden;}");CKEDITOR.status="loaded";CKEDITOR.fireOnce("loaded");if(a=CKEDITOR._.pending){delete CKEDITOR._.pending;for(f=0;f<a.length;f++){CKEDITOR.editor.prototype.constructor.apply(a[f][0],a[f][1]);CKEDITOR.add(a[f][0])}}})();/*
 Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license
*/
CKEDITOR.skin.name="moono";CKEDITOR.skin.ua_editor="ie,iequirks,ie7,ie8,gecko";CKEDITOR.skin.ua_dialog="ie,iequirks,ie7,ie8";
CKEDITOR.skin.chameleon=function(){var b=function(){return function(b,e){for(var a=b.match(/[^#]./g),c=0;3>c;c++){var f=a,h=c,d;d=parseInt(a[c],16);d=("0"+(0>e?0|d*(1+e):0|d+(255-d)*e).toString(16)).slice(-2);f[h]=d}return"#"+a.join("")}}(),c=function(){var b=new CKEDITOR.template("background:#{to};background-image:-webkit-gradient(linear,lefttop,leftbottom,from({from}),to({to}));background-image:-moz-linear-gradient(top,{from},{to});background-image:-webkit-linear-gradient(top,{from},{to});background-image:-o-linear-gradient(top,{from},{to});background-image:-ms-linear-gradient(top,{from},{to});background-image:linear-gradient(top,{from},{to});filter:progid:DXImageTransform.Microsoft.gradient(gradientType=0,startColorstr='{from}',endColorstr='{to}');");return function(c,
a){return b.output({from:c,to:a})}}(),f={editor:new CKEDITOR.template("{id}.cke_chrome [border-color:{defaultBorder};] {id} .cke_top [ {defaultGradient}border-bottom-color:{defaultBorder};] {id} .cke_bottom [{defaultGradient}border-top-color:{defaultBorder};] {id} .cke_resizer [border-right-color:{ckeResizer}] {id} .cke_dialog_title [{defaultGradient}border-bottom-color:{defaultBorder};] {id} .cke_dialog_footer [{defaultGradient}outline-color:{defaultBorder};border-top-color:{defaultBorder};] {id} .cke_dialog_tab [{lightGradient}border-color:{defaultBorder};] {id} .cke_dialog_tab:hover [{mediumGradient}] {id} .cke_dialog_contents [border-top-color:{defaultBorder};] {id} .cke_dialog_tab_selected, {id} .cke_dialog_tab_selected:hover [background:{dialogTabSelected};border-bottom-color:{dialogTabSelectedBorder};] {id} .cke_dialog_body [background:{dialogBody};border-color:{defaultBorder};] {id} .cke_toolgroup [{lightGradient}border-color:{defaultBorder};] {id} a.cke_button_off:hover, {id} a.cke_button_off:focus, {id} a.cke_button_off:active [{mediumGradient}] {id} .cke_button_on [{ckeButtonOn}] {id} .cke_toolbar_separator [background-color: {ckeToolbarSeparator};] {id} .cke_combo_button [border-color:{defaultBorder};{lightGradient}] {id} a.cke_combo_button:hover, {id} a.cke_combo_button:focus, {id} .cke_combo_on a.cke_combo_button [border-color:{defaultBorder};{mediumGradient}] {id} .cke_path_item [color:{elementsPathColor};] {id} a.cke_path_item:hover, {id} a.cke_path_item:focus, {id} a.cke_path_item:active [background-color:{elementsPathBg};] {id}.cke_panel [border-color:{defaultBorder};] "),
panel:new CKEDITOR.template(".cke_panel_grouptitle [{lightGradient}border-color:{defaultBorder};] .cke_menubutton_icon [background-color:{menubuttonIcon};] .cke_menubutton:hover .cke_menubutton_icon, .cke_menubutton:focus .cke_menubutton_icon, .cke_menubutton:active .cke_menubutton_icon [background-color:{menubuttonIconHover};] .cke_menuseparator [background-color:{menubuttonIcon};] a:hover.cke_colorbox, a:focus.cke_colorbox, a:active.cke_colorbox [border-color:{defaultBorder};] a:hover.cke_colorauto, a:hover.cke_colormore, a:focus.cke_colorauto, a:focus.cke_colormore, a:active.cke_colorauto, a:active.cke_colormore [background-color:{ckeColorauto};border-color:{defaultBorder};] ")};
return function(g,e){var a=g.uiColor,a={id:"."+g.id,defaultBorder:b(a,-0.1),defaultGradient:c(b(a,0.9),a),lightGradient:c(b(a,1),b(a,0.7)),mediumGradient:c(b(a,0.8),b(a,0.5)),ckeButtonOn:c(b(a,0.6),b(a,0.7)),ckeResizer:b(a,-0.4),ckeToolbarSeparator:b(a,0.5),ckeColorauto:b(a,0.8),dialogBody:b(a,0.7),dialogTabSelected:c("#FFFFFF","#FFFFFF"),dialogTabSelectedBorder:"#FFF",elementsPathColor:b(a,-0.6),elementsPathBg:a,menubuttonIcon:b(a,0.5),menubuttonIconHover:b(a,0.3)};return f[e].output(a).replace(/\[/g,
"{").replace(/\]/g,"}")}}();CKEDITOR.plugins.add("dialogui",{onLoad:function(){var h=function(b){this._||(this._={});this._["default"]=this._.initValue=b["default"]||"";this._.required=b.required||!1;for(var a=[this._],d=1;d<arguments.length;d++)a.push(arguments[d]);a.push(!0);CKEDITOR.tools.extend.apply(CKEDITOR.tools,a);return this._},r={build:function(b,a,d){return new CKEDITOR.ui.dialog.textInput(b,a,d)}},l={build:function(b,a,d){return new CKEDITOR.ui.dialog[a.type](b,a,d)}},n={isChanged:function(){return this.getValue()!=
this.getInitValue()},reset:function(b){this.setValue(this.getInitValue(),b)},setInitValue:function(){this._.initValue=this.getValue()},resetInitValue:function(){this._.initValue=this._["default"]},getInitValue:function(){return this._.initValue}},o=CKEDITOR.tools.extend({},CKEDITOR.ui.dialog.uiElement.prototype.eventProcessors,{onChange:function(b,a){this._.domOnChangeRegistered||(b.on("load",function(){this.getInputElement().on("change",function(){b.parts.dialog.isVisible()&&this.fire("change",{value:this.getValue()})},
this)},this),this._.domOnChangeRegistered=!0);this.on("change",a)}},!0),s=/^on([A-Z]\w+)/,p=function(b){for(var a in b)(s.test(a)||"title"==a||"type"==a)&&delete b[a];return b};CKEDITOR.tools.extend(CKEDITOR.ui.dialog,{labeledElement:function(b,a,d,f){if(!(4>arguments.length)){var c=h.call(this,a);c.labelId=CKEDITOR.tools.getNextId()+"_label";this._.children=[];var e={role:a.role||"presentation"};a.includeLabel&&(e["aria-labelledby"]=c.labelId);CKEDITOR.ui.dialog.uiElement.call(this,b,a,d,"div",null,
e,function(){var e=[],g=a.required?" cke_required":"";if(a.labelLayout!="horizontal")e.push('<label class="cke_dialog_ui_labeled_label'+g+'" ',' id="'+c.labelId+'"',c.inputId?' for="'+c.inputId+'"':"",(a.labelStyle?' style="'+a.labelStyle+'"':"")+">",a.label,"</label>",'<div class="cke_dialog_ui_labeled_content"',a.controlStyle?' style="'+a.controlStyle+'"':"",' role="presentation">',f.call(this,b,a),"</div>");else{g={type:"hbox",widths:a.widths,padding:0,children:[{type:"html",html:'<label class="cke_dialog_ui_labeled_label'+
g+'" id="'+c.labelId+'" for="'+c.inputId+'"'+(a.labelStyle?' style="'+a.labelStyle+'"':"")+">"+CKEDITOR.tools.htmlEncode(a.label)+"</span>"},{type:"html",html:'<span class="cke_dialog_ui_labeled_content"'+(a.controlStyle?' style="'+a.controlStyle+'"':"")+">"+f.call(this,b,a)+"</span>"}]};CKEDITOR.dialog._.uiElementBuilders.hbox.build(b,g,e)}return e.join("")})}},textInput:function(b,a,d){if(!(3>arguments.length)){h.call(this,a);var f=this._.inputId=CKEDITOR.tools.getNextId()+"_textInput",c={"class":"cke_dialog_ui_input_"+
a.type,id:f,type:a.type};a.validate&&(this.validate=a.validate);a.maxLength&&(c.maxlength=a.maxLength);a.size&&(c.size=a.size);a.inputStyle&&(c.style=a.inputStyle);var e=this,k=!1;b.on("load",function(){e.getInputElement().on("keydown",function(a){a.data.getKeystroke()==13&&(k=true)});e.getInputElement().on("keyup",function(a){if(a.data.getKeystroke()==13&&k){b.getButton("ok")&&setTimeout(function(){b.getButton("ok").click()},0);k=false}},null,null,1E3)});CKEDITOR.ui.dialog.labeledElement.call(this,
b,a,d,function(){var b=['<div class="cke_dialog_ui_input_',a.type,'" role="presentation"'];a.width&&b.push('style="width:'+a.width+'" ');b.push("><input ");c["aria-labelledby"]=this._.labelId;this._.required&&(c["aria-required"]=this._.required);for(var e in c)b.push(e+'="'+c[e]+'" ');b.push(" /></div>");return b.join("")})}},textarea:function(b,a,d){if(!(3>arguments.length)){h.call(this,a);var f=this,c=this._.inputId=CKEDITOR.tools.getNextId()+"_textarea",e={};a.validate&&(this.validate=a.validate);
e.rows=a.rows||5;e.cols=a.cols||20;e["class"]="cke_dialog_ui_input_textarea "+(a["class"]||"");"undefined"!=typeof a.inputStyle&&(e.style=a.inputStyle);a.dir&&(e.dir=a.dir);CKEDITOR.ui.dialog.labeledElement.call(this,b,a,d,function(){e["aria-labelledby"]=this._.labelId;this._.required&&(e["aria-required"]=this._.required);var a=['<div class="cke_dialog_ui_input_textarea" role="presentation"><textarea id="',c,'" '],b;for(b in e)a.push(b+'="'+CKEDITOR.tools.htmlEncode(e[b])+'" ');a.push(">",CKEDITOR.tools.htmlEncode(f._["default"]),
"</textarea></div>");return a.join("")})}},checkbox:function(b,a,d){if(!(3>arguments.length)){var f=h.call(this,a,{"default":!!a["default"]});a.validate&&(this.validate=a.validate);CKEDITOR.ui.dialog.uiElement.call(this,b,a,d,"span",null,null,function(){var c=CKEDITOR.tools.extend({},a,{id:a.id?a.id+"_checkbox":CKEDITOR.tools.getNextId()+"_checkbox"},true),e=[],d=CKEDITOR.tools.getNextId()+"_label",g={"class":"cke_dialog_ui_checkbox_input",type:"checkbox","aria-labelledby":d};p(c);if(a["default"])g.checked=
"checked";if(typeof c.inputStyle!="undefined")c.style=c.inputStyle;f.checkbox=new CKEDITOR.ui.dialog.uiElement(b,c,e,"input",null,g);e.push(' <label id="',d,'" for="',g.id,'"'+(a.labelStyle?' style="'+a.labelStyle+'"':"")+">",CKEDITOR.tools.htmlEncode(a.label),"</label>");return e.join("")})}},radio:function(b,a,d){if(!(3>arguments.length)){h.call(this,a);this._["default"]||(this._["default"]=this._.initValue=a.items[0][1]);a.validate&&(this.validate=a.valdiate);var f=[],c=this;a.role="radiogroup";
a.includeLabel=!0;CKEDITOR.ui.dialog.labeledElement.call(this,b,a,d,function(){for(var e=[],d=[],g=(a.id?a.id:CKEDITOR.tools.getNextId())+"_radio",i=0;i<a.items.length;i++){var j=a.items[i],h=j[2]!==void 0?j[2]:j[0],l=j[1]!==void 0?j[1]:j[0],m=CKEDITOR.tools.getNextId()+"_radio_input",n=m+"_label",m=CKEDITOR.tools.extend({},a,{id:m,title:null,type:null},true),h=CKEDITOR.tools.extend({},m,{title:h},true),o={type:"radio","class":"cke_dialog_ui_radio_input",name:g,value:l,"aria-labelledby":n},q=[];if(c._["default"]==
l)o.checked="checked";p(m);p(h);if(typeof m.inputStyle!="undefined")m.style=m.inputStyle;m.keyboardFocusable=true;f.push(new CKEDITOR.ui.dialog.uiElement(b,m,q,"input",null,o));q.push(" ");new CKEDITOR.ui.dialog.uiElement(b,h,q,"label",null,{id:n,"for":o.id},j[0]);e.push(q.join(""))}new CKEDITOR.ui.dialog.hbox(b,f,e,d);return d.join("")});this._.children=f}},button:function(b,a,d){if(arguments.length){"function"==typeof a&&(a=a(b.getParentEditor()));h.call(this,a,{disabled:a.disabled||!1});CKEDITOR.event.implementOn(this);
var f=this;b.on("load",function(){var a=this.getElement();(function(){a.on("click",function(a){f.click();a.data.preventDefault()});a.on("keydown",function(a){a.data.getKeystroke()in{32:1}&&(f.click(),a.data.preventDefault())})})();a.unselectable()},this);var c=CKEDITOR.tools.extend({},a);delete c.style;var e=CKEDITOR.tools.getNextId()+"_label";CKEDITOR.ui.dialog.uiElement.call(this,b,c,d,"a",null,{style:a.style,href:"javascript:void(0)",title:a.label,hidefocus:"true","class":a["class"],role:"button",
"aria-labelledby":e},'<span id="'+e+'" class="cke_dialog_ui_button">'+CKEDITOR.tools.htmlEncode(a.label)+"</span>")}},select:function(b,a,d){if(!(3>arguments.length)){var f=h.call(this,a);a.validate&&(this.validate=a.validate);f.inputId=CKEDITOR.tools.getNextId()+"_select";CKEDITOR.ui.dialog.labeledElement.call(this,b,a,d,function(){var c=CKEDITOR.tools.extend({},a,{id:a.id?a.id+"_select":CKEDITOR.tools.getNextId()+"_select"},true),e=[],d=[],g={id:f.inputId,"class":"cke_dialog_ui_input_select","aria-labelledby":this._.labelId};
e.push('<div class="cke_dialog_ui_input_',a.type,'" role="presentation"');a.width&&e.push('style="width:'+a.width+'" ');e.push(">");if(a.size!==void 0)g.size=a.size;if(a.multiple!==void 0)g.multiple=a.multiple;p(c);for(var i=0,j;i<a.items.length&&(j=a.items[i]);i++)d.push('<option value="',CKEDITOR.tools.htmlEncode(j[1]!==void 0?j[1]:j[0]).replace(/"/g,"&quot;"),'" /> ',CKEDITOR.tools.htmlEncode(j[0]));if(typeof c.inputStyle!="undefined")c.style=c.inputStyle;f.select=new CKEDITOR.ui.dialog.uiElement(b,
c,e,"select",null,g,d.join(""));e.push("</div>");return e.join("")})}},file:function(b,a,d){if(!(3>arguments.length)){void 0===a["default"]&&(a["default"]="");var f=CKEDITOR.tools.extend(h.call(this,a),{definition:a,buttons:[]});a.validate&&(this.validate=a.validate);b.on("load",function(){CKEDITOR.document.getById(f.frameId).getParent().addClass("cke_dialog_ui_input_file")});CKEDITOR.ui.dialog.labeledElement.call(this,b,a,d,function(){f.frameId=CKEDITOR.tools.getNextId()+"_fileInput";var b=['<iframe frameborder="0" allowtransparency="0" class="cke_dialog_ui_input_file" role="presentation" id="',
f.frameId,'" title="',a.label,'" src="javascript:void('];b.push(CKEDITOR.env.ie?"(function(){"+encodeURIComponent("document.open();("+CKEDITOR.tools.fixDomain+")();document.close();")+"})()":"0");b.push(')"></iframe>');return b.join("")})}},fileButton:function(b,a,d){var f=this;if(!(3>arguments.length)){h.call(this,a);a.validate&&(this.validate=a.validate);var c=CKEDITOR.tools.extend({},a),e=c.onClick;c.className=(c.className?c.className+" ":"")+"cke_dialog_ui_button";c.onClick=function(c){var d=
a["for"];if(!e||e.call(this,c)!==false){b.getContentElement(d[0],d[1]).submit();this.disable()}};b.on("load",function(){b.getContentElement(a["for"][0],a["for"][1])._.buttons.push(f)});CKEDITOR.ui.dialog.button.call(this,b,c,d)}},html:function(){var b=/^\s*<[\w:]+\s+([^>]*)?>/,a=/^(\s*<[\w:]+(?:\s+[^>]*)?)((?:.|\r|\n)+)$/,d=/\/$/;return function(f,c,e){if(!(3>arguments.length)){var k=[],g=c.html;"<"!=g.charAt(0)&&(g="<span>"+g+"</span>");var i=c.focus;if(i){var j=this.focus;this.focus=function(){("function"==
typeof i?i:j).call(this);this.fire("focus")};c.isFocusable&&(this.isFocusable=this.isFocusable);this.keyboardFocusable=!0}CKEDITOR.ui.dialog.uiElement.call(this,f,c,k,"span",null,null,"");k=k.join("").match(b);g=g.match(a)||["","",""];d.test(g[1])&&(g[1]=g[1].slice(0,-1),g[2]="/"+g[2]);e.push([g[1]," ",k[1]||"",g[2]].join(""))}}}(),fieldset:function(b,a,d,f,c){var e=c.label;this._={children:a};CKEDITOR.ui.dialog.uiElement.call(this,b,c,f,"fieldset",null,null,function(){var a=[];e&&a.push("<legend"+
(c.labelStyle?' style="'+c.labelStyle+'"':"")+">"+e+"</legend>");for(var b=0;b<d.length;b++)a.push(d[b]);return a.join("")})}},!0);CKEDITOR.ui.dialog.html.prototype=new CKEDITOR.ui.dialog.uiElement;CKEDITOR.ui.dialog.labeledElement.prototype=CKEDITOR.tools.extend(new CKEDITOR.ui.dialog.uiElement,{setLabel:function(b){var a=CKEDITOR.document.getById(this._.labelId);1>a.getChildCount()?(new CKEDITOR.dom.text(b,CKEDITOR.document)).appendTo(a):a.getChild(0).$.nodeValue=b;return this},getLabel:function(){var b=
CKEDITOR.document.getById(this._.labelId);return!b||1>b.getChildCount()?"":b.getChild(0).getText()},eventProcessors:o},!0);CKEDITOR.ui.dialog.button.prototype=CKEDITOR.tools.extend(new CKEDITOR.ui.dialog.uiElement,{click:function(){return!this._.disabled?this.fire("click",{dialog:this._.dialog}):!1},enable:function(){this._.disabled=!1;var b=this.getElement();b&&b.removeClass("cke_disabled")},disable:function(){this._.disabled=!0;this.getElement().addClass("cke_disabled")},isVisible:function(){return this.getElement().getFirst().isVisible()},
isEnabled:function(){return!this._.disabled},eventProcessors:CKEDITOR.tools.extend({},CKEDITOR.ui.dialog.uiElement.prototype.eventProcessors,{onClick:function(b,a){this.on("click",function(){a.apply(this,arguments)})}},!0),accessKeyUp:function(){this.click()},accessKeyDown:function(){this.focus()},keyboardFocusable:!0},!0);CKEDITOR.ui.dialog.textInput.prototype=CKEDITOR.tools.extend(new CKEDITOR.ui.dialog.labeledElement,{getInputElement:function(){return CKEDITOR.document.getById(this._.inputId)},
focus:function(){var b=this.selectParentTab();setTimeout(function(){var a=b.getInputElement();a&&a.$.focus()},0)},select:function(){var b=this.selectParentTab();setTimeout(function(){var a=b.getInputElement();a&&(a.$.focus(),a.$.select())},0)},accessKeyUp:function(){this.select()},setValue:function(b){!b&&(b="");return CKEDITOR.ui.dialog.uiElement.prototype.setValue.apply(this,arguments)},keyboardFocusable:!0},n,!0);CKEDITOR.ui.dialog.textarea.prototype=new CKEDITOR.ui.dialog.textInput;CKEDITOR.ui.dialog.select.prototype=
CKEDITOR.tools.extend(new CKEDITOR.ui.dialog.labeledElement,{getInputElement:function(){return this._.select.getElement()},add:function(b,a,d){var f=new CKEDITOR.dom.element("option",this.getDialog().getParentEditor().document),c=this.getInputElement().$;f.$.text=b;f.$.value=void 0===a||null===a?b:a;void 0===d||null===d?CKEDITOR.env.ie?c.add(f.$):c.add(f.$,null):c.add(f.$,d);return this},remove:function(b){this.getInputElement().$.remove(b);return this},clear:function(){for(var b=this.getInputElement().$;0<
b.length;)b.remove(0);return this},keyboardFocusable:!0},n,!0);CKEDITOR.ui.dialog.checkbox.prototype=CKEDITOR.tools.extend(new CKEDITOR.ui.dialog.uiElement,{getInputElement:function(){return this._.checkbox.getElement()},setValue:function(b,a){this.getInputElement().$.checked=b;!a&&this.fire("change",{value:b})},getValue:function(){return this.getInputElement().$.checked},accessKeyUp:function(){this.setValue(!this.getValue())},eventProcessors:{onChange:function(b,a){if(!CKEDITOR.env.ie||8<CKEDITOR.env.version)return o.onChange.apply(this,
arguments);b.on("load",function(){var a=this._.checkbox.getElement();a.on("propertychange",function(b){b=b.data.$;"checked"==b.propertyName&&this.fire("change",{value:a.$.checked})},this)},this);this.on("change",a);return null}},keyboardFocusable:!0},n,!0);CKEDITOR.ui.dialog.radio.prototype=CKEDITOR.tools.extend(new CKEDITOR.ui.dialog.uiElement,{setValue:function(b,a){for(var d=this._.children,f,c=0;c<d.length&&(f=d[c]);c++)f.getElement().$.checked=f.getValue()==b;!a&&this.fire("change",{value:b})},
getValue:function(){for(var b=this._.children,a=0;a<b.length;a++)if(b[a].getElement().$.checked)return b[a].getValue();return null},accessKeyUp:function(){var b=this._.children,a;for(a=0;a<b.length;a++)if(b[a].getElement().$.checked){b[a].getElement().focus();return}b[0].getElement().focus()},eventProcessors:{onChange:function(b,a){if(CKEDITOR.env.ie)b.on("load",function(){for(var a=this._.children,b=this,c=0;c<a.length;c++)a[c].getElement().on("propertychange",function(a){a=a.data.$;"checked"==a.propertyName&&
this.$.checked&&b.fire("change",{value:this.getAttribute("value")})})},this),this.on("change",a);else return o.onChange.apply(this,arguments);return null}}},n,!0);CKEDITOR.ui.dialog.file.prototype=CKEDITOR.tools.extend(new CKEDITOR.ui.dialog.labeledElement,n,{getInputElement:function(){var b=CKEDITOR.document.getById(this._.frameId).getFrameDocument();return 0<b.$.forms.length?new CKEDITOR.dom.element(b.$.forms[0].elements[0]):this.getElement()},submit:function(){this.getInputElement().getParent().$.submit();
return this},getAction:function(){return this.getInputElement().getParent().$.action},registerEvents:function(b){var a=/^on([A-Z]\w+)/,d,f=function(a,b,c,d){a.on("formLoaded",function(){a.getInputElement().on(c,d,a)})},c;for(c in b)if(d=c.match(a))this.eventProcessors[c]?this.eventProcessors[c].call(this,this._.dialog,b[c]):f(this,this._.dialog,d[1].toLowerCase(),b[c]);return this},reset:function(){function b(){d.$.open();var b="";f.size&&(b=f.size-(CKEDITOR.env.ie?7:0));var h=a.frameId+"_input";
d.$.write(['<html dir="'+g+'" lang="'+i+'"><head><title></title></head><body style="margin: 0; overflow: hidden; background: transparent;">','<form enctype="multipart/form-data" method="POST" dir="'+g+'" lang="'+i+'" action="',CKEDITOR.tools.htmlEncode(f.action),'"><label id="',a.labelId,'" for="',h,'" style="display:none">',CKEDITOR.tools.htmlEncode(f.label),'</label><input style="width:100%" id="',h,'" aria-labelledby="',a.labelId,'" type="file" name="',CKEDITOR.tools.htmlEncode(f.id||"cke_upload"),
'" size="',CKEDITOR.tools.htmlEncode(0<b?b:""),'" /></form></body></html><script>',CKEDITOR.env.ie?"("+CKEDITOR.tools.fixDomain+")();":"","window.parent.CKEDITOR.tools.callFunction("+e+");","window.onbeforeunload = function() {window.parent.CKEDITOR.tools.callFunction("+k+")}","<\/script>"].join(""));d.$.close();for(b=0;b<c.length;b++)c[b].enable()}var a=this._,d=CKEDITOR.document.getById(a.frameId).getFrameDocument(),f=a.definition,c=a.buttons,e=this.formLoadedNumber,k=this.formUnloadNumber,g=a.dialog._.editor.lang.dir,
i=a.dialog._.editor.langCode;e||(e=this.formLoadedNumber=CKEDITOR.tools.addFunction(function(){this.fire("formLoaded")},this),k=this.formUnloadNumber=CKEDITOR.tools.addFunction(function(){this.getInputElement().clearCustomData()},this),this.getDialog()._.editor.on("destroy",function(){CKEDITOR.tools.removeFunction(e);CKEDITOR.tools.removeFunction(k)}));CKEDITOR.env.gecko?setTimeout(b,500):b()},getValue:function(){return this.getInputElement().$.value||""},setInitValue:function(){this._.initValue=
""},eventProcessors:{onChange:function(b,a){this._.domOnChangeRegistered||(this.on("formLoaded",function(){this.getInputElement().on("change",function(){this.fire("change",{value:this.getValue()})},this)},this),this._.domOnChangeRegistered=!0);this.on("change",a)}},keyboardFocusable:!0},!0);CKEDITOR.ui.dialog.fileButton.prototype=new CKEDITOR.ui.dialog.button;CKEDITOR.ui.dialog.fieldset.prototype=CKEDITOR.tools.clone(CKEDITOR.ui.dialog.hbox.prototype);CKEDITOR.dialog.addUIElement("text",r);CKEDITOR.dialog.addUIElement("password",
r);CKEDITOR.dialog.addUIElement("textarea",l);CKEDITOR.dialog.addUIElement("checkbox",l);CKEDITOR.dialog.addUIElement("radio",l);CKEDITOR.dialog.addUIElement("button",l);CKEDITOR.dialog.addUIElement("select",l);CKEDITOR.dialog.addUIElement("file",l);CKEDITOR.dialog.addUIElement("fileButton",l);CKEDITOR.dialog.addUIElement("html",l);CKEDITOR.dialog.addUIElement("fieldset",{build:function(b,a,d){for(var f=a.children,c,e=[],h=[],g=0;g<f.length&&(c=f[g]);g++){var i=[];e.push(i);h.push(CKEDITOR.dialog._.uiElementBuilders[c.type].build(b,
c,i))}return new CKEDITOR.ui.dialog[a.type](b,h,e,d,a)}})}});CKEDITOR.DIALOG_RESIZE_NONE=0;CKEDITOR.DIALOG_RESIZE_WIDTH=1;CKEDITOR.DIALOG_RESIZE_HEIGHT=2;CKEDITOR.DIALOG_RESIZE_BOTH=3;
(function(){function t(){for(var a=this._.tabIdList.length,b=CKEDITOR.tools.indexOf(this._.tabIdList,this._.currentTabId)+a,c=b-1;c>b-a;c--)if(this._.tabs[this._.tabIdList[c%a]][0].$.offsetHeight)return this._.tabIdList[c%a];return null}function u(){for(var a=this._.tabIdList.length,b=CKEDITOR.tools.indexOf(this._.tabIdList,this._.currentTabId),c=b+1;c<b+a;c++)if(this._.tabs[this._.tabIdList[c%a]][0].$.offsetHeight)return this._.tabIdList[c%a];return null}function G(a,b){for(var c=a.$.getElementsByTagName("input"),
e=0,d=c.length;e<d;e++){var g=new CKEDITOR.dom.element(c[e]);"text"==g.getAttribute("type").toLowerCase()&&(b?(g.setAttribute("value",g.getCustomData("fake_value")||""),g.removeCustomData("fake_value")):(g.setCustomData("fake_value",g.getAttribute("value")),g.setAttribute("value","")))}}function P(a,b){var c=this.getInputElement();c&&(a?c.removeAttribute("aria-invalid"):c.setAttribute("aria-invalid",!0));a||(this.select?this.select():this.focus());b&&alert(b);this.fire("validated",{valid:a,msg:b})}
function Q(){var a=this.getInputElement();a&&a.removeAttribute("aria-invalid")}function R(a){var a=CKEDITOR.dom.element.createFromHtml(CKEDITOR.addTemplate("dialog",S).output({id:CKEDITOR.tools.getNextNumber(),editorId:a.id,langDir:a.lang.dir,langCode:a.langCode,editorDialogClass:"cke_editor_"+a.name.replace(/\./g,"\\.")+"_dialog",closeTitle:a.lang.common.close,hidpi:CKEDITOR.env.hidpi?"cke_hidpi":""})),b=a.getChild([0,0,0,0,0]),c=b.getChild(0),e=b.getChild(1);if(CKEDITOR.env.ie&&!CKEDITOR.env.quirks){var d=
"javascript:void(function(){"+encodeURIComponent("document.open();("+CKEDITOR.tools.fixDomain+")();document.close();")+"}())";CKEDITOR.dom.element.createFromHtml('<iframe frameBorder="0" class="cke_iframe_shim" src="'+d+'" tabIndex="-1"></iframe>').appendTo(b.getParent())}c.unselectable();e.unselectable();return{element:a,parts:{dialog:a.getChild(0),title:c,close:e,tabs:b.getChild(2),contents:b.getChild([3,0,0,0]),footer:b.getChild([3,0,1,0])}}}function H(a,b,c){this.element=b;this.focusIndex=c;this.tabIndex=
0;this.isFocusable=function(){return!b.getAttribute("disabled")&&b.isVisible()};this.focus=function(){a._.currentFocusIndex=this.focusIndex;this.element.focus()};b.on("keydown",function(a){a.data.getKeystroke()in{32:1,13:1}&&this.fire("click")});b.on("focus",function(){this.fire("mouseover")});b.on("blur",function(){this.fire("mouseout")})}function T(a){function b(){a.layout()}var c=CKEDITOR.document.getWindow();c.on("resize",b);a.on("hide",function(){c.removeListener("resize",b)})}function I(a,b){this._=
{dialog:a};CKEDITOR.tools.extend(this,b)}function U(a){function b(b){var c=a.getSize(),i=CKEDITOR.document.getWindow().getViewPaneSize(),o=b.data.$.screenX,j=b.data.$.screenY,n=o-e.x,l=j-e.y;e={x:o,y:j};d.x+=n;d.y+=l;a.move(d.x+h[3]<f?-h[3]:d.x-h[1]>i.width-c.width-f?i.width-c.width+("rtl"==g.lang.dir?0:h[1]):d.x,d.y+h[0]<f?-h[0]:d.y-h[2]>i.height-c.height-f?i.height-c.height+h[2]:d.y,1);b.data.preventDefault()}function c(){CKEDITOR.document.removeListener("mousemove",b);CKEDITOR.document.removeListener("mouseup",
c);if(CKEDITOR.env.ie6Compat){var a=q.getChild(0).getFrameDocument();a.removeListener("mousemove",b);a.removeListener("mouseup",c)}}var e=null,d=null,g=a.getParentEditor(),f=g.config.dialog_magnetDistance,h=CKEDITOR.skin.margins||[0,0,0,0];"undefined"==typeof f&&(f=20);a.parts.title.on("mousedown",function(f){e={x:f.data.$.screenX,y:f.data.$.screenY};CKEDITOR.document.on("mousemove",b);CKEDITOR.document.on("mouseup",c);d=a.getPosition();if(CKEDITOR.env.ie6Compat){var h=q.getChild(0).getFrameDocument();
h.on("mousemove",b);h.on("mouseup",c)}f.data.preventDefault()},a)}function V(a){var b,c;function e(d){var e="rtl"==h.lang.dir,j=o.width,C=o.height,D=j+(d.data.$.screenX-b)*(e?-1:1)*(a._.moved?1:2),n=C+(d.data.$.screenY-c)*(a._.moved?1:2),x=a._.element.getFirst(),x=e&&x.getComputedStyle("right"),y=a.getPosition();y.y+n>i.height&&(n=i.height-y.y);if((e?x:y.x)+D>i.width)D=i.width-(e?x:y.x);if(f==CKEDITOR.DIALOG_RESIZE_WIDTH||f==CKEDITOR.DIALOG_RESIZE_BOTH)j=Math.max(g.minWidth||0,D-m);if(f==CKEDITOR.DIALOG_RESIZE_HEIGHT||
f==CKEDITOR.DIALOG_RESIZE_BOTH)C=Math.max(g.minHeight||0,n-k);a.resize(j,C);a._.moved||a.layout();d.data.preventDefault()}function d(){CKEDITOR.document.removeListener("mouseup",d);CKEDITOR.document.removeListener("mousemove",e);j&&(j.remove(),j=null);if(CKEDITOR.env.ie6Compat){var a=q.getChild(0).getFrameDocument();a.removeListener("mouseup",d);a.removeListener("mousemove",e)}}var g=a.definition,f=g.resizable;if(f!=CKEDITOR.DIALOG_RESIZE_NONE){var h=a.getParentEditor(),m,k,i,o,j,n=CKEDITOR.tools.addFunction(function(f){o=
a.getSize();var h=a.parts.contents;h.$.getElementsByTagName("iframe").length&&(j=CKEDITOR.dom.element.createFromHtml('<div class="cke_dialog_resize_cover" style="height: 100%; position: absolute; width: 100%;"></div>'),h.append(j));k=o.height-a.parts.contents.getSize("height",!(CKEDITOR.env.gecko||CKEDITOR.env.ie&&CKEDITOR.env.quirks));m=o.width-a.parts.contents.getSize("width",1);b=f.screenX;c=f.screenY;i=CKEDITOR.document.getWindow().getViewPaneSize();CKEDITOR.document.on("mousemove",e);CKEDITOR.document.on("mouseup",
d);CKEDITOR.env.ie6Compat&&(h=q.getChild(0).getFrameDocument(),h.on("mousemove",e),h.on("mouseup",d));f.preventDefault&&f.preventDefault()});a.on("load",function(){var b="";f==CKEDITOR.DIALOG_RESIZE_WIDTH?b=" cke_resizer_horizontal":f==CKEDITOR.DIALOG_RESIZE_HEIGHT&&(b=" cke_resizer_vertical");b=CKEDITOR.dom.element.createFromHtml('<div class="cke_resizer'+b+" cke_resizer_"+h.lang.dir+'" title="'+CKEDITOR.tools.htmlEncode(h.lang.common.resize)+'" onmousedown="CKEDITOR.tools.callFunction('+n+', event )">'+
("ltr"==h.lang.dir?"◢":"◣")+"</div>");a.parts.footer.append(b,1)});h.on("destroy",function(){CKEDITOR.tools.removeFunction(n)})}}function E(a){a.data.preventDefault(1)}function J(a){var b=CKEDITOR.document.getWindow(),c=a.config,e=c.dialog_backgroundCoverColor||"white",d=c.dialog_backgroundCoverOpacity,g=c.baseFloatZIndex,c=CKEDITOR.tools.genKey(e,d,g),f=w[c];f?f.show():(g=['<div tabIndex="-1" style="position: ',CKEDITOR.env.ie6Compat?"absolute":"fixed","; z-index: ",g,"; top: 0px; left: 0px; ",!CKEDITOR.env.ie6Compat?
"background-color: "+e:"",'" class="cke_dialog_background_cover">'],CKEDITOR.env.ie6Compat&&(e="<html><body style=\\'background-color:"+e+";\\'></body></html>",g.push('<iframe hidefocus="true" frameborder="0" id="cke_dialog_background_iframe" src="javascript:'),g.push("void((function(){"+encodeURIComponent("document.open();("+CKEDITOR.tools.fixDomain+")();document.write( '"+e+"' );document.close();")+"})())"),g.push('" style="position:absolute;left:0;top:0;width:100%;height: 100%;filter: progid:DXImageTransform.Microsoft.Alpha(opacity=0)"></iframe>')),
g.push("</div>"),f=CKEDITOR.dom.element.createFromHtml(g.join("")),f.setOpacity(void 0!==d?d:0.5),f.on("keydown",E),f.on("keypress",E),f.on("keyup",E),f.appendTo(CKEDITOR.document.getBody()),w[c]=f);a.focusManager.add(f);q=f;var a=function(){var a=b.getViewPaneSize();f.setStyles({width:a.width+"px",height:a.height+"px"})},h=function(){var a=b.getScrollPosition(),c=CKEDITOR.dialog._.currentTop;f.setStyles({left:a.x+"px",top:a.y+"px"});if(c){do{a=c.getPosition();c.move(a.x,a.y)}while(c=c._.parentDialog)
}};F=a;b.on("resize",a);a();(!CKEDITOR.env.mac||!CKEDITOR.env.webkit)&&f.focus();if(CKEDITOR.env.ie6Compat){var m=function(){h();arguments.callee.prevScrollHandler.apply(this,arguments)};b.$.setTimeout(function(){m.prevScrollHandler=window.onscroll||function(){};window.onscroll=m},0);h()}}function K(a){q&&(a.focusManager.remove(q),a=CKEDITOR.document.getWindow(),q.hide(),a.removeListener("resize",F),CKEDITOR.env.ie6Compat&&a.$.setTimeout(function(){window.onscroll=window.onscroll&&window.onscroll.prevScrollHandler||
null},0),F=null)}var r=CKEDITOR.tools.cssLength,S='<div class="cke_reset_all {editorId} {editorDialogClass} {hidpi}" dir="{langDir}" lang="{langCode}" role="dialog" aria-labelledby="cke_dialog_title_{id}"><table class="cke_dialog '+CKEDITOR.env.cssClass+' cke_{langDir}" style="position:absolute" role="presentation"><tr><td role="presentation"><div class="cke_dialog_body" role="presentation"><div id="cke_dialog_title_{id}" class="cke_dialog_title" role="presentation"></div><a id="cke_dialog_close_button_{id}" class="cke_dialog_close_button" href="javascript:void(0)" title="{closeTitle}" role="button"><span class="cke_label">X</span></a><div id="cke_dialog_tabs_{id}" class="cke_dialog_tabs" role="tablist"></div><table class="cke_dialog_contents" role="presentation"><tr><td id="cke_dialog_contents_{id}" class="cke_dialog_contents_body" role="presentation"></td></tr><tr><td id="cke_dialog_footer_{id}" class="cke_dialog_footer" role="presentation"></td></tr></table></div></td></tr></table></div>';
CKEDITOR.dialog=function(a,b){function c(){var a=l._.focusList;a.sort(function(a,b){return a.tabIndex!=b.tabIndex?b.tabIndex-a.tabIndex:a.focusIndex-b.focusIndex});for(var b=a.length,c=0;c<b;c++)a[c].focusIndex=c}function e(a){var b=l._.focusList,a=a||0;if(!(1>b.length)){var c=l._.currentFocusIndex;try{b[c].getInputElement().$.blur()}catch(f){}for(var d=c=(c+a+b.length)%b.length;a&&!b[d].isFocusable()&&!(d=(d+a+b.length)%b.length,d==c););b[d].focus();"text"==b[d].type&&b[d].select()}}function d(b){if(l==
CKEDITOR.dialog._.currentTop){var c=b.data.getKeystroke(),d="rtl"==a.lang.dir;o=j=0;if(9==c||c==CKEDITOR.SHIFT+9)c=c==CKEDITOR.SHIFT+9,l._.tabBarMode?(c=c?t.call(l):u.call(l),l.selectPage(c),l._.tabs[c][0].focus()):e(c?-1:1),o=1;else if(c==CKEDITOR.ALT+121&&!l._.tabBarMode&&1<l.getPageCount())l._.tabBarMode=!0,l._.tabs[l._.currentTabId][0].focus(),o=1;else if((37==c||39==c)&&l._.tabBarMode)c=c==(d?39:37)?t.call(l):u.call(l),l.selectPage(c),l._.tabs[c][0].focus(),o=1;else if((13==c||32==c)&&l._.tabBarMode)this.selectPage(this._.currentTabId),
this._.tabBarMode=!1,this._.currentFocusIndex=-1,e(1),o=1;else if(13==c){c=b.data.getTarget();if(!c.is("a","button","select","textarea")&&(!c.is("input")||"button"!=c.$.type))(c=this.getButton("ok"))&&CKEDITOR.tools.setTimeout(c.click,0,c),o=1;j=1}else if(27==c)(c=this.getButton("cancel"))?CKEDITOR.tools.setTimeout(c.click,0,c):!1!==this.fire("cancel",{hide:!0}).hide&&this.hide(),j=1;else return;g(b)}}function g(a){o?a.data.preventDefault(1):j&&a.data.stopPropagation()}var f=CKEDITOR.dialog._.dialogDefinitions[b],
h=CKEDITOR.tools.clone(W),m=a.config.dialog_buttonsOrder||"OS",k=a.lang.dir,i={},o,j;("OS"==m&&CKEDITOR.env.mac||"rtl"==m&&"ltr"==k||"ltr"==m&&"rtl"==k)&&h.buttons.reverse();f=CKEDITOR.tools.extend(f(a),h);f=CKEDITOR.tools.clone(f);f=new L(this,f);h=R(a);this._={editor:a,element:h.element,name:b,contentSize:{width:0,height:0},size:{width:0,height:0},contents:{},buttons:{},accessKeyMap:{},tabs:{},tabIdList:[],currentTabId:null,currentTabIndex:null,pageCount:0,lastTab:null,tabBarMode:!1,focusList:[],
currentFocusIndex:0,hasFocus:!1};this.parts=h.parts;CKEDITOR.tools.setTimeout(function(){a.fire("ariaWidget",this.parts.contents)},0,this);h={position:CKEDITOR.env.ie6Compat?"absolute":"fixed",top:0,visibility:"hidden"};h["rtl"==k?"right":"left"]=0;this.parts.dialog.setStyles(h);CKEDITOR.event.call(this);this.definition=f=CKEDITOR.fire("dialogDefinition",{name:b,definition:f},a).definition;if(!("removeDialogTabs"in a._)&&a.config.removeDialogTabs){h=a.config.removeDialogTabs.split(";");for(k=0;k<
h.length;k++)if(m=h[k].split(":"),2==m.length){var n=m[0];i[n]||(i[n]=[]);i[n].push(m[1])}a._.removeDialogTabs=i}if(a._.removeDialogTabs&&(i=a._.removeDialogTabs[b]))for(k=0;k<i.length;k++)f.removeContents(i[k]);if(f.onLoad)this.on("load",f.onLoad);if(f.onShow)this.on("show",f.onShow);if(f.onHide)this.on("hide",f.onHide);if(f.onOk)this.on("ok",function(b){a.fire("saveSnapshot");setTimeout(function(){a.fire("saveSnapshot")},0);!1===f.onOk.call(this,b)&&(b.data.hide=!1)});if(f.onCancel)this.on("cancel",
function(a){!1===f.onCancel.call(this,a)&&(a.data.hide=!1)});var l=this,p=function(a){var b=l._.contents,c=!1,d;for(d in b)for(var f in b[d])if(c=a.call(this,b[d][f]))return};this.on("ok",function(a){p(function(b){if(b.validate){var c=b.validate(this),d="string"==typeof c||!1===c;d&&(a.data.hide=!1,a.stop());P.call(b,!d,"string"==typeof c?c:void 0);return d}})},this,null,0);this.on("cancel",function(b){p(function(c){if(c.isChanged())return!a.config.dialog_noConfirmCancel&&!confirm(a.lang.common.confirmCancel)&&
(b.data.hide=!1),!0})},this,null,0);this.parts.close.on("click",function(a){!1!==this.fire("cancel",{hide:!0}).hide&&this.hide();a.data.preventDefault()},this);this.changeFocus=e;var v=this._.element;a.focusManager.add(v,1);this.on("show",function(){v.on("keydown",d,this);if(CKEDITOR.env.gecko)v.on("keypress",g,this)});this.on("hide",function(){v.removeListener("keydown",d);CKEDITOR.env.gecko&&v.removeListener("keypress",g);p(function(a){Q.apply(a)})});this.on("iframeAdded",function(a){(new CKEDITOR.dom.document(a.data.iframe.$.contentWindow.document)).on("keydown",
d,this,null,0)});this.on("show",function(){c();if(a.config.dialog_startupFocusTab&&1<l._.pageCount)l._.tabBarMode=!0,l._.tabs[l._.currentTabId][0].focus();else if(!this._.hasFocus)if(this._.currentFocusIndex=-1,f.onFocus){var b=f.onFocus.call(this);b&&b.focus()}else e(1)},this,null,4294967295);if(CKEDITOR.env.ie6Compat)this.on("load",function(){var a=this.getElement(),b=a.getFirst();b.remove();b.appendTo(a)},this);U(this);V(this);(new CKEDITOR.dom.text(f.title,CKEDITOR.document)).appendTo(this.parts.title);
for(k=0;k<f.contents.length;k++)(i=f.contents[k])&&this.addPage(i);this.parts.tabs.on("click",function(a){var b=a.data.getTarget();b.hasClass("cke_dialog_tab")&&(b=b.$.id,this.selectPage(b.substring(4,b.lastIndexOf("_"))),this._.tabBarMode&&(this._.tabBarMode=!1,this._.currentFocusIndex=-1,e(1)),a.data.preventDefault())},this);k=[];i=CKEDITOR.dialog._.uiElementBuilders.hbox.build(this,{type:"hbox",className:"cke_dialog_footer_buttons",widths:[],children:f.buttons},k).getChild();this.parts.footer.setHtml(k.join(""));
for(k=0;k<i.length;k++)this._.buttons[i[k].id]=i[k]};CKEDITOR.dialog.prototype={destroy:function(){this.hide();this._.element.remove()},resize:function(){return function(a,b){if(!this._.contentSize||!(this._.contentSize.width==a&&this._.contentSize.height==b))CKEDITOR.dialog.fire("resize",{dialog:this,width:a,height:b},this._.editor),this.fire("resize",{width:a,height:b},this._.editor),this.parts.contents.setStyles({width:a+"px",height:b+"px"}),"rtl"==this._.editor.lang.dir&&this._.position&&(this._.position.x=
CKEDITOR.document.getWindow().getViewPaneSize().width-this._.contentSize.width-parseInt(this._.element.getFirst().getStyle("right"),10)),this._.contentSize={width:a,height:b}}}(),getSize:function(){var a=this._.element.getFirst();return{width:a.$.offsetWidth||0,height:a.$.offsetHeight||0}},move:function(a,b,c){var e=this._.element.getFirst(),d="rtl"==this._.editor.lang.dir,g="fixed"==e.getComputedStyle("position");CKEDITOR.env.ie&&e.setStyle("zoom","100%");if(!g||!this._.position||!(this._.position.x==
a&&this._.position.y==b))this._.position={x:a,y:b},g||(g=CKEDITOR.document.getWindow().getScrollPosition(),a+=g.x,b+=g.y),d&&(g=this.getSize(),a=CKEDITOR.document.getWindow().getViewPaneSize().width-g.width-a),b={top:(0<b?b:0)+"px"},b[d?"right":"left"]=(0<a?a:0)+"px",e.setStyles(b),c&&(this._.moved=1)},getPosition:function(){return CKEDITOR.tools.extend({},this._.position)},show:function(){var a=this._.element,b=this.definition;!a.getParent()||!a.getParent().equals(CKEDITOR.document.getBody())?a.appendTo(CKEDITOR.document.getBody()):
a.setStyle("display","block");this.resize(this._.contentSize&&this._.contentSize.width||b.width||b.minWidth,this._.contentSize&&this._.contentSize.height||b.height||b.minHeight);this.reset();this.selectPage(this.definition.contents[0].id);null===CKEDITOR.dialog._.currentZIndex&&(CKEDITOR.dialog._.currentZIndex=this._.editor.config.baseFloatZIndex);this._.element.getFirst().setStyle("z-index",CKEDITOR.dialog._.currentZIndex+=10);null===CKEDITOR.dialog._.currentTop?(CKEDITOR.dialog._.currentTop=this,
this._.parentDialog=null,J(this._.editor)):(this._.parentDialog=CKEDITOR.dialog._.currentTop,this._.parentDialog.getElement().getFirst().$.style.zIndex-=Math.floor(this._.editor.config.baseFloatZIndex/2),CKEDITOR.dialog._.currentTop=this);a.on("keydown",M);a.on("keyup",N);this._.hasFocus=!1;for(var c in b.contents)if(b.contents[c]){var a=b.contents[c],e=this._.tabs[a.id],d=a.requiredContent,g=0;if(e){for(var f in this._.contents[a.id]){var h=this._.contents[a.id][f];"hbox"==h.type||("vbox"==h.type||
!h.getInputElement())||(h.requiredContent&&!this._.editor.activeFilter.check(h.requiredContent)?h.disable():(h.enable(),g++))}!g||d&&!this._.editor.activeFilter.check(d)?e[0].addClass("cke_dialog_tab_disabled"):e[0].removeClass("cke_dialog_tab_disabled")}}CKEDITOR.tools.setTimeout(function(){this.layout();T(this);this.parts.dialog.setStyle("visibility","");this.fireOnce("load",{});CKEDITOR.ui.fire("ready",this);this.fire("show",{});this._.editor.fire("dialogShow",this);this._.parentDialog||this._.editor.focusManager.lock();
this.foreach(function(a){a.setInitValue&&a.setInitValue()})},100,this)},layout:function(){var a=this.parts.dialog,b=this.getSize(),c=CKEDITOR.document.getWindow().getViewPaneSize(),e=(c.width-b.width)/2,d=(c.height-b.height)/2;CKEDITOR.env.ie6Compat||(b.height+(0<d?d:0)>c.height||b.width+(0<e?e:0)>c.width?a.setStyle("position","absolute"):a.setStyle("position","fixed"));this.move(this._.moved?this._.position.x:e,this._.moved?this._.position.y:d)},foreach:function(a){for(var b in this._.contents)for(var c in this._.contents[b])a.call(this,
this._.contents[b][c]);return this},reset:function(){var a=function(a){a.reset&&a.reset(1)};return function(){this.foreach(a);return this}}(),setupContent:function(){var a=arguments;this.foreach(function(b){b.setup&&b.setup.apply(b,a)})},commitContent:function(){var a=arguments;this.foreach(function(b){CKEDITOR.env.ie&&this._.currentFocusIndex==b.focusIndex&&b.getInputElement().$.blur();b.commit&&b.commit.apply(b,a)})},hide:function(){if(this.parts.dialog.isVisible()){this.fire("hide",{});this._.editor.fire("dialogHide",
this);this.selectPage(this._.tabIdList[0]);var a=this._.element;a.setStyle("display","none");this.parts.dialog.setStyle("visibility","hidden");for(X(this);CKEDITOR.dialog._.currentTop!=this;)CKEDITOR.dialog._.currentTop.hide();if(this._.parentDialog){var b=this._.parentDialog.getElement().getFirst();b.setStyle("z-index",parseInt(b.$.style.zIndex,10)+Math.floor(this._.editor.config.baseFloatZIndex/2))}else K(this._.editor);if(CKEDITOR.dialog._.currentTop=this._.parentDialog)CKEDITOR.dialog._.currentZIndex-=
10;else{CKEDITOR.dialog._.currentZIndex=null;a.removeListener("keydown",M);a.removeListener("keyup",N);var c=this._.editor;c.focus();setTimeout(function(){c.focusManager.unlock();CKEDITOR.env.iOS&&c.window.focus()},0)}delete this._.parentDialog;this.foreach(function(a){a.resetInitValue&&a.resetInitValue()})}},addPage:function(a){if(!a.requiredContent||this._.editor.filter.check(a.requiredContent)){for(var b=[],c=a.label?' title="'+CKEDITOR.tools.htmlEncode(a.label)+'"':"",e=CKEDITOR.dialog._.uiElementBuilders.vbox.build(this,
{type:"vbox",className:"cke_dialog_page_contents",children:a.elements,expand:!!a.expand,padding:a.padding,style:a.style||"width: 100%;"},b),d=this._.contents[a.id]={},g=e.getChild(),f=0;e=g.shift();)!e.notAllowed&&("hbox"!=e.type&&"vbox"!=e.type)&&f++,d[e.id]=e,"function"==typeof e.getChild&&g.push.apply(g,e.getChild());f||(a.hidden=!0);b=CKEDITOR.dom.element.createFromHtml(b.join(""));b.setAttribute("role","tabpanel");e=CKEDITOR.env;d="cke_"+a.id+"_"+CKEDITOR.tools.getNextNumber();c=CKEDITOR.dom.element.createFromHtml(['<a class="cke_dialog_tab"',
0<this._.pageCount?" cke_last":"cke_first",c,a.hidden?' style="display:none"':"",' id="',d,'"',e.gecko&&!e.hc?"":' href="javascript:void(0)"',' tabIndex="-1" hidefocus="true" role="tab">',a.label,"</a>"].join(""));b.setAttribute("aria-labelledby",d);this._.tabs[a.id]=[c,b];this._.tabIdList.push(a.id);!a.hidden&&this._.pageCount++;this._.lastTab=c;this.updateStyle();b.setAttribute("name",a.id);b.appendTo(this.parts.contents);c.unselectable();this.parts.tabs.append(c);a.accessKey&&(O(this,this,"CTRL+"+
a.accessKey,Y,Z),this._.accessKeyMap["CTRL+"+a.accessKey]=a.id)}},selectPage:function(a){if(this._.currentTabId!=a&&!this._.tabs[a][0].hasClass("cke_dialog_tab_disabled")&&!1!==this.fire("selectPage",{page:a,currentPage:this._.currentTabId})){for(var b in this._.tabs){var c=this._.tabs[b][0],e=this._.tabs[b][1];b!=a&&(c.removeClass("cke_dialog_tab_selected"),e.hide());e.setAttribute("aria-hidden",b!=a)}var d=this._.tabs[a];d[0].addClass("cke_dialog_tab_selected");CKEDITOR.env.ie6Compat||CKEDITOR.env.ie7Compat?
(G(d[1]),d[1].show(),setTimeout(function(){G(d[1],1)},0)):d[1].show();this._.currentTabId=a;this._.currentTabIndex=CKEDITOR.tools.indexOf(this._.tabIdList,a)}},updateStyle:function(){this.parts.dialog[(1===this._.pageCount?"add":"remove")+"Class"]("cke_single_page")},hidePage:function(a){var b=this._.tabs[a]&&this._.tabs[a][0];b&&(1!=this._.pageCount&&b.isVisible())&&(a==this._.currentTabId&&this.selectPage(t.call(this)),b.hide(),this._.pageCount--,this.updateStyle())},showPage:function(a){if(a=this._.tabs[a]&&
this._.tabs[a][0])a.show(),this._.pageCount++,this.updateStyle()},getElement:function(){return this._.element},getName:function(){return this._.name},getContentElement:function(a,b){var c=this._.contents[a];return c&&c[b]},getValueOf:function(a,b){return this.getContentElement(a,b).getValue()},setValueOf:function(a,b,c){return this.getContentElement(a,b).setValue(c)},getButton:function(a){return this._.buttons[a]},click:function(a){return this._.buttons[a].click()},disableButton:function(a){return this._.buttons[a].disable()},
enableButton:function(a){return this._.buttons[a].enable()},getPageCount:function(){return this._.pageCount},getParentEditor:function(){return this._.editor},getSelectedElement:function(){return this.getParentEditor().getSelection().getSelectedElement()},addFocusable:function(a,b){if("undefined"==typeof b)b=this._.focusList.length,this._.focusList.push(new H(this,a,b));else{this._.focusList.splice(b,0,new H(this,a,b));for(var c=b+1;c<this._.focusList.length;c++)this._.focusList[c].focusIndex++}}};
CKEDITOR.tools.extend(CKEDITOR.dialog,{add:function(a,b){if(!this._.dialogDefinitions[a]||"function"==typeof b)this._.dialogDefinitions[a]=b},exists:function(a){return!!this._.dialogDefinitions[a]},getCurrent:function(){return CKEDITOR.dialog._.currentTop},isTabEnabled:function(a,b,c){a=a.config.removeDialogTabs;return!(a&&a.match(RegExp("(?:^|;)"+b+":"+c+"(?:$|;)","i")))},okButton:function(){var a=function(a,c){c=c||{};return CKEDITOR.tools.extend({id:"ok",type:"button",label:a.lang.common.ok,"class":"cke_dialog_ui_button_ok",
onClick:function(a){a=a.data.dialog;!1!==a.fire("ok",{hide:!0}).hide&&a.hide()}},c,!0)};a.type="button";a.override=function(b){return CKEDITOR.tools.extend(function(c){return a(c,b)},{type:"button"},!0)};return a}(),cancelButton:function(){var a=function(a,c){c=c||{};return CKEDITOR.tools.extend({id:"cancel",type:"button",label:a.lang.common.cancel,"class":"cke_dialog_ui_button_cancel",onClick:function(a){a=a.data.dialog;!1!==a.fire("cancel",{hide:!0}).hide&&a.hide()}},c,!0)};a.type="button";a.override=
function(b){return CKEDITOR.tools.extend(function(c){return a(c,b)},{type:"button"},!0)};return a}(),addUIElement:function(a,b){this._.uiElementBuilders[a]=b}});CKEDITOR.dialog._={uiElementBuilders:{},dialogDefinitions:{},currentTop:null,currentZIndex:null};CKEDITOR.event.implementOn(CKEDITOR.dialog);CKEDITOR.event.implementOn(CKEDITOR.dialog.prototype);var W={resizable:CKEDITOR.DIALOG_RESIZE_BOTH,minWidth:600,minHeight:400,buttons:[CKEDITOR.dialog.okButton,CKEDITOR.dialog.cancelButton]},z=function(a,
b,c){for(var e=0,d;d=a[e];e++)if(d.id==b||c&&d[c]&&(d=z(d[c],b,c)))return d;return null},A=function(a,b,c,e,d){if(c){for(var g=0,f;f=a[g];g++){if(f.id==c)return a.splice(g,0,b),b;if(e&&f[e]&&(f=A(f[e],b,c,e,!0)))return f}if(d)return null}a.push(b);return b},B=function(a,b,c){for(var e=0,d;d=a[e];e++){if(d.id==b)return a.splice(e,1);if(c&&d[c]&&(d=B(d[c],b,c)))return d}return null},L=function(a,b){this.dialog=a;for(var c=b.contents,e=0,d;d=c[e];e++)c[e]=d&&new I(a,d);CKEDITOR.tools.extend(this,b)};
L.prototype={getContents:function(a){return z(this.contents,a)},getButton:function(a){return z(this.buttons,a)},addContents:function(a,b){return A(this.contents,a,b)},addButton:function(a,b){return A(this.buttons,a,b)},removeContents:function(a){B(this.contents,a)},removeButton:function(a){B(this.buttons,a)}};I.prototype={get:function(a){return z(this.elements,a,"children")},add:function(a,b){return A(this.elements,a,b,"children")},remove:function(a){B(this.elements,a,"children")}};var F,w={},q,s=
{},M=function(a){var b=a.data.$.ctrlKey||a.data.$.metaKey,c=a.data.$.altKey,e=a.data.$.shiftKey,d=String.fromCharCode(a.data.$.keyCode);if((b=s[(b?"CTRL+":"")+(c?"ALT+":"")+(e?"SHIFT+":"")+d])&&b.length)b=b[b.length-1],b.keydown&&b.keydown.call(b.uiElement,b.dialog,b.key),a.data.preventDefault()},N=function(a){var b=a.data.$.ctrlKey||a.data.$.metaKey,c=a.data.$.altKey,e=a.data.$.shiftKey,d=String.fromCharCode(a.data.$.keyCode);if((b=s[(b?"CTRL+":"")+(c?"ALT+":"")+(e?"SHIFT+":"")+d])&&b.length)b=b[b.length-
1],b.keyup&&(b.keyup.call(b.uiElement,b.dialog,b.key),a.data.preventDefault())},O=function(a,b,c,e,d){(s[c]||(s[c]=[])).push({uiElement:a,dialog:b,key:c,keyup:d||a.accessKeyUp,keydown:e||a.accessKeyDown})},X=function(a){for(var b in s){for(var c=s[b],e=c.length-1;0<=e;e--)(c[e].dialog==a||c[e].uiElement==a)&&c.splice(e,1);0===c.length&&delete s[b]}},Z=function(a,b){a._.accessKeyMap[b]&&a.selectPage(a._.accessKeyMap[b])},Y=function(){};(function(){CKEDITOR.ui.dialog={uiElement:function(a,b,c,e,d,g,
f){if(!(4>arguments.length)){var h=(e.call?e(b):e)||"div",m=["<",h," "],k=(d&&d.call?d(b):d)||{},i=(g&&g.call?g(b):g)||{},o=(f&&f.call?f.call(this,a,b):f)||"",j=this.domId=i.id||CKEDITOR.tools.getNextId()+"_uiElement";b.requiredContent&&!a.getParentEditor().filter.check(b.requiredContent)&&(k.display="none",this.notAllowed=!0);i.id=j;var n={};b.type&&(n["cke_dialog_ui_"+b.type]=1);b.className&&(n[b.className]=1);b.disabled&&(n.cke_disabled=1);for(var l=i["class"]&&i["class"].split?i["class"].split(" "):
[],j=0;j<l.length;j++)l[j]&&(n[l[j]]=1);l=[];for(j in n)l.push(j);i["class"]=l.join(" ");b.title&&(i.title=b.title);n=(b.style||"").split(";");b.align&&(l=b.align,k["margin-left"]="left"==l?0:"auto",k["margin-right"]="right"==l?0:"auto");for(j in k)n.push(j+":"+k[j]);b.hidden&&n.push("display:none");for(j=n.length-1;0<=j;j--)""===n[j]&&n.splice(j,1);0<n.length&&(i.style=(i.style?i.style+"; ":"")+n.join("; "));for(j in i)m.push(j+'="'+CKEDITOR.tools.htmlEncode(i[j])+'" ');m.push(">",o,"</",h,">");
c.push(m.join(""));(this._||(this._={})).dialog=a;"boolean"==typeof b.isChanged&&(this.isChanged=function(){return b.isChanged});"function"==typeof b.isChanged&&(this.isChanged=b.isChanged);"function"==typeof b.setValue&&(this.setValue=CKEDITOR.tools.override(this.setValue,function(a){return function(c){a.call(this,b.setValue.call(this,c))}}));"function"==typeof b.getValue&&(this.getValue=CKEDITOR.tools.override(this.getValue,function(a){return function(){return b.getValue.call(this,a.call(this))}}));
CKEDITOR.event.implementOn(this);this.registerEvents(b);this.accessKeyUp&&(this.accessKeyDown&&b.accessKey)&&O(this,a,"CTRL+"+b.accessKey);var p=this;a.on("load",function(){var b=p.getInputElement();if(b){var c=p.type in{checkbox:1,ratio:1}&&CKEDITOR.env.ie&&CKEDITOR.env.version<8?"cke_dialog_ui_focused":"";b.on("focus",function(){a._.tabBarMode=false;a._.hasFocus=true;p.fire("focus");c&&this.addClass(c)});b.on("blur",function(){p.fire("blur");c&&this.removeClass(c)})}});CKEDITOR.tools.extend(this,
b);this.keyboardFocusable&&(this.tabIndex=b.tabIndex||0,this.focusIndex=a._.focusList.push(this)-1,this.on("focus",function(){a._.currentFocusIndex=p.focusIndex}))}},hbox:function(a,b,c,e,d){if(!(4>arguments.length)){this._||(this._={});var g=this._.children=b,f=d&&d.widths||null,h=d&&d.height||null,m,k={role:"presentation"};d&&d.align&&(k.align=d.align);CKEDITOR.ui.dialog.uiElement.call(this,a,d||{type:"hbox"},e,"table",{},k,function(){var a=['<tbody><tr class="cke_dialog_ui_hbox">'];for(m=0;m<c.length;m++){var b=
"cke_dialog_ui_hbox_child",e=[];0===m&&(b="cke_dialog_ui_hbox_first");m==c.length-1&&(b="cke_dialog_ui_hbox_last");a.push('<td class="',b,'" role="presentation" ');f?f[m]&&e.push("width:"+r(f[m])):e.push("width:"+Math.floor(100/c.length)+"%");h&&e.push("height:"+r(h));d&&void 0!==d.padding&&e.push("padding:"+r(d.padding));CKEDITOR.env.ie&&(CKEDITOR.env.quirks&&g[m].align)&&e.push("text-align:"+g[m].align);0<e.length&&a.push('style="'+e.join("; ")+'" ');a.push(">",c[m],"</td>")}a.push("</tr></tbody>");
return a.join("")})}},vbox:function(a,b,c,e,d){if(!(3>arguments.length)){this._||(this._={});var g=this._.children=b,f=d&&d.width||null,h=d&&d.heights||null;CKEDITOR.ui.dialog.uiElement.call(this,a,d||{type:"vbox"},e,"div",null,{role:"presentation"},function(){var b=['<table role="presentation" cellspacing="0" border="0" '];b.push('style="');d&&d.expand&&b.push("height:100%;");b.push("width:"+r(f||"100%"),";");CKEDITOR.env.webkit&&b.push("float:none;");b.push('"');b.push('align="',CKEDITOR.tools.htmlEncode(d&&
d.align||("ltr"==a.getParentEditor().lang.dir?"left":"right")),'" ');b.push("><tbody>");for(var e=0;e<c.length;e++){var i=[];b.push('<tr><td role="presentation" ');f&&i.push("width:"+r(f||"100%"));h?i.push("height:"+r(h[e])):d&&d.expand&&i.push("height:"+Math.floor(100/c.length)+"%");d&&void 0!==d.padding&&i.push("padding:"+r(d.padding));CKEDITOR.env.ie&&(CKEDITOR.env.quirks&&g[e].align)&&i.push("text-align:"+g[e].align);0<i.length&&b.push('style="',i.join("; "),'" ');b.push(' class="cke_dialog_ui_vbox_child">',
c[e],"</td></tr>")}b.push("</tbody></table>");return b.join("")})}}}})();CKEDITOR.ui.dialog.uiElement.prototype={getElement:function(){return CKEDITOR.document.getById(this.domId)},getInputElement:function(){return this.getElement()},getDialog:function(){return this._.dialog},setValue:function(a,b){this.getInputElement().setValue(a);!b&&this.fire("change",{value:a});return this},getValue:function(){return this.getInputElement().getValue()},isChanged:function(){return!1},selectParentTab:function(){for(var a=
this.getInputElement();(a=a.getParent())&&-1==a.$.className.search("cke_dialog_page_contents"););if(!a)return this;a=a.getAttribute("name");this._.dialog._.currentTabId!=a&&this._.dialog.selectPage(a);return this},focus:function(){this.selectParentTab().getInputElement().focus();return this},registerEvents:function(a){var b=/^on([A-Z]\w+)/,c,e=function(a,b,c,d){b.on("load",function(){a.getInputElement().on(c,d,a)})},d;for(d in a)if(c=d.match(b))this.eventProcessors[d]?this.eventProcessors[d].call(this,
this._.dialog,a[d]):e(this,this._.dialog,c[1].toLowerCase(),a[d]);return this},eventProcessors:{onLoad:function(a,b){a.on("load",b,this)},onShow:function(a,b){a.on("show",b,this)},onHide:function(a,b){a.on("hide",b,this)}},accessKeyDown:function(){this.focus()},accessKeyUp:function(){},disable:function(){var a=this.getElement();this.getInputElement().setAttribute("disabled","true");a.addClass("cke_disabled")},enable:function(){var a=this.getElement();this.getInputElement().removeAttribute("disabled");
a.removeClass("cke_disabled")},isEnabled:function(){return!this.getElement().hasClass("cke_disabled")},isVisible:function(){return this.getInputElement().isVisible()},isFocusable:function(){return!this.isEnabled()||!this.isVisible()?!1:!0}};CKEDITOR.ui.dialog.hbox.prototype=CKEDITOR.tools.extend(new CKEDITOR.ui.dialog.uiElement,{getChild:function(a){if(1>arguments.length)return this._.children.concat();a.splice||(a=[a]);return 2>a.length?this._.children[a[0]]:this._.children[a[0]]&&this._.children[a[0]].getChild?
this._.children[a[0]].getChild(a.slice(1,a.length)):null}},!0);CKEDITOR.ui.dialog.vbox.prototype=new CKEDITOR.ui.dialog.hbox;(function(){var a={build:function(a,c,e){for(var d=c.children,g,f=[],h=[],m=0;m<d.length&&(g=d[m]);m++){var k=[];f.push(k);h.push(CKEDITOR.dialog._.uiElementBuilders[g.type].build(a,g,k))}return new CKEDITOR.ui.dialog[c.type](a,h,f,e,c)}};CKEDITOR.dialog.addUIElement("hbox",a);CKEDITOR.dialog.addUIElement("vbox",a)})();CKEDITOR.dialogCommand=function(a,b){this.dialogName=a;
CKEDITOR.tools.extend(this,b,!0)};CKEDITOR.dialogCommand.prototype={exec:function(a){a.openDialog(this.dialogName)},canUndo:!1,editorFocus:1};(function(){var a=/^([a]|[^a])+$/,b=/^\d*$/,c=/^\d*(?:\.\d+)?$/,e=/^(((\d*(\.\d+))|(\d*))(px|\%)?)?$/,d=/^(((\d*(\.\d+))|(\d*))(px|em|ex|in|cm|mm|pt|pc|\%)?)?$/i,g=/^(\s*[\w-]+\s*:\s*[^:;]+(?:;|$))*$/;CKEDITOR.VALIDATE_OR=1;CKEDITOR.VALIDATE_AND=2;CKEDITOR.dialog.validate={functions:function(){var a=arguments;return function(){var b=this&&this.getValue?this.getValue():
a[0],c,d=CKEDITOR.VALIDATE_AND,e=[],g;for(g=0;g<a.length;g++)if("function"==typeof a[g])e.push(a[g]);else break;g<a.length&&"string"==typeof a[g]&&(c=a[g],g++);g<a.length&&"number"==typeof a[g]&&(d=a[g]);var j=d==CKEDITOR.VALIDATE_AND?!0:!1;for(g=0;g<e.length;g++)j=d==CKEDITOR.VALIDATE_AND?j&&e[g](b):j||e[g](b);return!j?c:!0}},regex:function(a,b){return function(c){c=this&&this.getValue?this.getValue():c;return!a.test(c)?b:!0}},notEmpty:function(b){return this.regex(a,b)},integer:function(a){return this.regex(b,
a)},number:function(a){return this.regex(c,a)},cssLength:function(a){return this.functions(function(a){return d.test(CKEDITOR.tools.trim(a))},a)},htmlLength:function(a){return this.functions(function(a){return e.test(CKEDITOR.tools.trim(a))},a)},inlineStyle:function(a){return this.functions(function(a){return g.test(CKEDITOR.tools.trim(a))},a)},equals:function(a,b){return this.functions(function(b){return b==a},b)},notEqual:function(a,b){return this.functions(function(b){return b!=a},b)}};CKEDITOR.on("instanceDestroyed",
function(a){if(CKEDITOR.tools.isEmpty(CKEDITOR.instances)){for(var b;b=CKEDITOR.dialog._.currentTop;)b.hide();for(var c in w)w[c].remove();w={}}var a=a.editor._.storedDialogs,d;for(d in a)a[d].destroy()})})();CKEDITOR.tools.extend(CKEDITOR.editor.prototype,{openDialog:function(a,b){var c=null,e=CKEDITOR.dialog._.dialogDefinitions[a];null===CKEDITOR.dialog._.currentTop&&J(this);if("function"==typeof e)c=this._.storedDialogs||(this._.storedDialogs={}),c=c[a]||(c[a]=new CKEDITOR.dialog(this,a)),b&&b.call(c,
c),c.show();else{if("failed"==e)throw K(this),Error('[CKEDITOR.dialog.openDialog] Dialog "'+a+'" failed when loading definition.');"string"==typeof e&&CKEDITOR.scriptLoader.load(CKEDITOR.getUrl(e),function(){"function"!=typeof CKEDITOR.dialog._.dialogDefinitions[a]&&(CKEDITOR.dialog._.dialogDefinitions[a]="failed");this.openDialog(a,b)},this,0,1)}CKEDITOR.skin.loadPart("dialog");return c}})})();
CKEDITOR.plugins.add("dialog",{requires:"dialogui",init:function(t){t.on("doubleclick",function(u){u.data.dialog&&t.openDialog(u.data.dialog)},null,null,999)}});CKEDITOR.plugins.add("about",{requires:"dialog",init:function(a){var b=a.addCommand("about",new CKEDITOR.dialogCommand("about"));b.modes={wysiwyg:1,source:1};b.canUndo=!1;b.readOnly=1;a.ui.addButton&&a.ui.addButton("About",{label:a.lang.about.title,command:"about",toolbar:"about"});CKEDITOR.dialog.add("about",this.path+"dialogs/about.js")}});(function(){CKEDITOR.plugins.add("a11yhelp",{requires:"dialog",availableLangs:{af:1,ar:1,bg:1,ca:1,cs:1,cy:1,da:1,de:1,el:1,en:1,"en-gb":1,eo:1,es:1,et:1,fa:1,fi:1,fr:1,"fr-ca":1,gl:1,gu:1,he:1,hi:1,hr:1,hu:1,id:1,it:1,ja:1,km:1,ko:1,ku:1,lt:1,lv:1,mk:1,mn:1,nb:1,nl:1,no:1,pl:1,pt:1,"pt-br":1,ro:1,ru:1,si:1,sk:1,sl:1,sq:1,sr:1,"sr-latn":1,sv:1,th:1,tr:1,tt:1,ug:1,uk:1,vi:1,zh:1,"zh-cn":1},init:function(b){var c=this;b.addCommand("a11yHelp",{exec:function(){var a=b.langCode,a=c.availableLangs[a]?a:
c.availableLangs[a.replace(/-.*/,"")]?a.replace(/-.*/,""):"en";CKEDITOR.scriptLoader.load(CKEDITOR.getUrl(c.path+"dialogs/lang/"+a+".js"),function(){b.lang.a11yhelp=c.langEntries[a];b.openDialog("a11yHelp")})},modes:{wysiwyg:1,source:1},readOnly:1,canUndo:!1});b.setKeystroke(CKEDITOR.ALT+48,"a11yHelp");CKEDITOR.dialog.add("a11yHelp",this.path+"dialogs/a11yhelp.js");b.on("ariaEditorHelpLabel",function(a){a.data.label=b.lang.common.editorHelp})}})})();(function(){function f(c){var a=this.att,c=c&&c.hasAttribute(a)&&c.getAttribute(a)||"";void 0!==c&&this.setValue(c)}function g(){for(var c,a=0;a<arguments.length;a++)if(arguments[a]instanceof CKEDITOR.dom.element){c=arguments[a];break}if(c){var a=this.att,b=this.getValue();b?c.setAttribute(a,b):c.removeAttribute(a,b)}}var i={id:1,dir:1,classes:1,styles:1};CKEDITOR.plugins.add("dialogadvtab",{requires:"dialog",allowedContent:function(c){c||(c=i);var a=[];c.id&&a.push("id");c.dir&&a.push("dir");var b=
"";a.length&&(b+="["+a.join(",")+"]");c.classes&&(b+="(*)");c.styles&&(b+="{*}");return b},createAdvancedTab:function(c,a,b){a||(a=i);var d=c.lang.common,h={id:"advanced",label:d.advancedTab,title:d.advancedTab,elements:[{type:"vbox",padding:1,children:[]}]},e=[];if(a.id||a.dir)a.id&&e.push({id:"advId",att:"id",type:"text",requiredContent:b?b+"[id]":null,label:d.id,setup:f,commit:g}),a.dir&&e.push({id:"advLangDir",att:"dir",type:"select",requiredContent:b?b+"[dir]":null,label:d.langDir,"default":"",
style:"width:100%",items:[[d.notSet,""],[d.langDirLTR,"ltr"],[d.langDirRTL,"rtl"]],setup:f,commit:g}),h.elements[0].children.push({type:"hbox",widths:["50%","50%"],children:[].concat(e)});if(a.styles||a.classes)e=[],a.styles&&e.push({id:"advStyles",att:"style",type:"text",requiredContent:b?b+"{cke-xyz}":null,label:d.styles,"default":"",validate:CKEDITOR.dialog.validate.inlineStyle(d.invalidInlineStyle),onChange:function(){},getStyle:function(a,c){var b=this.getValue().match(RegExp("(?:^|;)\\s*"+a+
"\\s*:\\s*([^;]*)","i"));return b?b[1]:c},updateStyle:function(a,b){var d=this.getValue(),e=c.document.createElement("span");e.setAttribute("style",d);e.setStyle(a,b);d=CKEDITOR.tools.normalizeCssText(e.getAttribute("style"));this.setValue(d,1)},setup:f,commit:g}),a.classes&&e.push({type:"hbox",widths:["45%","55%"],children:[{id:"advCSSClasses",att:"class",type:"text",requiredContent:b?b+"(cke-xyz)":null,label:d.cssClasses,"default":"",setup:f,commit:g}]}),h.elements[0].children.push({type:"hbox",
widths:["50%","50%"],children:[].concat(e)});return h}})})();CKEDITOR.plugins.add("basicstyles",{init:function(c){var e=0,d=function(g,d,b,a){if(a){var a=new CKEDITOR.style(a),f=h[b];f.unshift(a);c.attachStyleStateChange(a,function(a){!c.readOnly&&c.getCommand(b).setState(a)});c.addCommand(b,new CKEDITOR.styleCommand(a,{contentForms:f}));c.ui.addButton&&c.ui.addButton(g,{label:d,command:b,toolbar:"basicstyles,"+(e+=10)})}},h={bold:["strong","b",["span",function(a){a=a.styles["font-weight"];return"bold"==a||700<=+a}]],italic:["em","i",["span",function(a){return"italic"==
a.styles["font-style"]}]],underline:["u",["span",function(a){return"underline"==a.styles["text-decoration"]}]],strike:["s","strike",["span",function(a){return"line-through"==a.styles["text-decoration"]}]],subscript:["sub"],superscript:["sup"]},b=c.config,a=c.lang.basicstyles;d("Bold",a.bold,"bold",b.coreStyles_bold);d("Italic",a.italic,"italic",b.coreStyles_italic);d("Underline",a.underline,"underline",b.coreStyles_underline);d("Strike",a.strike,"strike",b.coreStyles_strike);d("Subscript",a.subscript,
"subscript",b.coreStyles_subscript);d("Superscript",a.superscript,"superscript",b.coreStyles_superscript);c.setKeystroke([[CKEDITOR.CTRL+66,"bold"],[CKEDITOR.CTRL+73,"italic"],[CKEDITOR.CTRL+85,"underline"]])}});CKEDITOR.config.coreStyles_bold={element:"strong",overrides:"b"};CKEDITOR.config.coreStyles_italic={element:"em",overrides:"i"};CKEDITOR.config.coreStyles_underline={element:"u"};CKEDITOR.config.coreStyles_strike={element:"s",overrides:"strike"};CKEDITOR.config.coreStyles_subscript={element:"sub"};
CKEDITOR.config.coreStyles_superscript={element:"sup"};(function(){function n(a,f,d,b){if(!a.isReadOnly()&&!a.equals(d.editable())){CKEDITOR.dom.element.setMarker(b,a,"bidi_processed",1);for(var b=a,c=d.editable();(b=b.getParent())&&!b.equals(c);)if(b.getCustomData("bidi_processed")){a.removeStyle("direction");a.removeAttribute("dir");return}b="useComputedState"in d.config?d.config.useComputedState:1;if((b?a.getComputedStyle("direction"):a.getStyle("direction")||a.hasAttribute("dir"))!=f)a.removeStyle("direction"),b?(a.removeAttribute("dir"),f!=a.getComputedStyle("direction")&&
a.setAttribute("dir",f)):a.setAttribute("dir",f),d.forceNextSelectionCheck()}}function r(a,f,d){var b=a.getCommonAncestor(!1,!0),a=a.clone();a.enlarge(d==CKEDITOR.ENTER_BR?CKEDITOR.ENLARGE_LIST_ITEM_CONTENTS:CKEDITOR.ENLARGE_BLOCK_CONTENTS);if(a.checkBoundaryOfElement(b,CKEDITOR.START)&&a.checkBoundaryOfElement(b,CKEDITOR.END)){for(var c;b&&b.type==CKEDITOR.NODE_ELEMENT&&(c=b.getParent())&&1==c.getChildCount()&&!(b.getName()in f);)b=c;return b.type==CKEDITOR.NODE_ELEMENT&&b.getName()in f&&b}}function m(a){return{context:"p",
allowedContent:{"h1 h2 h3 h4 h5 h6 table ul ol blockquote div tr p div li td":{propertiesOnly:!0,attributes:"dir"}},requiredContent:"p[dir]",refresh:function(a,d){var b=a.config.useComputedState,c,b=void 0===b||b;if(!b){c=d.lastElement;for(var h=a.editable();c&&!(c.getName()in q||c.equals(h));){var e=c.getParent();if(!e)break;c=e}}c=c||d.block||d.blockLimit;c.equals(a.editable())&&(h=a.getSelection().getRanges()[0].getEnclosedNode())&&h.type==CKEDITOR.NODE_ELEMENT&&(c=h);c&&(b=b?c.getComputedStyle("direction"):
c.getStyle("direction")||c.getAttribute("dir"),a.getCommand("bidirtl").setState("rtl"==b?CKEDITOR.TRISTATE_ON:CKEDITOR.TRISTATE_OFF),a.getCommand("bidiltr").setState("ltr"==b?CKEDITOR.TRISTATE_ON:CKEDITOR.TRISTATE_OFF));b=(d.block||d.blockLimit||a.editable()).getDirection(1);if(b!=(a._.selDir||a.lang.dir))a._.selDir=b,a.fire("contentDirChanged",b)},exec:function(f){var d=f.getSelection(),b=f.config.enterMode,c=d.getRanges();if(c&&c.length){for(var h={},e=d.createBookmarks(),c=c.createIterator(),g,
j=0;g=c.getNextRange(1);){var i=g.getEnclosedNode();if(!i||i&&!(i.type==CKEDITOR.NODE_ELEMENT&&i.getName()in o))i=r(g,p,b);i&&n(i,a,f,h);var k=new CKEDITOR.dom.walker(g),l=e[j].startNode,m=e[j++].endNode;k.evaluator=function(a){var c=b==CKEDITOR.ENTER_P?"p":"div",d;if(!(d=!(a&&a.type==CKEDITOR.NODE_ELEMENT))){if(d=a.getName()in p){if(!(c=!a.is(c)))c=a.getParent(),c=!(c&&c.type==CKEDITOR.NODE_ELEMENT)||!a.getParent().is("blockquote");d=c&&a.getPosition(l)&CKEDITOR.POSITION_FOLLOWING&&(a.getPosition(m)&
CKEDITOR.POSITION_PRECEDING+CKEDITOR.POSITION_CONTAINS)==CKEDITOR.POSITION_PRECEDING}d=!d}return!d};for(;i=k.next();)n(i,a,f,h);g=g.createIterator();for(g.enlargeBr=b!=CKEDITOR.ENTER_BR;i=g.getNextParagraph(b==CKEDITOR.ENTER_P?"p":"div");)n(i,a,f,h)}CKEDITOR.dom.element.clearAllMarkers(h);f.forceNextSelectionCheck();d.selectBookmarks(e);f.focus()}}}}function s(a){var f=a==j.setAttribute,d=a==j.removeAttribute,b=/\bdirection\s*:\s*(.*?)\s*(:?$|;)/;return function(c,h){if(!this.isReadOnly()){var e;
if(e=c==(f||d?"dir":"direction")||"style"==c&&(d||b.test(h))){a:{e=this;for(var g=e.getDocument().getBody().getParent();e;){if(e.equals(g)){e=!1;break a}e=e.getParent()}e=!0}e=!e}if(e&&(e=this.getDirection(1),g=a.apply(this,arguments),e!=this.getDirection(1)))return this.getDocument().fire("dirChanged",this),g}return a.apply(this,arguments)}}var p={table:1,ul:1,ol:1,blockquote:1,div:1},o={},q={};CKEDITOR.tools.extend(o,p,{tr:1,p:1,div:1,li:1});CKEDITOR.tools.extend(q,o,{td:1});CKEDITOR.plugins.add("bidi",
{init:function(a){function f(b,c,d,e,f){a.addCommand(d,new CKEDITOR.command(a,e));a.ui.addButton&&a.ui.addButton(b,{label:c,command:d,toolbar:"bidi,"+f})}if(!a.blockless){var d=a.lang.bidi;f("BidiLtr",d.ltr,"bidiltr",m("ltr"),10);f("BidiRtl",d.rtl,"bidirtl",m("rtl"),20);a.on("contentDom",function(){a.document.on("dirChanged",function(b){a.fire("dirChanged",{node:b.data,dir:b.data.getDirection(1)})})});a.on("contentDirChanged",function(b){var b=(a.lang.dir!=b.data?"add":"remove")+"Class",c=a.ui.space(a.config.toolbarLocation);
if(c)c[b]("cke_mixed_dir_content")})}}});for(var j=CKEDITOR.dom.element.prototype,l=["setStyle","removeStyle","setAttribute","removeAttribute"],k=0;k<l.length;k++)j[l[k]]=CKEDITOR.tools.override(j[l[k]],s)})();(function(){var k={exec:function(g){var a=g.getCommand("blockquote").state,i=g.getSelection(),c=i&&i.getRanges()[0];if(c){var h=i.createBookmarks();if(CKEDITOR.env.ie){var e=h[0].startNode,b=h[0].endNode,d;if(e&&"blockquote"==e.getParent().getName())for(d=e;d=d.getNext();)if(d.type==CKEDITOR.NODE_ELEMENT&&d.isBlockBoundary()){e.move(d,!0);break}if(b&&"blockquote"==b.getParent().getName())for(d=b;d=d.getPrevious();)if(d.type==CKEDITOR.NODE_ELEMENT&&d.isBlockBoundary()){b.move(d);break}}var f=c.createIterator();
f.enlargeBr=g.config.enterMode!=CKEDITOR.ENTER_BR;if(a==CKEDITOR.TRISTATE_OFF){for(e=[];a=f.getNextParagraph();)e.push(a);1>e.length&&(a=g.document.createElement(g.config.enterMode==CKEDITOR.ENTER_P?"p":"div"),b=h.shift(),c.insertNode(a),a.append(new CKEDITOR.dom.text("﻿",g.document)),c.moveToBookmark(b),c.selectNodeContents(a),c.collapse(!0),b=c.createBookmark(),e.push(a),h.unshift(b));d=e[0].getParent();c=[];for(b=0;b<e.length;b++)a=e[b],d=d.getCommonAncestor(a.getParent());for(a={table:1,tbody:1,
tr:1,ol:1,ul:1};a[d.getName()];)d=d.getParent();for(b=null;0<e.length;){for(a=e.shift();!a.getParent().equals(d);)a=a.getParent();a.equals(b)||c.push(a);b=a}for(;0<c.length;)if(a=c.shift(),"blockquote"==a.getName()){for(b=new CKEDITOR.dom.documentFragment(g.document);a.getFirst();)b.append(a.getFirst().remove()),e.push(b.getLast());b.replace(a)}else e.push(a);c=g.document.createElement("blockquote");for(c.insertBefore(e[0]);0<e.length;)a=e.shift(),c.append(a)}else if(a==CKEDITOR.TRISTATE_ON){b=[];
for(d={};a=f.getNextParagraph();){for(e=c=null;a.getParent();){if("blockquote"==a.getParent().getName()){c=a.getParent();e=a;break}a=a.getParent()}c&&(e&&!e.getCustomData("blockquote_moveout"))&&(b.push(e),CKEDITOR.dom.element.setMarker(d,e,"blockquote_moveout",!0))}CKEDITOR.dom.element.clearAllMarkers(d);a=[];e=[];for(d={};0<b.length;)f=b.shift(),c=f.getParent(),f.getPrevious()?f.getNext()?(f.breakParent(f.getParent()),e.push(f.getNext())):f.remove().insertAfter(c):f.remove().insertBefore(c),c.getCustomData("blockquote_processed")||
(e.push(c),CKEDITOR.dom.element.setMarker(d,c,"blockquote_processed",!0)),a.push(f);CKEDITOR.dom.element.clearAllMarkers(d);for(b=e.length-1;0<=b;b--){c=e[b];a:{d=c;for(var f=0,k=d.getChildCount(),j=void 0;f<k&&(j=d.getChild(f));f++)if(j.type==CKEDITOR.NODE_ELEMENT&&j.isBlockBoundary()){d=!1;break a}d=!0}d&&c.remove()}if(g.config.enterMode==CKEDITOR.ENTER_BR)for(c=!0;a.length;)if(f=a.shift(),"div"==f.getName()){b=new CKEDITOR.dom.documentFragment(g.document);c&&(f.getPrevious()&&!(f.getPrevious().type==
CKEDITOR.NODE_ELEMENT&&f.getPrevious().isBlockBoundary()))&&b.append(g.document.createElement("br"));for(c=f.getNext()&&!(f.getNext().type==CKEDITOR.NODE_ELEMENT&&f.getNext().isBlockBoundary());f.getFirst();)f.getFirst().remove().appendTo(b);c&&b.append(g.document.createElement("br"));b.replace(f);c=!1}}i.selectBookmarks(h);g.focus()}},refresh:function(g,a){this.setState(g.elementPath(a.block||a.blockLimit).contains("blockquote",1)?CKEDITOR.TRISTATE_ON:CKEDITOR.TRISTATE_OFF)},context:"blockquote",
allowedContent:"blockquote",requiredContent:"blockquote"};CKEDITOR.plugins.add("blockquote",{init:function(g){g.blockless||(g.addCommand("blockquote",k),g.ui.addButton&&g.ui.addButton("Blockquote",{label:g.lang.blockquote.toolbar,command:"blockquote",toolbar:"blocks,10"}))}})})();(function(){function v(b){function a(){var e=b.editable();e.on(p,function(b){(!CKEDITOR.env.ie||!n)&&u(b)});CKEDITOR.env.ie&&e.on("paste",function(e){q||(g(),e.data.preventDefault(),u(e),h("paste")||b.openDialog("paste"))});CKEDITOR.env.ie&&(e.on("contextmenu",i,null,null,0),e.on("beforepaste",function(b){b.data&&(!b.data.$.ctrlKey&&!b.data.$.shiftKey)&&i()},null,null,0));e.on("beforecut",function(){!n&&j(b)});var a;e.attachListener(CKEDITOR.env.ie?e:b.document.getDocumentElement(),"mouseup",function(){a=
setTimeout(function(){r()},0)});b.on("destroy",function(){clearTimeout(a)});e.on("keyup",r)}function c(e){return{type:e,canUndo:"cut"==e,startDisabled:!0,exec:function(){"cut"==this.type&&j();var e;var a=this.type;if(CKEDITOR.env.ie)e=h(a);else try{e=b.document.$.execCommand(a,!1,null)}catch(d){e=!1}e||alert(b.lang.clipboard[this.type+"Error"]);return e}}}function d(){return{canUndo:!1,async:!0,exec:function(b,a){var d=function(a,d){a&&f(a.type,a.dataValue,!!d);b.fire("afterCommandExec",{name:"paste",
command:c,returnValue:!!a})},c=this;"string"==typeof a?d({type:"auto",dataValue:a},1):b.getClipboardData(d)}}}function g(){q=1;setTimeout(function(){q=0},100)}function i(){n=1;setTimeout(function(){n=0},10)}function h(e){var a=b.document,d=a.getBody(),c=!1,j=function(){c=!0};d.on(e,j);(7<CKEDITOR.env.version?a.$:a.$.selection.createRange()).execCommand(e);d.removeListener(e,j);return c}function f(e,a,d){e={type:e};if(d&&!1===b.fire("beforePaste",e)||!a)return!1;e.dataValue=a;return b.fire("paste",
e)}function j(){if(CKEDITOR.env.ie&&!CKEDITOR.env.quirks){var e=b.getSelection(),a,d,c;if(e.getType()==CKEDITOR.SELECTION_ELEMENT&&(a=e.getSelectedElement()))d=e.getRanges()[0],c=b.document.createText(""),c.insertBefore(a),d.setStartBefore(c),d.setEndAfter(a),e.selectRanges([d]),setTimeout(function(){a.getParent()&&(c.remove(),e.selectElement(a))},0)}}function l(a,d){var c=b.document,j=b.editable(),l=function(b){b.cancel()},g;if(!c.getById("cke_pastebin")){var i=b.getSelection(),s=i.createBookmarks();
CKEDITOR.env.ie&&i.root.fire("selectionchange");var k=new CKEDITOR.dom.element((CKEDITOR.env.webkit||j.is("body"))&&!CKEDITOR.env.ie?"body":"div",c);k.setAttributes({id:"cke_pastebin","data-cke-temp":"1"});var f=0,c=c.getWindow();CKEDITOR.env.webkit?(j.append(k),k.addClass("cke_editable"),j.is("body")||(f="static"!=j.getComputedStyle("position")?j:CKEDITOR.dom.element.get(j.$.offsetParent),f=f.getDocumentPosition().y)):j.getAscendant(CKEDITOR.env.ie?"body":"html",1).append(k);k.setStyles({position:"absolute",
top:c.getScrollPosition().y-f+10+"px",width:"1px",height:Math.max(1,c.getViewPaneSize().height-20)+"px",overflow:"hidden",margin:0,padding:0});CKEDITOR.env.safari&&k.setStyles(CKEDITOR.tools.cssVendorPrefix("user-select","text"));(f=k.getParent().isReadOnly())?(k.setOpacity(0),k.setAttribute("contenteditable",!0)):k.setStyle("ltr"==b.config.contentsLangDirection?"left":"right","-1000px");b.on("selectionChange",l,null,null,0);if(CKEDITOR.env.webkit||CKEDITOR.env.gecko)g=j.once("blur",l,null,null,-100);
f&&k.focus();f=new CKEDITOR.dom.range(k);f.selectNodeContents(k);var h=f.select();CKEDITOR.env.ie&&(g=j.once("blur",function(){b.lockSelection(h)}));var m=CKEDITOR.document.getWindow().getScrollPosition().y;setTimeout(function(){if(CKEDITOR.env.webkit)CKEDITOR.document.getBody().$.scrollTop=m;g&&g.removeListener();CKEDITOR.env.ie&&j.focus();i.selectBookmarks(s);k.remove();var a;if(CKEDITOR.env.webkit&&(a=k.getFirst())&&a.is&&a.hasClass("Apple-style-span"))k=a;b.removeListener("selectionChange",l);
d(k.getHtml())},0)}}function s(){if(CKEDITOR.env.ie){b.focus();g();var a=b.focusManager;a.lock();if(b.editable().fire(p)&&!h("paste"))return a.unlock(),!1;a.unlock()}else try{if(b.editable().fire(p)&&!b.document.$.execCommand("Paste",!1,null))throw 0;}catch(d){return!1}return!0}function o(a){if("wysiwyg"==b.mode)switch(a.data.keyCode){case CKEDITOR.CTRL+86:case CKEDITOR.SHIFT+45:a=b.editable();g();!CKEDITOR.env.ie&&a.fire("beforepaste");break;case CKEDITOR.CTRL+88:case CKEDITOR.SHIFT+46:b.fire("saveSnapshot"),
setTimeout(function(){b.fire("saveSnapshot")},50)}}function u(a){var d={type:"auto"},c=b.fire("beforePaste",d);l(a,function(b){b=b.replace(/<span[^>]+data-cke-bookmark[^<]*?<\/span>/ig,"");c&&f(d.type,b,0,1)})}function r(){if("wysiwyg"==b.mode){var a=m("paste");b.getCommand("cut").setState(m("cut"));b.getCommand("copy").setState(m("copy"));b.getCommand("paste").setState(a);b.fire("pasteState",a)}}function m(a){if(t&&a in{paste:1,cut:1})return CKEDITOR.TRISTATE_DISABLED;if("paste"==a)return CKEDITOR.TRISTATE_OFF;
var a=b.getSelection(),d=a.getRanges();return a.getType()==CKEDITOR.SELECTION_NONE||1==d.length&&d[0].collapsed?CKEDITOR.TRISTATE_DISABLED:CKEDITOR.TRISTATE_OFF}var n=0,q=0,t=0,p=CKEDITOR.env.ie?"beforepaste":"paste";(function(){b.on("key",o);b.on("contentDom",a);b.on("selectionChange",function(b){t=b.data.selection.getRanges()[0].checkReadOnly();r()});b.contextMenu&&b.contextMenu.addListener(function(b,a){t=a.getRanges()[0].checkReadOnly();return{cut:m("cut"),copy:m("copy"),paste:m("paste")}})})();
(function(){function a(d,c,j,e,l){var g=b.lang.clipboard[c];b.addCommand(c,j);b.ui.addButton&&b.ui.addButton(d,{label:g,command:c,toolbar:"clipboard,"+e});b.addMenuItems&&b.addMenuItem(c,{label:g,command:c,group:"clipboard",order:l})}a("Cut","cut",c("cut"),10,1);a("Copy","copy",c("copy"),20,4);a("Paste","paste",d(),30,8)})();b.getClipboardData=function(a,d){function c(a){a.removeListener();a.cancel();d(a.data)}function j(a){a.removeListener();a.cancel();i=!0;d({type:f,dataValue:a.data})}function l(){this.customTitle=
a&&a.title}var g=!1,f="auto",i=!1;d||(d=a,a=null);b.on("paste",c,null,null,0);b.on("beforePaste",function(a){a.removeListener();g=true;f=a.data.type},null,null,1E3);!1===s()&&(b.removeListener("paste",c),g&&b.fire("pasteDialog",l)?(b.on("pasteDialogCommit",j),b.on("dialogHide",function(a){a.removeListener();a.data.removeListener("pasteDialogCommit",j);setTimeout(function(){i||d(null)},10)})):d(null))}}function w(b){if(CKEDITOR.env.webkit){if(!b.match(/^[^<]*$/g)&&!b.match(/^(<div><br( ?\/)?><\/div>|<div>[^<]*<\/div>)*$/gi))return"html"}else if(CKEDITOR.env.ie){if(!b.match(/^([^<]|<br( ?\/)?>)*$/gi)&&
!b.match(/^(<p>([^<]|<br( ?\/)?>)*<\/p>|(\r\n))*$/gi))return"html"}else if(CKEDITOR.env.gecko){if(!b.match(/^([^<]|<br( ?\/)?>)*$/gi))return"html"}else return"html";return"htmlifiedtext"}function x(b,a){function c(a){return CKEDITOR.tools.repeat("</p><p>",~~(a/2))+(1==a%2?"<br>":"")}a=a.replace(/\s+/g," ").replace(/> +</g,"><").replace(/<br ?\/>/gi,"<br>");a=a.replace(/<\/?[A-Z]+>/g,function(a){return a.toLowerCase()});if(a.match(/^[^<]$/))return a;CKEDITOR.env.webkit&&-1<a.indexOf("<div>")&&(a=a.replace(/^(<div>(<br>|)<\/div>)(?!$|(<div>(<br>|)<\/div>))/g,
"<br>").replace(/^(<div>(<br>|)<\/div>){2}(?!$)/g,"<div></div>"),a.match(/<div>(<br>|)<\/div>/)&&(a="<p>"+a.replace(/(<div>(<br>|)<\/div>)+/g,function(a){return c(a.split("</div><div>").length+1)})+"</p>"),a=a.replace(/<\/div><div>/g,"<br>"),a=a.replace(/<\/?div>/g,""));CKEDITOR.env.gecko&&b.enterMode!=CKEDITOR.ENTER_BR&&(CKEDITOR.env.gecko&&(a=a.replace(/^<br><br>$/,"<br>")),-1<a.indexOf("<br><br>")&&(a="<p>"+a.replace(/(<br>){2,}/g,function(a){return c(a.length/4)})+"</p>"));return o(b,a)}function y(){var b=
new CKEDITOR.htmlParser.filter,a={blockquote:1,dl:1,fieldset:1,h1:1,h2:1,h3:1,h4:1,h5:1,h6:1,ol:1,p:1,table:1,ul:1},c=CKEDITOR.tools.extend({br:0},CKEDITOR.dtd.$inline),d={p:1,br:1,"cke:br":1},g=CKEDITOR.dtd,i=CKEDITOR.tools.extend({area:1,basefont:1,embed:1,iframe:1,map:1,object:1,param:1},CKEDITOR.dtd.$nonBodyContent,CKEDITOR.dtd.$cdata),h=function(a){delete a.name;a.add(new CKEDITOR.htmlParser.text(" "))},f=function(a){for(var b=a,c;(b=b.next)&&b.name&&b.name.match(/^h\d$/);){c=new CKEDITOR.htmlParser.element("cke:br");
c.isEmpty=!0;for(a.add(c);c=b.children.shift();)a.add(c)}};b.addRules({elements:{h1:f,h2:f,h3:f,h4:f,h5:f,h6:f,img:function(a){var a=CKEDITOR.tools.trim(a.attributes.alt||""),b=" ";a&&!a.match(/(^http|\.(jpe?g|gif|png))/i)&&(b=" ["+a+"] ");return new CKEDITOR.htmlParser.text(b)},td:h,th:h,$:function(b){var f=b.name,h;if(i[f])return!1;b.attributes={};if("br"==f)return b;if(a[f])b.name="p";else if(c[f])delete b.name;else if(g[f]){h=new CKEDITOR.htmlParser.element("cke:br");h.isEmpty=!0;if(CKEDITOR.dtd.$empty[f])return h;
b.add(h,0);h=h.clone();h.isEmpty=!0;b.add(h);delete b.name}d[b.name]||delete b.name;return b}}},{applyToAll:!0});return b}function z(b,a,c){var a=new CKEDITOR.htmlParser.fragment.fromHtml(a),d=new CKEDITOR.htmlParser.basicWriter;a.writeHtml(d,c);var a=d.getHtml(),a=a.replace(/\s*(<\/?[a-z:]+ ?\/?>)\s*/g,"$1").replace(/(<cke:br \/>){2,}/g,"<cke:br />").replace(/(<cke:br \/>)(<\/?p>|<br \/>)/g,"$2").replace(/(<\/?p>|<br \/>)(<cke:br \/>)/g,"$1").replace(/<(cke:)?br( \/)?>/g,"<br>").replace(/<p><\/p>/g,
""),g=0,a=a.replace(/<\/?p>/g,function(a){if("<p>"==a){if(1<++g)return"</p><p>"}else if(0<--g)return"</p><p>";return a}).replace(/<p><\/p>/g,"");return o(b,a)}function o(b,a){b.enterMode==CKEDITOR.ENTER_BR?a=a.replace(/(<\/p><p>)+/g,function(a){return CKEDITOR.tools.repeat("<br>",2*(a.length/7))}).replace(/<\/?p>/g,""):b.enterMode==CKEDITOR.ENTER_DIV&&(a=a.replace(/<(\/)?p>/g,"<$1div>"));return a}CKEDITOR.plugins.add("clipboard",{requires:"dialog",init:function(b){var a;v(b);CKEDITOR.dialog.add("paste",
CKEDITOR.getUrl(this.path+"dialogs/paste.js"));b.on("paste",function(a){var b=a.data.dataValue,g=CKEDITOR.dtd.$block;-1<b.indexOf("Apple-")&&(b=b.replace(/<span class="Apple-converted-space">&nbsp;<\/span>/gi," "),"html"!=a.data.type&&(b=b.replace(/<span class="Apple-tab-span"[^>]*>([^<]*)<\/span>/gi,function(a,b){return b.replace(/\t/g,"&nbsp;&nbsp; &nbsp;")})),-1<b.indexOf('<br class="Apple-interchange-newline">')&&(a.data.startsWithEOL=1,a.data.preSniffing="html",b=b.replace(/<br class="Apple-interchange-newline">/,
"")),b=b.replace(/(<[^>]+) class="Apple-[^"]*"/gi,"$1"));if(b.match(/^<[^<]+cke_(editable|contents)/i)){var i,h,f=new CKEDITOR.dom.element("div");for(f.setHtml(b);1==f.getChildCount()&&(i=f.getFirst())&&i.type==CKEDITOR.NODE_ELEMENT&&(i.hasClass("cke_editable")||i.hasClass("cke_contents"));)f=h=i;h&&(b=h.getHtml().replace(/<br>$/i,""))}CKEDITOR.env.ie?b=b.replace(/^&nbsp;(?: |\r\n)?<(\w+)/g,function(b,d){if(d.toLowerCase()in g){a.data.preSniffing="html";return"<"+d}return b}):CKEDITOR.env.webkit?
b=b.replace(/<\/(\w+)><div><br><\/div>$/,function(b,d){if(d in g){a.data.endsWithEOL=1;return"</"+d+">"}return b}):CKEDITOR.env.gecko&&(b=b.replace(/(\s)<br>$/,"$1"));a.data.dataValue=b},null,null,3);b.on("paste",function(c){var c=c.data,d=c.type,g=c.dataValue,i,h=b.config.clipboard_defaultContentType||"html";i="html"==d||"html"==c.preSniffing?"html":w(g);"htmlifiedtext"==i?g=x(b.config,g):"text"==d&&"html"==i&&(g=z(b.config,g,a||(a=y(b))));c.startsWithEOL&&(g='<br data-cke-eol="1">'+g);c.endsWithEOL&&
(g+='<br data-cke-eol="1">');"auto"==d&&(d="html"==i||"html"==h?"html":"text");c.type=d;c.dataValue=g;delete c.preSniffing;delete c.startsWithEOL;delete c.endsWithEOL},null,null,6);b.on("paste",function(a){a=a.data;b.insertHtml(a.dataValue,a.type);setTimeout(function(){b.fire("afterPaste")},0)},null,null,1E3);b.on("pasteDialog",function(a){setTimeout(function(){b.openDialog("paste",a.data)},0)})}})})();(function(){var c='<a id="{id}" class="cke_button cke_button__{name} cke_button_{state} {cls}"'+(CKEDITOR.env.gecko&&!CKEDITOR.env.hc?"":" href=\"javascript:void('{titleJs}')\"")+' title="{title}" tabindex="-1" hidefocus="true" role="button" aria-labelledby="{id}_label" aria-haspopup="{hasArrow}" aria-disabled="{ariaDisabled}"';CKEDITOR.env.gecko&&CKEDITOR.env.mac&&(c+=' onkeypress="return false;"');CKEDITOR.env.gecko&&(c+=' onblur="this.style.cssText = this.style.cssText;"');var c=c+(' onkeydown="return CKEDITOR.tools.callFunction({keydownFn},event);" onfocus="return CKEDITOR.tools.callFunction({focusFn},event);" '+
(CKEDITOR.env.ie?'onclick="return false;" onmouseup':"onclick")+'="CKEDITOR.tools.callFunction({clickFn},this);return false;"><span class="cke_button_icon cke_button__{iconName}_icon" style="{style}"'),c=c+'>&nbsp;</span><span id="{id}_label" class="cke_button_label cke_button__{name}_label" aria-hidden="false">{label}</span>{arrowHtml}</a>',o=CKEDITOR.addTemplate("buttonArrow",'<span class="cke_button_arrow">'+(CKEDITOR.env.hc?"&#9660;":"")+"</span>"),p=CKEDITOR.addTemplate("button",c);CKEDITOR.plugins.add("button",
{beforeInit:function(a){a.ui.addHandler(CKEDITOR.UI_BUTTON,CKEDITOR.ui.button.handler)}});CKEDITOR.UI_BUTTON="button";CKEDITOR.ui.button=function(a){CKEDITOR.tools.extend(this,a,{title:a.label,click:a.click||function(b){b.execCommand(a.command)}});this._={}};CKEDITOR.ui.button.handler={create:function(a){return new CKEDITOR.ui.button(a)}};CKEDITOR.ui.button.prototype={render:function(a,b){function c(){var e=a.mode;e&&(e=this.modes[e]?void 0!==i[e]?i[e]:CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED,
e=a.readOnly&&!this.readOnly?CKEDITOR.TRISTATE_DISABLED:e,this.setState(e),this.refresh&&this.refresh())}var j=CKEDITOR.env,k=this._.id=CKEDITOR.tools.getNextId(),f="",g=this.command,l;this._.editor=a;var d={id:k,button:this,editor:a,focus:function(){CKEDITOR.document.getById(k).focus()},execute:function(){this.button.click(a)},attach:function(a){this.button.attach(a)}},q=CKEDITOR.tools.addFunction(function(a){if(d.onkey)return a=new CKEDITOR.dom.event(a),!1!==d.onkey(d,a.getKeystroke())}),r=CKEDITOR.tools.addFunction(function(a){var b;
d.onfocus&&(b=!1!==d.onfocus(d,new CKEDITOR.dom.event(a)));return b}),m=0;d.clickFn=l=CKEDITOR.tools.addFunction(function(){m&&(a.unlockSelection(1),m=0);d.execute();j.iOS&&a.focus()});if(this.modes){var i={};a.on("beforeModeUnload",function(){a.mode&&this._.state!=CKEDITOR.TRISTATE_DISABLED&&(i[a.mode]=this._.state)},this);a.on("activeFilterChange",c,this);a.on("mode",c,this);!this.readOnly&&a.on("readOnly",c,this)}else if(g&&(g=a.getCommand(g)))g.on("state",function(){this.setState(g.state)},this),
f+=g.state==CKEDITOR.TRISTATE_ON?"on":g.state==CKEDITOR.TRISTATE_DISABLED?"disabled":"off";if(this.directional)a.on("contentDirChanged",function(b){var c=CKEDITOR.document.getById(this._.id),d=c.getFirst(),b=b.data;b!=a.lang.dir?c.addClass("cke_"+b):c.removeClass("cke_ltr").removeClass("cke_rtl");d.setAttribute("style",CKEDITOR.skin.getIconStyle(h,"rtl"==b,this.icon,this.iconOffset))},this);g||(f+="off");var n=this.name||this.command,h=n;this.icon&&!/\./.test(this.icon)&&(h=this.icon,this.icon=null);
f={id:k,name:n,iconName:h,label:this.label,cls:this.className||"",state:f,ariaDisabled:"disabled"==f?"true":"false",title:this.title,titleJs:j.gecko&&!j.hc?"":(this.title||"").replace("'",""),hasArrow:this.hasArrow?"true":"false",keydownFn:q,focusFn:r,clickFn:l,style:CKEDITOR.skin.getIconStyle(h,"rtl"==a.lang.dir,this.icon,this.iconOffset),arrowHtml:this.hasArrow?o.output():""};p.output(f,b);if(this.onRender)this.onRender();return d},setState:function(a){if(this._.state==a)return!1;this._.state=a;
var b=CKEDITOR.document.getById(this._.id);return b?(b.setState(a,"cke_button"),a==CKEDITOR.TRISTATE_DISABLED?b.setAttribute("aria-disabled",!0):b.removeAttribute("aria-disabled"),this.hasArrow?(a=a==CKEDITOR.TRISTATE_ON?this._.editor.lang.button.selectedLabel.replace(/%1/g,this.label):this.label,CKEDITOR.document.getById(this._.id+"_label").setText(a)):a==CKEDITOR.TRISTATE_ON?b.setAttribute("aria-pressed",!0):b.removeAttribute("aria-pressed"),!0):!1},getState:function(){return this._.state},toFeature:function(a){if(this._.feature)return this._.feature;
var b=this;!this.allowedContent&&(!this.requiredContent&&this.command)&&(b=a.getCommand(this.command)||b);return this._.feature=b}};CKEDITOR.ui.prototype.addButton=function(a,b){this.add(a,CKEDITOR.UI_BUTTON,b)}})();CKEDITOR.plugins.add("panelbutton",{requires:"button",onLoad:function(){function e(c){var a=this._;a.state!=CKEDITOR.TRISTATE_DISABLED&&(this.createPanel(c),a.on?a.panel.hide():a.panel.showBlock(this._.id,this.document.getById(this._.id),4))}CKEDITOR.ui.panelButton=CKEDITOR.tools.createClass({base:CKEDITOR.ui.button,$:function(c){var a=c.panel||{};delete c.panel;this.base(c);this.document=a.parent&&a.parent.getDocument()||CKEDITOR.document;a.block={attributes:a.attributes};this.hasArrow=a.toolbarRelated=
!0;this.click=e;this._={panelDefinition:a}},statics:{handler:{create:function(c){return new CKEDITOR.ui.panelButton(c)}}},proto:{createPanel:function(c){var a=this._;if(!a.panel){var f=this._.panelDefinition,e=this._.panelDefinition.block,g=f.parent||CKEDITOR.document.getBody(),d=this._.panel=new CKEDITOR.ui.floatPanel(c,g,f),f=d.addBlock(a.id,e),b=this;d.onShow=function(){b.className&&this.element.addClass(b.className+"_panel");b.setState(CKEDITOR.TRISTATE_ON);a.on=1;b.editorFocus&&c.focus();if(b.onOpen)b.onOpen()};
d.onHide=function(d){b.className&&this.element.getFirst().removeClass(b.className+"_panel");b.setState(b.modes&&b.modes[c.mode]?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED);a.on=0;if(!d&&b.onClose)b.onClose()};d.onEscape=function(){d.hide(1);b.document.getById(a.id).focus()};if(this.onBlock)this.onBlock(d,f);f.onHide=function(){a.on=0;b.setState(CKEDITOR.TRISTATE_OFF)}}}}})},beforeInit:function(e){e.ui.addHandler(CKEDITOR.UI_PANELBUTTON,CKEDITOR.ui.panelButton.handler)}});
CKEDITOR.UI_PANELBUTTON="panelbutton";(function(){CKEDITOR.plugins.add("panel",{beforeInit:function(a){a.ui.addHandler(CKEDITOR.UI_PANEL,CKEDITOR.ui.panel.handler)}});CKEDITOR.UI_PANEL="panel";CKEDITOR.ui.panel=function(a,b){b&&CKEDITOR.tools.extend(this,b);CKEDITOR.tools.extend(this,{className:"",css:[]});this.id=CKEDITOR.tools.getNextId();this.document=a;this.isFramed=this.forceIFrame||this.css.length;this._={blocks:{}}};CKEDITOR.ui.panel.handler={create:function(a){return new CKEDITOR.ui.panel(a)}};var f=CKEDITOR.addTemplate("panel",
'<div lang="{langCode}" id="{id}" dir={dir} class="cke cke_reset_all {editorId} cke_panel cke_panel {cls} cke_{dir}" style="z-index:{z-index}" role="presentation">{frame}</div>'),g=CKEDITOR.addTemplate("panel-frame",'<iframe id="{id}" class="cke_panel_frame" role="presentation" frameborder="0" src="{src}"></iframe>'),h=CKEDITOR.addTemplate("panel-frame-inner",'<!DOCTYPE html><html class="cke_panel_container {env}" dir="{dir}" lang="{langCode}"><head>{css}</head><body class="cke_{dir}" style="margin:0;padding:0" onload="{onload}"></body></html>');
CKEDITOR.ui.panel.prototype={render:function(a,b){this.getHolderElement=function(){var a=this._.holder;if(!a){if(this.isFramed){var a=this.document.getById(this.id+"_frame"),b=a.getParent(),a=a.getFrameDocument();CKEDITOR.env.iOS&&b.setStyles({overflow:"scroll","-webkit-overflow-scrolling":"touch"});b=CKEDITOR.tools.addFunction(CKEDITOR.tools.bind(function(){this.isLoaded=!0;if(this.onLoad)this.onLoad()},this));a.write(h.output(CKEDITOR.tools.extend({css:CKEDITOR.tools.buildStyleHtml(this.css),onload:"window.parent.CKEDITOR.tools.callFunction("+
b+");"},d)));a.getWindow().$.CKEDITOR=CKEDITOR;a.on("keydown",function(a){var b=a.data.getKeystroke(),c=this.document.getById(this.id).getAttribute("dir");this._.onKeyDown&&!1===this._.onKeyDown(b)?a.data.preventDefault():(27==b||b==("rtl"==c?39:37))&&this.onEscape&&!1===this.onEscape(b)&&a.data.preventDefault()},this);a=a.getBody();a.unselectable();CKEDITOR.env.air&&CKEDITOR.tools.callFunction(b)}else a=this.document.getById(this.id);this._.holder=a}return a};var d={editorId:a.id,id:this.id,langCode:a.langCode,
dir:a.lang.dir,cls:this.className,frame:"",env:CKEDITOR.env.cssClass,"z-index":a.config.baseFloatZIndex+1};if(this.isFramed){var e=CKEDITOR.env.air?"javascript:void(0)":CKEDITOR.env.ie?"javascript:void(function(){"+encodeURIComponent("document.open();("+CKEDITOR.tools.fixDomain+")();document.close();")+"}())":"";d.frame=g.output({id:this.id+"_frame",src:e})}e=f.output(d);b&&b.push(e);return e},addBlock:function(a,b){b=this._.blocks[a]=b instanceof CKEDITOR.ui.panel.block?b:new CKEDITOR.ui.panel.block(this.getHolderElement(),
b);this._.currentBlock||this.showBlock(a);return b},getBlock:function(a){return this._.blocks[a]},showBlock:function(a){var a=this._.blocks[a],b=this._.currentBlock,d=!this.forceIFrame||CKEDITOR.env.ie?this._.holder:this.document.getById(this.id+"_frame");b&&b.hide();this._.currentBlock=a;CKEDITOR.fire("ariaWidget",d);a._.focusIndex=-1;this._.onKeyDown=a.onKeyDown&&CKEDITOR.tools.bind(a.onKeyDown,a);a.show();return a},destroy:function(){this.element&&this.element.remove()}};CKEDITOR.ui.panel.block=
CKEDITOR.tools.createClass({$:function(a,b){this.element=a.append(a.getDocument().createElement("div",{attributes:{tabindex:-1,"class":"cke_panel_block"},styles:{display:"none"}}));b&&CKEDITOR.tools.extend(this,b);this.element.setAttributes({role:this.attributes.role||"presentation","aria-label":this.attributes["aria-label"],title:this.attributes.title||this.attributes["aria-label"]});this.keys={};this._.focusIndex=-1;this.element.disableContextMenu()},_:{markItem:function(a){-1!=a&&(a=this.element.getElementsByTag("a").getItem(this._.focusIndex=
a),CKEDITOR.env.webkit&&a.getDocument().getWindow().focus(),a.focus(),this.onMark&&this.onMark(a))}},proto:{show:function(){this.element.setStyle("display","")},hide:function(){(!this.onHide||!0!==this.onHide.call(this))&&this.element.setStyle("display","none")},onKeyDown:function(a,b){var d=this.keys[a];switch(d){case "next":for(var e=this._.focusIndex,d=this.element.getElementsByTag("a"),c;c=d.getItem(++e);)if(c.getAttribute("_cke_focus")&&c.$.offsetWidth){this._.focusIndex=e;c.focus();break}return!c&&
!b?(this._.focusIndex=-1,this.onKeyDown(a,1)):!1;case "prev":e=this._.focusIndex;for(d=this.element.getElementsByTag("a");0<e&&(c=d.getItem(--e));){if(c.getAttribute("_cke_focus")&&c.$.offsetWidth){this._.focusIndex=e;c.focus();break}c=null}return!c&&!b?(this._.focusIndex=d.count(),this.onKeyDown(a,1)):!1;case "click":case "mouseup":return e=this._.focusIndex,(c=0<=e&&this.element.getElementsByTag("a").getItem(e))&&(c.$[d]?c.$[d]():c.$["on"+d]()),!1}return!0}}})})();CKEDITOR.plugins.add("floatpanel",{requires:"panel"});
(function(){function r(a,b,c,i,f){var f=CKEDITOR.tools.genKey(b.getUniqueId(),c.getUniqueId(),a.lang.dir,a.uiColor||"",i.css||"",f||""),h=g[f];h||(h=g[f]=new CKEDITOR.ui.panel(b,i),h.element=c.append(CKEDITOR.dom.element.createFromHtml(h.render(a),b)),h.element.setStyles({display:"none",position:"absolute"}));return h}var g={};CKEDITOR.ui.floatPanel=CKEDITOR.tools.createClass({$:function(a,b,c,i){function f(){d.hide()}c.forceIFrame=1;c.toolbarRelated&&a.elementMode==CKEDITOR.ELEMENT_MODE_INLINE&&
(b=CKEDITOR.document.getById("cke_"+a.name));var h=b.getDocument(),i=r(a,h,b,c,i||0),j=i.element,l=j.getFirst(),d=this;j.disableContextMenu();this.element=j;this._={editor:a,panel:i,parentElement:b,definition:c,document:h,iframe:l,children:[],dir:a.lang.dir};a.on("mode",f);a.on("resize",f);if(!CKEDITOR.env.iOS)h.getWindow().on("resize",f)},proto:{addBlock:function(a,b){return this._.panel.addBlock(a,b)},addListBlock:function(a,b){return this._.panel.addListBlock(a,b)},getBlock:function(a){return this._.panel.getBlock(a)},
showBlock:function(a,b,c,i,f,h){var j=this._.panel,l=j.showBlock(a);this.allowBlur(!1);a=this._.editor.editable();this._.returnFocus=a.hasFocus?a:new CKEDITOR.dom.element(CKEDITOR.document.$.activeElement);this._.hideTimeout=0;var d=this.element,a=this._.iframe,a=CKEDITOR.env.ie?a:new CKEDITOR.dom.window(a.$.contentWindow),g=d.getDocument(),o=this._.parentElement.getPositionedAncestor(),p=b.getDocumentPosition(g),g=o?o.getDocumentPosition(g):{x:0,y:0},m="rtl"==this._.dir,e=p.x+(i||0)-g.x,k=p.y+(f||
0)-g.y;if(m&&(1==c||4==c))e+=b.$.offsetWidth;else if(!m&&(2==c||3==c))e+=b.$.offsetWidth-1;if(3==c||4==c)k+=b.$.offsetHeight-1;this._.panel._.offsetParentId=b.getId();d.setStyles({top:k+"px",left:0,display:""});d.setOpacity(0);d.getFirst().removeStyle("width");this._.editor.focusManager.add(a);this._.blurSet||(CKEDITOR.event.useCapture=!0,a.on("blur",function(a){function q(){delete this._.returnFocus;this.hide()}this.allowBlur()&&a.data.getPhase()==CKEDITOR.EVENT_PHASE_AT_TARGET&&(this.visible&&!this._.activeChild)&&
(CKEDITOR.env.iOS?this._.hideTimeout||(this._.hideTimeout=CKEDITOR.tools.setTimeout(q,0,this)):q.call(this))},this),a.on("focus",function(){this._.focused=!0;this.hideChild();this.allowBlur(!0)},this),CKEDITOR.env.iOS&&(a.on("touchstart",function(){clearTimeout(this._.hideTimeout)},this),a.on("touchend",function(){this._.hideTimeout=0;this.focus()},this)),CKEDITOR.event.useCapture=!1,this._.blurSet=1);j.onEscape=CKEDITOR.tools.bind(function(a){if(this.onEscape&&this.onEscape(a)===false)return false},
this);CKEDITOR.tools.setTimeout(function(){var a=CKEDITOR.tools.bind(function(){d.removeStyle("width");if(l.autoSize){var a=l.element.getDocument(),a=(CKEDITOR.env.webkit?l.element:a.getBody()).$.scrollWidth;CKEDITOR.env.ie&&(CKEDITOR.env.quirks&&a>0)&&(a=a+((d.$.offsetWidth||0)-(d.$.clientWidth||0)+3));d.setStyle("width",a+10+"px");a=l.element.$.scrollHeight;CKEDITOR.env.ie&&(CKEDITOR.env.quirks&&a>0)&&(a=a+((d.$.offsetHeight||0)-(d.$.clientHeight||0)+3));d.setStyle("height",a+"px");j._.currentBlock.element.setStyle("display",
"none").removeStyle("display")}else d.removeStyle("height");m&&(e=e-d.$.offsetWidth);d.setStyle("left",e+"px");var b=j.element.getWindow(),a=d.$.getBoundingClientRect(),b=b.getViewPaneSize(),c=a.width||a.right-a.left,f=a.height||a.bottom-a.top,i=m?a.right:b.width-a.left,g=m?b.width-a.right:a.left;m?i<c&&(e=g>c?e+c:b.width>c?e-a.left:e-a.right+b.width):i<c&&(e=g>c?e-c:b.width>c?e-a.right+b.width:e-a.left);c=a.top;b.height-a.top<f&&(k=c>f?k-f:b.height>f?k-a.bottom+b.height:k-a.top);if(CKEDITOR.env.ie){b=
a=new CKEDITOR.dom.element(d.$.offsetParent);b.getName()=="html"&&(b=b.getDocument().getBody());b.getComputedStyle("direction")=="rtl"&&(e=CKEDITOR.env.ie8Compat?e-d.getDocument().getDocumentElement().$.scrollLeft*2:e-(a.$.scrollWidth-a.$.clientWidth))}var a=d.getFirst(),n;(n=a.getCustomData("activePanel"))&&n.onHide&&n.onHide.call(this,1);a.setCustomData("activePanel",this);d.setStyles({top:k+"px",left:e+"px"});d.setOpacity(1);h&&h()},this);j.isLoaded?a():j.onLoad=a;CKEDITOR.tools.setTimeout(function(){var a=
CKEDITOR.env.webkit&&CKEDITOR.document.getWindow().getScrollPosition().y;this.focus();l.element.focus();if(CKEDITOR.env.webkit)CKEDITOR.document.getBody().$.scrollTop=a;this.allowBlur(true);this._.editor.fire("panelShow",this)},0,this)},CKEDITOR.env.air?200:0,this);this.visible=1;this.onShow&&this.onShow.call(this)},focus:function(){if(CKEDITOR.env.webkit){var a=CKEDITOR.document.getActive();a&&!a.equals(this._.iframe)&&a.$.blur()}(this._.lastFocused||this._.iframe.getFrameDocument().getWindow()).focus()},
blur:function(){var a=this._.iframe.getFrameDocument().getActive();a&&a.is("a")&&(this._.lastFocused=a)},hide:function(a){if(this.visible&&(!this.onHide||!0!==this.onHide.call(this))){this.hideChild();CKEDITOR.env.gecko&&this._.iframe.getFrameDocument().$.activeElement.blur();this.element.setStyle("display","none");this.visible=0;this.element.getFirst().removeCustomData("activePanel");if(a=a&&this._.returnFocus)CKEDITOR.env.webkit&&a.type&&a.getWindow().$.focus(),a.focus();delete this._.lastFocused;
this._.editor.fire("panelHide",this)}},allowBlur:function(a){var b=this._.panel;void 0!==a&&(b.allowBlur=a);return b.allowBlur},showAsChild:function(a,b,c,g,f,h){this._.activeChild==a&&a._.panel._.offsetParentId==c.getId()||(this.hideChild(),a.onHide=CKEDITOR.tools.bind(function(){CKEDITOR.tools.setTimeout(function(){this._.focused||this.hide()},0,this)},this),this._.activeChild=a,this._.focused=!1,a.showBlock(b,c,g,f,h),this.blur(),(CKEDITOR.env.ie7Compat||CKEDITOR.env.ie6Compat)&&setTimeout(function(){a.element.getChild(0).$.style.cssText+=
""},100))},hideChild:function(a){var b=this._.activeChild;b&&(delete b.onHide,delete this._.activeChild,b.hide(),a&&this.focus())}}});CKEDITOR.on("instanceDestroyed",function(){var a=CKEDITOR.tools.isEmpty(CKEDITOR.instances),b;for(b in g){var c=g[b];a?c.destroy():c.element.hide()}a&&(g={})})})();CKEDITOR.plugins.add("colorbutton",{requires:"panelbutton,floatpanel",init:function(c){function o(m,g,e,h){var i=new CKEDITOR.style(j["colorButton_"+g+"Style"]),k=CKEDITOR.tools.getNextId()+"_colorBox";c.ui.add(m,CKEDITOR.UI_PANELBUTTON,{label:e,title:e,modes:{wysiwyg:1},editorFocus:0,toolbar:"colors,"+h,allowedContent:i,requiredContent:i,panel:{css:CKEDITOR.skin.getPath("editor"),attributes:{role:"listbox","aria-label":f.panelTitle}},onBlock:function(a,b){b.autoSize=!0;b.element.addClass("cke_colorblock");
b.element.setHtml(q(a,g,k));b.element.getDocument().getBody().setStyle("overflow","hidden");CKEDITOR.ui.fire("ready",this);var d=b.keys,e="rtl"==c.lang.dir;d[e?37:39]="next";d[40]="next";d[9]="next";d[e?39:37]="prev";d[38]="prev";d[CKEDITOR.SHIFT+9]="prev";d[32]="click"},refresh:function(){c.activeFilter.check(i)||this.setState(CKEDITOR.TRISTATE_DISABLED)},onOpen:function(){var a=c.getSelection(),a=a&&a.getStartElement(),a=c.elementPath(a),b;if(a){a=a.block||a.blockLimit||c.document.getBody();do b=
a&&a.getComputedStyle("back"==g?"background-color":"color")||"transparent";while("back"==g&&"transparent"==b&&a&&(a=a.getParent()));if(!b||"transparent"==b)b="#ffffff";this._.panel._.iframe.getFrameDocument().getById(k).setStyle("background-color",b);return b}}})}function q(m,g,e){var h=[],i=j.colorButton_colors.split(","),k=c.plugins.colordialog&&!1!==j.colorButton_enableMore,a=i.length+(k?2:1),b=CKEDITOR.tools.addFunction(function(a,b){function d(a){this.removeListener("ok",d);this.removeListener("cancel",
d);"ok"==a.name&&e(this.getContentElement("picker","selectedColor").getValue(),b)}var e=arguments.callee;if("?"==a)c.openDialog("colordialog",function(){this.on("ok",d);this.on("cancel",d)});else{c.focus();m.hide();c.fire("saveSnapshot");c.removeStyle(new CKEDITOR.style(j["colorButton_"+b+"Style"],{color:"inherit"}));if(a){var f=j["colorButton_"+b+"Style"];f.childRule="back"==b?function(a){return p(a)}:function(a){return!(a.is("a")||a.getElementsByTag("a").count())||p(a)};c.applyStyle(new CKEDITOR.style(f,
{color:a}))}c.fire("saveSnapshot")}});h.push('<a class="cke_colorauto" _cke_focus=1 hidefocus=true title="',f.auto,'" onclick="CKEDITOR.tools.callFunction(',b,",null,'",g,"');return false;\" href=\"javascript:void('",f.auto,'\')" role="option" aria-posinset="1" aria-setsize="',a,'"><table role="presentation" cellspacing=0 cellpadding=0 width="100%"><tr><td><span class="cke_colorbox" id="',e,'"></span></td><td colspan=7 align=center>',f.auto,'</td></tr></table></a><table role="presentation" cellspacing=0 cellpadding=0 width="100%">');
for(e=0;e<i.length;e++){0===e%8&&h.push("</tr><tr>");var d=i[e].split("/"),l=d[0],n=d[1]||l;d[1]||(l="#"+l.replace(/^(.)(.)(.)$/,"$1$1$2$2$3$3"));d=c.lang.colorbutton.colors[n]||n;h.push('<td><a class="cke_colorbox" _cke_focus=1 hidefocus=true title="',d,'" onclick="CKEDITOR.tools.callFunction(',b,",'",l,"','",g,"'); return false;\" href=\"javascript:void('",d,'\')" role="option" aria-posinset="',e+2,'" aria-setsize="',a,'"><span class="cke_colorbox" style="background-color:#',n,'"></span></a></td>')}k&&
h.push('</tr><tr><td colspan=8 align=center><a class="cke_colormore" _cke_focus=1 hidefocus=true title="',f.more,'" onclick="CKEDITOR.tools.callFunction(',b,",'?','",g,"');return false;\" href=\"javascript:void('",f.more,"')\"",' role="option" aria-posinset="',a,'" aria-setsize="',a,'">',f.more,"</a></td>");h.push("</tr></table>");return h.join("")}function p(c){return"false"==c.getAttribute("contentEditable")||c.getAttribute("data-nostyle")}var j=c.config,f=c.lang.colorbutton;CKEDITOR.env.hc||(o("TextColor",
"fore",f.textColorTitle,10),o("BGColor","back",f.bgColorTitle,20))}});CKEDITOR.config.colorButton_colors="000,800000,8B4513,2F4F4F,008080,000080,4B0082,696969,B22222,A52A2A,DAA520,006400,40E0D0,0000CD,800080,808080,F00,FF8C00,FFD700,008000,0FF,00F,EE82EE,A9A9A9,FFA07A,FFA500,FFFF00,00FF00,AFEEEE,ADD8E6,DDA0DD,D3D3D3,FFF0F5,FAEBD7,FFFFE0,F0FFF0,F0FFFF,F0F8FF,E6E6FA,FFF";CKEDITOR.config.colorButton_foreStyle={element:"span",styles:{color:"#(color)"},overrides:[{element:"font",attributes:{color:null}}]};
CKEDITOR.config.colorButton_backStyle={element:"span",styles:{"background-color":"#(color)"}};CKEDITOR.plugins.colordialog={requires:"dialog",init:function(b){var c=new CKEDITOR.dialogCommand("colordialog");c.editorFocus=!1;b.addCommand("colordialog",c);CKEDITOR.dialog.add("colordialog",this.path+"dialogs/colordialog.js");b.getColorFromDialog=function(c,f){var d=function(a){this.removeListener("ok",d);this.removeListener("cancel",d);a="ok"==a.name?this.getValueOf("picker","selectedColor"):null;c.call(f,a)},e=function(a){a.on("ok",d);a.on("cancel",d)};b.execCommand("colordialog");if(b._.storedDialogs&&
b._.storedDialogs.colordialog)e(b._.storedDialogs.colordialog);else CKEDITOR.on("dialogDefinition",function(a){if("colordialog"==a.data.name){var b=a.data.definition;a.removeListener();b.onLoad=CKEDITOR.tools.override(b.onLoad,function(a){return function(){e(this);b.onLoad=a;"function"==typeof a&&a.call(this)}})}})}}};CKEDITOR.plugins.add("colordialog",CKEDITOR.plugins.colordialog);(function(){CKEDITOR.plugins.add("templates",{requires:"dialog",init:function(a){CKEDITOR.dialog.add("templates",CKEDITOR.getUrl(this.path+"dialogs/templates.js"));a.addCommand("templates",new CKEDITOR.dialogCommand("templates"));a.ui.addButton&&a.ui.addButton("Templates",{label:a.lang.templates.button,command:"templates",toolbar:"doctools,10"})}});var c={},f={};CKEDITOR.addTemplates=function(a,d){c[a]=d};CKEDITOR.getTemplates=function(a){return c[a]};CKEDITOR.loadTemplates=function(a,d){for(var e=
[],b=0,c=a.length;b<c;b++)f[a[b]]||(e.push(a[b]),f[a[b]]=1);e.length?CKEDITOR.scriptLoader.load(e,d):setTimeout(d,0)}})();CKEDITOR.config.templates_files=[CKEDITOR.getUrl("plugins/templates/templates/default.js")];CKEDITOR.config.templates_replaceContent=!0;CKEDITOR.plugins.add("menu",{requires:"floatpanel",beforeInit:function(g){for(var h=g.config.menu_groups.split(","),m=g._.menuGroups={},l=g._.menuItems={},a=0;a<h.length;a++)m[h[a]]=a+1;g.addMenuGroup=function(b,a){m[b]=a||100};g.addMenuItem=function(a,c){m[c.group]&&(l[a]=new CKEDITOR.menuItem(this,a,c))};g.addMenuItems=function(a){for(var c in a)this.addMenuItem(c,a[c])};g.getMenuItem=function(a){return l[a]};g.removeMenuItem=function(a){delete l[a]}}});
(function(){function g(a){a.sort(function(a,c){return a.group<c.group?-1:a.group>c.group?1:a.order<c.order?-1:a.order>c.order?1:0})}var h='<span class="cke_menuitem"><a id="{id}" class="cke_menubutton cke_menubutton__{name} cke_menubutton_{state} {cls}" href="{href}" title="{title}" tabindex="-1"_cke_focus=1 hidefocus="true" role="{role}" aria-haspopup="{hasPopup}" aria-disabled="{disabled}" {ariaChecked}';CKEDITOR.env.gecko&&CKEDITOR.env.mac&&(h+=' onkeypress="return false;"');CKEDITOR.env.gecko&&
(h+=' onblur="this.style.cssText = this.style.cssText;"');var h=h+(' onmouseover="CKEDITOR.tools.callFunction({hoverFn},{index});" onmouseout="CKEDITOR.tools.callFunction({moveOutFn},{index});" '+(CKEDITOR.env.ie?'onclick="return false;" onmouseup':"onclick")+'="CKEDITOR.tools.callFunction({clickFn},{index}); return false;">'),m=CKEDITOR.addTemplate("menuItem",h+'<span class="cke_menubutton_inner"><span class="cke_menubutton_icon"><span class="cke_button_icon cke_button__{iconName}_icon" style="{iconStyle}"></span></span><span class="cke_menubutton_label">{label}</span>{arrowHtml}</span></a></span>'),
l=CKEDITOR.addTemplate("menuArrow",'<span class="cke_menuarrow"><span>{label}</span></span>');CKEDITOR.menu=CKEDITOR.tools.createClass({$:function(a,b){b=this._.definition=b||{};this.id=CKEDITOR.tools.getNextId();this.editor=a;this.items=[];this._.listeners=[];this._.level=b.level||1;var c=CKEDITOR.tools.extend({},b.panel,{css:[CKEDITOR.skin.getPath("editor")],level:this._.level-1,block:{}}),k=c.block.attributes=c.attributes||{};!k.role&&(k.role="menu");this._.panelDefinition=c},_:{onShow:function(){var a=
this.editor.getSelection(),b=a&&a.getStartElement(),c=this.editor.elementPath(),k=this._.listeners;this.removeAll();for(var e=0;e<k.length;e++){var j=k[e](b,a,c);if(j)for(var i in j){var f=this.editor.getMenuItem(i);if(f&&(!f.command||this.editor.getCommand(f.command).state))f.state=j[i],this.add(f)}}},onClick:function(a){this.hide();if(a.onClick)a.onClick();else a.command&&this.editor.execCommand(a.command)},onEscape:function(a){var b=this.parent;b?b._.panel.hideChild(1):27==a&&this.hide(1);return!1},
onHide:function(){this.onHide&&this.onHide()},showSubMenu:function(a){var b=this._.subMenu,c=this.items[a];if(c=c.getItems&&c.getItems()){b?b.removeAll():(b=this._.subMenu=new CKEDITOR.menu(this.editor,CKEDITOR.tools.extend({},this._.definition,{level:this._.level+1},!0)),b.parent=this,b._.onClick=CKEDITOR.tools.bind(this._.onClick,this));for(var k in c){var e=this.editor.getMenuItem(k);e&&(e.state=c[k],b.add(e))}var j=this._.panel.getBlock(this.id).element.getDocument().getById(this.id+(""+a));setTimeout(function(){b.show(j,
2)},0)}else this._.panel.hideChild(1)}},proto:{add:function(a){a.order||(a.order=this.items.length);this.items.push(a)},removeAll:function(){this.items=[]},show:function(a,b,c,k){if(!this.parent&&(this._.onShow(),!this.items.length))return;var b=b||("rtl"==this.editor.lang.dir?2:1),e=this.items,j=this.editor,i=this._.panel,f=this._.element;if(!i){i=this._.panel=new CKEDITOR.ui.floatPanel(this.editor,CKEDITOR.document.getBody(),this._.panelDefinition,this._.level);i.onEscape=CKEDITOR.tools.bind(function(a){if(!1===
this._.onEscape(a))return!1},this);i.onShow=function(){i._.panel.getHolderElement().getParent().addClass("cke cke_reset_all")};i.onHide=CKEDITOR.tools.bind(function(){this._.onHide&&this._.onHide()},this);f=i.addBlock(this.id,this._.panelDefinition.block);f.autoSize=!0;var d=f.keys;d[40]="next";d[9]="next";d[38]="prev";d[CKEDITOR.SHIFT+9]="prev";d["rtl"==j.lang.dir?37:39]=CKEDITOR.env.ie?"mouseup":"click";d[32]=CKEDITOR.env.ie?"mouseup":"click";CKEDITOR.env.ie&&(d[13]="mouseup");f=this._.element=
f.element;d=f.getDocument();d.getBody().setStyle("overflow","hidden");d.getElementsByTag("html").getItem(0).setStyle("overflow","hidden");this._.itemOverFn=CKEDITOR.tools.addFunction(function(a){clearTimeout(this._.showSubTimeout);this._.showSubTimeout=CKEDITOR.tools.setTimeout(this._.showSubMenu,j.config.menu_subMenuDelay||400,this,[a])},this);this._.itemOutFn=CKEDITOR.tools.addFunction(function(){clearTimeout(this._.showSubTimeout)},this);this._.itemClickFn=CKEDITOR.tools.addFunction(function(a){var b=
this.items[a];if(b.state==CKEDITOR.TRISTATE_DISABLED)this.hide(1);else if(b.getItems)this._.showSubMenu(a);else this._.onClick(b)},this)}g(e);for(var d=j.elementPath(),d=['<div class="cke_menu'+(d&&d.direction()!=j.lang.dir?" cke_mixed_dir_content":"")+'" role="presentation">'],h=e.length,m=h&&e[0].group,l=0;l<h;l++){var n=e[l];m!=n.group&&(d.push('<div class="cke_menuseparator" role="separator"></div>'),m=n.group);n.render(this,l,d)}d.push("</div>");f.setHtml(d.join(""));CKEDITOR.ui.fire("ready",
this);this.parent?this.parent._.panel.showAsChild(i,this.id,a,b,c,k):i.showBlock(this.id,a,b,c,k);j.fire("menuShow",[i])},addListener:function(a){this._.listeners.push(a)},hide:function(a){this._.onHide&&this._.onHide();this._.panel&&this._.panel.hide(a)}}});CKEDITOR.menuItem=CKEDITOR.tools.createClass({$:function(a,b,c){CKEDITOR.tools.extend(this,c,{order:0,className:"cke_menubutton__"+b});this.group=a._.menuGroups[this.group];this.editor=a;this.name=b},proto:{render:function(a,b,c){var h=a.id+(""+
b),e="undefined"==typeof this.state?CKEDITOR.TRISTATE_OFF:this.state,j="",i=e==CKEDITOR.TRISTATE_ON?"on":e==CKEDITOR.TRISTATE_DISABLED?"disabled":"off";this.role in{menuitemcheckbox:1,menuitemradio:1}&&(j=' aria-checked="'+(e==CKEDITOR.TRISTATE_ON?"true":"false")+'"');var f=this.getItems,d="&#"+("rtl"==this.editor.lang.dir?"9668":"9658")+";",g=this.name;this.icon&&!/\./.test(this.icon)&&(g=this.icon);a={id:h,name:this.name,iconName:g,label:this.label,cls:this.className||"",state:i,hasPopup:f?"true":
"false",disabled:e==CKEDITOR.TRISTATE_DISABLED,title:this.label,href:"javascript:void('"+(this.label||"").replace("'")+"')",hoverFn:a._.itemOverFn,moveOutFn:a._.itemOutFn,clickFn:a._.itemClickFn,index:b,iconStyle:CKEDITOR.skin.getIconStyle(g,"rtl"==this.editor.lang.dir,g==this.icon?null:this.icon,this.iconOffset),arrowHtml:f?l.output({label:d}):"",role:this.role?this.role:"menuitem",ariaChecked:j};m.output(a,c)}}})})();CKEDITOR.config.menu_groups="clipboard,form,tablecell,tablecellproperties,tablerow,tablecolumn,table,anchor,link,image,flash,checkbox,radio,textfield,hiddenfield,imagebutton,button,select,textarea,div";CKEDITOR.plugins.add("contextmenu",{requires:"menu",onLoad:function(){CKEDITOR.plugins.contextMenu=CKEDITOR.tools.createClass({base:CKEDITOR.menu,$:function(a){this.base.call(this,a,{panel:{className:"cke_menu_panel",attributes:{"aria-label":a.lang.contextmenu.options}}})},proto:{addTarget:function(a,e){a.on("contextmenu",function(a){var a=a.data,c=CKEDITOR.env.webkit?f:CKEDITOR.env.mac?a.$.metaKey:a.$.ctrlKey;if(!e||!c){a.preventDefault();if(CKEDITOR.env.mac&&CKEDITOR.env.webkit){var c=this.editor,
b=(new CKEDITOR.dom.elementPath(a.getTarget(),c.editable())).contains(function(a){return a.hasAttribute("contenteditable")},!0);b&&"false"==b.getAttribute("contenteditable")&&c.getSelection().fake(b)}var b=a.getTarget().getDocument(),d=a.getTarget().getDocument().getDocumentElement(),c=!b.equals(CKEDITOR.document),b=b.getWindow().getScrollPosition(),g=c?a.$.clientX:a.$.pageX||b.x+a.$.clientX,h=c?a.$.clientY:a.$.pageY||b.y+a.$.clientY;CKEDITOR.tools.setTimeout(function(){this.open(d,null,g,h)},CKEDITOR.env.ie?
200:0,this)}},this);if(CKEDITOR.env.webkit){var f,d=function(){f=0};a.on("keydown",function(a){f=CKEDITOR.env.mac?a.data.$.metaKey:a.data.$.ctrlKey});a.on("keyup",d);a.on("contextmenu",d)}},open:function(a,e,f,d){this.editor.focus();a=a||CKEDITOR.document.getDocumentElement();this.editor.selectionChange(1);this.show(a,e,f,d)}}})},beforeInit:function(a){var e=a.contextMenu=new CKEDITOR.plugins.contextMenu(a);a.on("contentDom",function(){e.addTarget(a.editable(),!1!==a.config.browserContextMenuOnCtrl)});
a.addCommand("contextMenu",{exec:function(){a.contextMenu.open(a.document.getBody())}});a.setKeystroke(CKEDITOR.SHIFT+121,"contextMenu");a.setKeystroke(CKEDITOR.CTRL+CKEDITOR.SHIFT+121,"contextMenu")}});(function(){CKEDITOR.plugins.add("div",{requires:"dialog",init:function(a){if(!a.blockless){var c=a.lang.div,b="div(*)";CKEDITOR.dialog.isTabEnabled(a,"editdiv","advanced")&&(b+=";div[dir,id,lang,title]{*}");a.addCommand("creatediv",new CKEDITOR.dialogCommand("creatediv",{allowedContent:b,requiredContent:"div",contextSensitive:!0,refresh:function(a,c){this.setState("div"in(a.config.div_wrapTable?c.root:c.blockLimit).getDtd()?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED)}}));a.addCommand("editdiv",
new CKEDITOR.dialogCommand("editdiv",{requiredContent:"div"}));a.addCommand("removediv",{requiredContent:"div",exec:function(a){function c(b){if((b=CKEDITOR.plugins.div.getSurroundDiv(a,b))&&!b.data("cke-div-added"))f.push(b),b.data("cke-div-added")}for(var b=a.getSelection(),g=b&&b.getRanges(),e,h=b.createBookmarks(),f=[],d=0;d<g.length;d++)e=g[d],e.collapsed?c(b.getStartElement()):(e=new CKEDITOR.dom.walker(e),e.evaluator=c,e.lastForward());for(d=0;d<f.length;d++)f[d].remove(!0);b.selectBookmarks(h)}});
a.ui.addButton&&a.ui.addButton("CreateDiv",{label:c.toolbar,command:"creatediv",toolbar:"blocks,50"});a.addMenuItems&&(a.addMenuItems({editdiv:{label:c.edit,command:"editdiv",group:"div",order:1},removediv:{label:c.remove,command:"removediv",group:"div",order:5}}),a.contextMenu&&a.contextMenu.addListener(function(b){return!b||b.isReadOnly()?null:CKEDITOR.plugins.div.getSurroundDiv(a)?{editdiv:CKEDITOR.TRISTATE_OFF,removediv:CKEDITOR.TRISTATE_OFF}:null}));CKEDITOR.dialog.add("creatediv",this.path+
"dialogs/div.js");CKEDITOR.dialog.add("editdiv",this.path+"dialogs/div.js")}}});CKEDITOR.plugins.div={getSurroundDiv:function(a,c){var b=a.elementPath(c);return a.elementPath(b.blockLimit).contains(function(a){return a.is("div")&&!a.isReadOnly()},1)}}})();CKEDITOR.plugins.add("resize",{init:function(b){var f,g,n,o;function c(d){var e=f,l=g,c=e+(d.data.$.screenX-n)*("rtl"==h?-1:1),d=l+(d.data.$.screenY-o);i&&(e=Math.max(a.resize_minWidth,Math.min(c,a.resize_maxWidth)));m&&(l=Math.max(a.resize_minHeight,Math.min(d,a.resize_maxHeight)));b.resize(i?e:null,l)}function j(){CKEDITOR.document.removeListener("mousemove",c);CKEDITOR.document.removeListener("mouseup",j);b.document&&(b.document.removeListener("mousemove",c),b.document.removeListener("mouseup",
j))}var a=b.config,q=b.ui.spaceId("resizer"),h=b.element?b.element.getDirection(1):"ltr";!a.resize_dir&&(a.resize_dir="vertical");void 0===a.resize_maxWidth&&(a.resize_maxWidth=3E3);void 0===a.resize_maxHeight&&(a.resize_maxHeight=3E3);void 0===a.resize_minWidth&&(a.resize_minWidth=750);void 0===a.resize_minHeight&&(a.resize_minHeight=250);if(!1!==a.resize_enabled){var k=null,i=("both"==a.resize_dir||"horizontal"==a.resize_dir)&&a.resize_minWidth!=a.resize_maxWidth,m=("both"==a.resize_dir||"vertical"==
a.resize_dir)&&a.resize_minHeight!=a.resize_maxHeight,p=CKEDITOR.tools.addFunction(function(d){k||(k=b.getResizable());f=k.$.offsetWidth||0;g=k.$.offsetHeight||0;n=d.screenX;o=d.screenY;a.resize_minWidth>f&&(a.resize_minWidth=f);a.resize_minHeight>g&&(a.resize_minHeight=g);CKEDITOR.document.on("mousemove",c);CKEDITOR.document.on("mouseup",j);b.document&&(b.document.on("mousemove",c),b.document.on("mouseup",j));d.preventDefault&&d.preventDefault()});b.on("destroy",function(){CKEDITOR.tools.removeFunction(p)});
b.on("uiSpace",function(a){if("bottom"==a.data.space){var e="";i&&!m&&(e=" cke_resizer_horizontal");!i&&m&&(e=" cke_resizer_vertical");var c='<span id="'+q+'" class="cke_resizer'+e+" cke_resizer_"+h+'" title="'+CKEDITOR.tools.htmlEncode(b.lang.common.resize)+'" onmousedown="CKEDITOR.tools.callFunction('+p+', event)">'+("ltr"==h?"◢":"◣")+"</span>";"ltr"==h&&"ltr"==e?a.data.html+=c:a.data.html=c+a.data.html}},b,null,100);b.on("maximize",function(a){b.ui.space("resizer")[a.data==CKEDITOR.TRISTATE_ON?
"hide":"show"]()})}}});(function(){function w(a){function d(){for(var b=g(),e=CKEDITOR.tools.clone(a.config.toolbarGroups)||n(a),f=0;f<e.length;f++){var k=e[f];if("/"!=k){"string"==typeof k&&(k=e[f]={name:k});var i,d=k.groups;if(d)for(var h=0;h<d.length;h++)i=d[h],(i=b[i])&&c(k,i);(i=b[k.name])&&c(k,i)}}return e}function g(){var b={},c,f,e;for(c in a.ui.items)f=a.ui.items[c],e=f.toolbar||"others",e=e.split(","),f=e[0],e=parseInt(e[1]||-1,10),b[f]||(b[f]=[]),b[f].push({name:c,order:e});for(f in b)b[f]=b[f].sort(function(b,
a){return b.order==a.order?0:0>a.order?-1:0>b.order?1:b.order<a.order?-1:1});return b}function c(c,e){if(e.length){c.items?c.items.push(a.ui.create("-")):c.items=[];for(var f;f=e.shift();)if(f="string"==typeof f?f:f.name,!b||-1==CKEDITOR.tools.indexOf(b,f))(f=a.ui.create(f))&&a.addFeature(f)&&c.items.push(f)}}function h(b){var a=[],e,d,h;for(e=0;e<b.length;++e)d=b[e],h={},"/"==d?a.push(d):CKEDITOR.tools.isArray(d)?(c(h,CKEDITOR.tools.clone(d)),a.push(h)):d.items&&(c(h,CKEDITOR.tools.clone(d.items)),
h.name=d.name,a.push(h));return a}var b=a.config.removeButtons,b=b&&b.split(","),e=a.config.toolbar;"string"==typeof e&&(e=a.config["toolbar_"+e]);return a.toolbar=e?h(e):d()}function n(a){return a._.toolbarGroups||(a._.toolbarGroups=[{name:"document",groups:["mode","document","doctools"]},{name:"clipboard",groups:["clipboard","undo"]},{name:"editing",groups:["find","selection","spellchecker"]},{name:"forms"},"/",{name:"basicstyles",groups:["basicstyles","cleanup"]},{name:"paragraph",groups:["list",
"indent","blocks","align","bidi"]},{name:"links"},{name:"insert"},"/",{name:"styles"},{name:"colors"},{name:"tools"},{name:"others"},{name:"about"}])}var u=function(){this.toolbars=[];this.focusCommandExecuted=!1};u.prototype.focus=function(){for(var a=0,d;d=this.toolbars[a++];)for(var g=0,c;c=d.items[g++];)if(c.focus){c.focus();return}};var x={modes:{wysiwyg:1,source:1},readOnly:1,exec:function(a){a.toolbox&&(a.toolbox.focusCommandExecuted=!0,CKEDITOR.env.ie||CKEDITOR.env.air?setTimeout(function(){a.toolbox.focus()},
100):a.toolbox.focus())}};CKEDITOR.plugins.add("toolbar",{requires:"button",init:function(a){var d,g=function(c,h){var b,e="rtl"==a.lang.dir,j=a.config.toolbarGroupCycling,o=e?37:39,e=e?39:37,j=void 0===j||j;switch(h){case 9:case CKEDITOR.SHIFT+9:for(;!b||!b.items.length;)if(b=9==h?(b?b.next:c.toolbar.next)||a.toolbox.toolbars[0]:(b?b.previous:c.toolbar.previous)||a.toolbox.toolbars[a.toolbox.toolbars.length-1],b.items.length)for(c=b.items[d?b.items.length-1:0];c&&!c.focus;)(c=d?c.previous:c.next)||
(b=0);c&&c.focus();return!1;case o:b=c;do b=b.next,!b&&j&&(b=c.toolbar.items[0]);while(b&&!b.focus);b?b.focus():g(c,9);return!1;case 40:return c.button&&c.button.hasArrow?(a.once("panelShow",function(b){b.data._.panel._.currentBlock.onKeyDown(40)}),c.execute()):g(c,40==h?o:e),!1;case e:case 38:b=c;do b=b.previous,!b&&j&&(b=c.toolbar.items[c.toolbar.items.length-1]);while(b&&!b.focus);b?b.focus():(d=1,g(c,CKEDITOR.SHIFT+9),d=0);return!1;case 27:return a.focus(),!1;case 13:case 32:return c.execute(),
!1}return!0};a.on("uiSpace",function(c){if(c.data.space==a.config.toolbarLocation){c.removeListener();a.toolbox=new u;var d=CKEDITOR.tools.getNextId(),b=['<span id="',d,'" class="cke_voice_label">',a.lang.toolbar.toolbars,"</span>",'<span id="'+a.ui.spaceId("toolbox")+'" class="cke_toolbox" role="group" aria-labelledby="',d,'" onmousedown="return false;">'],d=!1!==a.config.toolbarStartupExpanded,e,j;a.config.toolbarCanCollapse&&a.elementMode!=CKEDITOR.ELEMENT_MODE_INLINE&&b.push('<span class="cke_toolbox_main"'+
(d?">":' style="display:none">'));for(var o=a.toolbox.toolbars,f=w(a),k=0;k<f.length;k++){var i,l=0,r,m=f[k],s;if(m)if(e&&(b.push("</span>"),j=e=0),"/"===m)b.push('<span class="cke_toolbar_break"></span>');else{s=m.items||m;for(var t=0;t<s.length;t++){var p=s[t],n;if(p)if(p.type==CKEDITOR.UI_SEPARATOR)j=e&&p;else{n=!1!==p.canGroup;if(!l){i=CKEDITOR.tools.getNextId();l={id:i,items:[]};r=m.name&&(a.lang.toolbar.toolbarGroups[m.name]||m.name);b.push('<span id="',i,'" class="cke_toolbar"',r?' aria-labelledby="'+
i+'_label"':"",' role="toolbar">');r&&b.push('<span id="',i,'_label" class="cke_voice_label">',r,"</span>");b.push('<span class="cke_toolbar_start"></span>');var q=o.push(l)-1;0<q&&(l.previous=o[q-1],l.previous.next=l)}n?e||(b.push('<span class="cke_toolgroup" role="presentation">'),e=1):e&&(b.push("</span>"),e=0);i=function(c){c=c.render(a,b);q=l.items.push(c)-1;if(q>0){c.previous=l.items[q-1];c.previous.next=c}c.toolbar=l;c.onkey=g;c.onfocus=function(){a.toolbox.focusCommandExecuted||a.focus()}};
j&&(i(j),j=0);i(p)}}e&&(b.push("</span>"),j=e=0);l&&b.push('<span class="cke_toolbar_end"></span></span>')}}a.config.toolbarCanCollapse&&b.push("</span>");if(a.config.toolbarCanCollapse&&a.elementMode!=CKEDITOR.ELEMENT_MODE_INLINE){var v=CKEDITOR.tools.addFunction(function(){a.execCommand("toolbarCollapse")});a.on("destroy",function(){CKEDITOR.tools.removeFunction(v)});a.addCommand("toolbarCollapse",{readOnly:1,exec:function(b){var a=b.ui.space("toolbar_collapser"),c=a.getPrevious(),e=b.ui.space("contents"),
d=c.getParent(),f=parseInt(e.$.style.height,10),h=d.$.offsetHeight,g=a.hasClass("cke_toolbox_collapser_min");g?(c.show(),a.removeClass("cke_toolbox_collapser_min"),a.setAttribute("title",b.lang.toolbar.toolbarCollapse)):(c.hide(),a.addClass("cke_toolbox_collapser_min"),a.setAttribute("title",b.lang.toolbar.toolbarExpand));a.getFirst().setText(g?"▲":"◀");e.setStyle("height",f-(d.$.offsetHeight-h)+"px");b.fire("resize")},modes:{wysiwyg:1,source:1}});a.setKeystroke(CKEDITOR.ALT+(CKEDITOR.env.ie||CKEDITOR.env.webkit?
189:109),"toolbarCollapse");b.push('<a title="'+(d?a.lang.toolbar.toolbarCollapse:a.lang.toolbar.toolbarExpand)+'" id="'+a.ui.spaceId("toolbar_collapser")+'" tabIndex="-1" class="cke_toolbox_collapser');d||b.push(" cke_toolbox_collapser_min");b.push('" onclick="CKEDITOR.tools.callFunction('+v+')">','<span class="cke_arrow">&#9650;</span>',"</a>")}b.push("</span>");c.data.html+=b.join("")}});a.on("destroy",function(){if(this.toolbox){var a,d=0,b,e,g;for(a=this.toolbox.toolbars;d<a.length;d++){e=a[d].items;
for(b=0;b<e.length;b++)g=e[b],g.clickFn&&CKEDITOR.tools.removeFunction(g.clickFn),g.keyDownFn&&CKEDITOR.tools.removeFunction(g.keyDownFn)}}});a.on("uiReady",function(){var c=a.ui.space("toolbox");c&&a.focusManager.add(c,1)});a.addCommand("toolbarFocus",x);a.setKeystroke(CKEDITOR.ALT+121,"toolbarFocus");a.ui.add("-",CKEDITOR.UI_SEPARATOR,{});a.ui.addHandler(CKEDITOR.UI_SEPARATOR,{create:function(){return{render:function(a,d){d.push('<span class="cke_toolbar_separator" role="separator"></span>');return{}}}}})}});
CKEDITOR.ui.prototype.addToolbarGroup=function(a,d,g){var c=n(this.editor),h=0===d,b={name:a};if(g){if(g=CKEDITOR.tools.search(c,function(a){return a.name==g})){!g.groups&&(g.groups=[]);if(d&&(d=CKEDITOR.tools.indexOf(g.groups,d),0<=d)){g.groups.splice(d+1,0,a);return}h?g.groups.splice(0,0,a):g.groups.push(a);return}d=null}d&&(d=CKEDITOR.tools.indexOf(c,function(a){return a.name==d}));h?c.splice(0,0,a):"number"==typeof d?c.splice(d+1,0,b):c.push(a)}})();CKEDITOR.UI_SEPARATOR="separator";
CKEDITOR.config.toolbarLocation="top";(function(){var k;function n(a,c){function j(d){d=i.list[d];if(d.equals(a.editable())||"true"==d.getAttribute("contenteditable")){var e=a.createRange();e.selectNodeContents(d);e.select()}else a.getSelection().selectElement(d);a.focus()}function s(){l&&l.setHtml(o);delete i.list}var m=a.ui.spaceId("path"),l,i=a._.elementsPath,n=i.idBase;c.html+='<span id="'+m+'_label" class="cke_voice_label">'+a.lang.elementspath.eleLabel+'</span><span id="'+m+'" class="cke_path" role="group" aria-labelledby="'+m+
'_label">'+o+"</span>";a.on("uiReady",function(){var d=a.ui.space("path");d&&a.focusManager.add(d,1)});i.onClick=j;var t=CKEDITOR.tools.addFunction(j),u=CKEDITOR.tools.addFunction(function(d,e){var g=i.idBase,b,e=new CKEDITOR.dom.event(e);b="rtl"==a.lang.dir;switch(e.getKeystroke()){case b?39:37:case 9:return(b=CKEDITOR.document.getById(g+(d+1)))||(b=CKEDITOR.document.getById(g+"0")),b.focus(),!1;case b?37:39:case CKEDITOR.SHIFT+9:return(b=CKEDITOR.document.getById(g+(d-1)))||(b=CKEDITOR.document.getById(g+
(i.list.length-1))),b.focus(),!1;case 27:return a.focus(),!1;case 13:case 32:return j(d),!1}return!0});a.on("selectionChange",function(){for(var d=[],e=i.list=[],g=[],b=i.filters,c=!0,j=a.elementPath().elements,f,k=j.length;k--;){var h=j[k],p=0;f=h.data("cke-display-name")?h.data("cke-display-name"):h.data("cke-real-element-type")?h.data("cke-real-element-type"):h.getName();c=h.hasAttribute("contenteditable")?"true"==h.getAttribute("contenteditable"):c;!c&&!h.hasAttribute("contenteditable")&&(p=1);
for(var q=0;q<b.length;q++){var r=b[q](h,f);if(!1===r){p=1;break}f=r||f}p||(e.unshift(h),g.unshift(f))}e=e.length;for(b=0;b<e;b++)f=g[b],c=a.lang.elementspath.eleTitle.replace(/%1/,f),f=v.output({id:n+b,label:c,text:f,jsTitle:"javascript:void('"+f+"')",index:b,keyDownFn:u,clickFn:t}),d.unshift(f);l||(l=CKEDITOR.document.getById(m));g=l;g.setHtml(d.join("")+o);a.fire("elementsPathUpdate",{space:g})});a.on("readOnly",s);a.on("contentDomUnload",s);a.addCommand("elementsPathFocus",k);a.setKeystroke(CKEDITOR.ALT+
122,"elementsPathFocus")}k={editorFocus:!1,readOnly:1,exec:function(a){(a=CKEDITOR.document.getById(a._.elementsPath.idBase+"0"))&&a.focus(CKEDITOR.env.ie||CKEDITOR.env.air)}};var o='<span class="cke_path_empty">&nbsp;</span>',c="";CKEDITOR.env.gecko&&CKEDITOR.env.mac&&(c+=' onkeypress="return false;"');CKEDITOR.env.gecko&&(c+=' onblur="this.style.cssText = this.style.cssText;"');var v=CKEDITOR.addTemplate("pathItem",'<a id="{id}" href="{jsTitle}" tabindex="-1" class="cke_path_item" title="{label}"'+
c+' hidefocus="true"  onkeydown="return CKEDITOR.tools.callFunction({keyDownFn},{index}, event );" onclick="CKEDITOR.tools.callFunction({clickFn},{index}); return false;" role="button" aria-label="{label}">{text}</a>');CKEDITOR.plugins.add("elementspath",{init:function(a){a._.elementsPath={idBase:"cke_elementspath_"+CKEDITOR.tools.getNextNumber()+"_",filters:[]};a.on("uiSpace",function(c){"bottom"==c.data.space&&n(a,c.data)})}})})();(function(){function m(b,d,a){a=b.config.forceEnterMode||a;"wysiwyg"==b.mode&&(d||(d=b.activeEnterMode),b.elementPath().isContextFor("p")||(d=CKEDITOR.ENTER_BR,a=1),b.fire("saveSnapshot"),d==CKEDITOR.ENTER_BR?p(b,d,null,a):q(b,d,null,a),b.fire("saveSnapshot"))}function r(b){for(var b=b.getSelection().getRanges(!0),d=b.length-1;0<d;d--)b[d].deleteContents();return b[0]}function u(b){var d=b.startContainer.getAscendant(function(a){return a.type==CKEDITOR.NODE_ELEMENT&&"true"==a.getAttribute("contenteditable")},
!0);if(b.root.equals(d))return b;d=new CKEDITOR.dom.range(d);d.moveToRange(b);return d}CKEDITOR.plugins.add("enterkey",{init:function(b){b.addCommand("enter",{modes:{wysiwyg:1},editorFocus:!1,exec:function(b){m(b)}});b.addCommand("shiftEnter",{modes:{wysiwyg:1},editorFocus:!1,exec:function(b){m(b,b.activeShiftEnterMode,1)}});b.setKeystroke([[13,"enter"],[CKEDITOR.SHIFT+13,"shiftEnter"]])}});var v=CKEDITOR.dom.walker.whitespaces(),w=CKEDITOR.dom.walker.bookmark();CKEDITOR.plugins.enterkey={enterBlock:function(b,
d,a,h){if(a=a||r(b)){var a=u(a),f=a.document,i=a.checkStartOfBlock(),k=a.checkEndOfBlock(),j=b.elementPath(a.startContainer),c=j.block,l=d==CKEDITOR.ENTER_DIV?"div":"p",e;if(i&&k){if(c&&(c.is("li")||c.getParent().is("li"))){c.is("li")||(c=c.getParent());a=c.getParent();e=a.getParent();var h=!c.hasPrevious(),n=!c.hasNext(),l=b.getSelection(),g=l.createBookmarks(),i=c.getDirection(1),k=c.getAttribute("class"),o=c.getAttribute("style"),m=e.getDirection(1)!=i,b=b.enterMode!=CKEDITOR.ENTER_BR||m||o||k;
if(e.is("li"))if(h||n)c[h?"insertBefore":"insertAfter"](e);else c.breakParent(e);else{if(b)if(j.block.is("li")?(e=f.createElement(d==CKEDITOR.ENTER_P?"p":"div"),m&&e.setAttribute("dir",i),o&&e.setAttribute("style",o),k&&e.setAttribute("class",k),c.moveChildren(e)):e=j.block,h||n)e[h?"insertBefore":"insertAfter"](a);else c.breakParent(a),e.insertAfter(a);else if(c.appendBogus(!0),h||n)for(;f=c[h?"getFirst":"getLast"]();)f[h?"insertBefore":"insertAfter"](a);else for(c.breakParent(a);f=c.getLast();)f.insertAfter(a);
c.remove()}l.selectBookmarks(g);return}if(c&&c.getParent().is("blockquote")){c.breakParent(c.getParent());c.getPrevious().getFirst(CKEDITOR.dom.walker.invisible(1))||c.getPrevious().remove();c.getNext().getFirst(CKEDITOR.dom.walker.invisible(1))||c.getNext().remove();a.moveToElementEditStart(c);a.select();return}}else if(c&&c.is("pre")&&!k){p(b,d,a,h);return}if(i=a.splitBlock(l)){d=i.previousBlock;c=i.nextBlock;j=i.wasStartOfBlock;b=i.wasEndOfBlock;if(c)g=c.getParent(),g.is("li")&&(c.breakParent(g),
c.move(c.getNext(),1));else if(d&&(g=d.getParent())&&g.is("li"))d.breakParent(g),g=d.getNext(),a.moveToElementEditStart(g),d.move(d.getPrevious());if(!j&&!b)c.is("li")&&(e=a.clone(),e.selectNodeContents(c),e=new CKEDITOR.dom.walker(e),e.evaluator=function(a){return!(w(a)||v(a)||a.type==CKEDITOR.NODE_ELEMENT&&a.getName()in CKEDITOR.dtd.$inline&&!(a.getName()in CKEDITOR.dtd.$empty))},(g=e.next())&&(g.type==CKEDITOR.NODE_ELEMENT&&g.is("ul","ol"))&&(CKEDITOR.env.needsBrFiller?f.createElement("br"):f.createText(" ")).insertBefore(g)),
c&&a.moveToElementEditStart(c);else{if(d){if(d.is("li")||!s.test(d.getName())&&!d.is("pre"))e=d.clone()}else c&&(e=c.clone());e?h&&!e.is("li")&&e.renameNode(l):g&&g.is("li")?e=g:(e=f.createElement(l),d&&(n=d.getDirection())&&e.setAttribute("dir",n));if(f=i.elementPath){h=0;for(l=f.elements.length;h<l;h++){g=f.elements[h];if(g.equals(f.block)||g.equals(f.blockLimit))break;CKEDITOR.dtd.$removeEmpty[g.getName()]&&(g=g.clone(),e.moveChildren(g),e.append(g))}}e.appendBogus();e.getParent()||a.insertNode(e);
e.is("li")&&e.removeAttribute("value");if(CKEDITOR.env.ie&&j&&(!b||!d.getChildCount()))a.moveToElementEditStart(b?d:e),a.select();a.moveToElementEditStart(j&&!b?c:e)}a.select();a.scrollIntoView()}}},enterBr:function(b,d,a,h){if(a=a||r(b)){var f=a.document,i=a.checkEndOfBlock(),k=new CKEDITOR.dom.elementPath(b.getSelection().getStartElement()),j=k.block,c=j&&k.block.getName();!h&&"li"==c?q(b,d,a,h):(!h&&i&&s.test(c)?(i=j.getDirection())?(f=f.createElement("div"),f.setAttribute("dir",i),f.insertAfter(j),
a.setStart(f,0)):(f.createElement("br").insertAfter(j),CKEDITOR.env.gecko&&f.createText("").insertAfter(j),a.setStartAt(j.getNext(),CKEDITOR.env.ie?CKEDITOR.POSITION_BEFORE_START:CKEDITOR.POSITION_AFTER_START)):(b="pre"==c&&CKEDITOR.env.ie&&8>CKEDITOR.env.version?f.createText("\r"):f.createElement("br"),a.deleteContents(),a.insertNode(b),CKEDITOR.env.needsBrFiller?(f.createText("﻿").insertAfter(b),i&&(j||k.blockLimit).appendBogus(),b.getNext().$.nodeValue="",a.setStartAt(b.getNext(),CKEDITOR.POSITION_AFTER_START)):
a.setStartAt(b,CKEDITOR.POSITION_AFTER_END)),a.collapse(!0),a.select(),a.scrollIntoView())}}};var t=CKEDITOR.plugins.enterkey,p=t.enterBr,q=t.enterBlock,s=/^h[1-6]$/})();(function(){function i(b,f){var g={},c=[],e={nbsp:" ",shy:"­",gt:">",lt:"<",amp:"&",apos:"'",quot:'"'},b=b.replace(/\b(nbsp|shy|gt|lt|amp|apos|quot)(?:,|$)/g,function(b,a){var d=f?"&"+a+";":e[a];g[d]=f?e[a]:"&"+a+";";c.push(d);return""});if(!f&&b){var b=b.split(","),a=document.createElement("div"),d;a.innerHTML="&"+b.join(";&")+";";d=a.innerHTML;a=null;for(a=0;a<d.length;a++){var h=d.charAt(a);g[h]="&"+b[a]+";";c.push(h)}}g.regex=c.join(f?"|":"");return g}CKEDITOR.plugins.add("entities",{afterInit:function(b){function f(a){return h[a]}
function g(b){return"force"==c.entities_processNumerical||!a[b]?"&#"+b.charCodeAt(0)+";":a[b]}var c=b.config;if(b=(b=b.dataProcessor)&&b.htmlFilter){var e=[];!1!==c.basicEntities&&e.push("nbsp,gt,lt,amp");c.entities&&(e.length&&e.push("quot,iexcl,cent,pound,curren,yen,brvbar,sect,uml,copy,ordf,laquo,not,shy,reg,macr,deg,plusmn,sup2,sup3,acute,micro,para,middot,cedil,sup1,ordm,raquo,frac14,frac12,frac34,iquest,times,divide,fnof,bull,hellip,prime,Prime,oline,frasl,weierp,image,real,trade,alefsym,larr,uarr,rarr,darr,harr,crarr,lArr,uArr,rArr,dArr,hArr,forall,part,exist,empty,nabla,isin,notin,ni,prod,sum,minus,lowast,radic,prop,infin,ang,and,or,cap,cup,int,there4,sim,cong,asymp,ne,equiv,le,ge,sub,sup,nsub,sube,supe,oplus,otimes,perp,sdot,lceil,rceil,lfloor,rfloor,lang,rang,loz,spades,clubs,hearts,diams,circ,tilde,ensp,emsp,thinsp,zwnj,zwj,lrm,rlm,ndash,mdash,lsquo,rsquo,sbquo,ldquo,rdquo,bdquo,dagger,Dagger,permil,lsaquo,rsaquo,euro"),
c.entities_latin&&e.push("Agrave,Aacute,Acirc,Atilde,Auml,Aring,AElig,Ccedil,Egrave,Eacute,Ecirc,Euml,Igrave,Iacute,Icirc,Iuml,ETH,Ntilde,Ograve,Oacute,Ocirc,Otilde,Ouml,Oslash,Ugrave,Uacute,Ucirc,Uuml,Yacute,THORN,szlig,agrave,aacute,acirc,atilde,auml,aring,aelig,ccedil,egrave,eacute,ecirc,euml,igrave,iacute,icirc,iuml,eth,ntilde,ograve,oacute,ocirc,otilde,ouml,oslash,ugrave,uacute,ucirc,uuml,yacute,thorn,yuml,OElig,oelig,Scaron,scaron,Yuml"),c.entities_greek&&e.push("Alpha,Beta,Gamma,Delta,Epsilon,Zeta,Eta,Theta,Iota,Kappa,Lambda,Mu,Nu,Xi,Omicron,Pi,Rho,Sigma,Tau,Upsilon,Phi,Chi,Psi,Omega,alpha,beta,gamma,delta,epsilon,zeta,eta,theta,iota,kappa,lambda,mu,nu,xi,omicron,pi,rho,sigmaf,sigma,tau,upsilon,phi,chi,psi,omega,thetasym,upsih,piv"),
c.entities_additional&&e.push(c.entities_additional));var a=i(e.join(",")),d=a.regex?"["+a.regex+"]":"a^";delete a.regex;c.entities&&c.entities_processNumerical&&(d="[^ -~]|"+d);var d=RegExp(d,"g"),h=i("nbsp,gt,lt,amp,shy",!0),j=RegExp(h.regex,"g");b.addRules({text:function(a){return a.replace(j,f).replace(d,g)}},{applyToAll:!0,excludeNestedEditable:!0})}}})})();CKEDITOR.config.basicEntities=!0;CKEDITOR.config.entities=!0;CKEDITOR.config.entities_latin=!0;CKEDITOR.config.entities_greek=!0;
CKEDITOR.config.entities_additional="#39";CKEDITOR.plugins.add("popup");
CKEDITOR.tools.extend(CKEDITOR.editor.prototype,{popup:function(e,a,b,d){a=a||"80%";b=b||"70%";"string"==typeof a&&(1<a.length&&"%"==a.substr(a.length-1,1))&&(a=parseInt(window.screen.width*parseInt(a,10)/100,10));"string"==typeof b&&(1<b.length&&"%"==b.substr(b.length-1,1))&&(b=parseInt(window.screen.height*parseInt(b,10)/100,10));640>a&&(a=640);420>b&&(b=420);var f=parseInt((window.screen.height-b)/2,10),g=parseInt((window.screen.width-a)/2,10),d=(d||"location=no,menubar=no,toolbar=no,dependent=yes,minimizable=no,modal=yes,alwaysRaised=yes,resizable=yes,scrollbars=yes")+",width="+
a+",height="+b+",top="+f+",left="+g,c=window.open("",null,d,!0);if(!c)return!1;try{-1==navigator.userAgent.toLowerCase().indexOf(" chrome/")&&(c.moveTo(g,f),c.resizeTo(a,b)),c.focus(),c.location.href=e}catch(h){window.open(e,null,d,!0)}return!0}});(function(){function g(a,c){var d=[];if(c)for(var b in c)d.push(b+"="+encodeURIComponent(c[b]));else return a;return a+(-1!=a.indexOf("?")?"&":"?")+d.join("&")}function i(a){a+="";return a.charAt(0).toUpperCase()+a.substr(1)}function k(){var a=this.getDialog(),c=a.getParentEditor();c._.filebrowserSe=this;var d=c.config["filebrowser"+i(a.getName())+"WindowWidth"]||c.config.filebrowserWindowWidth||"80%",a=c.config["filebrowser"+i(a.getName())+"WindowHeight"]||c.config.filebrowserWindowHeight||"70%",
b=this.filebrowser.params||{};b.CKEditor=c.name;b.CKEditorFuncNum=c._.filebrowserFn;b.langCode||(b.langCode=c.langCode);b=g(this.filebrowser.url,b);c.popup(b,d,a,c.config.filebrowserWindowFeatures||c.config.fileBrowserWindowFeatures)}function l(){var a=this.getDialog();a.getParentEditor()._.filebrowserSe=this;return!a.getContentElement(this["for"][0],this["for"][1]).getInputElement().$.value||!a.getContentElement(this["for"][0],this["for"][1]).getAction()?!1:!0}function m(a,c,d){var b=d.params||{};
b.CKEditor=a.name;b.CKEditorFuncNum=a._.filebrowserFn;b.langCode||(b.langCode=a.langCode);c.action=g(d.url,b);c.filebrowser=d}function j(a,c,d,b){if(b&&b.length)for(var e,g=b.length;g--;)if(e=b[g],("hbox"==e.type||"vbox"==e.type||"fieldset"==e.type)&&j(a,c,d,e.children),e.filebrowser)if("string"==typeof e.filebrowser&&(e.filebrowser={action:"fileButton"==e.type?"QuickUpload":"Browse",target:e.filebrowser}),"Browse"==e.filebrowser.action){var f=e.filebrowser.url;void 0===f&&(f=a.config["filebrowser"+
i(c)+"BrowseUrl"],void 0===f&&(f=a.config.filebrowserBrowseUrl));f&&(e.onClick=k,e.filebrowser.url=f,e.hidden=!1)}else if("QuickUpload"==e.filebrowser.action&&e["for"]&&(f=e.filebrowser.url,void 0===f&&(f=a.config["filebrowser"+i(c)+"UploadUrl"],void 0===f&&(f=a.config.filebrowserUploadUrl)),f)){var h=e.onClick;e.onClick=function(a){var b=a.sender;return h&&h.call(b,a)===false?false:l.call(b,a)};e.filebrowser.url=f;e.hidden=!1;m(a,d.getContents(e["for"][0]).get(e["for"][1]),e.filebrowser)}}function h(a,
c,d){if(-1!==d.indexOf(";")){for(var d=d.split(";"),b=0;b<d.length;b++)if(h(a,c,d[b]))return!0;return!1}return(a=a.getContents(c).get(d).filebrowser)&&a.url}function n(a,c){var d=this._.filebrowserSe.getDialog(),b=this._.filebrowserSe["for"],e=this._.filebrowserSe.filebrowser.onSelect;b&&d.getContentElement(b[0],b[1]).reset();if(!("function"==typeof c&&!1===c.call(this._.filebrowserSe))&&!(e&&!1===e.call(this._.filebrowserSe,a,c))&&("string"==typeof c&&c&&alert(c),a&&(b=this._.filebrowserSe,d=b.getDialog(),
b=b.filebrowser.target||null)))if(b=b.split(":"),e=d.getContentElement(b[0],b[1]))e.setValue(a),d.selectPage(b[0])}CKEDITOR.plugins.add("filebrowser",{requires:"popup",init:function(a){a._.filebrowserFn=CKEDITOR.tools.addFunction(n,a);a.on("destroy",function(){CKEDITOR.tools.removeFunction(this._.filebrowserFn)})}});CKEDITOR.on("dialogDefinition",function(a){if(a.editor.plugins.filebrowser)for(var c=a.data.definition,d,b=0;b<c.contents.length;++b)if(d=c.contents[b])j(a.editor,a.data.name,c,d.elements),
d.hidden&&d.filebrowser&&(d.hidden=!h(c,d.id,d.filebrowser))})})();CKEDITOR.plugins.add("find",{requires:"dialog",init:function(a){var b=a.addCommand("find",new CKEDITOR.dialogCommand("find"));b.canUndo=!1;b.readOnly=1;a.addCommand("replace",new CKEDITOR.dialogCommand("replace")).canUndo=!1;a.ui.addButton&&(a.ui.addButton("Find",{label:a.lang.find.find,command:"find",toolbar:"find,10"}),a.ui.addButton("Replace",{label:a.lang.find.replace,command:"replace",toolbar:"find,20"}));CKEDITOR.dialog.add("find",this.path+"dialogs/find.js");CKEDITOR.dialog.add("replace",this.path+
"dialogs/find.js")}});CKEDITOR.config.find_highlight={element:"span",styles:{"background-color":"#004",color:"#fff"}};(function(){function g(a,b){var c=j.exec(a),d=j.exec(b);if(c){if(!c[2]&&"px"==d[2])return d[1];if("px"==c[2]&&!d[2])return d[1]+"px"}return b}var i=CKEDITOR.htmlParser.cssStyle,h=CKEDITOR.tools.cssLength,j=/^((?:\d*(?:\.\d+))|(?:\d+))(.*)?$/i,k={elements:{$:function(a){var b=a.attributes;if((b=(b=(b=b&&b["data-cke-realelement"])&&new CKEDITOR.htmlParser.fragment.fromHtml(decodeURIComponent(b)))&&b.children[0])&&a.attributes["data-cke-resizable"]){var c=(new i(a)).rules,a=b.attributes,d=c.width,c=
c.height;d&&(a.width=g(a.width,d));c&&(a.height=g(a.height,c))}return b}}};CKEDITOR.plugins.add("fakeobjects",{init:function(a){a.filter.allow("img[!data-cke-realelement,src,alt,title](*){*}","fakeobjects")},afterInit:function(a){(a=(a=a.dataProcessor)&&a.htmlFilter)&&a.addRules(k,{applyToAll:!0})}});CKEDITOR.editor.prototype.createFakeElement=function(a,b,c,d){var e=this.lang.fakeobjects,e=e[c]||e.unknown,b={"class":b,"data-cke-realelement":encodeURIComponent(a.getOuterHtml()),"data-cke-real-node-type":a.type,
alt:e,title:e,align:a.getAttribute("align")||""};CKEDITOR.env.hc||(b.src=CKEDITOR.tools.transparentImageData);c&&(b["data-cke-real-element-type"]=c);d&&(b["data-cke-resizable"]=d,c=new i,d=a.getAttribute("width"),a=a.getAttribute("height"),d&&(c.rules.width=h(d)),a&&(c.rules.height=h(a)),c.populate(b));return this.document.createElement("img",{attributes:b})};CKEDITOR.editor.prototype.createFakeParserElement=function(a,b,c,d){var e=this.lang.fakeobjects,e=e[c]||e.unknown,f;f=new CKEDITOR.htmlParser.basicWriter;
a.writeHtml(f);f=f.getHtml();b={"class":b,"data-cke-realelement":encodeURIComponent(f),"data-cke-real-node-type":a.type,alt:e,title:e,align:a.attributes.align||""};CKEDITOR.env.hc||(b.src=CKEDITOR.tools.transparentImageData);c&&(b["data-cke-real-element-type"]=c);d&&(b["data-cke-resizable"]=d,d=a.attributes,a=new i,c=d.width,d=d.height,void 0!==c&&(a.rules.width=h(c)),void 0!==d&&(a.rules.height=h(d)),a.populate(b));return new CKEDITOR.htmlParser.element("img",b)};CKEDITOR.editor.prototype.restoreRealElement=
function(a){if(a.data("cke-real-node-type")!=CKEDITOR.NODE_ELEMENT)return null;var b=CKEDITOR.dom.element.createFromHtml(decodeURIComponent(a.data("cke-realelement")),this.document);if(a.data("cke-resizable")){var c=a.getStyle("width"),a=a.getStyle("height");c&&b.setAttribute("width",g(b.getAttribute("width"),c));a&&b.setAttribute("height",g(b.getAttribute("height"),a))}return b}})();(function(){function d(a){a=a.attributes;return"application/x-shockwave-flash"==a.type||f.test(a.src||"")}function e(a,b){return a.createFakeParserElement(b,"cke_flash","flash",!0)}var f=/\.swf(?:$|\?)/i;CKEDITOR.plugins.add("flash",{requires:"dialog,fakeobjects",onLoad:function(){CKEDITOR.addCss("img.cke_flash{background-image: url("+CKEDITOR.getUrl(this.path+"images/placeholder.png")+");background-position: center center;background-repeat: no-repeat;border: 1px solid #a9a9a9;width: 80px;height: 80px;}")},
init:function(a){var b="object[classid,codebase,height,hspace,vspace,width];param[name,value];embed[height,hspace,pluginspage,src,type,vspace,width]";CKEDITOR.dialog.isTabEnabled(a,"flash","properties")&&(b+=";object[align]; embed[allowscriptaccess,quality,scale,wmode]");CKEDITOR.dialog.isTabEnabled(a,"flash","advanced")&&(b+=";object[id]{*}; embed[bgcolor]{*}(*)");a.addCommand("flash",new CKEDITOR.dialogCommand("flash",{allowedContent:b,requiredContent:"embed"}));a.ui.addButton&&a.ui.addButton("Flash",
{label:a.lang.common.flash,command:"flash",toolbar:"insert,20"});CKEDITOR.dialog.add("flash",this.path+"dialogs/flash.js");a.addMenuItems&&a.addMenuItems({flash:{label:a.lang.flash.properties,command:"flash",group:"flash"}});a.on("doubleclick",function(a){var b=a.data.element;b.is("img")&&"flash"==b.data("cke-real-element-type")&&(a.data.dialog="flash")});a.contextMenu&&a.contextMenu.addListener(function(a){if(a&&a.is("img")&&!a.isReadOnly()&&"flash"==a.data("cke-real-element-type"))return{flash:CKEDITOR.TRISTATE_OFF}})},
afterInit:function(a){var b=a.dataProcessor;(b=b&&b.dataFilter)&&b.addRules({elements:{"cke:object":function(b){var c=b.attributes;if((!c.classid||!(""+c.classid).toLowerCase())&&!d(b)){for(c=0;c<b.children.length;c++)if("cke:embed"==b.children[c].name){if(!d(b.children[c]))break;return e(a,b)}return null}return e(a,b)},"cke:embed":function(b){return!d(b)?null:e(a,b)}}},5)}})})();CKEDITOR.tools.extend(CKEDITOR.config,{flashEmbedTagOnly:!1,flashAddEmbedTag:!0,flashConvertOnEdit:!1});(function(){function i(a){var j=a.config,m=a.fire("uiSpace",{space:"top",html:""}).html,p=function(){function f(a,c,e){b.setStyle(c,s(e));b.setStyle("position",a)}function e(a){var b=i.getDocumentPosition();switch(a){case "top":f("absolute","top",b.y-n-o);break;case "pin":f("fixed","top",t);break;case "bottom":f("absolute","top",b.y+(c.height||c.bottom-c.top)+o)}k=a}var k,i,l,c,h,n,r,m=j.floatSpaceDockedOffsetX||0,o=j.floatSpaceDockedOffsetY||0,q=j.floatSpacePinnedOffsetX||0,t=j.floatSpacePinnedOffsetY||
0;return function(d){if(i=a.editable())if(d&&"focus"==d.name&&b.show(),b.removeStyle("left"),b.removeStyle("right"),l=b.getClientRect(),c=i.getClientRect(),h=g.getViewPaneSize(),n=l.height,r="pageXOffset"in g.$?g.$.pageXOffset:CKEDITOR.document.$.documentElement.scrollLeft,k){n+o<=c.top?e("top"):n+o>h.height-c.bottom?e("pin"):e("bottom");var d=h.width/2,d=0<c.left&&c.right<h.width&&c.width>l.width?"rtl"==a.config.contentsLangDirection?"right":"left":d-c.left>c.right-d?"left":"right",f;l.width>h.width?
(d="left",f=0):(f="left"==d?0<c.left?c.left:0:c.right<h.width?h.width-c.right:0,f+l.width>h.width&&(d="left"==d?"right":"left",f=0));b.setStyle(d,s(("pin"==k?q:m)+f+("pin"==k?0:"left"==d?r:-r)))}else k="pin",e("pin"),p(d)}}();if(m){var i=new CKEDITOR.template('<div id="cke_{name}" class="cke {id} cke_reset_all cke_chrome cke_editor_{name} cke_float cke_{langDir} '+CKEDITOR.env.cssClass+'" dir="{langDir}" title="'+(CKEDITOR.env.gecko?" ":"")+'" lang="{langCode}" role="application" style="{style}"'+
(a.title?' aria-labelledby="cke_{name}_arialbl"':" ")+">"+(a.title?'<span id="cke_{name}_arialbl" class="cke_voice_label">{voiceLabel}</span>':" ")+'<div class="cke_inner"><div id="{topId}" class="cke_top" role="presentation">{content}</div></div></div>'),b=CKEDITOR.document.getBody().append(CKEDITOR.dom.element.createFromHtml(i.output({content:m,id:a.id,langDir:a.lang.dir,langCode:a.langCode,name:a.name,style:"display:none;z-index:"+(j.baseFloatZIndex-1),topId:a.ui.spaceId("top"),voiceLabel:a.title}))),
q=CKEDITOR.tools.eventsBuffer(500,p),e=CKEDITOR.tools.eventsBuffer(100,p);b.unselectable();b.on("mousedown",function(a){a=a.data;a.getTarget().hasAscendant("a",1)||a.preventDefault()});a.on("focus",function(b){p(b);a.on("change",q.input);g.on("scroll",e.input);g.on("resize",e.input)});a.on("blur",function(){b.hide();a.removeListener("change",q.input);g.removeListener("scroll",e.input);g.removeListener("resize",e.input)});a.on("destroy",function(){g.removeListener("scroll",e.input);g.removeListener("resize",
e.input);b.clearCustomData();b.remove()});a.focusManager.hasFocus&&b.show();a.focusManager.add(b,1)}}var g=CKEDITOR.document.getWindow(),s=CKEDITOR.tools.cssLength;CKEDITOR.plugins.add("floatingspace",{init:function(a){a.on("loaded",function(){i(this)},null,null,20)}})})();CKEDITOR.plugins.add("listblock",{requires:"panel",onLoad:function(){var f=CKEDITOR.addTemplate("panel-list",'<ul role="presentation" class="cke_panel_list">{items}</ul>'),g=CKEDITOR.addTemplate("panel-list-item",'<li id="{id}" class="cke_panel_listItem" role=presentation><a id="{id}_option" _cke_focus=1 hidefocus=true title="{title}" href="javascript:void(\'{val}\')"  {onclick}="CKEDITOR.tools.callFunction({clickFn},\'{val}\'); return false;" role="option">{text}</a></li>'),h=CKEDITOR.addTemplate("panel-list-group",
'<h1 id="{id}" class="cke_panel_grouptitle" role="presentation" >{label}</h1>'),i=/\'/g;CKEDITOR.ui.panel.prototype.addListBlock=function(a,b){return this.addBlock(a,new CKEDITOR.ui.listBlock(this.getHolderElement(),b))};CKEDITOR.ui.listBlock=CKEDITOR.tools.createClass({base:CKEDITOR.ui.panel.block,$:function(a,b){var b=b||{},c=b.attributes||(b.attributes={});(this.multiSelect=!!b.multiSelect)&&(c["aria-multiselectable"]=!0);!c.role&&(c.role="listbox");this.base.apply(this,arguments);this.element.setAttribute("role",
c.role);c=this.keys;c[40]="next";c[9]="next";c[38]="prev";c[CKEDITOR.SHIFT+9]="prev";c[32]=CKEDITOR.env.ie?"mouseup":"click";CKEDITOR.env.ie&&(c[13]="mouseup");this._.pendingHtml=[];this._.pendingList=[];this._.items={};this._.groups={}},_:{close:function(){if(this._.started){var a=f.output({items:this._.pendingList.join("")});this._.pendingList=[];this._.pendingHtml.push(a);delete this._.started}},getClick:function(){this._.click||(this._.click=CKEDITOR.tools.addFunction(function(a){var b=this.toggle(a);
if(this.onClick)this.onClick(a,b)},this));return this._.click}},proto:{add:function(a,b,c){var d=CKEDITOR.tools.getNextId();this._.started||(this._.started=1,this._.size=this._.size||0);this._.items[a]=d;var e;e=CKEDITOR.tools.htmlEncodeAttr(a).replace(i,"\\'");a={id:d,val:e,onclick:CKEDITOR.env.ie?'onclick="return false;" onmouseup':"onclick",clickFn:this._.getClick(),title:CKEDITOR.tools.htmlEncodeAttr(c||a),text:b||a};this._.pendingList.push(g.output(a))},startGroup:function(a){this._.close();
var b=CKEDITOR.tools.getNextId();this._.groups[a]=b;this._.pendingHtml.push(h.output({id:b,label:a}))},commit:function(){this._.close();this.element.appendHtml(this._.pendingHtml.join(""));delete this._.size;this._.pendingHtml=[]},toggle:function(a){var b=this.isMarked(a);b?this.unmark(a):this.mark(a);return!b},hideGroup:function(a){var b=(a=this.element.getDocument().getById(this._.groups[a]))&&a.getNext();a&&(a.setStyle("display","none"),b&&"ul"==b.getName()&&b.setStyle("display","none"))},hideItem:function(a){this.element.getDocument().getById(this._.items[a]).setStyle("display",
"none")},showAll:function(){var a=this._.items,b=this._.groups,c=this.element.getDocument(),d;for(d in a)c.getById(a[d]).setStyle("display","");for(var e in b)a=c.getById(b[e]),d=a.getNext(),a.setStyle("display",""),d&&"ul"==d.getName()&&d.setStyle("display","")},mark:function(a){this.multiSelect||this.unmarkAll();var a=this._.items[a],b=this.element.getDocument().getById(a);b.addClass("cke_selected");this.element.getDocument().getById(a+"_option").setAttribute("aria-selected",!0);this.onMark&&this.onMark(b)},
unmark:function(a){var b=this.element.getDocument(),a=this._.items[a],c=b.getById(a);c.removeClass("cke_selected");b.getById(a+"_option").removeAttribute("aria-selected");this.onUnmark&&this.onUnmark(c)},unmarkAll:function(){var a=this._.items,b=this.element.getDocument(),c;for(c in a){var d=a[c];b.getById(d).removeClass("cke_selected");b.getById(d+"_option").removeAttribute("aria-selected")}this.onUnmark&&this.onUnmark()},isMarked:function(a){return this.element.getDocument().getById(this._.items[a]).hasClass("cke_selected")},
focus:function(a){this._.focusIndex=-1;var b=this.element.getElementsByTag("a"),c,d=-1;if(a)for(c=this.element.getDocument().getById(this._.items[a]).getFirst();a=b.getItem(++d);){if(a.equals(c)){this._.focusIndex=d;break}}else this.element.focus();c&&setTimeout(function(){c.focus()},0)}}})}});CKEDITOR.plugins.add("richcombo",{requires:"floatpanel,listblock,button",beforeInit:function(d){d.ui.addHandler(CKEDITOR.UI_RICHCOMBO,CKEDITOR.ui.richCombo.handler)}});
(function(){var d='<span id="{id}" class="cke_combo cke_combo__{name} {cls}" role="presentation"><span id="{id}_label" class="cke_combo_label">{label}</span><a class="cke_combo_button" title="{title}" tabindex="-1"'+(CKEDITOR.env.gecko&&!CKEDITOR.env.hc?"":" href=\"javascript:void('{titleJs}')\"")+' hidefocus="true" role="button" aria-labelledby="{id}_label" aria-haspopup="true"';CKEDITOR.env.gecko&&CKEDITOR.env.mac&&(d+=' onkeypress="return false;"');CKEDITOR.env.gecko&&(d+=' onblur="this.style.cssText = this.style.cssText;"');
var d=d+(' onkeydown="return CKEDITOR.tools.callFunction({keydownFn},event,this);" onfocus="return CKEDITOR.tools.callFunction({focusFn},event);" '+(CKEDITOR.env.ie?'onclick="return false;" onmouseup':"onclick")+'="CKEDITOR.tools.callFunction({clickFn},this);return false;"><span id="{id}_text" class="cke_combo_text cke_combo_inlinelabel">{label}</span><span class="cke_combo_open"><span class="cke_combo_arrow">'+(CKEDITOR.env.hc?"&#9660;":CKEDITOR.env.air?"&nbsp;":"")+"</span></span></a></span>"),
i=CKEDITOR.addTemplate("combo",d);CKEDITOR.UI_RICHCOMBO="richcombo";CKEDITOR.ui.richCombo=CKEDITOR.tools.createClass({$:function(a){CKEDITOR.tools.extend(this,a,{canGroup:!1,title:a.label,modes:{wysiwyg:1},editorFocus:1});a=this.panel||{};delete this.panel;this.id=CKEDITOR.tools.getNextNumber();this.document=a.parent&&a.parent.getDocument()||CKEDITOR.document;a.className="cke_combopanel";a.block={multiSelect:a.multiSelect,attributes:a.attributes};a.toolbarRelated=!0;this._={panelDefinition:a,items:{}}},
proto:{renderHtml:function(a){var b=[];this.render(a,b);return b.join("")},render:function(a,b){function g(){if(this.getState()!=CKEDITOR.TRISTATE_ON){var c=this.modes[a.mode]?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED;a.readOnly&&!this.readOnly&&(c=CKEDITOR.TRISTATE_DISABLED);this.setState(c);this.setValue("");c!=CKEDITOR.TRISTATE_DISABLED&&this.refresh&&this.refresh()}}var d=CKEDITOR.env,h="cke_"+this.id,e=CKEDITOR.tools.addFunction(function(b){j&&(a.unlockSelection(1),j=0);c.execute(b)},
this),f=this,c={id:h,combo:this,focus:function(){CKEDITOR.document.getById(h).getChild(1).focus()},execute:function(c){var b=f._;if(b.state!=CKEDITOR.TRISTATE_DISABLED)if(f.createPanel(a),b.on)b.panel.hide();else{f.commit();var d=f.getValue();d?b.list.mark(d):b.list.unmarkAll();b.panel.showBlock(f.id,new CKEDITOR.dom.element(c),4)}},clickFn:e};a.on("activeFilterChange",g,this);a.on("mode",g,this);a.on("selectionChange",g,this);!this.readOnly&&a.on("readOnly",g,this);var k=CKEDITOR.tools.addFunction(function(b,
d){var b=new CKEDITOR.dom.event(b),g=b.getKeystroke();if(40==g)a.once("panelShow",function(a){a.data._.panel._.currentBlock.onKeyDown(40)});switch(g){case 13:case 32:case 40:CKEDITOR.tools.callFunction(e,d);break;default:c.onkey(c,g)}b.preventDefault()}),l=CKEDITOR.tools.addFunction(function(){c.onfocus&&c.onfocus()}),j=0;c.keyDownFn=k;d={id:h,name:this.name||this.command,label:this.label,title:this.title,cls:this.className||"",titleJs:d.gecko&&!d.hc?"":(this.title||"").replace("'",""),keydownFn:k,
focusFn:l,clickFn:e};i.output(d,b);if(this.onRender)this.onRender();return c},createPanel:function(a){if(!this._.panel){var b=this._.panelDefinition,d=this._.panelDefinition.block,i=b.parent||CKEDITOR.document.getBody(),h="cke_combopanel__"+this.name,e=new CKEDITOR.ui.floatPanel(a,i,b),f=e.addListBlock(this.id,d),c=this;e.onShow=function(){this.element.addClass(h);c.setState(CKEDITOR.TRISTATE_ON);c._.on=1;c.editorFocus&&!a.focusManager.hasFocus&&a.focus();if(c.onOpen)c.onOpen();a.once("panelShow",
function(){f.focus(!f.multiSelect&&c.getValue())})};e.onHide=function(b){this.element.removeClass(h);c.setState(c.modes&&c.modes[a.mode]?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED);c._.on=0;if(!b&&c.onClose)c.onClose()};e.onEscape=function(){e.hide(1)};f.onClick=function(a,b){c.onClick&&c.onClick.call(c,a,b);e.hide()};this._.panel=e;this._.list=f;e.getBlock(this.id).onHide=function(){c._.on=0;c.setState(CKEDITOR.TRISTATE_OFF)};this.init&&this.init()}},setValue:function(a,b){this._.value=a;var d=
this.document.getById("cke_"+this.id+"_text");d&&(!a&&!b?(b=this.label,d.addClass("cke_combo_inlinelabel")):d.removeClass("cke_combo_inlinelabel"),d.setText("undefined"!=typeof b?b:a))},getValue:function(){return this._.value||""},unmarkAll:function(){this._.list.unmarkAll()},mark:function(a){this._.list.mark(a)},hideItem:function(a){this._.list.hideItem(a)},hideGroup:function(a){this._.list.hideGroup(a)},showAll:function(){this._.list.showAll()},add:function(a,b,d){this._.items[a]=d||a;this._.list.add(a,
b,d)},startGroup:function(a){this._.list.startGroup(a)},commit:function(){this._.committed||(this._.list.commit(),this._.committed=1,CKEDITOR.ui.fire("ready",this));this._.committed=1},setState:function(a){if(this._.state!=a){var b=this.document.getById("cke_"+this.id);b.setState(a,"cke_combo");a==CKEDITOR.TRISTATE_DISABLED?b.setAttribute("aria-disabled",!0):b.removeAttribute("aria-disabled");this._.state=a}},getState:function(){return this._.state},enable:function(){this._.state==CKEDITOR.TRISTATE_DISABLED&&
this.setState(this._.lastState)},disable:function(){this._.state!=CKEDITOR.TRISTATE_DISABLED&&(this._.lastState=this._.state,this.setState(CKEDITOR.TRISTATE_DISABLED))}},statics:{handler:{create:function(a){return new CKEDITOR.ui.richCombo(a)}}}});CKEDITOR.ui.prototype.addRichCombo=function(a,b){this.add(a,CKEDITOR.UI_RICHCOMBO,b)}})();(function(){function j(a,b,c,f,m,j,p,r){for(var s=a.config,n=new CKEDITOR.style(p),i=m.split(";"),m=[],k={},d=0;d<i.length;d++){var h=i[d];if(h){var h=h.split("/"),q={},l=i[d]=h[0];q[c]=m[d]=h[1]||l;k[l]=new CKEDITOR.style(p,q);k[l]._.definition.name=l}else i.splice(d--,1)}a.ui.addRichCombo(b,{label:f.label,title:f.panelTitle,toolbar:"styles,"+r,allowedContent:n,requiredContent:n,panel:{css:[CKEDITOR.skin.getPath("editor")].concat(s.contentsCss),multiSelect:!1,attributes:{"aria-label":f.panelTitle}},
init:function(){this.startGroup(f.panelTitle);for(var a=0;a<i.length;a++){var b=i[a];this.add(b,k[b].buildPreview(),b)}},onClick:function(b){a.focus();a.fire("saveSnapshot");var c=this.getValue(),f=k[b];if(c&&b!=c){var i=k[c],e=a.getSelection().getRanges()[0];if(e.collapsed){var d=a.elementPath(),g=d.contains(function(a){return i.checkElementRemovable(a)});if(g){var h=e.checkBoundaryOfElement(g,CKEDITOR.START),j=e.checkBoundaryOfElement(g,CKEDITOR.END);if(h&&j){for(h=e.createBookmark();d=g.getFirst();)d.insertBefore(g);
g.remove();e.moveToBookmark(h)}else h?e.moveToPosition(g,CKEDITOR.POSITION_BEFORE_START):j?e.moveToPosition(g,CKEDITOR.POSITION_AFTER_END):(e.splitElement(g),e.moveToPosition(g,CKEDITOR.POSITION_AFTER_END),o(e,d.elements.slice(),g));a.getSelection().selectRanges([e])}}else a.removeStyle(i)}a[c==b?"removeStyle":"applyStyle"](f);a.fire("saveSnapshot")},onRender:function(){a.on("selectionChange",function(b){for(var c=this.getValue(),b=b.data.path.elements,d=0,f;d<b.length;d++){f=b[d];for(var e in k)if(k[e].checkElementMatch(f,
!0,a)){e!=c&&this.setValue(e);return}}this.setValue("",j)},this)},refresh:function(){a.activeFilter.check(n)||this.setState(CKEDITOR.TRISTATE_DISABLED)}})}function o(a,b,c){var f=b.pop();if(f){if(c)return o(a,b,f.equals(c)?null:c);c=f.clone();a.insertNode(c);a.moveToPosition(c,CKEDITOR.POSITION_AFTER_START);o(a,b)}}CKEDITOR.plugins.add("font",{requires:"richcombo",init:function(a){var b=a.config;j(a,"Font","family",a.lang.font,b.font_names,b.font_defaultLabel,b.font_style,30);j(a,"FontSize","size",
a.lang.font.fontSize,b.fontSize_sizes,b.fontSize_defaultLabel,b.fontSize_style,40)}})})();CKEDITOR.config.font_names="Arial/Arial, Helvetica, sans-serif;Comic Sans MS/Comic Sans MS, cursive;Courier New/Courier New, Courier, monospace;Georgia/Georgia, serif;Lucida Sans Unicode/Lucida Sans Unicode, Lucida Grande, sans-serif;Tahoma/Tahoma, Geneva, sans-serif;Times New Roman/Times New Roman, Times, serif;Trebuchet MS/Trebuchet MS, Helvetica, sans-serif;Verdana/Verdana, Geneva, sans-serif";
CKEDITOR.config.font_defaultLabel="";CKEDITOR.config.font_style={element:"span",styles:{"font-family":"#(family)"},overrides:[{element:"font",attributes:{face:null}}]};CKEDITOR.config.fontSize_sizes="8/8px;9/9px;10/10px;11/11px;12/12px;14/14px;16/16px;18/18px;20/20px;22/22px;24/24px;26/26px;28/28px;36/36px;48/48px;72/72px";CKEDITOR.config.fontSize_defaultLabel="";CKEDITOR.config.fontSize_style={element:"span",styles:{"font-size":"#(size)"},overrides:[{element:"font",attributes:{size:null}}]};CKEDITOR.plugins.add("forms",{requires:"dialog,fakeobjects",onLoad:function(){CKEDITOR.addCss(".cke_editable form{border: 1px dotted #FF0000;padding: 2px;}\n");CKEDITOR.addCss("img.cke_hidden{background-image: url("+CKEDITOR.getUrl(this.path+"images/hiddenfield.gif")+");background-position: center center;background-repeat: no-repeat;border: 1px solid #a9a9a9;width: 16px !important;height: 16px !important;}")},init:function(a){var b=a.lang,g=0,h={email:1,password:1,search:1,tel:1,text:1,url:1},j={checkbox:"input[type,name,checked]",
radio:"input[type,name,checked]",textfield:"input[type,name,value,size,maxlength]",textarea:"textarea[cols,rows,name]",select:"select[name,size,multiple]; option[value,selected]",button:"input[type,name,value]",form:"form[action,name,id,enctype,target,method]",hiddenfield:"input[type,name,value]",imagebutton:"input[type,alt,src]{width,height,border,border-width,border-style,margin,float}"},k={checkbox:"input",radio:"input",textfield:"input",textarea:"textarea",select:"select",button:"input",form:"form",
hiddenfield:"input",imagebutton:"input"},e=function(d,c,e){var h={allowedContent:j[c],requiredContent:k[c]};"form"==c&&(h.context="form");a.addCommand(c,new CKEDITOR.dialogCommand(c,h));a.ui.addButton&&a.ui.addButton(d,{label:b.common[d.charAt(0).toLowerCase()+d.slice(1)],command:c,toolbar:"forms,"+(g+=10)});CKEDITOR.dialog.add(c,e)},f=this.path+"dialogs/";!a.blockless&&e("Form","form",f+"form.js");e("Checkbox","checkbox",f+"checkbox.js");e("Radio","radio",f+"radio.js");e("TextField","textfield",
f+"textfield.js");e("Textarea","textarea",f+"textarea.js");e("Select","select",f+"select.js");e("Button","button",f+"button.js");var i=a.plugins.image;i&&!a.plugins.image2&&e("ImageButton","imagebutton",CKEDITOR.plugins.getPath("image")+"dialogs/image.js");e("HiddenField","hiddenfield",f+"hiddenfield.js");a.addMenuItems&&(e={checkbox:{label:b.forms.checkboxAndRadio.checkboxTitle,command:"checkbox",group:"checkbox"},radio:{label:b.forms.checkboxAndRadio.radioTitle,command:"radio",group:"radio"},textfield:{label:b.forms.textfield.title,
command:"textfield",group:"textfield"},hiddenfield:{label:b.forms.hidden.title,command:"hiddenfield",group:"hiddenfield"},button:{label:b.forms.button.title,command:"button",group:"button"},select:{label:b.forms.select.title,command:"select",group:"select"},textarea:{label:b.forms.textarea.title,command:"textarea",group:"textarea"}},i&&(e.imagebutton={label:b.image.titleButton,command:"imagebutton",group:"imagebutton"}),!a.blockless&&(e.form={label:b.forms.form.menu,command:"form",group:"form"}),
a.addMenuItems(e));a.contextMenu&&(!a.blockless&&a.contextMenu.addListener(function(d,c,a){if((d=a.contains("form",1))&&!d.isReadOnly())return{form:CKEDITOR.TRISTATE_OFF}}),a.contextMenu.addListener(function(d){if(d&&!d.isReadOnly()){var c=d.getName();if(c=="select")return{select:CKEDITOR.TRISTATE_OFF};if(c=="textarea")return{textarea:CKEDITOR.TRISTATE_OFF};if(c=="input"){var a=d.getAttribute("type")||"text";switch(a){case "button":case "submit":case "reset":return{button:CKEDITOR.TRISTATE_OFF};case "checkbox":return{checkbox:CKEDITOR.TRISTATE_OFF};
case "radio":return{radio:CKEDITOR.TRISTATE_OFF};case "image":return i?{imagebutton:CKEDITOR.TRISTATE_OFF}:null}if(h[a])return{textfield:CKEDITOR.TRISTATE_OFF}}if(c=="img"&&d.data("cke-real-element-type")=="hiddenfield")return{hiddenfield:CKEDITOR.TRISTATE_OFF}}}));a.on("doubleclick",function(d){var c=d.data.element;if(!a.blockless&&c.is("form"))d.data.dialog="form";else if(c.is("select"))d.data.dialog="select";else if(c.is("textarea"))d.data.dialog="textarea";else if(c.is("img")&&c.data("cke-real-element-type")==
"hiddenfield")d.data.dialog="hiddenfield";else if(c.is("input")){c=c.getAttribute("type")||"text";switch(c){case "button":case "submit":case "reset":d.data.dialog="button";break;case "checkbox":d.data.dialog="checkbox";break;case "radio":d.data.dialog="radio";break;case "image":d.data.dialog="imagebutton"}if(h[c])d.data.dialog="textfield"}})},afterInit:function(a){var b=a.dataProcessor,g=b&&b.htmlFilter,b=b&&b.dataFilter;CKEDITOR.env.ie&&g&&g.addRules({elements:{input:function(a){var a=a.attributes,
b=a.type;b||(a.type="text");("checkbox"==b||"radio"==b)&&"on"==a.value&&delete a.value}}},{applyToAll:!0});b&&b.addRules({elements:{input:function(b){if("hidden"==b.attributes.type)return a.createFakeParserElement(b,"cke_hidden","hiddenfield")}}},{applyToAll:!0})}});CKEDITOR.plugins.add("format",{requires:"richcombo",init:function(a){if(!a.blockless){for(var f=a.config,c=a.lang.format,j=f.format_tags.split(";"),d={},k=0,l=[],g=0;g<j.length;g++){var h=j[g],i=new CKEDITOR.style(f["format_"+h]);if(!a.filter.customConfig||a.filter.check(i))k++,d[h]=i,d[h]._.enterMode=a.config.enterMode,l.push(i)}0!==k&&a.ui.addRichCombo("Format",{label:c.label,title:c.panelTitle,toolbar:"styles,20",allowedContent:l,panel:{css:[CKEDITOR.skin.getPath("editor")].concat(f.contentsCss),
multiSelect:!1,attributes:{"aria-label":c.panelTitle}},init:function(){this.startGroup(c.panelTitle);for(var a in d){var e=c["tag_"+a];this.add(a,d[a].buildPreview(e),e)}},onClick:function(b){a.focus();a.fire("saveSnapshot");var b=d[b],e=a.elementPath();a[b.checkActive(e,a)?"removeStyle":"applyStyle"](b);setTimeout(function(){a.fire("saveSnapshot")},0)},onRender:function(){a.on("selectionChange",function(b){var e=this.getValue(),b=b.data.path;this.refresh();for(var c in d)if(d[c].checkActive(b,a)){c!=
e&&this.setValue(c,a.lang.format["tag_"+c]);return}this.setValue("")},this)},onOpen:function(){this.showAll();for(var b in d)a.activeFilter.check(d[b])||this.hideItem(b)},refresh:function(){var b=a.elementPath();if(b){if(b.isContextFor("p"))for(var c in d)if(a.activeFilter.check(d[c]))return;this.setState(CKEDITOR.TRISTATE_DISABLED)}}})}}});CKEDITOR.config.format_tags="p;h1;h2;h3;h4;h5;h6;pre;address;div";CKEDITOR.config.format_p={element:"p"};CKEDITOR.config.format_div={element:"div"};
CKEDITOR.config.format_pre={element:"pre"};CKEDITOR.config.format_address={element:"address"};CKEDITOR.config.format_h1={element:"h1"};CKEDITOR.config.format_h2={element:"h2"};CKEDITOR.config.format_h3={element:"h3"};CKEDITOR.config.format_h4={element:"h4"};CKEDITOR.config.format_h5={element:"h5"};CKEDITOR.config.format_h6={element:"h6"};(function(){var b={canUndo:!1,exec:function(a){var b=a.document.createElement("hr");a.insertElement(b)},allowedContent:"hr",requiredContent:"hr"};CKEDITOR.plugins.add("horizontalrule",{init:function(a){a.blockless||(a.addCommand("horizontalrule",b),a.ui.addButton&&a.ui.addButton("HorizontalRule",{label:a.lang.horizontalrule.toolbar,command:"horizontalrule",toolbar:"insert,40"}))}})})();CKEDITOR.plugins.add("htmlwriter",{init:function(b){var a=new CKEDITOR.htmlWriter;a.forceSimpleAmpersand=b.config.forceSimpleAmpersand;a.indentationChars=b.config.dataIndentationChars||"\t";b.dataProcessor.writer=a}});
CKEDITOR.htmlWriter=CKEDITOR.tools.createClass({base:CKEDITOR.htmlParser.basicWriter,$:function(){this.base();this.indentationChars="\t";this.selfClosingEnd=" />";this.lineBreakChars="\n";this.sortAttributes=1;this._.indent=0;this._.indentation="";this._.inPre=0;this._.rules={};var b=CKEDITOR.dtd,a;for(a in CKEDITOR.tools.extend({},b.$nonBodyContent,b.$block,b.$listItem,b.$tableContent))this.setRules(a,{indent:!b[a]["#"],breakBeforeOpen:1,breakBeforeClose:!b[a]["#"],breakAfterClose:1,needsSpace:a in
b.$block&&!(a in{li:1,dt:1,dd:1})});this.setRules("br",{breakAfterOpen:1});this.setRules("title",{indent:0,breakAfterOpen:0});this.setRules("style",{indent:0,breakBeforeClose:1});this.setRules("pre",{breakAfterOpen:1,indent:0})},proto:{openTag:function(b){var a=this._.rules[b];this._.afterCloser&&(a&&a.needsSpace&&this._.needsSpace)&&this._.output.push("\n");this._.indent?this.indentation():a&&a.breakBeforeOpen&&(this.lineBreak(),this.indentation());this._.output.push("<",b);this._.afterCloser=0},
openTagClose:function(b,a){var c=this._.rules[b];a?(this._.output.push(this.selfClosingEnd),c&&c.breakAfterClose&&(this._.needsSpace=c.needsSpace)):(this._.output.push(">"),c&&c.indent&&(this._.indentation+=this.indentationChars));c&&c.breakAfterOpen&&this.lineBreak();"pre"==b&&(this._.inPre=1)},attribute:function(b,a){"string"==typeof a&&(this.forceSimpleAmpersand&&(a=a.replace(/&amp;/g,"&")),a=CKEDITOR.tools.htmlEncodeAttr(a));this._.output.push(" ",b,'="',a,'"')},closeTag:function(b){var a=this._.rules[b];
a&&a.indent&&(this._.indentation=this._.indentation.substr(this.indentationChars.length));this._.indent?this.indentation():a&&a.breakBeforeClose&&(this.lineBreak(),this.indentation());this._.output.push("</",b,">");"pre"==b&&(this._.inPre=0);a&&a.breakAfterClose&&(this.lineBreak(),this._.needsSpace=a.needsSpace);this._.afterCloser=1},text:function(b){this._.indent&&(this.indentation(),!this._.inPre&&(b=CKEDITOR.tools.ltrim(b)));this._.output.push(b)},comment:function(b){this._.indent&&this.indentation();
this._.output.push("<\!--",b,"--\>")},lineBreak:function(){!this._.inPre&&0<this._.output.length&&this._.output.push(this.lineBreakChars);this._.indent=1},indentation:function(){!this._.inPre&&this._.indentation&&this._.output.push(this._.indentation);this._.indent=0},reset:function(){this._.output=[];this._.indent=0;this._.indentation="";this._.afterCloser=0;this._.inPre=0},setRules:function(b,a){var c=this._.rules[b];c?CKEDITOR.tools.extend(c,a,!0):this._.rules[b]=a}}});(function(){CKEDITOR.plugins.add("iframe",{requires:"dialog,fakeobjects",onLoad:function(){CKEDITOR.addCss("img.cke_iframe{background-image: url("+CKEDITOR.getUrl(this.path+"images/placeholder.png")+");background-position: center center;background-repeat: no-repeat;border: 1px solid #a9a9a9;width: 80px;height: 80px;}")},init:function(a){var b=a.lang.iframe,c="iframe[align,longdesc,frameborder,height,name,scrolling,src,title,width]";a.plugins.dialogadvtab&&(c+=";iframe"+a.plugins.dialogadvtab.allowedContent({id:1,
classes:1,styles:1}));CKEDITOR.dialog.add("iframe",this.path+"dialogs/iframe.js");a.addCommand("iframe",new CKEDITOR.dialogCommand("iframe",{allowedContent:c,requiredContent:"iframe"}));a.ui.addButton&&a.ui.addButton("Iframe",{label:b.toolbar,command:"iframe",toolbar:"insert,80"});a.on("doubleclick",function(a){var b=a.data.element;b.is("img")&&"iframe"==b.data("cke-real-element-type")&&(a.data.dialog="iframe")});a.addMenuItems&&a.addMenuItems({iframe:{label:b.title,command:"iframe",group:"image"}});
a.contextMenu&&a.contextMenu.addListener(function(a){if(a&&a.is("img")&&"iframe"==a.data("cke-real-element-type"))return{iframe:CKEDITOR.TRISTATE_OFF}})},afterInit:function(a){var b=a.dataProcessor;(b=b&&b.dataFilter)&&b.addRules({elements:{iframe:function(b){return a.createFakeParserElement(b,"cke_iframe","iframe",!0)}}})}})})();(function(){function k(a){var e=this.editor,b=a.document,c=b.body,d=b.getElementById("cke_actscrpt");d&&d.parentNode.removeChild(d);(d=b.getElementById("cke_shimscrpt"))&&d.parentNode.removeChild(d);(d=b.getElementById("cke_basetagscrpt"))&&d.parentNode.removeChild(d);c.contentEditable=!0;CKEDITOR.env.ie&&(c.hideFocus=!0,c.disabled=!0,c.removeAttribute("disabled"));delete this._.isLoadingData;this.$=c;b=new CKEDITOR.dom.document(b);this.setup();this.fixInitialSelection();CKEDITOR.env.ie&&(b.getDocumentElement().addClass(b.$.compatMode),
e.config.enterMode!=CKEDITOR.ENTER_P&&this.attachListener(b,"selectionchange",function(){var a=b.getBody(),c=e.getSelection(),d=c&&c.getRanges()[0];d&&(a.getHtml().match(/^<p>(?:&nbsp;|<br>)<\/p>$/i)&&d.startContainer.equals(a))&&setTimeout(function(){d=e.getSelection().getRanges()[0];if(!d.startContainer.equals("body")){a.getFirst().remove(1);d.moveToElementEditEnd(a);d.select()}},0)}));if(CKEDITOR.env.webkit||CKEDITOR.env.ie&&10<CKEDITOR.env.version)b.getDocumentElement().on("mousedown",function(a){a.data.getTarget().is("html")&&
setTimeout(function(){e.editable().focus()})});l(e);try{e.document.$.execCommand("2D-position",!1,!0)}catch(g){}(CKEDITOR.env.gecko||CKEDITOR.env.ie&&"CSS1Compat"==e.document.$.compatMode)&&this.attachListener(this,"keydown",function(a){var b=a.data.getKeystroke();if(b==33||b==34)if(CKEDITOR.env.ie)setTimeout(function(){e.getSelection().scrollIntoView()},0);else if(e.window.$.innerHeight>this.$.offsetHeight){var c=e.createRange();c[b==33?"moveToElementEditStart":"moveToElementEditEnd"](this);c.select();
a.data.preventDefault()}});CKEDITOR.env.ie&&this.attachListener(b,"blur",function(){try{b.$.selection.empty()}catch(a){}});CKEDITOR.env.iOS&&this.attachListener(b,"touchend",function(){a.focus()});c=e.document.getElementsByTag("title").getItem(0);c.data("cke-title",c.getText());CKEDITOR.env.ie&&(e.document.$.title=this._.docTitle);CKEDITOR.tools.setTimeout(function(){if(this.status=="unloaded")this.status="ready";e.fire("contentDom");if(this._.isPendingFocus){e.focus();this._.isPendingFocus=false}setTimeout(function(){e.fire("dataReady")},
0);CKEDITOR.env.ie&&setTimeout(function(){if(e.document){var a=e.document.$.body;a.runtimeStyle.marginBottom="0px";a.runtimeStyle.marginBottom=""}},1E3)},0,this)}function l(a){function e(){var c;a.editable().attachListener(a,"selectionChange",function(){var d=a.getSelection().getSelectedElement();d&&(c&&(c.detachEvent("onresizestart",b),c=null),d.$.attachEvent("onresizestart",b),c=d.$)})}function b(a){a.returnValue=!1}if(CKEDITOR.env.gecko)try{var c=a.document.$;c.execCommand("enableObjectResizing",
!1,!a.config.disableObjectResizing);c.execCommand("enableInlineTableEditing",!1,!a.config.disableNativeTableHandles)}catch(d){}else CKEDITOR.env.ie&&(11>CKEDITOR.env.version&&a.config.disableObjectResizing)&&e(a)}function m(){var a=[];if(8<=CKEDITOR.document.$.documentMode){a.push("html.CSS1Compat [contenteditable=false]{min-height:0 !important}");var e=[],b;for(b in CKEDITOR.dtd.$removeEmpty)e.push("html.CSS1Compat "+b+"[contenteditable=false]");a.push(e.join(",")+"{display:inline-block}")}else CKEDITOR.env.gecko&&
(a.push("html{height:100% !important}"),a.push("img:-moz-broken{-moz-force-broken-image-icon:1;min-width:24px;min-height:24px}"));a.push("html{cursor:text;*cursor:auto}");a.push("img,input,textarea{cursor:default}");return a.join("\n")}CKEDITOR.plugins.add("wysiwygarea",{init:function(a){a.config.fullPage&&a.addFeature({allowedContent:"html head title; style [media,type]; body (*)[id]; meta link [*]",requiredContent:"body"});a.addMode("wysiwyg",function(e){function b(b){b&&b.removeListener();a.editable(new j(a,
d.$.contentWindow.document.body));a.setData(a.getData(1),e)}var c="document.open();"+(CKEDITOR.env.ie?"("+CKEDITOR.tools.fixDomain+")();":"")+"document.close();",c=CKEDITOR.env.air?"javascript:void(0)":CKEDITOR.env.ie?"javascript:void(function(){"+encodeURIComponent(c)+"}())":"",d=CKEDITOR.dom.element.createFromHtml('<iframe src="'+c+'" frameBorder="0"></iframe>');d.setStyles({width:"100%",height:"100%"});d.addClass("cke_wysiwyg_frame cke_reset");var g=a.ui.space("contents");g.append(d);if(c=CKEDITOR.env.ie||
CKEDITOR.env.gecko)d.on("load",b);var f=a.title,h=a.fire("ariaEditorHelpLabel",{}).label;f&&(CKEDITOR.env.ie&&h&&(f+=", "+h),d.setAttribute("title",f));if(h){var f=CKEDITOR.tools.getNextId(),i=CKEDITOR.dom.element.createFromHtml('<span id="'+f+'" class="cke_voice_label">'+h+"</span>");g.append(i,1);d.setAttribute("aria-describedby",f)}a.on("beforeModeUnload",function(a){a.removeListener();i&&i.remove()});d.setAttributes({tabIndex:a.tabIndex,allowTransparency:"true"});!c&&b();CKEDITOR.env.webkit&&
(c=function(){g.setStyle("width","100%");d.hide();d.setSize("width",g.getSize("width"));g.removeStyle("width");d.show()},d.setCustomData("onResize",c),CKEDITOR.document.getWindow().on("resize",c));a.fire("ariaWidget",d)})}});CKEDITOR.editor.prototype.addContentsCss=function(a){var e=this.config,b=e.contentsCss;CKEDITOR.tools.isArray(b)||(e.contentsCss=b?[b]:[]);e.contentsCss.push(a)};var j=CKEDITOR.tools.createClass({$:function(){this.base.apply(this,arguments);this._.frameLoadedHandler=CKEDITOR.tools.addFunction(function(a){CKEDITOR.tools.setTimeout(k,
0,this,a)},this);this._.docTitle=this.getWindow().getFrame().getAttribute("title")},base:CKEDITOR.editable,proto:{setData:function(a,e){var b=this.editor;if(e)this.setHtml(a),this.fixInitialSelection(),b.fire("dataReady");else{this._.isLoadingData=!0;b._.dataStore={id:1};var c=b.config,d=c.fullPage,g=c.docType,f=CKEDITOR.tools.buildStyleHtml(m()).replace(/<style>/,'<style data-cke-temp="1">');d||(f+=CKEDITOR.tools.buildStyleHtml(b.config.contentsCss));var h=c.baseHref?'<base href="'+c.baseHref+'" data-cke-temp="1" />':
"";d&&(a=a.replace(/<!DOCTYPE[^>]*>/i,function(a){b.docType=g=a;return""}).replace(/<\?xml\s[^\?]*\?>/i,function(a){b.xmlDeclaration=a;return""}));a=b.dataProcessor.toHtml(a);d?(/<body[\s|>]/.test(a)||(a="<body>"+a),/<html[\s|>]/.test(a)||(a="<html>"+a+"</html>"),/<head[\s|>]/.test(a)?/<title[\s|>]/.test(a)||(a=a.replace(/<head[^>]*>/,"$&<title></title>")):a=a.replace(/<html[^>]*>/,"$&<head><title></title></head>"),h&&(a=a.replace(/<head[^>]*?>/,"$&"+h)),a=a.replace(/<\/head\s*>/,f+"$&"),a=g+a):a=
c.docType+'<html dir="'+c.contentsLangDirection+'" lang="'+(c.contentsLanguage||b.langCode)+'"><head><title>'+this._.docTitle+"</title>"+h+f+"</head><body"+(c.bodyId?' id="'+c.bodyId+'"':"")+(c.bodyClass?' class="'+c.bodyClass+'"':"")+">"+a+"</body></html>";CKEDITOR.env.gecko&&(a=a.replace(/<body/,'<body contenteditable="true" '),2E4>CKEDITOR.env.version&&(a=a.replace(/<body[^>]*>/,"$&<\!-- cke-content-start --\>")));c='<script id="cke_actscrpt" type="text/javascript"'+(CKEDITOR.env.ie?' defer="defer" ':
"")+">var wasLoaded=0;function onload(){if(!wasLoaded)window.parent.CKEDITOR.tools.callFunction("+this._.frameLoadedHandler+",window);wasLoaded=1;}"+(CKEDITOR.env.ie?"onload();":'document.addEventListener("DOMContentLoaded", onload, false );')+"<\/script>";CKEDITOR.env.ie&&9>CKEDITOR.env.version&&(c+='<script id="cke_shimscrpt">window.parent.CKEDITOR.tools.enableHtml5Elements(document)<\/script>');h&&(CKEDITOR.env.ie&&10>CKEDITOR.env.version)&&(c+='<script id="cke_basetagscrpt">var baseTag = document.querySelector( "base" );baseTag.href = baseTag.href;<\/script>');
a=a.replace(/(?=\s*<\/(:?head)>)/,c);this.clearCustomData();this.clearListeners();b.fire("contentDomUnload");var i=this.getDocument();try{i.write(a)}catch(j){setTimeout(function(){i.write(a)},0)}}},getData:function(a){if(a)return this.getHtml();var a=this.editor,e=a.config,b=e.fullPage,c=b&&a.docType,d=b&&a.xmlDeclaration,g=this.getDocument(),b=b?g.getDocumentElement().getOuterHtml():g.getBody().getHtml();CKEDITOR.env.gecko&&e.enterMode!=CKEDITOR.ENTER_BR&&(b=b.replace(/<br>(?=\s*(:?$|<\/body>))/,
""));b=a.dataProcessor.toDataFormat(b);d&&(b=d+"\n"+b);c&&(b=c+"\n"+b);return b},focus:function(){this._.isLoadingData?this._.isPendingFocus=!0:j.baseProto.focus.call(this)},detach:function(){var a=this.editor,e=a.document,a=a.window.getFrame();j.baseProto.detach.call(this);this.clearCustomData();e.getDocumentElement().clearCustomData();a.clearCustomData();CKEDITOR.tools.removeFunction(this._.frameLoadedHandler);(e=a.removeCustomData("onResize"))&&e.removeListener();a.remove()}}})})();
CKEDITOR.config.disableObjectResizing=!1;CKEDITOR.config.disableNativeTableHandles=!0;CKEDITOR.config.disableNativeSpellChecker=!0;CKEDITOR.config.contentsCss=CKEDITOR.getUrl("contents.css");(function(){function e(b,a){a||(a=b.getSelection().getSelectedElement());if(a&&a.is("img")&&!a.data("cke-realelement")&&!a.isReadOnly())return a}function f(b){var a=b.getStyle("float");if("inherit"==a||"none"==a)a=0;a||(a=b.getAttribute("align"));return a}CKEDITOR.plugins.add("image",{requires:"dialog",init:function(b){if(!b.plugins.image2){CKEDITOR.dialog.add("image",this.path+"dialogs/image.js");var a="img[alt,!src]{border-style,border-width,float,height,margin,margin-bottom,margin-left,margin-right,margin-top,width}";
CKEDITOR.dialog.isTabEnabled(b,"image","advanced")&&(a="img[alt,dir,id,lang,longdesc,!src,title]{*}(*)");b.addCommand("image",new CKEDITOR.dialogCommand("image",{allowedContent:a,requiredContent:"img[alt,src]",contentTransformations:[["img{width}: sizeToStyle","img[width]: sizeToAttribute"],["img{float}: alignmentToStyle","img[align]: alignmentToAttribute"]]}));b.ui.addButton&&b.ui.addButton("Image",{label:b.lang.common.image,command:"image",toolbar:"insert,10"});b.on("doubleclick",function(b){var a=
b.data.element;a.is("img")&&(!a.data("cke-realelement")&&!a.isReadOnly())&&(b.data.dialog="image")});b.addMenuItems&&b.addMenuItems({image:{label:b.lang.image.menu,command:"image",group:"image"}});b.contextMenu&&b.contextMenu.addListener(function(a){if(e(b,a))return{image:CKEDITOR.TRISTATE_OFF}})}},afterInit:function(b){function a(a){var d=b.getCommand("justify"+a);if(d){if("left"==a||"right"==a)d.on("exec",function(d){var c=e(b),g;c&&(g=f(c),g==a?(c.removeStyle("float"),a==f(c)&&c.removeAttribute("align")):
c.setStyle("float",a),d.cancel())});d.on("refresh",function(d){var c=e(b);c&&(c=f(c),this.setState(c==a?CKEDITOR.TRISTATE_ON:"right"==a||"left"==a?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED),d.cancel())})}}b.plugins.image2||(a("left"),a("right"),a("center"),a("block"))}})})();CKEDITOR.config.image_removeLinkByEmptyURL=!0;(function(){function k(a,b){var e,f;b.on("refresh",function(a){var b=[i],c;for(c in a.data.states)b.push(a.data.states[c]);this.setState(CKEDITOR.tools.search(b,m)?m:i)},b,null,100);b.on("exec",function(b){e=a.getSelection();f=e.createBookmarks(1);b.data||(b.data={});b.data.done=!1},b,null,0);b.on("exec",function(){a.forceNextSelectionCheck();e.selectBookmarks(f)},b,null,100)}var i=CKEDITOR.TRISTATE_DISABLED,m=CKEDITOR.TRISTATE_OFF;CKEDITOR.plugins.add("indent",{init:function(a){var b=CKEDITOR.plugins.indent.genericDefinition;
k(a,a.addCommand("indent",new b(!0)));k(a,a.addCommand("outdent",new b));a.ui.addButton&&(a.ui.addButton("Indent",{label:a.lang.indent.indent,command:"indent",directional:!0,toolbar:"indent,20"}),a.ui.addButton("Outdent",{label:a.lang.indent.outdent,command:"outdent",directional:!0,toolbar:"indent,10"}));a.on("dirChanged",function(b){var f=a.createRange(),j=b.data.node;f.setStartBefore(j);f.setEndAfter(j);for(var l=new CKEDITOR.dom.walker(f),c;c=l.next();)if(c.type==CKEDITOR.NODE_ELEMENT)if(!c.equals(j)&&
c.getDirection()){f.setStartAfter(c);l=new CKEDITOR.dom.walker(f)}else{var d=a.config.indentClasses;if(d)for(var g=b.data.dir=="ltr"?["_rtl",""]:["","_rtl"],h=0;h<d.length;h++)if(c.hasClass(d[h]+g[0])){c.removeClass(d[h]+g[0]);c.addClass(d[h]+g[1])}d=c.getStyle("margin-right");g=c.getStyle("margin-left");d?c.setStyle("margin-left",d):c.removeStyle("margin-left");g?c.setStyle("margin-right",g):c.removeStyle("margin-right")}})}});CKEDITOR.plugins.indent={genericDefinition:function(a){this.isIndent=
!!a;this.startDisabled=!this.isIndent},specificDefinition:function(a,b,e){this.name=b;this.editor=a;this.jobs={};this.enterBr=a.config.enterMode==CKEDITOR.ENTER_BR;this.isIndent=!!e;this.relatedGlobal=e?"indent":"outdent";this.indentKey=e?9:CKEDITOR.SHIFT+9;this.database={}},registerCommands:function(a,b){a.on("pluginsLoaded",function(){for(var a in b)(function(a,b){var e=a.getCommand(b.relatedGlobal),c;for(c in b.jobs)e.on("exec",function(d){d.data.done||(a.fire("lockSnapshot"),b.execJob(a,c)&&(d.data.done=
!0),a.fire("unlockSnapshot"),CKEDITOR.dom.element.clearAllMarkers(b.database))},this,null,c),e.on("refresh",function(d){d.data.states||(d.data.states={});d.data.states[b.name+"@"+c]=b.refreshJob(a,c,d.data.path)},this,null,c);a.addFeature(b)})(this,b[a])})}};CKEDITOR.plugins.indent.genericDefinition.prototype={context:"p",exec:function(){}};CKEDITOR.plugins.indent.specificDefinition.prototype={execJob:function(a,b){var e=this.jobs[b];if(e.state!=i)return e.exec.call(this,a)},refreshJob:function(a,
b,e){b=this.jobs[b];b.state=a.activeFilter.checkFeature(this)?b.refresh.call(this,a,e):i;return b.state},getContext:function(a){return a.contains(this.context)}}})();(function(){function f(b,d,a){if(!b.getCustomData("indent_processed")){var e=this.editor,j=this.isIndent;if(d){e=b.$.className.match(this.classNameRegex);a=0;e&&(e=e[1],a=CKEDITOR.tools.indexOf(d,e)+1);if(0>(a+=j?1:-1))return;a=Math.min(a,d.length);a=Math.max(a,0);b.$.className=CKEDITOR.tools.ltrim(b.$.className.replace(this.classNameRegex,""));0<a&&b.addClass(d[a-1])}else{var d=k(b,a),a=parseInt(b.getStyle(d),10),g=e.config.indentOffset||40;isNaN(a)&&(a=0);a+=(j?1:-1)*g;if(0>a)return;a=Math.max(a,
0);a=Math.ceil(a/g)*g;b.setStyle(d,a?a+(e.config.indentUnit||"px"):"");""===b.getAttribute("style")&&b.removeAttribute("style")}CKEDITOR.dom.element.setMarker(this.database,b,"indent_processed",1)}}function k(b,d){return"ltr"==(d||b.getComputedStyle("direction"))?"margin-left":"margin-right"}var h=CKEDITOR.dtd.$listItem,m=CKEDITOR.dtd.$list,i=CKEDITOR.TRISTATE_DISABLED,l=CKEDITOR.TRISTATE_OFF;CKEDITOR.plugins.add("indentblock",{requires:"indent",init:function(b){function d(){a.specificDefinition.apply(this,
arguments);this.allowedContent={"div h1 h2 h3 h4 h5 h6 ol p pre ul":{propertiesOnly:!0,styles:!e?"margin-left,margin-right":null,classes:e||null}};this.enterBr&&(this.allowedContent.div=!0);this.requiredContent=(this.enterBr?"div":"p")+(e?"("+e.join(",")+")":"{margin-left}");this.jobs={20:{refresh:function(a,b){var c=b.block||b.blockLimit;c.is(h)||(c=c.getAscendant(h)||c);c.is(h)&&(c=c.getParent());if(!this.enterBr&&!this.getContext(b))return i;if(e){var d;d=e;var c=c.$.className.match(this.classNameRegex),
f=this.isIndent;d=c?f?c[1]!=d.slice(-1):true:f;return d?l:i}return this.isIndent?l:c?CKEDITOR[(parseInt(c.getStyle(k(c)),10)||0)<=0?"TRISTATE_DISABLED":"TRISTATE_OFF"]:i},exec:function(a){var b=a.getSelection(),b=b&&b.getRanges()[0],c;if(c=a.elementPath().contains(m))f.call(this,c,e);else{b=b.createIterator();a=a.config.enterMode;b.enforceRealBlocks=true;for(b.enlargeBr=a!=CKEDITOR.ENTER_BR;c=b.getNextParagraph(a==CKEDITOR.ENTER_P?"p":"div");)c.isReadOnly()||f.call(this,c,e)}return true}}}}var a=
CKEDITOR.plugins.indent,e=b.config.indentClasses;a.registerCommands(b,{indentblock:new d(b,"indentblock",!0),outdentblock:new d(b,"outdentblock")});CKEDITOR.tools.extend(d.prototype,a.specificDefinition.prototype,{context:{div:1,dl:1,h1:1,h2:1,h3:1,h4:1,h5:1,h6:1,ul:1,ol:1,p:1,pre:1,table:1},classNameRegex:e?RegExp("(?:^|\\s+)("+e.join("|")+")(?=$|\\s)"):null})}})})();(function(){function s(c){function f(b){for(var e=d.startContainer,a=d.endContainer;e&&!e.getParent().equals(b);)e=e.getParent();for(;a&&!a.getParent().equals(b);)a=a.getParent();if(!e||!a)return!1;for(var g=e,e=[],i=!1;!i;)g.equals(a)&&(i=!0),e.push(g),g=g.getNext();if(1>e.length)return!1;g=b.getParents(!0);for(a=0;a<g.length;a++)if(g[a].getName&&m[g[a].getName()]){b=g[a];break}for(var g=j.isIndent?1:-1,a=e[0],e=e[e.length-1],i=CKEDITOR.plugins.list.listToArray(b,n),l=i[e.getCustomData("listarray_index")].indent,
a=a.getCustomData("listarray_index");a<=e.getCustomData("listarray_index");a++)if(i[a].indent+=g,0<g){var h=i[a].parent;i[a].parent=new CKEDITOR.dom.element(h.getName(),h.getDocument())}for(a=e.getCustomData("listarray_index")+1;a<i.length&&i[a].indent>l;a++)i[a].indent+=g;e=CKEDITOR.plugins.list.arrayToList(i,n,null,c.config.enterMode,b.getDirection());if(!j.isIndent){var f;if((f=b.getParent())&&f.is("li"))for(var g=e.listNode.getChildren(),o=[],k,a=g.count()-1;0<=a;a--)(k=g.getItem(a))&&(k.is&&
k.is("li"))&&o.push(k)}e&&e.listNode.replace(b);if(o&&o.length)for(a=0;a<o.length;a++){for(k=b=o[a];(k=k.getNext())&&k.is&&k.getName()in m;)CKEDITOR.env.needsNbspFiller&&!b.getFirst(t)&&b.append(d.document.createText(" ")),b.append(k);b.insertAfter(f)}e&&c.fire("contentDomInvalidated");return!0}for(var j=this,n=this.database,m=this.context,l=c.getSelection(),l=(l&&l.getRanges()).createIterator(),d;d=l.getNextRange();){for(var b=d.getCommonAncestor();b&&!(b.type==CKEDITOR.NODE_ELEMENT&&m[b.getName()]);)b=
b.getParent();b||(b=d.startPath().contains(m))&&d.setEndAt(b,CKEDITOR.POSITION_BEFORE_END);if(!b){var h=d.getEnclosedNode();h&&(h.type==CKEDITOR.NODE_ELEMENT&&h.getName()in m)&&(d.setStartAt(h,CKEDITOR.POSITION_AFTER_START),d.setEndAt(h,CKEDITOR.POSITION_BEFORE_END),b=h)}b&&(d.startContainer.type==CKEDITOR.NODE_ELEMENT&&d.startContainer.getName()in m)&&(h=new CKEDITOR.dom.walker(d),h.evaluator=p,d.startContainer=h.next());b&&(d.endContainer.type==CKEDITOR.NODE_ELEMENT&&d.endContainer.getName()in m)&&
(h=new CKEDITOR.dom.walker(d),h.evaluator=p,d.endContainer=h.previous());if(b)return f(b)}return 0}function p(c){return c.type==CKEDITOR.NODE_ELEMENT&&c.is("li")}function t(c){return u(c)&&v(c)}var u=CKEDITOR.dom.walker.whitespaces(!0),v=CKEDITOR.dom.walker.bookmark(!1,!0),q=CKEDITOR.TRISTATE_DISABLED,r=CKEDITOR.TRISTATE_OFF;CKEDITOR.plugins.add("indentlist",{requires:"indent",init:function(c){function f(c){j.specificDefinition.apply(this,arguments);this.requiredContent=["ul","ol"];c.on("key",function(f){if("wysiwyg"==
c.mode&&f.data.keyCode==this.indentKey){var l=this.getContext(c.elementPath());if(l&&(!this.isIndent||!CKEDITOR.plugins.indentList.firstItemInPath(this.context,c.elementPath(),l)))c.execCommand(this.relatedGlobal),f.cancel()}},this);this.jobs[this.isIndent?10:30]={refresh:this.isIndent?function(c,f){var d=this.getContext(f),b=CKEDITOR.plugins.indentList.firstItemInPath(this.context,f,d);return!d||!this.isIndent||b?q:r}:function(c,f){return!this.getContext(f)||this.isIndent?q:r},exec:CKEDITOR.tools.bind(s,
this)}}var j=CKEDITOR.plugins.indent;j.registerCommands(c,{indentlist:new f(c,"indentlist",!0),outdentlist:new f(c,"outdentlist")});CKEDITOR.tools.extend(f.prototype,j.specificDefinition.prototype,{context:{ol:1,ul:1}})}});CKEDITOR.plugins.indentList={};CKEDITOR.plugins.indentList.firstItemInPath=function(c,f,j){var n=f.contains(p);j||(j=f.contains(c));return j&&n&&n.equals(j.getFirst(p))}})();CKEDITOR.plugins.add("smiley",{requires:"dialog",init:function(a){a.config.smiley_path=a.config.smiley_path||this.path+"images/";a.addCommand("smiley",new CKEDITOR.dialogCommand("smiley",{allowedContent:"img[alt,height,!src,title,width]",requiredContent:"img"}));a.ui.addButton&&a.ui.addButton("Smiley",{label:a.lang.smiley.toolbar,command:"smiley",toolbar:"insert,50"});CKEDITOR.dialog.add("smiley",this.path+"dialogs/smiley.js")}});CKEDITOR.config.smiley_images="regular_smile.png sad_smile.png wink_smile.png teeth_smile.png confused_smile.png tongue_smile.png embarrassed_smile.png omg_smile.png whatchutalkingabout_smile.png angry_smile.png angel_smile.png shades_smile.png devil_smile.png cry_smile.png lightbulb.png thumbs_down.png thumbs_up.png heart.png broken_heart.png kiss.png envelope.png".split(" ");
CKEDITOR.config.smiley_descriptions="smiley;sad;wink;laugh;frown;cheeky;blush;surprise;indecision;angry;angel;cool;devil;crying;enlightened;no;yes;heart;broken heart;kiss;mail".split(";");(function(){function l(a,c){var c=void 0===c||c,b;if(c)b=a.getComputedStyle("text-align");else{for(;!a.hasAttribute||!a.hasAttribute("align")&&!a.getStyle("text-align");){b=a.getParent();if(!b)break;a=b}b=a.getStyle("text-align")||a.getAttribute("align")||""}b&&(b=b.replace(/(?:-(?:moz|webkit)-)?(?:start|auto)/i,""));!b&&c&&(b="rtl"==a.getComputedStyle("direction")?"right":"left");return b}function g(a,c,b){this.editor=a;this.name=c;this.value=b;this.context="p";var c=a.config.justifyClasses,h=a.config.enterMode==
CKEDITOR.ENTER_P?"p":"div";if(c){switch(b){case "left":this.cssClassName=c[0];break;case "center":this.cssClassName=c[1];break;case "right":this.cssClassName=c[2];break;case "justify":this.cssClassName=c[3]}this.cssClassRegex=RegExp("(?:^|\\s+)(?:"+c.join("|")+")(?=$|\\s)");this.requiredContent=h+"("+this.cssClassName+")"}else this.requiredContent=h+"{text-align}";this.allowedContent={"caption div h1 h2 h3 h4 h5 h6 p pre td th li":{propertiesOnly:!0,styles:this.cssClassName?null:"text-align",classes:this.cssClassName||
null}};a.config.enterMode==CKEDITOR.ENTER_BR&&(this.allowedContent.div=!0)}function j(a){var c=a.editor,b=c.createRange();b.setStartBefore(a.data.node);b.setEndAfter(a.data.node);for(var h=new CKEDITOR.dom.walker(b),d;d=h.next();)if(d.type==CKEDITOR.NODE_ELEMENT)if(!d.equals(a.data.node)&&d.getDirection())b.setStartAfter(d),h=new CKEDITOR.dom.walker(b);else{var e=c.config.justifyClasses;e&&(d.hasClass(e[0])?(d.removeClass(e[0]),d.addClass(e[2])):d.hasClass(e[2])&&(d.removeClass(e[2]),d.addClass(e[0])));
e=d.getStyle("text-align");"left"==e?d.setStyle("text-align","right"):"right"==e&&d.setStyle("text-align","left")}}g.prototype={exec:function(a){var c=a.getSelection(),b=a.config.enterMode;if(c){for(var h=c.createBookmarks(),d=c.getRanges(),e=this.cssClassName,g,f,i=a.config.useComputedState,i=void 0===i||i,k=d.length-1;0<=k;k--){g=d[k].createIterator();for(g.enlargeBr=b!=CKEDITOR.ENTER_BR;f=g.getNextParagraph(b==CKEDITOR.ENTER_P?"p":"div");)if(!f.isReadOnly()){f.removeAttribute("align");f.removeStyle("text-align");
var j=e&&(f.$.className=CKEDITOR.tools.ltrim(f.$.className.replace(this.cssClassRegex,""))),m=this.state==CKEDITOR.TRISTATE_OFF&&(!i||l(f,!0)!=this.value);e?m?f.addClass(e):j||f.removeAttribute("class"):m&&f.setStyle("text-align",this.value)}}a.focus();a.forceNextSelectionCheck();c.selectBookmarks(h)}},refresh:function(a,c){var b=c.block||c.blockLimit;this.setState("body"!=b.getName()&&l(b,this.editor.config.useComputedState)==this.value?CKEDITOR.TRISTATE_ON:CKEDITOR.TRISTATE_OFF)}};CKEDITOR.plugins.add("justify",
{init:function(a){if(!a.blockless){var c=new g(a,"justifyleft","left"),b=new g(a,"justifycenter","center"),h=new g(a,"justifyright","right"),d=new g(a,"justifyblock","justify");a.addCommand("justifyleft",c);a.addCommand("justifycenter",b);a.addCommand("justifyright",h);a.addCommand("justifyblock",d);a.ui.addButton&&(a.ui.addButton("JustifyLeft",{label:a.lang.justify.left,command:"justifyleft",toolbar:"align,10"}),a.ui.addButton("JustifyCenter",{label:a.lang.justify.center,command:"justifycenter",
toolbar:"align,20"}),a.ui.addButton("JustifyRight",{label:a.lang.justify.right,command:"justifyright",toolbar:"align,30"}),a.ui.addButton("JustifyBlock",{label:a.lang.justify.block,command:"justifyblock",toolbar:"align,40"}));a.on("dirChanged",j)}}})})();CKEDITOR.plugins.add("menubutton",{requires:"button,menu",onLoad:function(){var d=function(c){var a=this._,b=a.menu;a.state!==CKEDITOR.TRISTATE_DISABLED&&(a.on&&b?b.hide():(a.previousState=a.state,b||(b=a.menu=new CKEDITOR.menu(c,{panel:{className:"cke_menu_panel",attributes:{"aria-label":c.lang.common.options}}}),b.onHide=CKEDITOR.tools.bind(function(){var b=this.command?c.getCommand(this.command).modes:this.modes;this.setState(!b||b[c.mode]?a.previousState:CKEDITOR.TRISTATE_DISABLED);a.on=0},this),
this.onMenu&&b.addListener(this.onMenu)),this.setState(CKEDITOR.TRISTATE_ON),a.on=1,setTimeout(function(){b.show(CKEDITOR.document.getById(a.id),4)},0)))};CKEDITOR.ui.menuButton=CKEDITOR.tools.createClass({base:CKEDITOR.ui.button,$:function(c){delete c.panel;this.base(c);this.hasArrow=!0;this.click=d},statics:{handler:{create:function(c){return new CKEDITOR.ui.menuButton(c)}}}})},beforeInit:function(d){d.ui.addHandler(CKEDITOR.UI_MENUBUTTON,CKEDITOR.ui.menuButton.handler)}});
CKEDITOR.UI_MENUBUTTON="menubutton";(function(){CKEDITOR.plugins.add("language",{requires:"menubutton",init:function(a){var b=a.config.language_list||["ar:Arabic:rtl","fr:French","es:Spanish"],c=this,d=a.lang.language,e={},g,h,i,f;a.addCommand("language",{allowedContent:"span[!lang,!dir]",requiredContent:"span[lang,dir]",contextSensitive:!0,exec:function(a,b){var c=e["language_"+b];if(c)a[c.style.checkActive(a.elementPath(),a)?"removeStyle":"applyStyle"](c.style)},refresh:function(a){this.setState(c.getCurrentLangElement(a)?CKEDITOR.TRISTATE_ON:
CKEDITOR.TRISTATE_OFF)}});for(f=0;f<b.length;f++)g=b[f].split(":"),h=g[0],i="language_"+h,e[i]={label:g[1],langId:h,group:"language",order:f,ltr:"rtl"!=(""+g[2]).toLowerCase(),onClick:function(){a.execCommand("language",this.langId)},role:"menuitemcheckbox"},e[i].style=new CKEDITOR.style({element:"span",attributes:{lang:h,dir:e[i].ltr?"ltr":"rtl"}});e.language_remove={label:d.remove,group:"language_remove",state:CKEDITOR.TRISTATE_DISABLED,order:e.length,onClick:function(){var b=c.getCurrentLangElement(a);
b&&a.execCommand("language",b.getAttribute("lang"))}};a.addMenuGroup("language",1);a.addMenuGroup("language_remove");a.addMenuItems(e);a.ui.add("Language",CKEDITOR.UI_MENUBUTTON,{label:d.button,allowedContent:"span[!lang,!dir]",requiredContent:"span[lang,dir]",toolbar:"bidi,30",command:"language",onMenu:function(){var b={},d=c.getCurrentLangElement(a),f;for(f in e)b[f]=CKEDITOR.TRISTATE_OFF;b.language_remove=d?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED;d&&(b["language_"+d.getAttribute("lang")]=
CKEDITOR.TRISTATE_ON);return b}})},getCurrentLangElement:function(a){var b=a.elementPath(),a=b&&b.elements,c;if(b)for(var d=0;d<a.length;d++)b=a[d],!c&&("span"==b.getName()&&b.hasAttribute("dir")&&b.hasAttribute("lang"))&&(c=b);return c}})})();(function(){function m(c){return c.replace(/'/g,"\\$&")}function n(c){for(var b,a=c.length,f=[],e=0;e<a;e++)b=c.charCodeAt(e),f.push(b);return"String.fromCharCode("+f.join(",")+")"}function o(c,b){var a=c.plugins.link,f=a.compiledProtectionFunction.params,e,d;d=[a.compiledProtectionFunction.name,"("];for(var g=0;g<f.length;g++)a=f[g].toLowerCase(),e=b[a],0<g&&d.push(","),d.push("'",e?m(encodeURIComponent(b[a])):"","'");d.push(")");return d.join("")}function l(c){var c=c.config.emailProtection||"",
b;c&&"encode"!=c&&(b={},c.replace(/^([^(]+)\(([^)]+)\)$/,function(a,c,e){b.name=c;b.params=[];e.replace(/[^,\s]+/g,function(a){b.params.push(a)})}));return b}CKEDITOR.plugins.add("link",{requires:"dialog,fakeobjects",onLoad:function(){function c(b){return a.replace(/%1/g,"rtl"==b?"right":"left").replace(/%2/g,"cke_contents_"+b)}var b="background:url("+CKEDITOR.getUrl(this.path+"images"+(CKEDITOR.env.hidpi?"/hidpi":"")+"/anchor.png")+") no-repeat %1 center;border:1px dotted #00f;background-size:16px;",
a=".%2 a.cke_anchor,.%2 a.cke_anchor_empty,.cke_editable.%2 a[name],.cke_editable.%2 a[data-cke-saved-name]{"+b+"padding-%1:18px;cursor:auto;}.%2 img.cke_anchor{"+b+"width:16px;min-height:15px;height:1.15em;vertical-align:text-bottom;}";CKEDITOR.addCss(c("ltr")+c("rtl"))},init:function(c){var b="a[!href]";CKEDITOR.dialog.isTabEnabled(c,"link","advanced")&&(b=b.replace("]",",accesskey,charset,dir,id,lang,name,rel,tabindex,title,type]{*}(*)"));CKEDITOR.dialog.isTabEnabled(c,"link","target")&&(b=b.replace("]",
",target,onclick]"));c.addCommand("link",new CKEDITOR.dialogCommand("link",{allowedContent:b,requiredContent:"a[href]"}));c.addCommand("anchor",new CKEDITOR.dialogCommand("anchor",{allowedContent:"a[!name,id]",requiredContent:"a[name]"}));c.addCommand("unlink",new CKEDITOR.unlinkCommand);c.addCommand("removeAnchor",new CKEDITOR.removeAnchorCommand);c.setKeystroke(CKEDITOR.CTRL+76,"link");c.ui.addButton&&(c.ui.addButton("Link",{label:c.lang.link.toolbar,command:"link",toolbar:"links,10"}),c.ui.addButton("Unlink",
{label:c.lang.link.unlink,command:"unlink",toolbar:"links,20"}),c.ui.addButton("Anchor",{label:c.lang.link.anchor.toolbar,command:"anchor",toolbar:"links,30"}));CKEDITOR.dialog.add("link",this.path+"dialogs/link.js");CKEDITOR.dialog.add("anchor",this.path+"dialogs/anchor.js");c.on("doubleclick",function(a){var b=CKEDITOR.plugins.link.getSelectedLink(c)||a.data.element;if(!b.isReadOnly())if(b.is("a")){a.data.dialog=b.getAttribute("name")&&(!b.getAttribute("href")||!b.getChildCount())?"anchor":"link";
a.data.link=b}else if(CKEDITOR.plugins.link.tryRestoreFakeAnchor(c,b))a.data.dialog="anchor"},null,null,0);c.on("doubleclick",function(a){a.data.dialog in{link:1,anchor:1}&&a.data.link&&c.getSelection().selectElement(a.data.link)},null,null,20);c.addMenuItems&&c.addMenuItems({anchor:{label:c.lang.link.anchor.menu,command:"anchor",group:"anchor",order:1},removeAnchor:{label:c.lang.link.anchor.remove,command:"removeAnchor",group:"anchor",order:5},link:{label:c.lang.link.menu,command:"link",group:"link",
order:1},unlink:{label:c.lang.link.unlink,command:"unlink",group:"link",order:5}});c.contextMenu&&c.contextMenu.addListener(function(a){if(!a||a.isReadOnly())return null;a=CKEDITOR.plugins.link.tryRestoreFakeAnchor(c,a);if(!a&&!(a=CKEDITOR.plugins.link.getSelectedLink(c)))return null;var b={};a.getAttribute("href")&&a.getChildCount()&&(b={link:CKEDITOR.TRISTATE_OFF,unlink:CKEDITOR.TRISTATE_OFF});if(a&&a.hasAttribute("name"))b.anchor=b.removeAnchor=CKEDITOR.TRISTATE_OFF;return b});this.compiledProtectionFunction=
l(c)},afterInit:function(c){c.dataProcessor.dataFilter.addRules({elements:{a:function(a){return!a.attributes.name?null:!a.children.length?c.createFakeParserElement(a,"cke_anchor","anchor"):null}}});var b=c._.elementsPath&&c._.elementsPath.filters;b&&b.push(function(a,b){if("a"==b&&(CKEDITOR.plugins.link.tryRestoreFakeAnchor(c,a)||a.getAttribute("name")&&(!a.getAttribute("href")||!a.getChildCount())))return"anchor"})}});var p=/^javascript:/,q=/^mailto:([^?]+)(?:\?(.+))?$/,r=/subject=([^;?:@&=$,\/]*)/,
s=/body=([^;?:@&=$,\/]*)/,t=/^#(.*)$/,u=/^((?:http|https|ftp|news):\/\/)?(.*)$/,v=/^(_(?:self|top|parent|blank))$/,w=/^javascript:void\(location\.href='mailto:'\+String\.fromCharCode\(([^)]+)\)(?:\+'(.*)')?\)$/,x=/^javascript:([^(]+)\(([^)]+)\)$/,y=/\s*window.open\(\s*this\.href\s*,\s*(?:'([^']*)'|null)\s*,\s*'([^']*)'\s*\)\s*;\s*return\s*false;*\s*/,z=/(?:^|,)([^=]+)=(\d+|yes|no)/gi,j={id:"advId",dir:"advLangDir",accessKey:"advAccessKey",name:"advName",lang:"advLangCode",tabindex:"advTabIndex",title:"advTitle",
type:"advContentType","class":"advCSSClasses",charset:"advCharset",style:"advStyles",rel:"advRel"};CKEDITOR.plugins.link={getSelectedLink:function(c){var b=c.getSelection(),a=b.getSelectedElement();return a&&a.is("a")?a:(b=b.getRanges()[0])?(b.shrink(CKEDITOR.SHRINK_TEXT),c.elementPath(b.getCommonAncestor()).contains("a",1)):null},getEditorAnchors:function(c){for(var b=c.editable(),a=b.isInline()&&!c.plugins.divarea?c.document:b,b=a.getElementsByTag("a"),a=a.getElementsByTag("img"),f=[],e=0,d;d=b.getItem(e++);)if(d.data("cke-saved-name")||
d.hasAttribute("name"))f.push({name:d.data("cke-saved-name")||d.getAttribute("name"),id:d.getAttribute("id")});for(e=0;d=a.getItem(e++);)(d=this.tryRestoreFakeAnchor(c,d))&&f.push({name:d.getAttribute("name"),id:d.getAttribute("id")});return f},fakeAnchor:!0,tryRestoreFakeAnchor:function(c,b){if(b&&b.data("cke-real-element-type")&&"anchor"==b.data("cke-real-element-type")){var a=c.restoreRealElement(b);if(a.data("cke-saved-name"))return a}},parseLinkAttributes:function(c,b){var a=b&&(b.data("cke-saved-href")||
b.getAttribute("href"))||"",f=c.plugins.link.compiledProtectionFunction,e=c.config.emailProtection,d,g={};a.match(p)&&("encode"==e?a=a.replace(w,function(a,b,c){return"mailto:"+String.fromCharCode.apply(String,b.split(","))+(c&&c.replace(/\\'/g,"'"))}):e&&a.replace(x,function(a,b,c){if(b==f.name){g.type="email";for(var a=g.email={},b=/(^')|('$)/g,c=c.match(/[^,\s]+/g),d=c.length,e,h,i=0;i<d;i++)e=decodeURIComponent,h=c[i].replace(b,"").replace(/\\'/g,"'"),h=e(h),e=f.params[i].toLowerCase(),a[e]=h;
a.address=[a.name,a.domain].join("@")}}));if(!g.type)if(e=a.match(t))g.type="anchor",g.anchor={},g.anchor.name=g.anchor.id=e[1];else if(e=a.match(q)){d=a.match(r);a=a.match(s);g.type="email";var i=g.email={};i.address=e[1];d&&(i.subject=decodeURIComponent(d[1]));a&&(i.body=decodeURIComponent(a[1]))}else if(a&&(d=a.match(u)))g.type="url",g.url={},g.url.protocol=d[1],g.url.url=d[2];if(b){if(a=b.getAttribute("target"))g.target={type:a.match(v)?a:"frame",name:a};else if(a=(a=b.data("cke-pa-onclick")||
b.getAttribute("onclick"))&&a.match(y))for(g.target={type:"popup",name:a[1]};e=z.exec(a[2]);)("yes"==e[2]||"1"==e[2])&&!(e[1]in{height:1,width:1,top:1,left:1})?g.target[e[1]]=!0:isFinite(e[2])&&(g.target[e[1]]=e[2]);var a={},h;for(h in j)(e=b.getAttribute(h))&&(a[j[h]]=e);if(h=b.data("cke-saved-name")||a.advName)a.advName=h;CKEDITOR.tools.isEmpty(a)||(g.advanced=a)}return g},getLinkAttributes:function(c,b){var a=c.config.emailProtection||"",f={};switch(b.type){case "url":var a=b.url&&void 0!==b.url.protocol?
b.url.protocol:"http://",e=b.url&&CKEDITOR.tools.trim(b.url.url)||"";f["data-cke-saved-href"]=0===e.indexOf("/")?e:a+e;break;case "anchor":a=b.anchor&&b.anchor.id;f["data-cke-saved-href"]="#"+(b.anchor&&b.anchor.name||a||"");break;case "email":var d=b.email,e=d.address;switch(a){case "":case "encode":var g=encodeURIComponent(d.subject||""),i=encodeURIComponent(d.body||""),d=[];g&&d.push("subject="+g);i&&d.push("body="+i);d=d.length?"?"+d.join("&"):"";"encode"==a?(a=["javascript:void(location.href='mailto:'+",
n(e)],d&&a.push("+'",m(d),"'"),a.push(")")):a=["mailto:",e,d];break;default:a=e.split("@",2),d.name=a[0],d.domain=a[1],a=["javascript:",o(c,d)]}f["data-cke-saved-href"]=a.join("")}if(b.target)if("popup"==b.target.type){for(var a=["window.open(this.href, '",b.target.name||"","', '"],h="resizable status location toolbar menubar fullscreen scrollbars dependent".split(" "),e=h.length,g=function(a){b.target[a]&&h.push(a+"="+b.target[a])},d=0;d<e;d++)h[d]+=b.target[h[d]]?"=yes":"=no";g("width");g("left");
g("height");g("top");a.push(h.join(","),"'); return false;");f["data-cke-pa-onclick"]=a.join("")}else"notSet"!=b.target.type&&b.target.name&&(f.target=b.target.name);if(b.advanced){for(var k in j)(a=b.advanced[j[k]])&&(f[k]=a);f.name&&(f["data-cke-saved-name"]=f.name)}f["data-cke-saved-href"]&&(f.href=f["data-cke-saved-href"]);k=CKEDITOR.tools.extend({target:1,onclick:1,"data-cke-pa-onclick":1,"data-cke-saved-name":1},j);for(var l in f)delete k[l];return{set:f,removed:CKEDITOR.tools.objectKeys(k)}}};
CKEDITOR.unlinkCommand=function(){};CKEDITOR.unlinkCommand.prototype={exec:function(c){var b=new CKEDITOR.style({element:"a",type:CKEDITOR.STYLE_INLINE,alwaysRemoveElement:1});c.removeStyle(b)},refresh:function(c,b){var a=b.lastElement&&b.lastElement.getAscendant("a",!0);a&&"a"==a.getName()&&a.getAttribute("href")&&a.getChildCount()?this.setState(CKEDITOR.TRISTATE_OFF):this.setState(CKEDITOR.TRISTATE_DISABLED)},contextSensitive:1,startDisabled:1,requiredContent:"a[href]"};CKEDITOR.removeAnchorCommand=
function(){};CKEDITOR.removeAnchorCommand.prototype={exec:function(c){var b=c.getSelection(),a=b.createBookmarks(),f;if(b&&(f=b.getSelectedElement())&&(!f.getChildCount()?CKEDITOR.plugins.link.tryRestoreFakeAnchor(c,f):f.is("a")))f.remove(1);else if(f=CKEDITOR.plugins.link.getSelectedLink(c))f.hasAttribute("href")?(f.removeAttributes({name:1,"data-cke-saved-name":1}),f.removeClass("cke_anchor")):f.remove(1);b.selectBookmarks(a)},requiredContent:"a[name]"};CKEDITOR.tools.extend(CKEDITOR.config,{linkShowAdvancedTab:!0,
linkShowTargetTab:!0})})();(function(){function E(b,k,e){function d(d){if((a=c[d?"getFirst":"getLast"]())&&(!a.is||!a.isBlockBoundary())&&(m=k.root[d?"getPrevious":"getNext"](CKEDITOR.dom.walker.invisible(!0)))&&(!m.is||!m.isBlockBoundary({br:1})))b.document.createElement("br")[d?"insertBefore":"insertAfter"](a)}for(var f=CKEDITOR.plugins.list.listToArray(k.root,e),g=[],i=0;i<k.contents.length;i++){var h=k.contents[i];if((h=h.getAscendant("li",!0))&&!h.getCustomData("list_item_processed"))g.push(h),CKEDITOR.dom.element.setMarker(e,
h,"list_item_processed",!0)}h=null;for(i=0;i<g.length;i++)h=g[i].getCustomData("listarray_index"),f[h].indent=-1;for(i=h+1;i<f.length;i++)if(f[i].indent>f[i-1].indent+1){g=f[i-1].indent+1-f[i].indent;for(h=f[i].indent;f[i]&&f[i].indent>=h;)f[i].indent+=g,i++;i--}var c=CKEDITOR.plugins.list.arrayToList(f,e,null,b.config.enterMode,k.root.getAttribute("dir")).listNode,a,m;d(!0);d();c.replace(k.root);b.fire("contentDomInvalidated")}function x(b,k){this.name=b;this.context=this.type=k;this.allowedContent=
k+" li";this.requiredContent=k}function A(b,k,e,d){for(var f,g;f=b[d?"getLast":"getFirst"](F);)(g=f.getDirection(1))!==k.getDirection(1)&&f.setAttribute("dir",g),f.remove(),e?f[d?"insertBefore":"insertAfter"](e):k.append(f,d)}function B(b){function k(e){var d=b[e?"getPrevious":"getNext"](q);d&&(d.type==CKEDITOR.NODE_ELEMENT&&d.is(b.getName()))&&(A(b,d,null,!e),b.remove(),b=d)}k();k(1)}function C(b){return b.type==CKEDITOR.NODE_ELEMENT&&(b.getName()in CKEDITOR.dtd.$block||b.getName()in CKEDITOR.dtd.$listItem)&&
CKEDITOR.dtd[b.getName()]["#"]}function y(b,k,e){b.fire("saveSnapshot");e.enlarge(CKEDITOR.ENLARGE_LIST_ITEM_CONTENTS);var d=e.extractContents();k.trim(!1,!0);var f=k.createBookmark(),g=new CKEDITOR.dom.elementPath(k.startContainer),i=g.block,g=g.lastElement.getAscendant("li",1)||i,h=new CKEDITOR.dom.elementPath(e.startContainer),c=h.contains(CKEDITOR.dtd.$listItem),h=h.contains(CKEDITOR.dtd.$list);i?(i=i.getBogus())&&i.remove():h&&(i=h.getPrevious(q))&&v(i)&&i.remove();(i=d.getLast())&&(i.type==
CKEDITOR.NODE_ELEMENT&&i.is("br"))&&i.remove();(i=k.startContainer.getChild(k.startOffset))?d.insertBefore(i):k.startContainer.append(d);if(c&&(d=w(c)))g.contains(c)?(A(d,c.getParent(),c),d.remove()):g.append(d);for(;e.checkStartOfBlock()&&e.checkEndOfBlock();){h=e.startPath();d=h.block;if(!d)break;d.is("li")&&(g=d.getParent(),d.equals(g.getLast(q))&&d.equals(g.getFirst(q))&&(d=g));e.moveToPosition(d,CKEDITOR.POSITION_BEFORE_START);d.remove()}e=e.clone();d=b.editable();e.setEndAt(d,CKEDITOR.POSITION_BEFORE_END);
e=new CKEDITOR.dom.walker(e);e.evaluator=function(a){return q(a)&&!v(a)};(e=e.next())&&(e.type==CKEDITOR.NODE_ELEMENT&&e.getName()in CKEDITOR.dtd.$list)&&B(e);k.moveToBookmark(f);k.select();b.fire("saveSnapshot")}function w(b){return(b=b.getLast(q))&&b.type==CKEDITOR.NODE_ELEMENT&&b.getName()in r?b:null}var r={ol:1,ul:1},G=CKEDITOR.dom.walker.whitespaces(),D=CKEDITOR.dom.walker.bookmark(),q=function(b){return!(G(b)||D(b))},v=CKEDITOR.dom.walker.bogus();CKEDITOR.plugins.list={listToArray:function(b,
k,e,d,f){if(!r[b.getName()])return[];d||(d=0);e||(e=[]);for(var g=0,i=b.getChildCount();g<i;g++){var h=b.getChild(g);h.type==CKEDITOR.NODE_ELEMENT&&h.getName()in CKEDITOR.dtd.$list&&CKEDITOR.plugins.list.listToArray(h,k,e,d+1);if("li"==h.$.nodeName.toLowerCase()){var c={parent:b,indent:d,element:h,contents:[]};f?c.grandparent=f:(c.grandparent=b.getParent(),c.grandparent&&"li"==c.grandparent.$.nodeName.toLowerCase()&&(c.grandparent=c.grandparent.getParent()));k&&CKEDITOR.dom.element.setMarker(k,h,
"listarray_index",e.length);e.push(c);for(var a=0,m=h.getChildCount(),j;a<m;a++)j=h.getChild(a),j.type==CKEDITOR.NODE_ELEMENT&&r[j.getName()]?CKEDITOR.plugins.list.listToArray(j,k,e,d+1,c.grandparent):c.contents.push(j)}}return e},arrayToList:function(b,k,e,d,f){e||(e=0);if(!b||b.length<e+1)return null;for(var g,i=b[e].parent.getDocument(),h=new CKEDITOR.dom.documentFragment(i),c=null,a=e,m=Math.max(b[e].indent,0),j=null,n,l,p=d==CKEDITOR.ENTER_P?"p":"div";;){var o=b[a];g=o.grandparent;n=o.element.getDirection(1);
if(o.indent==m){if(!c||b[a].parent.getName()!=c.getName())c=b[a].parent.clone(!1,1),f&&c.setAttribute("dir",f),h.append(c);j=c.append(o.element.clone(0,1));n!=c.getDirection(1)&&j.setAttribute("dir",n);for(g=0;g<o.contents.length;g++)j.append(o.contents[g].clone(1,1));a++}else if(o.indent==Math.max(m,0)+1)o=b[a-1].element.getDirection(1),a=CKEDITOR.plugins.list.arrayToList(b,null,a,d,o!=n?n:null),!j.getChildCount()&&(CKEDITOR.env.needsNbspFiller&&7>=i.$.documentMode)&&j.append(i.createText(" ")),
j.append(a.listNode),a=a.nextIndex;else if(-1==o.indent&&!e&&g){r[g.getName()]?(j=o.element.clone(!1,!0),n!=g.getDirection(1)&&j.setAttribute("dir",n)):j=new CKEDITOR.dom.documentFragment(i);var c=g.getDirection(1)!=n,u=o.element,z=u.getAttribute("class"),v=u.getAttribute("style"),w=j.type==CKEDITOR.NODE_DOCUMENT_FRAGMENT&&(d!=CKEDITOR.ENTER_BR||c||v||z),s,x=o.contents.length,t;for(g=0;g<x;g++)if(s=o.contents[g],D(s)&&1<x)w?t=s.clone(1,1):j.append(s.clone(1,1));else if(s.type==CKEDITOR.NODE_ELEMENT&&
s.isBlockBoundary()){c&&!s.getDirection()&&s.setAttribute("dir",n);l=s;var y=u.getAttribute("style");y&&l.setAttribute("style",y.replace(/([^;])$/,"$1;")+(l.getAttribute("style")||""));z&&s.addClass(z);l=null;t&&(j.append(t),t=null);j.append(s.clone(1,1))}else w?(l||(l=i.createElement(p),j.append(l),c&&l.setAttribute("dir",n)),v&&l.setAttribute("style",v),z&&l.setAttribute("class",z),t&&(l.append(t),t=null),l.append(s.clone(1,1))):j.append(s.clone(1,1));t&&((l||j).append(t),t=null);j.type==CKEDITOR.NODE_DOCUMENT_FRAGMENT&&
a!=b.length-1&&(CKEDITOR.env.needsBrFiller&&(n=j.getLast())&&(n.type==CKEDITOR.NODE_ELEMENT&&n.is("br"))&&n.remove(),n=j.getLast(q),(!n||!(n.type==CKEDITOR.NODE_ELEMENT&&n.is(CKEDITOR.dtd.$block)))&&j.append(i.createElement("br")));n=j.$.nodeName.toLowerCase();("div"==n||"p"==n)&&j.appendBogus();h.append(j);c=null;a++}else return null;l=null;if(b.length<=a||Math.max(b[a].indent,0)<m)break}if(k)for(b=h.getFirst();b;){if(b.type==CKEDITOR.NODE_ELEMENT&&(CKEDITOR.dom.element.clearMarkers(k,b),b.getName()in
CKEDITOR.dtd.$listItem&&(e=b,i=f=d=void 0,d=e.getDirection()))){for(f=e.getParent();f&&!(i=f.getDirection());)f=f.getParent();d==i&&e.removeAttribute("dir")}b=b.getNextSourceNode()}return{listNode:h,nextIndex:a}}};var H=/^h[1-6]$/,F=CKEDITOR.dom.walker.nodeType(CKEDITOR.NODE_ELEMENT);x.prototype={exec:function(b){this.refresh(b,b.elementPath());var k=b.config,e=b.getSelection(),d=e&&e.getRanges();if(this.state==CKEDITOR.TRISTATE_OFF){var f=b.editable();if(f.getFirst(q)){var g=1==d.length&&d[0];(k=
g&&g.getEnclosedNode())&&(k.is&&this.type==k.getName())&&this.setState(CKEDITOR.TRISTATE_ON)}else k.enterMode==CKEDITOR.ENTER_BR?f.appendBogus():d[0].fixBlock(1,k.enterMode==CKEDITOR.ENTER_P?"p":"div"),e.selectRanges(d)}for(var k=e.createBookmarks(!0),f=[],i={},d=d.createIterator(),h=0;(g=d.getNextRange())&&++h;){var c=g.getBoundaryNodes(),a=c.startNode,m=c.endNode;a.type==CKEDITOR.NODE_ELEMENT&&"td"==a.getName()&&g.setStartAt(c.startNode,CKEDITOR.POSITION_AFTER_START);m.type==CKEDITOR.NODE_ELEMENT&&
"td"==m.getName()&&g.setEndAt(c.endNode,CKEDITOR.POSITION_BEFORE_END);g=g.createIterator();for(g.forceBrBreak=this.state==CKEDITOR.TRISTATE_OFF;c=g.getNextParagraph();)if(!c.getCustomData("list_block")){CKEDITOR.dom.element.setMarker(i,c,"list_block",1);for(var j=b.elementPath(c),a=j.elements,m=0,j=j.blockLimit,n,l=a.length-1;0<=l&&(n=a[l]);l--)if(r[n.getName()]&&j.contains(n)){j.removeCustomData("list_group_object_"+h);(a=n.getCustomData("list_group_object"))?a.contents.push(c):(a={root:n,contents:[c]},
f.push(a),CKEDITOR.dom.element.setMarker(i,n,"list_group_object",a));m=1;break}m||(m=j,m.getCustomData("list_group_object_"+h)?m.getCustomData("list_group_object_"+h).contents.push(c):(a={root:m,contents:[c]},CKEDITOR.dom.element.setMarker(i,m,"list_group_object_"+h,a),f.push(a)))}}for(n=[];0<f.length;)if(a=f.shift(),this.state==CKEDITOR.TRISTATE_OFF)if(r[a.root.getName()]){d=b;h=a;a=i;g=n;m=CKEDITOR.plugins.list.listToArray(h.root,a);j=[];for(c=0;c<h.contents.length;c++)if(l=h.contents[c],(l=l.getAscendant("li",
!0))&&!l.getCustomData("list_item_processed"))j.push(l),CKEDITOR.dom.element.setMarker(a,l,"list_item_processed",!0);for(var l=h.root.getDocument(),p=void 0,o=void 0,c=0;c<j.length;c++){var u=j[c].getCustomData("listarray_index"),p=m[u].parent;p.is(this.type)||(o=l.createElement(this.type),p.copyAttributes(o,{start:1,type:1}),o.removeStyle("list-style-type"),m[u].parent=o)}a=CKEDITOR.plugins.list.arrayToList(m,a,null,d.config.enterMode);m=void 0;j=a.listNode.getChildCount();for(c=0;c<j&&(m=a.listNode.getChild(c));c++)m.getName()==
this.type&&g.push(m);a.listNode.replace(h.root);d.fire("contentDomInvalidated")}else{m=b;c=a;g=n;j=c.contents;d=c.root.getDocument();h=[];1==j.length&&j[0].equals(c.root)&&(a=d.createElement("div"),j[0].moveChildren&&j[0].moveChildren(a),j[0].append(a),j[0]=a);c=c.contents[0].getParent();for(l=0;l<j.length;l++)c=c.getCommonAncestor(j[l].getParent());p=m.config.useComputedState;m=a=void 0;p=void 0===p||p;for(l=0;l<j.length;l++)for(o=j[l];u=o.getParent();){if(u.equals(c)){h.push(o);!m&&o.getDirection()&&
(m=1);o=o.getDirection(p);null!==a&&(a=a&&a!=o?null:o);break}o=u}if(!(1>h.length)){j=h[h.length-1].getNext();l=d.createElement(this.type);g.push(l);for(p=g=void 0;h.length;)g=h.shift(),p=d.createElement("li"),g.is("pre")||H.test(g.getName())||"false"==g.getAttribute("contenteditable")?g.appendTo(p):(g.copyAttributes(p),a&&g.getDirection()&&(p.removeStyle("direction"),p.removeAttribute("dir")),g.moveChildren(p),g.remove()),p.appendTo(l);a&&m&&l.setAttribute("dir",a);j?l.insertBefore(j):l.appendTo(c)}}else this.state==
CKEDITOR.TRISTATE_ON&&r[a.root.getName()]&&E.call(this,b,a,i);for(l=0;l<n.length;l++)B(n[l]);CKEDITOR.dom.element.clearAllMarkers(i);e.selectBookmarks(k);b.focus()},refresh:function(b,k){var e=k.contains(r,1),d=k.blockLimit||k.root;e&&d.contains(e)?this.setState(e.is(this.type)?CKEDITOR.TRISTATE_ON:CKEDITOR.TRISTATE_OFF):this.setState(CKEDITOR.TRISTATE_OFF)}};CKEDITOR.plugins.add("list",{requires:"indentlist",init:function(b){b.blockless||(b.addCommand("numberedlist",new x("numberedlist","ol")),b.addCommand("bulletedlist",
new x("bulletedlist","ul")),b.ui.addButton&&(b.ui.addButton("NumberedList",{label:b.lang.list.numberedlist,command:"numberedlist",directional:!0,toolbar:"list,10"}),b.ui.addButton("BulletedList",{label:b.lang.list.bulletedlist,command:"bulletedlist",directional:!0,toolbar:"list,20"})),b.on("key",function(k){var e=k.data.domEvent.getKey(),d;if(b.mode=="wysiwyg"&&e in{8:1,46:1}){var f=b.getSelection().getRanges()[0],g=f&&f.startPath();if(f&&f.collapsed){var i=e==8,h=b.editable(),c=new CKEDITOR.dom.walker(f.clone());
c.evaluator=function(a){return q(a)&&!v(a)};c.guard=function(a,b){return!(b&&a.type==CKEDITOR.NODE_ELEMENT&&a.is("table"))};e=f.clone();if(i){var a;if((a=g.contains(r))&&f.checkBoundaryOfElement(a,CKEDITOR.START)&&(a=a.getParent())&&a.is("li")&&(a=w(a))){d=a;a=a.getPrevious(q);e.moveToPosition(a&&v(a)?a:d,CKEDITOR.POSITION_BEFORE_START)}else{c.range.setStartAt(h,CKEDITOR.POSITION_AFTER_START);c.range.setEnd(f.startContainer,f.startOffset);if((a=c.previous())&&a.type==CKEDITOR.NODE_ELEMENT&&(a.getName()in
r||a.is("li"))){if(!a.is("li")){c.range.selectNodeContents(a);c.reset();c.evaluator=C;a=c.previous()}d=a;e.moveToElementEditEnd(d)}}if(d){y(b,e,f);k.cancel()}else if((e=g.contains(r))&&f.checkBoundaryOfElement(e,CKEDITOR.START)){d=e.getFirst(q);if(f.checkBoundaryOfElement(d,CKEDITOR.START)){a=e.getPrevious(q);if(w(d)){if(a){f.moveToElementEditEnd(a);f.select()}}else b.execCommand("outdent");k.cancel()}}}else if(d=g.contains("li")){c.range.setEndAt(h,CKEDITOR.POSITION_BEFORE_END);d=(g=d.getLast(q))&&
C(g)?g:d;h=0;if((a=c.next())&&a.type==CKEDITOR.NODE_ELEMENT&&a.getName()in r&&a.equals(g)){h=1;a=c.next()}else f.checkBoundaryOfElement(d,CKEDITOR.END)&&(h=1);if(h&&a){f=f.clone();f.moveToElementEditStart(a);y(b,e,f);k.cancel()}}else{c.range.setEndAt(h,CKEDITOR.POSITION_BEFORE_END);if((a=c.next())&&a.type==CKEDITOR.NODE_ELEMENT&&a.is(r)){a=a.getFirst(q);if(g.block&&f.checkStartOfBlock()&&f.checkEndOfBlock()){g.block.remove();f.moveToElementEditStart(a);f.select()}else if(w(a)){f.moveToElementEditStart(a);
f.select()}else{f=f.clone();f.moveToElementEditStart(a);y(b,e,f)}k.cancel()}}setTimeout(function(){b.selectionChange(1)})}}}))}})})();(function(){CKEDITOR.plugins.liststyle={requires:"dialog,contextmenu",init:function(a){if(!a.blockless){var b;b=new CKEDITOR.dialogCommand("numberedListStyle",{requiredContent:"ol",allowedContent:"ol{list-style-type}[start]"});b=a.addCommand("numberedListStyle",b);a.addFeature(b);CKEDITOR.dialog.add("numberedListStyle",this.path+"dialogs/liststyle.js");b=new CKEDITOR.dialogCommand("bulletedListStyle",{requiredContent:"ul",allowedContent:"ul{list-style-type}"});b=a.addCommand("bulletedListStyle",b);
a.addFeature(b);CKEDITOR.dialog.add("bulletedListStyle",this.path+"dialogs/liststyle.js");a.addMenuGroup("list",108);a.addMenuItems({numberedlist:{label:a.lang.liststyle.numberedTitle,group:"list",command:"numberedListStyle"},bulletedlist:{label:a.lang.liststyle.bulletedTitle,group:"list",command:"bulletedListStyle"}});a.contextMenu.addListener(function(a){if(!a||a.isReadOnly())return null;for(;a;){var b=a.getName();if("ol"==b)return{numberedlist:CKEDITOR.TRISTATE_OFF};if("ul"==b)return{bulletedlist:CKEDITOR.TRISTATE_OFF};
a=a.getParent()}return null})}}};CKEDITOR.plugins.add("liststyle",CKEDITOR.plugins.liststyle)})();(function(){function Q(a,c,d){return m(c)&&m(d)&&d.equals(c.getNext(function(a){return!(z(a)||A(a)||p(a))}))}function u(a){this.upper=a[0];this.lower=a[1];this.set.apply(this,a.slice(2))}function J(a){var c=a.element;if(c&&m(c)&&(c=c.getAscendant(a.triggers,!0))&&a.editable.contains(c)){var d=K(c);if("true"==d.getAttribute("contenteditable"))return c;if(d.is(a.triggers))return d}return null}function ga(a,c,d){o(a,c);o(a,d);a=c.size.bottom;d=d.size.top;return a&&d?0|(a+d)/2:a||d}function r(a,c,d){return c=
c[d?"getPrevious":"getNext"](function(b){return b&&b.type==CKEDITOR.NODE_TEXT&&!z(b)||m(b)&&!p(b)&&!v(a,b)})}function K(a,c){if(a.data("cke-editable"))return null;for(c||(a=a.getParent());a&&!a.data("cke-editable");){if(a.hasAttribute("contenteditable"))return a;a=a.getParent()}return null}function ha(a){var c=a.doc,d=B('<span contenteditable="false" style="'+L+"position:absolute;border-top:1px dashed "+a.boxColor+'"></span>',c),b=CKEDITOR.getUrl(this.path+"images/"+(n.hidpi?"hidpi/":"")+"icon"+(a.rtl?
"-rtl":"")+".png");q(d,{attach:function(){this.wrap.getParent()||this.wrap.appendTo(a.editable,!0);return this},lineChildren:[q(B('<span title="'+a.editor.lang.magicline.title+'" contenteditable="false">&#8629;</span>',c),{base:L+"height:17px;width:17px;"+(a.rtl?"left":"right")+":17px;background:url("+b+") center no-repeat "+a.boxColor+";cursor:pointer;"+(n.hc?"font-size: 15px;line-height:14px;border:1px solid #fff;text-align:center;":"")+(n.hidpi?"background-size: 9px 10px;":""),looks:["top:-8px;"+
CKEDITOR.tools.cssVendorPrefix("border-radius","2px",1),"top:-17px;"+CKEDITOR.tools.cssVendorPrefix("border-radius","2px 2px 0px 0px",1),"top:-1px;"+CKEDITOR.tools.cssVendorPrefix("border-radius","0px 0px 2px 2px",1)]}),q(B(R,c),{base:S+"left:0px;border-left-color:"+a.boxColor+";",looks:["border-width:8px 0 8px 8px;top:-8px","border-width:8px 0 0 8px;top:-8px","border-width:0 0 8px 8px;top:0px"]}),q(B(R,c),{base:S+"right:0px;border-right-color:"+a.boxColor+";",looks:["border-width:8px 8px 8px 0;top:-8px",
"border-width:8px 8px 0 0;top:-8px","border-width:0 8px 8px 0;top:0px"]})],detach:function(){this.wrap.getParent()&&this.wrap.remove();return this},mouseNear:function(){o(a,this);var b=a.holdDistance,c=this.size;return c&&a.mouse.y>c.top-b&&a.mouse.y<c.bottom+b&&a.mouse.x>c.left-b&&a.mouse.x<c.right+b?!0:!1},place:function(){var b=a.view,c=a.editable,d=a.trigger,i=d.upper,h=d.lower,j=i||h,l=j.getParent(),k={};this.trigger=d;i&&o(a,i,!0);h&&o(a,h,!0);o(a,l,!0);a.inInlineMode&&C(a,!0);l.equals(c)?(k.left=
b.scroll.x,k.right=-b.scroll.x,k.width=""):(k.left=j.size.left-j.size.margin.left+b.scroll.x-(a.inInlineMode?b.editable.left+b.editable.border.left:0),k.width=j.size.outerWidth+j.size.margin.left+j.size.margin.right+b.scroll.x,k.right="");i&&h?k.top=i.size.margin.bottom===h.size.margin.top?0|i.size.bottom+i.size.margin.bottom/2:i.size.margin.bottom<h.size.margin.top?i.size.bottom+i.size.margin.bottom:i.size.bottom+i.size.margin.bottom-h.size.margin.top:i?h||(k.top=i.size.bottom+i.size.margin.bottom):
k.top=h.size.top-h.size.margin.top;d.is(x)||k.top>b.scroll.y-15&&k.top<b.scroll.y+5?(k.top=a.inInlineMode?0:b.scroll.y,this.look(x)):d.is(y)||k.top>b.pane.bottom-5&&k.top<b.pane.bottom+15?(k.top=a.inInlineMode?b.editable.height+b.editable.padding.top+b.editable.padding.bottom:b.pane.bottom-1,this.look(y)):(a.inInlineMode&&(k.top-=b.editable.top+b.editable.border.top),this.look(s));a.inInlineMode&&(k.top--,k.top+=b.editable.scroll.top,k.left+=b.editable.scroll.left);for(var T in k)k[T]=CKEDITOR.tools.cssLength(k[T]);
this.setStyles(k)},look:function(a){if(this.oldLook!=a){for(var b=this.lineChildren.length,c;b--;)(c=this.lineChildren[b]).setAttribute("style",c.base+c.looks[0|a/2]);this.oldLook=a}},wrap:new M("span",a.doc)});for(c=d.lineChildren.length;c--;)d.lineChildren[c].appendTo(d);d.look(s);d.appendTo(d.wrap);d.unselectable();d.lineChildren[0].on("mouseup",function(b){d.detach();N(a,function(b){var c=a.line.trigger;b[c.is(D)?"insertBefore":"insertAfter"](c.is(D)?c.lower:c.upper)},!0);a.editor.focus();!n.ie&&
a.enterMode!=CKEDITOR.ENTER_BR&&a.hotNode.scrollIntoView();b.data.preventDefault(!0)});d.on("mousedown",function(a){a.data.preventDefault(!0)});a.line=d}function N(a,c,d){var b=new CKEDITOR.dom.range(a.doc),e=a.editor,f;n.ie&&a.enterMode==CKEDITOR.ENTER_BR?f=a.doc.createText(E):(f=(f=K(a.element,!0))&&f.data("cke-enter-mode")||a.enterMode,f=new M(F[f],a.doc),f.is("br")||a.doc.createText(E).appendTo(f));d&&e.fire("saveSnapshot");c(f);b.moveToPosition(f,CKEDITOR.POSITION_AFTER_START);e.getSelection().selectRanges([b]);
a.hotNode=f;d&&e.fire("saveSnapshot")}function U(a,c){return{canUndo:!0,modes:{wysiwyg:1},exec:function(){function d(b){var d=n.ie&&9>n.version?" ":E,f=a.hotNode&&a.hotNode.getText()==d&&a.element.equals(a.hotNode)&&a.lastCmdDirection===!!c;N(a,function(d){f&&a.hotNode&&a.hotNode.remove();d[c?"insertAfter":"insertBefore"](b);d.setAttributes({"data-cke-magicline-hot":1,"data-cke-magicline-dir":!!c});a.lastCmdDirection=!!c});!n.ie&&a.enterMode!=CKEDITOR.ENTER_BR&&a.hotNode.scrollIntoView();a.line.detach()}
return function(b){var b=b.getSelection().getStartElement(),e,b=b.getAscendant(V,1);if(!W(a,b)&&b&&!b.equals(a.editable)&&!b.contains(a.editable)){if((e=K(b))&&"false"==e.getAttribute("contenteditable"))b=e;a.element=b;e=r(a,b,!c);var f;m(e)&&e.is(a.triggers)&&e.is(ia)&&(!r(a,e,!c)||(f=r(a,e,!c))&&m(f)&&f.is(a.triggers))?d(e):(f=J(a,b),m(f)&&(r(a,f,!c)?(b=r(a,f,!c))&&(m(b)&&b.is(a.triggers))&&d(f):d(f)))}}}()}}function v(a,c){if(!c||!(c.type==CKEDITOR.NODE_ELEMENT&&c.$))return!1;var d=a.line;return d.wrap.equals(c)||
d.wrap.contains(c)}function m(a){return a&&a.type==CKEDITOR.NODE_ELEMENT&&a.$}function p(a){if(!m(a))return!1;var c;if(!(c=X(a)))m(a)?(c={left:1,right:1,center:1},c=!(!c[a.getComputedStyle("float")]&&!c[a.getAttribute("align")])):c=!1;return c}function X(a){return!!{absolute:1,fixed:1}[a.getComputedStyle("position")]}function G(a,c){return m(c)?c.is(a.triggers):null}function W(a,c){if(!c)return!1;for(var d=c.getParents(1),b=d.length;b--;)for(var e=a.tabuList.length;e--;)if(d[b].hasAttribute(a.tabuList[e]))return!0;
return!1}function ja(a,c,d){c=c[d?"getLast":"getFirst"](function(b){return a.isRelevant(b)&&!b.is(ka)});if(!c)return!1;o(a,c);return d?c.size.top>a.mouse.y:c.size.bottom<a.mouse.y}function Y(a){var c=a.editable,d=a.mouse,b=a.view,e=a.triggerOffset;C(a);var f=d.y>(a.inInlineMode?b.editable.top+b.editable.height/2:Math.min(b.editable.height,b.pane.height)/2),c=c[f?"getLast":"getFirst"](function(a){return!(z(a)||A(a))});if(!c)return null;v(a,c)&&(c=a.line.wrap[f?"getPrevious":"getNext"](function(a){return!(z(a)||
A(a))}));if(!m(c)||p(c)||!G(a,c))return null;o(a,c);return!f&&0<=c.size.top&&0<d.y&&d.y<c.size.top+e?(a=a.inInlineMode||0===b.scroll.y?x:s,new u([null,c,D,H,a])):f&&c.size.bottom<=b.pane.height&&d.y>c.size.bottom-e&&d.y<b.pane.height?(a=a.inInlineMode||c.size.bottom>b.pane.height-e&&c.size.bottom<b.pane.height?y:s,new u([c,null,Z,H,a])):null}function $(a){var c=a.mouse,d=a.view,b=a.triggerOffset,e=J(a);if(!e)return null;o(a,e);var b=Math.min(b,0|e.size.outerHeight/2),f=[],g,i;if(c.y>e.size.top-1&&
c.y<e.size.top+b)i=!1;else if(c.y>e.size.bottom-b&&c.y<e.size.bottom+1)i=!0;else return null;if(p(e)||ja(a,e,i)||e.getParent().is(aa))return null;var h=r(a,e,!i);if(h){if(h&&h.type==CKEDITOR.NODE_TEXT)return null;if(m(h)){if(p(h)||!G(a,h)||h.getParent().is(aa))return null;f=[h,e][i?"reverse":"concat"]().concat([O,H])}}else e.equals(a.editable[i?"getLast":"getFirst"](a.isRelevant))?(C(a),i&&c.y>e.size.bottom-b&&c.y<d.pane.height&&e.size.bottom>d.pane.height-b&&e.size.bottom<d.pane.height?g=y:0<c.y&&
c.y<e.size.top+b&&(g=x)):g=s,f=[null,e][i?"reverse":"concat"]().concat([i?Z:D,H,g,e.equals(a.editable[i?"getLast":"getFirst"](a.isRelevant))?i?y:x:s]);return 0 in f?new u(f):null}function P(a,c,d,b){for(var e=function(){var b=n.ie?c.$.currentStyle:a.win.$.getComputedStyle(c.$,"");return n.ie?function(a){return b[CKEDITOR.tools.cssStyleToDomStyle(a)]}:function(a){return b.getPropertyValue(a)}}(),f=c.getDocumentPosition(),g={},i={},h={},j={},l=t.length;l--;)g[t[l]]=parseInt(e("border-"+t[l]+"-width"),
10)||0,h[t[l]]=parseInt(e("padding-"+t[l]),10)||0,i[t[l]]=parseInt(e("margin-"+t[l]),10)||0;(!d||b)&&I(a,b);j.top=f.y-(d?0:a.view.scroll.y);j.left=f.x-(d?0:a.view.scroll.x);j.outerWidth=c.$.offsetWidth;j.outerHeight=c.$.offsetHeight;j.height=j.outerHeight-(h.top+h.bottom+g.top+g.bottom);j.width=j.outerWidth-(h.left+h.right+g.left+g.right);j.bottom=j.top+j.outerHeight;j.right=j.left+j.outerWidth;a.inInlineMode&&(j.scroll={top:c.$.scrollTop,left:c.$.scrollLeft});return q({border:g,padding:h,margin:i,
ignoreScroll:d},j,!0)}function o(a,c,d){if(!m(c))return c.size=null;if(c.size){if(c.size.ignoreScroll==d&&c.size.date>new Date-ba)return null}else c.size={};return q(c.size,P(a,c,d),{date:+new Date},!0)}function C(a,c){a.view.editable=P(a,a.editable,c,!0)}function I(a,c){a.view||(a.view={});var d=a.view;if(c||!(d&&d.date>new Date-ba)){var b=a.win,d=b.getScrollPosition(),b=b.getViewPaneSize();q(a.view,{scroll:{x:d.x,y:d.y,width:a.doc.$.documentElement.scrollWidth-b.width,height:a.doc.$.documentElement.scrollHeight-
b.height},pane:{width:b.width,height:b.height,bottom:b.height+d.y},date:+new Date},!0)}}function la(a,c,d,b){for(var e=b,f=b,g=0,i=!1,h=!1,j=a.view.pane.height,l=a.mouse;l.y+g<j&&0<l.y-g;){i||(i=c(e,b));h||(h=c(f,b));!i&&0<l.y-g&&(e=d(a,{x:l.x,y:l.y-g}));!h&&l.y+g<j&&(f=d(a,{x:l.x,y:l.y+g}));if(i&&h)break;g+=2}return new u([e,f,null,null])}CKEDITOR.plugins.add("magicline",{init:function(a){var c=a.config,d=c.magicline_triggerOffset||30,b={editor:a,enterMode:c.enterMode,triggerOffset:d,holdDistance:0|
d*(c.magicline_holdDistance||0.5),boxColor:c.magicline_color||"#ff0000",rtl:"rtl"==c.contentsLangDirection,tabuList:["data-cke-hidden-sel"].concat(c.magicline_tabuList||[]),triggers:c.magicline_everywhere?V:{table:1,hr:1,div:1,ul:1,ol:1,dl:1,form:1,blockquote:1}},e,f,g;b.isRelevant=function(a){return m(a)&&!v(b,a)&&!p(a)};a.on("contentDom",function(){var d=a.editable(),h=a.document,j=a.window;q(b,{editable:d,inInlineMode:d.isInline(),doc:h,win:j,hotNode:null},!0);b.boundary=b.inInlineMode?b.editable:
b.doc.getDocumentElement();d.is(w.$inline)||(b.inInlineMode&&!X(d)&&d.setStyles({position:"relative",top:null,left:null}),ha.call(this,b),I(b),d.attachListener(a,"beforeUndoImage",function(){b.line.detach()}),d.attachListener(a,"beforeGetData",function(){b.line.wrap.getParent()&&(b.line.detach(),a.once("getData",function(){b.line.attach()},null,null,1E3))},null,null,0),d.attachListener(b.inInlineMode?h:h.getWindow().getFrame(),"mouseout",function(c){if("wysiwyg"==a.mode)if(b.inInlineMode){var d=c.data.$.clientX,
c=c.data.$.clientY;I(b);C(b,!0);var e=b.view.editable,f=b.view.scroll;if(!(d>e.left-f.x&&d<e.right-f.x)||!(c>e.top-f.y&&c<e.bottom-f.y))clearTimeout(g),g=null,b.line.detach()}else clearTimeout(g),g=null,b.line.detach()}),d.attachListener(d,"keyup",function(){b.hiddenMode=0}),d.attachListener(d,"keydown",function(c){if("wysiwyg"==a.mode)switch(c.data.getKeystroke()){case 2228240:case 16:b.hiddenMode=1,b.line.detach()}}),d.attachListener(b.inInlineMode?d:h,"mousemove",function(c){f=!0;if(!("wysiwyg"!=
a.mode||a.readOnly||g)){var d={x:c.data.$.clientX,y:c.data.$.clientY};g=setTimeout(function(){b.mouse=d;g=b.trigger=null;I(b);if(f&&!b.hiddenMode&&a.focusManager.hasFocus&&!b.line.mouseNear()&&(b.element=ca(b,!0)))(b.trigger=Y(b)||$(b)||da(b))&&!W(b,b.trigger.upper||b.trigger.lower)?b.line.attach().place():(b.trigger=null,b.line.detach()),f=!1},30)}}),d.attachListener(j,"scroll",function(){"wysiwyg"==a.mode&&(b.line.detach(),n.webkit&&(b.hiddenMode=1,clearTimeout(e),e=setTimeout(function(){b.mouseDown||
(b.hiddenMode=0)},50)))}),d.attachListener(ea?h:j,"mousedown",function(){"wysiwyg"==a.mode&&(b.line.detach(),b.hiddenMode=1,b.mouseDown=1)}),d.attachListener(ea?h:j,"mouseup",function(){b.hiddenMode=0;b.mouseDown=0}),a.addCommand("accessPreviousSpace",U(b)),a.addCommand("accessNextSpace",U(b,!0)),a.setKeystroke([[c.magicline_keystrokePrevious,"accessPreviousSpace"],[c.magicline_keystrokeNext,"accessNextSpace"]]),a.on("loadSnapshot",function(){var c,d,e,f;for(f in{p:1,br:1,div:1}){c=a.document.getElementsByTag(f);
for(e=c.count();e--;)if((d=c.getItem(e)).data("cke-magicline-hot")){b.hotNode=d;b.lastCmdDirection="true"===d.data("cke-magicline-dir")?!0:!1;return}}}),this.backdoor={accessFocusSpace:N,boxTrigger:u,isLine:v,getAscendantTrigger:J,getNonEmptyNeighbour:r,getSize:P,that:b,triggerEdge:$,triggerEditable:Y,triggerExpand:da})},this)}});var q=CKEDITOR.tools.extend,M=CKEDITOR.dom.element,B=M.createFromHtml,n=CKEDITOR.env,ea=CKEDITOR.env.ie&&9>CKEDITOR.env.version,w=CKEDITOR.dtd,F={},D=128,Z=64,O=32,H=16,
fa=8,x=4,y=2,s=1,E=" ",aa=w.$listItem,ka=w.$tableContent,ia=q({},w.$nonEditable,w.$empty),V=w.$block,ba=100,L="width:0px;height:0px;padding:0px;margin:0px;display:block;z-index:9999;color:#fff;position:absolute;font-size: 0px;line-height:0px;",S=L+"border-color:transparent;display:block;border-style:solid;",R="<span>"+E+"</span>";F[CKEDITOR.ENTER_BR]="br";F[CKEDITOR.ENTER_P]="p";F[CKEDITOR.ENTER_DIV]="div";u.prototype={set:function(a,c,d){this.properties=a+c+(d||s);return this},is:function(a){return(this.properties&
a)==a}};var ca=function(){function a(a,d){var b=a.$.elementFromPoint(d.x,d.y);return b&&b.nodeType?new CKEDITOR.dom.element(b):null}return function(c,d,b){if(!c.mouse)return null;var e=c.doc,f=c.line.wrap,b=b||c.mouse,g=a(e,b);d&&v(c,g)&&(f.hide(),g=a(e,b),f.show());return!g||!(g.type==CKEDITOR.NODE_ELEMENT&&g.$)||n.ie&&9>n.version&&!c.boundary.equals(g)&&!c.boundary.contains(g)?null:g}}(),z=CKEDITOR.dom.walker.whitespaces(),A=CKEDITOR.dom.walker.nodeType(CKEDITOR.NODE_COMMENT),da=function(){function a(a){var b=
a.element,e,f,g;if(!m(b)||b.contains(a.editable)||b.isReadOnly())return null;g=la(a,function(a,b){return!b.equals(a)},function(a,b){return ca(a,!0,b)},b);e=g.upper;f=g.lower;if(Q(a,e,f))return g.set(O,fa);if(e&&b.contains(e))for(;!e.getParent().equals(b);)e=e.getParent();else e=b.getFirst(function(b){return c(a,b)});if(f&&b.contains(f))for(;!f.getParent().equals(b);)f=f.getParent();else f=b.getLast(function(b){return c(a,b)});if(!e||!f)return null;o(a,e);o(a,f);if(!(a.mouse.y>e.size.top&&a.mouse.y<
f.size.bottom))return null;for(var b=Number.MAX_VALUE,i,h,j,l;f&&!f.equals(e)&&(h=e.getNext(a.isRelevant));)i=Math.abs(ga(a,e,h)-a.mouse.y),i<b&&(b=i,j=e,l=h),e=h,o(a,e);if(!j||!l||!(a.mouse.y>j.size.top&&a.mouse.y<l.size.bottom))return null;g.upper=j;g.lower=l;return g.set(O,fa)}function c(a,b){return!(b&&b.type==CKEDITOR.NODE_TEXT||A(b)||p(b)||v(a,b)||b.type==CKEDITOR.NODE_ELEMENT&&b.$&&b.is("br"))}return function(c){var b=a(c),e;if(e=b){e=b.upper;var f=b.lower;e=!e||!f||p(f)||p(e)||f.equals(e)||
e.equals(f)||f.contains(e)||e.contains(f)?!1:G(c,e)&&G(c,f)&&Q(c,e,f)?!0:!1}return e?b:null}}(),t=["top","left","right","bottom"]})();CKEDITOR.config.magicline_keystrokePrevious=CKEDITOR.CTRL+CKEDITOR.SHIFT+51;CKEDITOR.config.magicline_keystrokeNext=CKEDITOR.CTRL+CKEDITOR.SHIFT+52;(function(){function l(a){if(!a||a.type!=CKEDITOR.NODE_ELEMENT||"form"!=a.getName())return[];for(var e=[],f=["style","className"],b=0;b<f.length;b++){var d=a.$.elements.namedItem(f[b]);d&&(d=new CKEDITOR.dom.element(d),e.push([d,d.nextSibling]),d.remove())}return e}function o(a,e){if(a&&!(a.type!=CKEDITOR.NODE_ELEMENT||"form"!=a.getName())&&0<e.length)for(var f=e.length-1;0<=f;f--){var b=e[f][0],d=e[f][1];d?b.insertBefore(d):b.appendTo(a)}}function n(a,e){var f=l(a),b={},d=a.$;e||(b["class"]=d.className||
"",d.className="");b.inline=d.style.cssText||"";e||(d.style.cssText="position: static; overflow: visible");o(f);return b}function p(a,e){var f=l(a),b=a.$;"class"in e&&(b.className=e["class"]);"inline"in e&&(b.style.cssText=e.inline);o(f)}function q(a){if(!a.editable().isInline()){var e=CKEDITOR.instances,f;for(f in e){var b=e[f];"wysiwyg"==b.mode&&!b.readOnly&&(b=b.document.getBody(),b.setAttribute("contentEditable",!1),b.setAttribute("contentEditable",!0))}a.editable().hasFocus&&(a.toolbox.focus(),
a.focus())}}CKEDITOR.plugins.add("maximize",{init:function(a){function e(){var b=d.getViewPaneSize();a.resize(b.width,b.height,null,!0)}if(a.elementMode!=CKEDITOR.ELEMENT_MODE_INLINE){var f=a.lang,b=CKEDITOR.document,d=b.getWindow(),j,k,m,l=CKEDITOR.TRISTATE_OFF;a.addCommand("maximize",{modes:{wysiwyg:!CKEDITOR.env.iOS,source:!CKEDITOR.env.iOS},readOnly:1,editorFocus:!1,exec:function(){var h=a.container.getFirst(function(a){return a.type==CKEDITOR.NODE_ELEMENT&&a.hasClass("cke_inner")}),g=a.ui.space("contents");
if("wysiwyg"==a.mode){var c=a.getSelection();j=c&&c.getRanges();k=d.getScrollPosition()}else{var i=a.editable().$;j=!CKEDITOR.env.ie&&[i.selectionStart,i.selectionEnd];k=[i.scrollLeft,i.scrollTop]}if(this.state==CKEDITOR.TRISTATE_OFF){d.on("resize",e);m=d.getScrollPosition();for(c=a.container;c=c.getParent();)c.setCustomData("maximize_saved_styles",n(c)),c.setStyle("z-index",a.config.baseFloatZIndex-5);g.setCustomData("maximize_saved_styles",n(g,!0));h.setCustomData("maximize_saved_styles",n(h,!0));
g={overflow:CKEDITOR.env.webkit?"":"hidden",width:0,height:0};b.getDocumentElement().setStyles(g);!CKEDITOR.env.gecko&&b.getDocumentElement().setStyle("position","fixed");(!CKEDITOR.env.gecko||!CKEDITOR.env.quirks)&&b.getBody().setStyles(g);CKEDITOR.env.ie?setTimeout(function(){d.$.scrollTo(0,0)},0):d.$.scrollTo(0,0);h.setStyle("position",CKEDITOR.env.gecko&&CKEDITOR.env.quirks?"fixed":"absolute");h.$.offsetLeft;h.setStyles({"z-index":a.config.baseFloatZIndex-5,left:"0px",top:"0px"});h.addClass("cke_maximized");
e();g=h.getDocumentPosition();h.setStyles({left:-1*g.x+"px",top:-1*g.y+"px"});CKEDITOR.env.gecko&&q(a)}else if(this.state==CKEDITOR.TRISTATE_ON){d.removeListener("resize",e);g=[g,h];for(c=0;c<g.length;c++)p(g[c],g[c].getCustomData("maximize_saved_styles")),g[c].removeCustomData("maximize_saved_styles");for(c=a.container;c=c.getParent();)p(c,c.getCustomData("maximize_saved_styles")),c.removeCustomData("maximize_saved_styles");CKEDITOR.env.ie?setTimeout(function(){d.$.scrollTo(m.x,m.y)},0):d.$.scrollTo(m.x,
m.y);h.removeClass("cke_maximized");CKEDITOR.env.webkit&&(h.setStyle("display","inline"),setTimeout(function(){h.setStyle("display","block")},0));a.fire("resize")}this.toggleState();if(c=this.uiItems[0])g=this.state==CKEDITOR.TRISTATE_OFF?f.maximize.maximize:f.maximize.minimize,c=CKEDITOR.document.getById(c._.id),c.getChild(1).setHtml(g),c.setAttribute("title",g),c.setAttribute("href",'javascript:void("'+g+'");');"wysiwyg"==a.mode?j?(CKEDITOR.env.gecko&&q(a),a.getSelection().selectRanges(j),(i=a.getSelection().getStartElement())&&
i.scrollIntoView(!0)):d.$.scrollTo(k.x,k.y):(j&&(i.selectionStart=j[0],i.selectionEnd=j[1]),i.scrollLeft=k[0],i.scrollTop=k[1]);j=k=null;l=this.state;a.fire("maximize",this.state)},canUndo:!1});a.ui.addButton&&a.ui.addButton("Maximize",{label:f.maximize.maximize,command:"maximize",toolbar:"tools,10"});a.on("mode",function(){var b=a.getCommand("maximize");b.setState(b.state==CKEDITOR.TRISTATE_DISABLED?CKEDITOR.TRISTATE_DISABLED:l)},null,null,100)}}})})();CKEDITOR.plugins.add("newpage",{init:function(a){a.addCommand("newpage",{modes:{wysiwyg:1,source:1},exec:function(b){var a=this;b.setData(b.config.newpage_html||"",function(){b.focus();setTimeout(function(){b.fire("afterCommandExec",{name:"newpage",command:a});b.selectionChange()},200)})},async:!0});a.ui.addButton&&a.ui.addButton("NewPage",{label:a.lang.newpage.toolbar,command:"newpage",toolbar:"document,20"})}});(function(){function e(a){return{"aria-label":a,"class":"cke_pagebreak",contenteditable:"false","data-cke-display-name":"pagebreak","data-cke-pagebreak":1,style:"page-break-after: always",title:a}}CKEDITOR.plugins.add("pagebreak",{requires:"fakeobjects",onLoad:function(){var a=("background:url("+CKEDITOR.getUrl(this.path+"images/pagebreak.gif")+") no-repeat center center;clear:both;width:100%;border-top:#999 1px dotted;border-bottom:#999 1px dotted;padding:0;height:5px;cursor:default;").replace(/;/g,
" !important;");CKEDITOR.addCss("div.cke_pagebreak{"+a+"}")},init:function(a){a.blockless||(a.addCommand("pagebreak",CKEDITOR.plugins.pagebreakCmd),a.ui.addButton&&a.ui.addButton("PageBreak",{label:a.lang.pagebreak.toolbar,command:"pagebreak",toolbar:"insert,70"}),CKEDITOR.env.webkit&&a.on("contentDom",function(){a.document.on("click",function(b){b=b.data.getTarget();b.is("div")&&b.hasClass("cke_pagebreak")&&a.getSelection().selectElement(b)})}))},afterInit:function(a){function b(f){CKEDITOR.tools.extend(f.attributes,
e(a.lang.pagebreak.alt),!0);f.children.length=0}var c=a.dataProcessor,g=c&&c.dataFilter,c=c&&c.htmlFilter,h=/page-break-after\s*:\s*always/i,i=/display\s*:\s*none/i;c&&c.addRules({attributes:{"class":function(a,b){var c=a.replace("cke_pagebreak","");if(c!=a){var d=CKEDITOR.htmlParser.fragment.fromHtml('<span style="display: none;">&nbsp;</span>').children[0];b.children.length=0;b.add(d);d=b.attributes;delete d["aria-label"];delete d.contenteditable;delete d.title}return c}}},{applyToAll:!0,priority:5});
g&&g.addRules({elements:{div:function(a){if(a.attributes["data-cke-pagebreak"])b(a);else if(h.test(a.attributes.style)){var c=a.children[0];c&&("span"==c.name&&i.test(c.attributes.style))&&b(a)}}}})}});CKEDITOR.plugins.pagebreakCmd={exec:function(a){var b=a.document.createElement("div",{attributes:e(a.lang.pagebreak.alt)});a.insertElement(b)},context:"div",allowedContent:{div:{styles:"!page-break-after"},span:{match:function(a){return(a=a.parent)&&"div"==a.name&&a.styles&&a.styles["page-break-after"]},
styles:"display"}},requiredContent:"div{page-break-after}"}})();(function(){var c={canUndo:!1,async:!0,exec:function(a){a.getClipboardData({title:a.lang.pastetext.title},function(b){b&&a.fire("paste",{type:"text",dataValue:b.dataValue});a.fire("afterCommandExec",{name:"pastetext",command:c,returnValue:!!b})})}};CKEDITOR.plugins.add("pastetext",{requires:"clipboard",init:function(a){a.addCommand("pastetext",c);a.ui.addButton&&a.ui.addButton("PasteText",{label:a.lang.pastetext.button,command:"pastetext",toolbar:"clipboard,40"});if(a.config.forcePasteAsPlainText)a.on("beforePaste",
function(a){"html"!=a.data.type&&(a.data.type="text")});a.on("pasteState",function(b){a.getCommand("pastetext").setState(b.data)})}})})();(function(){function h(a,d,f){var b=CKEDITOR.cleanWord;b?f():(a=CKEDITOR.getUrl(a.config.pasteFromWordCleanupFile||d+"filter/default.js"),CKEDITOR.scriptLoader.load(a,f,null,!0));return!b}function i(a){a.data.type="html"}CKEDITOR.plugins.add("pastefromword",{requires:"clipboard",init:function(a){var d=0,f=this.path;a.addCommand("pastefromword",{canUndo:!1,async:!0,exec:function(a){var e=this;d=1;a.once("beforePaste",i);a.getClipboardData({title:a.lang.pastefromword.title},function(c){c&&a.fire("paste",
{type:"html",dataValue:c.dataValue});a.fire("afterCommandExec",{name:"pastefromword",command:e,returnValue:!!c})})}});a.ui.addButton&&a.ui.addButton("PasteFromWord",{label:a.lang.pastefromword.toolbar,command:"pastefromword",toolbar:"clipboard,50"});a.on("pasteState",function(b){a.getCommand("pastefromword").setState(b.data)});a.on("paste",function(b){var e=b.data,c=e.dataValue;if(c&&(d||/(class=\"?Mso|style=\"[^\"]*\bmso\-|w:WordDocument)/.test(c))){var g=h(a,f,function(){if(g)a.fire("paste",e);
else if(!a.config.pasteFromWordPromptCleanup||d||confirm(a.lang.pastefromword.confirmCleanup))e.dataValue=CKEDITOR.cleanWord(c,a);d=0});g&&b.cancel()}},null,null,3)}})})();(function(){var h,i={modes:{wysiwyg:1,source:1},canUndo:!1,readOnly:1,exec:function(a){var g,b=a.config,f=b.baseHref?'<base href="'+b.baseHref+'"/>':"";if(b.fullPage)g=a.getData().replace(/<head>/,"$&"+f).replace(/[^>]*(?=<\/title>)/,"$& &mdash; "+a.lang.preview.preview);else{var b="<body ",d=a.document&&a.document.getBody();d&&(d.getAttribute("id")&&(b+='id="'+d.getAttribute("id")+'" '),d.getAttribute("class")&&(b+='class="'+d.getAttribute("class")+'" '));g=a.config.docType+'<html dir="'+a.config.contentsLangDirection+
'"><head>'+f+"<title>"+a.lang.preview.preview+"</title>"+CKEDITOR.tools.buildStyleHtml(a.config.contentsCss)+"</head>"+(b+">")+a.getData()+"</body></html>"}f=640;b=420;d=80;try{var c=window.screen,f=Math.round(0.8*c.width),b=Math.round(0.7*c.height),d=Math.round(0.1*c.width)}catch(i){}if(!1===a.fire("contentPreview",a={dataValue:g}))return!1;var c="",e;CKEDITOR.env.ie&&(window._cke_htmlToLoad=a.dataValue,e="javascript:void( (function(){document.open();"+("("+CKEDITOR.tools.fixDomain+")();").replace(/\/\/.*?\n/g,
"").replace(/parent\./g,"window.opener.")+"document.write( window.opener._cke_htmlToLoad );document.close();window.opener._cke_htmlToLoad = null;})() )",c="");CKEDITOR.env.gecko&&(window._cke_htmlToLoad=a.dataValue,c=CKEDITOR.getUrl(h+"preview.html"));c=window.open(c,null,"toolbar=yes,location=no,status=yes,menubar=yes,scrollbars=yes,resizable=yes,width="+f+",height="+b+",left="+d);CKEDITOR.env.ie&&c&&(c.location=e);!CKEDITOR.env.ie&&!CKEDITOR.env.gecko&&(e=c.document,e.open(),e.write(a.dataValue),
e.close());return!0}};CKEDITOR.plugins.add("preview",{init:function(a){a.elementMode!=CKEDITOR.ELEMENT_MODE_INLINE&&(h=this.path,a.addCommand("preview",i),a.ui.addButton&&a.ui.addButton("Preview",{label:a.lang.preview.preview,command:"preview",toolbar:"document,40"}))}})})();CKEDITOR.plugins.add("print",{init:function(a){a.elementMode!=CKEDITOR.ELEMENT_MODE_INLINE&&(a.addCommand("print",CKEDITOR.plugins.print),a.ui.addButton&&a.ui.addButton("Print",{label:a.lang.print.toolbar,command:"print",toolbar:"document,50"}))}});CKEDITOR.plugins.print={exec:function(a){CKEDITOR.env.gecko?a.window.$.print():a.document.$.execCommand("Print")},canUndo:!1,readOnly:1,modes:{wysiwyg:1}};CKEDITOR.plugins.add("removeformat",{init:function(a){a.addCommand("removeFormat",CKEDITOR.plugins.removeformat.commands.removeformat);a.ui.addButton&&a.ui.addButton("RemoveFormat",{label:a.lang.removeformat.toolbar,command:"removeFormat",toolbar:"cleanup,10"})}});
CKEDITOR.plugins.removeformat={commands:{removeformat:{exec:function(a){for(var h=a._.removeFormatRegex||(a._.removeFormatRegex=RegExp("^(?:"+a.config.removeFormatTags.replace(/,/g,"|")+")$","i")),e=a._.removeAttributes||(a._.removeAttributes=a.config.removeFormatAttributes.split(",")),f=CKEDITOR.plugins.removeformat.filter,k=a.getSelection().getRanges(),l=k.createIterator(),m=function(a){return a.type==CKEDITOR.NODE_ELEMENT},c;c=l.getNextRange();){c.collapsed||c.enlarge(CKEDITOR.ENLARGE_ELEMENT);
var j=c.createBookmark(),b=j.startNode,d=j.endNode,i=function(b){for(var c=a.elementPath(b),e=c.elements,d=1,g;(g=e[d])&&!g.equals(c.block)&&!g.equals(c.blockLimit);d++)h.test(g.getName())&&f(a,g)&&b.breakParent(g)};i(b);if(d){i(d);for(b=b.getNextSourceNode(!0,CKEDITOR.NODE_ELEMENT);b&&!b.equals(d);)if(b.isReadOnly()){if(b.getPosition(d)&CKEDITOR.POSITION_CONTAINS)break;b=b.getNext(m)}else i=b.getNextSourceNode(!1,CKEDITOR.NODE_ELEMENT),!("img"==b.getName()&&b.data("cke-realelement"))&&f(a,b)&&(h.test(b.getName())?
b.remove(1):(b.removeAttributes(e),a.fire("removeFormatCleanup",b))),b=i}c.moveToBookmark(j)}a.forceNextSelectionCheck();a.getSelection().selectRanges(k)}}},filter:function(a,h){for(var e=a._.removeFormatFilters||[],f=0;f<e.length;f++)if(!1===e[f](h))return!1;return!0}};CKEDITOR.editor.prototype.addRemoveFormatFilter=function(a){this._.removeFormatFilters||(this._.removeFormatFilters=[]);this._.removeFormatFilters.push(a)};CKEDITOR.config.removeFormatTags="b,big,cite,code,del,dfn,em,font,i,ins,kbd,q,s,samp,small,span,strike,strong,sub,sup,tt,u,var";
CKEDITOR.config.removeFormatAttributes="class,style,lang,width,height,align,hspace,valign";(function(){var b={readOnly:1,exec:function(a){if(a.fire("save")&&(a=a.element.$.form))try{a.submit()}catch(b){a.submit.click&&a.submit.click()}}};CKEDITOR.plugins.add("save",{init:function(a){a.elementMode==CKEDITOR.ELEMENT_MODE_REPLACE&&(a.addCommand("save",b).modes={wysiwyg:!!a.element.$.form},a.ui.addButton&&a.ui.addButton("Save",{label:a.lang.save.toolbar,command:"save",toolbar:"document,10"}))}})})();(function(){CKEDITOR.plugins.add("selectall",{init:function(b){b.addCommand("selectAll",{modes:{wysiwyg:1,source:1},exec:function(a){var b=a.editable();if(b.is("textarea"))a=b.$,CKEDITOR.env.ie?a.createTextRange().execCommand("SelectAll"):(a.selectionStart=0,a.selectionEnd=a.value.length),a.focus();else{if(b.is("body"))a.document.$.execCommand("SelectAll",!1,null);else{var c=a.createRange();c.selectNodeContents(b);c.select()}a.forceNextSelectionCheck();a.selectionChange()}},canUndo:!1});b.ui.addButton&&
b.ui.addButton("SelectAll",{label:b.lang.selectall.toolbar,command:"selectAll",toolbar:"selection,10"})}})})();(function(){var i={readOnly:1,preserveState:!0,editorFocus:!1,exec:function(a){this.toggleState();this.refresh(a)},refresh:function(a){if(a.document){var c=this.state==CKEDITOR.TRISTATE_ON&&(a.elementMode!=CKEDITOR.ELEMENT_MODE_INLINE||a.focusManager.hasFocus)?"attachClass":"removeClass";a.editable()[c]("cke_show_blocks")}}};CKEDITOR.plugins.add("showblocks",{onLoad:function(){var a="p div pre address blockquote h1 h2 h3 h4 h5 h6".split(" "),c,b,e,f,i=CKEDITOR.getUrl(this.path),j=!(CKEDITOR.env.ie&&
9>CKEDITOR.env.version),g=j?":not([contenteditable=false]):not(.cke_show_blocks_off)":"",d,h;for(c=b=e=f="";d=a.pop();)h=a.length?",":"",c+=".cke_show_blocks "+d+g+h,e+=".cke_show_blocks.cke_contents_ltr "+d+g+h,f+=".cke_show_blocks.cke_contents_rtl "+d+g+h,b+=".cke_show_blocks "+d+g+"{background-image:url("+CKEDITOR.getUrl(i+"images/block_"+d+".png")+")}";CKEDITOR.addCss((c+"{background-repeat:no-repeat;border:1px dotted gray;padding-top:8px}").concat(b,e+"{background-position:top left;padding-left:8px}",
f+"{background-position:top right;padding-right:8px}"));j||CKEDITOR.addCss(".cke_show_blocks [contenteditable=false],.cke_show_blocks .cke_show_blocks_off{border:none;padding-top:0;background-image:none}.cke_show_blocks.cke_contents_rtl [contenteditable=false],.cke_show_blocks.cke_contents_rtl .cke_show_blocks_off{padding-right:0}.cke_show_blocks.cke_contents_ltr [contenteditable=false],.cke_show_blocks.cke_contents_ltr .cke_show_blocks_off{padding-left:0}")},init:function(a){function c(){b.refresh(a)}
if(!a.blockless){var b=a.addCommand("showblocks",i);b.canUndo=!1;a.config.startupOutlineBlocks&&b.setState(CKEDITOR.TRISTATE_ON);a.ui.addButton&&a.ui.addButton("ShowBlocks",{label:a.lang.showblocks.toolbar,command:"showblocks",toolbar:"tools,20"});a.on("mode",function(){b.state!=CKEDITOR.TRISTATE_DISABLED&&b.refresh(a)});a.elementMode==CKEDITOR.ELEMENT_MODE_INLINE&&(a.on("focus",c),a.on("blur",c));a.on("contentDom",function(){b.state!=CKEDITOR.TRISTATE_DISABLED&&b.refresh(a)})}}})})();(function(){var f={preserveState:!0,editorFocus:!1,readOnly:1,exec:function(a){this.toggleState();this.refresh(a)},refresh:function(a){if(a.document){var b=this.state==CKEDITOR.TRISTATE_ON?"attachClass":"removeClass";a.editable()[b]("cke_show_borders")}}};CKEDITOR.plugins.add("showborders",{modes:{wysiwyg:1},onLoad:function(){var a;a=(CKEDITOR.env.ie6Compat?[".%1 table.%2,",".%1 table.%2 td, .%1 table.%2 th","{","border : #d3d3d3 1px dotted","}"]:".%1 table.%2,;.%1 table.%2 > tr > td, .%1 table.%2 > tr > th,;.%1 table.%2 > tbody > tr > td, .%1 table.%2 > tbody > tr > th,;.%1 table.%2 > thead > tr > td, .%1 table.%2 > thead > tr > th,;.%1 table.%2 > tfoot > tr > td, .%1 table.%2 > tfoot > tr > th;{;border : #d3d3d3 1px dotted;}".split(";")).join("").replace(/%2/g,
"cke_show_border").replace(/%1/g,"cke_show_borders ");CKEDITOR.addCss(a)},init:function(a){var b=a.addCommand("showborders",f);b.canUndo=!1;!1!==a.config.startupShowBorders&&b.setState(CKEDITOR.TRISTATE_ON);a.on("mode",function(){b.state!=CKEDITOR.TRISTATE_DISABLED&&b.refresh(a)},null,null,100);a.on("contentDom",function(){b.state!=CKEDITOR.TRISTATE_DISABLED&&b.refresh(a)});a.on("removeFormatCleanup",function(d){d=d.data;a.getCommand("showborders").state==CKEDITOR.TRISTATE_ON&&(d.is("table")&&(!d.hasAttribute("border")||
0>=parseInt(d.getAttribute("border"),10)))&&d.addClass("cke_show_border")})},afterInit:function(a){var b=a.dataProcessor,a=b&&b.dataFilter,b=b&&b.htmlFilter;a&&a.addRules({elements:{table:function(a){var a=a.attributes,b=a["class"],c=parseInt(a.border,10);if((!c||0>=c)&&(!b||-1==b.indexOf("cke_show_border")))a["class"]=(b||"")+" cke_show_border"}}});b&&b.addRules({elements:{table:function(a){var a=a.attributes,b=a["class"];b&&(a["class"]=b.replace("cke_show_border","").replace(/\s{2}/," ").replace(/^\s+|\s+$/,
""))}}})}});CKEDITOR.on("dialogDefinition",function(a){var b=a.data.name;if("table"==b||"tableProperties"==b)if(a=a.data.definition,b=a.getContents("info").get("txtBorder"),b.commit=CKEDITOR.tools.override(b.commit,function(a){return function(b,c){a.apply(this,arguments);var e=parseInt(this.getValue(),10);c[!e||0>=e?"addClass":"removeClass"]("cke_show_border")}}),a=(a=a.getContents("advanced"))&&a.get("advCSSClasses"))a.setup=CKEDITOR.tools.override(a.setup,function(a){return function(){a.apply(this,
arguments);this.setValue(this.getValue().replace(/cke_show_border/,""))}}),a.commit=CKEDITOR.tools.override(a.commit,function(a){return function(b,c){a.apply(this,arguments);parseInt(c.getAttribute("border"),10)||c.addClass("cke_show_border")}})})})();(function(){CKEDITOR.plugins.add("sourcearea",{init:function(a){function d(){var a=e&&this.equals(CKEDITOR.document.getActive());this.hide();this.setStyle("height",this.getParent().$.clientHeight+"px");this.setStyle("width",this.getParent().$.clientWidth+"px");this.show();a&&this.focus()}if(a.elementMode!=CKEDITOR.ELEMENT_MODE_INLINE){var f=CKEDITOR.plugins.sourcearea;a.addMode("source",function(e){var b=a.ui.space("contents").getDocument().createElement("textarea");b.setStyles(CKEDITOR.tools.extend({width:CKEDITOR.env.ie7Compat?
"99%":"100%",height:"100%",resize:"none",outline:"none","text-align":"left"},CKEDITOR.tools.cssVendorPrefix("tab-size",a.config.sourceAreaTabSize||4)));b.setAttribute("dir","ltr");b.addClass("cke_source cke_reset cke_enable_context_menu");a.ui.space("contents").append(b);b=a.editable(new c(a,b));b.setData(a.getData(1));CKEDITOR.env.ie&&(b.attachListener(a,"resize",d,b),b.attachListener(CKEDITOR.document.getWindow(),"resize",d,b),CKEDITOR.tools.setTimeout(d,0,b));a.fire("ariaWidget",this);e()});a.addCommand("source",
f.commands.source);a.ui.addButton&&a.ui.addButton("Source",{label:a.lang.sourcearea.toolbar,command:"source",toolbar:"mode,10"});a.on("mode",function(){a.getCommand("source").setState("source"==a.mode?CKEDITOR.TRISTATE_ON:CKEDITOR.TRISTATE_OFF)});var e=CKEDITOR.env.ie&&9==CKEDITOR.env.version}}});var c=CKEDITOR.tools.createClass({base:CKEDITOR.editable,proto:{setData:function(a){this.setValue(a);this.status="ready";this.editor.fire("dataReady")},getData:function(){return this.getValue()},insertHtml:function(){},
insertElement:function(){},insertText:function(){},setReadOnly:function(a){this[(a?"set":"remove")+"Attribute"]("readOnly","readonly")},detach:function(){c.baseProto.detach.call(this);this.clearCustomData();this.remove()}}})})();CKEDITOR.plugins.sourcearea={commands:{source:{modes:{wysiwyg:1,source:1},editorFocus:!1,readOnly:1,exec:function(c){"wysiwyg"==c.mode&&c.fire("saveSnapshot");c.getCommand("source").setState(CKEDITOR.TRISTATE_DISABLED);c.setMode("source"==c.mode?"wysiwyg":"source")},canUndo:!1}}};CKEDITOR.plugins.add("specialchar",{availableLangs:{af:1,ar:1,bg:1,ca:1,cs:1,cy:1,da:1,de:1,el:1,en:1,"en-gb":1,eo:1,es:1,et:1,fa:1,fi:1,fr:1,"fr-ca":1,gl:1,he:1,hr:1,hu:1,id:1,it:1,ja:1,km:1,ku:1,lt:1,lv:1,nb:1,nl:1,no:1,pl:1,pt:1,"pt-br":1,ru:1,si:1,sk:1,sl:1,sq:1,sv:1,th:1,tr:1,tt:1,ug:1,uk:1,vi:1,zh:1,"zh-cn":1},requires:"dialog",init:function(a){var c=this;CKEDITOR.dialog.add("specialchar",this.path+"dialogs/specialchar.js");a.addCommand("specialchar",{exec:function(){var b=a.langCode,b=c.availableLangs[b]?
b:c.availableLangs[b.replace(/-.*/,"")]?b.replace(/-.*/,""):"en";CKEDITOR.scriptLoader.load(CKEDITOR.getUrl(c.path+"dialogs/lang/"+b+".js"),function(){CKEDITOR.tools.extend(a.lang.specialchar,c.langEntries[b]);a.openDialog("specialchar")})},modes:{wysiwyg:1},canUndo:!1});a.ui.addButton&&a.ui.addButton("SpecialChar",{label:a.lang.specialchar.toolbar,command:"specialchar",toolbar:"insert,50"})}});CKEDITOR.config.specialChars="! &quot; # $ % &amp; ' ( ) * + - . / 0 1 2 3 4 5 6 7 8 9 : ; &lt; = &gt; ? @ A B C D E F G H I J K L M N O P Q R S T U V W X Y Z [ ] ^ _ ` a b c d e f g h i j k l m n o p q r s t u v w x y z { | } ~ &euro; &lsquo; &rsquo; &ldquo; &rdquo; &ndash; &mdash; &iexcl; &cent; &pound; &curren; &yen; &brvbar; &sect; &uml; &copy; &ordf; &laquo; &not; &reg; &macr; &deg; &sup2; &sup3; &acute; &micro; &para; &middot; &cedil; &sup1; &ordm; &raquo; &frac14; &frac12; &frac34; &iquest; &Agrave; &Aacute; &Acirc; &Atilde; &Auml; &Aring; &AElig; &Ccedil; &Egrave; &Eacute; &Ecirc; &Euml; &Igrave; &Iacute; &Icirc; &Iuml; &ETH; &Ntilde; &Ograve; &Oacute; &Ocirc; &Otilde; &Ouml; &times; &Oslash; &Ugrave; &Uacute; &Ucirc; &Uuml; &Yacute; &THORN; &szlig; &agrave; &aacute; &acirc; &atilde; &auml; &aring; &aelig; &ccedil; &egrave; &eacute; &ecirc; &euml; &igrave; &iacute; &icirc; &iuml; &eth; &ntilde; &ograve; &oacute; &ocirc; &otilde; &ouml; &divide; &oslash; &ugrave; &uacute; &ucirc; &uuml; &yacute; &thorn; &yuml; &OElig; &oelig; &#372; &#374 &#373 &#375; &sbquo; &#8219; &bdquo; &hellip; &trade; &#9658; &bull; &rarr; &rArr; &hArr; &diams; &asymp;".split(" ");CKEDITOR.plugins.add("scayt",{requires:"menubutton,dialog",tabToOpen:null,dialogName:"scaytDialog",init:function(a){var c=this,d=CKEDITOR.plugins.scayt;this.bindEvents(a);this.parseConfig(a);this.addRule(a);CKEDITOR.dialog.add(this.dialogName,CKEDITOR.getUrl(this.path+"dialogs/options.js"));this.addMenuItems(a);var b=a.lang.scayt,e=CKEDITOR.env;a.ui.add("Scayt",CKEDITOR.UI_MENUBUTTON,{label:b.text_title,title:a.plugins.wsc?a.lang.wsc.title:b.text_title,modes:{wysiwyg:!(e.ie&&(8>e.version||e.quirks))},
toolbar:"spellchecker,20",refresh:function(){var b=a.ui.instances.Scayt.getState();a.scayt&&(b=d.state[a.name]?CKEDITOR.TRISTATE_ON:CKEDITOR.TRISTATE_OFF);a.fire("scaytButtonState",b)},onRender:function(){var d=this;a.on("scaytButtonState",function(a){void 0!==typeof a.data&&d.setState(a.data)})},onMenu:function(){var b=a.scayt;a.getMenuItem("scaytToggle").label=a.lang.scayt[b&&d.state[a.name]?"btn_disable":"btn_enable"];b={scaytToggle:CKEDITOR.TRISTATE_OFF,scaytOptions:b?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED,
scaytLangs:b?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED,scaytDict:b?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED,scaytAbout:b?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED,WSC:a.plugins.wsc?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED};a.config.scayt_uiTabs[0]||delete b.scaytOptions;a.config.scayt_uiTabs[1]||delete b.scaytLangs;a.config.scayt_uiTabs[2]||delete b.scaytDict;return b}});a.contextMenu&&a.addMenuItems&&(a.contextMenu.addListener(function(){var d=a.scayt,b;if(d){var e=
d.getSelectionNode();if(e=e?e.getAttribute(d.getNodeAttribute()):e)b=c.menuGenerator(a,e,c),d.showBanner("."+a.contextMenu._.definition.panel.className.split(" ").join(" ."))}return b}),a.contextMenu._.onHide=CKEDITOR.tools.override(a.contextMenu._.onHide,function(d){return function(){var b=a.scayt;b&&b.hideBanner();return d.apply(this)}}))},addMenuItems:function(a){var c=this,d=CKEDITOR.plugins.scayt;a.addMenuGroup("scaytButton");var b=a.config.scayt_contextMenuItemsOrder.split("|");if(b&&b.length)for(var e=
0;e<b.length;e++)a.addMenuGroup("scayt_"+b[e],e-10);b={scaytToggle:{label:a.lang.scayt.btn_enable,group:"scaytButton",onClick:function(){var b=a.scayt;d.state[a.name]=!d.state[a.name];!0===d.state[a.name]?b||d.createScayt(a):b&&d.destroy(a)}},scaytAbout:{label:a.lang.scayt.btn_about,group:"scaytButton",onClick:function(){a.scayt.tabToOpen="about";a.lockSelection();a.openDialog(c.dialogName)}},scaytOptions:{label:a.lang.scayt.btn_options,group:"scaytButton",onClick:function(){a.scayt.tabToOpen="options";
a.lockSelection();a.openDialog(c.dialogName)}},scaytLangs:{label:a.lang.scayt.btn_langs,group:"scaytButton",onClick:function(){a.scayt.tabToOpen="langs";a.lockSelection();a.openDialog(c.dialogName)}},scaytDict:{label:a.lang.scayt.btn_dictionaries,group:"scaytButton",onClick:function(){a.scayt.tabToOpen="dictionaries";a.lockSelection();a.openDialog(c.dialogName)}}};a.plugins.wsc&&(b.WSC={label:a.lang.wsc.toolbar,group:"scaytButton",onClick:function(){var d=CKEDITOR.plugins.scayt,b=a.scayt,c=a.elementMode==
CKEDITOR.ELEMENT_MODE_INLINE?a.container.getText():a.document.getBody().getText();(c=c.replace(/\s/g,""))?(b&&(d.state[a.name]&&b.setMarkupPaused)&&b.setMarkupPaused(!0),a.lockSelection(),a.execCommand("checkspell")):alert("Nothing to check!")}});a.addMenuItems(b)},bindEvents:function(a){function c(){var d=a.scayt;d&&(d.removeMarkupInSelectionNode(),d.fire("startSpellCheck"))}var d=CKEDITOR.plugins.scayt,b=a.elementMode==CKEDITOR.ELEMENT_MODE_INLINE;CKEDITOR.on("dialogDefinition",function(a){if("scaytDialog"===
a.data.name)a.data.definition.dialog.on("cancel",function(){return!1},this,null,-1)});var e=function(){a.scayt&&d.destroy(a)},g=function(){d.state[a.name]&&!a.readOnly&&d.createScayt(a)},f=function(){var d=a.editable();d.attachListener(d,"focus",function(){var d=CKEDITOR.plugins.scayt&&CKEDITOR.plugins.scayt.state[a.name]&&a.scayt,c,e;if((b||d)&&a._.savedSelection)for(var d=a._.savedSelection.getSelectedElement(),d=!d&&a._.savedSelection.getRanges(),i=0;i<d.length;i++)e=d[i],c=e.startContainer.getText().length,
(c<e.startOffset||c<e.endOffset)&&a.unlockSelection(!1)},this,null,-10)},h=function(){b?(a.on("blur",e),a.on("focus",g),a.focusManager.hasFocus&&g()):g();f()};a.on("contentDom",h);a.on("beforeCommandExec",function(b){var c;if(b.data.name in d.options.disablingCommandExec&&"wysiwyg"==a.mode){if(c=a.scayt)d.destroy(a),a.fire("scaytButtonState",CKEDITOR.TRISTATE_DISABLED)}else if("bold"===b.data.name||"italic"===b.data.name||"underline"===b.data.name||"strike"===b.data.name||"subscript"===b.data.name||
"superscript"===b.data.name)if(c=a.scayt)c.removeMarkupInSelectionNode(),setTimeout(function(){c.fire("startSpellCheck")},0)});a.on("beforeSetMode",function(b){if("source"==b.data){if(b=a.scayt)d.destroy(a),a.fire("scaytButtonState",CKEDITOR.TRISTATE_DISABLED);a.document&&(a.document.getBody().removeAttribute("_jquid"),a.document.getBody().removeAttribute("dir"))}});a.on("afterCommandExec",function(d){var b;if("wysiwyg"==a.mode&&("undo"==d.data.name||"redo"==d.data.name))(b=a.scayt)&&setTimeout(function(){b.fire("startSpellCheck")},
250)});a.on("readOnly",function(b){var c;b&&(c=a.scayt,!0===b.editor.readOnly?c&&c.fire("removeMarkupInDocument",{}):c?c.fire("startSpellCheck"):"wysiwyg"==b.editor.mode&&!0===d.state[b.editor.name]&&(d.createScayt(a),b.editor.fire("scaytButtonState",CKEDITOR.TRISTATE_ON)))});a.on("beforeDestroy",e);a.on("setData",function(){e();a.elementMode==CKEDITOR.ELEMENT_MODE_INLINE&&h()},this,null,50);a.on("insertElement",function(){CKEDITOR.env.ie?setTimeout(function(){c()},50):c()},this,null,50);a.on("insertHtml",
function(){c()},this,null,50);a.on("insertText",function(){c()},this,null,50);a.on("scaytDialogShown",function(d){d.data.selectPage(a.scayt.tabToOpen)})},parseConfig:function(a){var c=CKEDITOR.plugins.scayt;c.replaceOldOptionsNames(a.config);"boolean"!==typeof a.config.scayt_autoStartup&&(a.config.scayt_autoStartup=!1);c.state[a.name]=a.config.scayt_autoStartup;a.config.scayt_contextCommands||(a.config.scayt_contextCommands="ignore|ignoreall|add");a.config.scayt_contextMenuItemsOrder||(a.config.scayt_contextMenuItemsOrder=
"suggest|moresuggest|control");a.config.scayt_sLang||(a.config.scayt_sLang="en_US");if(void 0===a.config.scayt_maxSuggestions||"number"!=typeof a.config.scayt_maxSuggestions||0>a.config.scayt_maxSuggestions)a.config.scayt_maxSuggestions=5;if(void 0===a.config.scayt_customDictionaryIds||"string"!==typeof a.config.scayt_customDictionaryIds)a.config.scayt_customDictionaryIds="";if(void 0===a.config.scayt_userDictionaryName||"string"!==typeof a.config.scayt_userDictionaryName)a.config.scayt_userDictionaryName=
null;if("string"===typeof a.config.scayt_uiTabs&&3===a.config.scayt_uiTabs.split(",").length){var d=[],b=[];a.config.scayt_uiTabs=a.config.scayt_uiTabs.split(",");CKEDITOR.tools.search(a.config.scayt_uiTabs,function(a){if(Number(a)===1||Number(a)===0){b.push(true);d.push(Number(a))}else b.push(false)});a.config.scayt_uiTabs=null===CKEDITOR.tools.search(b,!1)?d:[1,1,1]}else a.config.scayt_uiTabs=[1,1,1];"string"!=typeof a.config.scayt_serviceProtocol&&(a.config.scayt_serviceProtocol=null);"string"!=
typeof a.config.scayt_serviceHost&&(a.config.scayt_serviceHost=null);"string"!=typeof a.config.scayt_servicePort&&(a.config.scayt_servicePort=null);"string"!=typeof a.config.scayt_servicePath&&(a.config.scayt_servicePath=null);a.config.scayt_moreSuggestions||(a.config.scayt_moreSuggestions="on");"string"!==typeof a.config.scayt_customerId&&(a.config.scayt_customerId="1:WvF0D4-UtPqN1-43nkD4-NKvUm2-daQqk3-LmNiI-z7Ysb4-mwry24-T8YrS3-Q2tpq2");"string"!==typeof a.config.scayt_srcUrl&&(c=document.location.protocol,
c=-1!=c.search(/https?:/)?c:"http:",a.config.scayt_srcUrl=c+"//svc.webspellchecker.net/spellcheck31/lf/scayt3/ckscayt/ckscayt.js");"boolean"!==typeof CKEDITOR.config.scayt_handleCheckDirty&&(CKEDITOR.config.scayt_handleCheckDirty=!0);"boolean"!==typeof CKEDITOR.config.scayt_handleUndoRedo&&(CKEDITOR.config.scayt_handleUndoRedo=!0);if(a.config.scayt_disableOptionsStorage){var c=CKEDITOR.tools.isArray(a.config.scayt_disableOptionsStorage)?a.config.scayt_disableOptionsStorage:"string"===typeof a.config.scayt_disableOptionsStorage?
[a.config.scayt_disableOptionsStorage]:void 0,e="all options lang ignore-all-caps-words ignore-domain-names ignore-words-with-mixed-cases ignore-words-with-numbers".split(" "),g=["lang","ignore-all-caps-words","ignore-domain-names","ignore-words-with-mixed-cases","ignore-words-with-numbers"],f=CKEDITOR.tools.search,h=CKEDITOR.tools.indexOf;a.config.scayt_disableOptionsStorage=function(a){for(var d=[],b=0;b<a.length;b++){var c=a[b],j=!!f(a,"options");if(!f(e,c)||j&&f(g,function(a){if(a==="lang")return false}))return;
f(g,c)&&g.splice(h(g,c),1);if(c==="all"||j&&f(a,"lang"))return[];c==="options"&&(g=["lang"])}return d=d.concat(g)}(c)}},addRule:function(a){var c=a.dataProcessor,d=c&&c.htmlFilter,b=a._.elementsPath&&a._.elementsPath.filters,c=c&&c.dataFilter,e=a.addRemoveFormatFilter,g=function(d){var b=CKEDITOR.plugins.scayt;if(a.scayt&&d.hasAttribute(b.options.data_attribute_name))return!1},f=function(d){var b=CKEDITOR.plugins.scayt,c=!0;a.scayt&&d.hasAttribute(b.options.data_attribute_name)&&(c=!1);return c};
b&&b.push(g);c&&c.addRules({elements:{span:function(d){var b=CKEDITOR.plugins.scayt;b&&(b.state[a.name]&&d.classes&&CKEDITOR.tools.search(d.classes,b.options.misspelled_word_class))&&(d.classes&&d.parent.type===CKEDITOR.NODE_DOCUMENT_FRAGMENT?(delete d.attributes.style,delete d.name):delete d.classes[CKEDITOR.tools.indexOf(d.classes,b.options.misspelled_word_class)]);return d}}});d&&d.addRules({elements:{span:function(d){var b=CKEDITOR.plugins.scayt;b&&(b.state[a.name]&&d.hasClass(b.options.misspelled_word_class)&&
d.attributes[b.options.data_attribute_name])&&(d.removeClass(b.options.misspelled_word_class),delete d.attributes[b.options.data_attribute_name],delete d.name);return d}}});e&&e.call(a,f)},scaytMenuDefinition:function(a){var c=this,a=a.scayt;return{scayt_ignore:{label:a.getLocal("btn_ignore"),group:"scayt_control",order:1,exec:function(a){a.scayt.ignoreWord()}},scayt_ignoreall:{label:a.getLocal("btn_ignoreAll"),group:"scayt_control",order:2,exec:function(a){a.scayt.ignoreAllWords()}},scayt_add:{label:a.getLocal("btn_addWord"),
group:"scayt_control",order:3,exec:function(a){var b=a.scayt;setTimeout(function(){b.addWordToUserDictionary()},10)}},option:{label:a.getLocal("btn_options"),group:"scayt_control",order:4,exec:function(a){a.scayt.tabToOpen="options";a.lockSelection();a.openDialog(c.dialogName)},verification:function(a){return 1==a.config.scayt_uiTabs[0]?!0:!1}},language:{label:a.getLocal("btn_langs"),group:"scayt_control",order:5,exec:function(a){a.scayt.tabToOpen="langs";a.lockSelection();a.openDialog(c.dialogName)},
verification:function(a){return 1==a.config.scayt_uiTabs[1]?!0:!1}},dictionary:{label:a.getLocal("btn_dictionaries"),group:"scayt_control",order:6,exec:function(a){a.scayt.tabToOpen="dictionaries";a.lockSelection();a.openDialog(c.dialogName)},verification:function(a){return 1==a.config.scayt_uiTabs[2]?!0:!1}},about:{label:a.getLocal("btn_about"),group:"scayt_control",order:7,exec:function(a){a.scayt.tabToOpen="about";a.lockSelection();a.openDialog(c.dialogName)}}}},buildSuggestionMenuItems:function(a,
c){var d={},b={},e=a.scayt;if(0<c.length&&"no_any_suggestions"!==c[0])for(var g=0;g<c.length;g++){var f="scayt_suggest_"+CKEDITOR.plugins.scayt.suggestions[g].replace(" ","_");a.addCommand(f,this.createCommand(CKEDITOR.plugins.scayt.suggestions[g]));g<a.config.scayt_maxSuggestions?(a.addMenuItem(f,{label:c[g],command:f,group:"scayt_suggest",order:g+1}),d[f]=CKEDITOR.TRISTATE_OFF):(a.addMenuItem(f,{label:c[g],command:f,group:"scayt_moresuggest",order:g+1}),b[f]=CKEDITOR.TRISTATE_OFF,"on"===a.config.scayt_moreSuggestions&&
(a.addMenuItem("scayt_moresuggest",{label:e.getLocal("btn_moreSuggestions"),group:"scayt_moresuggest",order:10,getItems:function(){return b}}),d.scayt_moresuggest=CKEDITOR.TRISTATE_OFF))}else d.no_scayt_suggest=CKEDITOR.TRISTATE_DISABLED,a.addCommand("no_scayt_suggest",{exec:function(){}}),a.addMenuItem("no_scayt_suggest",{label:e.getLocal("btn_noSuggestions")||"no_scayt_suggest",command:"no_scayt_suggest",group:"scayt_suggest",order:0});return d},menuGenerator:function(a,c){var d=a.scayt,b=this.scaytMenuDefinition(a),
e={},g=a.config.scayt_contextCommands.split("|");d.fire("getSuggestionsList",{lang:d.getLang(),word:c});e=this.buildSuggestionMenuItems(a,CKEDITOR.plugins.scayt.suggestions);if("off"==a.config.scayt_contextCommands)return e;for(var f in b)-1==CKEDITOR.tools.indexOf(g,f.replace("scayt_",""))&&"all"!=a.config.scayt_contextCommands||(e[f]=CKEDITOR.TRISTATE_OFF,"function"===typeof b[f].verification&&!b[f].verification(a)&&delete e[f],a.addCommand(f,{exec:b[f].exec}),a.addMenuItem(f,{label:a.lang.scayt[b[f].label]||
b[f].label,command:f,group:b[f].group,order:b[f].order}));return e},createCommand:function(a){return{exec:function(c){c.scayt.replaceSelectionNode({word:a})}}}});
CKEDITOR.plugins.scayt={state:{},suggestions:[],loadingHelper:{loadOrder:[]},isLoading:!1,options:{disablingCommandExec:{source:!0,newpage:!0,templates:!0},data_attribute_name:"data-scayt-word",misspelled_word_class:"scayt-misspell-word"},backCompatibilityMap:{scayt_service_protocol:"scayt_serviceProtocol",scayt_service_host:"scayt_serviceHost",scayt_service_port:"scayt_servicePort",scayt_service_path:"scayt_servicePath",scayt_customerid:"scayt_customerId"},replaceOldOptionsNames:function(a){for(var c in a)c in
this.backCompatibilityMap&&(a[this.backCompatibilityMap[c]]=a[c],delete a[c])},createScayt:function(a){var c=this;this.loadScaytLibrary(a,function(a){var b={lang:a.config.scayt_sLang,container:"BODY"==a.editable().$.nodeName?a.document.getWindow().$.frameElement:a.editable().$,customDictionary:a.config.scayt_customDictionaryIds,userDictionaryName:a.config.scayt_userDictionaryName,localization:a.langCode,customer_id:a.config.scayt_customerId,debug:a.config.scayt_debug,data_attribute_name:c.options.data_attribute_name,
misspelled_word_class:c.options.misspelled_word_class,"options-to-restore":a.config.scayt_disableOptionsStorage,focused:a.editable().hasFocus,ignoreElementsRegex:a.config.scayt_elementsToIgnore};a.config.scayt_serviceProtocol&&(b.service_protocol=a.config.scayt_serviceProtocol);a.config.scayt_serviceHost&&(b.service_host=a.config.scayt_serviceHost);a.config.scayt_servicePort&&(b.service_port=a.config.scayt_servicePort);a.config.scayt_servicePath&&(b.service_path=a.config.scayt_servicePath);b=new SCAYT.CKSCAYT(b,
function(){},function(){});b.subscribe("suggestionListSend",function(a){for(var b={},d=[],c=0;c<a.suggestionList.length;c++)if(!b["word_"+a.suggestionList[c]]){b["word_"+a.suggestionList[c]]=a.suggestionList[c];d.push(a.suggestionList[c])}CKEDITOR.plugins.scayt.suggestions=d});a.scayt=b;a.fire("scaytButtonState",a.readOnly?CKEDITOR.TRISTATE_DISABLED:CKEDITOR.TRISTATE_ON)})},destroy:function(a){a.scayt&&a.scayt.destroy();delete a.scayt;a.fire("scaytButtonState",CKEDITOR.TRISTATE_OFF)},loadScaytLibrary:function(a,
c){var d=this;"undefined"===typeof window.SCAYT||"function"!==typeof window.SCAYT.CKSCAYT?(this.loadingHelper[a.name]=c,this.loadingHelper.loadOrder.push(a.name),CKEDITOR.scriptLoader.load(a.config.scayt_srcUrl,function(){var a;CKEDITOR.fireOnce("scaytReady");for(var c=0;c<d.loadingHelper.loadOrder.length;c++){a=d.loadingHelper.loadOrder[c];if("function"===typeof d.loadingHelper[a])d.loadingHelper[a](CKEDITOR.instances[a]);delete d.loadingHelper[a]}d.loadingHelper.loadOrder=[]})):window.SCAYT&&"function"===
typeof window.SCAYT.CKSCAYT&&(CKEDITOR.fireOnce("scaytReady"),a.scayt||"function"===typeof c&&c(a))}};
CKEDITOR.on("scaytReady",function(){if(!0===CKEDITOR.config.scayt_handleCheckDirty){var a=CKEDITOR.editor.prototype;a.checkDirty=CKEDITOR.tools.override(a.checkDirty,function(a){return function(){var b=null,c=this.scayt;if(!CKEDITOR.plugins.scayt||!CKEDITOR.plugins.scayt.state[this.name]||!this.scayt)b=a.call(this);else if(b="ready"==this.status)var g=c.removeMarkupFromString(this.getSnapshot()),c=c.removeMarkupFromString(this._.previousValue),b=b&&c!==g;return b}});a.resetDirty=CKEDITOR.tools.override(a.resetDirty,
function(a){return function(){var b=this.scayt;!CKEDITOR.plugins.scayt||!CKEDITOR.plugins.scayt.state[this.name]||!this.scayt?a.call(this):this._.previousValue=b.removeMarkupFromString(this.getSnapshot())}})}if(!0===CKEDITOR.config.scayt_handleUndoRedo){var a=CKEDITOR.plugins.undo.Image.prototype,c="function"==typeof a.equalsContent?"equalsContent":"equals";a[c]=CKEDITOR.tools.override(a[c],function(a){return function(b){var c=b.editor.scayt,g=this.contents,f=b.contents,h=null;CKEDITOR.plugins.scayt&&
(CKEDITOR.plugins.scayt.state[b.editor.name]&&b.editor.scayt)&&(this.contents=c.removeMarkupFromString(g)||"",b.contents=c.removeMarkupFromString(f)||"");h=a.apply(this,arguments);this.contents=g;b.contents=f;return h}})}});(function(){CKEDITOR.plugins.add("stylescombo",{requires:"richcombo",init:function(c){var j=c.config,g=c.lang.stylescombo,f={},i=[],k=[];c.on("stylesSet",function(b){if(b=b.data.styles){for(var a,h,d,e=0,l=b.length;e<l;e++)if(a=b[e],!(c.blockless&&a.element in CKEDITOR.dtd.$block)&&(h=a.name,a=new CKEDITOR.style(a),!c.filter.customConfig||c.filter.check(a)))a._name=h,a._.enterMode=j.enterMode,a._.type=d=a.assignedTo||a.type,a._.weight=e+1E3*(d==CKEDITOR.STYLE_OBJECT?1:d==CKEDITOR.STYLE_BLOCK?2:3),
f[h]=a,i.push(a),k.push(a);i.sort(function(a,b){return a._.weight-b._.weight})}});c.ui.addRichCombo("Styles",{label:g.label,title:g.panelTitle,toolbar:"styles,10",allowedContent:k,panel:{css:[CKEDITOR.skin.getPath("editor")].concat(j.contentsCss),multiSelect:!0,attributes:{"aria-label":g.panelTitle}},init:function(){var b,a,c,d,e,f;e=0;for(f=i.length;e<f;e++)b=i[e],a=b._name,d=b._.type,d!=c&&(this.startGroup(g["panelTitle"+d]),c=d),this.add(a,b.type==CKEDITOR.STYLE_OBJECT?a:b.buildPreview(),a);this.commit()},
onClick:function(b){c.focus();c.fire("saveSnapshot");var b=f[b],a=c.elementPath();c[b.checkActive(a,c)?"removeStyle":"applyStyle"](b);c.fire("saveSnapshot")},onRender:function(){c.on("selectionChange",function(b){for(var a=this.getValue(),b=b.data.path.elements,h=0,d=b.length,e;h<d;h++){e=b[h];for(var g in f)if(f[g].checkElementRemovable(e,!0,c)){g!=a&&this.setValue(g);return}}this.setValue("")},this)},onOpen:function(){var b=c.getSelection().getSelectedElement(),b=c.elementPath(b),a=[0,0,0,0];this.showAll();
this.unmarkAll();for(var h in f){var d=f[h],e=d._.type;d.checkApplicable(b,c,c.activeFilter)?a[e]++:this.hideItem(h);d.checkActive(b,c)&&this.mark(h)}a[CKEDITOR.STYLE_BLOCK]||this.hideGroup(g["panelTitle"+CKEDITOR.STYLE_BLOCK]);a[CKEDITOR.STYLE_INLINE]||this.hideGroup(g["panelTitle"+CKEDITOR.STYLE_INLINE]);a[CKEDITOR.STYLE_OBJECT]||this.hideGroup(g["panelTitle"+CKEDITOR.STYLE_OBJECT])},refresh:function(){var b=c.elementPath();if(b){for(var a in f)if(f[a].checkApplicable(b,c,c.activeFilter))return;
this.setState(CKEDITOR.TRISTATE_DISABLED)}},reset:function(){f={};i=[]}})}})})();(function(){function i(c){return{editorFocus:!1,canUndo:!1,modes:{wysiwyg:1},exec:function(d){if(d.editable().hasFocus){var e=d.getSelection(),b;if(b=(new CKEDITOR.dom.elementPath(e.getCommonAncestor(),e.root)).contains({td:1,th:1},1)){var e=d.createRange(),a=CKEDITOR.tools.tryThese(function(){var a=b.getParent().$.cells[b.$.cellIndex+(c?-1:1)];a.parentNode.parentNode;return a},function(){var a=b.getParent(),a=a.getAscendant("table").$.rows[a.$.rowIndex+(c?-1:1)];return a.cells[c?a.cells.length-1:
0]});if(!a&&!c){for(var f=b.getAscendant("table").$,a=b.getParent().$.cells,f=new CKEDITOR.dom.element(f.insertRow(-1),d.document),g=0,h=a.length;g<h;g++)f.append((new CKEDITOR.dom.element(a[g],d.document)).clone(!1,!1)).appendBogus();e.moveToElementEditStart(f)}else if(a)a=new CKEDITOR.dom.element(a),e.moveToElementEditStart(a),(!e.checkStartOfBlock()||!e.checkEndOfBlock())&&e.selectNodeContents(a);else return!0;e.select(!0);return!0}}return!1}}}var h={editorFocus:!1,modes:{wysiwyg:1,source:1}},
g={exec:function(c){c.container.focusNext(!0,c.tabIndex)}},f={exec:function(c){c.container.focusPrevious(!0,c.tabIndex)}};CKEDITOR.plugins.add("tab",{init:function(c){for(var d=!1!==c.config.enableTabKeyTools,e=c.config.tabSpaces||0,b="";e--;)b+=" ";if(b)c.on("key",function(a){9==a.data.keyCode&&(c.insertText(b),a.cancel())});if(d)c.on("key",function(a){(9==a.data.keyCode&&c.execCommand("selectNextCell")||a.data.keyCode==CKEDITOR.SHIFT+9&&c.execCommand("selectPreviousCell"))&&a.cancel()});c.addCommand("blur",
CKEDITOR.tools.extend(g,h));c.addCommand("blurBack",CKEDITOR.tools.extend(f,h));c.addCommand("selectNextCell",i());c.addCommand("selectPreviousCell",i(!0))}})})();
CKEDITOR.dom.element.prototype.focusNext=function(i,h){var g=void 0===h?this.getTabIndex():h,f,c,d,e,b,a;if(0>=g)for(b=this.getNextSourceNode(i,CKEDITOR.NODE_ELEMENT);b;){if(b.isVisible()&&0===b.getTabIndex()){d=b;break}b=b.getNextSourceNode(!1,CKEDITOR.NODE_ELEMENT)}else for(b=this.getDocument().getBody().getFirst();b=b.getNextSourceNode(!1,CKEDITOR.NODE_ELEMENT);){if(!f)if(!c&&b.equals(this)){if(c=!0,i){if(!(b=b.getNextSourceNode(!0,CKEDITOR.NODE_ELEMENT)))break;f=1}}else c&&!this.contains(b)&&
(f=1);if(b.isVisible()&&!(0>(a=b.getTabIndex()))){if(f&&a==g){d=b;break}a>g&&(!d||!e||a<e)?(d=b,e=a):!d&&0===a&&(d=b,e=a)}}d&&d.focus()};
CKEDITOR.dom.element.prototype.focusPrevious=function(i,h){for(var g=void 0===h?this.getTabIndex():h,f,c,d,e=0,b,a=this.getDocument().getBody().getLast();a=a.getPreviousSourceNode(!1,CKEDITOR.NODE_ELEMENT);){if(!f)if(!c&&a.equals(this)){if(c=!0,i){if(!(a=a.getPreviousSourceNode(!0,CKEDITOR.NODE_ELEMENT)))break;f=1}}else c&&!this.contains(a)&&(f=1);if(a.isVisible()&&!(0>(b=a.getTabIndex())))if(0>=g){if(f&&0===b){d=a;break}b>e&&(d=a,e=b)}else{if(f&&b==g){d=a;break}if(b<g&&(!d||b>e))d=a,e=b}}d&&d.focus()};CKEDITOR.plugins.add("table",{requires:"dialog",init:function(a){function e(a){return CKEDITOR.tools.extend(a||{},{contextSensitive:1,refresh:function(a,f){this.setState(f.contains("table",1)?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED)}})}if(!a.blockless){var c=a.lang.table;a.addCommand("table",new CKEDITOR.dialogCommand("table",{context:"table",allowedContent:"table{width,height}[align,border,cellpadding,cellspacing,summary];caption tbody thead tfoot;th td tr[scope];"+(a.plugins.dialogadvtab?
"table"+a.plugins.dialogadvtab.allowedContent():""),requiredContent:"table",contentTransformations:[["table{width}: sizeToStyle","table[width]: sizeToAttribute"]]}));a.addCommand("tableProperties",new CKEDITOR.dialogCommand("tableProperties",e()));a.addCommand("tableDelete",e({exec:function(a){var b=a.elementPath().contains("table",1);if(b){var d=b.getParent(),c=a.editable();1==d.getChildCount()&&(!d.is("td","th")&&!d.equals(c))&&(b=d);a=a.createRange();a.moveToPosition(b,CKEDITOR.POSITION_BEFORE_START);
b.remove();a.select()}}}));a.ui.addButton&&a.ui.addButton("Table",{label:c.toolbar,command:"table",toolbar:"insert,30"});CKEDITOR.dialog.add("table",this.path+"dialogs/table.js");CKEDITOR.dialog.add("tableProperties",this.path+"dialogs/table.js");a.addMenuItems&&a.addMenuItems({table:{label:c.menu,command:"tableProperties",group:"table",order:5},tabledelete:{label:c.deleteTable,command:"tableDelete",group:"table",order:1}});a.on("doubleclick",function(a){a.data.element.is("table")&&(a.data.dialog=
"tableProperties")});a.contextMenu&&a.contextMenu.addListener(function(){return{tabledelete:CKEDITOR.TRISTATE_OFF,table:CKEDITOR.TRISTATE_OFF}})}}});(function(){function p(e){function d(a){!(0<b.length)&&(a.type==CKEDITOR.NODE_ELEMENT&&y.test(a.getName())&&!a.getCustomData("selected_cell"))&&(CKEDITOR.dom.element.setMarker(c,a,"selected_cell",!0),b.push(a))}for(var e=e.getRanges(),b=[],c={},a=0;a<e.length;a++){var f=e[a];if(f.collapsed)f=f.getCommonAncestor(),(f=f.getAscendant("td",!0)||f.getAscendant("th",!0))&&b.push(f);else{var f=new CKEDITOR.dom.walker(f),g;for(f.guard=d;g=f.next();)if(g.type!=CKEDITOR.NODE_ELEMENT||!g.is(CKEDITOR.dtd.table))if((g=
g.getAscendant("td",!0)||g.getAscendant("th",!0))&&!g.getCustomData("selected_cell"))CKEDITOR.dom.element.setMarker(c,g,"selected_cell",!0),b.push(g)}}CKEDITOR.dom.element.clearAllMarkers(c);return b}function o(e,d){for(var b=p(e),c=b[0],a=c.getAscendant("table"),c=c.getDocument(),f=b[0].getParent(),g=f.$.rowIndex,b=b[b.length-1],h=b.getParent().$.rowIndex+b.$.rowSpan-1,b=new CKEDITOR.dom.element(a.$.rows[h]),g=d?g:h,f=d?f:b,b=CKEDITOR.tools.buildTableMap(a),a=b[g],g=d?b[g-1]:b[g+1],b=b[0].length,
c=c.createElement("tr"),h=0;a[h]&&h<b;h++){var i;1<a[h].rowSpan&&g&&a[h]==g[h]?(i=a[h],i.rowSpan+=1):(i=(new CKEDITOR.dom.element(a[h])).clone(),i.removeAttribute("rowSpan"),i.appendBogus(),c.append(i),i=i.$);h+=i.colSpan-1}d?c.insertBefore(f):c.insertAfter(f)}function q(e){if(e instanceof CKEDITOR.dom.selection){for(var d=p(e),b=d[0].getAscendant("table"),c=CKEDITOR.tools.buildTableMap(b),e=d[0].getParent().$.rowIndex,d=d[d.length-1],a=d.getParent().$.rowIndex+d.$.rowSpan-1,d=[],f=e;f<=a;f++){for(var g=
c[f],h=new CKEDITOR.dom.element(b.$.rows[f]),i=0;i<g.length;i++){var j=new CKEDITOR.dom.element(g[i]),l=j.getParent().$.rowIndex;1==j.$.rowSpan?j.remove():(j.$.rowSpan-=1,l==f&&(l=c[f+1],l[i-1]?j.insertAfter(new CKEDITOR.dom.element(l[i-1])):(new CKEDITOR.dom.element(b.$.rows[f+1])).append(j,1)));i+=j.$.colSpan-1}d.push(h)}c=b.$.rows;b=new CKEDITOR.dom.element(c[a+1]||(0<e?c[e-1]:null)||b.$.parentNode);for(f=d.length;0<=f;f--)q(d[f]);return b}e instanceof CKEDITOR.dom.element&&(b=e.getAscendant("table"),
1==b.$.rows.length?b.remove():e.remove());return null}function r(e,d){for(var b=d?Infinity:0,c=0;c<e.length;c++){var a;a=e[c];for(var f=d,g=a.getParent().$.cells,h=0,i=0;i<g.length;i++){var j=g[i],h=h+(f?1:j.colSpan);if(j==a.$)break}a=h-1;if(d?a<b:a>b)b=a}return b}function k(e,d){for(var b=p(e),c=b[0].getAscendant("table"),a=r(b,1),b=r(b),a=d?a:b,f=CKEDITOR.tools.buildTableMap(c),c=[],b=[],g=f.length,h=0;h<g;h++)c.push(f[h][a]),b.push(d?f[h][a-1]:f[h][a+1]);for(h=0;h<g;h++)c[h]&&(1<c[h].colSpan&&
b[h]==c[h]?(a=c[h],a.colSpan+=1):(a=(new CKEDITOR.dom.element(c[h])).clone(),a.removeAttribute("colSpan"),a.appendBogus(),a[d?"insertBefore":"insertAfter"].call(a,new CKEDITOR.dom.element(c[h])),a=a.$),h+=a.rowSpan-1)}function u(e,d){var b=e.getStartElement();if(b=b.getAscendant("td",1)||b.getAscendant("th",1)){var c=b.clone();c.appendBogus();d?c.insertBefore(b):c.insertAfter(b)}}function t(e){if(e instanceof CKEDITOR.dom.selection){var e=p(e),d=e[0]&&e[0].getAscendant("table"),b;a:{var c=0;b=e.length-
1;for(var a={},f,g;f=e[c++];)CKEDITOR.dom.element.setMarker(a,f,"delete_cell",!0);for(c=0;f=e[c++];)if((g=f.getPrevious())&&!g.getCustomData("delete_cell")||(g=f.getNext())&&!g.getCustomData("delete_cell")){CKEDITOR.dom.element.clearAllMarkers(a);b=g;break a}CKEDITOR.dom.element.clearAllMarkers(a);g=e[0].getParent();(g=g.getPrevious())?b=g.getLast():(g=e[b].getParent(),b=(g=g.getNext())?g.getChild(0):null)}for(g=e.length-1;0<=g;g--)t(e[g]);b?m(b,!0):d&&d.remove()}else e instanceof CKEDITOR.dom.element&&
(d=e.getParent(),1==d.getChildCount()?d.remove():e.remove())}function m(e,d){var b=e.getDocument(),c=CKEDITOR.document;CKEDITOR.env.ie&&10==CKEDITOR.env.version&&(c.focus(),b.focus());b=new CKEDITOR.dom.range(b);if(!b["moveToElementEdit"+(d?"End":"Start")](e))b.selectNodeContents(e),b.collapse(d?!1:!0);b.select(!0)}function v(e,d,b){e=e[d];if("undefined"==typeof b)return e;for(d=0;e&&d<e.length;d++){if(b.is&&e[d]==b.$)return d;if(d==b)return new CKEDITOR.dom.element(e[d])}return b.is?-1:null}function s(e,
d,b){var c=p(e),a;if((d?1!=c.length:2>c.length)||(a=e.getCommonAncestor())&&a.type==CKEDITOR.NODE_ELEMENT&&a.is("table"))return!1;var f,e=c[0];a=e.getAscendant("table");var g=CKEDITOR.tools.buildTableMap(a),h=g.length,i=g[0].length,j=e.getParent().$.rowIndex,l=v(g,j,e);if(d){var n;try{var m=parseInt(e.getAttribute("rowspan"),10)||1;f=parseInt(e.getAttribute("colspan"),10)||1;n=g["up"==d?j-m:"down"==d?j+m:j]["left"==d?l-f:"right"==d?l+f:l]}catch(z){return!1}if(!n||e.$==n)return!1;c["up"==d||"left"==
d?"unshift":"push"](new CKEDITOR.dom.element(n))}for(var d=e.getDocument(),o=j,m=n=0,q=!b&&new CKEDITOR.dom.documentFragment(d),s=0,d=0;d<c.length;d++){f=c[d];var k=f.getParent(),t=f.getFirst(),r=f.$.colSpan,u=f.$.rowSpan,k=k.$.rowIndex,w=v(g,k,f),s=s+r*u,m=Math.max(m,w-l+r);n=Math.max(n,k-j+u);if(!b){r=f;(u=r.getBogus())&&u.remove();r.trim();if(f.getChildren().count()){if(k!=o&&t&&(!t.isBlockBoundary||!t.isBlockBoundary({br:1})))(o=q.getLast(CKEDITOR.dom.walker.whitespaces(!0)))&&(!o.is||!o.is("br"))&&
q.append("br");f.moveChildren(q)}d?f.remove():f.setHtml("")}o=k}if(b)return n*m==s;q.moveChildren(e);e.appendBogus();m>=i?e.removeAttribute("rowSpan"):e.$.rowSpan=n;n>=h?e.removeAttribute("colSpan"):e.$.colSpan=m;b=new CKEDITOR.dom.nodeList(a.$.rows);c=b.count();for(d=c-1;0<=d;d--)a=b.getItem(d),a.$.cells.length||(a.remove(),c++);return e}function w(e,d){var b=p(e);if(1<b.length)return!1;if(d)return!0;var b=b[0],c=b.getParent(),a=c.getAscendant("table"),f=CKEDITOR.tools.buildTableMap(a),g=c.$.rowIndex,
h=v(f,g,b),i=b.$.rowSpan,j;if(1<i){j=Math.ceil(i/2);for(var i=Math.floor(i/2),c=g+j,a=new CKEDITOR.dom.element(a.$.rows[c]),f=v(f,c),l,c=b.clone(),g=0;g<f.length;g++)if(l=f[g],l.parentNode==a.$&&g>h){c.insertBefore(new CKEDITOR.dom.element(l));break}else l=null;l||a.append(c)}else{i=j=1;a=c.clone();a.insertAfter(c);a.append(c=b.clone());l=v(f,g);for(h=0;h<l.length;h++)l[h].rowSpan++}c.appendBogus();b.$.rowSpan=j;c.$.rowSpan=i;1==j&&b.removeAttribute("rowSpan");1==i&&c.removeAttribute("rowSpan");return c}
function x(e,d){var b=p(e);if(1<b.length)return!1;if(d)return!0;var b=b[0],c=b.getParent(),a=c.getAscendant("table"),a=CKEDITOR.tools.buildTableMap(a),f=v(a,c.$.rowIndex,b),g=b.$.colSpan;if(1<g)c=Math.ceil(g/2),g=Math.floor(g/2);else{for(var g=c=1,h=[],i=0;i<a.length;i++){var j=a[i];h.push(j[f]);1<j[f].rowSpan&&(i+=j[f].rowSpan-1)}for(a=0;a<h.length;a++)h[a].colSpan++}a=b.clone();a.insertAfter(b);a.appendBogus();b.$.colSpan=c;a.$.colSpan=g;1==c&&b.removeAttribute("colSpan");1==g&&a.removeAttribute("colSpan");
return a}var y=/^(?:td|th)$/;CKEDITOR.plugins.tabletools={requires:"table,dialog,contextmenu",init:function(e){function d(a){return CKEDITOR.tools.extend(a||{},{contextSensitive:1,refresh:function(a,b){this.setState(b.contains({td:1,th:1},1)?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED)}})}function b(a,b){var c=e.addCommand(a,b);e.addFeature(c)}var c=e.lang.table;b("cellProperties",new CKEDITOR.dialogCommand("cellProperties",d({allowedContent:"td th{width,height,border-color,background-color,white-space,vertical-align,text-align}[colspan,rowspan]",
requiredContent:"table"})));CKEDITOR.dialog.add("cellProperties",this.path+"dialogs/tableCell.js");b("rowDelete",d({requiredContent:"table",exec:function(a){a=a.getSelection();m(q(a))}}));b("rowInsertBefore",d({requiredContent:"table",exec:function(a){a=a.getSelection();o(a,!0)}}));b("rowInsertAfter",d({requiredContent:"table",exec:function(a){a=a.getSelection();o(a)}}));b("columnDelete",d({requiredContent:"table",exec:function(a){for(var a=a.getSelection(),a=p(a),b=a[0],c=a[a.length-1],a=b.getAscendant("table"),
d=CKEDITOR.tools.buildTableMap(a),e,j,l=[],n=0,o=d.length;n<o;n++)for(var k=0,q=d[n].length;k<q;k++)d[n][k]==b.$&&(e=k),d[n][k]==c.$&&(j=k);for(n=e;n<=j;n++)for(k=0;k<d.length;k++)c=d[k],b=new CKEDITOR.dom.element(a.$.rows[k]),c=new CKEDITOR.dom.element(c[n]),c.$&&(1==c.$.colSpan?c.remove():c.$.colSpan-=1,k+=c.$.rowSpan-1,b.$.cells.length||l.push(b));j=a.$.rows[0]&&a.$.rows[0].cells;e=new CKEDITOR.dom.element(j[e]||(e?j[e-1]:a.$.parentNode));l.length==o&&a.remove();e&&m(e,!0)}}));b("columnInsertBefore",
d({requiredContent:"table",exec:function(a){a=a.getSelection();k(a,!0)}}));b("columnInsertAfter",d({requiredContent:"table",exec:function(a){a=a.getSelection();k(a)}}));b("cellDelete",d({requiredContent:"table",exec:function(a){a=a.getSelection();t(a)}}));b("cellMerge",d({allowedContent:"td[colspan,rowspan]",requiredContent:"td[colspan,rowspan]",exec:function(a){m(s(a.getSelection()),!0)}}));b("cellMergeRight",d({allowedContent:"td[colspan]",requiredContent:"td[colspan]",exec:function(a){m(s(a.getSelection(),
"right"),!0)}}));b("cellMergeDown",d({allowedContent:"td[rowspan]",requiredContent:"td[rowspan]",exec:function(a){m(s(a.getSelection(),"down"),!0)}}));b("cellVerticalSplit",d({allowedContent:"td[rowspan]",requiredContent:"td[rowspan]",exec:function(a){m(w(a.getSelection()))}}));b("cellHorizontalSplit",d({allowedContent:"td[colspan]",requiredContent:"td[colspan]",exec:function(a){m(x(a.getSelection()))}}));b("cellInsertBefore",d({requiredContent:"table",exec:function(a){a=a.getSelection();u(a,!0)}}));
b("cellInsertAfter",d({requiredContent:"table",exec:function(a){a=a.getSelection();u(a)}}));e.addMenuItems&&e.addMenuItems({tablecell:{label:c.cell.menu,group:"tablecell",order:1,getItems:function(){var a=e.getSelection(),b=p(a);return{tablecell_insertBefore:CKEDITOR.TRISTATE_OFF,tablecell_insertAfter:CKEDITOR.TRISTATE_OFF,tablecell_delete:CKEDITOR.TRISTATE_OFF,tablecell_merge:s(a,null,!0)?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED,tablecell_merge_right:s(a,"right",!0)?CKEDITOR.TRISTATE_OFF:
CKEDITOR.TRISTATE_DISABLED,tablecell_merge_down:s(a,"down",!0)?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED,tablecell_split_vertical:w(a,!0)?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED,tablecell_split_horizontal:x(a,!0)?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED,tablecell_properties:0<b.length?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED}}},tablecell_insertBefore:{label:c.cell.insertBefore,group:"tablecell",command:"cellInsertBefore",order:5},tablecell_insertAfter:{label:c.cell.insertAfter,
group:"tablecell",command:"cellInsertAfter",order:10},tablecell_delete:{label:c.cell.deleteCell,group:"tablecell",command:"cellDelete",order:15},tablecell_merge:{label:c.cell.merge,group:"tablecell",command:"cellMerge",order:16},tablecell_merge_right:{label:c.cell.mergeRight,group:"tablecell",command:"cellMergeRight",order:17},tablecell_merge_down:{label:c.cell.mergeDown,group:"tablecell",command:"cellMergeDown",order:18},tablecell_split_horizontal:{label:c.cell.splitHorizontal,group:"tablecell",
command:"cellHorizontalSplit",order:19},tablecell_split_vertical:{label:c.cell.splitVertical,group:"tablecell",command:"cellVerticalSplit",order:20},tablecell_properties:{label:c.cell.title,group:"tablecellproperties",command:"cellProperties",order:21},tablerow:{label:c.row.menu,group:"tablerow",order:1,getItems:function(){return{tablerow_insertBefore:CKEDITOR.TRISTATE_OFF,tablerow_insertAfter:CKEDITOR.TRISTATE_OFF,tablerow_delete:CKEDITOR.TRISTATE_OFF}}},tablerow_insertBefore:{label:c.row.insertBefore,
group:"tablerow",command:"rowInsertBefore",order:5},tablerow_insertAfter:{label:c.row.insertAfter,group:"tablerow",command:"rowInsertAfter",order:10},tablerow_delete:{label:c.row.deleteRow,group:"tablerow",command:"rowDelete",order:15},tablecolumn:{label:c.column.menu,group:"tablecolumn",order:1,getItems:function(){return{tablecolumn_insertBefore:CKEDITOR.TRISTATE_OFF,tablecolumn_insertAfter:CKEDITOR.TRISTATE_OFF,tablecolumn_delete:CKEDITOR.TRISTATE_OFF}}},tablecolumn_insertBefore:{label:c.column.insertBefore,
group:"tablecolumn",command:"columnInsertBefore",order:5},tablecolumn_insertAfter:{label:c.column.insertAfter,group:"tablecolumn",command:"columnInsertAfter",order:10},tablecolumn_delete:{label:c.column.deleteColumn,group:"tablecolumn",command:"columnDelete",order:15}});e.contextMenu&&e.contextMenu.addListener(function(a,b,c){return(a=c.contains({td:1,th:1},1))&&!a.isReadOnly()?{tablecell:CKEDITOR.TRISTATE_OFF,tablerow:CKEDITOR.TRISTATE_OFF,tablecolumn:CKEDITOR.TRISTATE_OFF}:null})},getSelectedCells:p};
CKEDITOR.plugins.add("tabletools",CKEDITOR.plugins.tabletools)})();CKEDITOR.tools.buildTableMap=function(p){for(var p=p.$.rows,o=-1,q=[],r=0;r<p.length;r++){o++;!q[o]&&(q[o]=[]);for(var k=-1,u=0;u<p[r].cells.length;u++){var t=p[r].cells[u];for(k++;q[o][k];)k++;for(var m=isNaN(t.colSpan)?1:t.colSpan,t=isNaN(t.rowSpan)?1:t.rowSpan,v=0;v<t;v++){q[o+v]||(q[o+v]=[]);for(var s=0;s<m;s++)q[o+v][k+s]=p[r].cells[u]}k+=m-1}}return q};(function(){var g=[CKEDITOR.CTRL+90,CKEDITOR.CTRL+89,CKEDITOR.CTRL+CKEDITOR.SHIFT+90],l={8:1,46:1};CKEDITOR.plugins.add("undo",{init:function(a){function b(a){d.enabled&&!1!==a.data.command.canUndo&&d.save()}function c(){d.enabled=a.readOnly?!1:"wysiwyg"==a.mode;d.onChange()}var d=a.undoManager=new e(a),j=d.editingHandler=new i(d),f=a.addCommand("undo",{exec:function(){d.undo()&&(a.selectionChange(),this.fire("afterUndo"))},startDisabled:!0,canUndo:!1}),h=a.addCommand("redo",{exec:function(){d.redo()&&
(a.selectionChange(),this.fire("afterRedo"))},startDisabled:!0,canUndo:!1});a.setKeystroke([[g[0],"undo"],[g[1],"redo"],[g[2],"redo"]]);d.onChange=function(){f.setState(d.undoable()?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED);h.setState(d.redoable()?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED)};a.on("beforeCommandExec",b);a.on("afterCommandExec",b);a.on("saveSnapshot",function(a){d.save(a.data&&a.data.contentOnly)});a.on("contentDom",j.attachListeners,j);a.on("instanceReady",function(){a.fire("saveSnapshot")});
a.on("beforeModeUnload",function(){"wysiwyg"==a.mode&&d.save(!0)});a.on("mode",c);a.on("readOnly",c);a.ui.addButton&&(a.ui.addButton("Undo",{label:a.lang.undo.undo,command:"undo",toolbar:"undo,10"}),a.ui.addButton("Redo",{label:a.lang.undo.redo,command:"redo",toolbar:"undo,20"}));a.resetUndo=function(){d.reset();a.fire("saveSnapshot")};a.on("updateSnapshot",function(){d.currentImage&&d.update()});a.on("lockSnapshot",function(a){a=a.data;d.lock(a&&a.dontUpdate,a&&a.forceUpdate)});a.on("unlockSnapshot",
d.unlock,d)}});CKEDITOR.plugins.undo={};var e=CKEDITOR.plugins.undo.UndoManager=function(a){this.strokesRecorded=[0,0];this.locked=null;this.previousKeyGroup=-1;this.limit=a.config.undoStackSize||20;this.strokesLimit=25;this.editor=a;this.reset()};e.prototype={type:function(a,b){var c=e.getKeyGroup(a),d=this.strokesRecorded[c]+1,b=b||d>=this.strokesLimit;this.typing||(this.hasUndo=this.typing=!0,this.hasRedo=!1,this.onChange());b?(d=0,this.editor.fire("saveSnapshot")):this.editor.fire("change");this.strokesRecorded[c]=
d;this.previousKeyGroup=c},keyGroupChanged:function(a){return e.getKeyGroup(a)!=this.previousKeyGroup},reset:function(){this.snapshots=[];this.index=-1;this.currentImage=null;this.hasRedo=this.hasUndo=!1;this.locked=null;this.resetType()},resetType:function(){this.strokesRecorded=[0,0];this.typing=!1;this.previousKeyGroup=-1},refreshState:function(){this.hasUndo=!!this.getNextImage(!0);this.hasRedo=!!this.getNextImage(!1);this.resetType();this.onChange()},save:function(a,b,c){var d=this.editor;if(this.locked||
"ready"!=d.status||"wysiwyg"!=d.mode)return!1;var e=d.editable();if(!e||"ready"!=e.status)return!1;e=this.snapshots;b||(b=new f(d));if(!1===b.contents)return!1;if(this.currentImage)if(b.equalsContent(this.currentImage)){if(a||b.equalsSelection(this.currentImage))return!1}else!1!==c&&d.fire("change");e.splice(this.index+1,e.length-this.index-1);e.length==this.limit&&e.shift();this.index=e.push(b)-1;this.currentImage=b;!1!==c&&this.refreshState();return!0},restoreImage:function(a){var b=this.editor,
c;a.bookmarks&&(b.focus(),c=b.getSelection());this.locked={level:999};this.editor.loadSnapshot(a.contents);a.bookmarks?c.selectBookmarks(a.bookmarks):CKEDITOR.env.ie&&(c=this.editor.document.getBody().$.createTextRange(),c.collapse(!0),c.select());this.locked=null;this.index=a.index;this.currentImage=this.snapshots[this.index];this.update();this.refreshState();b.fire("change")},getNextImage:function(a){var b=this.snapshots,c=this.currentImage,d;if(c)if(a)for(d=this.index-1;0<=d;d--){if(a=b[d],!c.equalsContent(a))return a.index=
d,a}else for(d=this.index+1;d<b.length;d++)if(a=b[d],!c.equalsContent(a))return a.index=d,a;return null},redoable:function(){return this.enabled&&this.hasRedo},undoable:function(){return this.enabled&&this.hasUndo},undo:function(){if(this.undoable()){this.save(!0);var a=this.getNextImage(!0);if(a)return this.restoreImage(a),!0}return!1},redo:function(){if(this.redoable()&&(this.save(!0),this.redoable())){var a=this.getNextImage(!1);if(a)return this.restoreImage(a),!0}return!1},update:function(a){if(!this.locked){a||
(a=new f(this.editor));for(var b=this.index,c=this.snapshots;0<b&&this.currentImage.equalsContent(c[b-1]);)b-=1;c.splice(b,this.index-b+1,a);this.index=b;this.currentImage=a}},updateSelection:function(a){if(!this.snapshots.length)return!1;var b=this.snapshots,c=b[b.length-1];return c.equalsContent(a)&&!c.equalsSelection(a)?(this.currentImage=b[b.length-1]=a,!0):!1},lock:function(a,b){if(this.locked)this.locked.level++;else if(a)this.locked={level:1};else{var c=null;if(b)c=!0;else{var d=new f(this.editor,
!0);this.currentImage&&this.currentImage.equalsContent(d)&&(c=d)}this.locked={update:c,level:1}}},unlock:function(){if(this.locked&&!--this.locked.level){var a=this.locked.update;this.locked=null;if(!0===a)this.update();else if(a){var b=new f(this.editor,!0);a.equalsContent(b)||this.update()}}}};e.navigationKeyCodes={37:1,38:1,39:1,40:1,36:1,35:1,33:1,34:1};e.keyGroups={PRINTABLE:0,FUNCTIONAL:1};e.isNavigationKey=function(a){return!!e.navigationKeyCodes[a]};e.getKeyGroup=function(a){var b=e.keyGroups;
return l[a]?b.FUNCTIONAL:b.PRINTABLE};e.getOppositeKeyGroup=function(a){var b=e.keyGroups;return a==b.FUNCTIONAL?b.PRINTABLE:b.FUNCTIONAL};e.ieFunctionalKeysBug=function(a){return CKEDITOR.env.ie&&e.getKeyGroup(a)==e.keyGroups.FUNCTIONAL};var f=CKEDITOR.plugins.undo.Image=function(a,b){this.editor=a;a.fire("beforeUndoImage");var c=a.getSnapshot();CKEDITOR.env.ie&&c&&(c=c.replace(/\s+data-cke-expando=".*?"/g,""));this.contents=c;b||(this.bookmarks=(c=c&&a.getSelection())&&c.createBookmarks2(!0));a.fire("afterUndoImage")},
h=/\b(?:href|src|name)="[^"]*?"/gi;f.prototype={equalsContent:function(a){var b=this.contents,a=a.contents;if(CKEDITOR.env.ie&&(CKEDITOR.env.ie7Compat||CKEDITOR.env.quirks))b=b.replace(h,""),a=a.replace(h,"");return b!=a?!1:!0},equalsSelection:function(a){var b=this.bookmarks,a=a.bookmarks;if(b||a){if(!b||!a||b.length!=a.length)return!1;for(var c=0;c<b.length;c++){var d=b[c],e=a[c];if(d.startOffset!=e.startOffset||d.endOffset!=e.endOffset||!CKEDITOR.tools.arrayCompare(d.start,e.start)||!CKEDITOR.tools.arrayCompare(d.end,
e.end))return!1}}return!0}};var i=CKEDITOR.plugins.undo.NativeEditingHandler=function(a){this.undoManager=a;this.ignoreInputEvent=!1;this.keyEventsStack=new k;this.lastKeydownImage=null};i.prototype={onKeydown:function(a){var b=a.data.getKey();if(229!==b)if(-1<CKEDITOR.tools.indexOf(g,a.data.getKeystroke()))a.data.preventDefault();else if(this.keyEventsStack.cleanUp(a),a=this.undoManager,this.keyEventsStack.getLast(b)||this.keyEventsStack.push(b),this.lastKeydownImage=new f(a.editor),e.isNavigationKey(b)||
this.undoManager.keyGroupChanged(b))if(a.strokesRecorded[0]||a.strokesRecorded[1])a.save(!1,this.lastKeydownImage,!1),a.resetType()},onInput:function(){if(this.ignoreInputEvent)this.ignoreInputEvent=!1;else{var a=this.keyEventsStack.getLast();a||(a=this.keyEventsStack.push(0));this.keyEventsStack.increment(a.keyCode);this.keyEventsStack.getTotalInputs()>=this.undoManager.strokesLimit&&(this.undoManager.type(a.keyCode,!0),this.keyEventsStack.resetInputs())}},onKeyup:function(a){var b=this.undoManager,
a=a.data.getKey(),c=this.keyEventsStack.getTotalInputs();this.keyEventsStack.remove(a);if(!e.ieFunctionalKeysBug(a)||!this.lastKeydownImage||!this.lastKeydownImage.equalsContent(new f(b.editor,!0)))if(0<c)b.type(a);else if(e.isNavigationKey(a))this.onNavigationKey(!0)},onNavigationKey:function(a){var b=this.undoManager;(a||!b.save(!0,null,!1))&&b.updateSelection(new f(b.editor));b.resetType()},ignoreInputEventListener:function(){this.ignoreInputEvent=!0},attachListeners:function(){var a=this.undoManager.editor,
b=a.editable(),c=this;b.attachListener(b,"keydown",function(a){c.onKeydown(a);if(e.ieFunctionalKeysBug(a.data.getKey()))c.onInput()},null,null,999);b.attachListener(b,CKEDITOR.env.ie?"keypress":"input",c.onInput,c,null,999);b.attachListener(b,"keyup",c.onKeyup,c,null,999);b.attachListener(b,"paste",c.ignoreInputEventListener,c,null,999);b.attachListener(b,"drop",c.ignoreInputEventListener,c,null,999);b.attachListener(b.isInline()?b:a.document.getDocumentElement(),"click",function(){c.onNavigationKey()},
null,null,999);b.attachListener(this.undoManager.editor,"blur",function(){c.keyEventsStack.remove(9)},null,null,999)}};var k=CKEDITOR.plugins.undo.KeyEventsStack=function(){this.stack=[]};k.prototype={push:function(a){return this.stack[this.stack.push({keyCode:a,inputs:0})-1]},getLastIndex:function(a){if("number"!=typeof a)return this.stack.length-1;for(var b=this.stack.length;b--;)if(this.stack[b].keyCode==a)return b;return-1},getLast:function(a){a=this.getLastIndex(a);return-1!=a?this.stack[a]:
null},increment:function(a){this.getLast(a).inputs++},remove:function(a){a=this.getLastIndex(a);-1!=a&&this.stack.splice(a,1)},resetInputs:function(a){if("number"==typeof a)this.getLast(a).inputs=0;else for(a=this.stack.length;a--;)this.stack[a].inputs=0},getTotalInputs:function(){for(var a=this.stack.length,b=0;a--;)b+=this.stack[a].inputs;return b},cleanUp:function(a){a=a.data.$;!a.ctrlKey&&!a.metaKey&&this.remove(17);a.shiftKey||this.remove(16);a.altKey||this.remove(18)}}})();CKEDITOR.plugins.add("wsc",{requires:"dialog",parseApi:function(a){a.config.wsc_onFinish="function"===typeof a.config.wsc_onFinish?a.config.wsc_onFinish:function(){};a.config.wsc_onClose="function"===typeof a.config.wsc_onClose?a.config.wsc_onClose:function(){}},parseConfig:function(a){a.config.wsc_customerId=a.config.wsc_customerId||CKEDITOR.config.wsc_customerId||"1:ua3xw1-2XyGJ3-GWruD3-6OFNT1-oXcuB1-nR6Bp4-hgQHc-EcYng3-sdRXG3-NOfFk";a.config.wsc_customDictionaryIds=a.config.wsc_customDictionaryIds||
CKEDITOR.config.wsc_customDictionaryIds||"";a.config.wsc_userDictionaryName=a.config.wsc_userDictionaryName||CKEDITOR.config.wsc_userDictionaryName||"";a.config.wsc_customLoaderScript=a.config.wsc_customLoaderScript||CKEDITOR.config.wsc_customLoaderScript;CKEDITOR.config.wsc_cmd=a.config.wsc_cmd||CKEDITOR.config.wsc_cmd||"spell";CKEDITOR.config.wsc_version="v4.3.0-26-g5bcf855";CKEDITOR.config.wsc_removeGlobalVariable=!0},init:function(a){var b=CKEDITOR.env;this.parseConfig(a);this.parseApi(a);a.addCommand("checkspell",
new CKEDITOR.dialogCommand("checkspell")).modes={wysiwyg:!CKEDITOR.env.opera&&!CKEDITOR.env.air&&document.domain==window.location.hostname&&!(b.ie&&(8>b.version||b.quirks))};"undefined"==typeof a.plugins.scayt&&a.ui.addButton&&a.ui.addButton("SpellChecker",{label:a.lang.wsc.toolbar,click:function(a){var b=a.elementMode==CKEDITOR.ELEMENT_MODE_INLINE?a.container.getText():a.document.getBody().getText();(b=b.replace(/\s/g,""))?a.execCommand("checkspell"):alert("Nothing to check!")},toolbar:"spellchecker,10"});
CKEDITOR.dialog.add("checkspell",this.path+(CKEDITOR.env.ie&&7>=CKEDITOR.env.version?"dialogs/wsc_ie.js":window.postMessage?"dialogs/wsc.js":"dialogs/wsc_ie.js"))}});CKEDITOR.config.plugins='dialogui,dialog,about,a11yhelp,dialogadvtab,basicstyles,bidi,blockquote,clipboard,button,panelbutton,panel,floatpanel,colorbutton,colordialog,templates,menu,contextmenu,div,resize,toolbar,elementspath,enterkey,entities,popup,filebrowser,find,fakeobjects,flash,floatingspace,listblock,richcombo,font,forms,format,horizontalrule,htmlwriter,iframe,wysiwygarea,image,indent,indentblock,indentlist,smiley,justify,menubutton,language,link,list,liststyle,magicline,maximize,newpage,pagebreak,pastetext,pastefromword,preview,print,removeformat,save,selectall,showblocks,showborders,sourcearea,specialchar,scayt,stylescombo,tab,table,tabletools,undo,wsc';CKEDITOR.config.skin='moono';(function() {var setIcons = function(icons, strip) {var path = CKEDITOR.getUrl( 'plugins/' + strip );icons = icons.split( ',' );for ( var i = 0; i < icons.length; i++ )CKEDITOR.skin.icons[ icons[ i ] ] = { path: path, offset: -icons[ ++i ], bgsize : icons[ ++i ] };};if (CKEDITOR.env.hidpi) setIcons('about,0,,bold,24,,italic,48,,strike,72,,subscript,96,,superscript,120,,underline,144,,bidiltr,168,,bidirtl,192,,blockquote,216,,copy-rtl,240,,copy,264,,cut-rtl,288,,cut,312,,paste-rtl,336,,paste,360,,bgcolor,384,,textcolor,408,,templates-rtl,432,,templates,456,,creatediv,480,,find-rtl,504,,find,528,,replace,552,,flash,576,,button,600,,checkbox,624,,form,648,,hiddenfield,672,,imagebutton,696,,radio,720,,select-rtl,744,,select,768,,textarea-rtl,792,,textarea,816,,textfield-rtl,840,,textfield,864,,horizontalrule,888,,iframe,912,,image,936,,indent-rtl,960,,indent,984,,outdent-rtl,1008,,outdent,1032,,smiley,1056,,justifyblock,1080,,justifycenter,1104,,justifyleft,1128,,justifyright,1152,,language,1176,,anchor-rtl,1200,,anchor,1224,,link,1248,,unlink,1272,,bulletedlist-rtl,1296,,bulletedlist,1320,,numberedlist-rtl,1344,,numberedlist,1368,,maximize,1392,,newpage-rtl,1416,,newpage,1440,,pagebreak-rtl,1464,,pagebreak,1488,,pastetext-rtl,1512,,pastetext,1536,,pastefromword-rtl,1560,,pastefromword,1584,,preview-rtl,1608,,preview,1632,,print,1656,,removeformat,1680,,save,1704,,selectall,1728,,showblocks-rtl,1752,,showblocks,1776,,source-rtl,1800,,source,1824,,specialchar,1848,,scayt,1872,,table,1896,,redo-rtl,1920,,redo,1944,,undo-rtl,1968,,undo,1992,,spellchecker,2016,','icons_hidpi.png');else setIcons('about,0,auto,bold,24,auto,italic,48,auto,strike,72,auto,subscript,96,auto,superscript,120,auto,underline,144,auto,bidiltr,168,auto,bidirtl,192,auto,blockquote,216,auto,copy-rtl,240,auto,copy,264,auto,cut-rtl,288,auto,cut,312,auto,paste-rtl,336,auto,paste,360,auto,bgcolor,384,auto,textcolor,408,auto,templates-rtl,432,auto,templates,456,auto,creatediv,480,auto,find-rtl,504,auto,find,528,auto,replace,552,auto,flash,576,auto,button,600,auto,checkbox,624,auto,form,648,auto,hiddenfield,672,auto,imagebutton,696,auto,radio,720,auto,select-rtl,744,auto,select,768,auto,textarea-rtl,792,auto,textarea,816,auto,textfield-rtl,840,auto,textfield,864,auto,horizontalrule,888,auto,iframe,912,auto,image,936,auto,indent-rtl,960,auto,indent,984,auto,outdent-rtl,1008,auto,outdent,1032,auto,smiley,1056,auto,justifyblock,1080,auto,justifycenter,1104,auto,justifyleft,1128,auto,justifyright,1152,auto,language,1176,auto,anchor-rtl,1200,auto,anchor,1224,auto,link,1248,auto,unlink,1272,auto,bulletedlist-rtl,1296,auto,bulletedlist,1320,auto,numberedlist-rtl,1344,auto,numberedlist,1368,auto,maximize,1392,auto,newpage-rtl,1416,auto,newpage,1440,auto,pagebreak-rtl,1464,auto,pagebreak,1488,auto,pastetext-rtl,1512,auto,pastetext,1536,auto,pastefromword-rtl,1560,auto,pastefromword,1584,auto,preview-rtl,1608,auto,preview,1632,auto,print,1656,auto,removeformat,1680,auto,save,1704,auto,selectall,1728,auto,showblocks-rtl,1752,auto,showblocks,1776,auto,source-rtl,1800,auto,source,1824,auto,specialchar,1848,auto,scayt,1872,auto,table,1896,auto,redo-rtl,1920,auto,redo,1944,auto,undo-rtl,1968,auto,undo,1992,auto,spellchecker,2016,auto','icons.png');})();CKEDITOR.lang.languages={"af":1,"sq":1,"ar":1,"eu":1,"bn":1,"bs":1,"bg":1,"ca":1,"zh-cn":1,"zh":1,"hr":1,"cs":1,"da":1,"nl":1,"en":1,"en-au":1,"en-ca":1,"en-gb":1,"eo":1,"et":1,"fo":1,"fi":1,"fr":1,"fr-ca":1,"gl":1,"ka":1,"de":1,"el":1,"gu":1,"he":1,"hi":1,"hu":1,"is":1,"id":1,"it":1,"ja":1,"km":1,"ko":1,"ku":1,"lv":1,"lt":1,"mk":1,"ms":1,"mn":1,"no":1,"nb":1,"fa":1,"pl":1,"pt-br":1,"pt":1,"ro":1,"ru":1,"sr":1,"sr-latn":1,"si":1,"sk":1,"sl":1,"es":1,"sv":1,"tt":1,"th":1,"tr":1,"ug":1,"uk":1,"vi":1,"cy":1};}());
(function() {


}).call(this);
(function() {


}).call(this);
(function() {


}).call(this);
(function() {


}).call(this);
(function() {


}).call(this);
(function() {


}).call(this);
(function() {


}).call(this);
(function() {


}).call(this);
(function() {


}).call(this);
(function() {


}).call(this);
(function() {


}).call(this);
(function() {


}).call(this);
$(document).ready(function(){
	$("#menu ul.main-menu li.main-menu.contact a").addClass("active");
});
(function() {


}).call(this);
$(document).ready(function(){
	$("#menu ul.main-menu li.main-menu.home a").addClass("active");
});
(function() {


}).call(this);
(function() {


}).call(this);
/*
 * jQuery EasIng v1.1.2 - http://gsgd.co.uk/sandbox/jquery.easIng.php
 *
 * Uses the built In easIng capabilities added In jQuery 1.1
 * to offer multiple easIng options
 *
 * Copyright (c) 2007 George Smith
 * Licensed under the MIT License:
 *   http://www.opensource.org/licenses/mit-license.php
 */

// t: current time, b: begInnIng value, c: change In value, d: duration

jQuery.extend( jQuery.easing,
{
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

// Easy Responsive Tabs Plugin
// Author: Samson.Onna <Email : samson3d@gmail.com>
(function ($) {
    $.fn.extend({
        easyResponsiveTabs: function (options) {
            //Set the default values, use comma to separate the settings, example:
            var defaults = {
                type: 'default', //default, vertical, accordion;
                width: 'auto',
                fit: true
            }
            //Variables
            var options = $.extend(defaults, options);            
            var opt = options, jtype = opt.type, jfit = opt.fit, jwidth = opt.width, vtabs = 'vertical', accord = 'accordion';

            //Main function
            this.each(function () {
                var $respTabs = $(this);
                $respTabs.find('ul.resp-tabs-list li').addClass('resp-tab-item');
                $respTabs.css({
                    'display': 'block',
                    'width': jwidth
                });

                $respTabs.find('.resp-tabs-container > div').addClass('resp-tab-content');
                jtab_options();
                //Properties Function
                function jtab_options() {
                    if (jtype == vtabs) {
                        $respTabs.addClass('resp-vtabs');
                    }
                    if (jfit == true) {
                        $respTabs.css({ width: '100%', margin: '0px' });
                    }
                    if (jtype == accord) {
                        $respTabs.addClass('resp-easy-accordion');
                        $respTabs.find('.resp-tabs-list').css('display', 'none');
                    }
                }

                //Assigning the h2 markup
                var $tabItemh2;
                $respTabs.find('.resp-tab-content').before("<h2 class='resp-accordion' role='tab'><span class='resp-arrow'></span></h2>");

                var itemCount = 0;
                $respTabs.find('.resp-accordion').each(function () {
                    $tabItemh2 = $(this);
                    var innertext = $respTabs.find('.resp-tab-item:eq(' + itemCount + ')').text();
                    $respTabs.find('.resp-accordion:eq(' + itemCount + ')').append(innertext);
                    $tabItemh2.attr('aria-controls', 'tab_item-' + (itemCount));
                    itemCount++;
                });

                //Assigning the 'aria-controls' to Tab items
                var count = 0,
                    $tabContent;
                $respTabs.find('.resp-tab-item').each(function () {
                    $tabItem = $(this);
                    $tabItem.attr('aria-controls', 'tab_item-' + (count));
                    $tabItem.attr('role', 'tab');

                    //First active tab                   
                    $respTabs.find('.resp-tab-item').first().addClass('resp-tab-active');
                    $respTabs.find('.resp-accordion').first().addClass('resp-tab-active');
                    $respTabs.find('.resp-tab-content').first().addClass('resp-tab-content-active').attr('style', 'display:block');

                    //Assigning the 'aria-labelledby' attr to tab-content
                    var tabcount = 0;
                    $respTabs.find('.resp-tab-content').each(function () {
                        $tabContent = $(this);
                        $tabContent.attr('aria-labelledby', 'tab_item-' + (tabcount));
                        tabcount++;
                    });
                    count++;
                });

                //Tab Click action function
                $respTabs.find("[role=tab]").each(function () {
                    var $currentTab = $(this);
                    $currentTab.click(function () {

                        var $tabAria = $currentTab.attr('aria-controls');

                        if ($currentTab.hasClass('resp-accordion') && $currentTab.hasClass('resp-tab-active')) {
                            $respTabs.find('.resp-tab-content-active').slideUp('', function () { $(this).addClass('resp-accordion-closed'); });
                            $currentTab.removeClass('resp-tab-active');
                            return false;
                        }
                        if (!$currentTab.hasClass('resp-tab-active') && $currentTab.hasClass('resp-accordion')) {
                            $respTabs.find('.resp-tab-active').removeClass('resp-tab-active');
                            $respTabs.find('.resp-tab-content-active').slideUp().removeClass('resp-tab-content-active resp-accordion-closed');
                            $respTabs.find("[aria-controls=" + $tabAria + "]").addClass('resp-tab-active');

                            $respTabs.find('.resp-tab-content[aria-labelledby = ' + $tabAria + ']').slideDown().addClass('resp-tab-content-active');
                        } else {
                            $respTabs.find('.resp-tab-active').removeClass('resp-tab-active');
                            $respTabs.find('.resp-tab-content-active').removeAttr('style').removeClass('resp-tab-content-active').removeClass('resp-accordion-closed');
                            $respTabs.find("[aria-controls=" + $tabAria + "]").addClass('resp-tab-active');
                            $respTabs.find('.resp-tab-content[aria-labelledby = ' + $tabAria + ']').addClass('resp-tab-content-active').attr('style', 'display:block');
                        }
                    });
                    //Window resize function                   
                    $(window).resize(function () {
                        $respTabs.find('.resp-accordion-closed').removeAttr('style');
                    });
                });
            });
        }
    });
})(jQuery);

$(document).ready(function(){
	$("#menu ul.main-menu li.main-menu.home a").addClass("active");
});
(function() {


}).call(this);
/*! jQuery v1.7.2 jquery.com | jquery.org/license */

(function(a,b){function cy(a){return f.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cu(a){if(!cj[a]){var b=c.body,d=f("<"+a+">").appendTo(b),e=d.css("display");d.remove();if(e==="none"||e===""){ck||(ck=c.createElement("iframe"),ck.frameBorder=ck.width=ck.height=0),b.appendChild(ck);if(!cl||!ck.createElement)cl=(ck.contentWindow||ck.contentDocument).document,cl.write((f.support.boxModel?"<!doctype html>":"")+"<html><body>"),cl.close();d=cl.createElement(a),cl.body.appendChild(d),e=f.css(d,"display"),b.removeChild(ck)}cj[a]=e}return cj[a]}function ct(a,b){var c={};f.each(cp.concat.apply([],cp.slice(0,b)),function(){c[this]=a});return c}function cs(){cq=b}function cr(){setTimeout(cs,0);return cq=f.now()}function ci(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function ch(){try{return new a.XMLHttpRequest}catch(b){}}function cb(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d=a.dataTypes,e={},g,h,i=d.length,j,k=d[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h=="string"&&(e[h.toLowerCase()]=a.converters[h]);l=k,k=d[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=e[m]||e["* "+k];if(!n){p=b;for(o in e){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=e[j[1]+" "+k];if(p){o=e[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&f.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function ca(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function b_(a,b,c,d){if(f.isArray(b))f.each(b,function(b,e){c||bD.test(a)?d(a,e):b_(a+"["+(typeof e=="object"?b:"")+"]",e,c,d)});else if(!c&&f.type(b)==="object")for(var e in b)b_(a+"["+e+"]",b[e],c,d);else d(a,b)}function b$(a,c){var d,e,g=f.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((g[d]?a:e||(e={}))[d]=c[d]);e&&f.extend(!0,a,e)}function bZ(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bS,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l=="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=bZ(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=bZ(a,c,d,e,"*",g));return l}function bY(a){return function(b,c){typeof b!="string"&&(c=b,b="*");if(f.isFunction(c)){var d=b.toLowerCase().split(bO),e=0,g=d.length,h,i,j;for(;e<g;e++)h=d[e],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function bB(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=b==="width"?1:0,g=4;if(d>0){if(c!=="border")for(;e<g;e+=2)c||(d-=parseFloat(f.css(a,"padding"+bx[e]))||0),c==="margin"?d+=parseFloat(f.css(a,c+bx[e]))||0:d-=parseFloat(f.css(a,"border"+bx[e]+"Width"))||0;return d+"px"}d=by(a,b);if(d<0||d==null)d=a.style[b];if(bt.test(d))return d;d=parseFloat(d)||0;if(c)for(;e<g;e+=2)d+=parseFloat(f.css(a,"padding"+bx[e]))||0,c!=="padding"&&(d+=parseFloat(f.css(a,"border"+bx[e]+"Width"))||0),c==="margin"&&(d+=parseFloat(f.css(a,c+bx[e]))||0);return d+"px"}function bo(a){var b=c.createElement("div");bh.appendChild(b),b.innerHTML=a.outerHTML;return b.firstChild}function bn(a){var b=(a.nodeName||"").toLowerCase();b==="input"?bm(a):b!=="script"&&typeof a.getElementsByTagName!="undefined"&&f.grep(a.getElementsByTagName("input"),bm)}function bm(a){if(a.type==="checkbox"||a.type==="radio")a.defaultChecked=a.checked}function bl(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bk(a,b){var c;b.nodeType===1&&(b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase(),c==="object"?b.outerHTML=a.outerHTML:c!=="input"||a.type!=="checkbox"&&a.type!=="radio"?c==="option"?b.selected=a.defaultSelected:c==="input"||c==="textarea"?b.defaultValue=a.defaultValue:c==="script"&&b.text!==a.text&&(b.text=a.text):(a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value)),b.removeAttribute(f.expando),b.removeAttribute("_submit_attached"),b.removeAttribute("_change_attached"))}function bj(a,b){if(b.nodeType===1&&!!f.hasData(a)){var c,d,e,g=f._data(a),h=f._data(b,g),i=g.events;if(i){delete h.handle,h.events={};for(c in i)for(d=0,e=i[c].length;d<e;d++)f.event.add(b,c,i[c][d])}h.data&&(h.data=f.extend({},h.data))}}function bi(a,b){return f.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function U(a){var b=V.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function T(a,b,c){b=b||0;if(f.isFunction(b))return f.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return f.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=f.grep(a,function(a){return a.nodeType===1});if(O.test(b))return f.filter(b,d,!c);b=f.filter(b,d)}return f.grep(a,function(a,d){return f.inArray(a,b)>=0===c})}function S(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function K(){return!0}function J(){return!1}function n(a,b,c){var d=b+"defer",e=b+"queue",g=b+"mark",h=f._data(a,d);h&&(c==="queue"||!f._data(a,e))&&(c==="mark"||!f._data(a,g))&&setTimeout(function(){!f._data(a,e)&&!f._data(a,g)&&(f.removeData(a,d,!0),h.fire())},0)}function m(a){for(var b in a){if(b==="data"&&f.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function l(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(k,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:f.isNumeric(d)?+d:j.test(d)?f.parseJSON(d):d}catch(g){}f.data(a,c,d)}else d=b}return d}function h(a){var b=g[a]={},c,d;a=a.split(/\s+/);for(c=0,d=a.length;c<d;c++)b[a[c]]=!0;return b}var c=a.document,d=a.navigator,e=a.location,f=function(){function J(){if(!e.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(J,1);return}e.ready()}}var e=function(a,b){return new e.fn.init(a,b,h)},f=a.jQuery,g=a.$,h,i=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,j=/\S/,k=/^\s+/,l=/\s+$/,m=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,n=/^[\],:{}\s]*$/,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q=/(?:^|:|,)(?:\s*\[)+/g,r=/(webkit)[ \/]([\w.]+)/,s=/(opera)(?:.*version)?[ \/]([\w.]+)/,t=/(msie) ([\w.]+)/,u=/(mozilla)(?:.*? rv:([\w.]+))?/,v=/-([a-z]|[0-9])/ig,w=/^-ms-/,x=function(a,b){return(b+"").toUpperCase()},y=d.userAgent,z,A,B,C=Object.prototype.toString,D=Object.prototype.hasOwnProperty,E=Array.prototype.push,F=Array.prototype.slice,G=String.prototype.trim,H=Array.prototype.indexOf,I={};e.fn=e.prototype={constructor:e,init:function(a,d,f){var g,h,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!d&&c.body){this.context=c,this[0]=c.body,this.selector=a,this.length=1;return this}if(typeof a=="string"){a.charAt(0)!=="<"||a.charAt(a.length-1)!==">"||a.length<3?g=i.exec(a):g=[null,a,null];if(g&&(g[1]||!d)){if(g[1]){d=d instanceof e?d[0]:d,k=d?d.ownerDocument||d:c,j=m.exec(a),j?e.isPlainObject(d)?(a=[c.createElement(j[1])],e.fn.attr.call(a,d,!0)):a=[k.createElement(j[1])]:(j=e.buildFragment([g[1]],[k]),a=(j.cacheable?e.clone(j.fragment):j.fragment).childNodes);return e.merge(this,a)}h=c.getElementById(g[2]);if(h&&h.parentNode){if(h.id!==g[2])return f.find(a);this.length=1,this[0]=h}this.context=c,this.selector=a;return this}return!d||d.jquery?(d||f).find(a):this.constructor(d).find(a)}if(e.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return e.makeArray(a,this)},selector:"",jquery:"1.7.2",length:0,size:function(){return this.length},toArray:function(){return F.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=this.constructor();e.isArray(a)?E.apply(d,a):e.merge(d,a),d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")");return d},each:function(a,b){return e.each(this,a,b)},ready:function(a){e.bindReady(),A.add(a);return this},eq:function(a){a=+a;return a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(F.apply(this,arguments),"slice",F.call(arguments).join(","))},map:function(a){return this.pushStack(e.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:E,sort:[].sort,splice:[].splice},e.fn.init.prototype=e.fn,e.extend=e.fn.extend=function(){var a,c,d,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i=="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!="object"&&!e.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){d=i[c],f=a[c];if(i===f)continue;l&&f&&(e.isPlainObject(f)||(g=e.isArray(f)))?(g?(g=!1,h=d&&e.isArray(d)?d:[]):h=d&&e.isPlainObject(d)?d:{},i[c]=e.extend(l,h,f)):f!==b&&(i[c]=f)}return i},e.extend({noConflict:function(b){a.$===e&&(a.$=g),b&&a.jQuery===e&&(a.jQuery=f);return e},isReady:!1,readyWait:1,holdReady:function(a){a?e.readyWait++:e.ready(!0)},ready:function(a){if(a===!0&&!--e.readyWait||a!==!0&&!e.isReady){if(!c.body)return setTimeout(e.ready,1);e.isReady=!0;if(a!==!0&&--e.readyWait>0)return;A.fireWith(c,[e]),e.fn.trigger&&e(c).trigger("ready").off("ready")}},bindReady:function(){if(!A){A=e.Callbacks("once memory");if(c.readyState==="complete")return setTimeout(e.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",B,!1),a.addEventListener("load",e.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",B),a.attachEvent("onload",e.ready);var b=!1;try{b=a.frameElement==null}catch(d){}c.documentElement.doScroll&&b&&J()}}},isFunction:function(a){return e.type(a)==="function"},isArray:Array.isArray||function(a){return e.type(a)==="array"},isWindow:function(a){return a!=null&&a==a.window},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):I[C.call(a)]||"object"},isPlainObject:function(a){if(!a||e.type(a)!=="object"||a.nodeType||e.isWindow(a))return!1;try{if(a.constructor&&!D.call(a,"constructor")&&!D.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||D.call(a,d)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw new Error(a)},parseJSON:function(b){if(typeof b!="string"||!b)return null;b=e.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(n.test(b.replace(o,"@").replace(p,"]").replace(q,"")))return(new Function("return "+b))();e.error("Invalid JSON: "+b)},parseXML:function(c){if(typeof c!="string"||!c)return null;var d,f;try{a.DOMParser?(f=new DOMParser,d=f.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(g){d=b}(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&e.error("Invalid XML: "+c);return d},noop:function(){},globalEval:function(b){b&&j.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(w,"ms-").replace(v,x)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var f,g=0,h=a.length,i=h===b||e.isFunction(a);if(d){if(i){for(f in a)if(c.apply(a[f],d)===!1)break}else for(;g<h;)if(c.apply(a[g++],d)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(;g<h;)if(c.call(a[g],g,a[g++])===!1)break;return a},trim:G?function(a){return a==null?"":G.call(a)}:function(a){return a==null?"":(a+"").replace(k,"").replace(l,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var d=e.type(a);a.length==null||d==="string"||d==="function"||d==="regexp"||e.isWindow(a)?E.call(c,a):e.merge(c,a)}return c},inArray:function(a,b,c){var d;if(b){if(H)return H.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length=="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,c,d){var f,g,h=[],i=0,j=a.length,k=a instanceof e||j!==b&&typeof j=="number"&&(j>0&&a[0]&&a[j-1]||j===0||e.isArray(a));if(k)for(;i<j;i++)f=c(a[i],i,d),f!=null&&(h[h.length]=f);else for(g in a)f=c(a[g],g,d),f!=null&&(h[h.length]=f);return h.concat.apply([],h)},guid:1,proxy:function(a,c){if(typeof c=="string"){var d=a[c];c=a,a=d}if(!e.isFunction(a))return b;var f=F.call(arguments,2),g=function(){return a.apply(c,f.concat(F.call(arguments)))};g.guid=a.guid=a.guid||g.guid||e.guid++;return g},access:function(a,c,d,f,g,h,i){var j,k=d==null,l=0,m=a.length;if(d&&typeof d=="object"){for(l in d)e.access(a,c,l,d[l],1,h,f);g=1}else if(f!==b){j=i===b&&e.isFunction(f),k&&(j?(j=c,c=function(a,b,c){return j.call(e(a),c)}):(c.call(a,f),c=null));if(c)for(;l<m;l++)c(a[l],d,j?f.call(a[l],l,c(a[l],d)):f,i);g=1}return g?a:k?c.call(a):m?c(a[0],d):h},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=r.exec(a)||s.exec(a)||t.exec(a)||a.indexOf("compatible")<0&&u.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}e.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(d,f){f&&f instanceof e&&!(f instanceof a)&&(f=a(f));return e.fn.init.call(this,d,f,b)},a.fn.init.prototype=a.fn;var b=a(c);return a},browser:{}}),e.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){I["[object "+b+"]"]=b.toLowerCase()}),z=e.uaMatch(y),z.browser&&(e.browser[z.browser]=!0,e.browser.version=z.version),e.browser.webkit&&(e.browser.safari=!0),j.test("Â ")&&(k=/^[\s\xA0]+/,l=/[\s\xA0]+$/),h=e(c),c.addEventListener?B=function(){c.removeEventListener("DOMContentLoaded",B,!1),e.ready()}:c.attachEvent&&(B=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",B),e.ready())});return e}(),g={};f.Callbacks=function(a){a=a?g[a]||h(a):{};var c=[],d=[],e,i,j,k,l,m,n=function(b){var d,e,g,h,i;for(d=0,e=b.length;d<e;d++)g=b[d],h=f.type(g),h==="array"?n(g):h==="function"&&(!a.unique||!p.has(g))&&c.push(g)},o=function(b,f){f=f||[],e=!a.memory||[b,f],i=!0,j=!0,m=k||0,k=0,l=c.length;for(;c&&m<l;m++)if(c[m].apply(b,f)===!1&&a.stopOnFalse){e=!0;break}j=!1,c&&(a.once?e===!0?p.disable():c=[]:d&&d.length&&(e=d.shift(),p.fireWith(e[0],e[1])))},p={add:function(){if(c){var a=c.length;n(arguments),j?l=c.length:e&&e!==!0&&(k=a,o(e[0],e[1]))}return this},remove:function(){if(c){var b=arguments,d=0,e=b.length;for(;d<e;d++)for(var f=0;f<c.length;f++)if(b[d]===c[f]){j&&f<=l&&(l--,f<=m&&m--),c.splice(f--,1);if(a.unique)break}}return this},has:function(a){if(c){var b=0,d=c.length;for(;b<d;b++)if(a===c[b])return!0}return!1},empty:function(){c=[];return this},disable:function(){c=d=e=b;return this},disabled:function(){return!c},lock:function(){d=b,(!e||e===!0)&&p.disable();return this},locked:function(){return!d},fireWith:function(b,c){d&&(j?a.once||d.push([b,c]):(!a.once||!e)&&o(b,c));return this},fire:function(){p.fireWith(this,arguments);return this},fired:function(){return!!i}};return p};var i=[].slice;f.extend({Deferred:function(a){var b=f.Callbacks("once memory"),c=f.Callbacks("once memory"),d=f.Callbacks("memory"),e="pending",g={resolve:b,reject:c,notify:d},h={done:b.add,fail:c.add,progress:d.add,state:function(){return e},isResolved:b.fired,isRejected:c.fired,then:function(a,b,c){i.done(a).fail(b).progress(c);return this},always:function(){i.done.apply(i,arguments).fail.apply(i,arguments);return this},pipe:function(a,b,c){return f.Deferred(function(d){f.each({done:[a,"resolve"],fail:[b,"reject"],progress:[c,"notify"]},function(a,b){var c=b[0],e=b[1],g;f.isFunction(c)?i[a](function(){g=c.apply(this,arguments),g&&f.isFunction(g.promise)?g.promise().then(d.resolve,d.reject,d.notify):d[e+"With"](this===i?d:this,[g])}):i[a](d[e])})}).promise()},promise:function(a){if(a==null)a=h;else for(var b in h)a[b]=h[b];return a}},i=h.promise({}),j;for(j in g)i[j]=g[j].fire,i[j+"With"]=g[j].fireWith;i.done(function(){e="resolved"},c.disable,d.lock).fail(function(){e="rejected"},b.disable,d.lock),a&&a.call(i,i);return i},when:function(a){function m(a){return function(b){e[a]=arguments.length>1?i.call(arguments,0):b,j.notifyWith(k,e)}}function l(a){return function(c){b[a]=arguments.length>1?i.call(arguments,0):c,--g||j.resolveWith(j,b)}}var b=i.call(arguments,0),c=0,d=b.length,e=Array(d),g=d,h=d,j=d<=1&&a&&f.isFunction(a.promise)?a:f.Deferred(),k=j.promise();if(d>1){for(;c<d;c++)b[c]&&b[c].promise&&f.isFunction(b[c].promise)?b[c].promise().then(l(c),j.reject,m(c)):--g;g||j.resolveWith(j,b)}else j!==a&&j.resolveWith(j,d?[a]:[]);return k}}),f.support=function(){var b,d,e,g,h,i,j,k,l,m,n,o,p=c.createElement("div"),q=c.documentElement;p.setAttribute("className","t"),p.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",d=p.getElementsByTagName("*"),e=p.getElementsByTagName("a")[0];if(!d||!d.length||!e)return{};g=c.createElement("select"),h=g.appendChild(c.createElement("option")),i=p.getElementsByTagName("input")[0],b={leadingWhitespace:p.firstChild.nodeType===3,tbody:!p.getElementsByTagName("tbody").length,htmlSerialize:!!p.getElementsByTagName("link").length,style:/top/.test(e.getAttribute("style")),hrefNormalized:e.getAttribute("href")==="/a",opacity:/^0.55/.test(e.style.opacity),cssFloat:!!e.style.cssFloat,checkOn:i.value==="on",optSelected:h.selected,getSetAttribute:p.className!=="t",enctype:!!c.createElement("form").enctype,html5Clone:c.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,pixelMargin:!0},f.boxModel=b.boxModel=c.compatMode==="CSS1Compat",i.checked=!0,b.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,b.optDisabled=!h.disabled;try{delete p.test}catch(r){b.deleteExpando=!1}!p.addEventListener&&p.attachEvent&&p.fireEvent&&(p.attachEvent("onclick",function(){b.noCloneEvent=!1}),p.cloneNode(!0).fireEvent("onclick")),i=c.createElement("input"),i.value="t",i.setAttribute("type","radio"),b.radioValue=i.value==="t",i.setAttribute("checked","checked"),i.setAttribute("name","t"),p.appendChild(i),j=c.createDocumentFragment(),j.appendChild(p.lastChild),b.checkClone=j.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=i.checked,j.removeChild(i),j.appendChild(p);if(p.attachEvent)for(n in{submit:1,change:1,focusin:1})m="on"+n,o=m in p,o||(p.setAttribute(m,"return;"),o=typeof p[m]=="function"),b[n+"Bubbles"]=o;j.removeChild(p),j=g=h=p=i=null,f(function(){var d,e,g,h,i,j,l,m,n,q,r,s,t,u=c.getElementsByTagName("body")[0];!u||(m=1,t="padding:0;margin:0;border:",r="position:absolute;top:0;left:0;width:1px;height:1px;",s=t+"0;visibility:hidden;",n="style='"+r+t+"5px solid #000;",q="<div "+n+"display:block;'><div style='"+t+"0;display:block;overflow:hidden;'></div></div>"+"<table "+n+"' cellpadding='0' cellspacing='0'>"+"<tr><td></td></tr></table>",d=c.createElement("div"),d.style.cssText=s+"width:0;height:0;position:static;top:0;margin-top:"+m+"px",u.insertBefore(d,u.firstChild),p=c.createElement("div"),d.appendChild(p),p.innerHTML="<table><tr><td style='"+t+"0;display:none'></td><td>t</td></tr></table>",k=p.getElementsByTagName("td"),o=k[0].offsetHeight===0,k[0].style.display="",k[1].style.display="none",b.reliableHiddenOffsets=o&&k[0].offsetHeight===0,a.getComputedStyle&&(p.innerHTML="",l=c.createElement("div"),l.style.width="0",l.style.marginRight="0",p.style.width="2px",p.appendChild(l),b.reliableMarginRight=(parseInt((a.getComputedStyle(l,null)||{marginRight:0}).marginRight,10)||0)===0),typeof p.style.zoom!="undefined"&&(p.innerHTML="",p.style.width=p.style.padding="1px",p.style.border=0,p.style.overflow="hidden",p.style.display="inline",p.style.zoom=1,b.inlineBlockNeedsLayout=p.offsetWidth===3,p.style.display="block",p.style.overflow="visible",p.innerHTML="<div style='width:5px;'></div>",b.shrinkWrapBlocks=p.offsetWidth!==3),p.style.cssText=r+s,p.innerHTML=q,e=p.firstChild,g=e.firstChild,i=e.nextSibling.firstChild.firstChild,j={doesNotAddBorder:g.offsetTop!==5,doesAddBorderForTableAndCells:i.offsetTop===5},g.style.position="fixed",g.style.top="20px",j.fixedPosition=g.offsetTop===20||g.offsetTop===15,g.style.position=g.style.top="",e.style.overflow="hidden",e.style.position="relative",j.subtractsBorderForOverflowNotVisible=g.offsetTop===-5,j.doesNotIncludeMarginInBodyOffset=u.offsetTop!==m,a.getComputedStyle&&(p.style.marginTop="1%",b.pixelMargin=(a.getComputedStyle(p,null)||{marginTop:0}).marginTop!=="1%"),typeof d.style.zoom!="undefined"&&(d.style.zoom=1),u.removeChild(d),l=p=d=null,f.extend(b,j))});return b}();var j=/^(?:\{.*\}|\[.*\])$/,k=/([A-Z])/g;f.extend({cache:{},uuid:0,expando:"jQuery"+(f.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?f.cache[a[f.expando]]:a[f.expando];return!!a&&!m(a)},data:function(a,c,d,e){if(!!f.acceptData(a)){var g,h,i,j=f.expando,k=typeof c=="string",l=a.nodeType,m=l?f.cache:a,n=l?a[j]:a[j]&&j,o=c==="events";if((!n||!m[n]||!o&&!e&&!m[n].data)&&k&&d===b)return;n||(l?a[j]=n=++f.uuid:n=j),m[n]||(m[n]={},l||(m[n].toJSON=f.noop));if(typeof c=="object"||typeof c=="function")e?m[n]=f.extend(m[n],c):m[n].data=f.extend(m[n].data,c);g=h=m[n],e||(h.data||(h.data={}),h=h.data),d!==b&&(h[f.camelCase(c)]=d);if(o&&!h[c])return g.events;k?(i=h[c],i==null&&(i=h[f.camelCase(c)])):i=h;return i}},removeData:function(a,b,c){if(!!f.acceptData(a)){var d,e,g,h=f.expando,i=a.nodeType,j=i?f.cache:a,k=i?a[h]:h;if(!j[k])return;if(b){d=c?j[k]:j[k].data;if(d){f.isArray(b)||(b in d?b=[b]:(b=f.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,g=b.length;e<g;e++)delete d[b[e]];if(!(c?m:f.isEmptyObject)(d))return}}if(!c){delete j[k].data;if(!m(j[k]))return}f.support.deleteExpando||!j.setInterval?delete j[k]:j[k]=null,i&&(f.support.deleteExpando?delete a[h]:a.removeAttribute?a.removeAttribute(h):a[h]=null)}},_data:function(a,b,c){return f.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=f.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),f.fn.extend({data:function(a,c){var d,e,g,h,i,j=this[0],k=0,m=null;if(a===b){if(this.length){m=f.data(j);if(j.nodeType===1&&!f._data(j,"parsedAttrs")){g=j.attributes;for(i=g.length;k<i;k++)h=g[k].name,h.indexOf("data-")===0&&(h=f.camelCase(h.substring(5)),l(j,h,m[h]));f._data(j,"parsedAttrs",!0)}}return m}if(typeof a=="object")return this.each(function(){f.data(this,a)});d=a.split(".",2),d[1]=d[1]?"."+d[1]:"",e=d[1]+"!";return f.access(this,function(c){if(c===b){m=this.triggerHandler("getData"+e,[d[0]]),m===b&&j&&(m=f.data(j,a),m=l(j,a,m));return m===b&&d[1]?this.data(d[0]):m}d[1]=c,this.each(function(){var b=f(this);b.triggerHandler("setData"+e,d),f.data(this,a,c),b.triggerHandler("changeData"+e,d)})},null,c,arguments.length>1,null,!1)},removeData:function(a){return this.each(function(){f.removeData(this,a)})}}),f.extend({_mark:function(a,b){a&&(b=(b||"fx")+"mark",f._data(a,b,(f._data(a,b)||0)+1))},_unmark:function(a,b,c){a!==!0&&(c=b,b=a,a=!1);if(b){c=c||"fx";var d=c+"mark",e=a?0:(f._data(b,d)||1)-1;e?f._data(b,d,e):(f.removeData(b,d,!0),n(b,c,"mark"))}},queue:function(a,b,c){var d;if(a){b=(b||"fx")+"queue",d=f._data(a,b),c&&(!d||f.isArray(c)?d=f._data(a,b,f.makeArray(c)):d.push(c));return d||[]}},dequeue:function(a,b){b=b||"fx";var c=f.queue(a,b),d=c.shift(),e={};d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),f._data(a,b+".run",e),d.call(a,function(){f.dequeue(a,b)},e)),c.length||(f.removeData(a,b+"queue "+b+".run",!0),n(a,b,"queue"))}}),f.fn.extend({queue:function(a,c){var d=2;typeof a!="string"&&(c=a,a="fx",d--);if(arguments.length<d)return f.queue(this[0],a);return c===b?this:this.each(function(){var b=f.queue(this,a,c);a==="fx"&&b[0]!=="inprogress"&&f.dequeue(this,a)})},dequeue:function(a){return this.each(function(){f.dequeue(this,a)})},delay:function(a,b){a=f.fx?f.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){function m(){--h||d.resolveWith(e,[e])}typeof a!="string"&&(c=a,a=b),a=a||"fx";var d=f.Deferred(),e=this,g=e.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark",l;while(g--)if(l=f.data(e[g],i,b,!0)||(f.data(e[g],j,b,!0)||f.data(e[g],k,b,!0))&&f.data(e[g],i,f.Callbacks("once memory"),!0))h++,l.add(m);m();return d.promise(c)}});var o=/[\n\t\r]/g,p=/\s+/,q=/\r/g,r=/^(?:button|input)$/i,s=/^(?:button|input|object|select|textarea)$/i,t=/^a(?:rea)?$/i,u=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,v=f.support.getSetAttribute,w,x,y;f.fn.extend({attr:function(a,b){return f.access(this,f.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){f.removeAttr(this,a)})},prop:function(a,b){return f.access(this,f.prop,a,b,arguments.length>1)},removeProp:function(a){a=f.propFix[a]||a;return this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,g,h,i;if(f.isFunction(a))return this.each(function(b){f(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(p);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{g=" "+e.className+" ";for(h=0,i=b.length;h<i;h++)~g.indexOf(" "+b[h]+" ")||(g+=b[h]+" ");e.className=f.trim(g)}}}return this},removeClass:function(a){var c,d,e,g,h,i,j;if(f.isFunction(a))return this.each(function(b){f(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(p);for(d=0,e=this.length;d<e;d++){g=this[d];if(g.nodeType===1&&g.className)if(a){h=(" "+g.className+" ").replace(o," ");for(i=0,j=c.length;i<j;i++)h=h.replace(" "+c[i]+" "," ");g.className=f.trim(h)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";if(f.isFunction(a))return this.each(function(c){f(this).toggleClass(a.call(this,c,this.className,b),b)});return this.each(function(){if(c==="string"){var e,g=0,h=f(this),i=b,j=a.split(p);while(e=j[g++])i=d?i:!h.hasClass(e),h[i?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&f._data(this,"__className__",this.className),this.className=this.className||a===!1?"":f._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(o," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e,g=this[0];{if(!!arguments.length){e=f.isFunction(a);return this.each(function(d){var g=f(this),h;if(this.nodeType===1){e?h=a.call(this,d,g.val()):h=a,h==null?h="":typeof h=="number"?h+="":f.isArray(h)&&(h=f.map(h,function(a){return a==null?"":a+""})),c=f.valHooks[this.type]||f.valHooks[this.nodeName.toLowerCase()];if(!c||!("set"in c)||c.set(this,h,"value")===b)this.value=h}})}if(g){c=f.valHooks[g.type]||f.valHooks[g.nodeName.toLowerCase()];if(c&&"get"in c&&(d=c.get(g,"value"))!==b)return d;d=g.value;return typeof d=="string"?d.replace(q,""):d==null?"":d}}}}),f.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,g=a.selectedIndex,h=[],i=a.options,j=a.type==="select-one";if(g<0)return null;c=j?g:0,d=j?g+1:i.length;for(;c<d;c++){e=i[c];if(e.selected&&(f.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!f.nodeName(e.parentNode,"optgroup"))){b=f(e).val();if(j)return b;h.push(b)}}if(j&&!h.length&&i.length)return f(i[g]).val();return h},set:function(a,b){var c=f.makeArray(b);f(a).find("option").each(function(){this.selected=f.inArray(f(this).val(),c)>=0}),c.length||(a.selectedIndex=-1);return c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,d,e){var g,h,i,j=a.nodeType;if(!!a&&j!==3&&j!==8&&j!==2){if(e&&c in f.attrFn)return f(a)[c](d);if(typeof a.getAttribute=="undefined")return f.prop(a,c,d);i=j!==1||!f.isXMLDoc(a),i&&(c=c.toLowerCase(),h=f.attrHooks[c]||(u.test(c)?x:w));if(d!==b){if(d===null){f.removeAttr(a,c);return}if(h&&"set"in h&&i&&(g=h.set(a,d,c))!==b)return g;a.setAttribute(c,""+d);return d}if(h&&"get"in h&&i&&(g=h.get(a,c))!==null)return g;g=a.getAttribute(c);return g===null?b:g}},removeAttr:function(a,b){var c,d,e,g,h,i=0;if(b&&a.nodeType===1){d=b.toLowerCase().split(p),g=d.length;for(;i<g;i++)e=d[i],e&&(c=f.propFix[e]||e,h=u.test(e),h||f.attr(a,e,""),a.removeAttribute(v?e:c),h&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(r.test(a.nodeName)&&a.parentNode)f.error("type property can't be changed");else if(!f.support.radioValue&&b==="radio"&&f.nodeName(a,"input")){var c=a.value;a.setAttribute("type",b),c&&(a.value=c);return b}}},value:{get:function(a,b){if(w&&f.nodeName(a,"button"))return w.get(a,b);return b in a?a.value:null},set:function(a,b,c){if(w&&f.nodeName(a,"button"))return w.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,g,h,i=a.nodeType;if(!!a&&i!==3&&i!==8&&i!==2){h=i!==1||!f.isXMLDoc(a),h&&(c=f.propFix[c]||c,g=f.propHooks[c]);return d!==b?g&&"set"in g&&(e=g.set(a,d,c))!==b?e:a[c]=d:g&&"get"in g&&(e=g.get(a,c))!==null?e:a[c]}},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):s.test(a.nodeName)||t.test(a.nodeName)&&a.href?0:b}}}}),f.attrHooks.tabindex=f.propHooks.tabIndex,x={get:function(a,c){var d,e=f.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;b===!1?f.removeAttr(a,c):(d=f.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase()));return c}},v||(y={name:!0,id:!0,coords:!0},w=f.valHooks.button={get:function(a,c){var d;d=a.getAttributeNode(c);return d&&(y[c]?d.nodeValue!=="":d.specified)?d.nodeValue:b},set:function(a,b,d){var e=a.getAttributeNode(d);e||(e=c.createAttribute(d),a.setAttributeNode(e));return e.nodeValue=b+""}},f.attrHooks.tabindex.set=w.set,f.each(["width","height"],function(a,b){f.attrHooks[b]=f.extend(f.attrHooks[b],{set:function(a,c){if(c===""){a.setAttribute(b,"auto");return c}}})}),f.attrHooks.contenteditable={get:w.get,set:function(a,b,c){b===""&&(b="false"),w.set(a,b,c)}}),f.support.hrefNormalized||f.each(["href","src","width","height"],function(a,c){f.attrHooks[c]=f.extend(f.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),f.support.style||(f.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),f.support.optSelected||(f.propHooks.selected=f.extend(f.propHooks.selected,{get:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex);return null}})),f.support.enctype||(f.propFix.enctype="encoding"),f.support.checkOn||f.each(["radio","checkbox"],function(){f.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]=f.extend(f.valHooks[this],{set:function(a,b){if(f.isArray(b))return a.checked=f.inArray(f(a).val(),b)>=0}})});var z=/^(?:textarea|input|select)$/i,A=/^([^\.]*)?(?:\.(.+))?$/,B=/(?:^|\s)hover(\.\S+)?\b/,C=/^key/,D=/^(?:mouse|contextmenu)|click/,E=/^(?:focusinfocus|focusoutblur)$/,F=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,G=function(
a){var b=F.exec(a);b&&(b[1]=(b[1]||"").toLowerCase(),b[3]=b[3]&&new RegExp("(?:^|\\s)"+b[3]+"(?:\\s|$)"));return b},H=function(a,b){var c=a.attributes||{};return(!b[1]||a.nodeName.toLowerCase()===b[1])&&(!b[2]||(c.id||{}).value===b[2])&&(!b[3]||b[3].test((c["class"]||{}).value))},I=function(a){return f.event.special.hover?a:a.replace(B,"mouseenter$1 mouseleave$1")};f.event={add:function(a,c,d,e,g){var h,i,j,k,l,m,n,o,p,q,r,s;if(!(a.nodeType===3||a.nodeType===8||!c||!d||!(h=f._data(a)))){d.handler&&(p=d,d=p.handler,g=p.selector),d.guid||(d.guid=f.guid++),j=h.events,j||(h.events=j={}),i=h.handle,i||(h.handle=i=function(a){return typeof f!="undefined"&&(!a||f.event.triggered!==a.type)?f.event.dispatch.apply(i.elem,arguments):b},i.elem=a),c=f.trim(I(c)).split(" ");for(k=0;k<c.length;k++){l=A.exec(c[k])||[],m=l[1],n=(l[2]||"").split(".").sort(),s=f.event.special[m]||{},m=(g?s.delegateType:s.bindType)||m,s=f.event.special[m]||{},o=f.extend({type:m,origType:l[1],data:e,handler:d,guid:d.guid,selector:g,quick:g&&G(g),namespace:n.join(".")},p),r=j[m];if(!r){r=j[m]=[],r.delegateCount=0;if(!s.setup||s.setup.call(a,e,n,i)===!1)a.addEventListener?a.addEventListener(m,i,!1):a.attachEvent&&a.attachEvent("on"+m,i)}s.add&&(s.add.call(a,o),o.handler.guid||(o.handler.guid=d.guid)),g?r.splice(r.delegateCount++,0,o):r.push(o),f.event.global[m]=!0}a=null}},global:{},remove:function(a,b,c,d,e){var g=f.hasData(a)&&f._data(a),h,i,j,k,l,m,n,o,p,q,r,s;if(!!g&&!!(o=g.events)){b=f.trim(I(b||"")).split(" ");for(h=0;h<b.length;h++){i=A.exec(b[h])||[],j=k=i[1],l=i[2];if(!j){for(j in o)f.event.remove(a,j+b[h],c,d,!0);continue}p=f.event.special[j]||{},j=(d?p.delegateType:p.bindType)||j,r=o[j]||[],m=r.length,l=l?new RegExp("(^|\\.)"+l.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null;for(n=0;n<r.length;n++)s=r[n],(e||k===s.origType)&&(!c||c.guid===s.guid)&&(!l||l.test(s.namespace))&&(!d||d===s.selector||d==="**"&&s.selector)&&(r.splice(n--,1),s.selector&&r.delegateCount--,p.remove&&p.remove.call(a,s));r.length===0&&m!==r.length&&((!p.teardown||p.teardown.call(a,l)===!1)&&f.removeEvent(a,j,g.handle),delete o[j])}f.isEmptyObject(o)&&(q=g.handle,q&&(q.elem=null),f.removeData(a,["events","handle"],!0))}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,g){if(!e||e.nodeType!==3&&e.nodeType!==8){var h=c.type||c,i=[],j,k,l,m,n,o,p,q,r,s;if(E.test(h+f.event.triggered))return;h.indexOf("!")>=0&&(h=h.slice(0,-1),k=!0),h.indexOf(".")>=0&&(i=h.split("."),h=i.shift(),i.sort());if((!e||f.event.customEvent[h])&&!f.event.global[h])return;c=typeof c=="object"?c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.isTrigger=!0,c.exclusive=k,c.namespace=i.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+i.join("\\.(?:.*\\.)?")+"(\\.|$)"):null,o=h.indexOf(":")<0?"on"+h:"";if(!e){j=f.cache;for(l in j)j[l].events&&j[l].events[h]&&f.event.trigger(c,d,j[l].handle.elem,!0);return}c.result=b,c.target||(c.target=e),d=d!=null?f.makeArray(d):[],d.unshift(c),p=f.event.special[h]||{};if(p.trigger&&p.trigger.apply(e,d)===!1)return;r=[[e,p.bindType||h]];if(!g&&!p.noBubble&&!f.isWindow(e)){s=p.delegateType||h,m=E.test(s+h)?e:e.parentNode,n=null;for(;m;m=m.parentNode)r.push([m,s]),n=m;n&&n===e.ownerDocument&&r.push([n.defaultView||n.parentWindow||a,s])}for(l=0;l<r.length&&!c.isPropagationStopped();l++)m=r[l][0],c.type=r[l][1],q=(f._data(m,"events")||{})[c.type]&&f._data(m,"handle"),q&&q.apply(m,d),q=o&&m[o],q&&f.acceptData(m)&&q.apply(m,d)===!1&&c.preventDefault();c.type=h,!g&&!c.isDefaultPrevented()&&(!p._default||p._default.apply(e.ownerDocument,d)===!1)&&(h!=="click"||!f.nodeName(e,"a"))&&f.acceptData(e)&&o&&e[h]&&(h!=="focus"&&h!=="blur"||c.target.offsetWidth!==0)&&!f.isWindow(e)&&(n=e[o],n&&(e[o]=null),f.event.triggered=h,e[h](),f.event.triggered=b,n&&(e[o]=n));return c.result}},dispatch:function(c){c=f.event.fix(c||a.event);var d=(f._data(this,"events")||{})[c.type]||[],e=d.delegateCount,g=[].slice.call(arguments,0),h=!c.exclusive&&!c.namespace,i=f.event.special[c.type]||{},j=[],k,l,m,n,o,p,q,r,s,t,u;g[0]=c,c.delegateTarget=this;if(!i.preDispatch||i.preDispatch.call(this,c)!==!1){if(e&&(!c.button||c.type!=="click")){n=f(this),n.context=this.ownerDocument||this;for(m=c.target;m!=this;m=m.parentNode||this)if(m.disabled!==!0){p={},r=[],n[0]=m;for(k=0;k<e;k++)s=d[k],t=s.selector,p[t]===b&&(p[t]=s.quick?H(m,s.quick):n.is(t)),p[t]&&r.push(s);r.length&&j.push({elem:m,matches:r})}}d.length>e&&j.push({elem:this,matches:d.slice(e)});for(k=0;k<j.length&&!c.isPropagationStopped();k++){q=j[k],c.currentTarget=q.elem;for(l=0;l<q.matches.length&&!c.isImmediatePropagationStopped();l++){s=q.matches[l];if(h||!c.namespace&&!s.namespace||c.namespace_re&&c.namespace_re.test(s.namespace))c.data=s.data,c.handleObj=s,o=((f.event.special[s.origType]||{}).handle||s.handler).apply(q.elem,g),o!==b&&(c.result=o,o===!1&&(c.preventDefault(),c.stopPropagation()))}}i.postDispatch&&i.postDispatch.call(this,c);return c.result}},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode);return a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,d){var e,f,g,h=d.button,i=d.fromElement;a.pageX==null&&d.clientX!=null&&(e=a.target.ownerDocument||c,f=e.documentElement,g=e.body,a.pageX=d.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=d.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?d.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0);return a}},fix:function(a){if(a[f.expando])return a;var d,e,g=a,h=f.event.fixHooks[a.type]||{},i=h.props?this.props.concat(h.props):this.props;a=f.Event(g);for(d=i.length;d;)e=i[--d],a[e]=g[e];a.target||(a.target=g.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey===b&&(a.metaKey=a.ctrlKey);return h.filter?h.filter(a,g):a},special:{ready:{setup:f.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){f.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=f.extend(new f.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?f.event.trigger(e,null,b):f.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},f.event.handle=f.event.dispatch,f.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},f.Event=function(a,b){if(!(this instanceof f.Event))return new f.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?K:J):this.type=a,b&&f.extend(this,b),this.timeStamp=a&&a.timeStamp||f.now(),this[f.expando]=!0},f.Event.prototype={preventDefault:function(){this.isDefaultPrevented=K;var a=this.originalEvent;!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=K;var a=this.originalEvent;!a||(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=K,this.stopPropagation()},isDefaultPrevented:J,isPropagationStopped:J,isImmediatePropagationStopped:J},f.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){f.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c=this,d=a.relatedTarget,e=a.handleObj,g=e.selector,h;if(!d||d!==c&&!f.contains(c,d))a.type=e.origType,h=e.handler.apply(this,arguments),a.type=b;return h}}}),f.support.submitBubbles||(f.event.special.submit={setup:function(){if(f.nodeName(this,"form"))return!1;f.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=f.nodeName(c,"input")||f.nodeName(c,"button")?c.form:b;d&&!d._submit_attached&&(f.event.add(d,"submit._submit",function(a){a._submit_bubble=!0}),d._submit_attached=!0)})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&f.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){if(f.nodeName(this,"form"))return!1;f.event.remove(this,"._submit")}}),f.support.changeBubbles||(f.event.special.change={setup:function(){if(z.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")f.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),f.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1,f.event.simulate("change",this,a,!0))});return!1}f.event.add(this,"beforeactivate._change",function(a){var b=a.target;z.test(b.nodeName)&&!b._change_attached&&(f.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&f.event.simulate("change",this.parentNode,a,!0)}),b._change_attached=!0)})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){f.event.remove(this,"._change");return z.test(this.nodeName)}}),f.support.focusinBubbles||f.each({focus:"focusin",blur:"focusout"},function(a,b){var d=0,e=function(a){f.event.simulate(b,a.target,f.event.fix(a),!0)};f.event.special[b]={setup:function(){d++===0&&c.addEventListener(a,e,!0)},teardown:function(){--d===0&&c.removeEventListener(a,e,!0)}}}),f.fn.extend({on:function(a,c,d,e,g){var h,i;if(typeof a=="object"){typeof c!="string"&&(d=d||c,c=b);for(i in a)this.on(i,c,d,a[i],g);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=J;else if(!e)return this;g===1&&(h=e,e=function(a){f().off(a);return h.apply(this,arguments)},e.guid=h.guid||(h.guid=f.guid++));return this.each(function(){f.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,c,d){if(a&&a.preventDefault&&a.handleObj){var e=a.handleObj;f(a.delegateTarget).off(e.namespace?e.origType+"."+e.namespace:e.origType,e.selector,e.handler);return this}if(typeof a=="object"){for(var g in a)this.off(g,c,a[g]);return this}if(c===!1||typeof c=="function")d=c,c=b;d===!1&&(d=J);return this.each(function(){f.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){f(this.context).on(a,this.selector,b,c);return this},die:function(a,b){f(this.context).off(a,this.selector||"**",b);return this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length==1?this.off(a,"**"):this.off(b,a,c)},trigger:function(a,b){return this.each(function(){f.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return f.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||f.guid++,d=0,e=function(c){var e=(f._data(this,"lastToggle"+a.guid)||0)%d;f._data(this,"lastToggle"+a.guid,e+1),c.preventDefault();return b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){f.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.on(b,null,a,c):this.trigger(b)},f.attrFn&&(f.attrFn[b]=!0),C.test(b)&&(f.event.fixHooks[b]=f.event.keyHooks),D.test(b)&&(f.event.fixHooks[b]=f.event.mouseHooks)}),function(){function x(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}if(j.nodeType===1){g||(j[d]=c,j.sizset=h);if(typeof b!="string"){if(j===b){k=!0;break}}else if(m.filter(b,[j]).length>0){k=j;break}}j=j[a]}e[h]=k}}}function w(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}j.nodeType===1&&!g&&(j[d]=c,j.sizset=h);if(j.nodeName.toLowerCase()===b){k=j;break}j=j[a]}e[h]=k}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d="sizcache"+(Math.random()+"").replace(".",""),e=0,g=Object.prototype.toString,h=!1,i=!0,j=/\\/g,k=/\r\n/g,l=/\W/;[0,0].sort(function(){i=!1;return 0});var m=function(b,d,e,f){e=e||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!="string")return e;var i,j,k,l,n,q,r,t,u=!0,v=m.isXML(d),w=[],x=b;do{a.exec(""),i=a.exec(x);if(i){x=i[3],w.push(i[1]);if(i[2]){l=i[3];break}}}while(i);if(w.length>1&&p.exec(b))if(w.length===2&&o.relative[w[0]])j=y(w[0]+w[1],d,f);else{j=o.relative[w[0]]?[d]:m(w.shift(),d);while(w.length)b=w.shift(),o.relative[b]&&(b+=w.shift()),j=y(b,j,f)}else{!f&&w.length>1&&d.nodeType===9&&!v&&o.match.ID.test(w[0])&&!o.match.ID.test(w[w.length-1])&&(n=m.find(w.shift(),d,v),d=n.expr?m.filter(n.expr,n.set)[0]:n.set[0]);if(d){n=f?{expr:w.pop(),set:s(f)}:m.find(w.pop(),w.length===1&&(w[0]==="~"||w[0]==="+")&&d.parentNode?d.parentNode:d,v),j=n.expr?m.filter(n.expr,n.set):n.set,w.length>0?k=s(j):u=!1;while(w.length)q=w.pop(),r=q,o.relative[q]?r=w.pop():q="",r==null&&(r=d),o.relative[q](k,r,v)}else k=w=[]}k||(k=j),k||m.error(q||b);if(g.call(k)==="[object Array]")if(!u)e.push.apply(e,k);else if(d&&d.nodeType===1)for(t=0;k[t]!=null;t++)k[t]&&(k[t]===!0||k[t].nodeType===1&&m.contains(d,k[t]))&&e.push(j[t]);else for(t=0;k[t]!=null;t++)k[t]&&k[t].nodeType===1&&e.push(j[t]);else s(k,e);l&&(m(l,h,e,f),m.uniqueSort(e));return e};m.uniqueSort=function(a){if(u){h=i,a.sort(u);if(h)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},m.matches=function(a,b){return m(a,null,null,b)},m.matchesSelector=function(a,b){return m(b,null,null,[a]).length>0},m.find=function(a,b,c){var d,e,f,g,h,i;if(!a)return[];for(e=0,f=o.order.length;e<f;e++){h=o.order[e];if(g=o.leftMatch[h].exec(a)){i=g[1],g.splice(1,1);if(i.substr(i.length-1)!=="\\"){g[1]=(g[1]||"").replace(j,""),d=o.find[h](g,b,c);if(d!=null){a=a.replace(o.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},m.filter=function(a,c,d,e){var f,g,h,i,j,k,l,n,p,q=a,r=[],s=c,t=c&&c[0]&&m.isXML(c[0]);while(a&&c.length){for(h in o.filter)if((f=o.leftMatch[h].exec(a))!=null&&f[2]){k=o.filter[h],l=f[1],g=!1,f.splice(1,1);if(l.substr(l.length-1)==="\\")continue;s===r&&(r=[]);if(o.preFilter[h]){f=o.preFilter[h](f,s,d,r,e,t);if(!f)g=i=!0;else if(f===!0)continue}if(f)for(n=0;(j=s[n])!=null;n++)j&&(i=k(j,f,n,s),p=e^i,d&&i!=null?p?g=!0:s[n]=!1:p&&(r.push(j),g=!0));if(i!==b){d||(s=r),a=a.replace(o.match[h],"");if(!g)return[];break}}if(a===q)if(g==null)m.error(a);else break;q=a}return s},m.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)};var n=m.getText=function(a){var b,c,d=a.nodeType,e="";if(d){if(d===1||d===9||d===11){if(typeof a.textContent=="string")return a.textContent;if(typeof a.innerText=="string")return a.innerText.replace(k,"");for(a=a.firstChild;a;a=a.nextSibling)e+=n(a)}else if(d===3||d===4)return a.nodeValue}else for(b=0;c=a[b];b++)c.nodeType!==8&&(e+=n(c));return e},o=m.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b=="string",d=c&&!l.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1);a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&m.filter(b,a,!0)},">":function(a,b){var c,d=typeof b=="string",e=0,f=a.length;if(d&&!l.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&m.filter(b,a,!0)}},"":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("parentNode",b,f,a,d,c)},"~":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("previousSibling",b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(j,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(j,"")},TAG:function(a,b){return a[1].replace(j,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||m.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&m.error(a[0]);a[0]=e++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(j,"");!f&&o.attrMap[g]&&(a[1]=o.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(j,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=m(b[3],null,null,c);else{var g=m.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(o.match.POS.test(b[0])||o.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!m(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=o.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||n([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}m.error(e)},CHILD:function(a,b){var c,e,f,g,h,i,j,k=b[1],l=a;switch(k){case"only":case"first":while(l=l.previousSibling)if(l.nodeType===1)return!1;if(k==="first")return!0;l=a;case"last":while(l=l.nextSibling)if(l.nodeType===1)return!1;return!0;case"nth":c=b[2],e=b[3];if(c===1&&e===0)return!0;f=b[0],g=a.parentNode;if(g&&(g[d]!==f||!a.nodeIndex)){i=0;for(l=g.firstChild;l;l=l.nextSibling)l.nodeType===1&&(l.nodeIndex=++i);g[d]=f}j=a.nodeIndex-e;return c===0?j===0:j%c===0&&j/c>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||!!a.nodeName&&a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=m.attr?m.attr(a,c):o.attrHandle[c]?o.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":!f&&m.attr?d!=null:f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=o.setFilters[e];if(f)return f(a,c,b,d)}}},p=o.match.POS,q=function(a,b){return"\\"+(b-0+1)};for(var r in o.match)o.match[r]=new RegExp(o.match[r].source+/(?![^\[]*\])(?![^\(]*\))/.source),o.leftMatch[r]=new RegExp(/(^(?:.|\r|\n)*?)/.source+o.match[r].source.replace(/\\(\d+)/g,q));o.match.globalPOS=p;var s=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(t){s=function(a,b){var c=0,d=b||[];if(g.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length=="number")for(var e=a.length;c<e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var u,v;c.documentElement.compareDocumentPosition?u=function(a,b){if(a===b){h=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(u=function(a,b){if(a===b){h=!0;return 0}if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,i=b.parentNode,j=g;if(g===i)return v(a,b);if(!g)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return v(e[k],f[k]);return k===c?v(a,f[k],-1):v(e[k],b,1)},v=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(o.find.ID=function(a,c,d){if(typeof c.getElementById!="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},o.filter.ID=function(a,b){var c=typeof a.getAttributeNode!="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(o.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(o.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=m,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){m=function(b,e,f,g){e=e||c;if(!g&&!m.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return s(e.getElementsByTagName(b),f);if(h[2]&&o.find.CLASS&&e.getElementsByClassName)return s(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return s([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return s([],f);if(i.id===h[3])return s([i],f)}try{return s(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var k=e,l=e.getAttribute("id"),n=l||d,p=e.parentNode,q=/^\s*[+~]/.test(b);l?n=n.replace(/'/g,"\\$&"):e.setAttribute("id",n),q&&p&&(e=e.parentNode);try{if(!q||p)return s(e.querySelectorAll("[id='"+n+"'] "+b),f)}catch(r){}finally{l||k.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)m[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement("div"),"div"),e=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(f){e=!0}m.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!m.isXML(a))try{if(e||!o.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&&a.document.nodeType!==11)return f}}catch(g){}return m(c,null,null,[a]).length>0}}}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(!!a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;o.order.splice(1,0,"CLASS"),o.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?m.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?m.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:m.contains=function(){return!1},m.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var y=function(a,b,c){var d,e=[],f="",g=b.nodeType?[b]:b;while(d=o.match.PSEUDO.exec(a))f+=d[0],a=a.replace(o.match.PSEUDO,"");a=o.relative[a]?a+"*":a;for(var h=0,i=g.length;h<i;h++)m(a,g[h],e,c);return m.filter(f,e)};m.attr=f.attr,m.selectors.attrMap={},f.find=m,f.expr=m.selectors,f.expr[":"]=f.expr.filters,f.unique=m.uniqueSort,f.text=m.getText,f.isXMLDoc=m.isXML,f.contains=m.contains}();var L=/Until$/,M=/^(?:parents|prevUntil|prevAll)/,N=/,/,O=/^.[^:#\[\.,]*$/,P=Array.prototype.slice,Q=f.expr.match.globalPOS,R={children:!0,contents:!0,next:!0,prev:!0};f.fn.extend({find:function(a){var b=this,c,d;if(typeof a!="string")return f(a).filter(function(){for(c=0,d=b.length;c<d;c++)if(f.contains(b[c],this))return!0});var e=this.pushStack("","find",a),g,h,i;for(c=0,d=this.length;c<d;c++){g=e.length,f.find(a,this[c],e);if(c>0)for(h=g;h<e.length;h++)for(i=0;i<g;i++)if(e[i]===e[h]){e.splice(h--,1);break}}return e},has:function(a){var b=f(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(f.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(T(this,a,!1),"not",a)},filter:function(a){return this.pushStack(T(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?Q.test(a)?f(a,this.context).index(this[0])>=0:f.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c=[],d,e,g=this[0];if(f.isArray(a)){var h=1;while(g&&g.ownerDocument&&g!==b){for(d=0;d<a.length;d++)f(g).is(a[d])&&c.push({selector:a[d],elem:g,level:h});g=g.parentNode,h++}return c}var i=Q.test(a)||typeof a!="string"?f(a,b||this.context):0;for(d=0,e=this.length;d<e;d++){g=this[d];while(g){if(i?i.index(g)>-1:f.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b||g.nodeType===11)break}}c=c.length>1?f.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a)return this[0]&&this[0].parentNode?this.prevAll().length:-1;if(typeof a=="string")return f.inArray(this[0],f(a));return f.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a=="string"?f(a,b):f.makeArray(a&&a.nodeType?[a]:a),d=f.merge(this.get(),c);return this.pushStack(S(c[0])||S(d[0])?d:f.unique(d))},andSelf:function(){return this.add(this.prevObject)}}),f.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return f.dir(a,"parentNode")},parentsUntil:function(a,b,c){return f.dir(a,"parentNode",c)},next:function(a){return f.nth(a,2,"nextSibling")},prev:function(a){return f.nth(a,2,"previousSibling")},nextAll:function(a){return f.dir(a,"nextSibling")},prevAll:function(a){return f.dir(a,"previousSibling")},nextUntil:function(a,b,c){return f.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return f.dir(a,"previousSibling",c)},siblings:function(a){return f.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return f.sibling(a.firstChild)},contents:function(a){return f.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:f.makeArray(a.childNodes)}},function(a,b){f.fn[a]=function(c,d){var e=f.map(this,b,c);L.test(a)||(d=c),d&&typeof d=="string"&&(e=f.filter(d,e)),e=this.length>1&&!R[a]?f.unique(e):e,(this.length>1||N.test(d))&&M.test(a)&&(e=e.reverse());return this.pushStack(e,a,P.call(arguments).join(","))}}),f.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?f.find.matchesSelector(b[0],a)?[b[0]]:[]:f.find.matches(a,b)},dir:function(a,c,d){var e=[],g=a[c];while(g&&g.nodeType!==9&&(d===b||g.nodeType!==1||!f(g).is(d)))g.nodeType===1&&e.push(g),g=g[c];return e},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var V="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",W=/ jQuery\d+="(?:\d+|null)"/g,X=/^\s+/,Y=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Z=/<([\w:]+)/,$=/<tbody/i,_=/<|&#?\w+;/,ba=/<(?:script|style)/i,bb=/<(?:script|object|embed|option|style)/i,bc=new RegExp("<(?:"+V+")[\\s/>]","i"),bd=/checked\s*(?:[^=]|=\s*.checked.)/i,be=/\/(java|ecma)script/i,bf=/^\s*<!(?:\[CDATA\[|\-\-)/,bg={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bh=U(c);bg.optgroup=bg.option,bg.tbody=bg.tfoot=bg.colgroup=bg.caption=bg.thead,bg.th=bg.td,f.support.htmlSerialize||(bg._default=[1,"div<div>","</div>"]),f.fn.extend({text:function(a){return f.access(this,function(a){return a===b?f.text(this):this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a))},null,a,arguments.length)},wrapAll:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapAll(a.call(this,b))});if(this[0]){var b=f(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapInner(a.call(this,b))});return this.each(function(){var b=f(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=f.isFunction(a);return this.each(function(c){f(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){f.nodeName(this,"body")||f(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=f
.clean(arguments);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,f.clean(arguments));return a}},remove:function(a,b){for(var c=0,d;(d=this[c])!=null;c++)if(!a||f.filter(a,[d]).length)!b&&d.nodeType===1&&(f.cleanData(d.getElementsByTagName("*")),f.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d);return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&f.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return f.clone(this,a,b)})},html:function(a){return f.access(this,function(a){var c=this[0]||{},d=0,e=this.length;if(a===b)return c.nodeType===1?c.innerHTML.replace(W,""):null;if(typeof a=="string"&&!ba.test(a)&&(f.support.leadingWhitespace||!X.test(a))&&!bg[(Z.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Y,"<$1></$2>");try{for(;d<e;d++)c=this[d]||{},c.nodeType===1&&(f.cleanData(c.getElementsByTagName("*")),c.innerHTML=a);c=0}catch(g){}}c&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(f.isFunction(a))return this.each(function(b){var c=f(this),d=c.html();c.replaceWith(a.call(this,b,d))});typeof a!="string"&&(a=f(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;f(this).remove(),b?f(b).before(a):f(c).append(a)})}return this.length?this.pushStack(f(f.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){var e,g,h,i,j=a[0],k=[];if(!f.support.checkClone&&arguments.length===3&&typeof j=="string"&&bd.test(j))return this.each(function(){f(this).domManip(a,c,d,!0)});if(f.isFunction(j))return this.each(function(e){var g=f(this);a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)});if(this[0]){i=j&&j.parentNode,f.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?e={fragment:i}:e=f.buildFragment(a,this,k),h=e.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&f.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)d.call(c?bi(this[l],g):this[l],e.cacheable||m>1&&l<n?f.clone(h,!0,!0):h)}k.length&&f.each(k,function(a,b){b.src?f.ajax({type:"GET",global:!1,url:b.src,async:!1,dataType:"script"}):f.globalEval((b.text||b.textContent||b.innerHTML||"").replace(bf,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)})}return this}}),f.buildFragment=function(a,b,d){var e,g,h,i,j=a[0];b&&b[0]&&(i=b[0].ownerDocument||b[0]),i.createDocumentFragment||(i=c),a.length===1&&typeof j=="string"&&j.length<512&&i===c&&j.charAt(0)==="<"&&!bb.test(j)&&(f.support.checkClone||!bd.test(j))&&(f.support.html5Clone||!bc.test(j))&&(g=!0,h=f.fragments[j],h&&h!==1&&(e=h)),e||(e=i.createDocumentFragment(),f.clean(a,i,e,d)),g&&(f.fragments[j]=h?e:1);return{fragment:e,cacheable:g}},f.fragments={},f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){f.fn[a]=function(c){var d=[],e=f(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&e.length===1){e[b](this[0]);return this}for(var h=0,i=e.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();f(e[h])[b](j),d=d.concat(j)}return this.pushStack(d,a,e.selector)}}),f.extend({clone:function(a,b,c){var d,e,g,h=f.support.html5Clone||f.isXMLDoc(a)||!bc.test("<"+a.nodeName+">")?a.cloneNode(!0):bo(a);if((!f.support.noCloneEvent||!f.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!f.isXMLDoc(a)){bk(a,h),d=bl(a),e=bl(h);for(g=0;d[g];++g)e[g]&&bk(d[g],e[g])}if(b){bj(a,h);if(c){d=bl(a),e=bl(h);for(g=0;d[g];++g)bj(d[g],e[g])}}d=e=null;return h},clean:function(a,b,d,e){var g,h,i,j=[];b=b||c,typeof b.createElement=="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);for(var k=0,l;(l=a[k])!=null;k++){typeof l=="number"&&(l+="");if(!l)continue;if(typeof l=="string")if(!_.test(l))l=b.createTextNode(l);else{l=l.replace(Y,"<$1></$2>");var m=(Z.exec(l)||["",""])[1].toLowerCase(),n=bg[m]||bg._default,o=n[0],p=b.createElement("div"),q=bh.childNodes,r;b===c?bh.appendChild(p):U(b).appendChild(p),p.innerHTML=n[1]+l+n[2];while(o--)p=p.lastChild;if(!f.support.tbody){var s=$.test(l),t=m==="table"&&!s?p.firstChild&&p.firstChild.childNodes:n[1]==="<table>"&&!s?p.childNodes:[];for(i=t.length-1;i>=0;--i)f.nodeName(t[i],"tbody")&&!t[i].childNodes.length&&t[i].parentNode.removeChild(t[i])}!f.support.leadingWhitespace&&X.test(l)&&p.insertBefore(b.createTextNode(X.exec(l)[0]),p.firstChild),l=p.childNodes,p&&(p.parentNode.removeChild(p),q.length>0&&(r=q[q.length-1],r&&r.parentNode&&r.parentNode.removeChild(r)))}var u;if(!f.support.appendChecked)if(l[0]&&typeof (u=l.length)=="number")for(i=0;i<u;i++)bn(l[i]);else bn(l);l.nodeType?j.push(l):j=f.merge(j,l)}if(d){g=function(a){return!a.type||be.test(a.type)};for(k=0;j[k];k++){h=j[k];if(e&&f.nodeName(h,"script")&&(!h.type||be.test(h.type)))e.push(h.parentNode?h.parentNode.removeChild(h):h);else{if(h.nodeType===1){var v=f.grep(h.getElementsByTagName("script"),g);j.splice.apply(j,[k+1,0].concat(v))}d.appendChild(h)}}}return j},cleanData:function(a){var b,c,d=f.cache,e=f.event.special,g=f.support.deleteExpando;for(var h=0,i;(i=a[h])!=null;h++){if(i.nodeName&&f.noData[i.nodeName.toLowerCase()])continue;c=i[f.expando];if(c){b=d[c];if(b&&b.events){for(var j in b.events)e[j]?f.event.remove(i,j):f.removeEvent(i,j,b.handle);b.handle&&(b.handle.elem=null)}g?delete i[f.expando]:i.removeAttribute&&i.removeAttribute(f.expando),delete d[c]}}}});var bp=/alpha\([^)]*\)/i,bq=/opacity=([^)]*)/,br=/([A-Z]|^ms)/g,bs=/^[\-+]?(?:\d*\.)?\d+$/i,bt=/^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i,bu=/^([\-+])=([\-+.\de]+)/,bv=/^margin/,bw={position:"absolute",visibility:"hidden",display:"block"},bx=["Top","Right","Bottom","Left"],by,bz,bA;f.fn.css=function(a,c){return f.access(this,function(a,c,d){return d!==b?f.style(a,c,d):f.css(a,c)},a,c,arguments.length>1)},f.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=by(a,"opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":f.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!!a&&a.nodeType!==3&&a.nodeType!==8&&!!a.style){var g,h,i=f.camelCase(c),j=a.style,k=f.cssHooks[i];c=f.cssProps[i]||i;if(d===b){if(k&&"get"in k&&(g=k.get(a,!1,e))!==b)return g;return j[c]}h=typeof d,h==="string"&&(g=bu.exec(d))&&(d=+(g[1]+1)*+g[2]+parseFloat(f.css(a,c)),h="number");if(d==null||h==="number"&&isNaN(d))return;h==="number"&&!f.cssNumber[i]&&(d+="px");if(!k||!("set"in k)||(d=k.set(a,d))!==b)try{j[c]=d}catch(l){}}},css:function(a,c,d){var e,g;c=f.camelCase(c),g=f.cssHooks[c],c=f.cssProps[c]||c,c==="cssFloat"&&(c="float");if(g&&"get"in g&&(e=g.get(a,!0,d))!==b)return e;if(by)return by(a,c)},swap:function(a,b,c){var d={},e,f;for(f in b)d[f]=a.style[f],a.style[f]=b[f];e=c.call(a);for(f in b)a.style[f]=d[f];return e}}),f.curCSS=f.css,c.defaultView&&c.defaultView.getComputedStyle&&(bz=function(a,b){var c,d,e,g,h=a.style;b=b.replace(br,"-$1").toLowerCase(),(d=a.ownerDocument.defaultView)&&(e=d.getComputedStyle(a,null))&&(c=e.getPropertyValue(b),c===""&&!f.contains(a.ownerDocument.documentElement,a)&&(c=f.style(a,b))),!f.support.pixelMargin&&e&&bv.test(b)&&bt.test(c)&&(g=h.width,h.width=c,c=e.width,h.width=g);return c}),c.documentElement.currentStyle&&(bA=function(a,b){var c,d,e,f=a.currentStyle&&a.currentStyle[b],g=a.style;f==null&&g&&(e=g[b])&&(f=e),bt.test(f)&&(c=g.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),g.left=b==="fontSize"?"1em":f,f=g.pixelLeft+"px",g.left=c,d&&(a.runtimeStyle.left=d));return f===""?"auto":f}),by=bz||bA,f.each(["height","width"],function(a,b){f.cssHooks[b]={get:function(a,c,d){if(c)return a.offsetWidth!==0?bB(a,b,d):f.swap(a,bw,function(){return bB(a,b,d)})},set:function(a,b){return bs.test(b)?b+"px":b}}}),f.support.opacity||(f.cssHooks.opacity={get:function(a,b){return bq.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=f.isNumeric(b)?"alpha(opacity="+b*100+")":"",g=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&f.trim(g.replace(bp,""))===""){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bp.test(g)?g.replace(bp,e):g+" "+e}}),f(function(){f.support.reliableMarginRight||(f.cssHooks.marginRight={get:function(a,b){return f.swap(a,{display:"inline-block"},function(){return b?by(a,"margin-right"):a.style.marginRight})}})}),f.expr&&f.expr.filters&&(f.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!f.support.reliableHiddenOffsets&&(a.style&&a.style.display||f.css(a,"display"))==="none"},f.expr.filters.visible=function(a){return!f.expr.filters.hidden(a)}),f.each({margin:"",padding:"",border:"Width"},function(a,b){f.cssHooks[a+b]={expand:function(c){var d,e=typeof c=="string"?c.split(" "):[c],f={};for(d=0;d<4;d++)f[a+bx[d]+b]=e[d]||e[d-2]||e[0];return f}}});var bC=/%20/g,bD=/\[\]$/,bE=/\r?\n/g,bF=/#.*$/,bG=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bH=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bI=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,bJ=/^(?:GET|HEAD)$/,bK=/^\/\//,bL=/\?/,bM=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bN=/^(?:select|textarea)/i,bO=/\s+/,bP=/([?&])_=[^&]*/,bQ=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bR=f.fn.load,bS={},bT={},bU,bV,bW=["*/"]+["*"];try{bU=e.href}catch(bX){bU=c.createElement("a"),bU.href="",bU=bU.href}bV=bQ.exec(bU.toLowerCase())||[],f.fn.extend({load:function(a,c,d){if(typeof a!="string"&&bR)return bR.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var g=a.slice(e,a.length);a=a.slice(0,e)}var h="GET";c&&(f.isFunction(c)?(d=c,c=b):typeof c=="object"&&(c=f.param(c,f.ajaxSettings.traditional),h="POST"));var i=this;f.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?f("<div>").append(c.replace(bM,"")).find(g):c)),d&&i.each(d,[c,b,a])}});return this},serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?f.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bN.test(this.nodeName)||bH.test(this.type))}).map(function(a,b){var c=f(this).val();return c==null?null:f.isArray(c)?f.map(c,function(a,c){return{name:b.name,value:a.replace(bE,"\r\n")}}):{name:b.name,value:c.replace(bE,"\r\n")}}).get()}}),f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){f.fn[b]=function(a){return this.on(b,a)}}),f.each(["get","post"],function(a,c){f[c]=function(a,d,e,g){f.isFunction(d)&&(g=g||e,e=d,d=b);return f.ajax({type:c,url:a,data:d,success:e,dataType:g})}}),f.extend({getScript:function(a,c){return f.get(a,b,c,"script")},getJSON:function(a,b,c){return f.get(a,b,c,"json")},ajaxSetup:function(a,b){b?b$(a,f.ajaxSettings):(b=a,a=f.ajaxSettings),b$(a,b);return a},ajaxSettings:{url:bU,isLocal:bI.test(bV[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":bW},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":f.parseJSON,"text xml":f.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:bY(bS),ajaxTransport:bY(bT),ajax:function(a,c){function w(a,c,l,m){if(s!==2){s=2,q&&clearTimeout(q),p=b,n=m||"",v.readyState=a>0?4:0;var o,r,u,w=c,x=l?ca(d,v,l):b,y,z;if(a>=200&&a<300||a===304){if(d.ifModified){if(y=v.getResponseHeader("Last-Modified"))f.lastModified[k]=y;if(z=v.getResponseHeader("Etag"))f.etag[k]=z}if(a===304)w="notmodified",o=!0;else try{r=cb(d,x),w="success",o=!0}catch(A){w="parsererror",u=A}}else{u=w;if(!w||a)w="error",a<0&&(a=0)}v.status=a,v.statusText=""+(c||w),o?h.resolveWith(e,[r,w,v]):h.rejectWith(e,[v,w,u]),v.statusCode(j),j=b,t&&g.trigger("ajax"+(o?"Success":"Error"),[v,d,o?r:u]),i.fireWith(e,[v,w]),t&&(g.trigger("ajaxComplete",[v,d]),--f.active||f.event.trigger("ajaxStop"))}}typeof a=="object"&&(c=a,a=b),c=c||{};var d=f.ajaxSetup({},c),e=d.context||d,g=e!==d&&(e.nodeType||e instanceof f)?f(e):f.event,h=f.Deferred(),i=f.Callbacks("once memory"),j=d.statusCode||{},k,l={},m={},n,o,p,q,r,s=0,t,u,v={readyState:0,setRequestHeader:function(a,b){if(!s){var c=a.toLowerCase();a=m[c]=m[c]||a,l[a]=b}return this},getAllResponseHeaders:function(){return s===2?n:null},getResponseHeader:function(a){var c;if(s===2){if(!o){o={};while(c=bG.exec(n))o[c[1].toLowerCase()]=c[2]}c=o[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){s||(d.mimeType=a);return this},abort:function(a){a=a||"abort",p&&p.abort(a),w(0,a);return this}};h.promise(v),v.success=v.done,v.error=v.fail,v.complete=i.add,v.statusCode=function(a){if(a){var b;if(s<2)for(b in a)j[b]=[j[b],a[b]];else b=a[v.status],v.then(b,b)}return this},d.url=((a||d.url)+"").replace(bF,"").replace(bK,bV[1]+"//"),d.dataTypes=f.trim(d.dataType||"*").toLowerCase().split(bO),d.crossDomain==null&&(r=bQ.exec(d.url.toLowerCase()),d.crossDomain=!(!r||r[1]==bV[1]&&r[2]==bV[2]&&(r[3]||(r[1]==="http:"?80:443))==(bV[3]||(bV[1]==="http:"?80:443)))),d.data&&d.processData&&typeof d.data!="string"&&(d.data=f.param(d.data,d.traditional)),bZ(bS,d,c,v);if(s===2)return!1;t=d.global,d.type=d.type.toUpperCase(),d.hasContent=!bJ.test(d.type),t&&f.active++===0&&f.event.trigger("ajaxStart");if(!d.hasContent){d.data&&(d.url+=(bL.test(d.url)?"&":"?")+d.data,delete d.data),k=d.url;if(d.cache===!1){var x=f.now(),y=d.url.replace(bP,"$1_="+x);d.url=y+(y===d.url?(bL.test(d.url)?"&":"?")+"_="+x:"")}}(d.data&&d.hasContent&&d.contentType!==!1||c.contentType)&&v.setRequestHeader("Content-Type",d.contentType),d.ifModified&&(k=k||d.url,f.lastModified[k]&&v.setRequestHeader("If-Modified-Since",f.lastModified[k]),f.etag[k]&&v.setRequestHeader("If-None-Match",f.etag[k])),v.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+(d.dataTypes[0]!=="*"?", "+bW+"; q=0.01":""):d.accepts["*"]);for(u in d.headers)v.setRequestHeader(u,d.headers[u]);if(d.beforeSend&&(d.beforeSend.call(e,v,d)===!1||s===2)){v.abort();return!1}for(u in{success:1,error:1,complete:1})v[u](d[u]);p=bZ(bT,d,c,v);if(!p)w(-1,"No Transport");else{v.readyState=1,t&&g.trigger("ajaxSend",[v,d]),d.async&&d.timeout>0&&(q=setTimeout(function(){v.abort("timeout")},d.timeout));try{s=1,p.send(l,w)}catch(z){if(s<2)w(-1,z);else throw z}}return v},param:function(a,c){var d=[],e=function(a,b){b=f.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=f.ajaxSettings.traditional);if(f.isArray(a)||a.jquery&&!f.isPlainObject(a))f.each(a,function(){e(this.name,this.value)});else for(var g in a)b_(g,a[g],c,e);return d.join("&").replace(bC,"+")}}),f.extend({active:0,lastModified:{},etag:{}});var cc=f.now(),cd=/(\=)\?(&|$)|\?\?/i;f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return f.expando+"_"+cc++}}),f.ajaxPrefilter("json jsonp",function(b,c,d){var e=typeof b.data=="string"&&/^application\/x\-www\-form\-urlencoded/.test(b.contentType);if(b.dataTypes[0]==="jsonp"||b.jsonp!==!1&&(cd.test(b.url)||e&&cd.test(b.data))){var g,h=b.jsonpCallback=f.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2";b.jsonp!==!1&&(j=j.replace(cd,l),b.url===j&&(e&&(k=k.replace(cd,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},d.always(function(){a[h]=i,g&&f.isFunction(i)&&a[h](g[0])}),b.converters["script json"]=function(){g||f.error(h+" was not called");return g[0]},b.dataTypes[0]="json";return"script"}}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){f.globalEval(a);return a}}}),f.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),f.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(c||!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var ce=a.ActiveXObject?function(){for(var a in cg)cg[a](0,1)}:!1,cf=0,cg;f.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&ch()||ci()}:ch,function(a){f.extend(f.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(f.ajaxSettings.xhr()),f.support.ajax&&f.ajaxTransport(function(c){if(!c.crossDomain||f.support.cors){var d;return{send:function(e,g){var h=c.xhr(),i,j;c.username?h.open(c.type,c.url,c.async,c.username,c.password):h.open(c.type,c.url,c.async);if(c.xhrFields)for(j in c.xhrFields)h[j]=c.xhrFields[j];c.mimeType&&h.overrideMimeType&&h.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(j in e)h.setRequestHeader(j,e[j])}catch(k){}h.send(c.hasContent&&c.data||null),d=function(a,e){var j,k,l,m,n;try{if(d&&(e||h.readyState===4)){d=b,i&&(h.onreadystatechange=f.noop,ce&&delete cg[i]);if(e)h.readyState!==4&&h.abort();else{j=h.status,l=h.getAllResponseHeaders(),m={},n=h.responseXML,n&&n.documentElement&&(m.xml=n);try{m.text=h.responseText}catch(a){}try{k=h.statusText}catch(o){k=""}!j&&c.isLocal&&!c.crossDomain?j=m.text?200:404:j===1223&&(j=204)}}}catch(p){e||g(-1,p)}m&&g(j,k,m,l)},!c.async||h.readyState===4?d():(i=++cf,ce&&(cg||(cg={},f(a).unload(ce)),cg[i]=d),h.onreadystatechange=d)},abort:function(){d&&d(0,1)}}}});var cj={},ck,cl,cm=/^(?:toggle|show|hide)$/,cn=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,co,cp=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],cq;f.fn.extend({show:function(a,b,c){var d,e;if(a||a===0)return this.animate(ct("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)d=this[g],d.style&&(e=d.style.display,!f._data(d,"olddisplay")&&e==="none"&&(e=d.style.display=""),(e===""&&f.css(d,"display")==="none"||!f.contains(d.ownerDocument.documentElement,d))&&f._data(d,"olddisplay",cu(d.nodeName)));for(g=0;g<h;g++){d=this[g];if(d.style){e=d.style.display;if(e===""||e==="none")d.style.display=f._data(d,"olddisplay")||""}}return this},hide:function(a,b,c){if(a||a===0)return this.animate(ct("hide",3),a,b,c);var d,e,g=0,h=this.length;for(;g<h;g++)d=this[g],d.style&&(e=f.css(d,"display"),e!=="none"&&!f._data(d,"olddisplay")&&f._data(d,"olddisplay",e));for(g=0;g<h;g++)this[g].style&&(this[g].style.display="none");return this},_toggle:f.fn.toggle,toggle:function(a,b,c){var d=typeof a=="boolean";f.isFunction(a)&&f.isFunction(b)?this._toggle.apply(this,arguments):a==null||d?this.each(function(){var b=d?a:f(this).is(":hidden");f(this)[b?"show":"hide"]()}):this.animate(ct("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){function g(){e.queue===!1&&f._mark(this);var b=f.extend({},e),c=this.nodeType===1,d=c&&f(this).is(":hidden"),g,h,i,j,k,l,m,n,o,p,q;b.animatedProperties={};for(i in a){g=f.camelCase(i),i!==g&&(a[g]=a[i],delete a[i]);if((k=f.cssHooks[g])&&"expand"in k){l=k.expand(a[g]),delete a[g];for(i in l)i in a||(a[i]=l[i])}}for(g in a){h=a[g],f.isArray(h)?(b.animatedProperties[g]=h[1],h=a[g]=h[0]):b.animatedProperties[g]=b.specialEasing&&b.specialEasing[g]||b.easing||"swing";if(h==="hide"&&d||h==="show"&&!d)return b.complete.call(this);c&&(g==="height"||g==="width")&&(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],f.css(this,"display")==="inline"&&f.css(this,"float")==="none"&&(!f.support.inlineBlockNeedsLayout||cu(this.nodeName)==="inline"?this.style.display="inline-block":this.style.zoom=1))}b.overflow!=null&&(this.style.overflow="hidden");for(i in a)j=new f.fx(this,b,i),h=a[i],cm.test(h)?(q=f._data(this,"toggle"+i)||(h==="toggle"?d?"show":"hide":0),q?(f._data(this,"toggle"+i,q==="show"?"hide":"show"),j[q]()):j[h]()):(m=cn.exec(h),n=j.cur(),m?(o=parseFloat(m[2]),p=m[3]||(f.cssNumber[i]?"":"px"),p!=="px"&&(f.style(this,i,(o||1)+p),n=(o||1)/j.cur()*n,f.style(this,i,n+p)),m[1]&&(o=(m[1]==="-="?-1:1)*o+n),j.custom(n,o,p)):j.custom(n,h,""));return!0}var e=f.speed(b,c,d);if(f.isEmptyObject(a))return this.each(e.complete,[!1]);a=f.extend({},a);return e.queue===!1?this.each(g):this.queue(e.queue,g)},stop:function(a,c,d){typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]);return this.each(function(){function h(a,b,c){var e=b[c];f.removeData(a,c,!0),e.stop(d)}var b,c=!1,e=f.timers,g=f._data(this);d||f._unmark(!0,this);if(a==null)for(b in g)g[b]&&g[b].stop&&b.indexOf(".run")===b.length-4&&h(this,g,b);else g[b=a+".run"]&&g[b].stop&&h(this,g,b);for(b=e.length;b--;)e[b].elem===this&&(a==null||e[b].queue===a)&&(d?e[b](!0):e[b].saveState(),c=!0,e.splice(b,1));(!d||!c)&&f.dequeue(this,a)})}}),f.each({slideDown:ct("show",1),slideUp:ct("hide",1),slideToggle:ct("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){f.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),f.extend({speed:function(a,b,c){var d=a&&typeof a=="object"?f.extend({},a):{complete:c||!c&&b||f.isFunction(a)&&a,duration:a,easing:c&&b||b&&!f.isFunction(b)&&b};d.duration=f.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in f.fx.speeds?f.fx.speeds[d.duration]:f.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";d.old=d.complete,d.complete=function(a){f.isFunction(d.old)&&d.old.call(this),d.queue?f.dequeue(this,d.queue):a!==!1&&f._unmark(this)};return d},easing:{linear:function(a){return a},swing:function(a){return-Math.cos(a*Math.PI)/2+.5}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}}}),f.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(f.fx.step[this.prop]||f.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=f.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,c,d){function h(a){return e.step(a)}var e=this,g=f.fx;this.startTime=cq||cr(),this.end=c,this.now=this.start=a,this.pos=this.state=0,this.unit=d||this.unit||(f.cssNumber[this.prop]?"":"px"),h.queue=this.options.queue,h.elem=this.elem,h.saveState=function(){f._data(e.elem,"fxshow"+e.prop)===b&&(e.options.hide?f._data(e.elem,"fxshow"+e.prop,e.start):e.options.show&&f._data(e.elem,"fxshow"+e.prop,e.end))},h()&&f.timers.push(h)&&!co&&(co=setInterval(g.tick,g.interval))},show:function(){var a=f._data(this.elem,"fxshow"+this.prop);this.options.orig[this.prop]=a||f.style(this.elem,this.prop),this.options.show=!0,a!==b?this.custom(this.cur(),a):this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),f(this.elem).show()},hide:function(){this.options.orig[this.prop]=f._data(this.elem,"fxshow"+this.prop)||f.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b,c,d,e=cq||cr(),g=!0,h=this.elem,i=this.options;if(a||e>=i.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),i.animatedProperties[this.prop]=!0;for(b in i.animatedProperties)i.animatedProperties[b]!==!0&&(g=!1);if(g){i.overflow!=null&&!f.support.shrinkWrapBlocks&&f.each(["","X","Y"],function(a,b){h.style["overflow"+b]=i.overflow[a]}),i.hide&&f(h).hide();if(i.hide||i.show)for(b in i.animatedProperties)f.style(h,b,i.orig[b]),f.removeData(h,"fxshow"+b,!0),f.removeData(h,"toggle"+b,!0);d=i.complete,d&&(i.complete=!1,d.call(h))}return!1}i.duration==Infinity?this.now=e:(c=e-this.startTime,this.state=c/i.duration,this.pos=f.easing[i.animatedProperties[this.prop]](this.state,c,0,1,i.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update();return!0}},f.extend(f.fx,{tick:function(){var a,b=f.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||f.fx.stop()},interval:13,stop:function(){clearInterval(co),co=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){f.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=a.now+a.unit:a.elem[a.prop]=a.now}}}),f.each(cp.concat.apply([],cp),function(a,b){b.indexOf("margin")&&(f.fx.step[b]=function(a){f.style(a.elem,b,Math.max(0,a.now)+a.unit)})}),f.expr&&f.expr.filters&&(f.expr.filters.animated=function(a){return f.grep(f.timers,function(b){return a===b.elem}).length});var cv,cw=/^t(?:able|d|h)$/i,cx=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?cv=function(a,b,c,d){try{d=a.getBoundingClientRect()}catch(e){}if(!d||!f.contains(c,a))return d?{top:d.top,left:d.left}:{top:0,left:0};var g=b.body,h=cy(b),i=c.clientTop||g.clientTop||0,j=c.clientLeft||g.clientLeft||0,k=h.pageYOffset||f.support.boxModel&&c.scrollTop||g.scrollTop,l=h.pageXOffset||f.support.boxModel&&c.scrollLeft||g.scrollLeft,m=d.top+k-i,n=d.left+l-j;return{top:m,left:n}}:cv=function(a,b,c){var d,e=a.offsetParent,g=a,h=b.body,i=b.defaultView,j=i?i.getComputedStyle(a,null):a.currentStyle,k=a.offsetTop,l=a.offsetLeft;while((a=a.parentNode)&&a!==h&&a!==c){if(f.support.fixedPosition&&j.position==="fixed")break;d=i?i.getComputedStyle(a,null):a.currentStyle,k-=a.scrollTop,l-=a.scrollLeft,a===e&&(k+=a.offsetTop,l+=a.offsetLeft,f.support.doesNotAddBorder&&(!f.support.doesAddBorderForTableAndCells||!cw.test(a.nodeName))&&(k+=parseFloat(d.borderTopWidth)||0,l+=parseFloat(d.borderLeftWidth)||0),g=e,e=a.offsetParent),f.support.subtractsBorderForOverflowNotVisible&&d.overflow!=="visible"&&(k+=parseFloat(d.borderTopWidth)||0,l+=parseFloat(d.borderLeftWidth)||0),j=d}if(j.position==="relative"||j.position==="static")k+=h.offsetTop,l+=h.offsetLeft;f.support.fixedPosition&&j.position==="fixed"&&(k+=Math.max(c.scrollTop,h.scrollTop),l+=Math.max(c.scrollLeft,h.scrollLeft));return{top:k,left:l}},f.fn.offset=function(a){if(arguments.length)return a===b?this:this.each(function(b){f.offset.setOffset(this,a,b)});var c=this[0],d=c&&c.ownerDocument;if(!d)return null;if(c===d.body)return f.offset.bodyOffset(c);return cv(c,d,d.documentElement)},f.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;f.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(f.css(a,"marginTop"))||0,c+=parseFloat(f.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var d=f.css(a,"position");d==="static"&&(a.style.position="relative");var e=f(a),g=e.offset(),h=f.css(a,"top"),i=f.css(a,"left"),j=(d==="absolute"||d==="fixed")&&f.inArray("auto",[h,i])>-1,k={},l={},m,n;j?(l=e.position(),m=l.top,n=l.left):(m=parseFloat(h)||0,n=parseFloat(i)||0),f.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):e.css(k)}},f.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),d=cx.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(f.css(a,"marginTop"))||0,c.left-=parseFloat(f.css(a,"marginLeft"))||0,d.top+=parseFloat(f.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(f.css(b[0],"borderLeftWidth"))||0;return{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&!cx.test(a.nodeName)&&f.css(a,"position")==="static")a=a.offsetParent;return a})}}),f.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,c){var d=/Y/.test(c);f.fn[a]=function(e){return f.access(this,function(a,e,g){var h=cy(a);if(g===b)return h?c in h?h[c]:f.support.boxModel&&h.document.documentElement[e]||h.document.body[e]:a[e];h?h.scrollTo(d?f(h).scrollLeft():g,d?g:f(h).scrollTop()):a[e]=g},a,e,arguments.length,null)}}),f.each({Height:"height",Width:"width"},function(a,c){var d="client"+a,e="scroll"+a,g="offset"+a;f.fn["inner"+a]=function(){var a=this[0];return a?a.style?parseFloat(f.css(a,c,"padding")):this[c]():null},f.fn["outer"+a]=function(a){var b=this[0];return b?b.style?parseFloat(f.css(b,c,a?"margin":"border")):this[c]():null},f.fn[c]=function(a){return f.access(this,function(a,c,h){var i,j,k,l;if(f.isWindow(a)){i=a.document,j=i.documentElement[d];return f.support.boxModel&&j||i.body&&i.body[d]||j}if(a.nodeType===9){i=a.documentElement;if(i[d]>=i[e])return i[d];return Math.max(a.body[e],i[e],a.body[g],i[g])}if(h===b){k=f.css(a,c),l=parseFloat(k);return f.isNumeric(l)?l:k}f(a).css(c,h)},c,a,arguments.length,null)}}),a.jQuery=a.$=f,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return f})})(window);
/*
 * jQuery UI Accordion 1.6
 * 
 * Copyright (c) 2007 JÃ¶rn Zaefferer
 *
 * http://docs.jquery.com/UI/Accordion
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 *
 * Revision: $Id: jquery.accordion.js 4876 2008-03-08 11:49:04Z joern.zaefferer $
 *
 */


;(function($) {
	
// If the UI scope is not available, add it
$.ui = $.ui || {};

$.fn.extend({
	accordion: function(options, data) {
		var args = Array.prototype.slice.call(arguments, 1);

		return this.each(function() {
			if (typeof options == "string") {
				var accordion = $.data(this, "ui-accordion");
				accordion[options].apply(accordion, args);
			// INIT with optional options
			} else if (!$(this).is(".ui-accordion"))
				$.data(this, "ui-accordion", new $.ui.accordion(this, options));
		});
	},
	// deprecated, use accordion("activate", index) instead
	activate: function(index) {
		return this.accordion("activate", index);
	}
});

$.ui.accordion = function(container, options) {
	
	// setup configuration
	this.options = options = $.extend({}, $.ui.accordion.defaults, options);
	this.element = container;
	
	$(container).addClass("ui-accordion");
	
	if ( options.navigation ) {
		var current = $(container).find("a").filter(options.navigationFilter);
		if ( current.length ) {
			if ( current.filter(options.header).length ) {
				options.active = current;
			} else {
				options.active = current.parent().parent().prev();
				current.addClass("current");
			}
		}
	}
	
	// calculate active if not specified, using the first header
	options.headers = $(container).find(options.header);
	options.active = findActive(options.headers, options.active);

	if ( options.fillSpace ) {
		var maxHeight = $(container).parent().height();
		options.headers.each(function() {
			maxHeight -= $(this).outerHeight();
		});
		var maxPadding = 0;
		options.headers.next().each(function() {
			maxPadding = Math.max(maxPadding, $(this).innerHeight() - $(this).height());
		}).height(maxHeight - maxPadding);
	} else if ( options.autoheight ) {
		var maxHeight = 0;
		options.headers.next().each(function() {
			maxHeight = Math.max(maxHeight, $(this).outerHeight());
		}).height(maxHeight);
	}

	options.headers
		.not(options.active || "")
		.next()
		.hide();
	options.active.parent().andSelf().addClass(options.selectedClass);
	
	if (options.event)
		$(container).bind((options.event) + ".ui-accordion", clickHandler);
};

$.ui.accordion.prototype = {
	activate: function(index) {
		// call clickHandler with custom event
		clickHandler.call(this.element, {
			target: findActive( this.options.headers, index )[0]
		});
	},
	
	enable: function() {
		this.options.disabled = false;
	},
	disable: function() {
		this.options.disabled = true;
	},
	destroy: function() {
		this.options.headers.next().css("display", "");
		if ( this.options.fillSpace || this.options.autoheight ) {
			this.options.headers.next().css("height", "");
		}
		$.removeData(this.element, "ui-accordion");
		$(this.element).removeClass("ui-accordion").unbind(".ui-accordion");
	}
}

function scopeCallback(callback, scope) {
	return function() {
		return callback.apply(scope, arguments);
	};
}

function completed(cancel) {
	// if removed while animated data can be empty
	if (!$.data(this, "ui-accordion"))
		return;
	var instance = $.data(this, "ui-accordion");
	var options = instance.options;
	options.running = cancel ? 0 : --options.running;
	if ( options.running )
		return;
	if ( options.clearStyle ) {
		options.toShow.add(options.toHide).css({
			height: "",
			overflow: ""
		});
	}
	$(this).triggerHandler("change.ui-accordion", [options.data], options.change);
}

function toggle(toShow, toHide, data, clickedActive, down) {
	var options = $.data(this, "ui-accordion").options;
	options.toShow = toShow;
	options.toHide = toHide;
	options.data = data;
	var complete = scopeCallback(completed, this);
	
	// count elements to animate
	options.running = toHide.size() == 0 ? toShow.size() : toHide.size();
	
	if ( options.animated ) {
		if ( !options.alwaysOpen && clickedActive ) {
			$.ui.accordion.animations[options.animated]({
				toShow: jQuery([]),
				toHide: toHide,
				complete: complete,
				down: down,
				autoheight: options.autoheight
			});
		} else {
			$.ui.accordion.animations[options.animated]({
				toShow: toShow,
				toHide: toHide,
				complete: complete,
				down: down,
				autoheight: options.autoheight
			});
		}
	} else {
		if ( !options.alwaysOpen && clickedActive ) {
			toShow.toggle();
		} else {
			toHide.hide();
			toShow.show();
		}
		complete(true);
	}
}

function clickHandler(event) {
	var options = $.data(this, "ui-accordion").options;
	if (options.disabled)
		return false;
	
	// called only when using activate(false) to close all parts programmatically
	if ( !event.target && !options.alwaysOpen ) {
		options.active.parent().andSelf().toggleClass(options.selectedClass);
		var toHide = options.active.next(),
			data = {
				instance: this,
				options: options,
				newHeader: jQuery([]),
				oldHeader: options.active,
				newContent: jQuery([]),
				oldContent: toHide
			},
			toShow = options.active = $([]);
		toggle.call(this, toShow, toHide, data );
		return false;
	}
	// get the click target
	var clicked = $(event.target);
	
	// due to the event delegation model, we have to check if one
	// of the parent elements is our actual header, and find that
	if ( clicked.parents(options.header).length )
		while ( !clicked.is(options.header) )
			clicked = clicked.parent();
	
	var clickedActive = clicked[0] == options.active[0];
	
	// if animations are still active, or the active header is the target, ignore click
	if (options.running || (options.alwaysOpen && clickedActive))
		return false;
	if (!clicked.is(options.header))
		return;

	// switch classes
	options.active.parent().andSelf().toggleClass(options.selectedClass);
	if ( !clickedActive ) {
		clicked.parent().andSelf().addClass(options.selectedClass);
	}

	// find elements to show and hide
	var toShow = clicked.next(),
		toHide = options.active.next(),
		//data = [clicked, options.active, toShow, toHide],
		data = {
			instance: this,
			options: options,
			newHeader: clicked,
			oldHeader: options.active,
			newContent: toShow,
			oldContent: toHide
		},
		down = options.headers.index( options.active[0] ) > options.headers.index( clicked[0] );
	
	options.active = clickedActive ? $([]) : clicked;
	toggle.call(this, toShow, toHide, data, clickedActive, down );

	return false;
};

function findActive(headers, selector) {
	return selector != undefined
		? typeof selector == "number"
			? headers.filter(":eq(" + selector + ")")
			: headers.not(headers.not(selector))
		: selector === false
			? $([])
			: headers.filter(":eq(0)");
}

$.extend($.ui.accordion, {
	defaults: {
		selectedClass: "selected",
		alwaysOpen: true,
		animated: 'slide',
		event: "click",
		header: "a",
		autoheight: true,
		running: 0,
		navigationFilter: function() {
			return this.href.toLowerCase() == location.href.toLowerCase();
		}
	},
	animations: {
		slide: function(options, additions) {
			options = $.extend({
				easing: "swing",
				duration: 300
			}, options, additions);
			if ( !options.toHide.size() ) {
				options.toShow.animate({height: "show"}, options);
				return;
			}
			var hideHeight = options.toHide.height(),
				showHeight = options.toShow.height(),
				difference = showHeight / hideHeight;
			options.toShow.css({ height: 0, overflow: 'hidden' }).show();
			options.toHide.filter(":hidden").each(options.complete).end().filter(":visible").animate({height:"hide"},{
				step: function(now) {
					var current = (hideHeight - now) * difference;
					if ($.browser.msie || $.browser.opera) {
						current = Math.ceil(current);
					}
					options.toShow.height( current );
				},
				duration: options.duration,
				easing: options.easing,
				complete: function() {
					if ( !options.autoheight ) {
						options.toShow.css("height", "auto");
					}
					options.complete();
				}
			});
		},
		bounceslide: function(options) {
			this.slide(options, {
				easing: options.down ? "bounceout" : "swing",
				duration: options.down ? 1000 : 200
			});
		},
		easeslide: function(options) {
			this.slide(options, {
				easing: "easeinout",
				duration: 700
			})
		}
	}
});

})(jQuery);
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Â© 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Â© 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */
;
/* UItoTop jQuery Plugin 1.2 | Matt Varone | http://www.mattvarone.com/web-design/uitotop-jquery-plugin */

(function($){$.fn.UItoTop=function(options){var defaults={text:'To Top',min:200,inDelay:600,outDelay:400,containerID:'toTop',containerHoverID:'toTopHover',scrollSpeed:1200,easingType:'linear'},settings=$.extend(defaults,options),containerIDhash='#'+settings.containerID,containerHoverIDHash='#'+settings.containerHoverID;$('body').append('<a href="#" id="'+settings.containerID+'">'+settings.text+'</a>');$(containerIDhash).hide().on('click.UItoTop',function(){$('html, body').animate({scrollTop:0},settings.scrollSpeed,settings.easingType);$('#'+settings.containerHoverID,this).stop().animate({'opacity':0},settings.inDelay,settings.easingType);return false;}).prepend('<span id="'+settings.containerHoverID+'"></span>').hover(function(){$(containerHoverIDHash,this).stop().animate({'opacity':1},600,'linear');},function(){$(containerHoverIDHash,this).stop().animate({'opacity':0},700,'linear');});$(window).scroll(function(){var sd=$(window).scrollTop();if(typeof document.body.style.maxHeight==="undefined"){$(containerIDhash).css({'position':'absolute','top':sd+$(window).height()-50});}
if(sd>settings.min)
$(containerIDhash).fadeIn(settings.inDelay);else
$(containerIDhash).fadeOut(settings.Outdelay);});};})(jQuery);
(function() {


}).call(this);
(function() {


}).call(this);
$(window).load(function(){
	
	// We are listening to the window.load event, so we can be sure
	// that the images in the slideshow are loaded properly.


	// Testing wether the current browser supports the canvas element:
	var supportCanvas = 'getContext' in document.createElement('canvas');

	// The canvas manipulations of the images are CPU intensive,
	// this is why we are using setTimeout to make them asynchronous
	// and improve the responsiveness of the page.

	var slides = $('#slideshow li'),
		current = 0,
		slideshow = {width:0,height:0};

	setTimeout(function(){
		
		window.console && window.console.time && console.time('Generated In');
		
		if(supportCanvas){
			$('#slideshow img').each(function(){

				if(!slideshow.width){
					// Taking the dimensions of the first image:
					slideshow.width = this.width;
					slideshow.height = this.height;
				}
				
				// Rendering the modified versions of the images:
				createCanvasOverlay(this);
			});
		}
		
		window.console && window.console.timeEnd && console.timeEnd('Generated In');
		
		$('#slideshow .arrow').click(function(){
			var li			= slides.eq(current),
				canvas		= li.find('canvas'),
				nextIndex	= 0;

			// Depending on whether this is the next or previous
			// arrow, calculate the index of the next slide accordingly.
			
			if($(this).hasClass('next')){
				nextIndex = current >= slides.length-1 ? 0 : current+1;
			}
			else {
				nextIndex = current <= 0 ? slides.length-1 : current-1;
			}

			var next = slides.eq(nextIndex);
			
			if(supportCanvas){

				// This browser supports canvas, fade it into view:

				canvas.fadeIn(function(){
					
					// Show the next slide below the current one:
					next.show();
					current = nextIndex;
					
					// Fade the current slide out of view:
					li.fadeOut(function(){
						li.removeClass('slideActive');
						canvas.hide();
						next.addClass('slideActive');
					});
				});
			}
			else {
				
				// This browser does not support canvas.
				// Use the plain version of the slideshow.
				
				current=nextIndex;
				next.addClass('slideActive').show();
				li.removeClass('slideActive').hide();
			}
		});
		
	},100);

	// This function takes an image and renders
	// a version of it similar to the Overlay blending
	// mode in Photoshop.
	
	function createCanvasOverlay(image){

		var canvas			= document.createElement('canvas'),
			canvasContext	= canvas.getContext("2d");
		
		// Make it the same size as the image
		canvas.width = slideshow.width;
		canvas.height = slideshow.height;
		
		// Drawing the default version of the image on the canvas:
		canvasContext.drawImage(image,0,0);
		

		// Taking the image data and storing it in the imageData array:
		var imageData	= canvasContext.getImageData(0,0,canvas.width,canvas.height),
			data		= imageData.data;
		
		// Loop through all the pixels in the imageData array, and modify
		// the red, green, and blue color values.
		
		for(var i = 0,z=data.length;i<z;i++){
			
			// The values for red, green and blue are consecutive elements
			// in the imageData array. We modify the three of them at once:
			
			data[i] = ((data[i] < 128) ? (2*data[i]*data[i] / 255) : (255 - 2 * (255 - data[i]) * (255 - data[i]) / 255));
			data[++i] = ((data[i] < 128) ? (2*data[i]*data[i] / 255) : (255 - 2 * (255 - data[i]) * (255 - data[i]) / 255));
			data[++i] = ((data[i] < 128) ? (2*data[i]*data[i] / 255) : (255 - 2 * (255 - data[i]) * (255 - data[i]) / 255));
			
			// After the RGB elements is the alpha value, but we leave it the same.
			++i;
		}
		
		// Putting the modified imageData back to the canvas.
		canvasContext.putImageData(imageData,0,0);
		
		// Inserting the canvas in the DOM, before the image:
		image.parentNode.insertBefore(canvas,image);
	}
	
});
/*
* Slides, A Slideshow Plugin for jQuery
* Intructions: http://slidesjs.com
* By: Nathan Searles, http://nathansearles.com
* Version: 1.1.9
* Updated: September 5th, 2011
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

(function(a){a.fn.slides=function(b){return b=a.extend({},a.fn.slides.option,b),this.each(function(){function w(g,h,i){if(!p&&o){p=!0,b.animationStart(n+1);switch(g){case"next":l=n,k=n+1,k=e===k?0:k,r=f*2,g=-f*2,n=k;break;case"prev":l=n,k=n-1,k=k===-1?e-1:k,r=0,g=0,n=k;break;case"pagination":k=parseInt(i,10),l=a("."+b.paginationClass+" li."+b.currentClass+" a",c).attr("href").match("[^#/]+$"),k>l?(r=f*2,g=-f*2):(r=0,g=0),n=k}h==="fade"?b.crossfade?d.children(":eq("+k+")",c).css({zIndex:10}).fadeIn(b.fadeSpeed,b.fadeEasing,function(){b.autoHeight?d.animate({height:d.children(":eq("+k+")",c).outerHeight()},b.autoHeightSpeed,function(){d.children(":eq("+l+")",c).css({display:"none",zIndex:0}),d.children(":eq("+k+")",c).css({zIndex:0}),b.animationComplete(k+1),p=!1}):(d.children(":eq("+l+")",c).css({display:"none",zIndex:0}),d.children(":eq("+k+")",c).css({zIndex:0}),b.animationComplete(k+1),p=!1)}):d.children(":eq("+l+")",c).fadeOut(b.fadeSpeed,b.fadeEasing,function(){b.autoHeight?d.animate({height:d.children(":eq("+k+")",c).outerHeight()},b.autoHeightSpeed,function(){d.children(":eq("+k+")",c).fadeIn(b.fadeSpeed,b.fadeEasing)}):d.children(":eq("+k+")",c).fadeIn(b.fadeSpeed,b.fadeEasing,function(){a.browser.msie&&a(this).get(0).style.removeAttribute("filter")}),b.animationComplete(k+1),p=!1}):(d.children(":eq("+k+")").css({left:r,display:"block"}),b.autoHeight?d.animate({left:g,height:d.children(":eq("+k+")").outerHeight()},b.slideSpeed,b.slideEasing,function(){d.css({left:-f}),d.children(":eq("+k+")").css({left:f,zIndex:5}),d.children(":eq("+l+")").css({left:f,display:"none",zIndex:0}),b.animationComplete(k+1),p=!1}):d.animate({left:g},b.slideSpeed,b.slideEasing,function(){d.css({left:-f}),d.children(":eq("+k+")").css({left:f,zIndex:5}),d.children(":eq("+l+")").css({left:f,display:"none",zIndex:0}),b.animationComplete(k+1),p=!1})),b.pagination&&(a("."+b.paginationClass+" li."+b.currentClass,c).removeClass(b.currentClass),a("."+b.paginationClass+" li:eq("+k+")",c).addClass(b.currentClass))}}function x(){clearInterval(c.data("interval"))}function y(){b.pause?(clearTimeout(c.data("pause")),clearInterval(c.data("interval")),u=setTimeout(function(){clearTimeout(c.data("pause")),v=setInterval(function(){w("next",i)},b.play),c.data("interval",v)},b.pause),c.data("pause",u)):x()}a("."+b.container,a(this)).children().wrapAll('<div class="slides_control"/>');var c=a(this),d=a(".slides_control",c),e=d.children().size(),f=d.children().outerWidth(),g=d.children().outerHeight(),h=b.start-1,i=b.effect.indexOf(",")<0?b.effect:b.effect.replace(" ","").split(",")[0],j=b.effect.indexOf(",")<0?i:b.effect.replace(" ","").split(",")[1],k=0,l=0,m=0,n=0,o,p,q,r,s,t,u,v;if(e<2)return a("."+b.container,a(this)).fadeIn(b.fadeSpeed,b.fadeEasing,function(){o=!0,b.slidesLoaded()}),a("."+b.next+", ."+b.prev).fadeOut(0),!1;if(e<2)return;h<0&&(h=0),h>e&&(h=e-1),b.start&&(n=h),b.randomize&&d.randomize(),a("."+b.container,c).css({overflow:"hidden",position:"relative"}),d.children().css({position:"absolute",top:0,left:d.children().outerWidth(),zIndex:0,display:"none"}),d.css({position:"relative",width:f*3,height:g,left:-f}),a("."+b.container,c).css({display:"block"}),b.autoHeight&&(d.children().css({height:"auto"}),d.animate({height:d.children(":eq("+h+")").outerHeight()},b.autoHeightSpeed));if(b.preload&&d.find("img:eq("+h+")").length){a("."+b.container,c).css({background:"url("+b.preloadImage+") no-repeat 50% 50%"});var z=d.find("img:eq("+h+")").attr("src")+"?"+(new Date).getTime();a("img",c).parent().attr("class")!="slides_control"?t=d.children(":eq(0)")[0].tagName.toLowerCase():t=d.find("img:eq("+h+")"),d.find("img:eq("+h+")").attr("src",z).load(function(){d.find(t+":eq("+h+")").fadeIn(b.fadeSpeed,b.fadeEasing,function(){a(this).css({zIndex:5}),a("."+b.container,c).css({background:""}),o=!0,b.slidesLoaded()})})}else d.children(":eq("+h+")").fadeIn(b.fadeSpeed,b.fadeEasing,function(){o=!0,b.slidesLoaded()});b.bigTarget&&(d.children().css({cursor:"pointer"}),d.children().click(function(){return w("next",i),!1})),b.hoverPause&&b.play&&(d.bind("mouseover",function(){x()}),d.bind("mouseleave",function(){y()})),b.generateNextPrev&&(a("."+b.container,c).after('<a href="#" class="'+b.prev+'">Prev</a>'),a("."+b.prev,c).after('<a href="#" class="'+b.next+'">Next</a>')),a("."+b.next,c).click(function(a){a.preventDefault(),b.play&&y(),w("next",i)}),a("."+b.prev,c).click(function(a){a.preventDefault(),b.play&&y(),w("prev",i)}),b.generatePagination?(b.prependPagination?c.prepend("<ul class="+b.paginationClass+"></ul>"):c.append("<ul class="+b.paginationClass+"></ul>"),d.children().each(function(){a("."+b.paginationClass,c).append('<li><a href="#'+m+'">'+(m+1)+"</a></li>"),m++})):a("."+b.paginationClass+" li a",c).each(function(){a(this).attr("href","#"+m),m++}),a("."+b.paginationClass+" li:eq("+h+")",c).addClass(b.currentClass),a("."+b.paginationClass+" li a",c).click(function(){return b.play&&y(),q=a(this).attr("href").match("[^#/]+$"),n!=q&&w("pagination",j,q),!1}),a("a.link",c).click(function(){return b.play&&y(),q=a(this).attr("href").match("[^#/]+$")-1,n!=q&&w("pagination",j,q),!1}),b.play&&(v=setInterval(function(){w("next",i)},b.play),c.data("interval",v))})},a.fn.slides.option={preload:!1,preloadImage:"/img/loading.gif",container:"slides_container",generateNextPrev:!1,next:"next",prev:"prev",pagination:!0,generatePagination:!0,prependPagination:!1,paginationClass:"pagination",currentClass:"current",fadeSpeed:350,fadeEasing:"",slideSpeed:350,slideEasing:"",start:1,effect:"slide",crossfade:!1,randomize:!1,play:0,pause:0,hoverPause:!1,autoHeight:!1,autoHeightSpeed:350,bigTarget:!1,animationStart:function(){},animationComplete:function(){},slidesLoaded:function(){}},a.fn.randomize=function(b){function c(){return Math.round(Math.random())-.5}return a(this).each(function(){var d=a(this),e=d.children(),f=e.length;if(f>1){e.hide();var g=[];for(i=0;i<f;i++)g[g.length]=i;g=g.sort(c),a.each(g,function(a,c){var f=e.eq(c),g=f.clone(!0);g.show().appendTo(d),b!==undefined&&b(f,g),f.remove()})}})}})(jQuery)
;
// SET THIS VARIABLE FOR DELAY, 1000 = 1 SECOND
var delayLength = 4000;
	
function doMove(panelWidth, tooFar) {
	var leftValue = $("#mover").css("left");
	
	// Fix for IE
	if (leftValue == "auto") { leftValue = 0; };
	
	var movement = parseFloat(leftValue, 10) - panelWidth;
	
	if (movement == tooFar) {
		$(".slide img").animate({
			"top": -200
		}, function() {
			$("#mover").animate({
				"left": 0
			}, function() {
				$(".slide img").animate({
					"top": 20
				});
			});
		});
	}
	else {
		$(".slide img").animate({
			"top": -200
		}, function() {
			$("#mover").animate({
				"left": movement
			}, function() {
				$(".slide img").animate({
					"top": 20
				});
			});
		});
	}
}

$(function(){
	
    var $slide1 = $("#slide-1");

	var panelWidth = $slide1.css("width");
	var panelPaddingLeft = $slide1.css("paddingLeft");
	var panelPaddingRight = $slide1.css("paddingRight");

	panelWidth = parseFloat(panelWidth, 10);
	panelPaddingLeft = parseFloat(panelPaddingLeft, 10);
	panelPaddingRight = parseFloat(panelPaddingRight, 10);

	panelWidth = panelWidth + panelPaddingLeft + panelPaddingRight;
	
	var numPanels = $(".slide").length;
	var tooFar = -(panelWidth * numPanels);
	var totalMoverwidth = numPanels * panelWidth;
	$("#mover").css("width", totalMoverwidth);

	$("#slider").append('');

	sliderIntervalID = setInterval(function(){
		doMove(panelWidth, tooFar);
	}, delayLength);
	
	$("#slider-stopper").click(function(){
		if ($(this).text() == "Stop") {
			clearInterval(sliderIntervalID);
		 	$(this).text("Start");
		}
		else {
			sliderIntervalID = setInterval(function(){
				doMove(panelWidth, tooFar);
			}, delayLength);
		 	$(this).text("Stop");
		}
		 
	});

});
/**
 * @preserve jQuery DateTimePicker plugin v2.2.9
 * @homepage http://xdsoft.net/jqplugins/datetimepicker/
 * (c) 2014, Chupurnov Valeriy.
 */

(function( $ ) {
	'use strict';
	var default_options  = {
		i18n:{
			bg:{ // Bulgarian
				months:[
					"Януари", "Февруари", "Март", "Април", "Май", "Юни", "Юли", "Август", "Септември", "Октомври", "Ноември", "Декември"
				],
				dayOfWeek:[
					"Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"
				]
			},
			fa:{ // Persian/Farsi
				months:[
					'فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'
				],
				dayOfWeek:[
					'یکشنبه', 'دوشنبه', 'سه شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه', 'شنبه'
				]
			},
			ru:{ // Russian
				months:[
					'Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'
				],
				dayOfWeek:[
					"Вск", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"
				]
			},
			en:{ // English
				months: [
					"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
				],
				dayOfWeek: [
					"Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"
				]
			},
			el:{ // Ελληνικά
				months: [
					"Ιανουάριος", "Φεβρουάριος", "Μάρτιος", "Απρίλιος", "Μάιος", "Ιούνιος", "Ιούλιος", "Αύγουστος", "Σεπτέμβριος", "Οκτώβριος", "Νοέμβριος", "Δεκέμβριος"
				],
				dayOfWeek: [
					"Κυρ", "Δευ", "Τρι", "Τετ", "Πεμ", "Παρ", "Σαβ"
				]
			},
			de:{ // German
				months:[
					'Januar','Februar','März','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember'
				],
				dayOfWeek:[
					"So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"
				]
			},
			nl:{ // Dutch
				months:[
					"januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"
				],
				dayOfWeek:[
					"zo", "ma", "di", "wo", "do", "vr", "za"
				]
			},
			tr:{ // Turkish
				months:[
					"Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"
				],
				dayOfWeek:[
					"Paz", "Pts", "Sal", "Çar", "Per", "Cum", "Cts"
				]
			},
			fr:{ //French
				months:[
			    "Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
				],
				dayOfWeek:[
					"Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"
				]
			},
			es:{ // Spanish
				months: [
					"Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
				],
				dayOfWeek: [
					"Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"
				]
			},
			th:{ // Thai
				months:[
					'มกราคม','กุมภาพันธ์','มีนาคม','เมษายน','พฤษภาคม','มิถุนายน','กรกฎาคม','สิงหาคม','กันยายน','ตุลาคม','พฤศจิกายน','ธันวาคม'
				],
				dayOfWeek:[
					'อา.','จ.','อ.','พ.','พฤ.','ศ.','ส.'
				]
			},
			pl:{ // Polish
				months: [
					"styczeń", "luty", "marzec", "kwiecień", "maj", "czerwiec", "lipiec", "sierpień", "wrzesień", "październik", "listopad", "grudzień"
				],
				dayOfWeek: [
					"nd", "pn", "wt", "śr", "cz", "pt", "sb"
				]
			},
			pt:{ // Portuguese
				months: [
					"Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
				],
				dayOfWeek: [
					"Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"
				]
			},
			ch:{ // Simplified Chinese
				months: [
					"一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"
				],
				dayOfWeek: [
					"日", "一","二","三","四","五","六"
				]
			},
			se:{ // Swedish
				months: [
					"Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September","Oktober", "November", "December"
				],
				dayOfWeek: [
					"Sön", "Mån", "Tis", "Ons", "Tor", "Fre", "Lör"
				]
			},
			kr:{ // Korean
				months: [
					"1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"
				],
				dayOfWeek: [
					"일", "월", "화", "수", "목", "금", "토"
				]
			},
			it:{ // Italian
				months: [
					"Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"
				],
				dayOfWeek: [
					"Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"
				]
			},
			da:{ // Dansk
				months: [
					"January", "Februar", "Marts", "April", "Maj", "Juni", "July", "August", "September", "Oktober", "November", "December"
				],
				dayOfWeek: [
					"Søn", "Man", "Tir", "ons", "Tor", "Fre", "lør"
				]
			},
			ja:{ // Japanese
				months: [
					"1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"
				],
				dayOfWeek: [
					"日", "月", "火", "水", "木", "金", "土"
				]
			},
			vi:{ // Vietnamese
				months: [
					"Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"
				],
				dayOfWeek: [
					"CN", "T2", "T3", "T4", "T5", "T6", "T7"
				]
			},
			sl:{ // Slovenščina
				months: [
					"Januar", "Februar", "Marec", "April", "Maj", "Junij", "Julij", "Avgust", "September", "Oktober", "November", "December"
				],
				dayOfWeek: [
					"Ned", "Pon", "Tor", "Sre", "Čet", "Pet", "Sob"
				]
			},
			cs:{ // Čeština
				months: [
					"Leden", "Únor", "Březen", "Duben", "Květen", "Červen", "Červenec", "Srpen", "Září", "Říjen", "Listopad", "Prosinec"
				],
				dayOfWeek: [
					"Ne", "Po", "Út", "St", "Čt", "Pá", "So"
				]
			}
		},
		value:'',
		lang:'en',
		
		format:	'Y/m/d H:i',
		formatTime:	'H:i',
		formatDate:	'Y/m/d',
		
		startDate:	false, // new Date(), '1986/12/08', '-1970/01/05','-1970/01/05', 
		
		step:60,
		monthChangeSpinner:true,
		closeOnDateSelect:false,
		closeOnWithoutClick:true,
		closeOnInputClick: true,
		
		timepicker:true,
		datepicker:true,
	
		minDate:false,
		maxDate:false,
		minTime:false,
		maxTime:false,
		
		allowTimes:[],
		opened:false,
		initTime:true,
		inline:false,
		
		onSelectDate:function() {},
		onSelectTime:function() {},
		onChangeMonth:function() {},
		onChangeDateTime:function() {},
		onShow:function() {},
		onClose:function() {},
		onGenerate:function() {},
		
		withoutCopyright:true,
		
		inverseButton:false,
		hours12:false,
		next:	'xdsoft_next',
		prev : 'xdsoft_prev',
		dayOfWeekStart:0,
		
		timeHeightInTimePicker:25,
		timepickerScrollbar:true,
		
		todayButton:true, // 2.1.0
		defaultSelect:true, // 2.1.0
		
		scrollMonth:true,
		scrollTime:true,
		scrollInput:true,
		
		lazyInit:false,
		
		mask:false,
		validateOnBlur:true,
		allowBlank:true,
		
		yearStart:1950,
		yearEnd:2050,
		
		style:'',
		id:'',
		
		fixed: false,
		
		roundTime:'round', // ceil, floor
		className:'',
		
		weekends	: 	[],
		yearOffset:0
	};
	
	// fix for ie8
	if ( !Array.prototype.indexOf ) {
		Array.prototype.indexOf = function(obj, start) {
			 for (var i = (start || 0), j = this.length; i < j; i++) {
				 if (this[i] === obj) { return i; }
			 }
			 return -1;
		}
	}
	
	Date.prototype.countDaysInMonth = function(){
		return new Date(this.getFullYear(), this.getMonth()+1, 0).getDate();
	};
	
	$.fn.xdsoftScroller = function( _percent ) {
		return this.each(function() {
			var timeboxparent = $(this);
			if( !$(this).hasClass('xdsoft_scroller_box') ) {
				var pointerEventToXY = function( e ) {
						var out = {x:0, y:0};
						if( e.type == 'touchstart' || e.type == 'touchmove' || e.type == 'touchend' || e.type == 'touchcancel' ) {
							var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
							out.x = touch.pageX;
							out.y = touch.pageY;
						}else if (e.type == 'mousedown' || e.type == 'mouseup' || e.type == 'mousemove' || e.type == 'mouseover'|| e.type=='mouseout' || e.type=='mouseenter' || e.type=='mouseleave') {
							out.x = e.pageX;
							out.y = e.pageY;
						}
						return out;
					},
					move = 0,
					timebox = timeboxparent.children().eq(0),
					parentHeight = timeboxparent[0].clientHeight,
					height = timebox[0].offsetHeight,
					scrollbar = $('<div class="xdsoft_scrollbar"></div>'),
					scroller = $('<div class="xdsoft_scroller"></div>'),
					maximumOffset = 100,
					start = false;

				scrollbar.append(scroller);

				timeboxparent.addClass('xdsoft_scroller_box').append(scrollbar);
				scroller.on('mousedown.xdsoft_scroller',function ( event ) {
					if( !parentHeight )
						timeboxparent.trigger('resize_scroll.xdsoft_scroller',[_percent]);
					var pageY = event.pageY,
						top = parseInt(scroller.css('margin-top')),
						h1 = scrollbar[0].offsetHeight;
					$(document.body).addClass('xdsoft_noselect');
					$([document.body,window]).on('mouseup.xdsoft_scroller',function arguments_callee() {
						$([document.body,window]).off('mouseup.xdsoft_scroller',arguments_callee)
							.off('mousemove.xdsoft_scroller',move)
							.removeClass('xdsoft_noselect');
					});
					$(document.body).on('mousemove.xdsoft_scroller',move = function(event) {
						var offset = event.pageY-pageY+top;
						if( offset<0 )
							offset = 0;
						if( offset+scroller[0].offsetHeight>h1 )
							offset = h1-scroller[0].offsetHeight;
						timeboxparent.trigger('scroll_element.xdsoft_scroller',[maximumOffset?offset/maximumOffset:0]);
					});
				});

				timeboxparent
					.on('scroll_element.xdsoft_scroller',function( event,percent ) {
						if( !parentHeight )
							timeboxparent.trigger('resize_scroll.xdsoft_scroller',[percent,true]);
						percent = percent>1?1:(percent<0||isNaN(percent))?0:percent;
						scroller.css('margin-top',maximumOffset*percent);
						timebox.css('marginTop',-parseInt((height-parentHeight)*percent))
					})
					.on('resize_scroll.xdsoft_scroller',function( event,_percent,noTriggerScroll ) {
						parentHeight = timeboxparent[0].clientHeight;
						height = timebox[0].offsetHeight;
						var percent = parentHeight/height,
							sh = percent*scrollbar[0].offsetHeight;
						if( percent>1 )
							scroller.hide();
						else{
							scroller.show();
							scroller.css('height',parseInt(sh>10?sh:10));
							maximumOffset = scrollbar[0].offsetHeight-scroller[0].offsetHeight;
							if( noTriggerScroll!==true )
								timeboxparent.trigger('scroll_element.xdsoft_scroller',[_percent?_percent:Math.abs(parseInt(timebox.css('marginTop')))/(height-parentHeight)]);
						}
					});
				timeboxparent.mousewheel&&timeboxparent.mousewheel(function(event, delta, deltaX, deltaY) {
					var top = Math.abs(parseInt(timebox.css('marginTop')));
					timeboxparent.trigger('scroll_element.xdsoft_scroller',[(top-delta*20)/(height-parentHeight)]);
					event.stopPropagation();
					return false;
				});
				timeboxparent.on('touchstart',function( event ) {
					start = pointerEventToXY(event);
				});
				timeboxparent.on('touchmove',function( event ) {
					if( start ) {
						var coord = pointerEventToXY(event), top = Math.abs(parseInt(timebox.css('marginTop')));
						timeboxparent.trigger('scroll_element.xdsoft_scroller',[(top-(coord.y-start.y))/(height-parentHeight)]);
						event.stopPropagation();
						event.preventDefault();
					}
				});
				timeboxparent.on('touchend touchcancel',function( event ) {
					start = false;
				});
			}
			timeboxparent.trigger('resize_scroll.xdsoft_scroller',[_percent]);
		});
	};
	$.fn.datetimepicker = function( opt ) {
		var KEY0 = 48,
			KEY9 = 57,
			_KEY0 = 96,
			_KEY9 = 105,
			CTRLKEY = 17,
			DEL = 46,
			ENTER = 13,
			ESC = 27,
			BACKSPACE = 8,
			ARROWLEFT = 37,
			ARROWUP = 38,
			ARROWRIGHT = 39,
			ARROWDOWN = 40,
			TAB = 9,
			F5 = 116,
			AKEY = 65,
			CKEY = 67,
			VKEY = 86,
			ZKEY = 90,
			YKEY = 89,
			ctrlDown	=	false,
			options = ($.isPlainObject(opt)||!opt)?$.extend(true,{},default_options,opt):$.extend({},default_options),

			lazyInitTimer = 0,

			lazyInit = function( input ){
				input
					.on('open.xdsoft focusin.xdsoft mousedown.xdsoft',function initOnActionCallback(event) {
						if( input.is(':disabled')||input.is(':hidden')||!input.is(':visible')||input.data( 'xdsoft_datetimepicker') )
							return;
				
						clearTimeout(lazyInitTimer);
						
						lazyInitTimer = setTimeout(function() {

							if( !input.data( 'xdsoft_datetimepicker') )
								createDateTimePicker(input);
								
							input
								.off('open.xdsoft focusin.xdsoft mousedown.xdsoft',initOnActionCallback)
								.trigger('open.xdsoft');
						},100);
						
					});
			},
			
			createDateTimePicker = function( input ) {
				
				var datetimepicker = $('<div '+(options.id?'id="'+options.id+'"':'')+' '+(options.style?'style="'+options.style+'"':'')+' class="xdsoft_datetimepicker xdsoft_noselect '+options.className+'"></div>'),
					xdsoft_copyright = $('<div class="xdsoft_copyright"><a target="_blank" href="http://xdsoft.net/jqplugins/datetimepicker/">xdsoft.net</a></div>'),
					datepicker = $('<div class="xdsoft_datepicker active"></div>'),
					mounth_picker = $('<div class="xdsoft_mounthpicker"><button type="button" class="xdsoft_prev"></button><button type="button" class="xdsoft_today_button"></button><div class="xdsoft_label xdsoft_month"><span></span></div><div class="xdsoft_label xdsoft_year"><span></span></div><button type="button" class="xdsoft_next"></button></div>'),
					calendar = $('<div class="xdsoft_calendar"></div>'),
					timepicker = $('<div class="xdsoft_timepicker active"><button type="button" class="xdsoft_prev"></button><div class="xdsoft_time_box"></div><button type="button" class="xdsoft_next"></button></div>'),
					timeboxparent = timepicker.find('.xdsoft_time_box').eq(0),
					timebox = $('<div class="xdsoft_time_variant"></div>'),
					scrollbar = $('<div class="xdsoft_scrollbar"></div>'),
					scroller = $('<div class="xdsoft_scroller"></div>'),
					monthselect =$('<div class="xdsoft_select xdsoft_monthselect"><div></div></div>'),
					yearselect =$('<div class="xdsoft_select xdsoft_yearselect"><div></div></div>');

				//constructor lego
				mounth_picker
					.find('.xdsoft_month span')
						.after(monthselect);
				mounth_picker
					.find('.xdsoft_year span')
						.after(yearselect);

				mounth_picker
					.find('.xdsoft_month,.xdsoft_year')
						.on('mousedown.xdsoft',function(event) {
							mounth_picker
								.find('.xdsoft_select')
									.hide();
									
							var select = $(this).find('.xdsoft_select').eq(0),
								val = 0,
								top = 0;

							if( _xdsoft_datetime.currentTime )
								val = _xdsoft_datetime.currentTime[$(this).hasClass('xdsoft_month')?'getMonth':'getFullYear']();

							select.show();
							
							for(var items = select.find('div.xdsoft_option'),i = 0;i<items.length;i++) {
								if( items.eq(i).data('value')==val ) {
									break;
								}else top+=items[0].offsetHeight;
							}

							select.xdsoftScroller(top/(select.children()[0].offsetHeight-(select[0].clientHeight)));
							event.stopPropagation();
							
							return false;
						});

				mounth_picker
					.find('.xdsoft_select')
						.xdsoftScroller()
						.on('mousedown.xdsoft',function( event ) {
							event.stopPropagation();
							event.preventDefault();
						})
						.on('mousedown.xdsoft','.xdsoft_option',function( event ) {
							if( _xdsoft_datetime&&_xdsoft_datetime.currentTime )
								_xdsoft_datetime.currentTime[$(this).parent().parent().hasClass('xdsoft_monthselect')?'setMonth':'setFullYear']($(this).data('value'));
							
							$(this).parent().parent().hide();
							
							datetimepicker.trigger('xchange.xdsoft');
							options.onChangeMonth&&options.onChangeMonth.call&&options.onChangeMonth.call(datetimepicker,_xdsoft_datetime.currentTime,datetimepicker.data('input'));
						});


				// set options
				datetimepicker.setOptions = function( _options ) {
					options = $.extend(true,{},options,_options);
					
					if( _options.allowTimes && $.isArray(_options.allowTimes) && _options.allowTimes.length ){
						options['allowTimes'] = $.extend(true,[],_options.allowTimes);
					}
					
					if( _options.weekends && $.isArray(_options.weekends) && _options.weekends.length ){
						options['weekends'] = $.extend(true,[],_options.weekends);
					}
					
					if( (options.open||options.opened)&&(!options.inline) ) {
						input.trigger('open.xdsoft');
					}

					if( options.inline ) {
						triggerAfterOpen = true;
						datetimepicker.addClass('xdsoft_inline');
						input.after(datetimepicker).hide();
					}

					if( options.inverseButton ) {
						options.next = 'xdsoft_prev';
						options.prev = 'xdsoft_next';
					}

					if( options.datepicker )
						datepicker.addClass('active');
					else
						datepicker.removeClass('active');
						
					if( options.timepicker )
						timepicker.addClass('active');
					else
						timepicker.removeClass('active');

					if( options.value ){
						input&&input.val&&input.val(options.value);
						_xdsoft_datetime.setCurrentTime(options.value);
					}

					if( isNaN(options.dayOfWeekStart)||parseInt(options.dayOfWeekStart)<0||parseInt(options.dayOfWeekStart)>6 )
						options.dayOfWeekStart = 0;
					else
						options.dayOfWeekStart = parseInt(options.dayOfWeekStart);

					if( !options.timepickerScrollbar )
						scrollbar.hide();
					
					if( options.minDate && /^-(.*)$/.test(options.minDate) ){
						options.minDate = _xdsoft_datetime.strToDateTime(options.minDate).dateFormat( options.formatDate );
					}
					
					if( options.maxDate &&  /^\+(.*)$/.test(options.maxDate) ) {
						options.maxDate = _xdsoft_datetime.strToDateTime(options.maxDate).dateFormat( options.formatDate );
					}
					
					mounth_picker
						.find('.xdsoft_today_button')
							.css('visibility',!options.todayButton?'hidden':'visible');

					if( options.mask ) {
						var e,
							getCaretPos = function ( input ) {
								try{
									if ( document.selection && document.selection.createRange ) {
										var range = document.selection.createRange();
										return range.getBookmark().charCodeAt(2) - 2;
									}else
										if ( input.setSelectionRange )
											return input.selectionStart;
								}catch(e) {
									return 0;
								}
							},
							setCaretPos = function ( node,pos ) {
								node = (typeof node == "string" || node instanceof String) ? document.getElementById(node) : node;
								if(!node) {
									return false;
								}else if(node.createTextRange) {
									var textRange = node.createTextRange();
									textRange.collapse(true);
									textRange.moveEnd(pos);
									textRange.moveStart(pos);
									textRange.select();
									return true;
								}else if(node.setSelectionRange) {
									node.setSelectionRange(pos,pos);
									return true;
								}
								return false;
							},
							isValidValue = function ( mask,value ) {
								var reg = mask
									.replace(/([\[\]\/\{\}\(\)\-\.\+]{1})/g,'\\$1')
									.replace(/_/g,'{digit+}')
									.replace(/([0-9]{1})/g,'{digit$1}')
									.replace(/\{digit([0-9]{1})\}/g,'[0-$1_]{1}')
									.replace(/\{digit[\+]\}/g,'[0-9_]{1}');
								return RegExp(reg).test(value);
							};
						input.off('keydown.xdsoft');
						switch(true) {
							case ( options.mask===true ):
							
								options.mask = options.format
									.replace(/Y/g,'9999')
									.replace(/F/g,'9999')
									.replace(/m/g,'19')
									.replace(/d/g,'39')
									.replace(/H/g,'29')
									.replace(/i/g,'59')
									.replace(/s/g,'59');
									
							case ( $.type(options.mask) == 'string' ):
							
								if( !isValidValue( options.mask,input.val() ) )
									input.val(options.mask.replace(/[0-9]/g,'_'));

								input.on('keydown.xdsoft',function( event ) {
									var val = this.value,
										key = event.which;
										
									switch(true) {
										case (( key>=KEY0&&key<=KEY9 )||( key>=_KEY0&&key<=_KEY9 ))||(key==BACKSPACE||key==DEL):
											var pos = getCaretPos(this),
												digit = ( key!=BACKSPACE&&key!=DEL )?String.fromCharCode((_KEY0 <= key && key <= _KEY9)? key-KEY0 : key):'_';
											
											if( (key==BACKSPACE||key==DEL)&&pos ) {
												pos--;
												digit='_';
											}
											
											while( /[^0-9_]/.test(options.mask.substr(pos,1))&&pos<options.mask.length&&pos>0 )
												pos+=( key==BACKSPACE||key==DEL )?-1:1;

											val = val.substr(0,pos)+digit+val.substr(pos+1);
											if( $.trim(val)=='' ){
												val = options.mask.replace(/[0-9]/g,'_');
											}else{
												if( pos==options.mask.length )
													break;
											}
											
											pos+=(key==BACKSPACE||key==DEL)?0:1;
											while( /[^0-9_]/.test(options.mask.substr(pos,1))&&pos<options.mask.length&&pos>0 )
												pos+=(key==BACKSPACE||key==DEL)?-1:1;
												
											if( isValidValue( options.mask,val ) ) {
												this.value = val;
												setCaretPos(this,pos);
											}else if( $.trim(val)=='' )
												this.value = options.mask.replace(/[0-9]/g,'_');
											else{
												input.trigger('error_input.xdsoft');
											}
										break;
										case ( !!~([AKEY,CKEY,VKEY,ZKEY,YKEY].indexOf(key))&&ctrlDown ):
										 case !!~([ESC,ARROWUP,ARROWDOWN,ARROWLEFT,ARROWRIGHT,F5,CTRLKEY,TAB,ENTER].indexOf(key)):
										return true;
									}
									event.preventDefault();
									return false;
								});
							break;
						}
					}
					if( options.validateOnBlur ) {
						input
							.off('blur.xdsoft')
							.on('blur.xdsoft', function() {
								if( options.allowBlank && !$.trim($(this).val()).length ) {
									$(this).val(null);
									datetimepicker.data('xdsoft_datetime').empty();
								}else if( !Date.parseDate( $(this).val(), options.format ) ) {
									$(this).val((_xdsoft_datetime.now()).dateFormat( options.format ));
									datetimepicker.data('xdsoft_datetime').setCurrentTime($(this).val());
								}
								else{
									datetimepicker.data('xdsoft_datetime').setCurrentTime($(this).val());
 								}
								datetimepicker.trigger('changedatetime.xdsoft');
							});
					}
					options.dayOfWeekStartPrev = (options.dayOfWeekStart==0)?6:options.dayOfWeekStart-1;
					
					datetimepicker
						.trigger('xchange.xdsoft')
						.trigger('afterOpen.xdsoft')
				};

				datetimepicker
					.data('options',options)
					.on('mousedown.xdsoft',function( event ) {
						event.stopPropagation();
						event.preventDefault();
						yearselect.hide();
						monthselect.hide();
						return false;
					});

				var scroll_element = timepicker.find('.xdsoft_time_box');
				scroll_element.append(timebox);
				scroll_element.xdsoftScroller();
				
				datetimepicker.on('afterOpen.xdsoft',function() {
					scroll_element.xdsoftScroller();
				});

				datetimepicker
					.append(datepicker)
					.append(timepicker);

				if( options.withoutCopyright!==true )
					datetimepicker
						.append(xdsoft_copyright);

				datepicker
					.append(mounth_picker)
					.append(calendar);

				$('body').append(datetimepicker);

				var _xdsoft_datetime = new function() {
					var _this = this;
					_this.now = function() {
						var d = new Date();
						if( options.yearOffset )
							d.setFullYear(d.getFullYear()+options.yearOffset);
						return d;
					};

					_this.currentTime = this.now();
					_this.isValidDate = function (d) {
						if ( Object.prototype.toString.call(d) !== "[object Date]" )
							return false;
						return !isNaN(d.getTime());
					};

					_this.setCurrentTime = function( dTime) {
						_this.currentTime = (typeof dTime == 'string')? _this.strToDateTime(dTime) : _this.isValidDate(dTime) ? dTime: _this.now();
						datetimepicker.trigger('xchange.xdsoft');
					};

					_this.empty = function() {
						_this.currentTime = null;
					};

					_this.getCurrentTime = function( dTime) {
						return _this.currentTime;
					};

					_this.nextMonth = function() {
						var month = _this.currentTime.getMonth()+1;
						if( month==12 ) {
							_this.currentTime.setFullYear(_this.currentTime.getFullYear()+1);
							month = 0;
						}
						_this.currentTime.setDate(
							Math.min(
								Date.daysInMonth[month],
								_this.currentTime.getDate()
							)
						);
						_this.currentTime.setMonth(month);
						options.onChangeMonth&&options.onChangeMonth.call&&options.onChangeMonth.call(datetimepicker,_xdsoft_datetime.currentTime,datetimepicker.data('input'));
						datetimepicker.trigger('xchange.xdsoft');
						return month;
					};

					_this.prevMonth = function() {
						var month = _this.currentTime.getMonth()-1;
						if( month==-1 ) {
							_this.currentTime.setFullYear(_this.currentTime.getFullYear()-1);
							month = 11;
						}
						_this.currentTime.setDate(
							Math.min(
								Date.daysInMonth[month],
								_this.currentTime.getDate()
							)
						);
						_this.currentTime.setMonth(month);
						options.onChangeMonth&&options.onChangeMonth.call&&options.onChangeMonth.call(datetimepicker,_xdsoft_datetime.currentTime,datetimepicker.data('input'));
						datetimepicker.trigger('xchange.xdsoft');
						return month;
					};

					_this.strToDateTime = function( sDateTime ) {
						if( sDateTime && sDateTime instanceof Date && _this.isValidDate(sDateTime) )
							return sDateTime;
						
						var tmpDate = [],timeOffset,currentTime;
					
						if( ( tmpDate = /^(\+|\-)(.*)$/.exec(sDateTime) )  && ( tmpDate[2]=Date.parseDate(tmpDate[2], options.formatDate) ) ) {
							timeOffset = tmpDate[2].getTime()-(tmpDate[2].getTimezoneOffset())*60000;
							currentTime = new Date((_xdsoft_datetime.now()).getTime()+parseInt(tmpDate[1]+'1')*timeOffset);
						}else
							currentTime = sDateTime?Date.parseDate(sDateTime, options.format):_this.now();
							
						if( !_this.isValidDate(currentTime) )
							currentTime = _this.now();
							
						return currentTime;
					};

					_this.strtodate = function( sDate ) {
						if( sDate && sDate instanceof Date && _this.isValidDate(sDate) )
							return sDate;
						
						var currentTime = sDate?Date.parseDate(sDate, options.formatDate):_this.now();
						if( !_this.isValidDate(currentTime) )
							currentTime = _this.now();
							
						return currentTime;
					};

					_this.strtotime = function( sTime ) {
						if( sTime && sTime instanceof Date && _this.isValidDate(sTime) )
							return sTime;
							
						var currentTime = sTime?Date.parseDate(sTime, options.formatTime):_this.now();
						if( !_this.isValidDate(currentTime) )
							currentTime = _this.now();
							
						return currentTime;
					};

					_this.str = function() {
						return _this.currentTime.dateFormat(options.format);
					};
				};
				mounth_picker
					.find('.xdsoft_today_button')
						.on('mousedown.xdsoft',function() {
							datetimepicker.data('changed',true);
							_xdsoft_datetime.setCurrentTime(0);
							datetimepicker.trigger('afterOpen.xdsoft');
						}).on('dblclick.xdsoft',function(){
							input.val( _xdsoft_datetime.str() );
							datetimepicker.trigger('close.xdsoft');
						});
				mounth_picker
					.find('.xdsoft_prev,.xdsoft_next')
						.on('mousedown.xdsoft',function() {
							var $this = $(this),
								timer = 0,
								stop = false;

							(function arguments_callee1(v) {
								var month =  _xdsoft_datetime.currentTime.getMonth();
								if( $this.hasClass( options.next ) ) {
									_xdsoft_datetime.nextMonth();
								}else if( $this.hasClass( options.prev ) ) {
									_xdsoft_datetime.prevMonth();
								}
								if (options.monthChangeSpinner) {
									!stop&&(timer = setTimeout(arguments_callee1,v?v:100));
								}
							})(500);

							$([document.body,window]).on('mouseup.xdsoft',function arguments_callee2() {
								clearTimeout(timer);
								stop = true;
								$([document.body,window]).off('mouseup.xdsoft',arguments_callee2);
							});
						});

				timepicker
					.find('.xdsoft_prev,.xdsoft_next')
						.on('mousedown.xdsoft',function() {
							var $this = $(this),
								timer = 0,
								stop = false,
								period = 110;
							(function arguments_callee4(v) {
								var pheight = timeboxparent[0].clientHeight,
									height = timebox[0].offsetHeight,
									top = Math.abs(parseInt(timebox.css('marginTop')));
								if( $this.hasClass(options.next) && (height-pheight)- options.timeHeightInTimePicker>=top ) {
									timebox.css('marginTop','-'+(top+options.timeHeightInTimePicker)+'px')
								}else if( $this.hasClass(options.prev) && top-options.timeHeightInTimePicker>=0  ) {
									timebox.css('marginTop','-'+(top-options.timeHeightInTimePicker)+'px')
								}
								timeboxparent.trigger('scroll_element.xdsoft_scroller',[Math.abs(parseInt(timebox.css('marginTop'))/(height-pheight))]);
								period= ( period>10 )?10:period-10;
								!stop&&(timer = setTimeout(arguments_callee4,v?v:period));
							})(500);
							$([document.body,window]).on('mouseup.xdsoft',function arguments_callee5() {
								clearTimeout(timer);
								stop = true;
								$([document.body,window])
									.off('mouseup.xdsoft',arguments_callee5);
							});
						});

				var xchangeTimer = 0;
				// base handler - generating a calendar and timepicker
				datetimepicker
					.on('xchange.xdsoft',function( event ) {
						clearTimeout(xchangeTimer);
						xchangeTimer = setTimeout(function(){
							var table 	=	'',
									start	= new Date(_xdsoft_datetime.currentTime.getFullYear(),_xdsoft_datetime.currentTime.getMonth(),1, 12, 0, 0),
									i = 0,
									today = _xdsoft_datetime.now();
								
								while( start.getDay()!=options.dayOfWeekStart )
									start.setDate(start.getDate()-1);

								//generate calendar
								table+='<table><thead><tr>';

								// days
								for(var j = 0; j<7; j++) {
									table+='<th>'+options.i18n[options.lang].dayOfWeek[(j+options.dayOfWeekStart)>6?0:j+options.dayOfWeekStart]+'</th>';
								}

								table+='</tr></thead>';
								table+='<tbody><tr>';
								var maxDate = false, minDate = false;
								
								if( options.maxDate!==false ) {
									maxDate = _xdsoft_datetime.strtodate(options.maxDate);
									maxDate = new Date(maxDate.getFullYear(),maxDate.getMonth(),maxDate.getDate(),23,59,59,999);
								}
								
								if( options.minDate!==false ) {
									minDate = _xdsoft_datetime.strtodate(options.minDate);
									minDate = new Date(minDate.getFullYear(),minDate.getMonth(),minDate.getDate());
								}
								
								var d,y,m,classes = [];
								
								while( i<_xdsoft_datetime.currentTime.countDaysInMonth()||start.getDay()!=options.dayOfWeekStart||_xdsoft_datetime.currentTime.getMonth()==start.getMonth() ) {
									classes = [];
									i++;

									d = start.getDate(); y = start.getFullYear(); m = start.getMonth();

									classes.push('xdsoft_date');

									if( ( maxDate!==false && start > maxDate )||(  minDate!==false && start < minDate ) ){
										classes.push('xdsoft_disabled');
									}

									if( _xdsoft_datetime.currentTime.getMonth()!=m ){
										classes.push('xdsoft_other_month');
									}

									if( (options.defaultSelect||datetimepicker.data('changed')) && _xdsoft_datetime.currentTime.dateFormat( options.formatDate )==start.dateFormat( options.formatDate ) ) {
										classes.push('xdsoft_current');
									}

									if( today.dateFormat( options.formatDate )==start.dateFormat( options.formatDate ) ) {
										classes.push('xdsoft_today');
									}

									if( start.getDay()==0||start.getDay()==6||~options.weekends.indexOf(start.dateFormat( options.formatDate )) ) {
										classes.push('xdsoft_weekend');
									}

									if(options.beforeShowDay && typeof options.beforeShowDay == 'function') {
										classes.push(options.beforeShowDay(start))
									}

									table+='<td data-date="'+d+'" data-month="'+m+'" data-year="'+y+'"'+' class="xdsoft_date xdsoft_day_of_week'+start.getDay()+' '+ classes.join(' ')+'">'+
												'<div>'+d+'</div>'+
											'</td>';

									if( start.getDay()==options.dayOfWeekStartPrev ) {
										table+='</tr>';
									}

									start.setDate(d+1);
								}
								table+='</tbody></table>';

								calendar.html(table);

								mounth_picker.find('.xdsoft_label span').eq(0).text(options.i18n[options.lang].months[_xdsoft_datetime.currentTime.getMonth()]);
								mounth_picker.find('.xdsoft_label span').eq(1).text(_xdsoft_datetime.currentTime.getFullYear());

								// generate timebox
								var time = '',
									h = '',
									m ='',
									line_time = function line_time( h,m ) {
										var now = _xdsoft_datetime.now();
										now.setHours(h);
										h = parseInt(now.getHours());
										now.setMinutes(m);
										m = parseInt(now.getMinutes());

										classes = [];
										if( (options.maxTime!==false&&_xdsoft_datetime.strtotime(options.maxTime).getTime()<now.getTime())||(options.minTime!==false&&_xdsoft_datetime.strtotime(options.minTime).getTime()>now.getTime()))
											classes.push('xdsoft_disabled');
										if( (options.initTime||options.defaultSelect||datetimepicker.data('changed')) && parseInt(_xdsoft_datetime.currentTime.getHours())==parseInt(h)&&(options.step>59||Math[options.roundTime](_xdsoft_datetime.currentTime.getMinutes()/options.step)*options.step==parseInt(m))) {
											if( options.defaultSelect||datetimepicker.data('changed')) {
												classes.push('xdsoft_current');
											} else if( options.initTime ) {
												classes.push('xdsoft_init_time');
											}
										}
										if( parseInt(today.getHours())==parseInt(h)&&parseInt(today.getMinutes())==parseInt(m))
											classes.push('xdsoft_today');
										time+= '<div class="xdsoft_time '+classes.join(' ')+'" data-hour="'+h+'" data-minute="'+m+'">'+now.dateFormat(options.formatTime)+'</div>';
									};

								if( !options.allowTimes || !$.isArray(options.allowTimes) || !options.allowTimes.length ) {
									for( var i=0,j=0;i<(options.hours12?12:24);i++ ) {
										for( j=0;j<60;j+=options.step ) {
											h = (i<10?'0':'')+i;
											m = (j<10?'0':'')+j;
											line_time( h,m );
										}
									}
								}else{
									for( var i=0;i<options.allowTimes.length;i++ ) {
										h = _xdsoft_datetime.strtotime(options.allowTimes[i]).getHours();
										m = _xdsoft_datetime.strtotime(options.allowTimes[i]).getMinutes();
										line_time( h,m );
									}
								}

								timebox.html(time);

								var opt = '',
									i = 0;

								for( i = parseInt(options.yearStart,10)+options.yearOffset;i<= parseInt(options.yearEnd,10)+options.yearOffset;i++ ) {
									opt+='<div class="xdsoft_option '+(_xdsoft_datetime.currentTime.getFullYear()==i?'xdsoft_current':'')+'" data-value="'+i+'">'+i+'</div>';
								}
								yearselect.children().eq(0)
														.html(opt);

								for( i = 0,opt = '';i<= 11;i++ ) {
									opt+='<div class="xdsoft_option '+(_xdsoft_datetime.currentTime.getMonth()==i?'xdsoft_current':'')+'" data-value="'+i+'">'+options.i18n[options.lang].months[i]+'</div>';
								}
								monthselect.children().eq(0).html(opt);
								$(datetimepicker)
									.trigger('generate.xdsoft');
						},10);
						event.stopPropagation();
					})
					.on('afterOpen.xdsoft',function() {
						if( options.timepicker ) {
							var classType;
							if( timebox.find('.xdsoft_current').length ) {
								classType = '.xdsoft_current';
							} else if( timebox.find('.xdsoft_init_time').length ) {
								classType = '.xdsoft_init_time';
							}
							
							if( classType ) {
								var pheight = timeboxparent[0].clientHeight,
									height = timebox[0].offsetHeight,
									top = timebox.find(classType).index()*options.timeHeightInTimePicker+1;
								if( (height-pheight)<top )
									top = height-pheight;
								timeboxparent.trigger('scroll_element.xdsoft_scroller',[parseInt(top)/(height-pheight)]);
							}else{
								timeboxparent.trigger('scroll_element.xdsoft_scroller',[0]);
							}
						}
					});
				
				var timerclick = 0;
				
				calendar
					.on('click.xdsoft', 'td', function (xdevent) {
					  xdevent.stopPropagation();  // Prevents closing of Pop-ups, Modals and Flyouts in Bootstrap
						timerclick++;
						var $this = $(this),
							currentTime = _xdsoft_datetime.currentTime;
						if( $this.hasClass('xdsoft_disabled') )
							return false;

						currentTime.setDate( 1 );
						currentTime.setFullYear( $this.data('year') );
						currentTime.setMonth( $this.data('month') );
						currentTime.setDate( $this.data('date') );
						
						datetimepicker.trigger('select.xdsoft',[currentTime]);

						input.val( _xdsoft_datetime.str() );
						if( (timerclick>1||(options.closeOnDateSelect===true||( options.closeOnDateSelect===0&&!options.timepicker )))&&!options.inline ) {
							datetimepicker.trigger('close.xdsoft');
						}

						if( options.onSelectDate &&	options.onSelectDate.call ) {
							options.onSelectDate.call(datetimepicker,_xdsoft_datetime.currentTime,datetimepicker.data('input'));
						}

						datetimepicker.data('changed',true);
						datetimepicker.trigger('xchange.xdsoft');
						datetimepicker.trigger('changedatetime.xdsoft');
						setTimeout(function(){
							timerclick = 0;
						},200);
					});

				timebox
					.on('click.xdsoft', 'div', function (xdevent) {
					    xdevent.stopPropagation(); // NAJ: Prevents closing of Pop-ups, Modals and Flyouts
						var $this = $(this),
							currentTime = _xdsoft_datetime.currentTime;
						if( $this.hasClass('xdsoft_disabled') )
							return false;
						currentTime.setHours($this.data('hour'));
						currentTime.setMinutes($this.data('minute'));
						datetimepicker.trigger('select.xdsoft',[currentTime]);

						datetimepicker.data('input').val( _xdsoft_datetime.str() );

						!options.inline&&datetimepicker.trigger('close.xdsoft');

						if( options.onSelectTime&&options.onSelectTime.call ) {
							options.onSelectTime.call(datetimepicker,_xdsoft_datetime.currentTime,datetimepicker.data('input'));
						}
						datetimepicker.data('changed',true);
						datetimepicker.trigger('xchange.xdsoft');
						datetimepicker.trigger('changedatetime.xdsoft');
					});

				datetimepicker.mousewheel&&datepicker.mousewheel(function(event, delta, deltaX, deltaY) {
					if( !options.scrollMonth )
						return true;
					if( delta<0 )
						_xdsoft_datetime.nextMonth();
					else
						_xdsoft_datetime.prevMonth();
					return false;
				});

				datetimepicker.mousewheel&&timeboxparent.unmousewheel().mousewheel(function(event, delta, deltaX, deltaY) {
					if( !options.scrollTime )
						return true;
					var pheight = timeboxparent[0].clientHeight,
						height = timebox[0].offsetHeight,
						top = Math.abs(parseInt(timebox.css('marginTop'))),
						fl = true;
					if( delta<0 && (height-pheight)-options.timeHeightInTimePicker>=top ) {
						timebox.css('marginTop','-'+(top+options.timeHeightInTimePicker)+'px');
						fl = false;
					}else if( delta>0&&top-options.timeHeightInTimePicker>=0 ) {
						timebox.css('marginTop','-'+(top-options.timeHeightInTimePicker)+'px');
						fl = false;
					}
					timeboxparent.trigger('scroll_element.xdsoft_scroller',[Math.abs(parseInt(timebox.css('marginTop'))/(height-pheight))]);
					event.stopPropagation();
					return fl;
				});
				
				var triggerAfterOpen = false;
				datetimepicker
					.on('changedatetime.xdsoft',function() {
						if( options.onChangeDateTime&&options.onChangeDateTime.call ) {
							var $input = datetimepicker.data('input');
							options.onChangeDateTime.call(datetimepicker, _xdsoft_datetime.currentTime, $input);
							$input.trigger('change');
						}
					})
					.on('generate.xdsoft',function() {
						if( options.onGenerate&&options.onGenerate.call )
							options.onGenerate.call(datetimepicker,_xdsoft_datetime.currentTime,datetimepicker.data('input'));
						if( triggerAfterOpen ){
							datetimepicker.trigger('afterOpen.xdsoft');
							triggerAfterOpen = false;
						}
					})
					.on( 'click.xdsoft', function( xdevent )
					{
						xdevent.stopPropagation();  // Prevents closing of Pop-ups, Modals and Flyouts in Bootstrap
					});

				var current_time_index = 0;
				input.mousewheel&&input.mousewheel(function( event, delta, deltaX, deltaY ) {
					if( !options.scrollInput )
						return true;
					if( !options.datepicker && options.timepicker ) {
						current_time_index = timebox.find('.xdsoft_current').length?timebox.find('.xdsoft_current').eq(0).index():0;
						if( current_time_index+delta>=0&&current_time_index+delta<timebox.children().length )
							current_time_index+=delta;
						timebox.children().eq(current_time_index).length&&timebox.children().eq(current_time_index).trigger('mousedown');
						return false;
					}else if( options.datepicker && !options.timepicker ) {
						datepicker.trigger( event, [delta, deltaX, deltaY]);
						input.val&&input.val( _xdsoft_datetime.str() );
						datetimepicker.trigger('changedatetime.xdsoft');
						return false;
					}
				});
				var setPos = function() {
					var offset = datetimepicker.data('input').offset(), top = offset.top+datetimepicker.data('input')[0].offsetHeight-1, left = offset.left, position = "absolute";
					if (options.fixed) {
						top -= $(window).scrollTop();
						left -= $(window).scrollLeft();
						position = "fixed";
					}else {
						if( top+datetimepicker[0].offsetHeight>$(window).height()+$(window).scrollTop() )
							top = offset.top-datetimepicker[0].offsetHeight+1;
							if (top < 0)
								top = 0;
						if( left+datetimepicker[0].offsetWidth>$(window).width() )
							left = offset.left-datetimepicker[0].offsetWidth+datetimepicker.data('input')[0].offsetWidth;
					}
					datetimepicker.css({
						left:left,
						top:top,
						position: position
					});
				};
				datetimepicker
					.on('open.xdsoft', function() {
						var onShow = true;
						if( options.onShow&&options.onShow.call) {
							onShow = options.onShow.call(datetimepicker,_xdsoft_datetime.currentTime,datetimepicker.data('input'));
						}
						if( onShow!==false ) {
							datetimepicker.show();
							setPos();
							$(window)
								.off('resize.xdsoft',setPos)
								.on('resize.xdsoft',setPos);

							if( options.closeOnWithoutClick ) {
								$([document.body,window]).on('mousedown.xdsoft',function arguments_callee6() {
									datetimepicker.trigger('close.xdsoft');
									$([document.body,window]).off('mousedown.xdsoft',arguments_callee6);
								});
							}
						}
					})
					.on('close.xdsoft', function( event ) {
						var onClose = true;
						if( options.onClose&&options.onClose.call ) {
							onClose=options.onClose.call(datetimepicker,_xdsoft_datetime.currentTime,datetimepicker.data('input'));
						}
						if( onClose!==false&&!options.opened&&!options.inline ) {
							datetimepicker.hide();
						}
						event.stopPropagation();
					})
					.data('input',input);

				var timer = 0,
					timer1 = 0;

				datetimepicker.data('xdsoft_datetime',_xdsoft_datetime);
				datetimepicker.setOptions(options);
				
				function getCurrentValue(){
					var ct = options.value?options.value:(input&&input.val&&input.val())?input.val():'';
				
					if( ct && _xdsoft_datetime.isValidDate(ct = Date.parseDate(ct, options.format)) ) {
						datetimepicker.data('changed',true);
					}else
						ct = '';
					
					if( !ct && options.startDate!==false ){
						ct = _xdsoft_datetime.strToDateTime(options.startDate);
					}
					
					return ct?ct:0;
				}
				
				_xdsoft_datetime.setCurrentTime( getCurrentValue() );

				input
					.data( 'xdsoft_datetimepicker',datetimepicker )
					.on('open.xdsoft focusin.xdsoft mousedown.xdsoft',function(event) {
						if( input.is(':disabled')||input.is(':hidden')||!input.is(':visible')||(input.data('xdsoft_datetimepicker').is(':visible') && options.closeOnInputClick) )
							return;
						clearTimeout(timer);
						timer = setTimeout(function() {
							if( input.is(':disabled')||input.is(':hidden')||!input.is(':visible') )
								return;
								
							triggerAfterOpen = true;
							_xdsoft_datetime.setCurrentTime(getCurrentValue());
							
							datetimepicker.trigger('open.xdsoft');
						},100);
					})
					.on('keydown.xdsoft',function( event ) {
						var val = this.value,
							key = event.which;
						switch(true) {
							case !!~([ENTER].indexOf(key)):
								var elementSelector = $("input:visible,textarea:visible");
								datetimepicker.trigger('close.xdsoft');
								elementSelector.eq(elementSelector.index(this) + 1).focus();
							return false;
							case !!~[TAB].indexOf(key):
								datetimepicker.trigger('close.xdsoft');
							return true;
						}
					});
			},
			destroyDateTimePicker = function( input ) {
				var datetimepicker = input.data('xdsoft_datetimepicker');
				if( datetimepicker ) {
					datetimepicker.data('xdsoft_datetime',null);
					datetimepicker.remove();
					input
						.data( 'xdsoft_datetimepicker',null )
						.off( 'open.xdsoft focusin.xdsoft focusout.xdsoft mousedown.xdsoft blur.xdsoft keydown.xdsoft' );
					$(window).off('resize.xdsoft');
					$([window,document.body]).off('mousedown.xdsoft');
					input.unmousewheel&&input.unmousewheel();
				}
			};
		$(document)
			.off('keydown.xdsoftctrl keyup.xdsoftctrl')
			.on('keydown.xdsoftctrl',function(e) {
				if ( e.keyCode == CTRLKEY )
					ctrlDown = true;
			})
			.on('keyup.xdsoftctrl',function(e) {
				if ( e.keyCode == CTRLKEY )
					ctrlDown = false;
			});
		return this.each(function() {
			var datetimepicker;
			if( datetimepicker = $(this).data('xdsoft_datetimepicker') ) {
				if( $.type(opt) === 'string' ) {
					switch(opt) {
						case 'show':
							$(this).select().focus();
							datetimepicker.trigger( 'open.xdsoft' );
						break;
						case 'hide':
							datetimepicker.trigger('close.xdsoft');
						break;
						case 'destroy':
							destroyDateTimePicker($(this));
						break;
						case 'reset':
							this.value = this.defaultValue;
							if(!this.value || !datetimepicker.data('xdsoft_datetime').isValidDate(Date.parseDate(this.value, options.format)))
								datetimepicker.data('changed',false);
							datetimepicker.data('xdsoft_datetime').setCurrentTime(this.value);
						break;
					}
				}else{
					datetimepicker
						.setOptions(opt);
				}
				return 0;
			}else
				if( ($.type(opt) !== 'string') ){
					if( !options.lazyInit||options.open||options.inline ){
						createDateTimePicker($(this));
					}else
						lazyInit($(this));
				}
		});
	};
	$.fn.datetimepicker.defaults = default_options;
})( jQuery );

/*
 * Copyright (c) 2013 Brandon Aaron (http://brandonaaron.net)
 *
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.1.3
 *
 * Requires: 1.2.2+
 */
(function(factory) {if(typeof define==='function'&&define.amd) {define(['jquery'],factory)}else if(typeof exports==='object') {module.exports=factory}else{factory(jQuery)}}(function($) {var toFix=['wheel','mousewheel','DOMMouseScroll','MozMousePixelScroll'];var toBind='onwheel'in document||document.documentMode>=9?['wheel']:['mousewheel','DomMouseScroll','MozMousePixelScroll'];var lowestDelta,lowestDeltaXY;if($.event.fixHooks) {for(var i=toFix.length;i;) {$.event.fixHooks[toFix[--i]]=$.event.mouseHooks}}$.event.special.mousewheel={setup:function() {if(this.addEventListener) {for(var i=toBind.length;i;) {this.addEventListener(toBind[--i],handler,false)}}else{this.onmousewheel=handler}},teardown:function() {if(this.removeEventListener) {for(var i=toBind.length;i;) {this.removeEventListener(toBind[--i],handler,false)}}else{this.onmousewheel=null}}};$.fn.extend({mousewheel:function(fn) {return fn?this.bind("mousewheel",fn):this.trigger("mousewheel")},unmousewheel:function(fn) {return this.unbind("mousewheel",fn)}});function handler(event) {var orgEvent=event||window.event,args=[].slice.call(arguments,1),delta=0,deltaX=0,deltaY=0,absDelta=0,absDeltaXY=0,fn;event=$.event.fix(orgEvent);event.type="mousewheel";if(orgEvent.wheelDelta) {delta=orgEvent.wheelDelta}if(orgEvent.detail) {delta=orgEvent.detail*-1}if(orgEvent.deltaY) {deltaY=orgEvent.deltaY*-1;delta=deltaY}if(orgEvent.deltaX) {deltaX=orgEvent.deltaX;delta=deltaX*-1}if(orgEvent.wheelDeltaY!==undefined) {deltaY=orgEvent.wheelDeltaY}if(orgEvent.wheelDeltaX!==undefined) {deltaX=orgEvent.wheelDeltaX*-1}absDelta=Math.abs(delta);if(!lowestDelta||absDelta<lowestDelta) {lowestDelta=absDelta}absDeltaXY=Math.max(Math.abs(deltaY),Math.abs(deltaX));if(!lowestDeltaXY||absDeltaXY<lowestDeltaXY) {lowestDeltaXY=absDeltaXY}fn=delta>0?'floor':'ceil';delta=Math[fn](delta/lowestDelta);deltaX=Math[fn](deltaX/lowestDeltaXY);deltaY=Math[fn](deltaY/lowestDeltaXY);args.unshift(event,delta,deltaX,deltaY);return($.event.dispatch||$.event.handle).apply(this,args)}}));


// Parse and Format Library
//http://www.xaprb.com/blog/2005/12/12/javascript-closures-for-runtime-efficiency/
/*
 * Copyright (C) 2004 Baron Schwartz <baron at sequent dot org>
 *
 * This program is free software; you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as published by the
 * Free Software Foundation, version 2.1.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE.  See the GNU Lesser General Public License for more
 * details.
 */
Date.parseFunctions={count:0};Date.parseRegexes=[];Date.formatFunctions={count:0};Date.prototype.dateFormat=function(b){if(b=="unixtime"){return parseInt(this.getTime()/1000);}if(Date.formatFunctions[b]==null){Date.createNewFormat(b);}var a=Date.formatFunctions[b];return this[a]();};Date.createNewFormat=function(format){var funcName="format"+Date.formatFunctions.count++;Date.formatFunctions[format]=funcName;var code="Date.prototype."+funcName+" = function() {return ";var special=false;var ch="";for(var i=0;i<format.length;++i){ch=format.charAt(i);if(!special&&ch=="\\"){special=true;}else{if(special){special=false;code+="'"+String.escape(ch)+"' + ";}else{code+=Date.getFormatCode(ch);}}}eval(code.substring(0,code.length-3)+";}");};Date.getFormatCode=function(a){switch(a){case"d":return"String.leftPad(this.getDate(), 2, '0') + ";case"D":return"Date.dayNames[this.getDay()].substring(0, 3) + ";case"j":return"this.getDate() + ";case"l":return"Date.dayNames[this.getDay()] + ";case"S":return"this.getSuffix() + ";case"w":return"this.getDay() + ";case"z":return"this.getDayOfYear() + ";case"W":return"this.getWeekOfYear() + ";case"F":return"Date.monthNames[this.getMonth()] + ";case"m":return"String.leftPad(this.getMonth() + 1, 2, '0') + ";case"M":return"Date.monthNames[this.getMonth()].substring(0, 3) + ";case"n":return"(this.getMonth() + 1) + ";case"t":return"this.getDaysInMonth() + ";case"L":return"(this.isLeapYear() ? 1 : 0) + ";case"Y":return"this.getFullYear() + ";case"y":return"('' + this.getFullYear()).substring(2, 4) + ";case"a":return"(this.getHours() < 12 ? 'am' : 'pm') + ";case"A":return"(this.getHours() < 12 ? 'AM' : 'PM') + ";case"g":return"((this.getHours() %12) ? this.getHours() % 12 : 12) + ";case"G":return"this.getHours() + ";case"h":return"String.leftPad((this.getHours() %12) ? this.getHours() % 12 : 12, 2, '0') + ";case"H":return"String.leftPad(this.getHours(), 2, '0') + ";case"i":return"String.leftPad(this.getMinutes(), 2, '0') + ";case"s":return"String.leftPad(this.getSeconds(), 2, '0') + ";case"O":return"this.getGMTOffset() + ";case"T":return"this.getTimezone() + ";case"Z":return"(this.getTimezoneOffset() * -60) + ";default:return"'"+String.escape(a)+"' + ";}};Date.parseDate=function(a,c){if(c=="unixtime"){return new Date(!isNaN(parseInt(a))?parseInt(a)*1000:0);}if(Date.parseFunctions[c]==null){Date.createParser(c);}var b=Date.parseFunctions[c];return Date[b](a);};Date.createParser=function(format){var funcName="parse"+Date.parseFunctions.count++;var regexNum=Date.parseRegexes.length;var currentGroup=1;Date.parseFunctions[format]=funcName;var code="Date."+funcName+" = function(input) {\nvar y = -1, m = -1, d = -1, h = -1, i = -1, s = -1, z = -1;\nvar d = new Date();\ny = d.getFullYear();\nm = d.getMonth();\nd = d.getDate();\nvar results = input.match(Date.parseRegexes["+regexNum+"]);\nif (results && results.length > 0) {";var regex="";var special=false;var ch="";for(var i=0;i<format.length;++i){ch=format.charAt(i);if(!special&&ch=="\\"){special=true;}else{if(special){special=false;regex+=String.escape(ch);}else{obj=Date.formatCodeToRegex(ch,currentGroup);currentGroup+=obj.g;regex+=obj.s;if(obj.g&&obj.c){code+=obj.c;}}}}code+="if (y > 0 && z > 0){\nvar doyDate = new Date(y,0);\ndoyDate.setDate(z);\nm = doyDate.getMonth();\nd = doyDate.getDate();\n}";code+="if (y > 0 && m >= 0 && d > 0 && h >= 0 && i >= 0 && s >= 0)\n{return new Date(y, m, d, h, i, s);}\nelse if (y > 0 && m >= 0 && d > 0 && h >= 0 && i >= 0)\n{return new Date(y, m, d, h, i);}\nelse if (y > 0 && m >= 0 && d > 0 && h >= 0)\n{return new Date(y, m, d, h);}\nelse if (y > 0 && m >= 0 && d > 0)\n{return new Date(y, m, d);}\nelse if (y > 0 && m >= 0)\n{return new Date(y, m);}\nelse if (y > 0)\n{return new Date(y);}\n}return null;}";Date.parseRegexes[regexNum]=new RegExp("^"+regex+"$");eval(code);};Date.formatCodeToRegex=function(b,a){switch(b){case"D":return{g:0,c:null,s:"(?:Sun|Mon|Tue|Wed|Thu|Fri|Sat)"};case"j":case"d":return{g:1,c:"d = parseInt(results["+a+"], 10);\n",s:"(\\d{1,2})"};case"l":return{g:0,c:null,s:"(?:"+Date.dayNames.join("|")+")"};case"S":return{g:0,c:null,s:"(?:st|nd|rd|th)"};case"w":return{g:0,c:null,s:"\\d"};case"z":return{g:1,c:"z = parseInt(results["+a+"], 10);\n",s:"(\\d{1,3})"};case"W":return{g:0,c:null,s:"(?:\\d{2})"};case"F":return{g:1,c:"m = parseInt(Date.monthNumbers[results["+a+"].substring(0, 3)], 10);\n",s:"("+Date.monthNames.join("|")+")"};case"M":return{g:1,c:"m = parseInt(Date.monthNumbers[results["+a+"]], 10);\n",s:"(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)"};case"n":case"m":return{g:1,c:"m = parseInt(results["+a+"], 10) - 1;\n",s:"(\\d{1,2})"};case"t":return{g:0,c:null,s:"\\d{1,2}"};case"L":return{g:0,c:null,s:"(?:1|0)"};case"Y":return{g:1,c:"y = parseInt(results["+a+"], 10);\n",s:"(\\d{4})"};case"y":return{g:1,c:"var ty = parseInt(results["+a+"], 10);\ny = ty > Date.y2kYear ? 1900 + ty : 2000 + ty;\n",s:"(\\d{1,2})"};case"a":return{g:1,c:"if (results["+a+"] == 'am') {\nif (h == 12) { h = 0; }\n} else { if (h < 12) { h += 12; }}",s:"(am|pm)"};case"A":return{g:1,c:"if (results["+a+"] == 'AM') {\nif (h == 12) { h = 0; }\n} else { if (h < 12) { h += 12; }}",s:"(AM|PM)"};case"g":case"G":case"h":case"H":return{g:1,c:"h = parseInt(results["+a+"], 10);\n",s:"(\\d{1,2})"};case"i":return{g:1,c:"i = parseInt(results["+a+"], 10);\n",s:"(\\d{2})"};case"s":return{g:1,c:"s = parseInt(results["+a+"], 10);\n",s:"(\\d{2})"};case"O":return{g:0,c:null,s:"[+-]\\d{4}"};case"T":return{g:0,c:null,s:"[A-Z]{3}"};case"Z":return{g:0,c:null,s:"[+-]\\d{1,5}"};default:return{g:0,c:null,s:String.escape(b)};}};Date.prototype.getTimezone=function(){return this.toString().replace(/^.*? ([A-Z]{3}) [0-9]{4}.*$/,"$1").replace(/^.*?\(([A-Z])[a-z]+ ([A-Z])[a-z]+ ([A-Z])[a-z]+\)$/,"$1$2$3");};Date.prototype.getGMTOffset=function(){return(this.getTimezoneOffset()>0?"-":"+")+String.leftPad(Math.floor(Math.abs(this.getTimezoneOffset())/60),2,"0")+String.leftPad(Math.abs(this.getTimezoneOffset())%60,2,"0");};Date.prototype.getDayOfYear=function(){var a=0;Date.daysInMonth[1]=this.isLeapYear()?29:28;for(var b=0;b<this.getMonth();++b){a+=Date.daysInMonth[b];}return a+this.getDate();};Date.prototype.getWeekOfYear=function(){var b=this.getDayOfYear()+(4-this.getDay());var a=new Date(this.getFullYear(),0,1);var c=(7-a.getDay()+4);return String.leftPad(Math.ceil((b-c)/7)+1,2,"0");};Date.prototype.isLeapYear=function(){var a=this.getFullYear();return((a&3)==0&&(a%100||(a%400==0&&a)));};Date.prototype.getFirstDayOfMonth=function(){var a=(this.getDay()-(this.getDate()-1))%7;return(a<0)?(a+7):a;};Date.prototype.getLastDayOfMonth=function(){var a=(this.getDay()+(Date.daysInMonth[this.getMonth()]-this.getDate()))%7;return(a<0)?(a+7):a;};Date.prototype.getDaysInMonth=function(){Date.daysInMonth[1]=this.isLeapYear()?29:28;return Date.daysInMonth[this.getMonth()];};Date.prototype.getSuffix=function(){switch(this.getDate()){case 1:case 21:case 31:return"st";case 2:case 22:return"nd";case 3:case 23:return"rd";default:return"th";}};String.escape=function(a){return a.replace(/('|\\)/g,"\\$1");};String.leftPad=function(d,b,c){var a=new String(d);if(c==null){c=" ";}while(a.length<b){a=c+a;}return a;};Date.daysInMonth=[31,28,31,30,31,30,31,31,30,31,30,31];Date.monthNames=["January","February","March","April","May","June","July","August","September","October","November","December"];Date.dayNames=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];Date.y2kYear=50;Date.monthNumbers={Jan:0,Feb:1,Mar:2,Apr:3,May:4,Jun:5,Jul:6,Aug:7,Sep:8,Oct:9,Nov:10,Dec:11};Date.patterns={ISO8601LongPattern:"Y-m-d H:i:s",ISO8601ShortPattern:"Y-m-d",ShortDatePattern:"n/j/Y",LongDatePattern:"l, F d, Y",FullDateTimePattern:"l, F d, Y g:i:s A",MonthDayPattern:"F d",ShortTimePattern:"g:i A",LongTimePattern:"g:i:s A",SortableDateTimePattern:"Y-m-d\\TH:i:s",UniversalSortableDateTimePattern:"Y-m-d H:i:sO",YearMonthPattern:"F, Y"};
/* jQuery elevateZoom 3.0.8 - Demo's and documentation: - www.elevateweb.co.uk/image-zoom - Copyright (c) 2013 Andrew Eades - www.elevateweb.co.uk - Dual licensed under the LGPL licenses. - http://en.wikipedia.org/wiki/MIT_License - http://en.wikipedia.org/wiki/GNU_General_Public_License */

"function"!==typeof Object.create&&(Object.create=function(d){function h(){}h.prototype=d;return new h});
(function(d,h,l,m){var k={init:function(b,a){var c=this;c.elem=a;c.$elem=d(a);c.imageSrc=c.$elem.data("zoom-image")?c.$elem.data("zoom-image"):c.$elem.attr("src");c.options=d.extend({},d.fn.elevateZoom.options,b);c.options.tint&&(c.options.lensColour="none",c.options.lensOpacity="1");"inner"==c.options.zoomType&&(c.options.showLens=!1);c.$elem.parent().removeAttr("title").removeAttr("alt");c.zoomImage=c.imageSrc;c.refresh(1);d("#"+c.options.gallery+" a").click(function(a){c.options.galleryActiveClass&&
(d("#"+c.options.gallery+" a").removeClass(c.options.galleryActiveClass),d(this).addClass(c.options.galleryActiveClass));a.preventDefault();d(this).data("zoom-image")?c.zoomImagePre=d(this).data("zoom-image"):c.zoomImagePre=d(this).data("image");c.swaptheimage(d(this).data("image"),c.zoomImagePre);return!1})},refresh:function(b){var a=this;setTimeout(function(){a.fetch(a.imageSrc)},b||a.options.refresh)},fetch:function(b){var a=this,c=new Image;c.onload=function(){a.largeWidth=c.width;a.largeHeight=
c.height;a.startZoom();a.currentImage=a.imageSrc;a.options.onZoomedImageLoaded(a.$elem)};c.src=b},startZoom:function(){var b=this;b.nzWidth=b.$elem.width();b.nzHeight=b.$elem.height();b.isWindowActive=!1;b.isLensActive=!1;b.isTintActive=!1;b.overWindow=!1;b.options.imageCrossfade&&(b.zoomWrap=b.$elem.wrap('<div style="height:'+b.nzHeight+"px;width:"+b.nzWidth+'px;" class="zoomWrapper" />'),b.$elem.css("position","absolute"));b.zoomLock=1;b.scrollingLock=!1;b.changeBgSize=!1;b.currentZoomLevel=b.options.zoomLevel;
b.nzOffset=b.$elem.offset();b.widthRatio=b.largeWidth/b.currentZoomLevel/b.nzWidth;b.heightRatio=b.largeHeight/b.currentZoomLevel/b.nzHeight;"window"==b.options.zoomType&&(b.zoomWindowStyle="overflow: hidden;background-position: 0px 0px;text-align:center;background-color: "+String(b.options.zoomWindowBgColour)+";width: "+String(b.options.zoomWindowWidth)+"px;height: "+String(b.options.zoomWindowHeight)+"px;float: left;background-size: "+b.largeWidth/b.currentZoomLevel+"px "+b.largeHeight/b.currentZoomLevel+
"px;display: none;z-index:100;border: "+String(b.options.borderSize)+"px solid "+b.options.borderColour+";background-repeat: no-repeat;position: absolute;");if("inner"==b.options.zoomType){var a=b.$elem.css("border-left-width");b.zoomWindowStyle="overflow: hidden;margin-left: "+String(a)+";margin-top: "+String(a)+";background-position: 0px 0px;width: "+String(b.nzWidth)+"px;height: "+String(b.nzHeight)+"px;float: left;display: none;cursor:"+b.options.cursor+";px solid "+b.options.borderColour+";background-repeat: no-repeat;position: absolute;"}"window"==
b.options.zoomType&&(lensHeight=b.nzHeight<b.options.zoomWindowWidth/b.widthRatio?b.nzHeight:String(b.options.zoomWindowHeight/b.heightRatio),lensWidth=b.largeWidth<b.options.zoomWindowWidth?b.nzWidth:b.options.zoomWindowWidth/b.widthRatio,b.lensStyle="background-position: 0px 0px;width: "+String(b.options.zoomWindowWidth/b.widthRatio)+"px;height: "+String(b.options.zoomWindowHeight/b.heightRatio)+"px;float: right;display: none;overflow: hidden;z-index: 999;-webkit-transform: translateZ(0);opacity:"+
b.options.lensOpacity+";filter: alpha(opacity = "+100*b.options.lensOpacity+"); zoom:1;width:"+lensWidth+"px;height:"+lensHeight+"px;background-color:"+b.options.lensColour+";cursor:"+b.options.cursor+";border: "+b.options.lensBorderSize+"px solid "+b.options.lensBorderColour+";background-repeat: no-repeat;position: absolute;");b.tintStyle="display: block;position: absolute;background-color: "+b.options.tintColour+";filter:alpha(opacity=0);opacity: 0;width: "+b.nzWidth+"px;height: "+b.nzHeight+"px;";
b.lensRound="";"lens"==b.options.zoomType&&(b.lensStyle="background-position: 0px 0px;float: left;display: none;border: "+String(b.options.borderSize)+"px solid "+b.options.borderColour+";width:"+String(b.options.lensSize)+"px;height:"+String(b.options.lensSize)+"px;background-repeat: no-repeat;position: absolute;");"round"==b.options.lensShape&&(b.lensRound="border-top-left-radius: "+String(b.options.lensSize/2+b.options.borderSize)+"px;border-top-right-radius: "+String(b.options.lensSize/2+b.options.borderSize)+
"px;border-bottom-left-radius: "+String(b.options.lensSize/2+b.options.borderSize)+"px;border-bottom-right-radius: "+String(b.options.lensSize/2+b.options.borderSize)+"px;");b.zoomContainer=d('<div class="zoomContainer" style="-webkit-transform: translateZ(0);position:absolute;left:'+b.nzOffset.left+"px;top:"+b.nzOffset.top+"px;height:"+b.nzHeight+"px;width:"+b.nzWidth+'px;"></div>');d("body").append(b.zoomContainer);b.options.containLensZoom&&"lens"==b.options.zoomType&&b.zoomContainer.css("overflow",
"hidden");"inner"!=b.options.zoomType&&(b.zoomLens=d("<div class='zoomLens' style='"+b.lensStyle+b.lensRound+"'>&nbsp;</div>").appendTo(b.zoomContainer).click(function(){b.$elem.trigger("click")}),b.options.tint&&(b.tintContainer=d("<div/>").addClass("tintContainer"),b.zoomTint=d("<div class='zoomTint' style='"+b.tintStyle+"'></div>"),b.zoomLens.wrap(b.tintContainer),b.zoomTintcss=b.zoomLens.after(b.zoomTint),b.zoomTintImage=d('<img style="position: absolute; left: 0px; top: 0px; max-width: none; width: '+
b.nzWidth+"px; height: "+b.nzHeight+'px;" src="'+b.imageSrc+'">').appendTo(b.zoomLens).click(function(){b.$elem.trigger("click")})));isNaN(b.options.zoomWindowPosition)?b.zoomWindow=d("<div style='z-index:999;left:"+b.windowOffsetLeft+"px;top:"+b.windowOffsetTop+"px;"+b.zoomWindowStyle+"' class='zoomWindow'>&nbsp;</div>").appendTo("body").click(function(){b.$elem.trigger("click")}):b.zoomWindow=d("<div style='z-index:999;left:"+b.windowOffsetLeft+"px;top:"+b.windowOffsetTop+"px;"+b.zoomWindowStyle+
"' class='zoomWindow'>&nbsp;</div>").appendTo(b.zoomContainer).click(function(){b.$elem.trigger("click")});b.zoomWindowContainer=d("<div/>").addClass("zoomWindowContainer").css("width",b.options.zoomWindowWidth);b.zoomWindow.wrap(b.zoomWindowContainer);"lens"==b.options.zoomType&&b.zoomLens.css({backgroundImage:"url('"+b.imageSrc+"')"});"window"==b.options.zoomType&&b.zoomWindow.css({backgroundImage:"url('"+b.imageSrc+"')"});"inner"==b.options.zoomType&&b.zoomWindow.css({backgroundImage:"url('"+b.imageSrc+
"')"});b.$elem.bind("touchmove",function(a){a.preventDefault();b.setPosition(a.originalEvent.touches[0]||a.originalEvent.changedTouches[0])});b.zoomContainer.bind("touchmove",function(a){"inner"==b.options.zoomType&&b.showHideWindow("show");a.preventDefault();b.setPosition(a.originalEvent.touches[0]||a.originalEvent.changedTouches[0])});b.zoomContainer.bind("touchend",function(a){b.showHideWindow("hide");b.options.showLens&&b.showHideLens("hide");b.options.tint&&"inner"!=b.options.zoomType&&b.showHideTint("hide")});
b.$elem.bind("touchend",function(a){b.showHideWindow("hide");b.options.showLens&&b.showHideLens("hide");b.options.tint&&"inner"!=b.options.zoomType&&b.showHideTint("hide")});b.options.showLens&&(b.zoomLens.bind("touchmove",function(a){a.preventDefault();b.setPosition(a.originalEvent.touches[0]||a.originalEvent.changedTouches[0])}),b.zoomLens.bind("touchend",function(a){b.showHideWindow("hide");b.options.showLens&&b.showHideLens("hide");b.options.tint&&"inner"!=b.options.zoomType&&b.showHideTint("hide")}));
b.$elem.bind("mousemove",function(a){!1==b.overWindow&&b.setElements("show");if(b.lastX!==a.clientX||b.lastY!==a.clientY)b.setPosition(a),b.currentLoc=a;b.lastX=a.clientX;b.lastY=a.clientY});b.zoomContainer.bind("mousemove",function(a){!1==b.overWindow&&b.setElements("show");if(b.lastX!==a.clientX||b.lastY!==a.clientY)b.setPosition(a),b.currentLoc=a;b.lastX=a.clientX;b.lastY=a.clientY});"inner"!=b.options.zoomType&&b.zoomLens.bind("mousemove",function(a){if(b.lastX!==a.clientX||b.lastY!==a.clientY)b.setPosition(a),
b.currentLoc=a;b.lastX=a.clientX;b.lastY=a.clientY});b.options.tint&&"inner"!=b.options.zoomType&&b.zoomTint.bind("mousemove",function(a){if(b.lastX!==a.clientX||b.lastY!==a.clientY)b.setPosition(a),b.currentLoc=a;b.lastX=a.clientX;b.lastY=a.clientY});"inner"==b.options.zoomType&&b.zoomWindow.bind("mousemove",function(a){if(b.lastX!==a.clientX||b.lastY!==a.clientY)b.setPosition(a),b.currentLoc=a;b.lastX=a.clientX;b.lastY=a.clientY});b.zoomContainer.add(b.$elem).mouseenter(function(){!1==b.overWindow&&
b.setElements("show")}).mouseleave(function(){b.scrollLock||b.setElements("hide")});"inner"!=b.options.zoomType&&b.zoomWindow.mouseenter(function(){b.overWindow=!0;b.setElements("hide")}).mouseleave(function(){b.overWindow=!1});b.minZoomLevel=b.options.minZoomLevel?b.options.minZoomLevel:2*b.options.scrollZoomIncrement;b.options.scrollZoom&&b.zoomContainer.add(b.$elem).bind("mousewheel DOMMouseScroll MozMousePixelScroll",function(a){b.scrollLock=!0;clearTimeout(d.data(this,"timer"));d.data(this,"timer",
setTimeout(function(){b.scrollLock=!1},250));var e=a.originalEvent.wheelDelta||-1*a.originalEvent.detail;a.stopImmediatePropagation();a.stopPropagation();a.preventDefault();0<e/120?b.currentZoomLevel>=b.minZoomLevel&&b.changeZoomLevel(b.currentZoomLevel-b.options.scrollZoomIncrement):b.options.maxZoomLevel?b.currentZoomLevel<=b.options.maxZoomLevel&&b.changeZoomLevel(parseFloat(b.currentZoomLevel)+b.options.scrollZoomIncrement):b.changeZoomLevel(parseFloat(b.currentZoomLevel)+b.options.scrollZoomIncrement);
return!1})},setElements:function(b){if(!this.options.zoomEnabled)return!1;"show"==b&&this.isWindowSet&&("inner"==this.options.zoomType&&this.showHideWindow("show"),"window"==this.options.zoomType&&this.showHideWindow("show"),this.options.showLens&&this.showHideLens("show"),this.options.tint&&"inner"!=this.options.zoomType&&this.showHideTint("show"));"hide"==b&&("window"==this.options.zoomType&&this.showHideWindow("hide"),this.options.tint||this.showHideWindow("hide"),this.options.showLens&&this.showHideLens("hide"),
this.options.tint&&this.showHideTint("hide"))},setPosition:function(b){if(!this.options.zoomEnabled)return!1;this.nzHeight=this.$elem.height();this.nzWidth=this.$elem.width();this.nzOffset=this.$elem.offset();this.options.tint&&"inner"!=this.options.zoomType&&(this.zoomTint.css({top:0}),this.zoomTint.css({left:0}));this.options.responsive&&!this.options.scrollZoom&&this.options.showLens&&(lensHeight=this.nzHeight<this.options.zoomWindowWidth/this.widthRatio?this.nzHeight:String(this.options.zoomWindowHeight/
this.heightRatio),lensWidth=this.largeWidth<this.options.zoomWindowWidth?this.nzWidth:this.options.zoomWindowWidth/this.widthRatio,this.widthRatio=this.largeWidth/this.nzWidth,this.heightRatio=this.largeHeight/this.nzHeight,"lens"!=this.options.zoomType&&(lensHeight=this.nzHeight<this.options.zoomWindowWidth/this.widthRatio?this.nzHeight:String(this.options.zoomWindowHeight/this.heightRatio),lensWidth=this.options.zoomWindowWidth<this.options.zoomWindowWidth?this.nzWidth:this.options.zoomWindowWidth/
this.widthRatio,this.zoomLens.css("width",lensWidth),this.zoomLens.css("height",lensHeight),this.options.tint&&(this.zoomTintImage.css("width",this.nzWidth),this.zoomTintImage.css("height",this.nzHeight))),"lens"==this.options.zoomType&&this.zoomLens.css({width:String(this.options.lensSize)+"px",height:String(this.options.lensSize)+"px"}));this.zoomContainer.css({top:this.nzOffset.top});this.zoomContainer.css({left:this.nzOffset.left});this.mouseLeft=parseInt(b.pageX-this.nzOffset.left);this.mouseTop=
parseInt(b.pageY-this.nzOffset.top);"window"==this.options.zoomType&&(this.Etoppos=this.mouseTop<this.zoomLens.height()/2,this.Eboppos=this.mouseTop>this.nzHeight-this.zoomLens.height()/2-2*this.options.lensBorderSize,this.Eloppos=this.mouseLeft<0+this.zoomLens.width()/2,this.Eroppos=this.mouseLeft>this.nzWidth-this.zoomLens.width()/2-2*this.options.lensBorderSize);"inner"==this.options.zoomType&&(this.Etoppos=this.mouseTop<this.nzHeight/2/this.heightRatio,this.Eboppos=this.mouseTop>this.nzHeight-
this.nzHeight/2/this.heightRatio,this.Eloppos=this.mouseLeft<0+this.nzWidth/2/this.widthRatio,this.Eroppos=this.mouseLeft>this.nzWidth-this.nzWidth/2/this.widthRatio-2*this.options.lensBorderSize);0>=this.mouseLeft||0>this.mouseTop||this.mouseLeft>this.nzWidth||this.mouseTop>this.nzHeight?this.setElements("hide"):(this.options.showLens&&(this.lensLeftPos=String(this.mouseLeft-this.zoomLens.width()/2),this.lensTopPos=String(this.mouseTop-this.zoomLens.height()/2)),this.Etoppos&&(this.lensTopPos=0),
this.Eloppos&&(this.tintpos=this.lensLeftPos=this.windowLeftPos=0),"window"==this.options.zoomType&&(this.Eboppos&&(this.lensTopPos=Math.max(this.nzHeight-this.zoomLens.height()-2*this.options.lensBorderSize,0)),this.Eroppos&&(this.lensLeftPos=this.nzWidth-this.zoomLens.width()-2*this.options.lensBorderSize)),"inner"==this.options.zoomType&&(this.Eboppos&&(this.lensTopPos=Math.max(this.nzHeight-2*this.options.lensBorderSize,0)),this.Eroppos&&(this.lensLeftPos=this.nzWidth-this.nzWidth-2*this.options.lensBorderSize)),
"lens"==this.options.zoomType&&(this.windowLeftPos=String(-1*((b.pageX-this.nzOffset.left)*this.widthRatio-this.zoomLens.width()/2)),this.windowTopPos=String(-1*((b.pageY-this.nzOffset.top)*this.heightRatio-this.zoomLens.height()/2)),this.zoomLens.css({backgroundPosition:this.windowLeftPos+"px "+this.windowTopPos+"px"}),this.changeBgSize&&(this.nzHeight>this.nzWidth?("lens"==this.options.zoomType&&this.zoomLens.css({"background-size":this.largeWidth/this.newvalueheight+"px "+this.largeHeight/this.newvalueheight+
"px"}),this.zoomWindow.css({"background-size":this.largeWidth/this.newvalueheight+"px "+this.largeHeight/this.newvalueheight+"px"})):("lens"==this.options.zoomType&&this.zoomLens.css({"background-size":this.largeWidth/this.newvaluewidth+"px "+this.largeHeight/this.newvaluewidth+"px"}),this.zoomWindow.css({"background-size":this.largeWidth/this.newvaluewidth+"px "+this.largeHeight/this.newvaluewidth+"px"})),this.changeBgSize=!1),this.setWindowPostition(b)),this.options.tint&&"inner"!=this.options.zoomType&&
this.setTintPosition(b),"window"==this.options.zoomType&&this.setWindowPostition(b),"inner"==this.options.zoomType&&this.setWindowPostition(b),this.options.showLens&&(this.fullwidth&&"lens"!=this.options.zoomType&&(this.lensLeftPos=0),this.zoomLens.css({left:this.lensLeftPos+"px",top:this.lensTopPos+"px"})))},showHideWindow:function(b){"show"!=b||this.isWindowActive||(this.options.zoomWindowFadeIn?this.zoomWindow.stop(!0,!0,!1).fadeIn(this.options.zoomWindowFadeIn):this.zoomWindow.show(),this.isWindowActive=
!0);"hide"==b&&this.isWindowActive&&(this.options.zoomWindowFadeOut?this.zoomWindow.stop(!0,!0).fadeOut(this.options.zoomWindowFadeOut):this.zoomWindow.hide(),this.isWindowActive=!1)},showHideLens:function(b){"show"!=b||this.isLensActive||(this.options.lensFadeIn?this.zoomLens.stop(!0,!0,!1).fadeIn(this.options.lensFadeIn):this.zoomLens.show(),this.isLensActive=!0);"hide"==b&&this.isLensActive&&(this.options.lensFadeOut?this.zoomLens.stop(!0,!0).fadeOut(this.options.lensFadeOut):this.zoomLens.hide(),
this.isLensActive=!1)},showHideTint:function(b){"show"!=b||this.isTintActive||(this.options.zoomTintFadeIn?this.zoomTint.css({opacity:this.options.tintOpacity}).animate().stop(!0,!0).fadeIn("slow"):(this.zoomTint.css({opacity:this.options.tintOpacity}).animate(),this.zoomTint.show()),this.isTintActive=!0);"hide"==b&&this.isTintActive&&(this.options.zoomTintFadeOut?this.zoomTint.stop(!0,!0).fadeOut(this.options.zoomTintFadeOut):this.zoomTint.hide(),this.isTintActive=!1)},setLensPostition:function(b){},
setWindowPostition:function(b){var a=this;if(isNaN(a.options.zoomWindowPosition))a.externalContainer=d("#"+a.options.zoomWindowPosition),a.externalContainerWidth=a.externalContainer.width(),a.externalContainerHeight=a.externalContainer.height(),a.externalContainerOffset=a.externalContainer.offset(),a.windowOffsetTop=a.externalContainerOffset.top,a.windowOffsetLeft=a.externalContainerOffset.left;else switch(a.options.zoomWindowPosition){case 1:a.windowOffsetTop=a.options.zoomWindowOffety;a.windowOffsetLeft=
+a.nzWidth;break;case 2:a.options.zoomWindowHeight>a.nzHeight&&(a.windowOffsetTop=-1*(a.options.zoomWindowHeight/2-a.nzHeight/2),a.windowOffsetLeft=a.nzWidth);break;case 3:a.windowOffsetTop=a.nzHeight-a.zoomWindow.height()-2*a.options.borderSize;a.windowOffsetLeft=a.nzWidth;break;case 4:a.windowOffsetTop=a.nzHeight;a.windowOffsetLeft=a.nzWidth;break;case 5:a.windowOffsetTop=a.nzHeight;a.windowOffsetLeft=a.nzWidth-a.zoomWindow.width()-2*a.options.borderSize;break;case 6:a.options.zoomWindowHeight>
a.nzHeight&&(a.windowOffsetTop=a.nzHeight,a.windowOffsetLeft=-1*(a.options.zoomWindowWidth/2-a.nzWidth/2+2*a.options.borderSize));break;case 7:a.windowOffsetTop=a.nzHeight;a.windowOffsetLeft=0;break;case 8:a.windowOffsetTop=a.nzHeight;a.windowOffsetLeft=-1*(a.zoomWindow.width()+2*a.options.borderSize);break;case 9:a.windowOffsetTop=a.nzHeight-a.zoomWindow.height()-2*a.options.borderSize;a.windowOffsetLeft=-1*(a.zoomWindow.width()+2*a.options.borderSize);break;case 10:a.options.zoomWindowHeight>a.nzHeight&&
(a.windowOffsetTop=-1*(a.options.zoomWindowHeight/2-a.nzHeight/2),a.windowOffsetLeft=-1*(a.zoomWindow.width()+2*a.options.borderSize));break;case 11:a.windowOffsetTop=a.options.zoomWindowOffety;a.windowOffsetLeft=-1*(a.zoomWindow.width()+2*a.options.borderSize);break;case 12:a.windowOffsetTop=-1*(a.zoomWindow.height()+2*a.options.borderSize);a.windowOffsetLeft=-1*(a.zoomWindow.width()+2*a.options.borderSize);break;case 13:a.windowOffsetTop=-1*(a.zoomWindow.height()+2*a.options.borderSize);a.windowOffsetLeft=
0;break;case 14:a.options.zoomWindowHeight>a.nzHeight&&(a.windowOffsetTop=-1*(a.zoomWindow.height()+2*a.options.borderSize),a.windowOffsetLeft=-1*(a.options.zoomWindowWidth/2-a.nzWidth/2+2*a.options.borderSize));break;case 15:a.windowOffsetTop=-1*(a.zoomWindow.height()+2*a.options.borderSize);a.windowOffsetLeft=a.nzWidth-a.zoomWindow.width()-2*a.options.borderSize;break;case 16:a.windowOffsetTop=-1*(a.zoomWindow.height()+2*a.options.borderSize);a.windowOffsetLeft=a.nzWidth;break;default:a.windowOffsetTop=
a.options.zoomWindowOffety,a.windowOffsetLeft=a.nzWidth}a.isWindowSet=!0;a.windowOffsetTop+=a.options.zoomWindowOffety;a.windowOffsetLeft+=a.options.zoomWindowOffetx;a.zoomWindow.css({top:a.windowOffsetTop});a.zoomWindow.css({left:a.windowOffsetLeft});"inner"==a.options.zoomType&&(a.zoomWindow.css({top:0}),a.zoomWindow.css({left:0}));a.windowLeftPos=String(-1*((b.pageX-a.nzOffset.left)*a.widthRatio-a.zoomWindow.width()/2));a.windowTopPos=String(-1*((b.pageY-a.nzOffset.top)*a.heightRatio-a.zoomWindow.height()/
2));a.Etoppos&&(a.windowTopPos=0);a.Eloppos&&(a.windowLeftPos=0);a.Eboppos&&(a.windowTopPos=-1*(a.largeHeight/a.currentZoomLevel-a.zoomWindow.height()));a.Eroppos&&(a.windowLeftPos=-1*(a.largeWidth/a.currentZoomLevel-a.zoomWindow.width()));a.fullheight&&(a.windowTopPos=0);a.fullwidth&&(a.windowLeftPos=0);if("window"==a.options.zoomType||"inner"==a.options.zoomType)1==a.zoomLock&&(1>=a.widthRatio&&(a.windowLeftPos=0),1>=a.heightRatio&&(a.windowTopPos=0)),a.largeHeight<a.options.zoomWindowHeight&&(a.windowTopPos=
0),a.largeWidth<a.options.zoomWindowWidth&&(a.windowLeftPos=0),a.options.easing?(a.xp||(a.xp=0),a.yp||(a.yp=0),a.loop||(a.loop=setInterval(function(){a.xp+=(a.windowLeftPos-a.xp)/a.options.easingAmount;a.yp+=(a.windowTopPos-a.yp)/a.options.easingAmount;a.scrollingLock?(clearInterval(a.loop),a.xp=a.windowLeftPos,a.yp=a.windowTopPos,a.xp=-1*((b.pageX-a.nzOffset.left)*a.widthRatio-a.zoomWindow.width()/2),a.yp=-1*((b.pageY-a.nzOffset.top)*a.heightRatio-a.zoomWindow.height()/2),a.changeBgSize&&(a.nzHeight>
a.nzWidth?("lens"==a.options.zoomType&&a.zoomLens.css({"background-size":a.largeWidth/a.newvalueheight+"px "+a.largeHeight/a.newvalueheight+"px"}),a.zoomWindow.css({"background-size":a.largeWidth/a.newvalueheight+"px "+a.largeHeight/a.newvalueheight+"px"})):("lens"!=a.options.zoomType&&a.zoomLens.css({"background-size":a.largeWidth/a.newvaluewidth+"px "+a.largeHeight/a.newvalueheight+"px"}),a.zoomWindow.css({"background-size":a.largeWidth/a.newvaluewidth+"px "+a.largeHeight/a.newvaluewidth+"px"})),
a.changeBgSize=!1),a.zoomWindow.css({backgroundPosition:a.windowLeftPos+"px "+a.windowTopPos+"px"}),a.scrollingLock=!1,a.loop=!1):(a.changeBgSize&&(a.nzHeight>a.nzWidth?("lens"==a.options.zoomType&&a.zoomLens.css({"background-size":a.largeWidth/a.newvalueheight+"px "+a.largeHeight/a.newvalueheight+"px"}),a.zoomWindow.css({"background-size":a.largeWidth/a.newvalueheight+"px "+a.largeHeight/a.newvalueheight+"px"})):("lens"!=a.options.zoomType&&a.zoomLens.css({"background-size":a.largeWidth/a.newvaluewidth+
"px "+a.largeHeight/a.newvaluewidth+"px"}),a.zoomWindow.css({"background-size":a.largeWidth/a.newvaluewidth+"px "+a.largeHeight/a.newvaluewidth+"px"})),a.changeBgSize=!1),a.zoomWindow.css({backgroundPosition:a.xp+"px "+a.yp+"px"}))},16))):(a.changeBgSize&&(a.nzHeight>a.nzWidth?("lens"==a.options.zoomType&&a.zoomLens.css({"background-size":a.largeWidth/a.newvalueheight+"px "+a.largeHeight/a.newvalueheight+"px"}),a.zoomWindow.css({"background-size":a.largeWidth/a.newvalueheight+"px "+a.largeHeight/
a.newvalueheight+"px"})):("lens"==a.options.zoomType&&a.zoomLens.css({"background-size":a.largeWidth/a.newvaluewidth+"px "+a.largeHeight/a.newvaluewidth+"px"}),a.largeHeight/a.newvaluewidth<a.options.zoomWindowHeight?a.zoomWindow.css({"background-size":a.largeWidth/a.newvaluewidth+"px "+a.largeHeight/a.newvaluewidth+"px"}):a.zoomWindow.css({"background-size":a.largeWidth/a.newvalueheight+"px "+a.largeHeight/a.newvalueheight+"px"})),a.changeBgSize=!1),a.zoomWindow.css({backgroundPosition:a.windowLeftPos+
"px "+a.windowTopPos+"px"}))},setTintPosition:function(b){this.nzOffset=this.$elem.offset();this.tintpos=String(-1*(b.pageX-this.nzOffset.left-this.zoomLens.width()/2));this.tintposy=String(-1*(b.pageY-this.nzOffset.top-this.zoomLens.height()/2));this.Etoppos&&(this.tintposy=0);this.Eloppos&&(this.tintpos=0);this.Eboppos&&(this.tintposy=-1*(this.nzHeight-this.zoomLens.height()-2*this.options.lensBorderSize));this.Eroppos&&(this.tintpos=-1*(this.nzWidth-this.zoomLens.width()-2*this.options.lensBorderSize));
this.options.tint&&(this.fullheight&&(this.tintposy=0),this.fullwidth&&(this.tintpos=0),this.zoomTintImage.css({left:this.tintpos+"px"}),this.zoomTintImage.css({top:this.tintposy+"px"}))},swaptheimage:function(b,a){var c=this,e=new Image;c.options.loadingIcon&&(c.spinner=d("<div style=\"background: url('"+c.options.loadingIcon+"') no-repeat center;height:"+c.nzHeight+"px;width:"+c.nzWidth+'px;z-index: 2000;position: absolute; background-position: center center;"></div>'),c.$elem.after(c.spinner));
c.options.onImageSwap(c.$elem);e.onload=function(){c.largeWidth=e.width;c.largeHeight=e.height;c.zoomImage=a;c.zoomWindow.css({"background-size":c.largeWidth+"px "+c.largeHeight+"px"});c.zoomWindow.css({"background-size":c.largeWidth+"px "+c.largeHeight+"px"});c.swapAction(b,a)};e.src=a},swapAction:function(b,a){var c=this,e=new Image;e.onload=function(){c.nzHeight=e.height;c.nzWidth=e.width;c.options.onImageSwapComplete(c.$elem);c.doneCallback()};e.src=b;c.currentZoomLevel=c.options.zoomLevel;c.options.maxZoomLevel=
!1;"lens"==c.options.zoomType&&c.zoomLens.css({backgroundImage:"url('"+a+"')"});"window"==c.options.zoomType&&c.zoomWindow.css({backgroundImage:"url('"+a+"')"});"inner"==c.options.zoomType&&c.zoomWindow.css({backgroundImage:"url('"+a+"')"});c.currentImage=a;if(c.options.imageCrossfade){var f=c.$elem,g=f.clone();c.$elem.attr("src",b);c.$elem.after(g);g.stop(!0).fadeOut(c.options.imageCrossfade,function(){d(this).remove()});c.$elem.width("auto").removeAttr("width");c.$elem.height("auto").removeAttr("height");
f.fadeIn(c.options.imageCrossfade);c.options.tint&&"inner"!=c.options.zoomType&&(f=c.zoomTintImage,g=f.clone(),c.zoomTintImage.attr("src",a),c.zoomTintImage.after(g),g.stop(!0).fadeOut(c.options.imageCrossfade,function(){d(this).remove()}),f.fadeIn(c.options.imageCrossfade),c.zoomTint.css({height:c.$elem.height()}),c.zoomTint.css({width:c.$elem.width()}));c.zoomContainer.css("height",c.$elem.height());c.zoomContainer.css("width",c.$elem.width());"inner"!=c.options.zoomType||c.options.constrainType||
(c.zoomWrap.parent().css("height",c.$elem.height()),c.zoomWrap.parent().css("width",c.$elem.width()),c.zoomWindow.css("height",c.$elem.height()),c.zoomWindow.css("width",c.$elem.width()))}else c.$elem.attr("src",b),c.options.tint&&(c.zoomTintImage.attr("src",a),c.zoomTintImage.attr("height",c.$elem.height()),c.zoomTintImage.css({height:c.$elem.height()}),c.zoomTint.css({height:c.$elem.height()})),c.zoomContainer.css("height",c.$elem.height()),c.zoomContainer.css("width",c.$elem.width());c.options.imageCrossfade&&
(c.zoomWrap.css("height",c.$elem.height()),c.zoomWrap.css("width",c.$elem.width()));c.options.constrainType&&("height"==c.options.constrainType&&(c.zoomContainer.css("height",c.options.constrainSize),c.zoomContainer.css("width","auto"),c.options.imageCrossfade?(c.zoomWrap.css("height",c.options.constrainSize),c.zoomWrap.css("width","auto"),c.constwidth=c.zoomWrap.width()):(c.$elem.css("height",c.options.constrainSize),c.$elem.css("width","auto"),c.constwidth=c.$elem.width()),"inner"==c.options.zoomType&&
(c.zoomWrap.parent().css("height",c.options.constrainSize),c.zoomWrap.parent().css("width",c.constwidth),c.zoomWindow.css("height",c.options.constrainSize),c.zoomWindow.css("width",c.constwidth)),c.options.tint&&(c.tintContainer.css("height",c.options.constrainSize),c.tintContainer.css("width",c.constwidth),c.zoomTint.css("height",c.options.constrainSize),c.zoomTint.css("width",c.constwidth),c.zoomTintImage.css("height",c.options.constrainSize),c.zoomTintImage.css("width",c.constwidth))),"width"==
c.options.constrainType&&(c.zoomContainer.css("height","auto"),c.zoomContainer.css("width",c.options.constrainSize),c.options.imageCrossfade?(c.zoomWrap.css("height","auto"),c.zoomWrap.css("width",c.options.constrainSize),c.constheight=c.zoomWrap.height()):(c.$elem.css("height","auto"),c.$elem.css("width",c.options.constrainSize),c.constheight=c.$elem.height()),"inner"==c.options.zoomType&&(c.zoomWrap.parent().css("height",c.constheight),c.zoomWrap.parent().css("width",c.options.constrainSize),c.zoomWindow.css("height",
c.constheight),c.zoomWindow.css("width",c.options.constrainSize)),c.options.tint&&(c.tintContainer.css("height",c.constheight),c.tintContainer.css("width",c.options.constrainSize),c.zoomTint.css("height",c.constheight),c.zoomTint.css("width",c.options.constrainSize),c.zoomTintImage.css("height",c.constheight),c.zoomTintImage.css("width",c.options.constrainSize))))},doneCallback:function(){this.options.loadingIcon&&this.spinner.hide();this.nzOffset=this.$elem.offset();this.nzWidth=this.$elem.width();
this.nzHeight=this.$elem.height();this.currentZoomLevel=this.options.zoomLevel;this.widthRatio=this.largeWidth/this.nzWidth;this.heightRatio=this.largeHeight/this.nzHeight;"window"==this.options.zoomType&&(lensHeight=this.nzHeight<this.options.zoomWindowWidth/this.widthRatio?this.nzHeight:String(this.options.zoomWindowHeight/this.heightRatio),lensWidth=this.options.zoomWindowWidth<this.options.zoomWindowWidth?this.nzWidth:this.options.zoomWindowWidth/this.widthRatio,this.zoomLens&&(this.zoomLens.css("width",
lensWidth),this.zoomLens.css("height",lensHeight)))},getCurrentImage:function(){return this.zoomImage},getGalleryList:function(){var b=this;b.gallerylist=[];b.options.gallery?d("#"+b.options.gallery+" a").each(function(){var a="";d(this).data("zoom-image")?a=d(this).data("zoom-image"):d(this).data("image")&&(a=d(this).data("image"));a==b.zoomImage?b.gallerylist.unshift({href:""+a+"",title:d(this).find("img").attr("title")}):b.gallerylist.push({href:""+a+"",title:d(this).find("img").attr("title")})}):
b.gallerylist.push({href:""+b.zoomImage+"",title:d(this).find("img").attr("title")});return b.gallerylist},changeZoomLevel:function(b){this.scrollingLock=!0;this.newvalue=parseFloat(b).toFixed(2);newvalue=parseFloat(b).toFixed(2);maxheightnewvalue=this.largeHeight/(this.options.zoomWindowHeight/this.nzHeight*this.nzHeight);maxwidthtnewvalue=this.largeWidth/(this.options.zoomWindowWidth/this.nzWidth*this.nzWidth);"inner"!=this.options.zoomType&&(maxheightnewvalue<=newvalue?(this.heightRatio=this.largeHeight/
maxheightnewvalue/this.nzHeight,this.newvalueheight=maxheightnewvalue,this.fullheight=!0):(this.heightRatio=this.largeHeight/newvalue/this.nzHeight,this.newvalueheight=newvalue,this.fullheight=!1),maxwidthtnewvalue<=newvalue?(this.widthRatio=this.largeWidth/maxwidthtnewvalue/this.nzWidth,this.newvaluewidth=maxwidthtnewvalue,this.fullwidth=!0):(this.widthRatio=this.largeWidth/newvalue/this.nzWidth,this.newvaluewidth=newvalue,this.fullwidth=!1),"lens"==this.options.zoomType&&(maxheightnewvalue<=newvalue?
(this.fullwidth=!0,this.newvaluewidth=maxheightnewvalue):(this.widthRatio=this.largeWidth/newvalue/this.nzWidth,this.newvaluewidth=newvalue,this.fullwidth=!1)));"inner"==this.options.zoomType&&(maxheightnewvalue=parseFloat(this.largeHeight/this.nzHeight).toFixed(2),maxwidthtnewvalue=parseFloat(this.largeWidth/this.nzWidth).toFixed(2),newvalue>maxheightnewvalue&&(newvalue=maxheightnewvalue),newvalue>maxwidthtnewvalue&&(newvalue=maxwidthtnewvalue),maxheightnewvalue<=newvalue?(this.heightRatio=this.largeHeight/
newvalue/this.nzHeight,this.newvalueheight=newvalue>maxheightnewvalue?maxheightnewvalue:newvalue,this.fullheight=!0):(this.heightRatio=this.largeHeight/newvalue/this.nzHeight,this.newvalueheight=newvalue>maxheightnewvalue?maxheightnewvalue:newvalue,this.fullheight=!1),maxwidthtnewvalue<=newvalue?(this.widthRatio=this.largeWidth/newvalue/this.nzWidth,this.newvaluewidth=newvalue>maxwidthtnewvalue?maxwidthtnewvalue:newvalue,this.fullwidth=!0):(this.widthRatio=this.largeWidth/newvalue/this.nzWidth,this.newvaluewidth=
newvalue,this.fullwidth=!1));scrcontinue=!1;"inner"==this.options.zoomType&&(this.nzWidth>this.nzHeight&&(this.newvaluewidth<=maxwidthtnewvalue?scrcontinue=!0:(scrcontinue=!1,this.fullwidth=this.fullheight=!0)),this.nzHeight>this.nzWidth&&(this.newvaluewidth<=maxwidthtnewvalue?scrcontinue=!0:(scrcontinue=!1,this.fullwidth=this.fullheight=!0)));"inner"!=this.options.zoomType&&(scrcontinue=!0);scrcontinue&&(this.zoomLock=0,this.changeZoom=!0,this.options.zoomWindowHeight/this.heightRatio<=this.nzHeight&&
(this.currentZoomLevel=this.newvalueheight,"lens"!=this.options.zoomType&&"inner"!=this.options.zoomType&&(this.changeBgSize=!0,this.zoomLens.css({height:String(this.options.zoomWindowHeight/this.heightRatio)+"px"})),"lens"==this.options.zoomType||"inner"==this.options.zoomType)&&(this.changeBgSize=!0),this.options.zoomWindowWidth/this.widthRatio<=this.nzWidth&&("inner"!=this.options.zoomType&&this.newvaluewidth>this.newvalueheight&&(this.currentZoomLevel=this.newvaluewidth),"lens"!=this.options.zoomType&&
"inner"!=this.options.zoomType&&(this.changeBgSize=!0,this.zoomLens.css({width:String(this.options.zoomWindowWidth/this.widthRatio)+"px"})),"lens"==this.options.zoomType||"inner"==this.options.zoomType)&&(this.changeBgSize=!0),"inner"==this.options.zoomType&&(this.changeBgSize=!0,this.nzWidth>this.nzHeight&&(this.currentZoomLevel=this.newvaluewidth),this.nzHeight>this.nzWidth&&(this.currentZoomLevel=this.newvaluewidth)));this.setPosition(this.currentLoc)},closeAll:function(){self.zoomWindow&&self.zoomWindow.hide();
self.zoomLens&&self.zoomLens.hide();self.zoomTint&&self.zoomTint.hide()},changeState:function(b){"enable"==b&&(this.options.zoomEnabled=!0);"disable"==b&&(this.options.zoomEnabled=!1)}};d.fn.elevateZoom=function(b){return this.each(function(){var a=Object.create(k);a.init(b,this);d.data(this,"elevateZoom",a)})};d.fn.elevateZoom.options={zoomActivation:"hover",zoomEnabled:!0,preloading:1,zoomLevel:1,scrollZoom:!1,scrollZoomIncrement:0.1,minZoomLevel:!1,maxZoomLevel:!1,easing:!1,easingAmount:12,lensSize:200,
zoomWindowWidth:400,zoomWindowHeight:400,zoomWindowOffetx:0,zoomWindowOffety:0,zoomWindowPosition:1,zoomWindowBgColour:"#fff",lensFadeIn:!1,lensFadeOut:!1,debug:!1,zoomWindowFadeIn:!1,zoomWindowFadeOut:!1,zoomWindowAlwaysShow:!1,zoomTintFadeIn:!1,zoomTintFadeOut:!1,borderSize:4,showLens:!0,borderColour:"#888",lensBorderSize:1,lensBorderColour:"#000",lensShape:"square",zoomType:"window",containLensZoom:!1,lensColour:"white",lensOpacity:0.4,lenszoom:!1,tint:!1,tintColour:"#333",tintOpacity:0.4,gallery:!1,
galleryActiveClass:"zoomGalleryActive",imageCrossfade:!1,constrainType:!1,constrainSize:!1,loadingIcon:!1,cursor:"default",responsive:!0,onComplete:d.noop,onZoomedImageLoaded:function(){},onImageSwap:d.noop,onImageSwapComplete:d.noop}})(jQuery,window,document);

$(document).ready(function(){
$("#menu ul.main-menu li.main-menu.member a").addClass("active");
jQuery('#member_birthday').datetimepicker({
  lang:'vi',
  i18n:{
    fn:{
     months:[
      'Januar','Februar','März','April',
      'Mai','Juni','Juli','August',
      'September','Oktober','November','Dezember'
     ],
     dayOfWeek:[
      "So.", "Mo", "Di", "Mi",
      "Do", "Fr", "Sa."
     ]
    }
  },
  timepicker:false,
  format:'d/m/Y'
 });
});
/* Modernizr 2.5.3 (Custom Build) | MIT & BSD
 * Build: http://www.modernizr.com/download/#-shiv-cssclasses-load
 */

;window.Modernizr=function(a,b,c){function u(a){j.cssText=a}function v(a,b){return u(prefixes.join(a+";")+(b||""))}function w(a,b){return typeof a===b}function x(a,b){return!!~(""+a).indexOf(b)}function y(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:w(f,"function")?f.bind(d||b):f}return!1}var d="2.5.3",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m={},n={},o={},p=[],q=p.slice,r,s={}.hasOwnProperty,t;!w(s,"undefined")&&!w(s.call,"undefined")?t=function(a,b){return s.call(a,b)}:t=function(a,b){return b in a&&w(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=q.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(q.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(q.call(arguments)))};return e});for(var z in m)t(m,z)&&(r=z.toLowerCase(),e[r]=m[z](),p.push((e[r]?"":"no-")+r));return u(""),i=k=null,function(a,b){function g(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function h(){var a=k.elements;return typeof a=="string"?a.split(" "):a}function i(a){var b={},c=a.createElement,e=a.createDocumentFragment,f=e();a.createElement=function(a){var e=(b[a]||(b[a]=c(a))).cloneNode();return k.shivMethods&&e.canHaveChildren&&!d.test(a)?f.appendChild(e):e},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+h().join().replace(/\w+/g,function(a){return b[a]=c(a),f.createElement(a),'c("'+a+'")'})+");return n}")(k,f)}function j(a){var b;return a.documentShived?a:(k.shivCSS&&!e&&(b=!!g(a,"article,aside,details,figcaption,figure,footer,header,hgroup,nav,section{display:block}audio{display:none}canvas,video{display:inline-block;*display:inline;*zoom:1}[hidden]{display:none}audio[controls]{display:inline-block;*display:inline;*zoom:1}mark{background:#FF0;color:#000}")),f||(b=!i(a)),b&&(a.documentShived=b),a)}var c=a.html5||{},d=/^<|^(?:button|form|map|select|textarea)$/i,e,f;(function(){var a=b.createElement("a");a.innerHTML="<xyz></xyz>",e="hidden"in a,f=a.childNodes.length==1||function(){try{b.createElement("a")}catch(a){return!0}var c=b.createDocumentFragment();return typeof c.cloneNode=="undefined"||typeof c.createDocumentFragment=="undefined"||typeof c.createElement=="undefined"}()})();var k={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:j};a.html5=k,j(b)}(this,b),e._version=d,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+p.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return o.call(a)=="[object Function]"}function e(a){return typeof a=="string"}function f(){}function g(a){return!a||a=="loaded"||a=="complete"||a=="uninitialized"}function h(){var a=p.shift();q=1,a?a.t?m(function(){(a.t=="c"?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){a!="img"&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l={},o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};y[c]===1&&(r=1,y[c]=[],l=b.createElement(a)),a=="object"?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),a!="img"&&(r||y[c]===2?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i(b=="c"?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),p.length==1&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&o.call(a.opera)=="[object Opera]",l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return o.call(a)=="[object Array]"},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,i){var j=b(a),l=j.autoCallback;j.url.split(".").pop().split("?").shift(),j.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]||h),j.instead?j.instead(a,e,f,g,i):(y[j.url]?j.noexec=!0:y[j.url]=1,f.load(j.url,j.forceCSS||!j.forceJS&&"css"==j.url.split(".").pop().split("?").shift()?"c":c,j.noexec,j.attrs,j.timeout),(d(e)||d(l))&&f.load(function(){k(),e&&e(j.origUrl,i,g),l&&l(j.origUrl,i,g),y[j.url]=2})))}function i(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var j,l,m=this.yepnope.loader;if(e(a))g(a,0,m,0);else if(w(a))for(j=0;j<a.length;j++)l=a[j],e(l)?g(l,0,m,0):w(l)?B(l):Object(l)===l&&i(l,m);else Object(a)===a&&i(a,m)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,b.readyState==null&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};
$(document).ready(function(){
$("#menu ul.main-menu li.main-menu.news a").addClass("active");
});
(function() {


}).call(this);
$(document).ready(function(){
$("#menu ul.main-menu li.main-menu.product a").addClass("active");
});
(function($, undefined) {

/**
 * Unobtrusive scripting adapter for jQuery
 * https://github.com/rails/jquery-ujs
 *
 * Requires jQuery 1.8.0 or later.
 *
 * Released under the MIT license
 *
 */

  // Cut down on the number of issues from people inadvertently including jquery_ujs twice
  // by detecting and raising an error when it happens.
  if ( $.rails !== undefined ) {
    $.error('jquery-ujs has already been loaded!');
  }

  // Shorthand to make it a little easier to call public rails functions from within rails.js
  var rails;
  var $document = $(document);

  $.rails = rails = {
    // Link elements bound by jquery-ujs
    linkClickSelector: 'a[data-confirm], a[data-method], a[data-remote], a[data-disable-with], a[data-disable]',

    // Button elements bound by jquery-ujs
    buttonClickSelector: 'button[data-remote]:not(form button), button[data-confirm]:not(form button)',

    // Select elements bound by jquery-ujs
    inputChangeSelector: 'select[data-remote], input[data-remote], textarea[data-remote]',

    // Form elements bound by jquery-ujs
    formSubmitSelector: 'form',

    // Form input elements bound by jquery-ujs
    formInputClickSelector: 'form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])',

    // Form input elements disabled during form submission
    disableSelector: 'input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled',

    // Form input elements re-enabled after form submission
    enableSelector: 'input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled',

    // Form required input elements
    requiredInputSelector: 'input[name][required]:not([disabled]),textarea[name][required]:not([disabled])',

    // Form file input elements
    fileInputSelector: 'input[type=file]',

    // Link onClick disable selector with possible reenable after remote submission
    linkDisableSelector: 'a[data-disable-with], a[data-disable]',

    // Button onClick disable selector with possible reenable after remote submission
    buttonDisableSelector: 'button[data-remote][data-disable-with], button[data-remote][data-disable]',

    // Make sure that every Ajax request sends the CSRF token
    CSRFProtection: function(xhr) {
      var token = $('meta[name="csrf-token"]').attr('content');
      if (token) xhr.setRequestHeader('X-CSRF-Token', token);
    },

    // making sure that all forms have actual up-to-date token(cached forms contain old one)
    refreshCSRFTokens: function(){
      var csrfToken = $('meta[name=csrf-token]').attr('content');
      var csrfParam = $('meta[name=csrf-param]').attr('content');
      $('form input[name="' + csrfParam + '"]').val(csrfToken);
    },

    // Triggers an event on an element and returns false if the event result is false
    fire: function(obj, name, data) {
      var event = $.Event(name);
      obj.trigger(event, data);
      return event.result !== false;
    },

    // Default confirm dialog, may be overridden with custom confirm dialog in $.rails.confirm
    confirm: function(message) {
      return confirm(message);
    },

    // Default ajax function, may be overridden with custom function in $.rails.ajax
    ajax: function(options) {
      return $.ajax(options);
    },

    // Default way to get an element's href. May be overridden at $.rails.href.
    href: function(element) {
      return element.attr('href');
    },

    // Submits "remote" forms and links with ajax
    handleRemote: function(element) {
      var method, url, data, elCrossDomain, crossDomain, withCredentials, dataType, options;

      if (rails.fire(element, 'ajax:before')) {
        elCrossDomain = element.data('cross-domain');
        crossDomain = elCrossDomain === undefined ? null : elCrossDomain;
        withCredentials = element.data('with-credentials') || null;
        dataType = element.data('type') || ($.ajaxSettings && $.ajaxSettings.dataType);

        if (element.is('form')) {
          method = element.attr('method');
          url = element.attr('action');
          data = element.serializeArray();
          // memoized value from clicked submit button
          var button = element.data('ujs:submit-button');
          if (button) {
            data.push(button);
            element.data('ujs:submit-button', null);
          }
        } else if (element.is(rails.inputChangeSelector)) {
          method = element.data('method');
          url = element.data('url');
          data = element.serialize();
          if (element.data('params')) data = data + "&" + element.data('params');
        } else if (element.is(rails.buttonClickSelector)) {
          method = element.data('method') || 'get';
          url = element.data('url');
          data = element.serialize();
          if (element.data('params')) data = data + "&" + element.data('params');
        } else {
          method = element.data('method');
          url = rails.href(element);
          data = element.data('params') || null;
        }

        options = {
          type: method || 'GET', data: data, dataType: dataType,
          // stopping the "ajax:beforeSend" event will cancel the ajax request
          beforeSend: function(xhr, settings) {
            if (settings.dataType === undefined) {
              xhr.setRequestHeader('accept', '*/*;q=0.5, ' + settings.accepts.script);
            }
            if (rails.fire(element, 'ajax:beforeSend', [xhr, settings])) {
              element.trigger('ajax:send', xhr);
            } else {
              return false;
            }
          },
          success: function(data, status, xhr) {
            element.trigger('ajax:success', [data, status, xhr]);
          },
          complete: function(xhr, status) {
            element.trigger('ajax:complete', [xhr, status]);
          },
          error: function(xhr, status, error) {
            element.trigger('ajax:error', [xhr, status, error]);
          },
          crossDomain: crossDomain
        };

        // There is no withCredentials for IE6-8 when
        // "Enable native XMLHTTP support" is disabled
        if (withCredentials) {
          options.xhrFields = {
            withCredentials: withCredentials
          };
        }

        // Only pass url to `ajax` options if not blank
        if (url) { options.url = url; }

        return rails.ajax(options);
      } else {
        return false;
      }
    },

    // Handles "data-method" on links such as:
    // <a href="/users/5" data-method="delete" rel="nofollow" data-confirm="Are you sure?">Delete</a>
    handleMethod: function(link) {
      var href = rails.href(link),
        method = link.data('method'),
        target = link.attr('target'),
        csrfToken = $('meta[name=csrf-token]').attr('content'),
        csrfParam = $('meta[name=csrf-param]').attr('content'),
        form = $('<form method="post" action="' + href + '"></form>'),
        metadataInput = '<input name="_method" value="' + method + '" type="hidden" />';

      if (csrfParam !== undefined && csrfToken !== undefined) {
        metadataInput += '<input name="' + csrfParam + '" value="' + csrfToken + '" type="hidden" />';
      }

      if (target) { form.attr('target', target); }

      form.hide().append(metadataInput).appendTo('body');
      form.submit();
    },

    // Helper function that returns form elements that match the specified CSS selector
    // If form is actually a "form" element this will return associated elements outside the from that have
    // the html form attribute set
    formElements: function(form, selector) {
      return form.is('form') ? $(form[0].elements).filter(selector) : form.find(selector);
    },

    /* Disables form elements:
      - Caches element value in 'ujs:enable-with' data store
      - Replaces element text with value of 'data-disable-with' attribute
      - Sets disabled property to true
    */
    disableFormElements: function(form) {
      rails.formElements(form, rails.disableSelector).each(function() {
        rails.disableFormElement($(this));
      });
    },

    disableFormElement: function(element) {
      var method, replacement;

      method = element.is('button') ? 'html' : 'val';
      replacement = element.data('disable-with');

      element.data('ujs:enable-with', element[method]());
      if (replacement !== undefined) {
        element[method](replacement);
      }

      element.prop('disabled', true);
    },

    /* Re-enables disabled form elements:
      - Replaces element text with cached value from 'ujs:enable-with' data store (created in `disableFormElements`)
      - Sets disabled property to false
    */
    enableFormElements: function(form) {
      rails.formElements(form, rails.enableSelector).each(function() {
        rails.enableFormElement($(this));
      });
    },

    enableFormElement: function(element) {
      var method = element.is('button') ? 'html' : 'val';
      if (element.data('ujs:enable-with')) element[method](element.data('ujs:enable-with'));
      element.prop('disabled', false);
    },

   /* For 'data-confirm' attribute:
      - Fires `confirm` event
      - Shows the confirmation dialog
      - Fires the `confirm:complete` event

      Returns `true` if no function stops the chain and user chose yes; `false` otherwise.
      Attaching a handler to the element's `confirm` event that returns a `falsy` value cancels the confirmation dialog.
      Attaching a handler to the element's `confirm:complete` event that returns a `falsy` value makes this function
      return false. The `confirm:complete` event is fired whether or not the user answered true or false to the dialog.
   */
    allowAction: function(element) {
      var message = element.data('confirm'),
          answer = false, callback;
      if (!message) { return true; }

      if (rails.fire(element, 'confirm')) {
        answer = rails.confirm(message);
        callback = rails.fire(element, 'confirm:complete', [answer]);
      }
      return answer && callback;
    },

    // Helper function which checks for blank inputs in a form that match the specified CSS selector
    blankInputs: function(form, specifiedSelector, nonBlank) {
      var inputs = $(), input, valueToCheck,
          selector = specifiedSelector || 'input,textarea',
          allInputs = form.find(selector);

      allInputs.each(function() {
        input = $(this);
        valueToCheck = input.is('input[type=checkbox],input[type=radio]') ? input.is(':checked') : input.val();
        // If nonBlank and valueToCheck are both truthy, or nonBlank and valueToCheck are both falsey
        if (!valueToCheck === !nonBlank) {

          // Don't count unchecked required radio if other radio with same name is checked
          if (input.is('input[type=radio]') && allInputs.filter('input[type=radio]:checked[name="' + input.attr('name') + '"]').length) {
            return true; // Skip to next input
          }

          inputs = inputs.add(input);
        }
      });
      return inputs.length ? inputs : false;
    },

    // Helper function which checks for non-blank inputs in a form that match the specified CSS selector
    nonBlankInputs: function(form, specifiedSelector) {
      return rails.blankInputs(form, specifiedSelector, true); // true specifies nonBlank
    },

    // Helper function, needed to provide consistent behavior in IE
    stopEverything: function(e) {
      $(e.target).trigger('ujs:everythingStopped');
      e.stopImmediatePropagation();
      return false;
    },

    //  replace element's html with the 'data-disable-with' after storing original html
    //  and prevent clicking on it
    disableElement: function(element) {
      var replacement = element.data('disable-with');

      element.data('ujs:enable-with', element.html()); // store enabled state
      if (replacement !== undefined) {
        element.html(replacement);
      }

      element.bind('click.railsDisable', function(e) { // prevent further clicking
        return rails.stopEverything(e);
      });
    },

    // restore element to its original state which was disabled by 'disableElement' above
    enableElement: function(element) {
      if (element.data('ujs:enable-with') !== undefined) {
        element.html(element.data('ujs:enable-with')); // set to old enabled state
        element.removeData('ujs:enable-with'); // clean up cache
      }
      element.unbind('click.railsDisable'); // enable element
    }
  };

  if (rails.fire($document, 'rails:attachBindings')) {

    $.ajaxPrefilter(function(options, originalOptions, xhr){ if ( !options.crossDomain ) { rails.CSRFProtection(xhr); }});

    // This event works the same as the load event, except that it fires every
    // time the page is loaded.
    //
    // See https://github.com/rails/jquery-ujs/issues/357
    // See https://developer.mozilla.org/en-US/docs/Using_Firefox_1.5_caching
    $(window).on("pageshow.rails", function () {
      $($.rails.enableSelector).each(function () {
        var element = $(this);

        if (element.data("ujs:enable-with")) {
          $.rails.enableFormElement(element);
        }
      });

      $($.rails.linkDisableSelector).each(function () {
        var element = $(this);

        if (element.data("ujs:enable-with")) {
          $.rails.enableElement(element);
        }
      });
    });

    $document.delegate(rails.linkDisableSelector, 'ajax:complete', function() {
        rails.enableElement($(this));
    });

    $document.delegate(rails.buttonDisableSelector, 'ajax:complete', function() {
        rails.enableFormElement($(this));
    });

    $document.delegate(rails.linkClickSelector, 'click.rails', function(e) {
      var link = $(this), method = link.data('method'), data = link.data('params'), metaClick = e.metaKey || e.ctrlKey;
      if (!rails.allowAction(link)) return rails.stopEverything(e);

      if (!metaClick && link.is(rails.linkDisableSelector)) rails.disableElement(link);

      if (link.data('remote') !== undefined) {
        if (metaClick && (!method || method === 'GET') && !data) { return true; }

        var handleRemote = rails.handleRemote(link);
        // response from rails.handleRemote() will either be false or a deferred object promise.
        if (handleRemote === false) {
          rails.enableElement(link);
        } else {
          handleRemote.fail( function() { rails.enableElement(link); } );
        }
        return false;

      } else if (method) {
        rails.handleMethod(link);
        return false;
      }
    });

    $document.delegate(rails.buttonClickSelector, 'click.rails', function(e) {
      var button = $(this);

      if (!rails.allowAction(button)) return rails.stopEverything(e);

      if (button.is(rails.buttonDisableSelector)) rails.disableFormElement(button);

      var handleRemote = rails.handleRemote(button);
      // response from rails.handleRemote() will either be false or a deferred object promise.
      if (handleRemote === false) {
        rails.enableFormElement(button);
      } else {
        handleRemote.fail( function() { rails.enableFormElement(button); } );
      }
      return false;
    });

    $document.delegate(rails.inputChangeSelector, 'change.rails', function(e) {
      var link = $(this);
      if (!rails.allowAction(link)) return rails.stopEverything(e);

      rails.handleRemote(link);
      return false;
    });

    $document.delegate(rails.formSubmitSelector, 'submit.rails', function(e) {
      var form = $(this),
        remote = form.data('remote') !== undefined,
        blankRequiredInputs,
        nonBlankFileInputs;

      if (!rails.allowAction(form)) return rails.stopEverything(e);

      // skip other logic when required values are missing or file upload is present
      if (form.attr('novalidate') == undefined) {
        blankRequiredInputs = rails.blankInputs(form, rails.requiredInputSelector);
        if (blankRequiredInputs && rails.fire(form, 'ajax:aborted:required', [blankRequiredInputs])) {
          return rails.stopEverything(e);
        }
      }

      if (remote) {
        nonBlankFileInputs = rails.nonBlankInputs(form, rails.fileInputSelector);
        if (nonBlankFileInputs) {
          // slight timeout so that the submit button gets properly serialized
          // (make it easy for event handler to serialize form without disabled values)
          setTimeout(function(){ rails.disableFormElements(form); }, 13);
          var aborted = rails.fire(form, 'ajax:aborted:file', [nonBlankFileInputs]);

          // re-enable form elements if event bindings return false (canceling normal form submission)
          if (!aborted) { setTimeout(function(){ rails.enableFormElements(form); }, 13); }

          return aborted;
        }

        rails.handleRemote(form);
        return false;

      } else {
        // slight timeout so that the submit button gets properly serialized
        setTimeout(function(){ rails.disableFormElements(form); }, 13);
      }
    });

    $document.delegate(rails.formInputClickSelector, 'click.rails', function(event) {
      var button = $(this);

      if (!rails.allowAction(button)) return rails.stopEverything(event);

      // register the pressed submit button
      var name = button.attr('name'),
        data = name ? {name:name, value:button.val()} : null;

      button.closest('form').data('ujs:submit-button', data);
    });

    $document.delegate(rails.formSubmitSelector, 'ajax:send.rails', function(event) {
      if (this == event.target) rails.disableFormElements($(this));
    });

    $document.delegate(rails.formSubmitSelector, 'ajax:complete.rails', function(event) {
      if (this == event.target) rails.enableFormElements($(this));
    });

    $(function(){
      rails.refreshCSRFTokens();
    });
  }

})( jQuery );
// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
;
(function() {


}).call(this);
// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.






var map;
function initialize() {
    var myLatlng = new google.maps.LatLng(20.89288,105.98432);
    var myOptions = {
      zoom: 16,
      center: myLatlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    map = new google.maps.Map(document.getElementById("div_id"), myOptions);
      // Biến text chứa nội dung sẽ được hiển thị
    var text;
    text= "<b style='color:#00F' " +
             "style='text-align:center'>Công ty TNHH Thương mại và Sản xuất nước sạch Hà Dũng<br /> Từ hồ - yên phú - yên mỹ - Hưng yên<br /> SDT : 0975.792.655";
       var infowindow = new google.maps.InfoWindow(
        { content: text,
            size: new google.maps.Size(100,50),
            position: myLatlng
        });
           infowindow.open(map);
        var marker = new google.maps.Marker({
          position: myLatlng,
          map: map,
          title:"Công ty TNHH Thương mại và Sản xuất nước sạch Hà Dũng"
      });
}

function check_all(){
  check=$("#checkall").is(':checked');
  if(check== true){
    $("input[type=checkbox]").prop("checked","checked");
    $("#main-content #action .action #delete").removeAttr('disabled');
  }else{
    $("input[type=checkbox]").removeAttr("checked");
    $("#main-content #action .action #delete").prop('disabled','disabled');

  }
}

function check(){
  var checked = false;
  var checkedAll = true;
  console.log($("#main-content #main table .check_"))
   $("#main-content #main table .check_").each(function(e){
    console.log(e);
    if ($(e).prop('checked')) {
      checked = true;
    }else{
      checkedAll = false;
    }
   });
   if (checked) {
     $("#main-content #action .action #delete").removeAttr('disabled');
   }else{
    $("#main-content #action .action #delete").prop('disabled','disabled');
   }
   if (checkedAll) {
    $("#checkall").prop("checked","checked");
   };
}