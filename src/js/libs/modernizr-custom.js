/*! modernizr 3.3.1 (Custom Build) | MIT *
 * http://modernizr.com/download/?-objectfit-setclasses-shiv !*/
!function(e,t,n){function r(e,t){return typeof e===t}function o(){var e,t,n,o,a,i,s;for(var l in y)if(y.hasOwnProperty(l)){if(e=[],t=y[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(o=r(t.fn,"function")?t.fn():t.fn,a=0;a<e.length;a++)i=e[a],s=i.split("."),1===s.length?Modernizr[s[0]]=o:(!Modernizr[s[0]]||Modernizr[s[0]]instanceof Boolean||(Modernizr[s[0]]=new Boolean(Modernizr[s[0]])),Modernizr[s[0]][s[1]]=o),g.push((o?"":"no-")+s.join("-"))}}function a(e){var t=E.className,n=Modernizr._config.classPrefix||"";if(S&&(t=t.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),S?E.className.baseVal=t:E.className=t)}function i(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function s(e,t){return!!~(""+e).indexOf(t)}function l(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):S?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function f(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function c(e,t){return function(){return e.apply(t,arguments)}}function u(e,t,n){var o;for(var a in e)if(e[a]in t)return n===!1?e[a]:(o=t[e[a]],r(o,"function")?c(o,n||t):o);return!1}function d(){var e=t.body;return e||(e=l(S?"svg":"body"),e.fake=!0),e}function p(e,n,r,o){var a,i,s,f,c="modernizr",u=l("div"),p=d();if(parseInt(r,10))for(;r--;)s=l("div"),s.id=o?o[r]:c+(r+1),u.appendChild(s);return a=l("style"),a.type="text/css",a.id="s"+c,(p.fake?p:u).appendChild(a),p.appendChild(u),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(t.createTextNode(e)),u.id=c,p.fake&&(p.style.background="",p.style.overflow="hidden",f=E.style.overflow,E.style.overflow="hidden",E.appendChild(p)),i=n(u,e),p.fake?(p.parentNode.removeChild(p),E.style.overflow=f,E.offsetHeight):u.parentNode.removeChild(u),!!i}function m(t,r){var o=t.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(f(t[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var a=[];o--;)a.push("("+f(t[o])+":"+r+")");return a=a.join(" or "),p("@supports ("+a+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return n}function h(e,t,o,a){function f(){u&&(delete j.style,delete j.modElem)}if(a=r(a,"undefined")?!1:a,!r(o,"undefined")){var c=m(e,o);if(!r(c,"undefined"))return c}for(var u,d,p,h,v,g=["modernizr","tspan"];!j.style;)u=!0,j.modElem=l(g.shift()),j.style=j.modElem.style;for(p=e.length,d=0;p>d;d++)if(h=e[d],v=j.style[h],s(h,"-")&&(h=i(h)),j.style[h]!==n){if(a||r(o,"undefined"))return f(),"pfx"==t?h:!0;try{j.style[h]=o}catch(y){}if(j.style[h]!=v)return f(),"pfx"==t?h:!0}return f(),!1}function v(e,t,n,o,a){var i=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+x.join(i+" ")+i).split(" ");return r(t,"string")||r(t,"undefined")?h(s,t,o,a):(s=(e+" "+_.join(i+" ")+i).split(" "),u(s,t,n))}var g=[],y=[],C={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){y.push({name:e,fn:t,options:n})},addAsyncTest:function(e){y.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=C,Modernizr=new Modernizr;var E=t.documentElement,S="svg"===E.nodeName.toLowerCase();S||!function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=C.elements;return"string"==typeof e?e.split(" "):e}function o(e,t){var n=C.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),C.elements=n+" "+e,f(t)}function a(e){var t=y[e[v]];return t||(t={},g++,e[v]=g,y[g]=t),t}function i(e,n,r){if(n||(n=t),u)return n.createElement(e);r||(r=a(n));var o;return o=r.cache[e]?r.cache[e].cloneNode():h.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!o.canHaveChildren||m.test(e)||o.tagUrn?o:r.frag.appendChild(o)}function s(e,n){if(e||(e=t),u)return e.createDocumentFragment();n=n||a(e);for(var o=n.frag.cloneNode(),i=0,s=r(),l=s.length;l>i;i++)o.createElement(s[i]);return o}function l(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return C.shivMethods?i(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-:]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(C,t.frag)}function f(e){e||(e=t);var r=a(e);return!C.shivCSS||c||r.hasCSS||(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),u||l(e,r),e}var c,u,d="3.7.3",p=e.html5||{},m=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,h=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,v="_html5shiv",g=0,y={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",c="hidden"in e,u=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){c=!0,u=!0}}();var C={elements:p.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:d,shivCSS:p.shivCSS!==!1,supportsUnknownElements:u,shivMethods:p.shivMethods!==!1,type:"default",shivDocument:f,createElement:i,createDocumentFragment:s,addElements:o};e.html5=C,f(t),"object"==typeof module&&module.exports&&(module.exports=C)}("undefined"!=typeof e?e:this,t);var b="Moz O ms Webkit",x=C._config.usePrefixes?b.split(" "):[];C._cssomPrefixes=x;var w=function(t){var r,o=prefixes.length,a=e.CSSRule;if("undefined"==typeof a)return n;if(!t)return!1;if(t=t.replace(/^@/,""),r=t.replace(/-/g,"_").toUpperCase()+"_RULE",r in a)return"@"+t;for(var i=0;o>i;i++){var s=prefixes[i],l=s.toUpperCase()+"_"+r;if(l in a)return"@-"+s.toLowerCase()+"-"+t}return!1};C.atRule=w;var _=C._config.usePrefixes?b.toLowerCase().split(" "):[];C._domPrefixes=_;var N={elem:l("modernizr")};Modernizr._q.push(function(){delete N.elem});var j={style:N.elem.style};Modernizr._q.unshift(function(){delete j.style}),C.testAllProps=v;var F=C.prefixed=function(e,t,n){return 0===e.indexOf("@")?w(e):(-1!=e.indexOf("-")&&(e=i(e)),t?v(e,t,n):v(e,"pfx"))};Modernizr.addTest("objectfit",!!F("objectFit"),{aliases:["object-fit"]}),o(),a(g),delete C.addTest,delete C.addAsyncTest;for(var k=0;k<Modernizr._q.length;k++)Modernizr._q[k]();e.Modernizr=Modernizr}(window,document);