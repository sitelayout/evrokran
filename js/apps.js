
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).Swiper=t()}(this,(function(){"use strict";function e(e){return null!==e&&"object"==typeof e&&"constructor"in e&&e.constructor===Object}function t(s,a){void 0===s&&(s={}),void 0===a&&(a={}),Object.keys(a).forEach((i=>{void 0===s[i]?s[i]=a[i]:e(a[i])&&e(s[i])&&Object.keys(a[i]).length>0&&t(s[i],a[i])}))}const s={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector:()=>null,querySelectorAll:()=>[],getElementById:()=>null,createEvent:()=>({initEvent(){}}),createElement:()=>({children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName:()=>[]}),createElementNS:()=>({}),importNode:()=>null,location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function a(){const e="undefined"!=typeof document?document:{};return t(e,s),e}const i={document:s,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle:()=>({getPropertyValue:()=>""}),Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia:()=>({}),requestAnimationFrame:e=>"undefined"==typeof setTimeout?(e(),null):setTimeout(e,0),cancelAnimationFrame(e){"undefined"!=typeof setTimeout&&clearTimeout(e)}};function r(){const e="undefined"!=typeof window?window:{};return t(e,i),e}class n extends Array{constructor(e){"number"==typeof e?super(e):(super(...e||[]),function(e){const t=e.__proto__;Object.defineProperty(e,"__proto__",{get:()=>t,set(e){t.__proto__=e}})}(this))}}function l(e){void 0===e&&(e=[]);const t=[];return e.forEach((e=>{Array.isArray(e)?t.push(...l(e)):t.push(e)})),t}function o(e,t){return Array.prototype.filter.call(e,t)}function d(e,t){const s=r(),i=a();let l=[];if(!t&&e instanceof n)return e;if(!e)return new n(l);if("string"==typeof e){const s=e.trim();if(s.indexOf("<")>=0&&s.indexOf(">")>=0){let e="div";0===s.indexOf("<li")&&(e="ul"),0===s.indexOf("<tr")&&(e="tbody"),0!==s.indexOf("<td")&&0!==s.indexOf("<th")||(e="tr"),0===s.indexOf("<tbody")&&(e="table"),0===s.indexOf("<option")&&(e="select");const t=i.createElement(e);t.innerHTML=s;for(let e=0;e<t.childNodes.length;e+=1)l.push(t.childNodes[e])}else l=function(e,t){if("string"!=typeof e)return[e];const s=[],a=t.querySelectorAll(e);for(let e=0;e<a.length;e+=1)s.push(a[e]);return s}(e.trim(),t||i)}else if(e.nodeType||e===s||e===i)l.push(e);else if(Array.isArray(e)){if(e instanceof n)return e;l=e}return new n(function(e){const t=[];for(let s=0;s<e.length;s+=1)-1===t.indexOf(e[s])&&t.push(e[s]);return t}(l))}d.fn=n.prototype;const c={addClass:function(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];const a=l(t.map((e=>e.split(" "))));return this.forEach((e=>{e.classList.add(...a)})),this},removeClass:function(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];const a=l(t.map((e=>e.split(" "))));return this.forEach((e=>{e.classList.remove(...a)})),this},hasClass:function(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];const a=l(t.map((e=>e.split(" "))));return o(this,(e=>a.filter((t=>e.classList.contains(t))).length>0)).length>0},toggleClass:function(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];const a=l(t.map((e=>e.split(" "))));this.forEach((e=>{a.forEach((t=>{e.classList.toggle(t)}))}))},attr:function(e,t){if(1===arguments.length&&"string"==typeof e)return this[0]?this[0].getAttribute(e):void 0;for(let s=0;s<this.length;s+=1)if(2===arguments.length)this[s].setAttribute(e,t);else for(const t in e)this[s][t]=e[t],this[s].setAttribute(t,e[t]);return this},removeAttr:function(e){for(let t=0;t<this.length;t+=1)this[t].removeAttribute(e);return this},transform:function(e){for(let t=0;t<this.length;t+=1)this[t].style.transform=e;return this},transition:function(e){for(let t=0;t<this.length;t+=1)this[t].style.transitionDuration="string"!=typeof e?`${e}ms`:e;return this},on:function(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];let[a,i,r,n]=t;function l(e){const t=e.target;if(!t)return;const s=e.target.dom7EventData||[];if(s.indexOf(e)<0&&s.unshift(e),d(t).is(i))r.apply(t,s);else{const e=d(t).parents();for(let t=0;t<e.length;t+=1)d(e[t]).is(i)&&r.apply(e[t],s)}}function o(e){const t=e&&e.target&&e.target.dom7EventData||[];t.indexOf(e)<0&&t.unshift(e),r.apply(this,t)}"function"==typeof t[1]&&([a,r,n]=t,i=void 0),n||(n=!1);const c=a.split(" ");let p;for(let e=0;e<this.length;e+=1){const t=this[e];if(i)for(p=0;p<c.length;p+=1){const e=c[p];t.dom7LiveListeners||(t.dom7LiveListeners={}),t.dom7LiveListeners[e]||(t.dom7LiveListeners[e]=[]),t.dom7LiveListeners[e].push({listener:r,proxyListener:l}),t.addEventListener(e,l,n)}else for(p=0;p<c.length;p+=1){const e=c[p];t.dom7Listeners||(t.dom7Listeners={}),t.dom7Listeners[e]||(t.dom7Listeners[e]=[]),t.dom7Listeners[e].push({listener:r,proxyListener:o}),t.addEventListener(e,o,n)}}return this},off:function(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];let[a,i,r,n]=t;"function"==typeof t[1]&&([a,r,n]=t,i=void 0),n||(n=!1);const l=a.split(" ");for(let e=0;e<l.length;e+=1){const t=l[e];for(let e=0;e<this.length;e+=1){const s=this[e];let a;if(!i&&s.dom7Listeners?a=s.dom7Listeners[t]:i&&s.dom7LiveListeners&&(a=s.dom7LiveListeners[t]),a&&a.length)for(let e=a.length-1;e>=0;e-=1){const i=a[e];r&&i.listener===r||r&&i.listener&&i.listener.dom7proxy&&i.listener.dom7proxy===r?(s.removeEventListener(t,i.proxyListener,n),a.splice(e,1)):r||(s.removeEventListener(t,i.proxyListener,n),a.splice(e,1))}}}return this},trigger:function(){const e=r();for(var t=arguments.length,s=new Array(t),a=0;a<t;a++)s[a]=arguments[a];const i=s[0].split(" "),n=s[1];for(let t=0;t<i.length;t+=1){const a=i[t];for(let t=0;t<this.length;t+=1){const i=this[t];if(e.CustomEvent){const t=new e.CustomEvent(a,{detail:n,bubbles:!0,cancelable:!0});i.dom7EventData=s.filter(((e,t)=>t>0)),i.dispatchEvent(t),i.dom7EventData=[],delete i.dom7EventData}}}return this},transitionEnd:function(e){const t=this;return e&&t.on("transitionend",(function s(a){a.target===this&&(e.call(this,a),t.off("transitionend",s))})),this},outerWidth:function(e){if(this.length>0){if(e){const e=this.styles();return this[0].offsetWidth+parseFloat(e.getPropertyValue("margin-right"))+parseFloat(e.getPropertyValue("margin-left"))}return this[0].offsetWidth}return null},outerHeight:function(e){if(this.length>0){if(e){const e=this.styles();return this[0].offsetHeight+parseFloat(e.getPropertyValue("margin-top"))+parseFloat(e.getPropertyValue("margin-bottom"))}return this[0].offsetHeight}return null},styles:function(){const e=r();return this[0]?e.getComputedStyle(this[0],null):{}},offset:function(){if(this.length>0){const e=r(),t=a(),s=this[0],i=s.getBoundingClientRect(),n=t.body,l=s.clientTop||n.clientTop||0,o=s.clientLeft||n.clientLeft||0,d=s===e?e.scrollY:s.scrollTop,c=s===e?e.scrollX:s.scrollLeft;return{top:i.top+d-l,left:i.left+c-o}}return null},css:function(e,t){const s=r();let a;if(1===arguments.length){if("string"!=typeof e){for(a=0;a<this.length;a+=1)for(const t in e)this[a].style[t]=e[t];return this}if(this[0])return s.getComputedStyle(this[0],null).getPropertyValue(e)}if(2===arguments.length&&"string"==typeof e){for(a=0;a<this.length;a+=1)this[a].style[e]=t;return this}return this},each:function(e){return e?(this.forEach(((t,s)=>{e.apply(t,[t,s])})),this):this},html:function(e){if(void 0===e)return this[0]?this[0].innerHTML:null;for(let t=0;t<this.length;t+=1)this[t].innerHTML=e;return this},text:function(e){if(void 0===e)return this[0]?this[0].textContent.trim():null;for(let t=0;t<this.length;t+=1)this[t].textContent=e;return this},is:function(e){const t=r(),s=a(),i=this[0];let l,o;if(!i||void 0===e)return!1;if("string"==typeof e){if(i.matches)return i.matches(e);if(i.webkitMatchesSelector)return i.webkitMatchesSelector(e);if(i.msMatchesSelector)return i.msMatchesSelector(e);for(l=d(e),o=0;o<l.length;o+=1)if(l[o]===i)return!0;return!1}if(e===s)return i===s;if(e===t)return i===t;if(e.nodeType||e instanceof n){for(l=e.nodeType?[e]:e,o=0;o<l.length;o+=1)if(l[o]===i)return!0;return!1}return!1},index:function(){let e,t=this[0];if(t){for(e=0;null!==(t=t.previousSibling);)1===t.nodeType&&(e+=1);return e}},eq:function(e){if(void 0===e)return this;const t=this.length;if(e>t-1)return d([]);if(e<0){const s=t+e;return d(s<0?[]:[this[s]])}return d([this[e]])},append:function(){let e;const t=a();for(let s=0;s<arguments.length;s+=1){e=s<0||arguments.length<=s?void 0:arguments[s];for(let s=0;s<this.length;s+=1)if("string"==typeof e){const a=t.createElement("div");for(a.innerHTML=e;a.firstChild;)this[s].appendChild(a.firstChild)}else if(e instanceof n)for(let t=0;t<e.length;t+=1)this[s].appendChild(e[t]);else this[s].appendChild(e)}return this},prepend:function(e){const t=a();let s,i;for(s=0;s<this.length;s+=1)if("string"==typeof e){const a=t.createElement("div");for(a.innerHTML=e,i=a.childNodes.length-1;i>=0;i-=1)this[s].insertBefore(a.childNodes[i],this[s].childNodes[0])}else if(e instanceof n)for(i=0;i<e.length;i+=1)this[s].insertBefore(e[i],this[s].childNodes[0]);else this[s].insertBefore(e,this[s].childNodes[0]);return this},next:function(e){return this.length>0?e?this[0].nextElementSibling&&d(this[0].nextElementSibling).is(e)?d([this[0].nextElementSibling]):d([]):this[0].nextElementSibling?d([this[0].nextElementSibling]):d([]):d([])},nextAll:function(e){const t=[];let s=this[0];if(!s)return d([]);for(;s.nextElementSibling;){const a=s.nextElementSibling;e?d(a).is(e)&&t.push(a):t.push(a),s=a}return d(t)},prev:function(e){if(this.length>0){const t=this[0];return e?t.previousElementSibling&&d(t.previousElementSibling).is(e)?d([t.previousElementSibling]):d([]):t.previousElementSibling?d([t.previousElementSibling]):d([])}return d([])},prevAll:function(e){const t=[];let s=this[0];if(!s)return d([]);for(;s.previousElementSibling;){const a=s.previousElementSibling;e?d(a).is(e)&&t.push(a):t.push(a),s=a}return d(t)},parent:function(e){const t=[];for(let s=0;s<this.length;s+=1)null!==this[s].parentNode&&(e?d(this[s].parentNode).is(e)&&t.push(this[s].parentNode):t.push(this[s].parentNode));return d(t)},parents:function(e){const t=[];for(let s=0;s<this.length;s+=1){let a=this[s].parentNode;for(;a;)e?d(a).is(e)&&t.push(a):t.push(a),a=a.parentNode}return d(t)},closest:function(e){let t=this;return void 0===e?d([]):(t.is(e)||(t=t.parents(e).eq(0)),t)},find:function(e){const t=[];for(let s=0;s<this.length;s+=1){const a=this[s].querySelectorAll(e);for(let e=0;e<a.length;e+=1)t.push(a[e])}return d(t)},children:function(e){const t=[];for(let s=0;s<this.length;s+=1){const a=this[s].children;for(let s=0;s<a.length;s+=1)e&&!d(a[s]).is(e)||t.push(a[s])}return d(t)},filter:function(e){return d(o(this,e))},remove:function(){for(let e=0;e<this.length;e+=1)this[e].parentNode&&this[e].parentNode.removeChild(this[e]);return this}};function p(e,t){return void 0===t&&(t=0),setTimeout(e,t)}function u(){return Date.now()}function h(e,t){void 0===t&&(t="x");const s=r();let a,i,n;const l=function(e){const t=r();let s;return t.getComputedStyle&&(s=t.getComputedStyle(e,null)),!s&&e.currentStyle&&(s=e.currentStyle),s||(s=e.style),s}(e);return s.WebKitCSSMatrix?(i=l.transform||l.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map((e=>e.replace(",","."))).join(", ")),n=new s.WebKitCSSMatrix("none"===i?"":i)):(n=l.MozTransform||l.OTransform||l.MsTransform||l.msTransform||l.transform||l.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),a=n.toString().split(",")),"x"===t&&(i=s.WebKitCSSMatrix?n.m41:16===a.length?parseFloat(a[12]):parseFloat(a[4])),"y"===t&&(i=s.WebKitCSSMatrix?n.m42:16===a.length?parseFloat(a[13]):parseFloat(a[5])),i||0}function m(e){return"object"==typeof e&&null!==e&&e.constructor&&"Object"===Object.prototype.toString.call(e).slice(8,-1)}function f(e){return"undefined"!=typeof window&&void 0!==window.HTMLElement?e instanceof HTMLElement:e&&(1===e.nodeType||11===e.nodeType)}function g(){const e=Object(arguments.length<=0?void 0:arguments[0]),t=["__proto__","constructor","prototype"];for(let s=1;s<arguments.length;s+=1){const a=s<0||arguments.length<=s?void 0:arguments[s];if(null!=a&&!f(a)){const s=Object.keys(Object(a)).filter((e=>t.indexOf(e)<0));for(let t=0,i=s.length;t<i;t+=1){const i=s[t],r=Object.getOwnPropertyDescriptor(a,i);void 0!==r&&r.enumerable&&(m(e[i])&&m(a[i])?a[i].__swiper__?e[i]=a[i]:g(e[i],a[i]):!m(e[i])&&m(a[i])?(e[i]={},a[i].__swiper__?e[i]=a[i]:g(e[i],a[i])):e[i]=a[i])}}}return e}function v(e,t,s){e.style.setProperty(t,s)}function w(e){let{swiper:t,targetPosition:s,side:a}=e;const i=r(),n=-t.translate;let l,o=null;const d=t.params.speed;t.wrapperEl.style.scrollSnapType="none",i.cancelAnimationFrame(t.cssModeFrameID);const c=s>n?"next":"prev",p=(e,t)=>"next"===c&&e>=t||"prev"===c&&e<=t,u=()=>{l=(new Date).getTime(),null===o&&(o=l);const e=Math.max(Math.min((l-o)/d,1),0),r=.5-Math.cos(e*Math.PI)/2;let c=n+r*(s-n);if(p(c,s)&&(c=s),t.wrapperEl.scrollTo({[a]:c}),p(c,s))return t.wrapperEl.style.overflow="hidden",t.wrapperEl.style.scrollSnapType="",setTimeout((()=>{t.wrapperEl.style.overflow="",t.wrapperEl.scrollTo({[a]:c})})),void i.cancelAnimationFrame(t.cssModeFrameID);t.cssModeFrameID=i.requestAnimationFrame(u)};u()}let b,x,y;function E(){return b||(b=function(){const e=r(),t=a();return{smoothScroll:t.documentElement&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch),passiveListener:function(){let t=!1;try{const s=Object.defineProperty({},"passive",{get(){t=!0}});e.addEventListener("testPassiveListener",null,s)}catch(e){}return t}(),gestures:"ongesturestart"in e}}()),b}function C(e){return void 0===e&&(e={}),x||(x=function(e){let{userAgent:t}=void 0===e?{}:e;const s=E(),a=r(),i=a.navigator.platform,n=t||a.navigator.userAgent,l={ios:!1,android:!1},o=a.screen.width,d=a.screen.height,c=n.match(/(Android);?[\s\/]+([\d.]+)?/);let p=n.match(/(iPad).*OS\s([\d_]+)/);const u=n.match(/(iPod)(.*OS\s([\d_]+))?/),h=!p&&n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),m="Win32"===i;let f="MacIntel"===i;return!p&&f&&s.touch&&["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"].indexOf(`${o}x${d}`)>=0&&(p=n.match(/(Version)\/([\d.]+)/),p||(p=[0,1,"13_0_0"]),f=!1),c&&!m&&(l.os="android",l.android=!0),(p||h||u)&&(l.os="ios",l.ios=!0),l}(e)),x}function T(){return y||(y=function(){const e=r();return{isSafari:function(){const t=e.navigator.userAgent.toLowerCase();return t.indexOf("safari")>=0&&t.indexOf("chrome")<0&&t.indexOf("android")<0}(),isWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)}}()),y}Object.keys(c).forEach((e=>{Object.defineProperty(d.fn,e,{value:c[e],writable:!0})}));var $={on(e,t,s){const a=this;if(!a.eventsListeners||a.destroyed)return a;if("function"!=typeof t)return a;const i=s?"unshift":"push";return e.split(" ").forEach((e=>{a.eventsListeners[e]||(a.eventsListeners[e]=[]),a.eventsListeners[e][i](t)})),a},once(e,t,s){const a=this;if(!a.eventsListeners||a.destroyed)return a;if("function"!=typeof t)return a;function i(){a.off(e,i),i.__emitterProxy&&delete i.__emitterProxy;for(var s=arguments.length,r=new Array(s),n=0;n<s;n++)r[n]=arguments[n];t.apply(a,r)}return i.__emitterProxy=t,a.on(e,i,s)},onAny(e,t){const s=this;if(!s.eventsListeners||s.destroyed)return s;if("function"!=typeof e)return s;const a=t?"unshift":"push";return s.eventsAnyListeners.indexOf(e)<0&&s.eventsAnyListeners[a](e),s},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed)return t;if(!t.eventsAnyListeners)return t;const s=t.eventsAnyListeners.indexOf(e);return s>=0&&t.eventsAnyListeners.splice(s,1),t},off(e,t){const s=this;return!s.eventsListeners||s.destroyed?s:s.eventsListeners?(e.split(" ").forEach((e=>{void 0===t?s.eventsListeners[e]=[]:s.eventsListeners[e]&&s.eventsListeners[e].forEach(((a,i)=>{(a===t||a.__emitterProxy&&a.__emitterProxy===t)&&s.eventsListeners[e].splice(i,1)}))})),s):s},emit(){const e=this;if(!e.eventsListeners||e.destroyed)return e;if(!e.eventsListeners)return e;let t,s,a;for(var i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];"string"==typeof r[0]||Array.isArray(r[0])?(t=r[0],s=r.slice(1,r.length),a=e):(t=r[0].events,s=r[0].data,a=r[0].context||e),s.unshift(a);return(Array.isArray(t)?t:t.split(" ")).forEach((t=>{e.eventsAnyListeners&&e.eventsAnyListeners.length&&e.eventsAnyListeners.forEach((e=>{e.apply(a,[t,...s])})),e.eventsListeners&&e.eventsListeners[t]&&e.eventsListeners[t].forEach((e=>{e.apply(a,s)}))})),e}};var S={updateSize:function(){const e=this;let t,s;const a=e.$el;t=void 0!==e.params.width&&null!==e.params.width?e.params.width:a[0].clientWidth,s=void 0!==e.params.height&&null!==e.params.height?e.params.height:a[0].clientHeight,0===t&&e.isHorizontal()||0===s&&e.isVertical()||(t=t-parseInt(a.css("padding-left")||0,10)-parseInt(a.css("padding-right")||0,10),s=s-parseInt(a.css("padding-top")||0,10)-parseInt(a.css("padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(s)&&(s=0),Object.assign(e,{width:t,height:s,size:e.isHorizontal()?t:s}))},updateSlides:function(){const e=this;function t(t){return e.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}function s(e,s){return parseFloat(e.getPropertyValue(t(s))||0)}const a=e.params,{$wrapperEl:i,size:r,rtlTranslate:n,wrongRTL:l}=e,o=e.virtual&&a.virtual.enabled,d=o?e.virtual.slides.length:e.slides.length,c=i.children(`.${e.params.slideClass}`),p=o?e.virtual.slides.length:c.length;let u=[];const h=[],m=[];let f=a.slidesOffsetBefore;"function"==typeof f&&(f=a.slidesOffsetBefore.call(e));let g=a.slidesOffsetAfter;"function"==typeof g&&(g=a.slidesOffsetAfter.call(e));const w=e.snapGrid.length,b=e.slidesGrid.length;let x=a.spaceBetween,y=-f,E=0,C=0;if(void 0===r)return;"string"==typeof x&&x.indexOf("%")>=0&&(x=parseFloat(x.replace("%",""))/100*r),e.virtualSize=-x,n?c.css({marginLeft:"",marginBottom:"",marginTop:""}):c.css({marginRight:"",marginBottom:"",marginTop:""}),a.centeredSlides&&a.cssMode&&(v(e.wrapperEl,"--swiper-centered-offset-before",""),v(e.wrapperEl,"--swiper-centered-offset-after",""));const T=a.grid&&a.grid.rows>1&&e.grid;let $;T&&e.grid.initSlides(p);const S="auto"===a.slidesPerView&&a.breakpoints&&Object.keys(a.breakpoints).filter((e=>void 0!==a.breakpoints[e].slidesPerView)).length>0;for(let i=0;i<p;i+=1){$=0;const n=c.eq(i);if(T&&e.grid.updateSlide(i,n,p,t),"none"!==n.css("display")){if("auto"===a.slidesPerView){S&&(c[i].style[t("width")]="");const r=getComputedStyle(n[0]),l=n[0].style.transform,o=n[0].style.webkitTransform;if(l&&(n[0].style.transform="none"),o&&(n[0].style.webkitTransform="none"),a.roundLengths)$=e.isHorizontal()?n.outerWidth(!0):n.outerHeight(!0);else{const e=s(r,"width"),t=s(r,"padding-left"),a=s(r,"padding-right"),i=s(r,"margin-left"),l=s(r,"margin-right"),o=r.getPropertyValue("box-sizing");if(o&&"border-box"===o)$=e+i+l;else{const{clientWidth:s,offsetWidth:r}=n[0];$=e+t+a+i+l+(r-s)}}l&&(n[0].style.transform=l),o&&(n[0].style.webkitTransform=o),a.roundLengths&&($=Math.floor($))}else $=(r-(a.slidesPerView-1)*x)/a.slidesPerView,a.roundLengths&&($=Math.floor($)),c[i]&&(c[i].style[t("width")]=`${$}px`);c[i]&&(c[i].swiperSlideSize=$),m.push($),a.centeredSlides?(y=y+$/2+E/2+x,0===E&&0!==i&&(y=y-r/2-x),0===i&&(y=y-r/2-x),Math.abs(y)<.001&&(y=0),a.roundLengths&&(y=Math.floor(y)),C%a.slidesPerGroup==0&&u.push(y),h.push(y)):(a.roundLengths&&(y=Math.floor(y)),(C-Math.min(e.params.slidesPerGroupSkip,C))%e.params.slidesPerGroup==0&&u.push(y),h.push(y),y=y+$+x),e.virtualSize+=$+x,E=$,C+=1}}if(e.virtualSize=Math.max(e.virtualSize,r)+g,n&&l&&("slide"===a.effect||"coverflow"===a.effect)&&i.css({width:`${e.virtualSize+a.spaceBetween}px`}),a.setWrapperSize&&i.css({[t("width")]:`${e.virtualSize+a.spaceBetween}px`}),T&&e.grid.updateWrapperSize($,u,t),!a.centeredSlides){const t=[];for(let s=0;s<u.length;s+=1){let i=u[s];a.roundLengths&&(i=Math.floor(i)),u[s]<=e.virtualSize-r&&t.push(i)}u=t,Math.floor(e.virtualSize-r)-Math.floor(u[u.length-1])>1&&u.push(e.virtualSize-r)}if(0===u.length&&(u=[0]),0!==a.spaceBetween){const s=e.isHorizontal()&&n?"marginLeft":t("marginRight");c.filter(((e,t)=>!a.cssMode||t!==c.length-1)).css({[s]:`${x}px`})}if(a.centeredSlides&&a.centeredSlidesBounds){let e=0;m.forEach((t=>{e+=t+(a.spaceBetween?a.spaceBetween:0)})),e-=a.spaceBetween;const t=e-r;u=u.map((e=>e<0?-f:e>t?t+g:e))}if(a.centerInsufficientSlides){let e=0;if(m.forEach((t=>{e+=t+(a.spaceBetween?a.spaceBetween:0)})),e-=a.spaceBetween,e<r){const t=(r-e)/2;u.forEach(((e,s)=>{u[s]=e-t})),h.forEach(((e,s)=>{h[s]=e+t}))}}if(Object.assign(e,{slides:c,snapGrid:u,slidesGrid:h,slidesSizesGrid:m}),a.centeredSlides&&a.cssMode&&!a.centeredSlidesBounds){v(e.wrapperEl,"--swiper-centered-offset-before",-u[0]+"px"),v(e.wrapperEl,"--swiper-centered-offset-after",e.size/2-m[m.length-1]/2+"px");const t=-e.snapGrid[0],s=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map((e=>e+t)),e.slidesGrid=e.slidesGrid.map((e=>e+s))}if(p!==d&&e.emit("slidesLengthChange"),u.length!==w&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),h.length!==b&&e.emit("slidesGridLengthChange"),a.watchSlidesProgress&&e.updateSlidesOffset(),!(o||a.cssMode||"slide"!==a.effect&&"fade"!==a.effect)){const t=`${a.containerModifierClass}backface-hidden`,s=e.$el.hasClass(t);p<=a.maxBackfaceHiddenSlides?s||e.$el.addClass(t):s&&e.$el.removeClass(t)}},updateAutoHeight:function(e){const t=this,s=[],a=t.virtual&&t.params.virtual.enabled;let i,r=0;"number"==typeof e?t.setTransition(e):!0===e&&t.setTransition(t.params.speed);const n=e=>a?t.slides.filter((t=>parseInt(t.getAttribute("data-swiper-slide-index"),10)===e))[0]:t.slides.eq(e)[0];if("auto"!==t.params.slidesPerView&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||d([])).each((e=>{s.push(e)}));else for(i=0;i<Math.ceil(t.params.slidesPerView);i+=1){const e=t.activeIndex+i;if(e>t.slides.length&&!a)break;s.push(n(e))}else s.push(n(t.activeIndex));for(i=0;i<s.length;i+=1)if(void 0!==s[i]){const e=s[i].offsetHeight;r=e>r?e:r}(r||0===r)&&t.$wrapperEl.css("height",`${r}px`)},updateSlidesOffset:function(){const e=this,t=e.slides;for(let s=0;s<t.length;s+=1)t[s].swiperSlideOffset=e.isHorizontal()?t[s].offsetLeft:t[s].offsetTop},updateSlidesProgress:function(e){void 0===e&&(e=this&&this.translate||0);const t=this,s=t.params,{slides:a,rtlTranslate:i,snapGrid:r}=t;if(0===a.length)return;void 0===a[0].swiperSlideOffset&&t.updateSlidesOffset();let n=-e;i&&(n=e),a.removeClass(s.slideVisibleClass),t.visibleSlidesIndexes=[],t.visibleSlides=[];for(let e=0;e<a.length;e+=1){const l=a[e];let o=l.swiperSlideOffset;s.cssMode&&s.centeredSlides&&(o-=a[0].swiperSlideOffset);const d=(n+(s.centeredSlides?t.minTranslate():0)-o)/(l.swiperSlideSize+s.spaceBetween),c=(n-r[0]+(s.centeredSlides?t.minTranslate():0)-o)/(l.swiperSlideSize+s.spaceBetween),p=-(n-o),u=p+t.slidesSizesGrid[e];(p>=0&&p<t.size-1||u>1&&u<=t.size||p<=0&&u>=t.size)&&(t.visibleSlides.push(l),t.visibleSlidesIndexes.push(e),a.eq(e).addClass(s.slideVisibleClass)),l.progress=i?-d:d,l.originalProgress=i?-c:c}t.visibleSlides=d(t.visibleSlides)},updateProgress:function(e){const t=this;if(void 0===e){const s=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*s||0}const s=t.params,a=t.maxTranslate()-t.minTranslate();let{progress:i,isBeginning:r,isEnd:n}=t;const l=r,o=n;0===a?(i=0,r=!0,n=!0):(i=(e-t.minTranslate())/a,r=i<=0,n=i>=1),Object.assign(t,{progress:i,isBeginning:r,isEnd:n}),(s.watchSlidesProgress||s.centeredSlides&&s.autoHeight)&&t.updateSlidesProgress(e),r&&!l&&t.emit("reachBeginning toEdge"),n&&!o&&t.emit("reachEnd toEdge"),(l&&!r||o&&!n)&&t.emit("fromEdge"),t.emit("progress",i)},updateSlidesClasses:function(){const e=this,{slides:t,params:s,$wrapperEl:a,activeIndex:i,realIndex:r}=e,n=e.virtual&&s.virtual.enabled;let l;t.removeClass(`${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`),l=n?e.$wrapperEl.find(`.${s.slideClass}[data-swiper-slide-index="${i}"]`):t.eq(i),l.addClass(s.slideActiveClass),s.loop&&(l.hasClass(s.slideDuplicateClass)?a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${r}"]`).addClass(s.slideDuplicateActiveClass):a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${r}"]`).addClass(s.slideDuplicateActiveClass));let o=l.nextAll(`.${s.slideClass}`).eq(0).addClass(s.slideNextClass);s.loop&&0===o.length&&(o=t.eq(0),o.addClass(s.slideNextClass));let d=l.prevAll(`.${s.slideClass}`).eq(0).addClass(s.slidePrevClass);s.loop&&0===d.length&&(d=t.eq(-1),d.addClass(s.slidePrevClass)),s.loop&&(o.hasClass(s.slideDuplicateClass)?a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass):a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass),d.hasClass(s.slideDuplicateClass)?a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass):a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass)),e.emitSlidesClasses()},updateActiveIndex:function(e){const t=this,s=t.rtlTranslate?t.translate:-t.translate,{slidesGrid:a,snapGrid:i,params:r,activeIndex:n,realIndex:l,snapIndex:o}=t;let d,c=e;if(void 0===c){for(let e=0;e<a.length;e+=1)void 0!==a[e+1]?s>=a[e]&&s<a[e+1]-(a[e+1]-a[e])/2?c=e:s>=a[e]&&s<a[e+1]&&(c=e+1):s>=a[e]&&(c=e);r.normalizeSlideIndex&&(c<0||void 0===c)&&(c=0)}if(i.indexOf(s)>=0)d=i.indexOf(s);else{const e=Math.min(r.slidesPerGroupSkip,c);d=e+Math.floor((c-e)/r.slidesPerGroup)}if(d>=i.length&&(d=i.length-1),c===n)return void(d!==o&&(t.snapIndex=d,t.emit("snapIndexChange")));const p=parseInt(t.slides.eq(c).attr("data-swiper-slide-index")||c,10);Object.assign(t,{snapIndex:d,realIndex:p,previousIndex:n,activeIndex:c}),t.emit("activeIndexChange"),t.emit("snapIndexChange"),l!==p&&t.emit("realIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&t.emit("slideChange")},updateClickedSlide:function(e){const t=this,s=t.params,a=d(e).closest(`.${s.slideClass}`)[0];let i,r=!1;if(a)for(let e=0;e<t.slides.length;e+=1)if(t.slides[e]===a){r=!0,i=e;break}if(!a||!r)return t.clickedSlide=void 0,void(t.clickedIndex=void 0);t.clickedSlide=a,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(d(a).attr("data-swiper-slide-index"),10):t.clickedIndex=i,s.slideToClickedSlide&&void 0!==t.clickedIndex&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}};var M={getTranslate:function(e){void 0===e&&(e=this.isHorizontal()?"x":"y");const{params:t,rtlTranslate:s,translate:a,$wrapperEl:i}=this;if(t.virtualTranslate)return s?-a:a;if(t.cssMode)return a;let r=h(i[0],e);return s&&(r=-r),r||0},setTranslate:function(e,t){const s=this,{rtlTranslate:a,params:i,$wrapperEl:r,wrapperEl:n,progress:l}=s;let o,d=0,c=0;s.isHorizontal()?d=a?-e:e:c=e,i.roundLengths&&(d=Math.floor(d),c=Math.floor(c)),i.cssMode?n[s.isHorizontal()?"scrollLeft":"scrollTop"]=s.isHorizontal()?-d:-c:i.virtualTranslate||r.transform(`translate3d(${d}px, ${c}px, 0px)`),s.previousTranslate=s.translate,s.translate=s.isHorizontal()?d:c;const p=s.maxTranslate()-s.minTranslate();o=0===p?0:(e-s.minTranslate())/p,o!==l&&s.updateProgress(e),s.emit("setTranslate",s.translate,t)},minTranslate:function(){return-this.snapGrid[0]},maxTranslate:function(){return-this.snapGrid[this.snapGrid.length-1]},translateTo:function(e,t,s,a,i){void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===s&&(s=!0),void 0===a&&(a=!0);const r=this,{params:n,wrapperEl:l}=r;if(r.animating&&n.preventInteractionOnTransition)return!1;const o=r.minTranslate(),d=r.maxTranslate();let c;if(c=a&&e>o?o:a&&e<d?d:e,r.updateProgress(c),n.cssMode){const e=r.isHorizontal();if(0===t)l[e?"scrollLeft":"scrollTop"]=-c;else{if(!r.support.smoothScroll)return w({swiper:r,targetPosition:-c,side:e?"left":"top"}),!0;l.scrollTo({[e?"left":"top"]:-c,behavior:"smooth"})}return!0}return 0===t?(r.setTransition(0),r.setTranslate(c),s&&(r.emit("beforeTransitionStart",t,i),r.emit("transitionEnd"))):(r.setTransition(t),r.setTranslate(c),s&&(r.emit("beforeTransitionStart",t,i),r.emit("transitionStart")),r.animating||(r.animating=!0,r.onTranslateToWrapperTransitionEnd||(r.onTranslateToWrapperTransitionEnd=function(e){r&&!r.destroyed&&e.target===this&&(r.$wrapperEl[0].removeEventListener("transitionend",r.onTranslateToWrapperTransitionEnd),r.$wrapperEl[0].removeEventListener("webkitTransitionEnd",r.onTranslateToWrapperTransitionEnd),r.onTranslateToWrapperTransitionEnd=null,delete r.onTranslateToWrapperTransitionEnd,s&&r.emit("transitionEnd"))}),r.$wrapperEl[0].addEventListener("transitionend",r.onTranslateToWrapperTransitionEnd),r.$wrapperEl[0].addEventListener("webkitTransitionEnd",r.onTranslateToWrapperTransitionEnd))),!0}};function P(e){let{swiper:t,runCallbacks:s,direction:a,step:i}=e;const{activeIndex:r,previousIndex:n}=t;let l=a;if(l||(l=r>n?"next":r<n?"prev":"reset"),t.emit(`transition${i}`),s&&r!==n){if("reset"===l)return void t.emit(`slideResetTransition${i}`);t.emit(`slideChangeTransition${i}`),"next"===l?t.emit(`slideNextTransition${i}`):t.emit(`slidePrevTransition${i}`)}}var k={slideTo:function(e,t,s,a,i){if(void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===s&&(s=!0),"number"!=typeof e&&"string"!=typeof e)throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`);if("string"==typeof e){const t=parseInt(e,10);if(!isFinite(t))throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);e=t}const r=this;let n=e;n<0&&(n=0);const{params:l,snapGrid:o,slidesGrid:d,previousIndex:c,activeIndex:p,rtlTranslate:u,wrapperEl:h,enabled:m}=r;if(r.animating&&l.preventInteractionOnTransition||!m&&!a&&!i)return!1;const f=Math.min(r.params.slidesPerGroupSkip,n);let g=f+Math.floor((n-f)/r.params.slidesPerGroup);g>=o.length&&(g=o.length-1);const v=-o[g];if(l.normalizeSlideIndex)for(let e=0;e<d.length;e+=1){const t=-Math.floor(100*v),s=Math.floor(100*d[e]),a=Math.floor(100*d[e+1]);void 0!==d[e+1]?t>=s&&t<a-(a-s)/2?n=e:t>=s&&t<a&&(n=e+1):t>=s&&(n=e)}if(r.initialized&&n!==p){if(!r.allowSlideNext&&v<r.translate&&v<r.minTranslate())return!1;if(!r.allowSlidePrev&&v>r.translate&&v>r.maxTranslate()&&(p||0)!==n)return!1}let b;if(n!==(c||0)&&s&&r.emit("beforeSlideChangeStart"),r.updateProgress(v),b=n>p?"next":n<p?"prev":"reset",u&&-v===r.translate||!u&&v===r.translate)return r.updateActiveIndex(n),l.autoHeight&&r.updateAutoHeight(),r.updateSlidesClasses(),"slide"!==l.effect&&r.setTranslate(v),"reset"!==b&&(r.transitionStart(s,b),r.transitionEnd(s,b)),!1;if(l.cssMode){const e=r.isHorizontal(),s=u?v:-v;if(0===t){const t=r.virtual&&r.params.virtual.enabled;t&&(r.wrapperEl.style.scrollSnapType="none",r._immediateVirtual=!0),h[e?"scrollLeft":"scrollTop"]=s,t&&requestAnimationFrame((()=>{r.wrapperEl.style.scrollSnapType="",r._swiperImmediateVirtual=!1}))}else{if(!r.support.smoothScroll)return w({swiper:r,targetPosition:s,side:e?"left":"top"}),!0;h.scrollTo({[e?"left":"top"]:s,behavior:"smooth"})}return!0}return r.setTransition(t),r.setTranslate(v),r.updateActiveIndex(n),r.updateSlidesClasses(),r.emit("beforeTransitionStart",t,a),r.transitionStart(s,b),0===t?r.transitionEnd(s,b):r.animating||(r.animating=!0,r.onSlideToWrapperTransitionEnd||(r.onSlideToWrapperTransitionEnd=function(e){r&&!r.destroyed&&e.target===this&&(r.$wrapperEl[0].removeEventListener("transitionend",r.onSlideToWrapperTransitionEnd),r.$wrapperEl[0].removeEventListener("webkitTransitionEnd",r.onSlideToWrapperTransitionEnd),r.onSlideToWrapperTransitionEnd=null,delete r.onSlideToWrapperTransitionEnd,r.transitionEnd(s,b))}),r.$wrapperEl[0].addEventListener("transitionend",r.onSlideToWrapperTransitionEnd),r.$wrapperEl[0].addEventListener("webkitTransitionEnd",r.onSlideToWrapperTransitionEnd)),!0},slideToLoop:function(e,t,s,a){if(void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===s&&(s=!0),"string"==typeof e){const t=parseInt(e,10);if(!isFinite(t))throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);e=t}const i=this;let r=e;return i.params.loop&&(r+=i.loopedSlides),i.slideTo(r,t,s,a)},slideNext:function(e,t,s){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);const a=this,{animating:i,enabled:r,params:n}=a;if(!r)return a;let l=n.slidesPerGroup;"auto"===n.slidesPerView&&1===n.slidesPerGroup&&n.slidesPerGroupAuto&&(l=Math.max(a.slidesPerViewDynamic("current",!0),1));const o=a.activeIndex<n.slidesPerGroupSkip?1:l;if(n.loop){if(i&&n.loopPreventsSlide)return!1;a.loopFix(),a._clientLeft=a.$wrapperEl[0].clientLeft}return n.rewind&&a.isEnd?a.slideTo(0,e,t,s):a.slideTo(a.activeIndex+o,e,t,s)},slidePrev:function(e,t,s){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0);const a=this,{params:i,animating:r,snapGrid:n,slidesGrid:l,rtlTranslate:o,enabled:d}=a;if(!d)return a;if(i.loop){if(r&&i.loopPreventsSlide)return!1;a.loopFix(),a._clientLeft=a.$wrapperEl[0].clientLeft}function c(e){return e<0?-Math.floor(Math.abs(e)):Math.floor(e)}const p=c(o?a.translate:-a.translate),u=n.map((e=>c(e)));let h=n[u.indexOf(p)-1];if(void 0===h&&i.cssMode){let e;n.forEach(((t,s)=>{p>=t&&(e=s)})),void 0!==e&&(h=n[e>0?e-1:e])}let m=0;if(void 0!==h&&(m=l.indexOf(h),m<0&&(m=a.activeIndex-1),"auto"===i.slidesPerView&&1===i.slidesPerGroup&&i.slidesPerGroupAuto&&(m=m-a.slidesPerViewDynamic("previous",!0)+1,m=Math.max(m,0))),i.rewind&&a.isBeginning){const i=a.params.virtual&&a.params.virtual.enabled&&a.virtual?a.virtual.slides.length-1:a.slides.length-1;return a.slideTo(i,e,t,s)}return a.slideTo(m,e,t,s)},slideReset:function(e,t,s){return void 0===e&&(e=this.params.speed),void 0===t&&(t=!0),this.slideTo(this.activeIndex,e,t,s)},slideToClosest:function(e,t,s,a){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0),void 0===a&&(a=.5);const i=this;let r=i.activeIndex;const n=Math.min(i.params.slidesPerGroupSkip,r),l=n+Math.floor((r-n)/i.params.slidesPerGroup),o=i.rtlTranslate?i.translate:-i.translate;if(o>=i.snapGrid[l]){const e=i.snapGrid[l];o-e>(i.snapGrid[l+1]-e)*a&&(r+=i.params.slidesPerGroup)}else{const e=i.snapGrid[l-1];o-e<=(i.snapGrid[l]-e)*a&&(r-=i.params.slidesPerGroup)}return r=Math.max(r,0),r=Math.min(r,i.slidesGrid.length-1),i.slideTo(r,e,t,s)},slideToClickedSlide:function(){const e=this,{params:t,$wrapperEl:s}=e,a="auto"===t.slidesPerView?e.slidesPerViewDynamic():t.slidesPerView;let i,r=e.clickedIndex;if(t.loop){if(e.animating)return;i=parseInt(d(e.clickedSlide).attr("data-swiper-slide-index"),10),t.centeredSlides?r<e.loopedSlides-a/2||r>e.slides.length-e.loopedSlides+a/2?(e.loopFix(),r=s.children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`).eq(0).index(),p((()=>{e.slideTo(r)}))):e.slideTo(r):r>e.slides.length-a?(e.loopFix(),r=s.children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`).eq(0).index(),p((()=>{e.slideTo(r)}))):e.slideTo(r)}else e.slideTo(r)}};var z={loopCreate:function(){const e=this,t=a(),{params:s,$wrapperEl:i}=e,r=i.children().length>0?d(i.children()[0].parentNode):i;r.children(`.${s.slideClass}.${s.slideDuplicateClass}`).remove();let n=r.children(`.${s.slideClass}`);if(s.loopFillGroupWithBlank){const e=s.slidesPerGroup-n.length%s.slidesPerGroup;if(e!==s.slidesPerGroup){for(let a=0;a<e;a+=1){const e=d(t.createElement("div")).addClass(`${s.slideClass} ${s.slideBlankClass}`);r.append(e)}n=r.children(`.${s.slideClass}`)}}"auto"!==s.slidesPerView||s.loopedSlides||(s.loopedSlides=n.length),e.loopedSlides=Math.ceil(parseFloat(s.loopedSlides||s.slidesPerView,10)),e.loopedSlides+=s.loopAdditionalSlides,e.loopedSlides>n.length&&e.params.loopedSlidesLimit&&(e.loopedSlides=n.length);const l=[],o=[];n.each(((e,t)=>{d(e).attr("data-swiper-slide-index",t)}));for(let t=0;t<e.loopedSlides;t+=1){const e=t-Math.floor(t/n.length)*n.length;o.push(n.eq(e)[0]),l.unshift(n.eq(n.length-e-1)[0])}for(let e=0;e<o.length;e+=1)r.append(d(o[e].cloneNode(!0)).addClass(s.slideDuplicateClass));for(let e=l.length-1;e>=0;e-=1)r.prepend(d(l[e].cloneNode(!0)).addClass(s.slideDuplicateClass))},loopFix:function(){const e=this;e.emit("beforeLoopFix");const{activeIndex:t,slides:s,loopedSlides:a,allowSlidePrev:i,allowSlideNext:r,snapGrid:n,rtlTranslate:l}=e;let o;e.allowSlidePrev=!0,e.allowSlideNext=!0;const d=-n[t]-e.getTranslate();if(t<a){o=s.length-3*a+t,o+=a;e.slideTo(o,0,!1,!0)&&0!==d&&e.setTranslate((l?-e.translate:e.translate)-d)}else if(t>=s.length-a){o=-s.length+t+a,o+=a;e.slideTo(o,0,!1,!0)&&0!==d&&e.setTranslate((l?-e.translate:e.translate)-d)}e.allowSlidePrev=i,e.allowSlideNext=r,e.emit("loopFix")},loopDestroy:function(){const{$wrapperEl:e,params:t,slides:s}=this;e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(),s.removeAttr("data-swiper-slide-index")}};function L(e){const t=this,s=a(),i=r(),n=t.touchEventsData,{params:l,touches:o,enabled:c}=t;if(!c)return;if(t.animating&&l.preventInteractionOnTransition)return;!t.animating&&l.cssMode&&l.loop&&t.loopFix();let p=e;p.originalEvent&&(p=p.originalEvent);let h=d(p.target);if("wrapper"===l.touchEventsTarget&&!h.closest(t.wrapperEl).length)return;if(n.isTouchEvent="touchstart"===p.type,!n.isTouchEvent&&"which"in p&&3===p.which)return;if(!n.isTouchEvent&&"button"in p&&p.button>0)return;if(n.isTouched&&n.isMoved)return;const m=!!l.noSwipingClass&&""!==l.noSwipingClass,f=e.composedPath?e.composedPath():e.path;m&&p.target&&p.target.shadowRoot&&f&&(h=d(f[0]));const g=l.noSwipingSelector?l.noSwipingSelector:`.${l.noSwipingClass}`,v=!(!p.target||!p.target.shadowRoot);if(l.noSwiping&&(v?function(e,t){return void 0===t&&(t=this),function t(s){if(!s||s===a()||s===r())return null;s.assignedSlot&&(s=s.assignedSlot);const i=s.closest(e);return i||s.getRootNode?i||t(s.getRootNode().host):null}(t)}(g,h[0]):h.closest(g)[0]))return void(t.allowClick=!0);if(l.swipeHandler&&!h.closest(l.swipeHandler)[0])return;o.currentX="touchstart"===p.type?p.targetTouches[0].pageX:p.pageX,o.currentY="touchstart"===p.type?p.targetTouches[0].pageY:p.pageY;const w=o.currentX,b=o.currentY,x=l.edgeSwipeDetection||l.iOSEdgeSwipeDetection,y=l.edgeSwipeThreshold||l.iOSEdgeSwipeThreshold;if(x&&(w<=y||w>=i.innerWidth-y)){if("prevent"!==x)return;e.preventDefault()}if(Object.assign(n,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),o.startX=w,o.startY=b,n.touchStartTime=u(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,l.threshold>0&&(n.allowThresholdMove=!1),"touchstart"!==p.type){let e=!0;h.is(n.focusableElements)&&(e=!1,"SELECT"===h[0].nodeName&&(n.isTouched=!1)),s.activeElement&&d(s.activeElement).is(n.focusableElements)&&s.activeElement!==h[0]&&s.activeElement.blur();const a=e&&t.allowTouchMove&&l.touchStartPreventDefault;!l.touchStartForcePreventDefault&&!a||h[0].isContentEditable||p.preventDefault()}t.params.freeMode&&t.params.freeMode.enabled&&t.freeMode&&t.animating&&!l.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",p)}function O(e){const t=a(),s=this,i=s.touchEventsData,{params:r,touches:n,rtlTranslate:l,enabled:o}=s;if(!o)return;let c=e;if(c.originalEvent&&(c=c.originalEvent),!i.isTouched)return void(i.startMoving&&i.isScrolling&&s.emit("touchMoveOpposite",c));if(i.isTouchEvent&&"touchmove"!==c.type)return;const p="touchmove"===c.type&&c.targetTouches&&(c.targetTouches[0]||c.changedTouches[0]),h="touchmove"===c.type?p.pageX:c.pageX,m="touchmove"===c.type?p.pageY:c.pageY;if(c.preventedByNestedSwiper)return n.startX=h,void(n.startY=m);if(!s.allowTouchMove)return d(c.target).is(i.focusableElements)||(s.allowClick=!1),void(i.isTouched&&(Object.assign(n,{startX:h,startY:m,currentX:h,currentY:m}),i.touchStartTime=u()));if(i.isTouchEvent&&r.touchReleaseOnEdges&&!r.loop)if(s.isVertical()){if(m<n.startY&&s.translate<=s.maxTranslate()||m>n.startY&&s.translate>=s.minTranslate())return i.isTouched=!1,void(i.isMoved=!1)}else if(h<n.startX&&s.translate<=s.maxTranslate()||h>n.startX&&s.translate>=s.minTranslate())return;if(i.isTouchEvent&&t.activeElement&&c.target===t.activeElement&&d(c.target).is(i.focusableElements))return i.isMoved=!0,void(s.allowClick=!1);if(i.allowTouchCallbacks&&s.emit("touchMove",c),c.targetTouches&&c.targetTouches.length>1)return;n.currentX=h,n.currentY=m;const f=n.currentX-n.startX,g=n.currentY-n.startY;if(s.params.threshold&&Math.sqrt(f**2+g**2)<s.params.threshold)return;if(void 0===i.isScrolling){let e;s.isHorizontal()&&n.currentY===n.startY||s.isVertical()&&n.currentX===n.startX?i.isScrolling=!1:f*f+g*g>=25&&(e=180*Math.atan2(Math.abs(g),Math.abs(f))/Math.PI,i.isScrolling=s.isHorizontal()?e>r.touchAngle:90-e>r.touchAngle)}if(i.isScrolling&&s.emit("touchMoveOpposite",c),void 0===i.startMoving&&(n.currentX===n.startX&&n.currentY===n.startY||(i.startMoving=!0)),i.isScrolling)return void(i.isTouched=!1);if(!i.startMoving)return;s.allowClick=!1,!r.cssMode&&c.cancelable&&c.preventDefault(),r.touchMoveStopPropagation&&!r.nested&&c.stopPropagation(),i.isMoved||(r.loop&&!r.cssMode&&s.loopFix(),i.startTranslate=s.getTranslate(),s.setTransition(0),s.animating&&s.$wrapperEl.trigger("webkitTransitionEnd transitionend"),i.allowMomentumBounce=!1,!r.grabCursor||!0!==s.allowSlideNext&&!0!==s.allowSlidePrev||s.setGrabCursor(!0),s.emit("sliderFirstMove",c)),s.emit("sliderMove",c),i.isMoved=!0;let v=s.isHorizontal()?f:g;n.diff=v,v*=r.touchRatio,l&&(v=-v),s.swipeDirection=v>0?"prev":"next",i.currentTranslate=v+i.startTranslate;let w=!0,b=r.resistanceRatio;if(r.touchReleaseOnEdges&&(b=0),v>0&&i.currentTranslate>s.minTranslate()?(w=!1,r.resistance&&(i.currentTranslate=s.minTranslate()-1+(-s.minTranslate()+i.startTranslate+v)**b)):v<0&&i.currentTranslate<s.maxTranslate()&&(w=!1,r.resistance&&(i.currentTranslate=s.maxTranslate()+1-(s.maxTranslate()-i.startTranslate-v)**b)),w&&(c.preventedByNestedSwiper=!0),!s.allowSlideNext&&"next"===s.swipeDirection&&i.currentTranslate<i.startTranslate&&(i.currentTranslate=i.startTranslate),!s.allowSlidePrev&&"prev"===s.swipeDirection&&i.currentTranslate>i.startTranslate&&(i.currentTranslate=i.startTranslate),s.allowSlidePrev||s.allowSlideNext||(i.currentTranslate=i.startTranslate),r.threshold>0){if(!(Math.abs(v)>r.threshold||i.allowThresholdMove))return void(i.currentTranslate=i.startTranslate);if(!i.allowThresholdMove)return i.allowThresholdMove=!0,n.startX=n.currentX,n.startY=n.currentY,i.currentTranslate=i.startTranslate,void(n.diff=s.isHorizontal()?n.currentX-n.startX:n.currentY-n.startY)}r.followFinger&&!r.cssMode&&((r.freeMode&&r.freeMode.enabled&&s.freeMode||r.watchSlidesProgress)&&(s.updateActiveIndex(),s.updateSlidesClasses()),s.params.freeMode&&r.freeMode.enabled&&s.freeMode&&s.freeMode.onTouchMove(),s.updateProgress(i.currentTranslate),s.setTranslate(i.currentTranslate))}function I(e){const t=this,s=t.touchEventsData,{params:a,touches:i,rtlTranslate:r,slidesGrid:n,enabled:l}=t;if(!l)return;let o=e;if(o.originalEvent&&(o=o.originalEvent),s.allowTouchCallbacks&&t.emit("touchEnd",o),s.allowTouchCallbacks=!1,!s.isTouched)return s.isMoved&&a.grabCursor&&t.setGrabCursor(!1),s.isMoved=!1,void(s.startMoving=!1);a.grabCursor&&s.isMoved&&s.isTouched&&(!0===t.allowSlideNext||!0===t.allowSlidePrev)&&t.setGrabCursor(!1);const d=u(),c=d-s.touchStartTime;if(t.allowClick){const e=o.path||o.composedPath&&o.composedPath();t.updateClickedSlide(e&&e[0]||o.target),t.emit("tap click",o),c<300&&d-s.lastClickTime<300&&t.emit("doubleTap doubleClick",o)}if(s.lastClickTime=u(),p((()=>{t.destroyed||(t.allowClick=!0)})),!s.isTouched||!s.isMoved||!t.swipeDirection||0===i.diff||s.currentTranslate===s.startTranslate)return s.isTouched=!1,s.isMoved=!1,void(s.startMoving=!1);let h;if(s.isTouched=!1,s.isMoved=!1,s.startMoving=!1,h=a.followFinger?r?t.translate:-t.translate:-s.currentTranslate,a.cssMode)return;if(t.params.freeMode&&a.freeMode.enabled)return void t.freeMode.onTouchEnd({currentPos:h});let m=0,f=t.slidesSizesGrid[0];for(let e=0;e<n.length;e+=e<a.slidesPerGroupSkip?1:a.slidesPerGroup){const t=e<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;void 0!==n[e+t]?h>=n[e]&&h<n[e+t]&&(m=e,f=n[e+t]-n[e]):h>=n[e]&&(m=e,f=n[n.length-1]-n[n.length-2])}let g=null,v=null;a.rewind&&(t.isBeginning?v=t.params.virtual&&t.params.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(g=0));const w=(h-n[m])/f,b=m<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;if(c>a.longSwipesMs){if(!a.longSwipes)return void t.slideTo(t.activeIndex);"next"===t.swipeDirection&&(w>=a.longSwipesRatio?t.slideTo(a.rewind&&t.isEnd?g:m+b):t.slideTo(m)),"prev"===t.swipeDirection&&(w>1-a.longSwipesRatio?t.slideTo(m+b):null!==v&&w<0&&Math.abs(w)>a.longSwipesRatio?t.slideTo(v):t.slideTo(m))}else{if(!a.shortSwipes)return void t.slideTo(t.activeIndex);t.navigation&&(o.target===t.navigation.nextEl||o.target===t.navigation.prevEl)?o.target===t.navigation.nextEl?t.slideTo(m+b):t.slideTo(m):("next"===t.swipeDirection&&t.slideTo(null!==g?g:m+b),"prev"===t.swipeDirection&&t.slideTo(null!==v?v:m))}}function A(){const e=this,{params:t,el:s}=e;if(s&&0===s.offsetWidth)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:a,allowSlidePrev:i,snapGrid:r}=e;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses(),("auto"===t.slidesPerView||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides?e.slideTo(e.slides.length-1,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.run(),e.allowSlidePrev=i,e.allowSlideNext=a,e.params.watchOverflow&&r!==e.snapGrid&&e.checkOverflow()}function D(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function G(){const e=this,{wrapperEl:t,rtlTranslate:s,enabled:a}=e;if(!a)return;let i;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,0===e.translate&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();const r=e.maxTranslate()-e.minTranslate();i=0===r?0:(e.translate-e.minTranslate())/r,i!==e.progress&&e.updateProgress(s?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}let N=!1;function B(){}const H=(e,t)=>{const s=a(),{params:i,touchEvents:r,el:n,wrapperEl:l,device:o,support:d}=e,c=!!i.nested,p="on"===t?"addEventListener":"removeEventListener",u=t;if(d.touch){const t=!("touchstart"!==r.start||!d.passiveListener||!i.passiveListeners)&&{passive:!0,capture:!1};n[p](r.start,e.onTouchStart,t),n[p](r.move,e.onTouchMove,d.passiveListener?{passive:!1,capture:c}:c),n[p](r.end,e.onTouchEnd,t),r.cancel&&n[p](r.cancel,e.onTouchEnd,t)}else n[p](r.start,e.onTouchStart,!1),s[p](r.move,e.onTouchMove,c),s[p](r.end,e.onTouchEnd,!1);(i.preventClicks||i.preventClicksPropagation)&&n[p]("click",e.onClick,!0),i.cssMode&&l[p]("scroll",e.onScroll),i.updateOnWindowResize?e[u](o.ios||o.android?"resize orientationchange observerUpdate":"resize observerUpdate",A,!0):e[u]("observerUpdate",A,!0)};var X={attachEvents:function(){const e=this,t=a(),{params:s,support:i}=e;e.onTouchStart=L.bind(e),e.onTouchMove=O.bind(e),e.onTouchEnd=I.bind(e),s.cssMode&&(e.onScroll=G.bind(e)),e.onClick=D.bind(e),i.touch&&!N&&(t.addEventListener("touchstart",B),N=!0),H(e,"on")},detachEvents:function(){H(this,"off")}};const Y=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;var R={addClasses:function(){const e=this,{classNames:t,params:s,rtl:a,$el:i,device:r,support:n}=e,l=function(e,t){const s=[];return e.forEach((e=>{"object"==typeof e?Object.keys(e).forEach((a=>{e[a]&&s.push(t+a)})):"string"==typeof e&&s.push(t+e)})),s}(["initialized",s.direction,{"pointer-events":!n.touch},{"free-mode":e.params.freeMode&&s.freeMode.enabled},{autoheight:s.autoHeight},{rtl:a},{grid:s.grid&&s.grid.rows>1},{"grid-column":s.grid&&s.grid.rows>1&&"column"===s.grid.fill},{android:r.android},{ios:r.ios},{"css-mode":s.cssMode},{centered:s.cssMode&&s.centeredSlides},{"watch-progress":s.watchSlidesProgress}],s.containerModifierClass);t.push(...l),i.addClass([...t].join(" ")),e.emitContainerClasses()},removeClasses:function(){const{$el:e,classNames:t}=this;e.removeClass(t.join(" ")),this.emitContainerClasses()}};var W={init:!0,direction:"horizontal",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:0,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,loopedSlidesLimit:!0,loopFillGroupWithBlank:!1,loopPreventsSlide:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-invisible-blank",slideActiveClass:"swiper-slide-active",slideDuplicateActiveClass:"swiper-slide-duplicate-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slideDuplicateNextClass:"swiper-slide-duplicate-next",slidePrevClass:"swiper-slide-prev",slideDuplicatePrevClass:"swiper-slide-duplicate-prev",wrapperClass:"swiper-wrapper",runCallbacksOnInit:!0,_emitClasses:!1};function q(e,t){return function(s){void 0===s&&(s={});const a=Object.keys(s)[0],i=s[a];"object"==typeof i&&null!==i?(["navigation","pagination","scrollbar"].indexOf(a)>=0&&!0===e[a]&&(e[a]={auto:!0}),a in e&&"enabled"in i?(!0===e[a]&&(e[a]={enabled:!0}),"object"!=typeof e[a]||"enabled"in e[a]||(e[a].enabled=!0),e[a]||(e[a]={enabled:!1}),g(t,s)):g(t,s)):g(t,s)}}const j={eventsEmitter:$,update:S,translate:M,transition:{setTransition:function(e,t){const s=this;s.params.cssMode||s.$wrapperEl.transition(e),s.emit("setTransition",e,t)},transitionStart:function(e,t){void 0===e&&(e=!0);const s=this,{params:a}=s;a.cssMode||(a.autoHeight&&s.updateAutoHeight(),P({swiper:s,runCallbacks:e,direction:t,step:"Start"}))},transitionEnd:function(e,t){void 0===e&&(e=!0);const s=this,{params:a}=s;s.animating=!1,a.cssMode||(s.setTransition(0),P({swiper:s,runCallbacks:e,direction:t,step:"End"}))}},slide:k,loop:z,grabCursor:{setGrabCursor:function(e){const t=this;if(t.support.touch||!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const s="container"===t.params.touchEventsTarget?t.el:t.wrapperEl;s.style.cursor="move",s.style.cursor=e?"grabbing":"grab"},unsetGrabCursor:function(){const e=this;e.support.touch||e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e["container"===e.params.touchEventsTarget?"el":"wrapperEl"].style.cursor="")}},events:X,breakpoints:{setBreakpoint:function(){const e=this,{activeIndex:t,initialized:s,loopedSlides:a=0,params:i,$el:r}=e,n=i.breakpoints;if(!n||n&&0===Object.keys(n).length)return;const l=e.getBreakpoint(n,e.params.breakpointsBase,e.el);if(!l||e.currentBreakpoint===l)return;const o=(l in n?n[l]:void 0)||e.originalParams,d=Y(e,i),c=Y(e,o),p=i.enabled;d&&!c?(r.removeClass(`${i.containerModifierClass}grid ${i.containerModifierClass}grid-column`),e.emitContainerClasses()):!d&&c&&(r.addClass(`${i.containerModifierClass}grid`),(o.grid.fill&&"column"===o.grid.fill||!o.grid.fill&&"column"===i.grid.fill)&&r.addClass(`${i.containerModifierClass}grid-column`),e.emitContainerClasses()),["navigation","pagination","scrollbar"].forEach((t=>{const s=i[t]&&i[t].enabled,a=o[t]&&o[t].enabled;s&&!a&&e[t].disable(),!s&&a&&e[t].enable()}));const u=o.direction&&o.direction!==i.direction,h=i.loop&&(o.slidesPerView!==i.slidesPerView||u);u&&s&&e.changeDirection(),g(e.params,o);const m=e.params.enabled;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),p&&!m?e.disable():!p&&m&&e.enable(),e.currentBreakpoint=l,e.emit("_beforeBreakpoint",o),h&&s&&(e.loopDestroy(),e.loopCreate(),e.updateSlides(),e.slideTo(t-a+e.loopedSlides,0,!1)),e.emit("breakpoint",o)},getBreakpoint:function(e,t,s){if(void 0===t&&(t="window"),!e||"container"===t&&!s)return;let a=!1;const i=r(),n="window"===t?i.innerHeight:s.clientHeight,l=Object.keys(e).map((e=>{if("string"==typeof e&&0===e.indexOf("@")){const t=parseFloat(e.substr(1));return{value:n*t,point:e}}return{value:e,point:e}}));l.sort(((e,t)=>parseInt(e.value,10)-parseInt(t.value,10)));for(let e=0;e<l.length;e+=1){const{point:r,value:n}=l[e];"window"===t?i.matchMedia(`(min-width: ${n}px)`).matches&&(a=r):n<=s.clientWidth&&(a=r)}return a||"max"}},checkOverflow:{checkOverflow:function(){const e=this,{isLocked:t,params:s}=e,{slidesOffsetBefore:a}=s;if(a){const t=e.slides.length-1,s=e.slidesGrid[t]+e.slidesSizesGrid[t]+2*a;e.isLocked=e.size>s}else e.isLocked=1===e.snapGrid.length;!0===s.allowSlideNext&&(e.allowSlideNext=!e.isLocked),!0===s.allowSlidePrev&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}},classes:R,images:{loadImage:function(e,t,s,a,i,n){const l=r();let o;function c(){n&&n()}d(e).parent("picture")[0]||e.complete&&i?c():t?(o=new l.Image,o.onload=c,o.onerror=c,a&&(o.sizes=a),s&&(o.srcset=s),t&&(o.src=t)):c()},preloadImages:function(){const e=this;function t(){null!=e&&e&&!e.destroyed&&(void 0!==e.imagesLoaded&&(e.imagesLoaded+=1),e.imagesLoaded===e.imagesToLoad.length&&(e.params.updateOnImagesReady&&e.update(),e.emit("imagesReady")))}e.imagesToLoad=e.$el.find("img");for(let s=0;s<e.imagesToLoad.length;s+=1){const a=e.imagesToLoad[s];e.loadImage(a,a.currentSrc||a.getAttribute("src"),a.srcset||a.getAttribute("srcset"),a.sizes||a.getAttribute("sizes"),!0,t)}}}},_={};class V{constructor(){let e,t;for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];if(1===a.length&&a[0].constructor&&"Object"===Object.prototype.toString.call(a[0]).slice(8,-1)?t=a[0]:[e,t]=a,t||(t={}),t=g({},t),e&&!t.el&&(t.el=e),t.el&&d(t.el).length>1){const e=[];return d(t.el).each((s=>{const a=g({},t,{el:s});e.push(new V(a))})),e}const r=this;r.__swiper__=!0,r.support=E(),r.device=C({userAgent:t.userAgent}),r.browser=T(),r.eventsListeners={},r.eventsAnyListeners=[],r.modules=[...r.__modules__],t.modules&&Array.isArray(t.modules)&&r.modules.push(...t.modules);const n={};r.modules.forEach((e=>{e({swiper:r,extendParams:q(t,n),on:r.on.bind(r),once:r.once.bind(r),off:r.off.bind(r),emit:r.emit.bind(r)})}));const l=g({},W,n);return r.params=g({},l,_,t),r.originalParams=g({},r.params),r.passedParams=g({},t),r.params&&r.params.on&&Object.keys(r.params.on).forEach((e=>{r.on(e,r.params.on[e])})),r.params&&r.params.onAny&&r.onAny(r.params.onAny),r.$=d,Object.assign(r,{enabled:r.params.enabled,el:e,classNames:[],slides:d(),slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal:()=>"horizontal"===r.params.direction,isVertical:()=>"vertical"===r.params.direction,activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,allowSlideNext:r.params.allowSlideNext,allowSlidePrev:r.params.allowSlidePrev,touchEvents:function(){const e=["touchstart","touchmove","touchend","touchcancel"],t=["pointerdown","pointermove","pointerup"];return r.touchEventsTouch={start:e[0],move:e[1],end:e[2],cancel:e[3]},r.touchEventsDesktop={start:t[0],move:t[1],end:t[2]},r.support.touch||!r.params.simulateTouch?r.touchEventsTouch:r.touchEventsDesktop}(),touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:r.params.focusableElements,lastClickTime:u(),clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,isTouchEvent:void 0,startMoving:void 0},allowClick:!0,allowTouchMove:r.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),r.emit("_swiper"),r.params.init&&r.init(),r}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,t){const s=this;e=Math.min(Math.max(e,0),1);const a=s.minTranslate(),i=(s.maxTranslate()-a)*e+a;s.translateTo(i,void 0===t?0:t),s.updateActiveIndex(),s.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=e.el.className.split(" ").filter((t=>0===t.indexOf("swiper")||0===t.indexOf(e.params.containerModifierClass)));e.emit("_containerClasses",t.join(" "))}getSlideClasses(e){const t=this;return t.destroyed?"":e.className.split(" ").filter((e=>0===e.indexOf("swiper-slide")||0===e.indexOf(t.params.slideClass))).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=[];e.slides.each((s=>{const a=e.getSlideClasses(s);t.push({slideEl:s,classNames:a}),e.emit("_slideClass",s,a)})),e.emit("_slideClasses",t)}slidesPerViewDynamic(e,t){void 0===e&&(e="current"),void 0===t&&(t=!1);const{params:s,slides:a,slidesGrid:i,slidesSizesGrid:r,size:n,activeIndex:l}=this;let o=1;if(s.centeredSlides){let e,t=a[l].swiperSlideSize;for(let s=l+1;s<a.length;s+=1)a[s]&&!e&&(t+=a[s].swiperSlideSize,o+=1,t>n&&(e=!0));for(let s=l-1;s>=0;s-=1)a[s]&&!e&&(t+=a[s].swiperSlideSize,o+=1,t>n&&(e=!0))}else if("current"===e)for(let e=l+1;e<a.length;e+=1){(t?i[e]+r[e]-i[l]<n:i[e]-i[l]<n)&&(o+=1)}else for(let e=l-1;e>=0;e-=1){i[l]-i[e]<n&&(o+=1)}return o}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:t,params:s}=e;function a(){const t=e.rtlTranslate?-1*e.translate:e.translate,s=Math.min(Math.max(t,e.maxTranslate()),e.minTranslate());e.setTranslate(s),e.updateActiveIndex(),e.updateSlidesClasses()}let i;s.breakpoints&&e.setBreakpoint(),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.params.freeMode&&e.params.freeMode.enabled?(a(),e.params.autoHeight&&e.updateAutoHeight()):(i=("auto"===e.params.slidesPerView||e.params.slidesPerView>1)&&e.isEnd&&!e.params.centeredSlides?e.slideTo(e.slides.length-1,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),i||a()),s.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,t){void 0===t&&(t=!0);const s=this,a=s.params.direction;return e||(e="horizontal"===a?"vertical":"horizontal"),e===a||"horizontal"!==e&&"vertical"!==e||(s.$el.removeClass(`${s.params.containerModifierClass}${a}`).addClass(`${s.params.containerModifierClass}${e}`),s.emitContainerClasses(),s.params.direction=e,s.slides.each((t=>{"vertical"===e?t.style.width="":t.style.height=""})),s.emit("changeDirection"),t&&s.update()),s}changeLanguageDirection(e){const t=this;t.rtl&&"rtl"===e||!t.rtl&&"ltr"===e||(t.rtl="rtl"===e,t.rtlTranslate="horizontal"===t.params.direction&&t.rtl,t.rtl?(t.$el.addClass(`${t.params.containerModifierClass}rtl`),t.el.dir="rtl"):(t.$el.removeClass(`${t.params.containerModifierClass}rtl`),t.el.dir="ltr"),t.update())}mount(e){const t=this;if(t.mounted)return!0;const s=d(e||t.params.el);if(!(e=s[0]))return!1;e.swiper=t;const i=()=>`.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;let r=(()=>{if(e&&e.shadowRoot&&e.shadowRoot.querySelector){const t=d(e.shadowRoot.querySelector(i()));return t.children=e=>s.children(e),t}return s.children?s.children(i()):d(s).children(i())})();if(0===r.length&&t.params.createElements){const e=a().createElement("div");r=d(e),e.className=t.params.wrapperClass,s.append(e),s.children(`.${t.params.slideClass}`).each((e=>{r.append(e)}))}return Object.assign(t,{$el:s,el:e,$wrapperEl:r,wrapperEl:r[0],mounted:!0,rtl:"rtl"===e.dir.toLowerCase()||"rtl"===s.css("direction"),rtlTranslate:"horizontal"===t.params.direction&&("rtl"===e.dir.toLowerCase()||"rtl"===s.css("direction")),wrongRTL:"-webkit-box"===r.css("display")}),!0}init(e){const t=this;if(t.initialized)return t;return!1===t.mount(e)||(t.emit("beforeInit"),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.params.loop&&t.loopCreate(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.preloadImages&&t.preloadImages(),t.params.loop?t.slideTo(t.params.initialSlide+t.loopedSlides,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.attachEvents(),t.initialized=!0,t.emit("init"),t.emit("afterInit")),t}destroy(e,t){void 0===e&&(e=!0),void 0===t&&(t=!0);const s=this,{params:a,$el:i,$wrapperEl:r,slides:n}=s;return void 0===s.params||s.destroyed||(s.emit("beforeDestroy"),s.initialized=!1,s.detachEvents(),a.loop&&s.loopDestroy(),t&&(s.removeClasses(),i.removeAttr("style"),r.removeAttr("style"),n&&n.length&&n.removeClass([a.slideVisibleClass,a.slideActiveClass,a.slideNextClass,a.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")),s.emit("destroy"),Object.keys(s.eventsListeners).forEach((e=>{s.off(e)})),!1!==e&&(s.$el[0].swiper=null,function(e){const t=e;Object.keys(t).forEach((e=>{try{t[e]=null}catch(e){}try{delete t[e]}catch(e){}}))}(s)),s.destroyed=!0),null}static extendDefaults(e){g(_,e)}static get extendedDefaults(){return _}static get defaults(){return W}static installModule(e){V.prototype.__modules__||(V.prototype.__modules__=[]);const t=V.prototype.__modules__;"function"==typeof e&&t.indexOf(e)<0&&t.push(e)}static use(e){return Array.isArray(e)?(e.forEach((e=>V.installModule(e))),V):(V.installModule(e),V)}}function F(e,t,s,i){const r=a();return e.params.createElements&&Object.keys(i).forEach((a=>{if(!s[a]&&!0===s.auto){let n=e.$el.children(`.${i[a]}`)[0];n||(n=r.createElement("div"),n.className=i[a],e.$el.append(n)),s[a]=n,t[a]=n}})),s}function U(e){return void 0===e&&(e=""),`.${e.trim().replace(/([\.:!\/])/g,"\\$1").replace(/ /g,".")}`}function K(e){const t=this,{$wrapperEl:s,params:a}=t;if(a.loop&&t.loopDestroy(),"object"==typeof e&&"length"in e)for(let t=0;t<e.length;t+=1)e[t]&&s.append(e[t]);else s.append(e);a.loop&&t.loopCreate(),a.observer||t.update()}function Z(e){const t=this,{params:s,$wrapperEl:a,activeIndex:i}=t;s.loop&&t.loopDestroy();let r=i+1;if("object"==typeof e&&"length"in e){for(let t=0;t<e.length;t+=1)e[t]&&a.prepend(e[t]);r=i+e.length}else a.prepend(e);s.loop&&t.loopCreate(),s.observer||t.update(),t.slideTo(r,0,!1)}function Q(e,t){const s=this,{$wrapperEl:a,params:i,activeIndex:r}=s;let n=r;i.loop&&(n-=s.loopedSlides,s.loopDestroy(),s.slides=a.children(`.${i.slideClass}`));const l=s.slides.length;if(e<=0)return void s.prependSlide(t);if(e>=l)return void s.appendSlide(t);let o=n>e?n+1:n;const d=[];for(let t=l-1;t>=e;t-=1){const e=s.slides.eq(t);e.remove(),d.unshift(e)}if("object"==typeof t&&"length"in t){for(let e=0;e<t.length;e+=1)t[e]&&a.append(t[e]);o=n>e?n+t.length:n}else a.append(t);for(let e=0;e<d.length;e+=1)a.append(d[e]);i.loop&&s.loopCreate(),i.observer||s.update(),i.loop?s.slideTo(o+s.loopedSlides,0,!1):s.slideTo(o,0,!1)}function J(e){const t=this,{params:s,$wrapperEl:a,activeIndex:i}=t;let r=i;s.loop&&(r-=t.loopedSlides,t.loopDestroy(),t.slides=a.children(`.${s.slideClass}`));let n,l=r;if("object"==typeof e&&"length"in e){for(let s=0;s<e.length;s+=1)n=e[s],t.slides[n]&&t.slides.eq(n).remove(),n<l&&(l-=1);l=Math.max(l,0)}else n=e,t.slides[n]&&t.slides.eq(n).remove(),n<l&&(l-=1),l=Math.max(l,0);s.loop&&t.loopCreate(),s.observer||t.update(),s.loop?t.slideTo(l+t.loopedSlides,0,!1):t.slideTo(l,0,!1)}function ee(){const e=this,t=[];for(let s=0;s<e.slides.length;s+=1)t.push(s);e.removeSlide(t)}function te(e){const{effect:t,swiper:s,on:a,setTranslate:i,setTransition:r,overwriteParams:n,perspective:l,recreateShadows:o,getEffectParams:d}=e;let c;a("beforeInit",(()=>{if(s.params.effect!==t)return;s.classNames.push(`${s.params.containerModifierClass}${t}`),l&&l()&&s.classNames.push(`${s.params.containerModifierClass}3d`);const e=n?n():{};Object.assign(s.params,e),Object.assign(s.originalParams,e)})),a("setTranslate",(()=>{s.params.effect===t&&i()})),a("setTransition",((e,a)=>{s.params.effect===t&&r(a)})),a("transitionEnd",(()=>{if(s.params.effect===t&&o){if(!d||!d().slideShadows)return;s.slides.each((e=>{s.$(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").remove()})),o()}})),a("virtualUpdate",(()=>{s.params.effect===t&&(s.slides.length||(c=!0),requestAnimationFrame((()=>{c&&s.slides&&s.slides.length&&(i(),c=!1)})))}))}function se(e,t){return e.transformEl?t.find(e.transformEl).css({"backface-visibility":"hidden","-webkit-backface-visibility":"hidden"}):t}function ae(e){let{swiper:t,duration:s,transformEl:a,allSlides:i}=e;const{slides:r,activeIndex:n,$wrapperEl:l}=t;if(t.params.virtualTranslate&&0!==s){let e,s=!1;e=i?a?r.find(a):r:a?r.eq(n).find(a):r.eq(n),e.transitionEnd((()=>{if(s)return;if(!t||t.destroyed)return;s=!0,t.animating=!1;const e=["webkitTransitionEnd","transitionend"];for(let t=0;t<e.length;t+=1)l.trigger(e[t])}))}}function ie(e,t,s){const a="swiper-slide-shadow"+(s?`-${s}`:""),i=e.transformEl?t.find(e.transformEl):t;let r=i.children(`.${a}`);return r.length||(r=d(`<div class="swiper-slide-shadow${s?`-${s}`:""}"></div>`),i.append(r)),r}Object.keys(j).forEach((e=>{Object.keys(j[e]).forEach((t=>{V.prototype[t]=j[e][t]}))})),V.use([function(e){let{swiper:t,on:s,emit:a}=e;const i=r();let n=null,l=null;const o=()=>{t&&!t.destroyed&&t.initialized&&(a("beforeResize"),a("resize"))},d=()=>{t&&!t.destroyed&&t.initialized&&a("orientationchange")};s("init",(()=>{t.params.resizeObserver&&void 0!==i.ResizeObserver?t&&!t.destroyed&&t.initialized&&(n=new ResizeObserver((e=>{l=i.requestAnimationFrame((()=>{const{width:s,height:a}=t;let i=s,r=a;e.forEach((e=>{let{contentBoxSize:s,contentRect:a,target:n}=e;n&&n!==t.el||(i=a?a.width:(s[0]||s).inlineSize,r=a?a.height:(s[0]||s).blockSize)})),i===s&&r===a||o()}))})),n.observe(t.el)):(i.addEventListener("resize",o),i.addEventListener("orientationchange",d))})),s("destroy",(()=>{l&&i.cancelAnimationFrame(l),n&&n.unobserve&&t.el&&(n.unobserve(t.el),n=null),i.removeEventListener("resize",o),i.removeEventListener("orientationchange",d)}))},function(e){let{swiper:t,extendParams:s,on:a,emit:i}=e;const n=[],l=r(),o=function(e,t){void 0===t&&(t={});const s=new(l.MutationObserver||l.WebkitMutationObserver)((e=>{if(1===e.length)return void i("observerUpdate",e[0]);const t=function(){i("observerUpdate",e[0])};l.requestAnimationFrame?l.requestAnimationFrame(t):l.setTimeout(t,0)}));s.observe(e,{attributes:void 0===t.attributes||t.attributes,childList:void 0===t.childList||t.childList,characterData:void 0===t.characterData||t.characterData}),n.push(s)};s({observer:!1,observeParents:!1,observeSlideChildren:!1}),a("init",(()=>{if(t.params.observer){if(t.params.observeParents){const e=t.$el.parents();for(let t=0;t<e.length;t+=1)o(e[t])}o(t.$el[0],{childList:t.params.observeSlideChildren}),o(t.$wrapperEl[0],{attributes:!1})}})),a("destroy",(()=>{n.forEach((e=>{e.disconnect()})),n.splice(0,n.length)}))}]);const re=[function(e){let t,{swiper:s,extendParams:a,on:i,emit:r}=e;function n(e,t){const a=s.params.virtual;if(a.cache&&s.virtual.cache[t])return s.virtual.cache[t];const i=a.renderSlide?d(a.renderSlide.call(s,e,t)):d(`<div class="${s.params.slideClass}" data-swiper-slide-index="${t}">${e}</div>`);return i.attr("data-swiper-slide-index")||i.attr("data-swiper-slide-index",t),a.cache&&(s.virtual.cache[t]=i),i}function l(e){const{slidesPerView:t,slidesPerGroup:a,centeredSlides:i}=s.params,{addSlidesBefore:l,addSlidesAfter:o}=s.params.virtual,{from:d,to:c,slides:p,slidesGrid:u,offset:h}=s.virtual;s.params.cssMode||s.updateActiveIndex();const m=s.activeIndex||0;let f,g,v;f=s.rtlTranslate?"right":s.isHorizontal()?"left":"top",i?(g=Math.floor(t/2)+a+o,v=Math.floor(t/2)+a+l):(g=t+(a-1)+o,v=a+l);const w=Math.max((m||0)-v,0),b=Math.min((m||0)+g,p.length-1),x=(s.slidesGrid[w]||0)-(s.slidesGrid[0]||0);function y(){s.updateSlides(),s.updateProgress(),s.updateSlidesClasses(),s.lazy&&s.params.lazy.enabled&&s.lazy.load(),r("virtualUpdate")}if(Object.assign(s.virtual,{from:w,to:b,offset:x,slidesGrid:s.slidesGrid}),d===w&&c===b&&!e)return s.slidesGrid!==u&&x!==h&&s.slides.css(f,`${x}px`),s.updateProgress(),void r("virtualUpdate");if(s.params.virtual.renderExternal)return s.params.virtual.renderExternal.call(s,{offset:x,from:w,to:b,slides:function(){const e=[];for(let t=w;t<=b;t+=1)e.push(p[t]);return e}()}),void(s.params.virtual.renderExternalUpdate?y():r("virtualUpdate"));const E=[],C=[];if(e)s.$wrapperEl.find(`.${s.params.slideClass}`).remove();else for(let e=d;e<=c;e+=1)(e<w||e>b)&&s.$wrapperEl.find(`.${s.params.slideClass}[data-swiper-slide-index="${e}"]`).remove();for(let t=0;t<p.length;t+=1)t>=w&&t<=b&&(void 0===c||e?C.push(t):(t>c&&C.push(t),t<d&&E.push(t)));C.forEach((e=>{s.$wrapperEl.append(n(p[e],e))})),E.sort(((e,t)=>t-e)).forEach((e=>{s.$wrapperEl.prepend(n(p[e],e))})),s.$wrapperEl.children(".swiper-slide").css(f,`${x}px`),y()}a({virtual:{enabled:!1,slides:[],cache:!0,renderSlide:null,renderExternal:null,renderExternalUpdate:!0,addSlidesBefore:0,addSlidesAfter:0}}),s.virtual={cache:{},from:void 0,to:void 0,slides:[],offset:0,slidesGrid:[]},i("beforeInit",(()=>{s.params.virtual.enabled&&(s.virtual.slides=s.params.virtual.slides,s.classNames.push(`${s.params.containerModifierClass}virtual`),s.params.watchSlidesProgress=!0,s.originalParams.watchSlidesProgress=!0,s.params.initialSlide||l())})),i("setTranslate",(()=>{s.params.virtual.enabled&&(s.params.cssMode&&!s._immediateVirtual?(clearTimeout(t),t=setTimeout((()=>{l()}),100)):l())})),i("init update resize",(()=>{s.params.virtual.enabled&&s.params.cssMode&&v(s.wrapperEl,"--swiper-virtual-size",`${s.virtualSize}px`)})),Object.assign(s.virtual,{appendSlide:function(e){if("object"==typeof e&&"length"in e)for(let t=0;t<e.length;t+=1)e[t]&&s.virtual.slides.push(e[t]);else s.virtual.slides.push(e);l(!0)},prependSlide:function(e){const t=s.activeIndex;let a=t+1,i=1;if(Array.isArray(e)){for(let t=0;t<e.length;t+=1)e[t]&&s.virtual.slides.unshift(e[t]);a=t+e.length,i=e.length}else s.virtual.slides.unshift(e);if(s.params.virtual.cache){const e=s.virtual.cache,t={};Object.keys(e).forEach((s=>{const a=e[s],r=a.attr("data-swiper-slide-index");r&&a.attr("data-swiper-slide-index",parseInt(r,10)+i),t[parseInt(s,10)+i]=a})),s.virtual.cache=t}l(!0),s.slideTo(a,0)},removeSlide:function(e){if(null==e)return;let t=s.activeIndex;if(Array.isArray(e))for(let a=e.length-1;a>=0;a-=1)s.virtual.slides.splice(e[a],1),s.params.virtual.cache&&delete s.virtual.cache[e[a]],e[a]<t&&(t-=1),t=Math.max(t,0);else s.virtual.slides.splice(e,1),s.params.virtual.cache&&delete s.virtual.cache[e],e<t&&(t-=1),t=Math.max(t,0);l(!0),s.slideTo(t,0)},removeAllSlides:function(){s.virtual.slides=[],s.params.virtual.cache&&(s.virtual.cache={}),l(!0),s.slideTo(0,0)},update:l})},function(e){let{swiper:t,extendParams:s,on:i,emit:n}=e;const l=a(),o=r();function c(e){if(!t.enabled)return;const{rtlTranslate:s}=t;let a=e;a.originalEvent&&(a=a.originalEvent);const i=a.keyCode||a.charCode,r=t.params.keyboard.pageUpDown,d=r&&33===i,c=r&&34===i,p=37===i,u=39===i,h=38===i,m=40===i;if(!t.allowSlideNext&&(t.isHorizontal()&&u||t.isVertical()&&m||c))return!1;if(!t.allowSlidePrev&&(t.isHorizontal()&&p||t.isVertical()&&h||d))return!1;if(!(a.shiftKey||a.altKey||a.ctrlKey||a.metaKey||l.activeElement&&l.activeElement.nodeName&&("input"===l.activeElement.nodeName.toLowerCase()||"textarea"===l.activeElement.nodeName.toLowerCase()))){if(t.params.keyboard.onlyInViewport&&(d||c||p||u||h||m)){let e=!1;if(t.$el.parents(`.${t.params.slideClass}`).length>0&&0===t.$el.parents(`.${t.params.slideActiveClass}`).length)return;const a=t.$el,i=a[0].clientWidth,r=a[0].clientHeight,n=o.innerWidth,l=o.innerHeight,d=t.$el.offset();s&&(d.left-=t.$el[0].scrollLeft);const c=[[d.left,d.top],[d.left+i,d.top],[d.left,d.top+r],[d.left+i,d.top+r]];for(let t=0;t<c.length;t+=1){const s=c[t];if(s[0]>=0&&s[0]<=n&&s[1]>=0&&s[1]<=l){if(0===s[0]&&0===s[1])continue;e=!0}}if(!e)return}t.isHorizontal()?((d||c||p||u)&&(a.preventDefault?a.preventDefault():a.returnValue=!1),((c||u)&&!s||(d||p)&&s)&&t.slideNext(),((d||p)&&!s||(c||u)&&s)&&t.slidePrev()):((d||c||h||m)&&(a.preventDefault?a.preventDefault():a.returnValue=!1),(c||m)&&t.slideNext(),(d||h)&&t.slidePrev()),n("keyPress",i)}}function p(){t.keyboard.enabled||(d(l).on("keydown",c),t.keyboard.enabled=!0)}function u(){t.keyboard.enabled&&(d(l).off("keydown",c),t.keyboard.enabled=!1)}t.keyboard={enabled:!1},s({keyboard:{enabled:!1,onlyInViewport:!0,pageUpDown:!0}}),i("init",(()=>{t.params.keyboard.enabled&&p()})),i("destroy",(()=>{t.keyboard.enabled&&u()})),Object.assign(t.keyboard,{enable:p,disable:u})},function(e){let{swiper:t,extendParams:s,on:a,emit:i}=e;const n=r();let l;s({mousewheel:{enabled:!1,releaseOnEdges:!1,invert:!1,forceToAxis:!1,sensitivity:1,eventsTarget:"container",thresholdDelta:null,thresholdTime:null}}),t.mousewheel={enabled:!1};let o,c=u();const h=[];function m(){t.enabled&&(t.mouseEntered=!0)}function f(){t.enabled&&(t.mouseEntered=!1)}function g(e){return!(t.params.mousewheel.thresholdDelta&&e.delta<t.params.mousewheel.thresholdDelta)&&(!(t.params.mousewheel.thresholdTime&&u()-c<t.params.mousewheel.thresholdTime)&&(e.delta>=6&&u()-c<60||(e.direction<0?t.isEnd&&!t.params.loop||t.animating||(t.slideNext(),i("scroll",e.raw)):t.isBeginning&&!t.params.loop||t.animating||(t.slidePrev(),i("scroll",e.raw)),c=(new n.Date).getTime(),!1)))}function v(e){let s=e,a=!0;if(!t.enabled)return;const r=t.params.mousewheel;t.params.cssMode&&s.preventDefault();let n=t.$el;if("container"!==t.params.mousewheel.eventsTarget&&(n=d(t.params.mousewheel.eventsTarget)),!t.mouseEntered&&!n[0].contains(s.target)&&!r.releaseOnEdges)return!0;s.originalEvent&&(s=s.originalEvent);let c=0;const m=t.rtlTranslate?-1:1,f=function(e){let t=0,s=0,a=0,i=0;return"detail"in e&&(s=e.detail),"wheelDelta"in e&&(s=-e.wheelDelta/120),"wheelDeltaY"in e&&(s=-e.wheelDeltaY/120),"wheelDeltaX"in e&&(t=-e.wheelDeltaX/120),"axis"in e&&e.axis===e.HORIZONTAL_AXIS&&(t=s,s=0),a=10*t,i=10*s,"deltaY"in e&&(i=e.deltaY),"deltaX"in e&&(a=e.deltaX),e.shiftKey&&!a&&(a=i,i=0),(a||i)&&e.deltaMode&&(1===e.deltaMode?(a*=40,i*=40):(a*=800,i*=800)),a&&!t&&(t=a<1?-1:1),i&&!s&&(s=i<1?-1:1),{spinX:t,spinY:s,pixelX:a,pixelY:i}}(s);if(r.forceToAxis)if(t.isHorizontal()){if(!(Math.abs(f.pixelX)>Math.abs(f.pixelY)))return!0;c=-f.pixelX*m}else{if(!(Math.abs(f.pixelY)>Math.abs(f.pixelX)))return!0;c=-f.pixelY}else c=Math.abs(f.pixelX)>Math.abs(f.pixelY)?-f.pixelX*m:-f.pixelY;if(0===c)return!0;r.invert&&(c=-c);let v=t.getTranslate()+c*r.sensitivity;if(v>=t.minTranslate()&&(v=t.minTranslate()),v<=t.maxTranslate()&&(v=t.maxTranslate()),a=!!t.params.loop||!(v===t.minTranslate()||v===t.maxTranslate()),a&&t.params.nested&&s.stopPropagation(),t.params.freeMode&&t.params.freeMode.enabled){const e={time:u(),delta:Math.abs(c),direction:Math.sign(c)},a=o&&e.time<o.time+500&&e.delta<=o.delta&&e.direction===o.direction;if(!a){o=void 0,t.params.loop&&t.loopFix();let n=t.getTranslate()+c*r.sensitivity;const d=t.isBeginning,u=t.isEnd;if(n>=t.minTranslate()&&(n=t.minTranslate()),n<=t.maxTranslate()&&(n=t.maxTranslate()),t.setTransition(0),t.setTranslate(n),t.updateProgress(),t.updateActiveIndex(),t.updateSlidesClasses(),(!d&&t.isBeginning||!u&&t.isEnd)&&t.updateSlidesClasses(),t.params.freeMode.sticky){clearTimeout(l),l=void 0,h.length>=15&&h.shift();const s=h.length?h[h.length-1]:void 0,a=h[0];if(h.push(e),s&&(e.delta>s.delta||e.direction!==s.direction))h.splice(0);else if(h.length>=15&&e.time-a.time<500&&a.delta-e.delta>=1&&e.delta<=6){const s=c>0?.8:.2;o=e,h.splice(0),l=p((()=>{t.slideToClosest(t.params.speed,!0,void 0,s)}),0)}l||(l=p((()=>{o=e,h.splice(0),t.slideToClosest(t.params.speed,!0,void 0,.5)}),500))}if(a||i("scroll",s),t.params.autoplay&&t.params.autoplayDisableOnInteraction&&t.autoplay.stop(),n===t.minTranslate()||n===t.maxTranslate())return!0}}else{const s={time:u(),delta:Math.abs(c),direction:Math.sign(c),raw:e};h.length>=2&&h.shift();const a=h.length?h[h.length-1]:void 0;if(h.push(s),a?(s.direction!==a.direction||s.delta>a.delta||s.time>a.time+150)&&g(s):g(s),function(e){const s=t.params.mousewheel;if(e.direction<0){if(t.isEnd&&!t.params.loop&&s.releaseOnEdges)return!0}else if(t.isBeginning&&!t.params.loop&&s.releaseOnEdges)return!0;return!1}(s))return!0}return s.preventDefault?s.preventDefault():s.returnValue=!1,!1}function w(e){let s=t.$el;"container"!==t.params.mousewheel.eventsTarget&&(s=d(t.params.mousewheel.eventsTarget)),s[e]("mouseenter",m),s[e]("mouseleave",f),s[e]("wheel",v)}function b(){return t.params.cssMode?(t.wrapperEl.removeEventListener("wheel",v),!0):!t.mousewheel.enabled&&(w("on"),t.mousewheel.enabled=!0,!0)}function x(){return t.params.cssMode?(t.wrapperEl.addEventListener(event,v),!0):!!t.mousewheel.enabled&&(w("off"),t.mousewheel.enabled=!1,!0)}a("init",(()=>{!t.params.mousewheel.enabled&&t.params.cssMode&&x(),t.params.mousewheel.enabled&&b()})),a("destroy",(()=>{t.params.cssMode&&b(),t.mousewheel.enabled&&x()})),Object.assign(t.mousewheel,{enable:b,disable:x})},function(e){let{swiper:t,extendParams:s,on:a,emit:i}=e;function r(e){let s;return e&&(s=d(e),t.params.uniqueNavElements&&"string"==typeof e&&s.length>1&&1===t.$el.find(e).length&&(s=t.$el.find(e))),s}function n(e,s){const a=t.params.navigation;e&&e.length>0&&(e[s?"addClass":"removeClass"](a.disabledClass),e[0]&&"BUTTON"===e[0].tagName&&(e[0].disabled=s),t.params.watchOverflow&&t.enabled&&e[t.isLocked?"addClass":"removeClass"](a.lockClass))}function l(){if(t.params.loop)return;const{$nextEl:e,$prevEl:s}=t.navigation;n(s,t.isBeginning&&!t.params.rewind),n(e,t.isEnd&&!t.params.rewind)}function o(e){e.preventDefault(),(!t.isBeginning||t.params.loop||t.params.rewind)&&(t.slidePrev(),i("navigationPrev"))}function c(e){e.preventDefault(),(!t.isEnd||t.params.loop||t.params.rewind)&&(t.slideNext(),i("navigationNext"))}function p(){const e=t.params.navigation;if(t.params.navigation=F(t,t.originalParams.navigation,t.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!e.nextEl&&!e.prevEl)return;const s=r(e.nextEl),a=r(e.prevEl);s&&s.length>0&&s.on("click",c),a&&a.length>0&&a.on("click",o),Object.assign(t.navigation,{$nextEl:s,nextEl:s&&s[0],$prevEl:a,prevEl:a&&a[0]}),t.enabled||(s&&s.addClass(e.lockClass),a&&a.addClass(e.lockClass))}function u(){const{$nextEl:e,$prevEl:s}=t.navigation;e&&e.length&&(e.off("click",c),e.removeClass(t.params.navigation.disabledClass)),s&&s.length&&(s.off("click",o),s.removeClass(t.params.navigation.disabledClass))}s({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),t.navigation={nextEl:null,$nextEl:null,prevEl:null,$prevEl:null},a("init",(()=>{!1===t.params.navigation.enabled?h():(p(),l())})),a("toEdge fromEdge lock unlock",(()=>{l()})),a("destroy",(()=>{u()})),a("enable disable",(()=>{const{$nextEl:e,$prevEl:s}=t.navigation;e&&e[t.enabled?"removeClass":"addClass"](t.params.navigation.lockClass),s&&s[t.enabled?"removeClass":"addClass"](t.params.navigation.lockClass)})),a("click",((e,s)=>{const{$nextEl:a,$prevEl:r}=t.navigation,n=s.target;if(t.params.navigation.hideOnClick&&!d(n).is(r)&&!d(n).is(a)){if(t.pagination&&t.params.pagination&&t.params.pagination.clickable&&(t.pagination.el===n||t.pagination.el.contains(n)))return;let e;a?e=a.hasClass(t.params.navigation.hiddenClass):r&&(e=r.hasClass(t.params.navigation.hiddenClass)),i(!0===e?"navigationShow":"navigationHide"),a&&a.toggleClass(t.params.navigation.hiddenClass),r&&r.toggleClass(t.params.navigation.hiddenClass)}}));const h=()=>{t.$el.addClass(t.params.navigation.navigationDisabledClass),u()};Object.assign(t.navigation,{enable:()=>{t.$el.removeClass(t.params.navigation.navigationDisabledClass),p(),l()},disable:h,update:l,init:p,destroy:u})},function(e){let{swiper:t,extendParams:s,on:a,emit:i}=e;const r="swiper-pagination";let n;s({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:e=>e,formatFractionTotal:e=>e,bulletClass:`${r}-bullet`,bulletActiveClass:`${r}-bullet-active`,modifierClass:`${r}-`,currentClass:`${r}-current`,totalClass:`${r}-total`,hiddenClass:`${r}-hidden`,progressbarFillClass:`${r}-progressbar-fill`,progressbarOppositeClass:`${r}-progressbar-opposite`,clickableClass:`${r}-clickable`,lockClass:`${r}-lock`,horizontalClass:`${r}-horizontal`,verticalClass:`${r}-vertical`,paginationDisabledClass:`${r}-disabled`}}),t.pagination={el:null,$el:null,bullets:[]};let l=0;function o(){return!t.params.pagination.el||!t.pagination.el||!t.pagination.$el||0===t.pagination.$el.length}function c(e,s){const{bulletActiveClass:a}=t.params.pagination;e[s]().addClass(`${a}-${s}`)[s]().addClass(`${a}-${s}-${s}`)}function p(){const e=t.rtl,s=t.params.pagination;if(o())return;const a=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length,r=t.pagination.$el;let p;const u=t.params.loop?Math.ceil((a-2*t.loopedSlides)/t.params.slidesPerGroup):t.snapGrid.length;if(t.params.loop?(p=Math.ceil((t.activeIndex-t.loopedSlides)/t.params.slidesPerGroup),p>a-1-2*t.loopedSlides&&(p-=a-2*t.loopedSlides),p>u-1&&(p-=u),p<0&&"bullets"!==t.params.paginationType&&(p=u+p)):p=void 0!==t.snapIndex?t.snapIndex:t.activeIndex||0,"bullets"===s.type&&t.pagination.bullets&&t.pagination.bullets.length>0){const a=t.pagination.bullets;let i,o,u;if(s.dynamicBullets&&(n=a.eq(0)[t.isHorizontal()?"outerWidth":"outerHeight"](!0),r.css(t.isHorizontal()?"width":"height",n*(s.dynamicMainBullets+4)+"px"),s.dynamicMainBullets>1&&void 0!==t.previousIndex&&(l+=p-(t.previousIndex-t.loopedSlides||0),l>s.dynamicMainBullets-1?l=s.dynamicMainBullets-1:l<0&&(l=0)),i=Math.max(p-l,0),o=i+(Math.min(a.length,s.dynamicMainBullets)-1),u=(o+i)/2),a.removeClass(["","-next","-next-next","-prev","-prev-prev","-main"].map((e=>`${s.bulletActiveClass}${e}`)).join(" ")),r.length>1)a.each((e=>{const t=d(e),a=t.index();a===p&&t.addClass(s.bulletActiveClass),s.dynamicBullets&&(a>=i&&a<=o&&t.addClass(`${s.bulletActiveClass}-main`),a===i&&c(t,"prev"),a===o&&c(t,"next"))}));else{const e=a.eq(p),r=e.index();if(e.addClass(s.bulletActiveClass),s.dynamicBullets){const e=a.eq(i),n=a.eq(o);for(let e=i;e<=o;e+=1)a.eq(e).addClass(`${s.bulletActiveClass}-main`);if(t.params.loop)if(r>=a.length){for(let e=s.dynamicMainBullets;e>=0;e-=1)a.eq(a.length-e).addClass(`${s.bulletActiveClass}-main`);a.eq(a.length-s.dynamicMainBullets-1).addClass(`${s.bulletActiveClass}-prev`)}else c(e,"prev"),c(n,"next");else c(e,"prev"),c(n,"next")}}if(s.dynamicBullets){const i=Math.min(a.length,s.dynamicMainBullets+4),r=(n*i-n)/2-u*n,l=e?"right":"left";a.css(t.isHorizontal()?l:"top",`${r}px`)}}if("fraction"===s.type&&(r.find(U(s.currentClass)).text(s.formatFractionCurrent(p+1)),r.find(U(s.totalClass)).text(s.formatFractionTotal(u))),"progressbar"===s.type){let e;e=s.progressbarOpposite?t.isHorizontal()?"vertical":"horizontal":t.isHorizontal()?"horizontal":"vertical";const a=(p+1)/u;let i=1,n=1;"horizontal"===e?i=a:n=a,r.find(U(s.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${i}) scaleY(${n})`).transition(t.params.speed)}"custom"===s.type&&s.renderCustom?(r.html(s.renderCustom(t,p+1,u)),i("paginationRender",r[0])):i("paginationUpdate",r[0]),t.params.watchOverflow&&t.enabled&&r[t.isLocked?"addClass":"removeClass"](s.lockClass)}function u(){const e=t.params.pagination;if(o())return;const s=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length,a=t.pagination.$el;let r="";if("bullets"===e.type){let i=t.params.loop?Math.ceil((s-2*t.loopedSlides)/t.params.slidesPerGroup):t.snapGrid.length;t.params.freeMode&&t.params.freeMode.enabled&&!t.params.loop&&i>s&&(i=s);for(let s=0;s<i;s+=1)e.renderBullet?r+=e.renderBullet.call(t,s,e.bulletClass):r+=`<${e.bulletElement} class="${e.bulletClass}"></${e.bulletElement}>`;a.html(r),t.pagination.bullets=a.find(U(e.bulletClass))}"fraction"===e.type&&(r=e.renderFraction?e.renderFraction.call(t,e.currentClass,e.totalClass):`<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`,a.html(r)),"progressbar"===e.type&&(r=e.renderProgressbar?e.renderProgressbar.call(t,e.progressbarFillClass):`<span class="${e.progressbarFillClass}"></span>`,a.html(r)),"custom"!==e.type&&i("paginationRender",t.pagination.$el[0])}function h(){t.params.pagination=F(t,t.originalParams.pagination,t.params.pagination,{el:"swiper-pagination"});const e=t.params.pagination;if(!e.el)return;let s=d(e.el);0!==s.length&&(t.params.uniqueNavElements&&"string"==typeof e.el&&s.length>1&&(s=t.$el.find(e.el),s.length>1&&(s=s.filter((e=>d(e).parents(".swiper")[0]===t.el)))),"bullets"===e.type&&e.clickable&&s.addClass(e.clickableClass),s.addClass(e.modifierClass+e.type),s.addClass(t.isHorizontal()?e.horizontalClass:e.verticalClass),"bullets"===e.type&&e.dynamicBullets&&(s.addClass(`${e.modifierClass}${e.type}-dynamic`),l=0,e.dynamicMainBullets<1&&(e.dynamicMainBullets=1)),"progressbar"===e.type&&e.progressbarOpposite&&s.addClass(e.progressbarOppositeClass),e.clickable&&s.on("click",U(e.bulletClass),(function(e){e.preventDefault();let s=d(this).index()*t.params.slidesPerGroup;t.params.loop&&(s+=t.loopedSlides),t.slideTo(s)})),Object.assign(t.pagination,{$el:s,el:s[0]}),t.enabled||s.addClass(e.lockClass))}function m(){const e=t.params.pagination;if(o())return;const s=t.pagination.$el;s.removeClass(e.hiddenClass),s.removeClass(e.modifierClass+e.type),s.removeClass(t.isHorizontal()?e.horizontalClass:e.verticalClass),t.pagination.bullets&&t.pagination.bullets.removeClass&&t.pagination.bullets.removeClass(e.bulletActiveClass),e.clickable&&s.off("click",U(e.bulletClass))}a("init",(()=>{!1===t.params.pagination.enabled?f():(h(),u(),p())})),a("activeIndexChange",(()=>{(t.params.loop||void 0===t.snapIndex)&&p()})),a("snapIndexChange",(()=>{t.params.loop||p()})),a("slidesLengthChange",(()=>{t.params.loop&&(u(),p())})),a("snapGridLengthChange",(()=>{t.params.loop||(u(),p())})),a("destroy",(()=>{m()})),a("enable disable",(()=>{const{$el:e}=t.pagination;e&&e[t.enabled?"removeClass":"addClass"](t.params.pagination.lockClass)})),a("lock unlock",(()=>{p()})),a("click",((e,s)=>{const a=s.target,{$el:r}=t.pagination;if(t.params.pagination.el&&t.params.pagination.hideOnClick&&r&&r.length>0&&!d(a).hasClass(t.params.pagination.bulletClass)){if(t.navigation&&(t.navigation.nextEl&&a===t.navigation.nextEl||t.navigation.prevEl&&a===t.navigation.prevEl))return;const e=r.hasClass(t.params.pagination.hiddenClass);i(!0===e?"paginationShow":"paginationHide"),r.toggleClass(t.params.pagination.hiddenClass)}}));const f=()=>{t.$el.addClass(t.params.pagination.paginationDisabledClass),t.pagination.$el&&t.pagination.$el.addClass(t.params.pagination.paginationDisabledClass),m()};Object.assign(t.pagination,{enable:()=>{t.$el.removeClass(t.params.pagination.paginationDisabledClass),t.pagination.$el&&t.pagination.$el.removeClass(t.params.pagination.paginationDisabledClass),h(),u(),p()},disable:f,render:u,update:p,init:h,destroy:m})},function(e){let{swiper:t,extendParams:s,on:i,emit:r}=e;const n=a();let l,o,c,u,h=!1,m=null,f=null;function g(){if(!t.params.scrollbar.el||!t.scrollbar.el)return;const{scrollbar:e,rtlTranslate:s,progress:a}=t,{$dragEl:i,$el:r}=e,n=t.params.scrollbar;let l=o,d=(c-o)*a;s?(d=-d,d>0?(l=o-d,d=0):-d+o>c&&(l=c+d)):d<0?(l=o+d,d=0):d+o>c&&(l=c-d),t.isHorizontal()?(i.transform(`translate3d(${d}px, 0, 0)`),i[0].style.width=`${l}px`):(i.transform(`translate3d(0px, ${d}px, 0)`),i[0].style.height=`${l}px`),n.hide&&(clearTimeout(m),r[0].style.opacity=1,m=setTimeout((()=>{r[0].style.opacity=0,r.transition(400)}),1e3))}function v(){if(!t.params.scrollbar.el||!t.scrollbar.el)return;const{scrollbar:e}=t,{$dragEl:s,$el:a}=e;s[0].style.width="",s[0].style.height="",c=t.isHorizontal()?a[0].offsetWidth:a[0].offsetHeight,u=t.size/(t.virtualSize+t.params.slidesOffsetBefore-(t.params.centeredSlides?t.snapGrid[0]:0)),o="auto"===t.params.scrollbar.dragSize?c*u:parseInt(t.params.scrollbar.dragSize,10),t.isHorizontal()?s[0].style.width=`${o}px`:s[0].style.height=`${o}px`,a[0].style.display=u>=1?"none":"",t.params.scrollbar.hide&&(a[0].style.opacity=0),t.params.watchOverflow&&t.enabled&&e.$el[t.isLocked?"addClass":"removeClass"](t.params.scrollbar.lockClass)}function w(e){return t.isHorizontal()?"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].clientX:e.clientX:"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].clientY:e.clientY}function b(e){const{scrollbar:s,rtlTranslate:a}=t,{$el:i}=s;let r;r=(w(e)-i.offset()[t.isHorizontal()?"left":"top"]-(null!==l?l:o/2))/(c-o),r=Math.max(Math.min(r,1),0),a&&(r=1-r);const n=t.minTranslate()+(t.maxTranslate()-t.minTranslate())*r;t.updateProgress(n),t.setTranslate(n),t.updateActiveIndex(),t.updateSlidesClasses()}function x(e){const s=t.params.scrollbar,{scrollbar:a,$wrapperEl:i}=t,{$el:n,$dragEl:o}=a;h=!0,l=e.target===o[0]||e.target===o?w(e)-e.target.getBoundingClientRect()[t.isHorizontal()?"left":"top"]:null,e.preventDefault(),e.stopPropagation(),i.transition(100),o.transition(100),b(e),clearTimeout(f),n.transition(0),s.hide&&n.css("opacity",1),t.params.cssMode&&t.$wrapperEl.css("scroll-snap-type","none"),r("scrollbarDragStart",e)}function y(e){const{scrollbar:s,$wrapperEl:a}=t,{$el:i,$dragEl:n}=s;h&&(e.preventDefault?e.preventDefault():e.returnValue=!1,b(e),a.transition(0),i.transition(0),n.transition(0),r("scrollbarDragMove",e))}function E(e){const s=t.params.scrollbar,{scrollbar:a,$wrapperEl:i}=t,{$el:n}=a;h&&(h=!1,t.params.cssMode&&(t.$wrapperEl.css("scroll-snap-type",""),i.transition("")),s.hide&&(clearTimeout(f),f=p((()=>{n.css("opacity",0),n.transition(400)}),1e3)),r("scrollbarDragEnd",e),s.snapOnRelease&&t.slideToClosest())}function C(e){const{scrollbar:s,touchEventsTouch:a,touchEventsDesktop:i,params:r,support:l}=t,o=s.$el;if(!o)return;const d=o[0],c=!(!l.passiveListener||!r.passiveListeners)&&{passive:!1,capture:!1},p=!(!l.passiveListener||!r.passiveListeners)&&{passive:!0,capture:!1};if(!d)return;const u="on"===e?"addEventListener":"removeEventListener";l.touch?(d[u](a.start,x,c),d[u](a.move,y,c),d[u](a.end,E,p)):(d[u](i.start,x,c),n[u](i.move,y,c),n[u](i.end,E,p))}function T(){const{scrollbar:e,$el:s}=t;t.params.scrollbar=F(t,t.originalParams.scrollbar,t.params.scrollbar,{el:"swiper-scrollbar"});const a=t.params.scrollbar;if(!a.el)return;let i=d(a.el);t.params.uniqueNavElements&&"string"==typeof a.el&&i.length>1&&1===s.find(a.el).length&&(i=s.find(a.el)),i.addClass(t.isHorizontal()?a.horizontalClass:a.verticalClass);let r=i.find(`.${t.params.scrollbar.dragClass}`);0===r.length&&(r=d(`<div class="${t.params.scrollbar.dragClass}"></div>`),i.append(r)),Object.assign(e,{$el:i,el:i[0],$dragEl:r,dragEl:r[0]}),a.draggable&&t.params.scrollbar.el&&t.scrollbar.el&&C("on"),i&&i[t.enabled?"removeClass":"addClass"](t.params.scrollbar.lockClass)}function $(){const e=t.params.scrollbar,s=t.scrollbar.$el;s&&s.removeClass(t.isHorizontal()?e.horizontalClass:e.verticalClass),t.params.scrollbar.el&&t.scrollbar.el&&C("off")}s({scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag",scrollbarDisabledClass:"swiper-scrollbar-disabled",horizontalClass:"swiper-scrollbar-horizontal",verticalClass:"swiper-scrollbar-vertical"}}),t.scrollbar={el:null,dragEl:null,$el:null,$dragEl:null},i("init",(()=>{!1===t.params.scrollbar.enabled?S():(T(),v(),g())})),i("update resize observerUpdate lock unlock",(()=>{v()})),i("setTranslate",(()=>{g()})),i("setTransition",((e,s)=>{!function(e){t.params.scrollbar.el&&t.scrollbar.el&&t.scrollbar.$dragEl.transition(e)}(s)})),i("enable disable",(()=>{const{$el:e}=t.scrollbar;e&&e[t.enabled?"removeClass":"addClass"](t.params.scrollbar.lockClass)})),i("destroy",(()=>{$()}));const S=()=>{t.$el.addClass(t.params.scrollbar.scrollbarDisabledClass),t.scrollbar.$el&&t.scrollbar.$el.addClass(t.params.scrollbar.scrollbarDisabledClass),$()};Object.assign(t.scrollbar,{enable:()=>{t.$el.removeClass(t.params.scrollbar.scrollbarDisabledClass),t.scrollbar.$el&&t.scrollbar.$el.removeClass(t.params.scrollbar.scrollbarDisabledClass),T(),v(),g()},disable:S,updateSize:v,setTranslate:g,init:T,destroy:$})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({parallax:{enabled:!1}});const i=(e,s)=>{const{rtl:a}=t,i=d(e),r=a?-1:1,n=i.attr("data-swiper-parallax")||"0";let l=i.attr("data-swiper-parallax-x"),o=i.attr("data-swiper-parallax-y");const c=i.attr("data-swiper-parallax-scale"),p=i.attr("data-swiper-parallax-opacity");if(l||o?(l=l||"0",o=o||"0"):t.isHorizontal()?(l=n,o="0"):(o=n,l="0"),l=l.indexOf("%")>=0?parseInt(l,10)*s*r+"%":l*s*r+"px",o=o.indexOf("%")>=0?parseInt(o,10)*s+"%":o*s+"px",null!=p){const e=p-(p-1)*(1-Math.abs(s));i[0].style.opacity=e}if(null==c)i.transform(`translate3d(${l}, ${o}, 0px)`);else{const e=c-(c-1)*(1-Math.abs(s));i.transform(`translate3d(${l}, ${o}, 0px) scale(${e})`)}},r=()=>{const{$el:e,slides:s,progress:a,snapGrid:r}=t;e.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e=>{i(e,a)})),s.each(((e,s)=>{let n=e.progress;t.params.slidesPerGroup>1&&"auto"!==t.params.slidesPerView&&(n+=Math.ceil(s/2)-a*(r.length-1)),n=Math.min(Math.max(n,-1),1),d(e).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e=>{i(e,n)}))}))};a("beforeInit",(()=>{t.params.parallax.enabled&&(t.params.watchSlidesProgress=!0,t.originalParams.watchSlidesProgress=!0)})),a("init",(()=>{t.params.parallax.enabled&&r()})),a("setTranslate",(()=>{t.params.parallax.enabled&&r()})),a("setTransition",((e,s)=>{t.params.parallax.enabled&&function(e){void 0===e&&(e=t.params.speed);const{$el:s}=t;s.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((t=>{const s=d(t);let a=parseInt(s.attr("data-swiper-parallax-duration"),10)||e;0===e&&(a=0),s.transition(a)}))}(s)}))},function(e){let{swiper:t,extendParams:s,on:a,emit:i}=e;const n=r();s({zoom:{enabled:!1,maxRatio:3,minRatio:1,toggle:!0,containerClass:"swiper-zoom-container",zoomedSlideClass:"swiper-slide-zoomed"}}),t.zoom={enabled:!1};let l,o,c,p=1,u=!1;const m={$slideEl:void 0,slideWidth:void 0,slideHeight:void 0,$imageEl:void 0,$imageWrapEl:void 0,maxRatio:3},f={isTouched:void 0,isMoved:void 0,currentX:void 0,currentY:void 0,minX:void 0,minY:void 0,maxX:void 0,maxY:void 0,width:void 0,height:void 0,startX:void 0,startY:void 0,touchesStart:{},touchesCurrent:{}},g={x:void 0,y:void 0,prevPositionX:void 0,prevPositionY:void 0,prevTime:void 0};let v=1;function w(e){if(e.targetTouches.length<2)return 1;const t=e.targetTouches[0].pageX,s=e.targetTouches[0].pageY,a=e.targetTouches[1].pageX,i=e.targetTouches[1].pageY;return Math.sqrt((a-t)**2+(i-s)**2)}function b(e){const s=t.support,a=t.params.zoom;if(o=!1,c=!1,!s.gestures){if("touchstart"!==e.type||"touchstart"===e.type&&e.targetTouches.length<2)return;o=!0,m.scaleStart=w(e)}m.$slideEl&&m.$slideEl.length||(m.$slideEl=d(e.target).closest(`.${t.params.slideClass}`),0===m.$slideEl.length&&(m.$slideEl=t.slides.eq(t.activeIndex)),m.$imageEl=m.$slideEl.find(`.${a.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0),m.$imageWrapEl=m.$imageEl.parent(`.${a.containerClass}`),m.maxRatio=m.$imageWrapEl.attr("data-swiper-zoom")||a.maxRatio,0!==m.$imageWrapEl.length)?(m.$imageEl&&m.$imageEl.transition(0),u=!0):m.$imageEl=void 0}function x(e){const s=t.support,a=t.params.zoom,i=t.zoom;if(!s.gestures){if("touchmove"!==e.type||"touchmove"===e.type&&e.targetTouches.length<2)return;c=!0,m.scaleMove=w(e)}m.$imageEl&&0!==m.$imageEl.length?(s.gestures?i.scale=e.scale*p:i.scale=m.scaleMove/m.scaleStart*p,i.scale>m.maxRatio&&(i.scale=m.maxRatio-1+(i.scale-m.maxRatio+1)**.5),i.scale<a.minRatio&&(i.scale=a.minRatio+1-(a.minRatio-i.scale+1)**.5),m.$imageEl.transform(`translate3d(0,0,0) scale(${i.scale})`)):"gesturechange"===e.type&&b(e)}function y(e){const s=t.device,a=t.support,i=t.params.zoom,r=t.zoom;if(!a.gestures){if(!o||!c)return;if("touchend"!==e.type||"touchend"===e.type&&e.changedTouches.length<2&&!s.android)return;o=!1,c=!1}m.$imageEl&&0!==m.$imageEl.length&&(r.scale=Math.max(Math.min(r.scale,m.maxRatio),i.minRatio),m.$imageEl.transition(t.params.speed).transform(`translate3d(0,0,0) scale(${r.scale})`),p=r.scale,u=!1,1===r.scale&&(m.$slideEl=void 0))}function E(e){const s=t.zoom;if(!m.$imageEl||0===m.$imageEl.length)return;if(t.allowClick=!1,!f.isTouched||!m.$slideEl)return;f.isMoved||(f.width=m.$imageEl[0].offsetWidth,f.height=m.$imageEl[0].offsetHeight,f.startX=h(m.$imageWrapEl[0],"x")||0,f.startY=h(m.$imageWrapEl[0],"y")||0,m.slideWidth=m.$slideEl[0].offsetWidth,m.slideHeight=m.$slideEl[0].offsetHeight,m.$imageWrapEl.transition(0));const a=f.width*s.scale,i=f.height*s.scale;if(!(a<m.slideWidth&&i<m.slideHeight)){if(f.minX=Math.min(m.slideWidth/2-a/2,0),f.maxX=-f.minX,f.minY=Math.min(m.slideHeight/2-i/2,0),f.maxY=-f.minY,f.touchesCurrent.x="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,f.touchesCurrent.y="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,!f.isMoved&&!u){if(t.isHorizontal()&&(Math.floor(f.minX)===Math.floor(f.startX)&&f.touchesCurrent.x<f.touchesStart.x||Math.floor(f.maxX)===Math.floor(f.startX)&&f.touchesCurrent.x>f.touchesStart.x))return void(f.isTouched=!1);if(!t.isHorizontal()&&(Math.floor(f.minY)===Math.floor(f.startY)&&f.touchesCurrent.y<f.touchesStart.y||Math.floor(f.maxY)===Math.floor(f.startY)&&f.touchesCurrent.y>f.touchesStart.y))return void(f.isTouched=!1)}e.cancelable&&e.preventDefault(),e.stopPropagation(),f.isMoved=!0,f.currentX=f.touchesCurrent.x-f.touchesStart.x+f.startX,f.currentY=f.touchesCurrent.y-f.touchesStart.y+f.startY,f.currentX<f.minX&&(f.currentX=f.minX+1-(f.minX-f.currentX+1)**.8),f.currentX>f.maxX&&(f.currentX=f.maxX-1+(f.currentX-f.maxX+1)**.8),f.currentY<f.minY&&(f.currentY=f.minY+1-(f.minY-f.currentY+1)**.8),f.currentY>f.maxY&&(f.currentY=f.maxY-1+(f.currentY-f.maxY+1)**.8),g.prevPositionX||(g.prevPositionX=f.touchesCurrent.x),g.prevPositionY||(g.prevPositionY=f.touchesCurrent.y),g.prevTime||(g.prevTime=Date.now()),g.x=(f.touchesCurrent.x-g.prevPositionX)/(Date.now()-g.prevTime)/2,g.y=(f.touchesCurrent.y-g.prevPositionY)/(Date.now()-g.prevTime)/2,Math.abs(f.touchesCurrent.x-g.prevPositionX)<2&&(g.x=0),Math.abs(f.touchesCurrent.y-g.prevPositionY)<2&&(g.y=0),g.prevPositionX=f.touchesCurrent.x,g.prevPositionY=f.touchesCurrent.y,g.prevTime=Date.now(),m.$imageWrapEl.transform(`translate3d(${f.currentX}px, ${f.currentY}px,0)`)}}function C(){const e=t.zoom;m.$slideEl&&t.previousIndex!==t.activeIndex&&(m.$imageEl&&m.$imageEl.transform("translate3d(0,0,0) scale(1)"),m.$imageWrapEl&&m.$imageWrapEl.transform("translate3d(0,0,0)"),e.scale=1,p=1,m.$slideEl=void 0,m.$imageEl=void 0,m.$imageWrapEl=void 0)}function T(e){const s=t.zoom,a=t.params.zoom;if(m.$slideEl||(e&&e.target&&(m.$slideEl=d(e.target).closest(`.${t.params.slideClass}`)),m.$slideEl||(t.params.virtual&&t.params.virtual.enabled&&t.virtual?m.$slideEl=t.$wrapperEl.children(`.${t.params.slideActiveClass}`):m.$slideEl=t.slides.eq(t.activeIndex)),m.$imageEl=m.$slideEl.find(`.${a.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0),m.$imageWrapEl=m.$imageEl.parent(`.${a.containerClass}`)),!m.$imageEl||0===m.$imageEl.length||!m.$imageWrapEl||0===m.$imageWrapEl.length)return;let i,r,l,o,c,u,h,g,v,w,b,x,y,E,C,T,$,S;t.params.cssMode&&(t.wrapperEl.style.overflow="hidden",t.wrapperEl.style.touchAction="none"),m.$slideEl.addClass(`${a.zoomedSlideClass}`),void 0===f.touchesStart.x&&e?(i="touchend"===e.type?e.changedTouches[0].pageX:e.pageX,r="touchend"===e.type?e.changedTouches[0].pageY:e.pageY):(i=f.touchesStart.x,r=f.touchesStart.y),s.scale=m.$imageWrapEl.attr("data-swiper-zoom")||a.maxRatio,p=m.$imageWrapEl.attr("data-swiper-zoom")||a.maxRatio,e?($=m.$slideEl[0].offsetWidth,S=m.$slideEl[0].offsetHeight,l=m.$slideEl.offset().left+n.scrollX,o=m.$slideEl.offset().top+n.scrollY,c=l+$/2-i,u=o+S/2-r,v=m.$imageEl[0].offsetWidth,w=m.$imageEl[0].offsetHeight,b=v*s.scale,x=w*s.scale,y=Math.min($/2-b/2,0),E=Math.min(S/2-x/2,0),C=-y,T=-E,h=c*s.scale,g=u*s.scale,h<y&&(h=y),h>C&&(h=C),g<E&&(g=E),g>T&&(g=T)):(h=0,g=0),m.$imageWrapEl.transition(300).transform(`translate3d(${h}px, ${g}px,0)`),m.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${s.scale})`)}function $(){const e=t.zoom,s=t.params.zoom;m.$slideEl||(t.params.virtual&&t.params.virtual.enabled&&t.virtual?m.$slideEl=t.$wrapperEl.children(`.${t.params.slideActiveClass}`):m.$slideEl=t.slides.eq(t.activeIndex),m.$imageEl=m.$slideEl.find(`.${s.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0),m.$imageWrapEl=m.$imageEl.parent(`.${s.containerClass}`)),m.$imageEl&&0!==m.$imageEl.length&&m.$imageWrapEl&&0!==m.$imageWrapEl.length&&(t.params.cssMode&&(t.wrapperEl.style.overflow="",t.wrapperEl.style.touchAction=""),e.scale=1,p=1,m.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),m.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),m.$slideEl.removeClass(`${s.zoomedSlideClass}`),m.$slideEl=void 0)}function S(e){const s=t.zoom;s.scale&&1!==s.scale?$():T(e)}function M(){const e=t.support;return{passiveListener:!("touchstart"!==t.touchEvents.start||!e.passiveListener||!t.params.passiveListeners)&&{passive:!0,capture:!1},activeListenerWithCapture:!e.passiveListener||{passive:!1,capture:!0}}}function P(){return`.${t.params.slideClass}`}function k(e){const{passiveListener:s}=M(),a=P();t.$wrapperEl[e]("gesturestart",a,b,s),t.$wrapperEl[e]("gesturechange",a,x,s),t.$wrapperEl[e]("gestureend",a,y,s)}function z(){l||(l=!0,k("on"))}function L(){l&&(l=!1,k("off"))}function O(){const e=t.zoom;if(e.enabled)return;e.enabled=!0;const s=t.support,{passiveListener:a,activeListenerWithCapture:i}=M(),r=P();s.gestures?(t.$wrapperEl.on(t.touchEvents.start,z,a),t.$wrapperEl.on(t.touchEvents.end,L,a)):"touchstart"===t.touchEvents.start&&(t.$wrapperEl.on(t.touchEvents.start,r,b,a),t.$wrapperEl.on(t.touchEvents.move,r,x,i),t.$wrapperEl.on(t.touchEvents.end,r,y,a),t.touchEvents.cancel&&t.$wrapperEl.on(t.touchEvents.cancel,r,y,a)),t.$wrapperEl.on(t.touchEvents.move,`.${t.params.zoom.containerClass}`,E,i)}function I(){const e=t.zoom;if(!e.enabled)return;const s=t.support;e.enabled=!1;const{passiveListener:a,activeListenerWithCapture:i}=M(),r=P();s.gestures?(t.$wrapperEl.off(t.touchEvents.start,z,a),t.$wrapperEl.off(t.touchEvents.end,L,a)):"touchstart"===t.touchEvents.start&&(t.$wrapperEl.off(t.touchEvents.start,r,b,a),t.$wrapperEl.off(t.touchEvents.move,r,x,i),t.$wrapperEl.off(t.touchEvents.end,r,y,a),t.touchEvents.cancel&&t.$wrapperEl.off(t.touchEvents.cancel,r,y,a)),t.$wrapperEl.off(t.touchEvents.move,`.${t.params.zoom.containerClass}`,E,i)}Object.defineProperty(t.zoom,"scale",{get:()=>v,set(e){if(v!==e){const t=m.$imageEl?m.$imageEl[0]:void 0,s=m.$slideEl?m.$slideEl[0]:void 0;i("zoomChange",e,t,s)}v=e}}),a("init",(()=>{t.params.zoom.enabled&&O()})),a("destroy",(()=>{I()})),a("touchStart",((e,s)=>{t.zoom.enabled&&function(e){const s=t.device;m.$imageEl&&0!==m.$imageEl.length&&(f.isTouched||(s.android&&e.cancelable&&e.preventDefault(),f.isTouched=!0,f.touchesStart.x="touchstart"===e.type?e.targetTouches[0].pageX:e.pageX,f.touchesStart.y="touchstart"===e.type?e.targetTouches[0].pageY:e.pageY))}(s)})),a("touchEnd",((e,s)=>{t.zoom.enabled&&function(){const e=t.zoom;if(!m.$imageEl||0===m.$imageEl.length)return;if(!f.isTouched||!f.isMoved)return f.isTouched=!1,void(f.isMoved=!1);f.isTouched=!1,f.isMoved=!1;let s=300,a=300;const i=g.x*s,r=f.currentX+i,n=g.y*a,l=f.currentY+n;0!==g.x&&(s=Math.abs((r-f.currentX)/g.x)),0!==g.y&&(a=Math.abs((l-f.currentY)/g.y));const o=Math.max(s,a);f.currentX=r,f.currentY=l;const d=f.width*e.scale,c=f.height*e.scale;f.minX=Math.min(m.slideWidth/2-d/2,0),f.maxX=-f.minX,f.minY=Math.min(m.slideHeight/2-c/2,0),f.maxY=-f.minY,f.currentX=Math.max(Math.min(f.currentX,f.maxX),f.minX),f.currentY=Math.max(Math.min(f.currentY,f.maxY),f.minY),m.$imageWrapEl.transition(o).transform(`translate3d(${f.currentX}px, ${f.currentY}px,0)`)}()})),a("doubleTap",((e,s)=>{!t.animating&&t.params.zoom.enabled&&t.zoom.enabled&&t.params.zoom.toggle&&S(s)})),a("transitionEnd",(()=>{t.zoom.enabled&&t.params.zoom.enabled&&C()})),a("slideChange",(()=>{t.zoom.enabled&&t.params.zoom.enabled&&t.params.cssMode&&C()})),Object.assign(t.zoom,{enable:O,disable:I,in:T,out:$,toggle:S})},function(e){let{swiper:t,extendParams:s,on:a,emit:i}=e;s({lazy:{checkInView:!1,enabled:!1,loadPrevNext:!1,loadPrevNextAmount:1,loadOnTransitionStart:!1,scrollingElement:"",elementClass:"swiper-lazy",loadingClass:"swiper-lazy-loading",loadedClass:"swiper-lazy-loaded",preloaderClass:"swiper-lazy-preloader"}}),t.lazy={};let n=!1,l=!1;function o(e,s){void 0===s&&(s=!0);const a=t.params.lazy;if(void 0===e)return;if(0===t.slides.length)return;const r=t.virtual&&t.params.virtual.enabled?t.$wrapperEl.children(`.${t.params.slideClass}[data-swiper-slide-index="${e}"]`):t.slides.eq(e),n=r.find(`.${a.elementClass}:not(.${a.loadedClass}):not(.${a.loadingClass})`);!r.hasClass(a.elementClass)||r.hasClass(a.loadedClass)||r.hasClass(a.loadingClass)||n.push(r[0]),0!==n.length&&n.each((e=>{const n=d(e);n.addClass(a.loadingClass);const l=n.attr("data-background"),c=n.attr("data-src"),p=n.attr("data-srcset"),u=n.attr("data-sizes"),h=n.parent("picture");t.loadImage(n[0],c||l,p,u,!1,(()=>{if(null!=t&&t&&(!t||t.params)&&!t.destroyed){if(l?(n.css("background-image",`url("${l}")`),n.removeAttr("data-background")):(p&&(n.attr("srcset",p),n.removeAttr("data-srcset")),u&&(n.attr("sizes",u),n.removeAttr("data-sizes")),h.length&&h.children("source").each((e=>{const t=d(e);t.attr("data-srcset")&&(t.attr("srcset",t.attr("data-srcset")),t.removeAttr("data-srcset"))})),c&&(n.attr("src",c),n.removeAttr("data-src"))),n.addClass(a.loadedClass).removeClass(a.loadingClass),r.find(`.${a.preloaderClass}`).remove(),t.params.loop&&s){const e=r.attr("data-swiper-slide-index");if(r.hasClass(t.params.slideDuplicateClass)){o(t.$wrapperEl.children(`[data-swiper-slide-index="${e}"]:not(.${t.params.slideDuplicateClass})`).index(),!1)}else{o(t.$wrapperEl.children(`.${t.params.slideDuplicateClass}[data-swiper-slide-index="${e}"]`).index(),!1)}}i("lazyImageReady",r[0],n[0]),t.params.autoHeight&&t.updateAutoHeight()}})),i("lazyImageLoad",r[0],n[0])}))}function c(){const{$wrapperEl:e,params:s,slides:a,activeIndex:i}=t,r=t.virtual&&s.virtual.enabled,n=s.lazy;let c=s.slidesPerView;function p(t){if(r){if(e.children(`.${s.slideClass}[data-swiper-slide-index="${t}"]`).length)return!0}else if(a[t])return!0;return!1}function u(e){return r?d(e).attr("data-swiper-slide-index"):d(e).index()}if("auto"===c&&(c=0),l||(l=!0),t.params.watchSlidesProgress)e.children(`.${s.slideVisibleClass}`).each((e=>{o(r?d(e).attr("data-swiper-slide-index"):d(e).index())}));else if(c>1)for(let e=i;e<i+c;e+=1)p(e)&&o(e);else o(i);if(n.loadPrevNext)if(c>1||n.loadPrevNextAmount&&n.loadPrevNextAmount>1){const e=n.loadPrevNextAmount,t=Math.ceil(c),s=Math.min(i+t+Math.max(e,t),a.length),r=Math.max(i-Math.max(t,e),0);for(let e=i+t;e<s;e+=1)p(e)&&o(e);for(let e=r;e<i;e+=1)p(e)&&o(e)}else{const t=e.children(`.${s.slideNextClass}`);t.length>0&&o(u(t));const a=e.children(`.${s.slidePrevClass}`);a.length>0&&o(u(a))}}function p(){const e=r();if(!t||t.destroyed)return;const s=t.params.lazy.scrollingElement?d(t.params.lazy.scrollingElement):d(e),a=s[0]===e,i=a?e.innerWidth:s[0].offsetWidth,l=a?e.innerHeight:s[0].offsetHeight,o=t.$el.offset(),{rtlTranslate:u}=t;let h=!1;u&&(o.left-=t.$el[0].scrollLeft);const m=[[o.left,o.top],[o.left+t.width,o.top],[o.left,o.top+t.height],[o.left+t.width,o.top+t.height]];for(let e=0;e<m.length;e+=1){const t=m[e];if(t[0]>=0&&t[0]<=i&&t[1]>=0&&t[1]<=l){if(0===t[0]&&0===t[1])continue;h=!0}}const f=!("touchstart"!==t.touchEvents.start||!t.support.passiveListener||!t.params.passiveListeners)&&{passive:!0,capture:!1};h?(c(),s.off("scroll",p,f)):n||(n=!0,s.on("scroll",p,f))}a("beforeInit",(()=>{t.params.lazy.enabled&&t.params.preloadImages&&(t.params.preloadImages=!1)})),a("init",(()=>{t.params.lazy.enabled&&(t.params.lazy.checkInView?p():c())})),a("scroll",(()=>{t.params.freeMode&&t.params.freeMode.enabled&&!t.params.freeMode.sticky&&c()})),a("scrollbarDragMove resize _freeModeNoMomentumRelease",(()=>{t.params.lazy.enabled&&(t.params.lazy.checkInView?p():c())})),a("transitionStart",(()=>{t.params.lazy.enabled&&(t.params.lazy.loadOnTransitionStart||!t.params.lazy.loadOnTransitionStart&&!l)&&(t.params.lazy.checkInView?p():c())})),a("transitionEnd",(()=>{t.params.lazy.enabled&&!t.params.lazy.loadOnTransitionStart&&(t.params.lazy.checkInView?p():c())})),a("slideChange",(()=>{const{lazy:e,cssMode:s,watchSlidesProgress:a,touchReleaseOnEdges:i,resistanceRatio:r}=t.params;e.enabled&&(s||a&&(i||0===r))&&c()})),a("destroy",(()=>{t.$el&&t.$el.find(`.${t.params.lazy.loadingClass}`).removeClass(t.params.lazy.loadingClass)})),Object.assign(t.lazy,{load:c,loadInSlide:o})},function(e){let{swiper:t,extendParams:s,on:a}=e;function i(e,t){const s=function(){let e,t,s;return(a,i)=>{for(t=-1,e=a.length;e-t>1;)s=e+t>>1,a[s]<=i?t=s:e=s;return e}}();let a,i;return this.x=e,this.y=t,this.lastIndex=e.length-1,this.interpolate=function(e){return e?(i=s(this.x,e),a=i-1,(e-this.x[a])*(this.y[i]-this.y[a])/(this.x[i]-this.x[a])+this.y[a]):0},this}function r(){t.controller.control&&t.controller.spline&&(t.controller.spline=void 0,delete t.controller.spline)}s({controller:{control:void 0,inverse:!1,by:"slide"}}),t.controller={control:void 0},a("beforeInit",(()=>{t.controller.control=t.params.controller.control})),a("update",(()=>{r()})),a("resize",(()=>{r()})),a("observerUpdate",(()=>{r()})),a("setTranslate",((e,s,a)=>{t.controller.control&&t.controller.setTranslate(s,a)})),a("setTransition",((e,s,a)=>{t.controller.control&&t.controller.setTransition(s,a)})),Object.assign(t.controller,{setTranslate:function(e,s){const a=t.controller.control;let r,n;const l=t.constructor;function o(e){const s=t.rtlTranslate?-t.translate:t.translate;"slide"===t.params.controller.by&&(!function(e){t.controller.spline||(t.controller.spline=t.params.loop?new i(t.slidesGrid,e.slidesGrid):new i(t.snapGrid,e.snapGrid))}(e),n=-t.controller.spline.interpolate(-s)),n&&"container"!==t.params.controller.by||(r=(e.maxTranslate()-e.minTranslate())/(t.maxTranslate()-t.minTranslate()),n=(s-t.minTranslate())*r+e.minTranslate()),t.params.controller.inverse&&(n=e.maxTranslate()-n),e.updateProgress(n),e.setTranslate(n,t),e.updateActiveIndex(),e.updateSlidesClasses()}if(Array.isArray(a))for(let e=0;e<a.length;e+=1)a[e]!==s&&a[e]instanceof l&&o(a[e]);else a instanceof l&&s!==a&&o(a)},setTransition:function(e,s){const a=t.constructor,i=t.controller.control;let r;function n(s){s.setTransition(e,t),0!==e&&(s.transitionStart(),s.params.autoHeight&&p((()=>{s.updateAutoHeight()})),s.$wrapperEl.transitionEnd((()=>{i&&(s.params.loop&&"slide"===t.params.controller.by&&s.loopFix(),s.transitionEnd())})))}if(Array.isArray(i))for(r=0;r<i.length;r+=1)i[r]!==s&&i[r]instanceof a&&n(i[r]);else i instanceof a&&s!==i&&n(i)}})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({a11y:{enabled:!0,notificationClass:"swiper-notification",prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",slideLabelMessage:"{{index}} / {{slidesLength}}",containerMessage:null,containerRoleDescriptionMessage:null,itemRoleDescriptionMessage:null,slideRole:"group",id:null}}),t.a11y={clicked:!1};let i=null;function r(e){const t=i;0!==t.length&&(t.html(""),t.html(e))}function n(e){e.attr("tabIndex","0")}function l(e){e.attr("tabIndex","-1")}function o(e,t){e.attr("role",t)}function c(e,t){e.attr("aria-roledescription",t)}function p(e,t){e.attr("aria-label",t)}function u(e){e.attr("aria-disabled",!0)}function h(e){e.attr("aria-disabled",!1)}function m(e){if(13!==e.keyCode&&32!==e.keyCode)return;const s=t.params.a11y,a=d(e.target);t.navigation&&t.navigation.$nextEl&&a.is(t.navigation.$nextEl)&&(t.isEnd&&!t.params.loop||t.slideNext(),t.isEnd?r(s.lastSlideMessage):r(s.nextSlideMessage)),t.navigation&&t.navigation.$prevEl&&a.is(t.navigation.$prevEl)&&(t.isBeginning&&!t.params.loop||t.slidePrev(),t.isBeginning?r(s.firstSlideMessage):r(s.prevSlideMessage)),t.pagination&&a.is(U(t.params.pagination.bulletClass))&&a[0].click()}function f(){return t.pagination&&t.pagination.bullets&&t.pagination.bullets.length}function g(){return f()&&t.params.pagination.clickable}const v=(e,t,s)=>{n(e),"BUTTON"!==e[0].tagName&&(o(e,"button"),e.on("keydown",m)),p(e,s),function(e,t){e.attr("aria-controls",t)}(e,t)},w=()=>{t.a11y.clicked=!0},b=()=>{requestAnimationFrame((()=>{requestAnimationFrame((()=>{t.a11y.clicked=!1}))}))},x=e=>{if(t.a11y.clicked)return;const s=e.target.closest(`.${t.params.slideClass}`);if(!s||!t.slides.includes(s))return;const a=t.slides.indexOf(s)===t.activeIndex,i=t.params.watchSlidesProgress&&t.visibleSlides&&t.visibleSlides.includes(s);a||i||(t.isHorizontal()?t.el.scrollLeft=0:t.el.scrollTop=0,t.slideTo(t.slides.indexOf(s),0))},y=()=>{const e=t.params.a11y;e.itemRoleDescriptionMessage&&c(d(t.slides),e.itemRoleDescriptionMessage),e.slideRole&&o(d(t.slides),e.slideRole);const s=t.params.loop?t.slides.filter((e=>!e.classList.contains(t.params.slideDuplicateClass))).length:t.slides.length;e.slideLabelMessage&&t.slides.each(((a,i)=>{const r=d(a),n=t.params.loop?parseInt(r.attr("data-swiper-slide-index"),10):i;p(r,e.slideLabelMessage.replace(/\{\{index\}\}/,n+1).replace(/\{\{slidesLength\}\}/,s))}))},E=()=>{const e=t.params.a11y;t.$el.append(i);const s=t.$el;e.containerRoleDescriptionMessage&&c(s,e.containerRoleDescriptionMessage),e.containerMessage&&p(s,e.containerMessage);const a=t.$wrapperEl,r=e.id||a.attr("id")||`swiper-wrapper-${n=16,void 0===n&&(n=16),"x".repeat(n).replace(/x/g,(()=>Math.round(16*Math.random()).toString(16)))}`;var n;const l=t.params.autoplay&&t.params.autoplay.enabled?"off":"polite";var o;let d,u;o=r,a.attr("id",o),function(e,t){e.attr("aria-live",t)}(a,l),y(),t.navigation&&t.navigation.$nextEl&&(d=t.navigation.$nextEl),t.navigation&&t.navigation.$prevEl&&(u=t.navigation.$prevEl),d&&d.length&&v(d,r,e.nextSlideMessage),u&&u.length&&v(u,r,e.prevSlideMessage),g()&&t.pagination.$el.on("keydown",U(t.params.pagination.bulletClass),m),t.$el.on("focus",x,!0),t.$el.on("pointerdown",w,!0),t.$el.on("pointerup",b,!0)};a("beforeInit",(()=>{i=d(`<span class="${t.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`)})),a("afterInit",(()=>{t.params.a11y.enabled&&E()})),a("slidesLengthChange snapGridLengthChange slidesGridLengthChange",(()=>{t.params.a11y.enabled&&y()})),a("fromEdge toEdge afterInit lock unlock",(()=>{t.params.a11y.enabled&&function(){if(t.params.loop||t.params.rewind||!t.navigation)return;const{$nextEl:e,$prevEl:s}=t.navigation;s&&s.length>0&&(t.isBeginning?(u(s),l(s)):(h(s),n(s))),e&&e.length>0&&(t.isEnd?(u(e),l(e)):(h(e),n(e)))}()})),a("paginationUpdate",(()=>{t.params.a11y.enabled&&function(){const e=t.params.a11y;f()&&t.pagination.bullets.each((s=>{const a=d(s);t.params.pagination.clickable&&(n(a),t.params.pagination.renderBullet||(o(a,"button"),p(a,e.paginationBulletMessage.replace(/\{\{index\}\}/,a.index()+1)))),a.is(`.${t.params.pagination.bulletActiveClass}`)?a.attr("aria-current","true"):a.removeAttr("aria-current")}))}()})),a("destroy",(()=>{t.params.a11y.enabled&&function(){let e,s;i&&i.length>0&&i.remove(),t.navigation&&t.navigation.$nextEl&&(e=t.navigation.$nextEl),t.navigation&&t.navigation.$prevEl&&(s=t.navigation.$prevEl),e&&e.off("keydown",m),s&&s.off("keydown",m),g()&&t.pagination.$el.off("keydown",U(t.params.pagination.bulletClass),m),t.$el.off("focus",x,!0),t.$el.off("pointerdown",w,!0),t.$el.off("pointerup",b,!0)}()}))},function(e){let{swiper:t,extendParams:s,on:a}=e;s({history:{enabled:!1,root:"",replaceState:!1,key:"slides",keepQuery:!1}});let i=!1,n={};const l=e=>e.toString().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,""),o=e=>{const t=r();let s;s=e?new URL(e):t.location;const a=s.pathname.slice(1).split("/").filter((e=>""!==e)),i=a.length;return{key:a[i-2],value:a[i-1]}},d=(e,s)=>{const a=r();if(!i||!t.params.history.enabled)return;let n;n=t.params.url?new URL(t.params.url):a.location;const o=t.slides.eq(s);let d=l(o.attr("data-history"));if(t.params.history.root.length>0){let s=t.params.history.root;"/"===s[s.length-1]&&(s=s.slice(0,s.length-1)),d=`${s}/${e}/${d}`}else n.pathname.includes(e)||(d=`${e}/${d}`);t.params.history.keepQuery&&(d+=n.search);const c=a.history.state;c&&c.value===d||(t.params.history.replaceState?a.history.replaceState({value:d},null,d):a.history.pushState({value:d},null,d))},c=(e,s,a)=>{if(s)for(let i=0,r=t.slides.length;i<r;i+=1){const r=t.slides.eq(i);if(l(r.attr("data-history"))===s&&!r.hasClass(t.params.slideDuplicateClass)){const s=r.index();t.slideTo(s,e,a)}}else t.slideTo(0,e,a)},p=()=>{n=o(t.params.url),c(t.params.speed,n.value,!1)};a("init",(()=>{t.params.history.enabled&&(()=>{const e=r();if(t.params.history){if(!e.history||!e.history.pushState)return t.params.history.enabled=!1,void(t.params.hashNavigation.enabled=!0);i=!0,n=o(t.params.url),(n.key||n.value)&&(c(0,n.value,t.params.runCallbacksOnInit),t.params.history.replaceState||e.addEventListener("popstate",p))}})()})),a("destroy",(()=>{t.params.history.enabled&&(()=>{const e=r();t.params.history.replaceState||e.removeEventListener("popstate",p)})()})),a("transitionEnd _freeModeNoMomentumRelease",(()=>{i&&d(t.params.history.key,t.activeIndex)})),a("slideChange",(()=>{i&&t.params.cssMode&&d(t.params.history.key,t.activeIndex)}))},function(e){let{swiper:t,extendParams:s,emit:i,on:n}=e,l=!1;const o=a(),c=r();s({hashNavigation:{enabled:!1,replaceState:!1,watchState:!1}});const p=()=>{i("hashChange");const e=o.location.hash.replace("#","");if(e!==t.slides.eq(t.activeIndex).attr("data-hash")){const s=t.$wrapperEl.children(`.${t.params.slideClass}[data-hash="${e}"]`).index();if(void 0===s)return;t.slideTo(s)}},u=()=>{if(l&&t.params.hashNavigation.enabled)if(t.params.hashNavigation.replaceState&&c.history&&c.history.replaceState)c.history.replaceState(null,null,`#${t.slides.eq(t.activeIndex).attr("data-hash")}`||""),i("hashSet");else{const e=t.slides.eq(t.activeIndex),s=e.attr("data-hash")||e.attr("data-history");o.location.hash=s||"",i("hashSet")}};n("init",(()=>{t.params.hashNavigation.enabled&&(()=>{if(!t.params.hashNavigation.enabled||t.params.history&&t.params.history.enabled)return;l=!0;const e=o.location.hash.replace("#","");if(e){const s=0;for(let a=0,i=t.slides.length;a<i;a+=1){const i=t.slides.eq(a);if((i.attr("data-hash")||i.attr("data-history"))===e&&!i.hasClass(t.params.slideDuplicateClass)){const e=i.index();t.slideTo(e,s,t.params.runCallbacksOnInit,!0)}}}t.params.hashNavigation.watchState&&d(c).on("hashchange",p)})()})),n("destroy",(()=>{t.params.hashNavigation.enabled&&t.params.hashNavigation.watchState&&d(c).off("hashchange",p)})),n("transitionEnd _freeModeNoMomentumRelease",(()=>{l&&u()})),n("slideChange",(()=>{l&&t.params.cssMode&&u()}))},function(e){let t,{swiper:s,extendParams:i,on:r,emit:n}=e;function l(){if(!s.size)return s.autoplay.running=!1,void(s.autoplay.paused=!1);const e=s.slides.eq(s.activeIndex);let a=s.params.autoplay.delay;e.attr("data-swiper-autoplay")&&(a=e.attr("data-swiper-autoplay")||s.params.autoplay.delay),clearTimeout(t),t=p((()=>{let e;s.params.autoplay.reverseDirection?s.params.loop?(s.loopFix(),e=s.slidePrev(s.params.speed,!0,!0),n("autoplay")):s.isBeginning?s.params.autoplay.stopOnLastSlide?d():(e=s.slideTo(s.slides.length-1,s.params.speed,!0,!0),n("autoplay")):(e=s.slidePrev(s.params.speed,!0,!0),n("autoplay")):s.params.loop?(s.loopFix(),e=s.slideNext(s.params.speed,!0,!0),n("autoplay")):s.isEnd?s.params.autoplay.stopOnLastSlide?d():(e=s.slideTo(0,s.params.speed,!0,!0),n("autoplay")):(e=s.slideNext(s.params.speed,!0,!0),n("autoplay")),(s.params.cssMode&&s.autoplay.running||!1===e)&&l()}),a)}function o(){return void 0===t&&(!s.autoplay.running&&(s.autoplay.running=!0,n("autoplayStart"),l(),!0))}function d(){return!!s.autoplay.running&&(void 0!==t&&(t&&(clearTimeout(t),t=void 0),s.autoplay.running=!1,n("autoplayStop"),!0))}function c(e){s.autoplay.running&&(s.autoplay.paused||(t&&clearTimeout(t),s.autoplay.paused=!0,0!==e&&s.params.autoplay.waitForTransition?["transitionend","webkitTransitionEnd"].forEach((e=>{s.$wrapperEl[0].addEventListener(e,h)})):(s.autoplay.paused=!1,l())))}function u(){const e=a();"hidden"===e.visibilityState&&s.autoplay.running&&c(),"visible"===e.visibilityState&&s.autoplay.paused&&(l(),s.autoplay.paused=!1)}function h(e){s&&!s.destroyed&&s.$wrapperEl&&e.target===s.$wrapperEl[0]&&(["transitionend","webkitTransitionEnd"].forEach((e=>{s.$wrapperEl[0].removeEventListener(e,h)})),s.autoplay.paused=!1,s.autoplay.running?l():d())}function m(){s.params.autoplay.disableOnInteraction?d():(n("autoplayPause"),c()),["transitionend","webkitTransitionEnd"].forEach((e=>{s.$wrapperEl[0].removeEventListener(e,h)}))}function f(){s.params.autoplay.disableOnInteraction||(s.autoplay.paused=!1,n("autoplayResume"),l())}s.autoplay={running:!1,paused:!1},i({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}}),r("init",(()=>{if(s.params.autoplay.enabled){o();a().addEventListener("visibilitychange",u),s.params.autoplay.pauseOnMouseEnter&&(s.$el.on("mouseenter",m),s.$el.on("mouseleave",f))}})),r("beforeTransitionStart",((e,t,a)=>{s.autoplay.running&&(a||!s.params.autoplay.disableOnInteraction?s.autoplay.pause(t):d())})),r("sliderFirstMove",(()=>{s.autoplay.running&&(s.params.autoplay.disableOnInteraction?d():c())})),r("touchEnd",(()=>{s.params.cssMode&&s.autoplay.paused&&!s.params.autoplay.disableOnInteraction&&l()})),r("destroy",(()=>{s.$el.off("mouseenter",m),s.$el.off("mouseleave",f),s.autoplay.running&&d();a().removeEventListener("visibilitychange",u)})),Object.assign(s.autoplay,{pause:c,run:l,start:o,stop:d})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-thumbs"}});let i=!1,r=!1;function n(){const e=t.thumbs.swiper;if(!e||e.destroyed)return;const s=e.clickedIndex,a=e.clickedSlide;if(a&&d(a).hasClass(t.params.thumbs.slideThumbActiveClass))return;if(null==s)return;let i;if(i=e.params.loop?parseInt(d(e.clickedSlide).attr("data-swiper-slide-index"),10):s,t.params.loop){let e=t.activeIndex;t.slides.eq(e).hasClass(t.params.slideDuplicateClass)&&(t.loopFix(),t._clientLeft=t.$wrapperEl[0].clientLeft,e=t.activeIndex);const s=t.slides.eq(e).prevAll(`[data-swiper-slide-index="${i}"]`).eq(0).index(),a=t.slides.eq(e).nextAll(`[data-swiper-slide-index="${i}"]`).eq(0).index();i=void 0===s?a:void 0===a?s:a-e<e-s?a:s}t.slideTo(i)}function l(){const{thumbs:e}=t.params;if(i)return!1;i=!0;const s=t.constructor;if(e.swiper instanceof s)t.thumbs.swiper=e.swiper,Object.assign(t.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),Object.assign(t.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1});else if(m(e.swiper)){const a=Object.assign({},e.swiper);Object.assign(a,{watchSlidesProgress:!0,slideToClickedSlide:!1}),t.thumbs.swiper=new s(a),r=!0}return t.thumbs.swiper.$el.addClass(t.params.thumbs.thumbsContainerClass),t.thumbs.swiper.on("tap",n),!0}function o(e){const s=t.thumbs.swiper;if(!s||s.destroyed)return;const a="auto"===s.params.slidesPerView?s.slidesPerViewDynamic():s.params.slidesPerView;let i=1;const r=t.params.thumbs.slideThumbActiveClass;if(t.params.slidesPerView>1&&!t.params.centeredSlides&&(i=t.params.slidesPerView),t.params.thumbs.multipleActiveThumbs||(i=1),i=Math.floor(i),s.slides.removeClass(r),s.params.loop||s.params.virtual&&s.params.virtual.enabled)for(let e=0;e<i;e+=1)s.$wrapperEl.children(`[data-swiper-slide-index="${t.realIndex+e}"]`).addClass(r);else for(let e=0;e<i;e+=1)s.slides.eq(t.realIndex+e).addClass(r);const n=t.params.thumbs.autoScrollOffset,l=n&&!s.params.loop;if(t.realIndex!==s.realIndex||l){let i,r,o=s.activeIndex;if(s.params.loop){s.slides.eq(o).hasClass(s.params.slideDuplicateClass)&&(s.loopFix(),s._clientLeft=s.$wrapperEl[0].clientLeft,o=s.activeIndex);const e=s.slides.eq(o).prevAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index(),a=s.slides.eq(o).nextAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index();i=void 0===e?a:void 0===a?e:a-o==o-e?s.params.slidesPerGroup>1?a:o:a-o<o-e?a:e,r=t.activeIndex>t.previousIndex?"next":"prev"}else i=t.realIndex,r=i>t.previousIndex?"next":"prev";l&&(i+="next"===r?n:-1*n),s.visibleSlidesIndexes&&s.visibleSlidesIndexes.indexOf(i)<0&&(s.params.centeredSlides?i=i>o?i-Math.floor(a/2)+1:i+Math.floor(a/2)-1:i>o&&s.params.slidesPerGroup,s.slideTo(i,e?0:void 0))}}t.thumbs={swiper:null},a("beforeInit",(()=>{const{thumbs:e}=t.params;e&&e.swiper&&(l(),o(!0))})),a("slideChange update resize observerUpdate",(()=>{o()})),a("setTransition",((e,s)=>{const a=t.thumbs.swiper;a&&!a.destroyed&&a.setTransition(s)})),a("beforeDestroy",(()=>{const e=t.thumbs.swiper;e&&!e.destroyed&&r&&e.destroy()})),Object.assign(t.thumbs,{init:l,update:o})},function(e){let{swiper:t,extendParams:s,emit:a,once:i}=e;s({freeMode:{enabled:!1,momentum:!0,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,momentumVelocityRatio:1,sticky:!1,minimumVelocity:.02}}),Object.assign(t,{freeMode:{onTouchStart:function(){const e=t.getTranslate();t.setTranslate(e),t.setTransition(0),t.touchEventsData.velocities.length=0,t.freeMode.onTouchEnd({currentPos:t.rtl?t.translate:-t.translate})},onTouchMove:function(){const{touchEventsData:e,touches:s}=t;0===e.velocities.length&&e.velocities.push({position:s[t.isHorizontal()?"startX":"startY"],time:e.touchStartTime}),e.velocities.push({position:s[t.isHorizontal()?"currentX":"currentY"],time:u()})},onTouchEnd:function(e){let{currentPos:s}=e;const{params:r,$wrapperEl:n,rtlTranslate:l,snapGrid:o,touchEventsData:d}=t,c=u()-d.touchStartTime;if(s<-t.minTranslate())t.slideTo(t.activeIndex);else if(s>-t.maxTranslate())t.slides.length<o.length?t.slideTo(o.length-1):t.slideTo(t.slides.length-1);else{if(r.freeMode.momentum){if(d.velocities.length>1){const e=d.velocities.pop(),s=d.velocities.pop(),a=e.position-s.position,i=e.time-s.time;t.velocity=a/i,t.velocity/=2,Math.abs(t.velocity)<r.freeMode.minimumVelocity&&(t.velocity=0),(i>150||u()-e.time>300)&&(t.velocity=0)}else t.velocity=0;t.velocity*=r.freeMode.momentumVelocityRatio,d.velocities.length=0;let e=1e3*r.freeMode.momentumRatio;const s=t.velocity*e;let c=t.translate+s;l&&(c=-c);let p,h=!1;const m=20*Math.abs(t.velocity)*r.freeMode.momentumBounceRatio;let f;if(c<t.maxTranslate())r.freeMode.momentumBounce?(c+t.maxTranslate()<-m&&(c=t.maxTranslate()-m),p=t.maxTranslate(),h=!0,d.allowMomentumBounce=!0):c=t.maxTranslate(),r.loop&&r.centeredSlides&&(f=!0);else if(c>t.minTranslate())r.freeMode.momentumBounce?(c-t.minTranslate()>m&&(c=t.minTranslate()+m),p=t.minTranslate(),h=!0,d.allowMomentumBounce=!0):c=t.minTranslate(),r.loop&&r.centeredSlides&&(f=!0);else if(r.freeMode.sticky){let e;for(let t=0;t<o.length;t+=1)if(o[t]>-c){e=t;break}c=Math.abs(o[e]-c)<Math.abs(o[e-1]-c)||"next"===t.swipeDirection?o[e]:o[e-1],c=-c}if(f&&i("transitionEnd",(()=>{t.loopFix()})),0!==t.velocity){if(e=l?Math.abs((-c-t.translate)/t.velocity):Math.abs((c-t.translate)/t.velocity),r.freeMode.sticky){const s=Math.abs((l?-c:c)-t.translate),a=t.slidesSizesGrid[t.activeIndex];e=s<a?r.speed:s<2*a?1.5*r.speed:2.5*r.speed}}else if(r.freeMode.sticky)return void t.slideToClosest();r.freeMode.momentumBounce&&h?(t.updateProgress(p),t.setTransition(e),t.setTranslate(c),t.transitionStart(!0,t.swipeDirection),t.animating=!0,n.transitionEnd((()=>{t&&!t.destroyed&&d.allowMomentumBounce&&(a("momentumBounce"),t.setTransition(r.speed),setTimeout((()=>{t.setTranslate(p),n.transitionEnd((()=>{t&&!t.destroyed&&t.transitionEnd()}))}),0))}))):t.velocity?(a("_freeModeNoMomentumRelease"),t.updateProgress(c),t.setTransition(e),t.setTranslate(c),t.transitionStart(!0,t.swipeDirection),t.animating||(t.animating=!0,n.transitionEnd((()=>{t&&!t.destroyed&&t.transitionEnd()})))):t.updateProgress(c),t.updateActiveIndex(),t.updateSlidesClasses()}else{if(r.freeMode.sticky)return void t.slideToClosest();r.freeMode&&a("_freeModeNoMomentumRelease")}(!r.freeMode.momentum||c>=r.longSwipesMs)&&(t.updateProgress(),t.updateActiveIndex(),t.updateSlidesClasses())}}}})},function(e){let t,s,a,{swiper:i,extendParams:r}=e;r({grid:{rows:1,fill:"column"}}),i.grid={initSlides:e=>{const{slidesPerView:r}=i.params,{rows:n,fill:l}=i.params.grid;s=t/n,a=Math.floor(e/n),t=Math.floor(e/n)===e/n?e:Math.ceil(e/n)*n,"auto"!==r&&"row"===l&&(t=Math.max(t,r*n))},updateSlide:(e,r,n,l)=>{const{slidesPerGroup:o,spaceBetween:d}=i.params,{rows:c,fill:p}=i.params.grid;let u,h,m;if("row"===p&&o>1){const s=Math.floor(e/(o*c)),a=e-c*o*s,i=0===s?o:Math.min(Math.ceil((n-s*c*o)/c),o);m=Math.floor(a/i),h=a-m*i+s*o,u=h+m*t/c,r.css({"-webkit-order":u,order:u})}else"column"===p?(h=Math.floor(e/c),m=e-h*c,(h>a||h===a&&m===c-1)&&(m+=1,m>=c&&(m=0,h+=1))):(m=Math.floor(e/s),h=e-m*s);r.css(l("margin-top"),0!==m?d&&`${d}px`:"")},updateWrapperSize:(e,s,a)=>{const{spaceBetween:r,centeredSlides:n,roundLengths:l}=i.params,{rows:o}=i.params.grid;if(i.virtualSize=(e+r)*t,i.virtualSize=Math.ceil(i.virtualSize/o)-r,i.$wrapperEl.css({[a("width")]:`${i.virtualSize+r}px`}),n){s.splice(0,s.length);const e=[];for(let t=0;t<s.length;t+=1){let a=s[t];l&&(a=Math.floor(a)),s[t]<i.virtualSize+s[0]&&e.push(a)}s.push(...e)}}}},function(e){let{swiper:t}=e;Object.assign(t,{appendSlide:K.bind(t),prependSlide:Z.bind(t),addSlide:Q.bind(t),removeSlide:J.bind(t),removeAllSlides:ee.bind(t)})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({fadeEffect:{crossFade:!1,transformEl:null}}),te({effect:"fade",swiper:t,on:a,setTranslate:()=>{const{slides:e}=t,s=t.params.fadeEffect;for(let a=0;a<e.length;a+=1){const e=t.slides.eq(a);let i=-e[0].swiperSlideOffset;t.params.virtualTranslate||(i-=t.translate);let r=0;t.isHorizontal()||(r=i,i=0);const n=t.params.fadeEffect.crossFade?Math.max(1-Math.abs(e[0].progress),0):1+Math.min(Math.max(e[0].progress,-1),0);se(s,e).css({opacity:n}).transform(`translate3d(${i}px, ${r}px, 0px)`)}},setTransition:e=>{const{transformEl:s}=t.params.fadeEffect;(s?t.slides.find(s):t.slides).transition(e),ae({swiper:t,duration:e,transformEl:s,allSlides:!0})},overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!t.params.cssMode})})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({cubeEffect:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94}});const i=(e,t,s)=>{let a=s?e.find(".swiper-slide-shadow-left"):e.find(".swiper-slide-shadow-top"),i=s?e.find(".swiper-slide-shadow-right"):e.find(".swiper-slide-shadow-bottom");0===a.length&&(a=d(`<div class="swiper-slide-shadow-${s?"left":"top"}"></div>`),e.append(a)),0===i.length&&(i=d(`<div class="swiper-slide-shadow-${s?"right":"bottom"}"></div>`),e.append(i)),a.length&&(a[0].style.opacity=Math.max(-t,0)),i.length&&(i[0].style.opacity=Math.max(t,0))};te({effect:"cube",swiper:t,on:a,setTranslate:()=>{const{$el:e,$wrapperEl:s,slides:a,width:r,height:n,rtlTranslate:l,size:o,browser:c}=t,p=t.params.cubeEffect,u=t.isHorizontal(),h=t.virtual&&t.params.virtual.enabled;let m,f=0;p.shadow&&(u?(m=s.find(".swiper-cube-shadow"),0===m.length&&(m=d('<div class="swiper-cube-shadow"></div>'),s.append(m)),m.css({height:`${r}px`})):(m=e.find(".swiper-cube-shadow"),0===m.length&&(m=d('<div class="swiper-cube-shadow"></div>'),e.append(m))));for(let e=0;e<a.length;e+=1){const t=a.eq(e);let s=e;h&&(s=parseInt(t.attr("data-swiper-slide-index"),10));let r=90*s,n=Math.floor(r/360);l&&(r=-r,n=Math.floor(-r/360));const d=Math.max(Math.min(t[0].progress,1),-1);let c=0,m=0,g=0;s%4==0?(c=4*-n*o,g=0):(s-1)%4==0?(c=0,g=4*-n*o):(s-2)%4==0?(c=o+4*n*o,g=o):(s-3)%4==0&&(c=-o,g=3*o+4*o*n),l&&(c=-c),u||(m=c,c=0);const v=`rotateX(${u?0:-r}deg) rotateY(${u?r:0}deg) translate3d(${c}px, ${m}px, ${g}px)`;d<=1&&d>-1&&(f=90*s+90*d,l&&(f=90*-s-90*d)),t.transform(v),p.slideShadows&&i(t,d,u)}if(s.css({"-webkit-transform-origin":`50% 50% -${o/2}px`,"transform-origin":`50% 50% -${o/2}px`}),p.shadow)if(u)m.transform(`translate3d(0px, ${r/2+p.shadowOffset}px, ${-r/2}px) rotateX(90deg) rotateZ(0deg) scale(${p.shadowScale})`);else{const e=Math.abs(f)-90*Math.floor(Math.abs(f)/90),t=1.5-(Math.sin(2*e*Math.PI/360)/2+Math.cos(2*e*Math.PI/360)/2),s=p.shadowScale,a=p.shadowScale/t,i=p.shadowOffset;m.transform(`scale3d(${s}, 1, ${a}) translate3d(0px, ${n/2+i}px, ${-n/2/a}px) rotateX(-90deg)`)}const g=c.isSafari||c.isWebView?-o/2:0;s.transform(`translate3d(0px,0,${g}px) rotateX(${t.isHorizontal()?0:f}deg) rotateY(${t.isHorizontal()?-f:0}deg)`),s[0].style.setProperty("--swiper-cube-translate-z",`${g}px`)},setTransition:e=>{const{$el:s,slides:a}=t;a.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),t.params.cubeEffect.shadow&&!t.isHorizontal()&&s.find(".swiper-cube-shadow").transition(e)},recreateShadows:()=>{const e=t.isHorizontal();t.slides.each((t=>{const s=Math.max(Math.min(t.progress,1),-1);i(d(t),s,e)}))},getEffectParams:()=>t.params.cubeEffect,perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,resistanceRatio:0,spaceBetween:0,centeredSlides:!1,virtualTranslate:!0})})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({flipEffect:{slideShadows:!0,limitRotation:!0,transformEl:null}});const i=(e,s,a)=>{let i=t.isHorizontal()?e.find(".swiper-slide-shadow-left"):e.find(".swiper-slide-shadow-top"),r=t.isHorizontal()?e.find(".swiper-slide-shadow-right"):e.find(".swiper-slide-shadow-bottom");0===i.length&&(i=ie(a,e,t.isHorizontal()?"left":"top")),0===r.length&&(r=ie(a,e,t.isHorizontal()?"right":"bottom")),i.length&&(i[0].style.opacity=Math.max(-s,0)),r.length&&(r[0].style.opacity=Math.max(s,0))};te({effect:"flip",swiper:t,on:a,setTranslate:()=>{const{slides:e,rtlTranslate:s}=t,a=t.params.flipEffect;for(let r=0;r<e.length;r+=1){const n=e.eq(r);let l=n[0].progress;t.params.flipEffect.limitRotation&&(l=Math.max(Math.min(n[0].progress,1),-1));const o=n[0].swiperSlideOffset;let d=-180*l,c=0,p=t.params.cssMode?-o-t.translate:-o,u=0;t.isHorizontal()?s&&(d=-d):(u=p,p=0,c=-d,d=0),n[0].style.zIndex=-Math.abs(Math.round(l))+e.length,a.slideShadows&&i(n,l,a);const h=`translate3d(${p}px, ${u}px, 0px) rotateX(${c}deg) rotateY(${d}deg)`;se(a,n).transform(h)}},setTransition:e=>{const{transformEl:s}=t.params.flipEffect;(s?t.slides.find(s):t.slides).transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),ae({swiper:t,duration:e,transformEl:s})},recreateShadows:()=>{const e=t.params.flipEffect;t.slides.each((s=>{const a=d(s);let r=a[0].progress;t.params.flipEffect.limitRotation&&(r=Math.max(Math.min(s.progress,1),-1)),i(a,r,e)}))},getEffectParams:()=>t.params.flipEffect,perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!t.params.cssMode})})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0,transformEl:null}}),te({effect:"coverflow",swiper:t,on:a,setTranslate:()=>{const{width:e,height:s,slides:a,slidesSizesGrid:i}=t,r=t.params.coverflowEffect,n=t.isHorizontal(),l=t.translate,o=n?e/2-l:s/2-l,d=n?r.rotate:-r.rotate,c=r.depth;for(let e=0,t=a.length;e<t;e+=1){const t=a.eq(e),s=i[e],l=(o-t[0].swiperSlideOffset-s/2)/s,p="function"==typeof r.modifier?r.modifier(l):l*r.modifier;let u=n?d*p:0,h=n?0:d*p,m=-c*Math.abs(p),f=r.stretch;"string"==typeof f&&-1!==f.indexOf("%")&&(f=parseFloat(r.stretch)/100*s);let g=n?0:f*p,v=n?f*p:0,w=1-(1-r.scale)*Math.abs(p);Math.abs(v)<.001&&(v=0),Math.abs(g)<.001&&(g=0),Math.abs(m)<.001&&(m=0),Math.abs(u)<.001&&(u=0),Math.abs(h)<.001&&(h=0),Math.abs(w)<.001&&(w=0);const b=`translate3d(${v}px,${g}px,${m}px)  rotateX(${h}deg) rotateY(${u}deg) scale(${w})`;if(se(r,t).transform(b),t[0].style.zIndex=1-Math.abs(Math.round(p)),r.slideShadows){let e=n?t.find(".swiper-slide-shadow-left"):t.find(".swiper-slide-shadow-top"),s=n?t.find(".swiper-slide-shadow-right"):t.find(".swiper-slide-shadow-bottom");0===e.length&&(e=ie(r,t,n?"left":"top")),0===s.length&&(s=ie(r,t,n?"right":"bottom")),e.length&&(e[0].style.opacity=p>0?p:0),s.length&&(s[0].style.opacity=-p>0?-p:0)}}},setTransition:e=>{const{transformEl:s}=t.params.coverflowEffect;(s?t.slides.find(s):t.slides).transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0})})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({creativeEffect:{transformEl:null,limitProgress:1,shadowPerProgress:!1,progressMultiplier:1,perspective:!0,prev:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1},next:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1}}});const i=e=>"string"==typeof e?e:`${e}px`;te({effect:"creative",swiper:t,on:a,setTranslate:()=>{const{slides:e,$wrapperEl:s,slidesSizesGrid:a}=t,r=t.params.creativeEffect,{progressMultiplier:n}=r,l=t.params.centeredSlides;if(l){const e=a[0]/2-t.params.slidesOffsetBefore||0;s.transform(`translateX(calc(50% - ${e}px))`)}for(let s=0;s<e.length;s+=1){const a=e.eq(s),o=a[0].progress,d=Math.min(Math.max(a[0].progress,-r.limitProgress),r.limitProgress);let c=d;l||(c=Math.min(Math.max(a[0].originalProgress,-r.limitProgress),r.limitProgress));const p=a[0].swiperSlideOffset,u=[t.params.cssMode?-p-t.translate:-p,0,0],h=[0,0,0];let m=!1;t.isHorizontal()||(u[1]=u[0],u[0]=0);let f={translate:[0,0,0],rotate:[0,0,0],scale:1,opacity:1};d<0?(f=r.next,m=!0):d>0&&(f=r.prev,m=!0),u.forEach(((e,t)=>{u[t]=`calc(${e}px + (${i(f.translate[t])} * ${Math.abs(d*n)}))`})),h.forEach(((e,t)=>{h[t]=f.rotate[t]*Math.abs(d*n)})),a[0].style.zIndex=-Math.abs(Math.round(o))+e.length;const g=u.join(", "),v=`rotateX(${h[0]}deg) rotateY(${h[1]}deg) rotateZ(${h[2]}deg)`,w=c<0?`scale(${1+(1-f.scale)*c*n})`:`scale(${1-(1-f.scale)*c*n})`,b=c<0?1+(1-f.opacity)*c*n:1-(1-f.opacity)*c*n,x=`translate3d(${g}) ${v} ${w}`;if(m&&f.shadow||!m){let e=a.children(".swiper-slide-shadow");if(0===e.length&&f.shadow&&(e=ie(r,a)),e.length){const t=r.shadowPerProgress?d*(1/r.limitProgress):d;e[0].style.opacity=Math.min(Math.max(Math.abs(t),0),1)}}const y=se(r,a);y.transform(x).css({opacity:b}),f.origin&&y.css("transform-origin",f.origin)}},setTransition:e=>{const{transformEl:s}=t.params.creativeEffect;(s?t.slides.find(s):t.slides).transition(e).find(".swiper-slide-shadow").transition(e),ae({swiper:t,duration:e,transformEl:s,allSlides:!0})},perspective:()=>t.params.creativeEffect.perspective,overwriteParams:()=>({watchSlidesProgress:!0,virtualTranslate:!t.params.cssMode})})},function(e){let{swiper:t,extendParams:s,on:a}=e;s({cardsEffect:{slideShadows:!0,transformEl:null,rotate:!0,perSlideRotate:2,perSlideOffset:8}}),te({effect:"cards",swiper:t,on:a,setTranslate:()=>{const{slides:e,activeIndex:s}=t,a=t.params.cardsEffect,{startTranslate:i,isTouched:r}=t.touchEventsData,n=t.translate;for(let l=0;l<e.length;l+=1){const o=e.eq(l),d=o[0].progress,c=Math.min(Math.max(d,-4),4);let p=o[0].swiperSlideOffset;t.params.centeredSlides&&!t.params.cssMode&&t.$wrapperEl.transform(`translateX(${t.minTranslate()}px)`),t.params.centeredSlides&&t.params.cssMode&&(p-=e[0].swiperSlideOffset);let u=t.params.cssMode?-p-t.translate:-p,h=0;const m=-100*Math.abs(c);let f=1,g=-a.perSlideRotate*c,v=a.perSlideOffset-.75*Math.abs(c);const w=t.virtual&&t.params.virtual.enabled?t.virtual.from+l:l,b=(w===s||w===s-1)&&c>0&&c<1&&(r||t.params.cssMode)&&n<i,x=(w===s||w===s+1)&&c<0&&c>-1&&(r||t.params.cssMode)&&n>i;if(b||x){const e=(1-Math.abs((Math.abs(c)-.5)/.5))**.5;g+=-28*c*e,f+=-.5*e,v+=96*e,h=-25*e*Math.abs(c)+"%"}if(u=c<0?`calc(${u}px + (${v*Math.abs(c)}%))`:c>0?`calc(${u}px + (-${v*Math.abs(c)}%))`:`${u}px`,!t.isHorizontal()){const e=h;h=u,u=e}const y=c<0?""+(1+(1-f)*c):""+(1-(1-f)*c),E=`\n        translate3d(${u}, ${h}, ${m}px)\n        rotateZ(${a.rotate?g:0}deg)\n        scale(${y})\n      `;if(a.slideShadows){let e=o.find(".swiper-slide-shadow");0===e.length&&(e=ie(a,o)),e.length&&(e[0].style.opacity=Math.min(Math.max((Math.abs(c)-.5)/.5,0),1))}o[0].style.zIndex=-Math.abs(Math.round(d))+e.length;se(a,o).transform(E)}},setTransition:e=>{const{transformEl:s}=t.params.cardsEffect;(s?t.slides.find(s):t.slides).transition(e).find(".swiper-slide-shadow").transition(e),ae({swiper:t,duration:e,transformEl:s})},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0,virtualTranslate:!t.params.cssMode})})}];return V.use(re),V}));

// // Подробнее https://swiperjs.com

// // инициализируем swiper
let mainSlider = new Swiper('.main__slider', {
   slidesPerView: 1,
   loop: true,
   	// автопрокрутка
	autoplay: {
	   // пауза между прокруткой
	   delay: 500,
      pauseOnMouseEnter: true,
	},
   navigation: {
      nextEl: '.slider-arrow-next',
      prevEl: '.slider-arrow-prev'
     },
   pagination: {
        el: '.main__fraction',
        //фракция 
        type: 'fraction',
      //   кастомный вывод фракции
      formatFractionCurrent: function (number) {
           if (number < 10) {
            return '0' + number;
           } else {
            return number;
           }
         
        },
        formatFractionTotal: function (number) {
         if (number < 10) {
          return '0' + number;
         } else {
          return number;
         }
       
      }
   }
});

let rentSlider = new Swiper('.rent__slider', {
   slidesPerView: 1,
   //loop: true,
   navigation: {
      nextEl: '.rent__arrow-next',
      prevEl: '.rent__arrow-prev'
     },
     pagination: {
      el: '.rent__progressbar',
  
   // прогрессбар
      type: 'progressbar'
     },
  
});

let projectsSlider = new Swiper('.projects__slider', {
   slidesPerView: 1,
   //loop: true,
   navigation: {
      nextEl: '.projects__arrow-next',
      prevEl: '.projects__arrow-prev'
     },
  scrollbar: {
     el: '.projects__scrollbar',
     // возможность перетаскивать скролл
     draggable: true
   },
  // показывать превьюшки мини внизу
// нужно в html создать еще одну структуру слайдера
// миниатюры (превью)
thumbs: {
   // свайпер с миниатюрами и его настройки
   swiper: {
      el: '.projects__slider-mini',
      slidesPerView: 8,

   },
},
  
});

let projectsSliderMini = new Swiper('.projects__slider-mini', {
   slidesPerView: 8,
   //loop: true,
   spaceBetween: 30,
// ширина экрана
breakpoints: {
   320: {
      slidesPerView: 1.5,
   },
   450: {
      slidesPerView: 4,
   },
   768: {
      slidesPerView: 8,
   }
},
  
});

let catalogSlider = new Swiper('.catalog__slider', {
   slidesPerView: 4,
   //loop: true,
   spaceBetween: 30,
   centeredSlidesBoundes: true,
   navigation: {
      nextEl: '.catalog__arrow-next',
      prevEl: '.catalog__arrow-prev'
     },
     pagination: {
      el: '.catalog__progressbar',
  
   // прогрессбар
      type: 'progressbar'
     },
     breakpoints: {
      320: {
         slidesPerView: 1,
      },
      450: {
         slidesPerView: 2,
      },
      768: {
         slidesPerView: 3,
      },
      1258: {
         slidesPerView: 4,
      }
   },
  
});


let productPageSliderMini = new Swiper('.body-page-product__slider-mini', {
   slidesPerView: 3,
   //loop: true,
   //spaceBetween: 30,
// ширина экрана
// breakpoints: {
//    320: {
//       slidesPerView: 1.5,
//    },
//    450: {
//       slidesPerView: 4,
//    },
//    768: {
//       slidesPerView: 8,
//    }
// },
  
});


let productPageSlider = new Swiper('.body-page-product__slider', {
   slidesPerView: 1,
   //loop: true,
  // показывать превьюшки мини внизу
// нужно в html создать еще одну структуру слайдера
// миниатюры (превью)
thumbs: {
   // свайпер с миниатюрами и его настройки
   swiper: {
      el: '.body-page-product__slider-mini',
     slidesPerView: 3,

   },
},
  
});


let similarProductSlider = new Swiper('.similar-page-product__slider', {
   slidesPerView: 3,
   //loop: true,
  // показывать превьюшки мини внизу
// нужно в html создать еще одну структуру слайдера
// миниатюры (превью)
navigation: {
   nextEl: '.similar__arrow-next',
   prevEl: '.similar__arrow-prev'
  },
  pagination: {
   el: '.similar__progressbar',

// прогрессбар
   type: 'progressbar'
  },
spaceBetween: 30,

    // ширина экрана
breakpoints: {
   320: {
      slidesPerView: 1,
   },
   560: {
      slidesPerView: 2,
   },
   768: {
      slidesPerView: 3,
   }
},
});

let reviewsSlider = new Swiper('.reviews__slider', {
   slidesPerView: 3,
   spaceBetween: 30,
   //loop: true,
   navigation: {
      nextEl: '.reviews__arrow-next',
      prevEl: '.reviews__arrow-prev'
     },
  scrollbar: {
     el: '.reviews__scrollbar',
     // возможность перетаскивать скролл
     draggable: true,
     dragSize: 'auto',
   },
    // ширина экрана
breakpoints: {
   320: {
      slidesPerView: 1,
   },
   560: {
      slidesPerView: 2,
   },
   950: {
      slidesPerView: 3,
   }
},
  // показывать превьюшки мини внизу
// нужно в html создать еще одну структуру слайдера
// миниатюры (превью)

  
});

let projectSliderMini = new Swiper('.project__slider-mini', {
   slidesPerView: 6,
   //loop: true,
 spaceBetween: 30,
 breakpoints: {
   320: {
      slidesPerView: 2,
   },
   560: {
      slidesPerView: 4,
   },
   950: {
      slidesPerView: 6,
   }
},
   
  
});

let projectSlider = new Swiper('.project__slider', {
   slidesPerView: 1,
   
   //loop: true,
   navigation: {
      nextEl: '.project__arrow_next',
      prevEl: '.project__arrow_prev'
     },
     thumbs: {
      // свайпер с миниатюрами и его настройки
      swiper: {
         el: '.project__slider-mini',
        slidesPerView: 6,
        spaceBetween: 30,
        breakpoints: {
         320: {
            slidesPerView: 2,
         },
         560: {
            slidesPerView: 4,
         },
         950: {
            slidesPerView: 6,
         }
      },
      },
   },
   
  
});

let otherSlider = new Swiper('.other-projects__slider', {
   slidesPerView: 3,
   spaceBetween: 30,
   //loop: true,
   navigation: {
      nextEl: '.other-projects__arrow_next',
      prevEl: '.other-projects__arrow_prev'
     },
   
     breakpoints: {
      320: {
         slidesPerView: 1,
      },
      560: {
         slidesPerView: 2,
      },
      950: {
         slidesPerView: 3,
      }
   },
  
});

let otherArticlesSlider = new Swiper('.other-articles__slider', {
   slidesPerView: 3,
   spaceBetween: 30,
   //loop: true,
   navigation: {
      nextEl: '.other-articles__arrow_next',
      prevEl: '.other-articles__arrow_prev'
     },
   
     breakpoints: {
      320: {
         slidesPerView: 1,
      },
      560: {
         slidesPerView: 2,
      },
      950: {
         slidesPerView: 3,
      }
   },
  
});



// эффекты переключения слайдов 
// переворот
//effect: 'flip',

// дополнение к flip
//flipEffect: {
   //тень
   //slideShadows: true,
   // показ только активного слайда
   //limitRotation: true
//},

//эффекты переключения слайдов
//куб
//effect: 'cube',

// дополнение к cube 
//cubeEffect: {
   // настройки тени
  // slideShadows: true,
  // shadow: true,
 //  shadowOffset: 20,
   //shadowScale: 0.94
//},

//эффекты переключения слайда
//эффекты потока
//effect: 'coverflow',
// \дополнение к сщverflow
//coverflowEffect: {
   // угол 
  // rotate: 20,
   // наложение
  // stretch: 50,
   // тень
   //slideShadows: true
//});


   // обновить свайпер при изменении элементов слайдера
//    observer: true,
   
//    // обновить свайпер при изменении родительских элементов слайдера
//    observeParents: true,
   
//    // обновить свайпер при изменении дочерних элементов слайда
//    observeSlideChildren: true,

//    // количество слайдов для показа
//    slidesPerView: 1,

//    // отключение функционала если слайдов меньше чем нужно
//    // watchOverflow: true,

//    // отступ между слайдами
//    spaceBetween: 0,

//    // автовысота
//    autoHeight: true,

//    // скорость
//    speed: 800,

//    // бесконечный слайдер
//    // loop: true,

// 	// // автопрокрутка
// 	// autoplay: {
// 	//    // пауза между прокруткой
// 	//    delay: 1000,
// 	//    // закончить на последнем слайде
// 	//    stopOnLastSlide: true,
// 	//    // отключить после ручного переключения
// 	//    disableOnInteraction: false,
// 	// },

// 	// // включение/отключение перетаскивания на пк
// 	// simulateTouch: false,
// 	// // чувствительность свайпа (чем больше, тем чувствительнее)
// 	// touchRatio: 0,


// 	// // ускорить загрузку сайта 
// 	// // добавить в html картинке класс swiper-lazy
// 	// // добавить в html картинке data-src а в src - img.1x1.png
// 	// // добавить в html gjcле картинки элемент с классом swiper-lazy-preloader (иконка подгрузки)
// 	// // отключение предзагрузки картинок
// 	// preloadImages: false,
// 	// // lazy loading
// 	// // подгрузка картинок
// 	// lazy: {
// 	//    // подгружать на старте переключения слайда
// 	//    loadOnTransitionStart: false,
// 	//    // подгрузить предыдущую и следующую картинки
// 	//    loadPrevNext: false,
	
// 	// },


// 	// 	// стрелки 
// 	// 	navigation: {
// 	//      nextEl: '.swiper-button-next',
// 	//      prevEl: '.swiper-button-prev'
// 	// 	},


// 	// навигация
// 	// буллеты, текущее положение, прогрессбар
// 	// pagination: {
//    //      el: '.swiper-pagination',
//    //      // буллеты
//    //      clickable: true,
//    //      // динамические буллеты
//    //      dynamicBullets: true,
//    //      // кастомные буллеты
//    //      renderBullet: function (index, className) {
//    //      	return '<span class="' + className + '">' + (index + 1) + '</span>span>'
//    //      },
//    //      фракция 
//    //      type: 'fraction',
//    //      // // кастомный вывод фракции
//    //      renderFraction: function (currentClass, totalClass) {
//    //         return 'Фото <span class="' + currentClass + '"></span>' + 
//    //         ' из ' + 
//    //         '<span class="' + totalClass + '"><span>';
//    //      }
//       // // прогрессбар
//       // type: 'progressbar'
// 	// },
//   // скролл 
//    // scrollbar: {
//    //   el: '.swiper-scrollbar',
//    //   // возможность перетаскивать скролл
//    //   draggable: true
//    // },


// //    // угол срабатывания свайпа/перетаскивания
// //    touchAngle: 45,
// //    // курсор перетаскивания
// //    grabCursor: true,


// //    // переключение при клике на слайд
// //    slideToClickSlide: true,

// //    // хэш навигация в HTML дописываем дата атрибут data-hash="slide-1"
// //    hashNavigation: {
// //       // jncлеживать состояние
// //       watchState: true,
// //    },

// //    // управление клавиатурой
// //    keyboard: {
// //       // включить/выключить 
// //       enabled: true,
// //       // включить/выключить только когда слайдер в пределах вьюпорта
// //       onlyInViewport: true,
// //       // включить/выключить управление клавишами pageUp, pageDown
// //       pageUpDown: true,
// //    },

// //    // управление колесом мыши
// //    mousewheel: {
// //       // чувствительность колеса мыши
// //       sensitivity: 1,
// //       // класс объекта на котором будет срабатывать прокрутка мышью
// //       eventsTarget: '.image-slider'
// //    },

// //    // количество пролистываемых слайдов
// //    slidesPerGroup: 1,

// //    // активный слайд по центру
// //    centeredSlides: true,

// //    // стартовый слайд
// //    inititialSlide: 1,

// //    // мультирядность (нужно отключать автовысоту и изменить в стилях высоту)
// //    slidePerColumn: 1,



// //    // количество дублирующих слйдов
// //    loopedSlides: 0,

// //    // свободный режим
// //    freeMode: true,



// //    // вертикальный слайдер
// //    direction: 'horizontal', //vertical


// //    // эффекты переключения слайдов
// //    // листание
// //    effect: 'slide',


// //    // смена прозрачности
// //    // effect: 'fade',
// //    // дополнение к fade 
// //    // fadeEffect: {
// //       // параллельная смена прозрачности
// //       // crossFade: true
// //    // },

// // // эффекты переключения слайдов 
// // // переворот
// // // effect: 'flip',

// // // // дополнение к flip
// // // flipEffect: {
// // //    //тень
// // //    slideShadows: true,
// // //    // показ только активного слайда
// // //    limitRotation: true
// // // },

// // // эффекты переключения слайдов
// // // куб
// // // effect: 'cube',

// // // // дополнение к cube 
// // // cubeEffect: {
// // //    // настройки тени
// // //    slideShadows: true,
// // //    shadow: true,
// // //    shadowOffset: 20,
// // //    shadowScale: 0.94
// // // },

// // // эффекты переключения слайда
// // // эффекты потока
// // // effect: 'coverflow',
// // // // \дополнение к сщverflow
// // // coverflowEffect: {
// // //    // угол 
// // //    rotate: 20,
// // //    // наложение
// // //    stretch: 50,
// // //    // тень
// // //    slideShadows: true

// // // } ,

// // // адаптив брейкпоинты
// // // ширина экрана
// // breakpoints: {
// //    320: {
// //       slidesPerView: 1,
// //    },
// //    480: {
// //       slidesPerView: 1,
// //    },
// //    992: {
// //       slidesPerView: 1,
// //    }
// // },



// // // слежка за видимыми слайдами
// // watchSlidesProgress: true,
// // // добавление класса видимым слайдам
// // watchSledesVisibility: true,


// // // зум картинки
// // // в html нужно добавить диву с картинкой класс swiper-zoom-container
// // zoom: {
// //    // максимальное увеличение
// //    maxRatio: 5,
// //    // минимальное увеличение
// //    minRatio: 1,
// // },


// // // показывать превьюшки мини внизу
// // // нужно в html создать еще одну структуру слайдера
// // // миниатюры (превью)
// // thumbs: {
// //    // свайпер с миниатюрами и его настройки
// //    swiper: {
// //       el: '.image-mini-slider',
// //       slidesPerView: 3,

// //    },
// // },

// // // корректная работа перетаскивания/свайпа для дочернего слайдера
// // // nested: true,


// // //чтобы 2 слайдера перелистывались одновременно/зависимо друг от друга
// // // создаем переменные слайдеров
// // // slider1.controller.control = slider2;
// // // slider2.controller.control = slider1;


// // // паралакс слайдер
// // parallax: true,


// // // виртуальные слайды
// // virtual: {
// //    slides: (function () {
// //       let slide = []
// //       for (let i = 0; i < 500; i++) {
// //          slide.push('<div class="image-slider__text">Слайд №' + i + '</div>');
// //       }
// //       return slide;
// //    }()),
// // },

// // // доступность
// // a11y: {
// //    // вулючить/выключить 
// //    enabled: true,
// //    // сообщения 
// //    prevSlideMessage: 'Previous slide',
// //    nextSlideMessage: 'Next slide',
// //    firstSlideMessage: 'This is the first slide',
// //    lastSlideMessage: 'This is the last slide',
// //    paginationBulletMessage: 'Go to slide {{index}}',
// //    notificationClass: 'swiper-notification',
// //    containerMessage: '',
// //    containerRoleDescriptionMessage: '',
// //    itemRoleDescriptionMessage: '',

// // },

// // // управление слайдером самому
// // // создаем переменную слайдер
// // // mySlider.params.speed = 3000,
// // // mySlider.slides.length

// // // методы
// // // обновить слайдер
// // // mySlider.update()

// // // переключиться на слайд 2 скорость 800
// // // mySlider.slideTo(2, 800)

// // // события 
// // // on: {
// // //    // событие инициализации
// // //    init: function () {

// // //    },
// // //    // событие смены слайда
// // //    slideChange: function() {

// // //    },
// });





// анимация бургер меню открыть-закрыть
// html сниппет burger 
// стили в header.scss 


const burgerButton = document.querySelector('.menu__icon');
const burgerBody = document.querySelector('.menu__body');

   
   burgerButton.addEventListener('click', function(event) {

      burgerButton.classList.toggle('active');
      burgerBody.classList.toggle('active');
      if (burgerBody.classList.contains('active')) {
         document.querySelector('body').classList.add('lock');
      } else {
         document.querySelector('body').classList.remove('lock');
      }
   
})

// HTML data-da="relf перенести(класс), позиция на которую перенести, брэйкпоинт события"


let originalPositions = [];
let da_elements = document.querySelectorAll('[data-da]');
let da_elements_array = [];
let da_match_media = [];


// заполняем массивы
if (da_elements.length > 0) {
	let number = 0;
	for (let index = 0; index < da_elements.length; index++) {
		const da_element = da_elements[index];
		const da_move = da_element.getAttribute('data-da');
		const da_array = da_move.split(',');
		if (da_array.length == 3) {
			da_element.setAttribute('data-da-index', number);
			// заполняем массив первоначальных позиций
			originalPositions[number] = {
				"parent": da_element.parentNode,
				"index": index_in_parent(da_element)

			};

			// заполняем массив элементов
			da_elements_array[number] = {
				"element": da_element,
				"destination": document.querySelector('.' + da_array[0].trim()),
				"place": da_array[1].trim(),
				"breakpoint": da_array[2].trim()
			}
			number++;
		}
	}

	
	dynamic_adapt_sort(da_elements_array);

	//coplftv события в точке брэйкпоинта
	for (let index = 0; index < da_elements_array.length; index++) {
		const el = da_elements_array[index];
		const da_breakpoint = el.breakpoint;
		const da_type = "max";   //для ьщиilFirst gjvенять на min

		da_match_media.push(window.matchMedia("(" + da_type + "-width: " + da_breakpoint + "px)"));
		da_match_media[index].addListener(dynamic_adapt);
	}
}


// основная функция
function dynamic_adapt(e) {
for (let index = 0; index < da_elements_array.length; index++) {
	const el = da_elements_array[index];
	const da_element = el.element;
	const da_destination = el.destination;
	const da_place = el.place;
	const da_breakpoint = el.breakpoint;
	const da_classname = "_dynamic-adapt_" + da_breakpoint;

	
	if (da_match_media[index].matches) {
		
		// gthебрасываем элементы
		if (!da_element.classList.contains(da_classname)) {

			let actual_index;
			if (da_place == 'first') {
				actual_index = index_of_elements(da_destination)[0];
				
			} else if (da_place == 'last') {
				
				actual_index = index_of_elements(da_destination)[index_of_elements(da_destination).length];
			} else {
				actual_index = index_of_elements(da_destination)[da_place];

			}

			da_destination.insertBefore(da_element, da_destination.children[actual_index]);
			da_element.classList.add(da_classname);
			
		}
	} else {
		// возвращаем на место
		if (da_element.classList.contains(da_classname)) {
			dynamic_adapt_back(da_element);
			da_element.classList.remove(da_classname);
		}
	}
}
// custom_adapt();
}


// вызов основной функции
dynamic_adapt();


// функция возврата на места
function dynamic_adapt_back (el) {
const da_index = el.getAttribute('data-da-index');
const original_place = originalPositions[da_index];
const parent_place = original_place['parent'];
const index_place = original_place['index'];
const actual_index = index_of_elements(parent_place, true)[index_place];
parent_place.insertBefore(el, parent_place.children[actual_index]);
}

// функция получения индекса внутри родителя
function index_in_parent(el) {
let children = Array.prototype.slice.call(el.parentNode.children);
return children.indexOf(el);


}

// aeyкция получения массива индексов элементов внутри родителя
function index_of_elements (parent, back) {

const children = parent.children;

const children_array = [];
for (let index = 0; index < children.length; index++) {
	const children_element = children[index];
	if (back) {
		children_array.push(index);
	} else {
		// // исключаем перенесенный элемент
		if (children_element.getAttribute('data-da') == null) {
			children_array.push(index);
		}
	}
}
return children_array;
}

// сортировка объекта
function dynamic_adapt_sort (arr) {
arr.sort(function(a, b) {
	if (a.breakpoint > b.breakpoint) {
		return -1;
	} else {
		return 1; //для mobile first поменять
	}
});
arr.sort(function(a, b) {
	if (a.place > b.place) {
		return 1;
	} else {
		return -1; //для mobile first поменять
	}
});

}



!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).noUiSlider={})}(this,function(ot){"use strict";function n(t){return"object"==typeof t&&"function"==typeof t.to}function st(t){t.parentElement.removeChild(t)}function at(t){return null!=t}function lt(t){t.preventDefault()}function i(t){return"number"==typeof t&&!isNaN(t)&&isFinite(t)}function ut(t,e,r){0<r&&(ft(t,e),setTimeout(function(){dt(t,e)},r))}function ct(t){return Math.max(Math.min(t,100),0)}function pt(t){return Array.isArray(t)?t:[t]}function e(t){t=(t=String(t)).split(".");return 1<t.length?t[1].length:0}function ft(t,e){t.classList&&!/\s/.test(e)?t.classList.add(e):t.className+=" "+e}function dt(t,e){t.classList&&!/\s/.test(e)?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," ")}function ht(t){var e=void 0!==window.pageXOffset,r="CSS1Compat"===(t.compatMode||"");return{x:e?window.pageXOffset:(r?t.documentElement:t.body).scrollLeft,y:e?window.pageYOffset:(r?t.documentElement:t.body).scrollTop}}function s(t,e){return 100/(e-t)}function a(t,e,r){return 100*e/(t[r+1]-t[r])}function l(t,e){for(var r=1;t>=e[r];)r+=1;return r}function r(t,e,r){if(r>=t.slice(-1)[0])return 100;var n=l(r,t),i=t[n-1],o=t[n],t=e[n-1],n=e[n];return t+(r=r,a(o=[i,o],o[0]<0?r+Math.abs(o[0]):r-o[0],0)/s(t,n))}function o(t,e,r,n){if(100===n)return n;var i=l(n,t),o=t[i-1],s=t[i];return r?(s-o)/2<n-o?s:o:e[i-1]?t[i-1]+(t=n-t[i-1],i=e[i-1],Math.round(t/i)*i):n}ot.PipsMode=void 0,(H=ot.PipsMode||(ot.PipsMode={})).Range="range",H.Steps="steps",H.Positions="positions",H.Count="count",H.Values="values",ot.PipsType=void 0,(H=ot.PipsType||(ot.PipsType={}))[H.None=-1]="None",H[H.NoValue=0]="NoValue",H[H.LargeValue=1]="LargeValue",H[H.SmallValue=2]="SmallValue";var u=(t.prototype.getDistance=function(t){for(var e=[],r=0;r<this.xNumSteps.length-1;r++)e[r]=a(this.xVal,t,r);return e},t.prototype.getAbsoluteDistance=function(t,e,r){var n=0;if(t<this.xPct[this.xPct.length-1])for(;t>this.xPct[n+1];)n++;else t===this.xPct[this.xPct.length-1]&&(n=this.xPct.length-2);r||t!==this.xPct[n+1]||n++;for(var i,o=1,s=(e=null===e?[]:e)[n],a=0,l=0,u=0,c=r?(t-this.xPct[n])/(this.xPct[n+1]-this.xPct[n]):(this.xPct[n+1]-t)/(this.xPct[n+1]-this.xPct[n]);0<s;)i=this.xPct[n+1+u]-this.xPct[n+u],100<e[n+u]*o+100-100*c?(a=i*c,o=(s-100*c)/e[n+u],c=1):(a=e[n+u]*i/100*o,o=0),r?(l-=a,1<=this.xPct.length+u&&u--):(l+=a,1<=this.xPct.length-u&&u++),s=e[n+u]*o;return t+l},t.prototype.toStepping=function(t){return t=r(this.xVal,this.xPct,t)},t.prototype.fromStepping=function(t){return function(t,e,r){if(100<=r)return t.slice(-1)[0];var n=l(r,e),i=t[n-1],o=t[n],t=e[n-1],n=e[n];return(r-t)*s(t,n)*((o=[i,o])[1]-o[0])/100+o[0]}(this.xVal,this.xPct,t)},t.prototype.getStep=function(t){return t=o(this.xPct,this.xSteps,this.snap,t)},t.prototype.getDefaultStep=function(t,e,r){var n=l(t,this.xPct);return(100===t||e&&t===this.xPct[n-1])&&(n=Math.max(n-1,1)),(this.xVal[n]-this.xVal[n-1])/r},t.prototype.getNearbySteps=function(t){t=l(t,this.xPct);return{stepBefore:{startValue:this.xVal[t-2],step:this.xNumSteps[t-2],highestStep:this.xHighestCompleteStep[t-2]},thisStep:{startValue:this.xVal[t-1],step:this.xNumSteps[t-1],highestStep:this.xHighestCompleteStep[t-1]},stepAfter:{startValue:this.xVal[t],step:this.xNumSteps[t],highestStep:this.xHighestCompleteStep[t]}}},t.prototype.countStepDecimals=function(){var t=this.xNumSteps.map(e);return Math.max.apply(null,t)},t.prototype.hasNoSize=function(){return this.xVal[0]===this.xVal[this.xVal.length-1]},t.prototype.convert=function(t){return this.getStep(this.toStepping(t))},t.prototype.handleEntryPoint=function(t,e){t="min"===t?0:"max"===t?100:parseFloat(t);if(!i(t)||!i(e[0]))throw new Error("noUiSlider: 'range' value isn't numeric.");this.xPct.push(t),this.xVal.push(e[0]);e=Number(e[1]);t?this.xSteps.push(!isNaN(e)&&e):isNaN(e)||(this.xSteps[0]=e),this.xHighestCompleteStep.push(0)},t.prototype.handleStepPoint=function(t,e){e&&(this.xVal[t]!==this.xVal[t+1]?(this.xSteps[t]=a([this.xVal[t],this.xVal[t+1]],e,0)/s(this.xPct[t],this.xPct[t+1]),e=(this.xVal[t+1]-this.xVal[t])/this.xNumSteps[t],e=Math.ceil(Number(e.toFixed(3))-1),e=this.xVal[t]+this.xNumSteps[t]*e,this.xHighestCompleteStep[t]=e):this.xSteps[t]=this.xHighestCompleteStep[t]=this.xVal[t])},t);function t(e,t,r){var n;this.xPct=[],this.xVal=[],this.xSteps=[],this.xNumSteps=[],this.xHighestCompleteStep=[],this.xSteps=[r||!1],this.xNumSteps=[!1],this.snap=t;var i=[];for(Object.keys(e).forEach(function(t){i.push([pt(e[t]),t])}),i.sort(function(t,e){return t[0][0]-e[0][0]}),n=0;n<i.length;n++)this.handleEntryPoint(i[n][1],i[n][0]);for(this.xNumSteps=this.xSteps.slice(0),n=0;n<this.xNumSteps.length;n++)this.handleStepPoint(n,this.xNumSteps[n])}var c={to:function(t){return void 0===t?"":t.toFixed(2)},from:Number},p={target:"target",base:"base",origin:"origin",handle:"handle",handleLower:"handle-lower",handleUpper:"handle-upper",touchArea:"touch-area",horizontal:"horizontal",vertical:"vertical",background:"background",connect:"connect",connects:"connects",ltr:"ltr",rtl:"rtl",textDirectionLtr:"txt-dir-ltr",textDirectionRtl:"txt-dir-rtl",draggable:"draggable",drag:"state-drag",tap:"state-tap",active:"active",tooltip:"tooltip",pips:"pips",pipsHorizontal:"pips-horizontal",pipsVertical:"pips-vertical",marker:"marker",markerHorizontal:"marker-horizontal",markerVertical:"marker-vertical",markerNormal:"marker-normal",markerLarge:"marker-large",markerSub:"marker-sub",value:"value",valueHorizontal:"value-horizontal",valueVertical:"value-vertical",valueNormal:"value-normal",valueLarge:"value-large",valueSub:"value-sub"},mt={tooltips:".__tooltips",aria:".__aria"};function f(t,e){if(!i(e))throw new Error("noUiSlider: 'step' is not numeric.");t.singleStep=e}function d(t,e){if(!i(e))throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");t.keyboardPageMultiplier=e}function h(t,e){if(!i(e))throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");t.keyboardMultiplier=e}function m(t,e){if(!i(e))throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");t.keyboardDefaultStep=e}function g(t,e){if("object"!=typeof e||Array.isArray(e))throw new Error("noUiSlider: 'range' is not an object.");if(void 0===e.min||void 0===e.max)throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");t.spectrum=new u(e,t.snap||!1,t.singleStep)}function v(t,e){if(e=pt(e),!Array.isArray(e)||!e.length)throw new Error("noUiSlider: 'start' option is incorrect.");t.handles=e.length,t.start=e}function b(t,e){if("boolean"!=typeof e)throw new Error("noUiSlider: 'snap' option must be a boolean.");t.snap=e}function S(t,e){if("boolean"!=typeof e)throw new Error("noUiSlider: 'animate' option must be a boolean.");t.animate=e}function x(t,e){if("number"!=typeof e)throw new Error("noUiSlider: 'animationDuration' option must be a number.");t.animationDuration=e}function y(t,e){var r,n=[!1];if("lower"===e?e=[!0,!1]:"upper"===e&&(e=[!1,!0]),!0===e||!1===e){for(r=1;r<t.handles;r++)n.push(e);n.push(!1)}else{if(!Array.isArray(e)||!e.length||e.length!==t.handles+1)throw new Error("noUiSlider: 'connect' option doesn't match handle count.");n=e}t.connect=n}function w(t,e){switch(e){case"horizontal":t.ort=0;break;case"vertical":t.ort=1;break;default:throw new Error("noUiSlider: 'orientation' option is invalid.")}}function E(t,e){if(!i(e))throw new Error("noUiSlider: 'margin' option must be numeric.");0!==e&&(t.margin=t.spectrum.getDistance(e))}function P(t,e){if(!i(e))throw new Error("noUiSlider: 'limit' option must be numeric.");if(t.limit=t.spectrum.getDistance(e),!t.limit||t.handles<2)throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.")}function C(t,e){var r;if(!i(e)&&!Array.isArray(e))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(Array.isArray(e)&&2!==e.length&&!i(e[0])&&!i(e[1]))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(0!==e){for(Array.isArray(e)||(e=[e,e]),t.padding=[t.spectrum.getDistance(e[0]),t.spectrum.getDistance(e[1])],r=0;r<t.spectrum.xNumSteps.length-1;r++)if(t.padding[0][r]<0||t.padding[1][r]<0)throw new Error("noUiSlider: 'padding' option must be a positive number(s).");var n=e[0]+e[1],e=t.spectrum.xVal[0];if(1<n/(t.spectrum.xVal[t.spectrum.xVal.length-1]-e))throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.")}}function N(t,e){switch(e){case"ltr":t.dir=0;break;case"rtl":t.dir=1;break;default:throw new Error("noUiSlider: 'direction' option was not recognized.")}}function V(t,e){if("string"!=typeof e)throw new Error("noUiSlider: 'behaviour' must be a string containing options.");var r=0<=e.indexOf("tap"),n=0<=e.indexOf("drag"),i=0<=e.indexOf("fixed"),o=0<=e.indexOf("snap"),s=0<=e.indexOf("hover"),a=0<=e.indexOf("unconstrained"),l=0<=e.indexOf("drag-all"),e=0<=e.indexOf("smooth-steps");if(i){if(2!==t.handles)throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");E(t,t.start[1]-t.start[0])}if(a&&(t.margin||t.limit))throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");t.events={tap:r||o,drag:n,dragAll:l,smoothSteps:e,fixed:i,snap:o,hover:s,unconstrained:a}}function k(t,e){if(!1!==e)if(!0===e||n(e)){t.tooltips=[];for(var r=0;r<t.handles;r++)t.tooltips.push(e)}else{if((e=pt(e)).length!==t.handles)throw new Error("noUiSlider: must pass a formatter for all handles.");e.forEach(function(t){if("boolean"!=typeof t&&!n(t))throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.")}),t.tooltips=e}}function M(t,e){if(e.length!==t.handles)throw new Error("noUiSlider: must pass a attributes for all handles.");t.handleAttributes=e}function A(t,e){if(!n(e))throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");t.ariaFormat=e}function U(t,e){if(!n(r=e)||"function"!=typeof r.from)throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");var r;t.format=e}function D(t,e){if("boolean"!=typeof e)throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");t.keyboardSupport=e}function O(t,e){t.documentElement=e}function L(t,e){if("string"!=typeof e&&!1!==e)throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");t.cssPrefix=e}function T(e,r){if("object"!=typeof r)throw new Error("noUiSlider: 'cssClasses' must be an object.");"string"==typeof e.cssPrefix?(e.cssClasses={},Object.keys(r).forEach(function(t){e.cssClasses[t]=e.cssPrefix+r[t]})):e.cssClasses=r}function gt(e){var r={margin:null,limit:null,padding:null,animate:!0,animationDuration:300,ariaFormat:c,format:c},n={step:{r:!1,t:f},keyboardPageMultiplier:{r:!1,t:d},keyboardMultiplier:{r:!1,t:h},keyboardDefaultStep:{r:!1,t:m},start:{r:!0,t:v},connect:{r:!0,t:y},direction:{r:!0,t:N},snap:{r:!1,t:b},animate:{r:!1,t:S},animationDuration:{r:!1,t:x},range:{r:!0,t:g},orientation:{r:!1,t:w},margin:{r:!1,t:E},limit:{r:!1,t:P},padding:{r:!1,t:C},behaviour:{r:!0,t:V},ariaFormat:{r:!1,t:A},format:{r:!1,t:U},tooltips:{r:!1,t:k},keyboardSupport:{r:!0,t:D},documentElement:{r:!1,t:O},cssPrefix:{r:!0,t:L},cssClasses:{r:!0,t:T},handleAttributes:{r:!1,t:M}},i={connect:!1,direction:"ltr",behaviour:"tap",orientation:"horizontal",keyboardSupport:!0,cssPrefix:"noUi-",cssClasses:p,keyboardPageMultiplier:5,keyboardMultiplier:1,keyboardDefaultStep:10};e.format&&!e.ariaFormat&&(e.ariaFormat=e.format),Object.keys(n).forEach(function(t){if(at(e[t])||void 0!==i[t])n[t].t(r,(at(e[t])?e:i)[t]);else if(n[t].r)throw new Error("noUiSlider: '"+t+"' is required.")}),r.pips=e.pips;var t=document.createElement("div"),o=void 0!==t.style.msTransform,t=void 0!==t.style.transform;r.transformRule=t?"transform":o?"msTransform":"webkitTransform";return r.style=[["left","top"],["right","bottom"]][r.dir][r.ort],r}function j(t,f,o){var i,l,a,n,s,u,c=window.navigator.pointerEnabled?{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",end:"mouseup touchend"},p=window.CSS&&CSS.supports&&CSS.supports("touch-action","none")&&function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("test",null,e)}catch(t){}return t}(),d=t,S=f.spectrum,h=[],m=[],g=[],v=0,b={},x=t.ownerDocument,y=f.documentElement||x.documentElement,w=x.body,E="rtl"===x.dir||1===f.ort?0:100;function P(t,e){var r=x.createElement("div");return e&&ft(r,e),t.appendChild(r),r}function C(t,e){var r,t=P(t,f.cssClasses.origin),n=P(t,f.cssClasses.handle);return P(n,f.cssClasses.touchArea),n.setAttribute("data-handle",String(e)),f.keyboardSupport&&(n.setAttribute("tabindex","0"),n.addEventListener("keydown",function(t){return function(t,e){if(V()||k(e))return!1;var r=["Left","Right"],n=["Down","Up"],i=["PageDown","PageUp"],o=["Home","End"];f.dir&&!f.ort?r.reverse():f.ort&&!f.dir&&(n.reverse(),i.reverse());var s=t.key.replace("Arrow",""),a=s===i[0],l=s===i[1],i=s===n[0]||s===r[0]||a,n=s===n[1]||s===r[1]||l,r=s===o[0],o=s===o[1];if(!(i||n||r||o))return!0;if(t.preventDefault(),n||i){var u=i?0:1,u=nt(e)[u];if(null===u)return!1;!1===u&&(u=S.getDefaultStep(m[e],i,f.keyboardDefaultStep)),u*=l||a?f.keyboardPageMultiplier:f.keyboardMultiplier,u=Math.max(u,1e-7),u*=i?-1:1,u=h[e]+u}else u=o?f.spectrum.xVal[f.spectrum.xVal.length-1]:f.spectrum.xVal[0];return Q(e,S.toStepping(u),!0,!0),I("slide",e),I("update",e),I("change",e),I("set",e),!1}(t,e)})),void 0!==f.handleAttributes&&(r=f.handleAttributes[e],Object.keys(r).forEach(function(t){n.setAttribute(t,r[t])})),n.setAttribute("role","slider"),n.setAttribute("aria-orientation",f.ort?"vertical":"horizontal"),0===e?ft(n,f.cssClasses.handleLower):e===f.handles-1&&ft(n,f.cssClasses.handleUpper),t}function N(t,e){return!!e&&P(t,f.cssClasses.connect)}function e(t,e){return!(!f.tooltips||!f.tooltips[e])&&P(t.firstChild,f.cssClasses.tooltip)}function V(){return d.hasAttribute("disabled")}function k(t){return l[t].hasAttribute("disabled")}function M(){s&&(Y("update"+mt.tooltips),s.forEach(function(t){t&&st(t)}),s=null)}function A(){M(),s=l.map(e),X("update"+mt.tooltips,function(t,e,r){s&&f.tooltips&&!1!==s[e]&&(t=t[e],!0!==f.tooltips[e]&&(t=f.tooltips[e].to(r[e])),s[e].innerHTML=t)})}function U(t,e){return t.map(function(t){return S.fromStepping(e?S.getStep(t):t)})}function D(d){var h=function(t){if(t.mode===ot.PipsMode.Range||t.mode===ot.PipsMode.Steps)return S.xVal;if(t.mode!==ot.PipsMode.Count)return t.mode===ot.PipsMode.Positions?U(t.values,t.stepped):t.mode===ot.PipsMode.Values?t.stepped?t.values.map(function(t){return S.fromStepping(S.getStep(S.toStepping(t)))}):t.values:[];if(t.values<2)throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");for(var e=t.values-1,r=100/e,n=[];e--;)n[e]=e*r;return n.push(100),U(n,t.stepped)}(d),m={},t=S.xVal[0],e=S.xVal[S.xVal.length-1],g=!1,v=!1,b=0;return(h=h.slice().sort(function(t,e){return t-e}).filter(function(t){return!this[t]&&(this[t]=!0)},{}))[0]!==t&&(h.unshift(t),g=!0),h[h.length-1]!==e&&(h.push(e),v=!0),h.forEach(function(t,e){var r,n,i,o,s,a,l,u,t=t,c=h[e+1],p=d.mode===ot.PipsMode.Steps,f=(f=p?S.xNumSteps[e]:f)||c-t;for(void 0===c&&(c=t),f=Math.max(f,1e-7),r=t;r<=c;r=Number((r+f).toFixed(7))){for(a=(o=(i=S.toStepping(r))-b)/(d.density||1),u=o/(l=Math.round(a)),n=1;n<=l;n+=1)m[(s=b+n*u).toFixed(5)]=[S.fromStepping(s),0];a=-1<h.indexOf(r)?ot.PipsType.LargeValue:p?ot.PipsType.SmallValue:ot.PipsType.NoValue,!e&&g&&r!==c&&(a=0),r===c&&v||(m[i.toFixed(5)]=[r,a]),b=i}}),m}function O(i,o,s){var t,a=x.createElement("div"),n=((t={})[ot.PipsType.None]="",t[ot.PipsType.NoValue]=f.cssClasses.valueNormal,t[ot.PipsType.LargeValue]=f.cssClasses.valueLarge,t[ot.PipsType.SmallValue]=f.cssClasses.valueSub,t),l=((t={})[ot.PipsType.None]="",t[ot.PipsType.NoValue]=f.cssClasses.markerNormal,t[ot.PipsType.LargeValue]=f.cssClasses.markerLarge,t[ot.PipsType.SmallValue]=f.cssClasses.markerSub,t),u=[f.cssClasses.valueHorizontal,f.cssClasses.valueVertical],c=[f.cssClasses.markerHorizontal,f.cssClasses.markerVertical];function p(t,e){var r=e===f.cssClasses.value;return e+" "+(r?u:c)[f.ort]+" "+(r?n:l)[t]}return ft(a,f.cssClasses.pips),ft(a,0===f.ort?f.cssClasses.pipsHorizontal:f.cssClasses.pipsVertical),Object.keys(i).forEach(function(t){var e,r,n;r=i[e=t][0],n=i[t][1],(n=o?o(r,n):n)!==ot.PipsType.None&&((t=P(a,!1)).className=p(n,f.cssClasses.marker),t.style[f.style]=e+"%",n>ot.PipsType.NoValue&&((t=P(a,!1)).className=p(n,f.cssClasses.value),t.setAttribute("data-value",String(r)),t.style[f.style]=e+"%",t.innerHTML=String(s.to(r))))}),a}function L(){n&&(st(n),n=null)}function T(t){L();var e=D(t),r=t.filter,t=t.format||{to:function(t){return String(Math.round(t))}};return n=d.appendChild(O(e,r,t))}function j(){var t=i.getBoundingClientRect(),e="offset"+["Width","Height"][f.ort];return 0===f.ort?t.width||i[e]:t.height||i[e]}function z(n,i,o,s){function e(t){var e,r=function(e,t,r){var n=0===e.type.indexOf("touch"),i=0===e.type.indexOf("mouse"),o=0===e.type.indexOf("pointer"),s=0,a=0;0===e.type.indexOf("MSPointer")&&(o=!0);if("mousedown"===e.type&&!e.buttons&&!e.touches)return!1;if(n){var l=function(t){t=t.target;return t===r||r.contains(t)||e.composed&&e.composedPath().shift()===r};if("touchstart"===e.type){n=Array.prototype.filter.call(e.touches,l);if(1<n.length)return!1;s=n[0].pageX,a=n[0].pageY}else{l=Array.prototype.find.call(e.changedTouches,l);if(!l)return!1;s=l.pageX,a=l.pageY}}t=t||ht(x),(i||o)&&(s=e.clientX+t.x,a=e.clientY+t.y);return e.pageOffset=t,e.points=[s,a],e.cursor=i||o,e}(t,s.pageOffset,s.target||i);return!!r&&(!(V()&&!s.doNotReject)&&(e=d,t=f.cssClasses.tap,!((e.classList?e.classList.contains(t):new RegExp("\\b"+t+"\\b").test(e.className))&&!s.doNotReject)&&(!(n===c.start&&void 0!==r.buttons&&1<r.buttons)&&((!s.hover||!r.buttons)&&(p||r.preventDefault(),r.calcPoint=r.points[f.ort],void o(r,s))))))}var r=[];return n.split(" ").forEach(function(t){i.addEventListener(t,e,!!p&&{passive:!0}),r.push([t,e])}),r}function H(t){var e,r,n=ct(n=100*(t-(n=i,e=f.ort,r=n.getBoundingClientRect(),n=(t=n.ownerDocument).documentElement,t=ht(t),/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)&&(t.x=0),e?r.top+t.y-n.clientTop:r.left+t.x-n.clientLeft))/j());return f.dir?100-n:n}function F(t,e){"mouseout"===t.type&&"HTML"===t.target.nodeName&&null===t.relatedTarget&&_(t,e)}function R(t,e){if(-1===navigator.appVersion.indexOf("MSIE 9")&&0===t.buttons&&0!==e.buttonsProperty)return _(t,e);t=(f.dir?-1:1)*(t.calcPoint-e.startCalcPoint);G(0<t,100*t/e.baseSize,e.locations,e.handleNumbers,e.connect)}function _(t,e){e.handle&&(dt(e.handle,f.cssClasses.active),--v),e.listeners.forEach(function(t){y.removeEventListener(t[0],t[1])}),0===v&&(dt(d,f.cssClasses.drag),K(),t.cursor&&(w.style.cursor="",w.removeEventListener("selectstart",lt))),f.events.smoothSteps&&(e.handleNumbers.forEach(function(t){Q(t,m[t],!0,!0,!1,!1)}),e.handleNumbers.forEach(function(t){I("update",t)})),e.handleNumbers.forEach(function(t){I("change",t),I("set",t),I("end",t)})}function B(t,e){var r,n,i,o;e.handleNumbers.some(k)||(1===e.handleNumbers.length&&(o=l[e.handleNumbers[0]].children[0],v+=1,ft(o,f.cssClasses.active)),t.stopPropagation(),n=z(c.move,y,R,{target:t.target,handle:o,connect:e.connect,listeners:r=[],startCalcPoint:t.calcPoint,baseSize:j(),pageOffset:t.pageOffset,handleNumbers:e.handleNumbers,buttonsProperty:t.buttons,locations:m.slice()}),i=z(c.end,y,_,{target:t.target,handle:o,listeners:r,doNotReject:!0,handleNumbers:e.handleNumbers}),o=z("mouseout",y,F,{target:t.target,handle:o,listeners:r,doNotReject:!0,handleNumbers:e.handleNumbers}),r.push.apply(r,n.concat(i,o)),t.cursor&&(w.style.cursor=getComputedStyle(t.target).cursor,1<l.length&&ft(d,f.cssClasses.drag),w.addEventListener("selectstart",lt,!1)),e.handleNumbers.forEach(function(t){I("start",t)}))}function r(t){t.stopPropagation();var i,o,s,e=H(t.calcPoint),r=(i=e,s=!(o=100),l.forEach(function(t,e){var r,n;k(e)||(r=m[e],((n=Math.abs(r-i))<o||n<=o&&r<i||100===n&&100===o)&&(s=e,o=n))}),s);!1!==r&&(f.events.snap||ut(d,f.cssClasses.tap,f.animationDuration),Q(r,e,!0,!0),K(),I("slide",r,!0),I("update",r,!0),f.events.snap?B(t,{handleNumbers:[r]}):(I("change",r,!0),I("set",r,!0)))}function q(t){var t=H(t.calcPoint),t=S.getStep(t),e=S.fromStepping(t);Object.keys(b).forEach(function(t){"hover"===t.split(".")[0]&&b[t].forEach(function(t){t.call(it,e)})})}function X(t,e){b[t]=b[t]||[],b[t].push(e),"update"===t.split(".")[0]&&l.forEach(function(t,e){I("update",e)})}function Y(t){var n=t&&t.split(".")[0],i=n?t.substring(n.length):t;Object.keys(b).forEach(function(t){var e=t.split(".")[0],r=t.substring(e.length);n&&n!==e||i&&i!==r||((e=r)!==mt.aria&&e!==mt.tooltips||i===r)&&delete b[t]})}function I(r,n,i){Object.keys(b).forEach(function(t){var e=t.split(".")[0];r===e&&b[t].forEach(function(t){t.call(it,h.map(f.format.to),n,h.slice(),i||!1,m.slice(),it)})})}function W(t,e,r,n,i,o,s){var a;return 1<l.length&&!f.events.unconstrained&&(n&&0<e&&(a=S.getAbsoluteDistance(t[e-1],f.margin,!1),r=Math.max(r,a)),i&&e<l.length-1&&(a=S.getAbsoluteDistance(t[e+1],f.margin,!0),r=Math.min(r,a))),1<l.length&&f.limit&&(n&&0<e&&(a=S.getAbsoluteDistance(t[e-1],f.limit,!1),r=Math.min(r,a)),i&&e<l.length-1&&(a=S.getAbsoluteDistance(t[e+1],f.limit,!0),r=Math.max(r,a))),f.padding&&(0===e&&(a=S.getAbsoluteDistance(0,f.padding[0],!1),r=Math.max(r,a)),e===l.length-1&&(a=S.getAbsoluteDistance(100,f.padding[1],!0),r=Math.min(r,a))),!((r=ct(r=!s?S.getStep(r):r))===t[e]&&!o)&&r}function $(t,e){var r=f.ort;return(r?e:t)+", "+(r?t:e)}function G(t,r,n,e,i){var o=n.slice(),s=e[0],a=f.events.smoothSteps,l=[!t,t],u=[t,!t];e=e.slice(),t&&e.reverse(),1<e.length?e.forEach(function(t,e){e=W(o,t,o[t]+r,l[e],u[e],!1,a);!1===e?r=0:(r=e-o[t],o[t]=e)}):l=u=[!0];var c=!1;e.forEach(function(t,e){c=Q(t,n[t]+r,l[e],u[e],!1,a)||c}),c&&(e.forEach(function(t){I("update",t),I("slide",t)}),null!=i&&I("drag",s))}function J(t,e){return f.dir?100-t-e:t}function K(){g.forEach(function(t){var e=50<m[t]?-1:1,e=3+(l.length+e*t);l[t].style.zIndex=String(e)})}function Q(t,e,r,n,i,o){return!1!==(e=i?e:W(m,t,e,r,n,!1,o))&&(e=e,m[t=t]=e,h[t]=S.fromStepping(e),e="translate("+$(J(e,0)-E+"%","0")+")",l[t].style[f.transformRule]=e,Z(t),Z(t+1),!0)}function Z(t){var e,r;a[t]&&(r=100,e="translate("+$(J(e=(e=0)!==t?m[t-1]:e,r=(r=t!==a.length-1?m[t]:r)-e)+"%","0")+")",r="scale("+$(r/100,"1")+")",a[t].style[f.transformRule]=e+" "+r)}function tt(t,e){return null===t||!1===t||void 0===t?m[e]:("number"==typeof t&&(t=String(t)),!1===(t=!1!==(t=f.format.from(t))?S.toStepping(t):t)||isNaN(t)?m[e]:t)}function et(t,e,r){var n=pt(t),t=void 0===m[0];e=void 0===e||e,f.animate&&!t&&ut(d,f.cssClasses.tap,f.animationDuration),g.forEach(function(t){Q(t,tt(n[t],t),!0,!1,r)});var i,o=1===g.length?0:1;for(t&&S.hasNoSize()&&(r=!0,m[0]=0,1<g.length&&(i=100/(g.length-1),g.forEach(function(t){m[t]=t*i})));o<g.length;++o)g.forEach(function(t){Q(t,m[t],!0,!0,r)});K(),g.forEach(function(t){I("update",t),null!==n[t]&&e&&I("set",t)})}function rt(t){if(t=void 0===t?!1:t)return 1===h.length?h[0]:h.slice(0);t=h.map(f.format.to);return 1===t.length?t[0]:t}function nt(t){var e=m[t],r=S.getNearbySteps(e),n=h[t],i=r.thisStep.step,t=null;if(f.snap)return[n-r.stepBefore.startValue||null,r.stepAfter.startValue-n||null];!1!==i&&n+i>r.stepAfter.startValue&&(i=r.stepAfter.startValue-n),t=n>r.thisStep.startValue?r.thisStep.step:!1!==r.stepBefore.step&&n-r.stepBefore.highestStep,100===e?i=null:0===e&&(t=null);e=S.countStepDecimals();return null!==i&&!1!==i&&(i=Number(i.toFixed(e))),[t=null!==t&&!1!==t?Number(t.toFixed(e)):t,i]}ft(t=d,f.cssClasses.target),0===f.dir?ft(t,f.cssClasses.ltr):ft(t,f.cssClasses.rtl),0===f.ort?ft(t,f.cssClasses.horizontal):ft(t,f.cssClasses.vertical),ft(t,"rtl"===getComputedStyle(t).direction?f.cssClasses.textDirectionRtl:f.cssClasses.textDirectionLtr),i=P(t,f.cssClasses.base),function(t,e){var r=P(e,f.cssClasses.connects);l=[],(a=[]).push(N(r,t[0]));for(var n=0;n<f.handles;n++)l.push(C(e,n)),g[n]=n,a.push(N(r,t[n+1]))}(f.connect,i),(u=f.events).fixed||l.forEach(function(t,e){z(c.start,t.children[0],B,{handleNumbers:[e]})}),u.tap&&z(c.start,i,r,{}),u.hover&&z(c.move,i,q,{hover:!0}),u.drag&&a.forEach(function(e,t){var r,n,i,o,s;!1!==e&&0!==t&&t!==a.length-1&&(r=l[t-1],n=l[t],i=[e],o=[r,n],s=[t-1,t],ft(e,f.cssClasses.draggable),u.fixed&&(i.push(r.children[0]),i.push(n.children[0])),u.dragAll&&(o=l,s=g),i.forEach(function(t){z(c.start,t,B,{handles:o,handleNumbers:s,connect:e})}))}),et(f.start),f.pips&&T(f.pips),f.tooltips&&A(),Y("update"+mt.aria),X("update"+mt.aria,function(t,e,o,r,s){g.forEach(function(t){var e=l[t],r=W(m,t,0,!0,!0,!0),n=W(m,t,100,!0,!0,!0),i=s[t],t=String(f.ariaFormat.to(o[t])),r=S.fromStepping(r).toFixed(1),n=S.fromStepping(n).toFixed(1),i=S.fromStepping(i).toFixed(1);e.children[0].setAttribute("aria-valuemin",r),e.children[0].setAttribute("aria-valuemax",n),e.children[0].setAttribute("aria-valuenow",i),e.children[0].setAttribute("aria-valuetext",t)})});var it={destroy:function(){for(Y(mt.aria),Y(mt.tooltips),Object.keys(f.cssClasses).forEach(function(t){dt(d,f.cssClasses[t])});d.firstChild;)d.removeChild(d.firstChild);delete d.noUiSlider},steps:function(){return g.map(nt)},on:X,off:Y,get:rt,set:et,setHandle:function(t,e,r,n){if(!(0<=(t=Number(t))&&t<g.length))throw new Error("noUiSlider: invalid handle number, got: "+t);Q(t,tt(e,t),!0,!0,n),I("update",t),r&&I("set",t)},reset:function(t){et(f.start,t)},__moveHandles:function(t,e,r){G(t,e,m,r)},options:o,updateOptions:function(e,t){var r=rt(),n=["margin","limit","padding","range","animate","snap","step","format","pips","tooltips"];n.forEach(function(t){void 0!==e[t]&&(o[t]=e[t])});var i=gt(o);n.forEach(function(t){void 0!==e[t]&&(f[t]=i[t])}),S=i.spectrum,f.margin=i.margin,f.limit=i.limit,f.padding=i.padding,f.pips?T(f.pips):L(),(f.tooltips?A:M)(),m=[],et(at(e.start)?e.start:r,t)},target:d,removePips:L,removeTooltips:M,getPositions:function(){return m.slice()},getTooltips:function(){return s},getOrigins:function(){return l},pips:T};return it}function z(t,e){if(!t||!t.nodeName)throw new Error("noUiSlider: create requires a single element, got: "+t);if(t.noUiSlider)throw new Error("noUiSlider: Slider was already initialized.");e=j(t,gt(e),e);return t.noUiSlider=e}var H={__spectrum:u,cssClasses:p,create:z};ot.create=z,ot.cssClasses=p,ot.default=H,Object.defineProperty(ot,"__esModule",{value:!0})});
const rangeItems = document.querySelectorAll('[data-range]');


if (rangeItems.length > 0) {

    rangeItems.forEach(rangeItem => {
        const fromValue = rangeItem.querySelector('[data-range-from]');
        const toValue = rangeItem.querySelector('[data-range-to]');
        const item = rangeItem.querySelector('[data-range-item]');
        const inputsArray = [fromValue, toValue];
       
        // инициализация слайдера
        noUiSlider.create(item, {
        start: [Number(fromValue.value), Number(toValue.value)],
        connect: true,
        step: 1,
    //     tooltips: [
    //     true, // no tooltip
    //     //wNumb({decimals: 1}), // tooltip with custom formatting
    //     true, // tooltip with default formatting
    // ],
        range: {
        'min': [Number(fromValue.dataset.rangeFrom)],
        'max': [Number(toValue.dataset.rangeTo)]
    }
});


        // связка слайдера с инпутамим
        //от слайдера к инпутам
        item.noUiSlider.on('update', function (values, handle) {
            if (inputsArray[handle].getAttribute("data-range-from")) {
                inputsArray[handle].value = "от " + Math.round(values[handle]);
            } else {
                inputsArray[handle].value = "до " + Math.round(values[handle]);
            }
            

        });
        


        // от инпутов к слайдеру
        function createRangeArray (i, value) {
            let arr = [null, null];
            arr[i] = value;
            item.noUiSlider.set(arr);
        }

        inputsArray.forEach((el, index) => {
            el.addEventListener('change', function () {
                

            createRangeArray(index, el.value);
            console.log(el);
            
        });
        })
       

        

    });




}
const selects = document.querySelectorAll('.select');

if (selects.length > 0) {

selects.forEach(function(select) {

let dataIndexCount = 0;
let dataImgCount = 0;

const selectContainerClass = "custom-select";
const titleClass = "custom-select__title"
const options = select.options;
const selectedOption = options[select.selectedIndex];
const ulOptionsClass = "custom-select__options";
const selectedClass = "selected";
const imgClass = "custom-select__img";
const btnActiveClass = "active";
const ulActiveClass = "open";



// if (localStorage.getItem('selected')) {
// 	select.selectedIndex = localStorage.getItem('selected');
// }

let createSelectContainer = document.createElement('div');
createSelectContainer.className = selectContainerClass;


let createSelectBtn = document.createElement('button');
let btnSpan = document.createElement('span');
createSelectBtn.appendChild(btnSpan);
createSelectBtn.className = titleClass;
btnSpan.textContent = options[0].textContent;


if (selectedOption.getAttribute('data-srcImage')) {
	let selectedImg = document.createElement('img');
	const source = selectedOption.getAttribute('data-SrcImage');
	selectedImg.setAttribute('src', source);
	createSelectBtn.appendChild(selectedImg);
}

let createSelectUl = document.createElement('ul');
createSelectUl.className = ulOptionsClass;
createSelectUl.hidden = true;
createSelectContainer.appendChild(createSelectUl);





for (let i = 0; i < options.length; i++) {
	let createSelectLi = document.createElement('li');
   let liSpan = document.createElement('span');
   createSelectLi.appendChild(liSpan);
   liSpan.textContent = options[i].textContent;
   
   createSelectLi.setAttribute('value', options[i].value);
   createSelectLi.setAttribute('data-index', `${dataIndexCount++}`);

   createSelectUl.appendChild(createSelectLi);

   if (selectedOption.textContent === options[i].textContent) {
   	createSelectLi.classList.add('selected');
   	btnSpan.textContent = options[i].textContent;
   }

   if (options[dataImgCount++].getAttribute('data-srcImage')) {

   	let srcImg = options[i].getAttribute('data-srcImage');
   	let liImg = document.createElement('img');
   	liImg.setAttribute('src', srcImg);
   	liImg.classList(imgClass);
   	createSelectLi.appendChild(liImg);
   }

}

createSelectUl.addEventListener('click', function(e) {
const target = e.target;

createSelectBtn.innerHTML = target.closest('li').innerHTML;
select.options.selectedIndex = target.closest('li').getAttribute('data-index');
triggerChange(select);

for (let i = 0; i < options.length; i++) {
	createSelectUl.querySelectorAll('li')[i].classList.remove(selectedClass);
	target.closest('li').classList.add(selectedClass);


	// запись в память браузера выбранных значений
	// localStorage.setItem('selectedItem', target.closest('li').getAttribute('data-index'));
	// localStorage.setItem('btn', target.closest('li').innerHTML);
	// localStorage.setItem('selected', options[select.selectedIndex].value);



}


})


   createSelectBtn.addEventListener('click', function(e) {
      e.preventDefault();
	createSelectBtn.classList.toggle(btnActiveClass);
	createSelectUl.classList.toggle(ulActiveClass);
	ulToggle(createSelectUl);
})


   document.addEventListener('mouseup', function(e) {
   	if (!createSelectBtn.contains(e.target)) {
   		createSelectBtn.classList.remove(btnActiveClass);
   		createSelectUl.classList.remove(ulActiveClass);
   		ulToggle(createSelectUl);
   	}
   })


   // if (localStorage.getItem('selectedItem')) {
   // 	for (let i = 0; i < options[i]; i++) {
   // 		createSelectUl.querySelectorAll('li')[i].classList.remove(selectedClass);

   // 	}

   // 	createSelectUl.querySelectorAll('li')[localStorage.getItem('selectedItem')].classList.add(selectedClass);

   // }

   //  if (localStorage.getItem('btn')) {
   //     createSelectBtn.innerHTML = localStorage.getItem('btn');
   //  }

    createSelectContainer.appendChild(createSelectBtn);
    createSelectContainer.appendChild(createSelectUl);
    select.parentElement.insertBefore(createSelectContainer, select);



    // создаем событие срфnge 
    function triggerChange(element) {
      const changeEvent = new Event('change');
      element.dispatchEvent(changeEvent);
    }

    select.style.display = 'none';



 // slide toggle
  let hideUl= (target, duration=500)=> {
     if (!target.classList.contains('_slide')) {
     	target.classList.add('_slide');
     	target.style.transitionProperty = 'height, margin, padding';
     	target.style.transitionDuration = duration + 'ms';
     	target.style.height = target.offsetHeight + 'px';
     	target.offsetHeight;
     	target.style.overflow = 'hidden';
     	target.style.height = 0;
     	target.style.paddingTop = 0;
     	target.style.paddingBottom = 0;
     	target.style.marginTop = 0;
     	target.style.marginBottom = 0; 
     	window.setTimeout(() => {
     		target.hidden = true;
     		target.style.removeProperty('height');
     		target.style.removeProperty('padding-top');
     		target.style.removeProperty('padding-bottom');
     		target.style.removeProperty('margin-top');
     		target.style.removeProperty('margin-bottom');
     		target.style.removeProperty('overflow');
     		target.style.removeProperty('transition-duration');
     		target.style.removeProperty('transition-property');
     		target.classList.remove('_slide');


     	}, duration);
     }
  }

  let showUl= (target, duration=500)=> {
     if (!target.classList.contains('_slide')) {
     	target.classList.add('_slide');
     	if (target.hidden) {
     		target.hidden = false;
     	}
     	let height = target.offsetHeight;
     
     	target.style.overflow = 'hidden';
     	target.style.height = 0;
     	target.style.paddingTop = 0;
     	target.style.paddingBottom = 0;
     	target.style.marginTop = 0;
     	target.style.marginBottom = 0; 
     	target.offsetHeight;
     	target.style.transitionProperty = 'height, margin, padding';
     	target.style.transitionDuration = duration + 'ms';
     	target.style.height = height + 'px';
     	target.style.removeProperty('padding-top');
     	target.style.removeProperty('padding-bottom');
     	target.style.removeProperty('margin-top');
     	target.style.removeProperty('margin-bottom');
     	window.setTimeout(() => {
     		target.style.removeProperty('height');
     		target.style.removeProperty('overflow');
     		target.style.removeProperty('transition-duration');
     		target.style.removeProperty('transition-property');
     		target.classList.remove('_slide');


     	}, duration);
     }
  }

  let ulToggle = (target, duration = 500) => {
  	if (!target.classList.contains('open')) {
  		return hideUl(target, duration);
  	} else {
  		return showUl(target, duration);
  	}
  }
})
}














// у родителя data-spoilers
// если нужно с определенного разрешения data-spoilers="992,max"
// у открывающей кнопки/заголовка data-spoiler

// получаем коллекцию элементов с data атрибут spoilers 
const spoillersArray = document.querySelectorAll('[data-spoilers]');
if (spoillersArray.length > 0) {
	// разделяем все спойлеры на обычные и те, 
	// которые работают на определенных размерах экранов

	// получаем обычные спойлеры
	const spoilersRegular = Array.from(spoillersArray).filter(function (item, index, self) {
		return !item.dataset.spoilers.split(',')[0];
		
	});


	// инициализируем обычные спойлеры
	if (spoilersRegular.length > 0) {
		initSpoilers(spoilersRegular);
	}

	// получаем спойлеры с медиа запросами
	const spoilersMedia = Array.from(spoillersArray).filter(function (item, index, self) {
		return item.dataset.spoilers.split(',')[0];
	});

	// инициализирум спойлеры с медиа запросами
	if (spoilersMedia.length > 0) {
		const breakpointsArray = [];
		spoilersMedia.forEach(item => {
			const params = item.dataset.spoilers;
			const breakpoint = {};
			const paramsArray = params.split(',');
			breakpoint.value = paramsArray[0];
			breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : "max";
			breakpoint.item = item;
			breakpointsArray.push(breakpoint);
		});


		// получаем уникальные брэйкпоинты
		let mediaQueries = breakpointsArray.map(function(item) {
         return '(' + item.type + '-width: ' + item.value + 'px),' + item.value + ',' + item.type;
		});

      mediaQueries = mediaQueries.filter(function(item, index, self) {
         return self.indexOf(item) === index;

      })


      // работаем с каждым брэйкпоинтом
      mediaQueries.forEach(breakpoint => {
      	const paramsArray = breakpoint.split(',');
         const mediaBreakepoint = paramsArray[1];
         const mediaType = paramsArray[2];
         const matchMedia = window.matchMedia(paramsArray[0]);
                  // объекты с нужными условиями
         const spoillersArray = breakpointsArray.filter(function(item) {
      	
      	if (item.value === mediaBreakepoint && item.type === mediaType) {
      		return true;
      		
      	}
});
         
      	// события 
      matchMedia.addListener(function() {
      	initSpoilers(spoillersArray, matchMedia);
      });
      initSpoilers(spoillersArray, matchMedia);

      

      });



      
	};
};

// инициализация 
function initSpoilers(spoillersArray, matchMedia = false) {
	spoillersArray.forEach(spoilersBlock => {
		spoilersBlock = matchMedia ? spoilersBlock.item : spoilersBlock;
		

		if (matchMedia.matches || !matchMedia) {
			spoilersBlock.classList.add('init');
			initSpoilerBody(spoilersBlock);
			spoilersBlock.addEventListener('click', setSpoilerAction);
		} else {
			spoilersBlock.classList.remove('init');
			initSpoilerBody(spoilersBlock, false);
			spoilersBlock.removeEventListener('click', setSpoilerAction);
		};
	})
};


// работа с контентом
 function initSpoilerBody(spoilersBlock, hideSpoilerBody = true) {
 	const spoilerTitles = spoilersBlock.querySelectorAll('[data-spoiler]');
 	if (spoilerTitles.length > 0) {
 		spoilerTitles.forEach(spoilerTitle => {
 			if (hideSpoilerBody) {
 				spoilerTitle.removeAttribute('tabindex');
 				if (!spoilerTitle.classList.contains('active')) {
 					spoilerTitle.nextElementSibling.hidden = true; 
 				}
 			} else {
 				spoilerTitle.setAttribute('tabindex', '-1');
 				spoilerTitle.nextElementSibling.hidden = false;

 			};
 		});
 	};
 };

 function setSpoilerAction(e) {
 	const el = e.target;
 	if (el.hasAttribute('data-spoiler') || el.closest('[data-spoiler]')) {
       const spoilerTitle = el.hasAttribute('data-spoiler') ? el : el.closest('[data-spoiler]');
       const spoilersBlock = spoilerTitle.closest('[data-spoilers]');
       const oneSpoiler = spoilersBlock.hasAttribute('data-one-spoiler') ? true : false;
       if (!spoilersBlock.querySelectorAll('._slide').length) {
       	if (oneSpoiler && spoilerTitle.classList.contains('active')) {
       		hideSpoilersBody(spoilersBlock);
       	};
       	spoilerTitle.classList.toggle('active');
       	slideToggle(spoilerTitle.nextElementSibling,300);
       };
       e.preventDefault();
 };
 	};
 	

function hideSpoilersBody(spoilersBlock) {
	const spoilerActiveTitle = spoilersBlock.querySelector('[data-spoiler].active');
	if (spoilerActiveTitle) {
		spoilerActiveTitle.classList.remove('active');
		slideUp(spoilerActiveTitle.nextElementSibling,300);
	}
}



  // slide toggle
  let slideUp= (target, duration=500)=> {
     if (!target.classList.contains('_slide')) {
     	target.classList.add('_slide');
     	target.style.transitionProperty = 'height, margin, padding';
     	target.style.transitionDuration = duration + 'ms';
     	target.style.height = target.offsetHeight + 'px';
     	target.offsetHeight;
     	target.style.overflow = 'hidden';
     	target.style.height = 0;
     	target.style.paddingTop = 0;
     	target.style.paddingBottom = 0;
     	target.style.marginTop = 0;
     	target.style.marginBottom = 0; 
     	window.setTimeout(() => {
     		target.hidden = true;
     		target.style.removeProperty('height');
     		target.style.removeProperty('padding-top');
     		target.style.removeProperty('padding-bottom');
     		target.style.removeProperty('margin-top');
     		target.style.removeProperty('margin-bottom');
     		target.style.removeProperty('overflow');
     		target.style.removeProperty('transition-duration');
     		target.style.removeProperty('transition-property');
     		target.classList.remove('_slide');


     	}, duration);
     }
  }

  let slideDown= (target, duration=500)=> {
     if (!target.classList.contains('_slide')) {
     	target.classList.add('_slide');
     	if (target.hidden) {
     		target.hidden = false;
     	}
     	let height = target.offsetHeight;
     
     	target.style.overflow = 'hidden';
     	target.style.height = 0;
     	target.style.paddingTop = 0;
     	target.style.paddingBottom = 0;
     	target.style.marginTop = 0;
     	target.style.marginBottom = 0; 
     	target.offsetHeight;
     	target.style.transitionProperty = 'height, margin, padding';
     	target.style.transitionDuration = duration + 'ms';
     	target.style.height = height + 'px';
     	target.style.removeProperty('padding-top');
     	target.style.removeProperty('padding-bottom');
     	target.style.removeProperty('margin-top');
     	target.style.removeProperty('margin-bottom');
     	window.setTimeout(() => {
     		target.style.removeProperty('height');
     		target.style.removeProperty('overflow');
     		target.style.removeProperty('transition-duration');
     		target.style.removeProperty('transition-property');
     		target.classList.remove('_slide');


     	}, duration);
     }
  }

  let slideToggle = (target, duration = 500) => {
  	if (target.hidden) {
  		return slideDown(target, duration);
  	} else {
  		return slideUp(target, duration);
  	}
  }
const tabs = document.querySelectorAll('.tabs');
if (tabs.length > 0) {
	tabs.forEach(function (el) {
		const tabTitles = el.querySelectorAll('[data-tab]');
		if(tabTitles.length > 0) {
			for (let i = 0; i < tabTitles.length; i++) {
				const titleValue = tabTitles[i].getAttribute('data-tab');
				const tabBlock = document.getElementById(titleValue);

				tabTitles[i].addEventListener('click', function(e) {
					e.preventDefault();
					
					initBlock(tabTitles[i], tabBlock);
					anotherTitlesActive (tabTitles[i], tabBlock);
				})
			}
		}
	})
}

function initBlock(tabTitle, tabBlock) {
   if (!tabTitle.classList.contains('active')) {
   	tabTitle.classList.add('active');
   	tabBlock.classList.add('show');


   } 
}

function anotherTitlesActive(tabTitle, tabBlock) {
    const array = tabTitle.parentElement.children;
 
    for (let i = 0; i < array.length; i++) {
     
    	if (array[i] !== tabTitle && array[i].classList.contains('active')) {
    		
    		array[i].classList.remove('active');
         console.log(array[i].classList);
    		const titleValueRemove = array[i].getAttribute('data-tab');
		   const blockRemove = document.getElementById(titleValueRemove);
    		
    		blockRemove.classList.remove('show');
    	}
    }
}
const popupLinks = document.querySelectorAll('[data-popup]');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');


let unlock = true;

const timeout = 800;

// задаем функцию на клик по popup-link
if (popupLinks.length > 0) {
	for (let index = 0; index < popupLinks.length; index++) {
		const popupLink = popupLinks[index];
		popupLink.addEventListener('click', function(e) {
			const popupName = popupLink.getAttribute('data-popup').replace('#', '');
			const currentPopup = document.getElementById(popupName);
			popupOpen(currentPopup);
			e.preventDefault();
     
		});
	}
}

//  для закрытия popup при клике на кнопку закрыть

const popupCloseIcon = document.querySelectorAll('[data-close]');
if (popupCloseIcon.length > 0) {
	for (let index = 0; index < popupCloseIcon.length; index++) {
		const el = popupCloseIcon[index];
		el.addEventListener('click', function(e) {
			popupClose(el.closest('.popup'));
			e.preventDefault();
		});
	}
}

// функция открытия popup

function popupOpen(currentPopup) {

	
	 if (currentPopup && unlock) {
	 	const popupActive = document.querySelector('.popup.open');
	 	if (popupActive) {
	 		popupClose(popupActive, false);
	 	} else {
	 		bodyLock();
	 	};
	 	
	 	currentPopup.classList.add('open');
	 	currentPopup.addEventListener('click', function(e) {
	 		if (!e.target.closest('.popup__content')) {
	 			popupClose(e.target.closest('.popup'));
	 		}
	 	});
	 };
}


// фунция закрытия popup

function popupClose(popupActive, doUnlock = true) {
	if (unlock) {
		popupActive.classList.remove('open');
		if (popupActive.querySelector('form')) {
			let formItem = popupActive.querySelector('form');
			formItem.reset();
			let itemsChecked = formItem.querySelectorAll(".checked");
			for (let index = 0; index < itemsChecked.length; index++) {
				const item = itemsChecked[index];
				item.classList.remove('checked');
			}
			let itemsError = formItem.querySelectorAll(".error");
			for (let index = 0; index < itemsError.length; index++) {
				const item = itemsError[index];
				item.classList.remove('error');
			}
		}
		if (doUnlock) {
			bodyUnlock();
		}
	}
}

// функция body-lock

function bodyLock() {
	const lockPaddingValue = window.innerWidth - body.offsetWidth + 'px';

	if (lockPadding.length > 0) {
		for (let index = 0; index < lockPadding.length; index++) {
			const el = lockPadding[index];
			el.style.paddingRight = lockPaddingValue;
		}
	}
	body.style.paddingRight = lockPaddingValue;
	body.classList.add('lock');

	unlock = false;
	setTimeout(function() {
     unlock = true;
	}, timeout);
}


// функция body-unLock

function bodyUnlock() {
	
	setTimeout(function() {
      if (lockPadding.length > 0) {
		for (let index = 0; index < lockPadding.length; index++) {
			const el = lockPadding[index];
         el.style.paddingRight = '0px';
		}
	}
		body.style.paddingRight = '0px';
		body.classList.remove('lock');
	}, timeout);

	unlock = false;
	setTimeout(function() {
     unlock = true;
	}, timeout);
}

// закрытие popup по клавише esc

document.addEventListener('keydown', function(e) {
	if (e.code === "KeyEsc") {
		const popupActive = document.querySelector('.popup.open');
		if (popupActive) {
			popupClose(popupActive);
		}

	}
})


/*!
 * dist/inputmask
 * https://github.com/RobinHerbots/Inputmask
 * Copyright (c) 2010 - 2023 Robin Herbots
 * Licensed under the MIT license
 * Version: 5.0.8-beta.73
 */
!function(e, t) {
   if ("object" == typeof exports && "object" == typeof module) module.exports = t(); else if ("function" == typeof define && define.amd) define([], t); else {
       var i = t();
       for (var n in i) ("object" == typeof exports ? exports : e)[n] = i[n];
   }
}("undefined" != typeof self ? self : this, (function() {
   return function() {
       "use strict";
       var e = {
           8741: function(e, t) {
               Object.defineProperty(t, "__esModule", {
                   value: !0
               }), t.default = void 0;
               var i = !("undefined" == typeof window || !window.document || !window.document.createElement);
               t.default = i;
           },
           3976: function(e, t, i) {
               Object.defineProperty(t, "__esModule", {
                   value: !0
               }), t.default = void 0;
               var n = i(2839), a = {
                   _maxTestPos: 500,
                   placeholder: "_",
                   optionalmarker: [ "[", "]" ],
                   quantifiermarker: [ "{", "}" ],
                   groupmarker: [ "(", ")" ],
                   alternatormarker: "|",
                   escapeChar: "\\",
                   mask: null,
                   regex: null,
                   oncomplete: function() {},
                   onincomplete: function() {},
                   oncleared: function() {},
                   repeat: 0,
                   greedy: !1,
                   autoUnmask: !1,
                   removeMaskOnSubmit: !1,
                   clearMaskOnLostFocus: !0,
                   insertMode: !0,
                   insertModeVisual: !0,
                   clearIncomplete: !1,
                   alias: null,
                   onKeyDown: function() {},
                   onBeforeMask: null,
                   onBeforePaste: function(e, t) {
                       return "function" == typeof t.onBeforeMask ? t.onBeforeMask.call(this, e, t) : e;
                   },
                   onBeforeWrite: null,
                   onUnMask: null,
                   showMaskOnFocus: !0,
                   showMaskOnHover: !0,
                   onKeyValidation: function() {},
                   skipOptionalPartCharacter: " ",
                   numericInput: !1,
                   rightAlign: !1,
                   undoOnEscape: !0,
                   radixPoint: "",
                   _radixDance: !1,
                   groupSeparator: "",
                   keepStatic: null,
                   positionCaretOnTab: !0,
                   tabThrough: !1,
                   supportsInputType: [ "text", "tel", "url", "password", "search" ],
                   ignorables: [ n.keys.Backspace, n.keys.Tab, n.keys.Pause, n.keys.Escape, n.keys.PageUp, n.keys.PageDown, n.keys.End, n.keys.Home, n.keys.ArrowLeft, n.keys.ArrowUp, n.keys.ArrowRight, n.keys.ArrowDown, n.keys.Insert, n.keys.Delete, n.keys.ContextMenu, n.keys.F1, n.keys.F2, n.keys.F3, n.keys.F4, n.keys.F5, n.keys.F6, n.keys.F7, n.keys.F8, n.keys.F9, n.keys.F10, n.keys.F11, n.keys.F12, n.keys.Process, n.keys.Unidentified, n.keys.Shift, n.keys.Control, n.keys.Alt, n.keys.Tab, n.keys.AltGraph, n.keys.CapsLock ],
                   isComplete: null,
                   preValidation: null,
                   postValidation: null,
                   staticDefinitionSymbol: void 0,
                   jitMasking: !1,
                   nullable: !0,
                   inputEventOnly: !1,
                   noValuePatching: !1,
                   positionCaretOnClick: "lvp",
                   casing: null,
                   inputmode: "text",
                   importDataAttributes: !0,
                   shiftPositions: !0,
                   usePrototypeDefinitions: !0,
                   validationEventTimeOut: 3e3,
                   substitutes: {}
               };
               t.default = a;
           },
           7392: function(e, t) {
               Object.defineProperty(t, "__esModule", {
                   value: !0
               }), t.default = void 0;
               t.default = {
                   9: {
                       validator: "[0-9\uff10-\uff19]",
                       definitionSymbol: "*"
                   },
                   a: {
                       validator: "[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",
                       definitionSymbol: "*"
                   },
                   "*": {
                       validator: "[0-9\uff10-\uff19A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]"
                   }
               };
           },
           253: function(e, t) {
               Object.defineProperty(t, "__esModule", {
                   value: !0
               }), t.default = function(e, t, i) {
                   if (void 0 === i) return e.__data ? e.__data[t] : null;
                   e.__data = e.__data || {}, e.__data[t] = i;
               };
           },
           3776: function(e, t, i) {
               Object.defineProperty(t, "__esModule", {
                   value: !0
               }), t.Event = void 0, t.off = function(e, t) {
                   var i, n;
                   f(this[0]) && e && (i = this[0].eventRegistry, n = this[0], e.split(" ").forEach((function(e) {
                       var a = l(e.split("."), 2);
                       (function(e, n) {
                           var a, r, o = [];
                           if (e.length > 0) if (void 0 === t) for (a = 0, r = i[e][n].length; a < r; a++) o.push({
                               ev: e,
                               namespace: n && n.length > 0 ? n : "global",
                               handler: i[e][n][a]
                           }); else o.push({
                               ev: e,
                               namespace: n && n.length > 0 ? n : "global",
                               handler: t
                           }); else if (n.length > 0) for (var s in i) for (var l in i[s]) if (l === n) if (void 0 === t) for (a = 0, 
                           r = i[s][l].length; a < r; a++) o.push({
                               ev: s,
                               namespace: l,
                               handler: i[s][l][a]
                           }); else o.push({
                               ev: s,
                               namespace: l,
                               handler: t
                           });
                           return o;
                       })(a[0], a[1]).forEach((function(e) {
                           var t = e.ev, a = e.handler;
                           !function(e, t, a) {
                               if (e in i == 1) if (n.removeEventListener ? n.removeEventListener(e, a, !1) : n.detachEvent && n.detachEvent("on".concat(e), a), 
                               "global" === t) for (var r in i[e]) i[e][r].splice(i[e][r].indexOf(a), 1); else i[e][t].splice(i[e][t].indexOf(a), 1);
                           }(t, e.namespace, a);
                       }));
                   })));
                   return this;
               }, t.on = function(e, t) {
                   if (f(this[0])) {
                       var i = this[0].eventRegistry, n = this[0];
                       e.split(" ").forEach((function(e) {
                           var a = l(e.split("."), 2), r = a[0], o = a[1];
                           !function(e, a) {
                               n.addEventListener ? n.addEventListener(e, t, !1) : n.attachEvent && n.attachEvent("on".concat(e), t), 
                               i[e] = i[e] || {}, i[e][a] = i[e][a] || [], i[e][a].push(t);
                           }(r, void 0 === o ? "global" : o);
                       }));
                   }
                   return this;
               }, t.trigger = function(e) {
                   var t = arguments;
                   if (f(this[0])) for (var i = this[0].eventRegistry, n = this[0], r = "string" == typeof e ? e.split(" ") : [ e.type ], s = 0; s < r.length; s++) {
                       var l = r[s].split("."), c = l[0], u = l[1] || "global";
                       if (void 0 !== document && "global" === u) {
                           var d, p = {
                               bubbles: !0,
                               cancelable: !0,
                               composed: !0,
                               detail: arguments[1]
                           };
                           if (document.createEvent) {
                               try {
                                   if ("input" === c) p.inputType = "insertText", d = new InputEvent(c, p); else d = new CustomEvent(c, p);
                               } catch (e) {
                                   (d = document.createEvent("CustomEvent")).initCustomEvent(c, p.bubbles, p.cancelable, p.detail);
                               }
                               e.type && (0, a.default)(d, e), n.dispatchEvent(d);
                           } else (d = document.createEventObject()).eventType = c, d.detail = arguments[1], 
                           e.type && (0, a.default)(d, e), n.fireEvent("on" + d.eventType, d);
                       } else if (void 0 !== i[c]) {
                           arguments[0] = arguments[0].type ? arguments[0] : o.default.Event(arguments[0]), 
                           arguments[0].detail = arguments.slice(1);
                           var h = i[c], v = "global" === u ? Object.values(h).flat() : h[u];
                           v.forEach((function(e) {
                               return e.apply(n, t);
                           }));
                       }
                   }
                   return this;
               };
               var n, a = u(i(600)), r = u(i(9380)), o = u(i(4963)), s = u(i(8741));
               function l(e, t) {
                   return function(e) {
                       if (Array.isArray(e)) return e;
                   }(e) || function(e, t) {
                       var i = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                       if (null != i) {
                           var n, a, r, o, s = [], l = !0, c = !1;
                           try {
                               if (r = (i = i.call(e)).next, 0 === t) {
                                   if (Object(i) !== i) return;
                                   l = !1;
                               } else for (;!(l = (n = r.call(i)).done) && (s.push(n.value), s.length !== t); l = !0) ;
                           } catch (e) {
                               c = !0, a = e;
                           } finally {
                               try {
                                   if (!l && null != i.return && (o = i.return(), Object(o) !== o)) return;
                               } finally {
                                   if (c) throw a;
                               }
                           }
                           return s;
                       }
                   }(e, t) || function(e, t) {
                       if (!e) return;
                       if ("string" == typeof e) return c(e, t);
                       var i = Object.prototype.toString.call(e).slice(8, -1);
                       "Object" === i && e.constructor && (i = e.constructor.name);
                       if ("Map" === i || "Set" === i) return Array.from(e);
                       if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return c(e, t);
                   }(e, t) || function() {
                       throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                   }();
               }
               function c(e, t) {
                   (null == t || t > e.length) && (t = e.length);
                   for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
                   return n;
               }
               function u(e) {
                   return e && e.__esModule ? e : {
                       default: e
                   };
               }
               function f(e) {
                   return e instanceof Element;
               }
               t.Event = n, "function" == typeof r.default.CustomEvent ? t.Event = n = r.default.CustomEvent : s.default && (t.Event = n = function(e, t) {
                   t = t || {
                       bubbles: !1,
                       cancelable: !1,
                       composed: !0,
                       detail: void 0
                   };
                   var i = document.createEvent("CustomEvent");
                   return i.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), i;
               }, n.prototype = r.default.Event.prototype);
           },
           600: function(e, t) {
               function i(e) {
                   return i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                       return typeof e;
                   } : function(e) {
                       return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                   }, i(e);
               }
               Object.defineProperty(t, "__esModule", {
                   value: !0
               }), t.default = function e() {
                   var t, n, a, r, o, s, l = arguments[0] || {}, c = 1, u = arguments.length, f = !1;
                   "boolean" == typeof l && (f = l, l = arguments[c] || {}, c++);
                   "object" !== i(l) && "function" != typeof l && (l = {});
                   for (;c < u; c++) if (null != (t = arguments[c])) for (n in t) a = l[n], l !== (r = t[n]) && (f && r && ("[object Object]" === Object.prototype.toString.call(r) || (o = Array.isArray(r))) ? (o ? (o = !1, 
                   s = a && Array.isArray(a) ? a : []) : s = a && "[object Object]" === Object.prototype.toString.call(a) ? a : {}, 
                   l[n] = e(f, s, r)) : void 0 !== r && (l[n] = r));
                   return l;
               };
           },
           4963: function(e, t, i) {
               Object.defineProperty(t, "__esModule", {
                   value: !0
               }), t.default = void 0;
               var n = s(i(600)), a = s(i(9380)), r = s(i(253)), o = i(3776);
               function s(e) {
                   return e && e.__esModule ? e : {
                       default: e
                   };
               }
               var l = a.default.document;
               function c(e) {
                   return e instanceof c ? e : this instanceof c ? void (null != e && e !== a.default && (this[0] = e.nodeName ? e : void 0 !== e[0] && e[0].nodeName ? e[0] : l.querySelector(e), 
                   void 0 !== this[0] && null !== this[0] && (this[0].eventRegistry = this[0].eventRegistry || {}))) : new c(e);
               }
               c.prototype = {
                   on: o.on,
                   off: o.off,
                   trigger: o.trigger
               }, c.extend = n.default, c.data = r.default, c.Event = o.Event;
               var u = c;
               t.default = u;
           },
           9845: function(e, t, i) {
               Object.defineProperty(t, "__esModule", {
                   value: !0
               }), t.mobile = t.iphone = t.ie = void 0;
               var n, a = (n = i(9380)) && n.__esModule ? n : {
                   default: n
               };
               var r = a.default.navigator && a.default.navigator.userAgent || "", o = r.indexOf("MSIE ") > 0 || r.indexOf("Trident/") > 0, s = navigator.userAgentData && navigator.userAgentData.mobile || a.default.navigator && a.default.navigator.maxTouchPoints || "ontouchstart" in a.default, l = /iphone/i.test(r);
               t.iphone = l, t.mobile = s, t.ie = o;
           },
           7184: function(e, t) {
               Object.defineProperty(t, "__esModule", {
                   value: !0
               }), t.default = function(e) {
                   return e.replace(i, "\\$1");
               };
               var i = new RegExp("(\\" + [ "/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^" ].join("|\\") + ")", "gim");
           },
           6030: function(e, t, i) {
               Object.defineProperty(t, "__esModule", {
                   value: !0
               }), t.EventHandlers = void 0;
               var n = i(8711), a = i(2839), r = i(9845), o = i(7215), s = i(7760), l = i(4713);
               function c(e, t) {
                   var i = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                   if (!i) {
                       if (Array.isArray(e) || (i = function(e, t) {
                           if (!e) return;
                           if ("string" == typeof e) return u(e, t);
                           var i = Object.prototype.toString.call(e).slice(8, -1);
                           "Object" === i && e.constructor && (i = e.constructor.name);
                           if ("Map" === i || "Set" === i) return Array.from(e);
                           if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return u(e, t);
                       }(e)) || t && e && "number" == typeof e.length) {
                           i && (e = i);
                           var n = 0, a = function() {};
                           return {
                               s: a,
                               n: function() {
                                   return n >= e.length ? {
                                       done: !0
                                   } : {
                                       done: !1,
                                       value: e[n++]
                                   };
                               },
                               e: function(e) {
                                   throw e;
                               },
                               f: a
                           };
                       }
                       throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                   }
                   var r, o = !0, s = !1;
                   return {
                       s: function() {
                           i = i.call(e);
                       },
                       n: function() {
                           var e = i.next();
                           return o = e.done, e;
                       },
                       e: function(e) {
                           s = !0, r = e;
                       },
                       f: function() {
                           try {
                               o || null == i.return || i.return();
                           } finally {
                               if (s) throw r;
                           }
                       }
                   };
               }
               function u(e, t) {
                   (null == t || t > e.length) && (t = e.length);
                   for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
                   return n;
               }
               var f = {
                   keyEvent: function(e, t, i, c, u) {
                       var d = this.inputmask, p = d.opts, h = d.dependencyLib, v = d.maskset, m = this, g = h(m), y = e.key, k = n.caret.call(d, m), b = p.onKeyDown.call(this, e, n.getBuffer.call(d), k, p);
                       if (void 0 !== b) return b;
                       if (y === a.keys.Backspace || y === a.keys.Delete || r.iphone && y === a.keys.BACKSPACE_SAFARI || e.ctrlKey && y === a.keys.x && !("oncut" in m)) e.preventDefault(), 
                       o.handleRemove.call(d, m, y, k), (0, s.writeBuffer)(m, n.getBuffer.call(d, !0), v.p, e, m.inputmask._valueGet() !== n.getBuffer.call(d).join("")); else if (y === a.keys.End || y === a.keys.PageDown) {
                           e.preventDefault();
                           var x = n.seekNext.call(d, n.getLastValidPosition.call(d));
                           n.caret.call(d, m, e.shiftKey ? k.begin : x, x, !0);
                       } else y === a.keys.Home && !e.shiftKey || y === a.keys.PageUp ? (e.preventDefault(), 
                       n.caret.call(d, m, 0, e.shiftKey ? k.begin : 0, !0)) : p.undoOnEscape && y === a.keys.Escape && !0 !== e.altKey ? ((0, 
                       s.checkVal)(m, !0, !1, d.undoValue.split("")), g.trigger("click")) : y !== a.keys.Insert || e.shiftKey || e.ctrlKey || void 0 !== d.userOptions.insertMode ? !0 === p.tabThrough && y === a.keys.Tab ? !0 === e.shiftKey ? (k.end = n.seekPrevious.call(d, k.end, !0), 
                       !0 === l.getTest.call(d, k.end - 1).match.static && k.end--, k.begin = n.seekPrevious.call(d, k.end, !0), 
                       k.begin >= 0 && k.end > 0 && (e.preventDefault(), n.caret.call(d, m, k.begin, k.end))) : (k.begin = n.seekNext.call(d, k.begin, !0), 
                       k.end = n.seekNext.call(d, k.begin, !0), k.end < v.maskLength && k.end--, k.begin <= v.maskLength && (e.preventDefault(), 
                       n.caret.call(d, m, k.begin, k.end))) : e.shiftKey || p.insertModeVisual && !1 === p.insertMode && (y === a.keys.ArrowRight ? setTimeout((function() {
                           var e = n.caret.call(d, m);
                           n.caret.call(d, m, e.begin);
                       }), 0) : y === a.keys.ArrowLeft && setTimeout((function() {
                           var e = n.translatePosition.call(d, m.inputmask.caretPos.begin);
                           n.translatePosition.call(d, m.inputmask.caretPos.end);
                           d.isRTL ? n.caret.call(d, m, e + (e === v.maskLength ? 0 : 1)) : n.caret.call(d, m, e - (0 === e ? 0 : 1));
                       }), 0)) : o.isSelection.call(d, k) ? p.insertMode = !p.insertMode : (p.insertMode = !p.insertMode, 
                       n.caret.call(d, m, k.begin, k.begin));
                       return d.isComposing = y == a.keys.Process || y == a.keys.Unidentified, d.ignorable = p.ignorables.includes(y), 
                       f.keypressEvent.call(this, e, t, i, c, u);
                   },
                   keypressEvent: function(e, t, i, r, l) {
                       var c = this.inputmask || this, u = c.opts, f = c.dependencyLib, d = c.maskset, p = c.el, h = f(p), v = e.key;
                       if (!0 === t || e.ctrlKey && e.altKey || !(e.ctrlKey || e.metaKey || c.ignorable)) {
                           if (v) {
                               var m, g = t ? {
                                   begin: l,
                                   end: l
                               } : n.caret.call(c, p);
                               v = u.substitutes[v] || v, d.writeOutBuffer = !0;
                               var y = o.isValid.call(c, g, v, r, void 0, void 0, void 0, t);
                               if (!1 !== y && (n.resetMaskSet.call(c, !0), m = void 0 !== y.caret ? y.caret : n.seekNext.call(c, y.pos.begin ? y.pos.begin : y.pos), 
                               d.p = m), m = u.numericInput && void 0 === y.caret ? n.seekPrevious.call(c, m) : m, 
                               !1 !== i && (setTimeout((function() {
                                   u.onKeyValidation.call(p, v, y);
                               }), 0), d.writeOutBuffer && !1 !== y)) {
                                   var k = n.getBuffer.call(c);
                                   (0, s.writeBuffer)(p, k, m, e, !0 !== t);
                               }
                               if (e.preventDefault(), t) return !1 !== y && (y.forwardPosition = m), y;
                           }
                       } else v === a.keys.Enter && c.undoValue !== c._valueGet(!0) && (c.undoValue = c._valueGet(!0), 
                       setTimeout((function() {
                           h.trigger("change");
                       }), 0));
                   },
                   pasteEvent: function(e) {
                       var t, i = this.inputmask, a = i.opts, r = i._valueGet(!0), o = n.caret.call(i, this);
                       i.isRTL && (t = o.end, o.end = n.translatePosition.call(i, o.begin), o.begin = n.translatePosition.call(i, t));
                       var l = r.substr(0, o.begin), u = r.substr(o.end, r.length);
                       if (l == (i.isRTL ? n.getBufferTemplate.call(i).slice().reverse() : n.getBufferTemplate.call(i)).slice(0, o.begin).join("") && (l = ""), 
                       u == (i.isRTL ? n.getBufferTemplate.call(i).slice().reverse() : n.getBufferTemplate.call(i)).slice(o.end).join("") && (u = ""), 
                       window.clipboardData && window.clipboardData.getData) r = l + window.clipboardData.getData("Text") + u; else {
                           if (!e.clipboardData || !e.clipboardData.getData) return !0;
                           r = l + e.clipboardData.getData("text/plain") + u;
                       }
                       var f = r;
                       if (i.isRTL) {
                           f = f.split("");
                           var d, p = c(n.getBufferTemplate.call(i));
                           try {
                               for (p.s(); !(d = p.n()).done; ) {
                                   var h = d.value;
                                   f[0] === h && f.shift();
                               }
                           } catch (e) {
                               p.e(e);
                           } finally {
                               p.f();
                           }
                           f = f.join("");
                       }
                       if ("function" == typeof a.onBeforePaste) {
                           if (!1 === (f = a.onBeforePaste.call(i, f, a))) return !1;
                           f || (f = r);
                       }
                       (0, s.checkVal)(this, !0, !1, f.toString().split(""), e), e.preventDefault();
                   },
                   inputFallBackEvent: function(e) {
                       var t = this.inputmask, i = t.opts, o = t.dependencyLib;
                       var c, u = this, d = u.inputmask._valueGet(!0), p = (t.isRTL ? n.getBuffer.call(t).slice().reverse() : n.getBuffer.call(t)).join(""), h = n.caret.call(t, u, void 0, void 0, !0);
                       if (p !== d) {
                           if (c = function(e, a, r) {
                               for (var o, s, c, u = e.substr(0, r.begin).split(""), f = e.substr(r.begin).split(""), d = a.substr(0, r.begin).split(""), p = a.substr(r.begin).split(""), h = u.length >= d.length ? u.length : d.length, v = f.length >= p.length ? f.length : p.length, m = "", g = [], y = "~"; u.length < h; ) u.push(y);
                               for (;d.length < h; ) d.push(y);
                               for (;f.length < v; ) f.unshift(y);
                               for (;p.length < v; ) p.unshift(y);
                               var k = u.concat(f), b = d.concat(p);
                               for (s = 0, o = k.length; s < o; s++) switch (c = l.getPlaceholder.call(t, n.translatePosition.call(t, s)), 
                               m) {
                                 case "insertText":
                                   b[s - 1] === k[s] && r.begin == k.length - 1 && g.push(k[s]), s = o;
                                   break;

                                 case "insertReplacementText":
                                 case "deleteContentBackward":
                                   k[s] === y ? r.end++ : s = o;
                                   break;

                                 default:
                                   k[s] !== b[s] && (k[s + 1] !== y && k[s + 1] !== c && void 0 !== k[s + 1] || (b[s] !== c || b[s + 1] !== y) && b[s] !== y ? b[s + 1] === y && b[s] === k[s + 1] ? (m = "insertText", 
                                   g.push(k[s]), r.begin--, r.end--) : k[s] !== c && k[s] !== y && (k[s + 1] === y || b[s] !== k[s] && b[s + 1] === k[s + 1]) ? (m = "insertReplacementText", 
                                   g.push(k[s]), r.begin--) : k[s] === y ? (m = "deleteContentBackward", (n.isMask.call(t, n.translatePosition.call(t, s), !0) || b[s] === i.radixPoint) && r.end++) : s = o : (m = "insertText", 
                                   g.push(k[s]), r.begin--, r.end--));
                               }
                               return {
                                   action: m,
                                   data: g,
                                   caret: r
                               };
                           }(d, p, h), (u.inputmask.shadowRoot || u.ownerDocument).activeElement !== u && u.focus(), 
                           (0, s.writeBuffer)(u, n.getBuffer.call(t)), n.caret.call(t, u, h.begin, h.end, !0), 
                           !r.mobile && t.skipNextInsert && "insertText" === e.inputType && "insertText" === c.action && t.isComposing) return !1;
                           switch ("insertCompositionText" === e.inputType && "insertText" === c.action && t.isComposing ? t.skipNextInsert = !0 : t.skipNextInsert = !1, 
                           c.action) {
                             case "insertText":
                             case "insertReplacementText":
                               c.data.forEach((function(e, i) {
                                   var n = new o.Event("keypress");
                                   n.key = e, t.ignorable = !1, f.keypressEvent.call(u, n);
                               })), setTimeout((function() {
                                   t.$el.trigger("keyup");
                               }), 0);
                               break;

                             case "deleteContentBackward":
                               var v = new o.Event("keydown");
                               v.key = a.keys.Backspace, f.keyEvent.call(u, v);
                               break;

                             default:
                               (0, s.applyInputValue)(u, d), n.caret.call(t, u, h.begin, h.end, !0);
                           }
                           e.preventDefault();
                       }
                   },
                   setValueEvent: function(e) {
                       var t = this.inputmask, i = this, a = e && e.detail ? e.detail[0] : arguments[1];
                       void 0 === a && (a = i.inputmask._valueGet(!0)), (0, s.applyInputValue)(i, a), (e.detail && void 0 !== e.detail[1] || void 0 !== arguments[2]) && n.caret.call(t, i, e.detail ? e.detail[1] : arguments[2]);
                   },
                   focusEvent: function(e) {
                       var t = this.inputmask, i = t.opts, a = this, r = a.inputmask._valueGet();
                       i.showMaskOnFocus && r !== n.getBuffer.call(t).join("") && (0, s.writeBuffer)(a, n.getBuffer.call(t), n.seekNext.call(t, n.getLastValidPosition.call(t))), 
                       !0 !== i.positionCaretOnTab || !1 !== t.mouseEnter || o.isComplete.call(t, n.getBuffer.call(t)) && -1 !== n.getLastValidPosition.call(t) || f.clickEvent.apply(a, [ e, !0 ]), 
                       t.undoValue = t._valueGet(!0);
                   },
                   invalidEvent: function(e) {
                       this.inputmask.validationEvent = !0;
                   },
                   mouseleaveEvent: function() {
                       var e = this.inputmask, t = e.opts, i = this;
                       e.mouseEnter = !1, t.clearMaskOnLostFocus && (i.inputmask.shadowRoot || i.ownerDocument).activeElement !== i && (0, 
                       s.HandleNativePlaceholder)(i, e.originalPlaceholder);
                   },
                   clickEvent: function(e, t) {
                       var i = this.inputmask;
                       i.clicked++;
                       var a = this;
                       if ((a.inputmask.shadowRoot || a.ownerDocument).activeElement === a) {
                           var r = n.determineNewCaretPosition.call(i, n.caret.call(i, a), t);
                           void 0 !== r && n.caret.call(i, a, r);
                       }
                   },
                   cutEvent: function(e) {
                       var t = this.inputmask, i = t.maskset, r = this, l = n.caret.call(t, r), c = t.isRTL ? n.getBuffer.call(t).slice(l.end, l.begin) : n.getBuffer.call(t).slice(l.begin, l.end), u = t.isRTL ? c.reverse().join("") : c.join("");
                       window.navigator.clipboard ? window.navigator.clipboard.writeText(u) : window.clipboardData && window.clipboardData.getData && window.clipboardData.setData("Text", u), 
                       o.handleRemove.call(t, r, a.keys.Delete, l), (0, s.writeBuffer)(r, n.getBuffer.call(t), i.p, e, t.undoValue !== t._valueGet(!0));
                   },
                   blurEvent: function(e) {
                       var t = this.inputmask, i = t.opts, a = t.dependencyLib;
                       t.clicked = 0;
                       var r = a(this), l = this;
                       if (l.inputmask) {
                           (0, s.HandleNativePlaceholder)(l, t.originalPlaceholder);
                           var c = l.inputmask._valueGet(), u = n.getBuffer.call(t).slice();
                           "" !== c && (i.clearMaskOnLostFocus && (-1 === n.getLastValidPosition.call(t) && c === n.getBufferTemplate.call(t).join("") ? u = [] : s.clearOptionalTail.call(t, u)), 
                           !1 === o.isComplete.call(t, u) && (setTimeout((function() {
                               r.trigger("incomplete");
                           }), 0), i.clearIncomplete && (n.resetMaskSet.call(t), u = i.clearMaskOnLostFocus ? [] : n.getBufferTemplate.call(t).slice())), 
                           (0, s.writeBuffer)(l, u, void 0, e)), t.undoValue !== t._valueGet(!0) && (t.undoValue = t._valueGet(!0), 
                           r.trigger("change"));
                       }
                   },
                   mouseenterEvent: function() {
                       var e = this.inputmask, t = e.opts.showMaskOnHover, i = this;
                       if (e.mouseEnter = !0, (i.inputmask.shadowRoot || i.ownerDocument).activeElement !== i) {
                           var a = (e.isRTL ? n.getBufferTemplate.call(e).slice().reverse() : n.getBufferTemplate.call(e)).join("");
                           t && (0, s.HandleNativePlaceholder)(i, a);
                       }
                   },
                   submitEvent: function() {
                       var e = this.inputmask, t = e.opts;
                       e.undoValue !== e._valueGet(!0) && e.$el.trigger("change"), -1 === n.getLastValidPosition.call(e) && e._valueGet && e._valueGet() === n.getBufferTemplate.call(e).join("") && e._valueSet(""), 
                       t.clearIncomplete && !1 === o.isComplete.call(e, n.getBuffer.call(e)) && e._valueSet(""), 
                       t.removeMaskOnSubmit && (e._valueSet(e.unmaskedvalue(), !0), setTimeout((function() {
                           (0, s.writeBuffer)(e.el, n.getBuffer.call(e));
                       }), 0));
                   },
                   resetEvent: function() {
                       var e = this.inputmask;
                       e.refreshValue = !0, setTimeout((function() {
                           (0, s.applyInputValue)(e.el, e._valueGet(!0));
                       }), 0);
                   }
               };
               t.EventHandlers = f;
           },
           9716: function(e, t, i) {
               Object.defineProperty(t, "__esModule", {
                   value: !0
               }), t.EventRuler = void 0;
               var n, a = (n = i(2394)) && n.__esModule ? n : {
                   default: n
               }, r = i(2839), o = i(8711), s = i(7760);
               var l = {
                   on: function(e, t, i) {
                       var n = e.inputmask.dependencyLib, l = function(t) {
                           t.originalEvent && (t = t.originalEvent || t, arguments[0] = t);
                           var l, c = this, u = c.inputmask, f = u ? u.opts : void 0;
                           if (void 0 === u && "FORM" !== this.nodeName) {
                               var d = n.data(c, "_inputmask_opts");
                               n(c).off(), d && new a.default(d).mask(c);
                           } else {
                               if ([ "submit", "reset", "setvalue" ].includes(t.type) || "FORM" === this.nodeName || !(c.disabled || c.readOnly && !("keydown" === t.type && t.ctrlKey && t.key === r.keys.c || !1 === f.tabThrough && t.key === r.keys.Tab))) {
                                   switch (t.type) {
                                     case "input":
                                       if (!0 === u.skipInputEvent) return u.skipInputEvent = !1, t.preventDefault();
                                       break;

                                     case "click":
                                     case "focus":
                                       return u.validationEvent ? (u.validationEvent = !1, e.blur(), (0, s.HandleNativePlaceholder)(e, (u.isRTL ? o.getBufferTemplate.call(u).slice().reverse() : o.getBufferTemplate.call(u)).join("")), 
                                       setTimeout((function() {
                                           e.focus();
                                       }), f.validationEventTimeOut), !1) : (l = arguments, void setTimeout((function() {
                                           e.inputmask && i.apply(c, l);
                                       }), 0));
                                   }
                                   var p = i.apply(c, arguments);
                                   return !1 === p && (t.preventDefault(), t.stopPropagation()), p;
                               }
                               t.preventDefault();
                           }
                       };
                       [ "submit", "reset" ].includes(t) ? (l = l.bind(e), null !== e.form && n(e.form).on(t, l)) : n(e).on(t, l), 
                       e.inputmask.events[t] = e.inputmask.events[t] || [], e.inputmask.events[t].push(l);
                   },
                   off: function(e, t) {
                       if (e.inputmask && e.inputmask.events) {
                           var i = e.inputmask.dependencyLib, n = e.inputmask.events;
                           for (var a in t && ((n = [])[t] = e.inputmask.events[t]), n) {
                               for (var r = n[a]; r.length > 0; ) {
                                   var o = r.pop();
                                   [ "submit", "reset" ].includes(a) ? null !== e.form && i(e.form).off(a, o) : i(e).off(a, o);
                               }
                               delete e.inputmask.events[a];
                           }
                       }
                   }
               };
               t.EventRuler = l;
           },
           219: function(e, t, i) {
               var n = d(i(2394)), a = i(2839), r = d(i(7184)), o = i(8711), s = i(4713);
               function l(e, t) {
                   return function(e) {
                       if (Array.isArray(e)) return e;
                   }(e) || function(e, t) {
                       var i = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                       if (null != i) {
                           var n, a, r, o, s = [], l = !0, c = !1;
                           try {
                               if (r = (i = i.call(e)).next, 0 === t) {
                                   if (Object(i) !== i) return;
                                   l = !1;
                               } else for (;!(l = (n = r.call(i)).done) && (s.push(n.value), s.length !== t); l = !0) ;
                           } catch (e) {
                               c = !0, a = e;
                           } finally {
                               try {
                                   if (!l && null != i.return && (o = i.return(), Object(o) !== o)) return;
                               } finally {
                                   if (c) throw a;
                               }
                           }
                           return s;
                       }
                   }(e, t) || function(e, t) {
                       if (!e) return;
                       if ("string" == typeof e) return c(e, t);
                       var i = Object.prototype.toString.call(e).slice(8, -1);
                       "Object" === i && e.constructor && (i = e.constructor.name);
                       if ("Map" === i || "Set" === i) return Array.from(e);
                       if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return c(e, t);
                   }(e, t) || function() {
                       throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                   }();
               }
               function c(e, t) {
                   (null == t || t > e.length) && (t = e.length);
                   for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
                   return n;
               }
               function u(e) {
                   return u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                       return typeof e;
                   } : function(e) {
                       return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                   }, u(e);
               }
               function f(e, t) {
                   for (var i = 0; i < t.length; i++) {
                       var n = t[i];
                       n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
                       Object.defineProperty(e, (a = n.key, r = void 0, r = function(e, t) {
                           if ("object" !== u(e) || null === e) return e;
                           var i = e[Symbol.toPrimitive];
                           if (void 0 !== i) {
                               var n = i.call(e, t || "default");
                               if ("object" !== u(n)) return n;
                               throw new TypeError("@@toPrimitive must return a primitive value.");
                           }
                           return ("string" === t ? String : Number)(e);
                       }(a, "string"), "symbol" === u(r) ? r : String(r)), n);
                   }
                   var a, r;
               }
               function d(e) {
                   return e && e.__esModule ? e : {
                       default: e
                   };
               }
               var p = n.default.dependencyLib, h = function() {
                   function e(t, i, n) {
                       !function(e, t) {
                           if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                       }(this, e), this.mask = t, this.format = i, this.opts = n, this._date = new Date(1, 0, 1), 
                       this.initDateObject(t, this.opts);
                   }
                   var t, i, n;
                   return t = e, (i = [ {
                       key: "date",
                       get: function() {
                           return void 0 === this._date && (this._date = new Date(1, 0, 1), this.initDateObject(void 0, this.opts)), 
                           this._date;
                       }
                   }, {
                       key: "initDateObject",
                       value: function(e, t) {
                           var i;
                           for (P(t).lastIndex = 0; i = P(t).exec(this.format); ) {
                               var n = new RegExp("\\d+$").exec(i[0]), a = n ? i[0][0] + "x" : i[0], r = void 0;
                               if (void 0 !== e) {
                                   if (n) {
                                       var o = P(t).lastIndex, s = E(i.index, t);
                                       P(t).lastIndex = o, r = e.slice(0, e.indexOf(s.nextMatch[0]));
                                   } else r = e.slice(0, g[a] && g[a][4] || a.length);
                                   e = e.slice(r.length);
                               }
                               Object.prototype.hasOwnProperty.call(g, a) && this.setValue(this, r, a, g[a][2], g[a][1]);
                           }
                       }
                   }, {
                       key: "setValue",
                       value: function(e, t, i, n, a) {
                           if (void 0 !== t && (e[n] = "ampm" === n ? t : t.replace(/[^0-9]/g, "0"), e["raw" + n] = t.replace(/\s/g, "_")), 
                           void 0 !== a) {
                               var r = e[n];
                               ("day" === n && 29 === parseInt(r) || "month" === n && 2 === parseInt(r)) && (29 !== parseInt(e.day) || 2 !== parseInt(e.month) || "" !== e.year && void 0 !== e.year || e._date.setFullYear(2012, 1, 29)), 
                               "day" === n && (m = !0, 0 === parseInt(r) && (r = 1)), "month" === n && (m = !0), 
                               "year" === n && (m = !0, r.length < 4 && (r = M(r, 4, !0))), "" === r || isNaN(r) || a.call(e._date, r), 
                               "ampm" === n && a.call(e._date, r);
                           }
                       }
                   }, {
                       key: "reset",
                       value: function() {
                           this._date = new Date(1, 0, 1);
                       }
                   }, {
                       key: "reInit",
                       value: function() {
                           this._date = void 0, this.date;
                       }
                   } ]) && f(t.prototype, i), n && f(t, n), Object.defineProperty(t, "prototype", {
                       writable: !1
                   }), e;
               }(), v = (new Date).getFullYear(), m = !1, g = {
                   d: [ "[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", Date.prototype.getDate ],
                   dd: [ "0[1-9]|[12][0-9]|3[01]", Date.prototype.setDate, "day", function() {
                       return M(Date.prototype.getDate.call(this), 2);
                   } ],
                   ddd: [ "" ],
                   dddd: [ "" ],
                   m: [ "[1-9]|1[012]", function(e) {
                       var t = e ? parseInt(e) : 0;
                       return t > 0 && t--, Date.prototype.setMonth.call(this, t);
                   }, "month", function() {
                       return Date.prototype.getMonth.call(this) + 1;
                   } ],
                   mm: [ "0[1-9]|1[012]", function(e) {
                       var t = e ? parseInt(e) : 0;
                       return t > 0 && t--, Date.prototype.setMonth.call(this, t);
                   }, "month", function() {
                       return M(Date.prototype.getMonth.call(this) + 1, 2);
                   } ],
                   mmm: [ "" ],
                   mmmm: [ "" ],
                   yy: [ "[0-9]{2}", Date.prototype.setFullYear, "year", function() {
                       return M(Date.prototype.getFullYear.call(this), 2);
                   } ],
                   yyyy: [ "[0-9]{4}", Date.prototype.setFullYear, "year", function() {
                       return M(Date.prototype.getFullYear.call(this), 4);
                   } ],
                   h: [ "[1-9]|1[0-2]", Date.prototype.setHours, "hours", Date.prototype.getHours ],
                   hh: [ "0[1-9]|1[0-2]", Date.prototype.setHours, "hours", function() {
                       return M(Date.prototype.getHours.call(this), 2);
                   } ],
                   hx: [ function(e) {
                       return "[0-9]{".concat(e, "}");
                   }, Date.prototype.setHours, "hours", function(e) {
                       return Date.prototype.getHours;
                   } ],
                   H: [ "1?[0-9]|2[0-3]", Date.prototype.setHours, "hours", Date.prototype.getHours ],
                   HH: [ "0[0-9]|1[0-9]|2[0-3]", Date.prototype.setHours, "hours", function() {
                       return M(Date.prototype.getHours.call(this), 2);
                   } ],
                   Hx: [ function(e) {
                       return "[0-9]{".concat(e, "}");
                   }, Date.prototype.setHours, "hours", function(e) {
                       return function() {
                           return M(Date.prototype.getHours.call(this), e);
                       };
                   } ],
                   M: [ "[1-5]?[0-9]", Date.prototype.setMinutes, "minutes", Date.prototype.getMinutes ],
                   MM: [ "0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]", Date.prototype.setMinutes, "minutes", function() {
                       return M(Date.prototype.getMinutes.call(this), 2);
                   } ],
                   s: [ "[1-5]?[0-9]", Date.prototype.setSeconds, "seconds", Date.prototype.getSeconds ],
                   ss: [ "0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]", Date.prototype.setSeconds, "seconds", function() {
                       return M(Date.prototype.getSeconds.call(this), 2);
                   } ],
                   l: [ "[0-9]{3}", Date.prototype.setMilliseconds, "milliseconds", function() {
                       return M(Date.prototype.getMilliseconds.call(this), 3);
                   }, 3 ],
                   L: [ "[0-9]{2}", Date.prototype.setMilliseconds, "milliseconds", function() {
                       return M(Date.prototype.getMilliseconds.call(this), 2);
                   }, 2 ],
                   t: [ "[ap]", k, "ampm", b, 1 ],
                   tt: [ "[ap]m", k, "ampm", b, 2 ],
                   T: [ "[AP]", k, "ampm", b, 1 ],
                   TT: [ "[AP]M", k, "ampm", b, 2 ],
                   Z: [ ".*", void 0, "Z", function() {
                       var e = this.toString().match(/\((.+)\)/)[1];
                       e.includes(" ") && (e = (e = e.replace("-", " ").toUpperCase()).split(" ").map((function(e) {
                           return l(e, 1)[0];
                       })).join(""));
                       return e;
                   } ],
                   o: [ "" ],
                   S: [ "" ]
               }, y = {
                   isoDate: "yyyy-mm-dd",
                   isoTime: "HH:MM:ss",
                   isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
                   isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
               };
               function k(e) {
                   var t = this.getHours();
                   e.toLowerCase().includes("p") ? this.setHours(t + 12) : e.toLowerCase().includes("a") && t >= 12 && this.setHours(t - 12);
               }
               function b() {
                   var e = this.getHours();
                   return (e = e || 12) >= 12 ? "PM" : "AM";
               }
               function x(e) {
                   var t = new RegExp("\\d+$").exec(e[0]);
                   if (t && void 0 !== t[0]) {
                       var i = g[e[0][0] + "x"].slice("");
                       return i[0] = i[0](t[0]), i[3] = i[3](t[0]), i;
                   }
                   if (g[e[0]]) return g[e[0]];
               }
               function P(e) {
                   if (!e.tokenizer) {
                       var t = [], i = [];
                       for (var n in g) if (/\.*x$/.test(n)) {
                           var a = n[0] + "\\d+";
                           -1 === i.indexOf(a) && i.push(a);
                       } else -1 === t.indexOf(n[0]) && t.push(n[0]);
                       e.tokenizer = "(" + (i.length > 0 ? i.join("|") + "|" : "") + t.join("+|") + ")+?|.", 
                       e.tokenizer = new RegExp(e.tokenizer, "g");
                   }
                   return e.tokenizer;
               }
               function w(e, t, i) {
                   if (!m) return !0;
                   if (void 0 === e.rawday || !isFinite(e.rawday) && new Date(e.date.getFullYear(), isFinite(e.rawmonth) ? e.month : e.date.getMonth() + 1, 0).getDate() >= e.day || "29" == e.day && (!isFinite(e.rawyear) || void 0 === e.rawyear || "" === e.rawyear) || new Date(e.date.getFullYear(), isFinite(e.rawmonth) ? e.month : e.date.getMonth() + 1, 0).getDate() >= e.day) return t;
                   if ("29" == e.day) {
                       var n = E(t.pos, i);
                       if ("yyyy" === n.targetMatch[0] && t.pos - n.targetMatchIndex == 2) return t.remove = t.pos + 1, 
                       t;
                   } else if ("02" == e.month && "30" == e.day && void 0 !== t.c) return e.day = "03", 
                   e.date.setDate(3), e.date.setMonth(1), t.insert = [ {
                       pos: t.pos,
                       c: "0"
                   }, {
                       pos: t.pos + 1,
                       c: t.c
                   } ], t.caret = o.seekNext.call(this, t.pos + 1), t;
                   return !1;
               }
               function S(e, t, i, n) {
                   var a, o, s = "";
                   for (P(i).lastIndex = 0; a = P(i).exec(e); ) {
                       if (void 0 === t) if (o = x(a)) s += "(" + o[0] + ")"; else switch (a[0]) {
                         case "[":
                           s += "(";
                           break;

                         case "]":
                           s += ")?";
                           break;

                         default:
                           s += (0, r.default)(a[0]);
                       } else if (o = x(a)) if (!0 !== n && o[3]) s += o[3].call(t.date); else o[2] ? s += t["raw" + o[2]] : s += a[0]; else s += a[0];
                   }
                   return s;
               }
               function M(e, t, i) {
                   for (e = String(e), t = t || 2; e.length < t; ) e = i ? e + "0" : "0" + e;
                   return e;
               }
               function _(e, t, i) {
                   return "string" == typeof e ? new h(e, t, i) : e && "object" === u(e) && Object.prototype.hasOwnProperty.call(e, "date") ? e : void 0;
               }
               function O(e, t) {
                   return S(t.inputFormat, {
                       date: e
                   }, t);
               }
               function E(e, t) {
                   var i, n, a = 0, r = 0;
                   for (P(t).lastIndex = 0; n = P(t).exec(t.inputFormat); ) {
                       var o = new RegExp("\\d+$").exec(n[0]);
                       if ((a += r = o ? parseInt(o[0]) : n[0].length) >= e + 1) {
                           i = n, n = P(t).exec(t.inputFormat);
                           break;
                       }
                   }
                   return {
                       targetMatchIndex: a - r,
                       nextMatch: n,
                       targetMatch: i
                   };
               }
               n.default.extendAliases({
                   datetime: {
                       mask: function(e) {
                           return e.numericInput = !1, g.S = e.i18n.ordinalSuffix.join("|"), e.inputFormat = y[e.inputFormat] || e.inputFormat, 
                           e.displayFormat = y[e.displayFormat] || e.displayFormat || e.inputFormat, e.outputFormat = y[e.outputFormat] || e.outputFormat || e.inputFormat, 
                           e.placeholder = "" !== e.placeholder ? e.placeholder : e.inputFormat.replace(/[[\]]/, ""), 
                           e.regex = S(e.inputFormat, void 0, e), e.min = _(e.min, e.inputFormat, e), e.max = _(e.max, e.inputFormat, e), 
                           null;
                       },
                       placeholder: "",
                       inputFormat: "isoDateTime",
                       displayFormat: null,
                       outputFormat: null,
                       min: null,
                       max: null,
                       skipOptionalPartCharacter: "",
                       i18n: {
                           dayNames: [ "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday" ],
                           monthNames: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
                           ordinalSuffix: [ "st", "nd", "rd", "th" ]
                       },
                       preValidation: function(e, t, i, n, a, r, o, s) {
                           if (s) return !0;
                           if (isNaN(i) && e[t] !== i) {
                               var l = E(t, a);
                               if (l.nextMatch && l.nextMatch[0] === i && l.targetMatch[0].length > 1) {
                                   var c = g[l.targetMatch[0]][0];
                                   if (new RegExp(c).test("0" + e[t - 1])) return e[t] = e[t - 1], e[t - 1] = "0", 
                                   {
                                       fuzzy: !0,
                                       buffer: e,
                                       refreshFromBuffer: {
                                           start: t - 1,
                                           end: t + 1
                                       },
                                       pos: t + 1
                                   };
                               }
                           }
                           return !0;
                       },
                       postValidation: function(e, t, i, n, a, r, o, l) {
                           var c, u;
                           if (o) return !0;
                           if (!1 === n && (((c = E(t + 1, a)).targetMatch && c.targetMatchIndex === t && c.targetMatch[0].length > 1 && void 0 !== g[c.targetMatch[0]] || (c = E(t + 2, a)).targetMatch && c.targetMatchIndex === t + 1 && c.targetMatch[0].length > 1 && void 0 !== g[c.targetMatch[0]]) && (u = g[c.targetMatch[0]][0]), 
                           void 0 !== u && (void 0 !== r.validPositions[t + 1] && new RegExp(u).test(i + "0") ? (e[t] = i, 
                           e[t + 1] = "0", n = {
                               pos: t + 2,
                               caret: t
                           }) : new RegExp(u).test("0" + i) && (e[t] = "0", e[t + 1] = i, n = {
                               pos: t + 2
                           })), !1 === n)) return n;
                           if (n.fuzzy && (e = n.buffer, t = n.pos), (c = E(t, a)).targetMatch && c.targetMatch[0] && void 0 !== g[c.targetMatch[0]]) {
                               var f = g[c.targetMatch[0]];
                               u = f[0];
                               var d = e.slice(c.targetMatchIndex, c.targetMatchIndex + c.targetMatch[0].length);
                               if (!1 === new RegExp(u).test(d.join("")) && 2 === c.targetMatch[0].length && r.validPositions[c.targetMatchIndex] && r.validPositions[c.targetMatchIndex + 1] && (r.validPositions[c.targetMatchIndex + 1].input = "0"), 
                               "year" == f[2]) for (var p = s.getMaskTemplate.call(this, !1, 1, void 0, !0), h = t + 1; h < e.length; h++) e[h] = p[h], 
                               delete r.validPositions[h];
                           }
                           var m = n, y = _(e.join(""), a.inputFormat, a);
                           return m && !isNaN(y.date.getTime()) && (a.prefillYear && (m = function(e, t, i) {
                               if (e.year !== e.rawyear) {
                                   var n = v.toString(), a = e.rawyear.replace(/[^0-9]/g, ""), r = n.slice(0, a.length), o = n.slice(a.length);
                                   if (2 === a.length && a === r) {
                                       var s = new Date(v, e.month - 1, e.day);
                                       e.day == s.getDate() && (!i.max || i.max.date.getTime() >= s.getTime()) && (e.date.setFullYear(v), 
                                       e.year = n, t.insert = [ {
                                           pos: t.pos + 1,
                                           c: o[0]
                                       }, {
                                           pos: t.pos + 2,
                                           c: o[1]
                                       } ]);
                                   }
                               }
                               return t;
                           }(y, m, a)), m = function(e, t, i, n, a) {
                               if (!t) return t;
                               if (t && i.min && !isNaN(i.min.date.getTime())) {
                                   var r;
                                   for (e.reset(), P(i).lastIndex = 0; r = P(i).exec(i.inputFormat); ) {
                                       var o;
                                       if ((o = x(r)) && o[3]) {
                                           for (var s = o[1], l = e[o[2]], c = i.min[o[2]], u = i.max ? i.max[o[2]] : c, f = [], d = !1, p = 0; p < c.length; p++) void 0 !== n.validPositions[p + r.index] || d ? (f[p] = l[p], 
                                           d = d || l[p] > c[p]) : (f[p] = c[p], "year" === o[2] && l.length - 1 == p && c != u && (f = (parseInt(f.join("")) + 1).toString().split("")), 
                                           "ampm" === o[2] && c != u && i.min.date.getTime() > e.date.getTime() && (f[p] = u[p]));
                                           s.call(e._date, f.join(""));
                                       }
                                   }
                                   t = i.min.date.getTime() <= e.date.getTime(), e.reInit();
                               }
                               return t && i.max && (isNaN(i.max.date.getTime()) || (t = i.max.date.getTime() >= e.date.getTime())), 
                               t;
                           }(y, m = w.call(this, y, m, a), a, r)), void 0 !== t && m && n.pos !== t ? {
                               buffer: S(a.inputFormat, y, a).split(""),
                               refreshFromBuffer: {
                                   start: t,
                                   end: n.pos
                               },
                               pos: n.caret || n.pos
                           } : m;
                       },
                       onKeyDown: function(e, t, i, n) {
                           e.ctrlKey && e.key === a.keys.ArrowRight && (this.inputmask._valueSet(O(new Date, n)), 
                           p(this).trigger("setvalue"));
                       },
                       onUnMask: function(e, t, i) {
                           return t ? S(i.outputFormat, _(e, i.inputFormat, i), i, !0) : t;
                       },
                       casing: function(e, t, i, n) {
                           return 0 == t.nativeDef.indexOf("[ap]") ? e.toLowerCase() : 0 == t.nativeDef.indexOf("[AP]") ? e.toUpperCase() : e;
                       },
                       onBeforeMask: function(e, t) {
                           return "[object Date]" === Object.prototype.toString.call(e) && (e = O(e, t)), e;
                       },
                       insertMode: !1,
                       insertModeVisual: !1,
                       shiftPositions: !1,
                       keepStatic: !1,
                       inputmode: "numeric",
                       prefillYear: !0
                   }
               });
           },
           3851: function(e, t, i) {
               var n, a = (n = i(2394)) && n.__esModule ? n : {
                   default: n
               }, r = i(8711), o = i(4713);
               a.default.extendDefinitions({
                   A: {
                       validator: "[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",
                       casing: "upper"
                   },
                   "&": {
                       validator: "[0-9A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",
                       casing: "upper"
                   },
                   "#": {
                       validator: "[0-9A-Fa-f]",
                       casing: "upper"
                   }
               });
               var s = new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]");
               function l(e, t, i, n, a) {
                   return i - 1 > -1 && "." !== t.buffer[i - 1] ? (e = t.buffer[i - 1] + e, e = i - 2 > -1 && "." !== t.buffer[i - 2] ? t.buffer[i - 2] + e : "0" + e) : e = "00" + e, 
                   s.test(e);
               }
               a.default.extendAliases({
                   cssunit: {
                       regex: "[+-]?[0-9]+\\.?([0-9]+)?(px|em|rem|ex|%|in|cm|mm|pt|pc)"
                   },
                   url: {
                       regex: "(https?|ftp)://.*",
                       autoUnmask: !1,
                       keepStatic: !1,
                       tabThrough: !0
                   },
                   ip: {
                       mask: "i{1,3}.j{1,3}.k{1,3}.l{1,3}",
                       definitions: {
                           i: {
                               validator: l
                           },
                           j: {
                               validator: l
                           },
                           k: {
                               validator: l
                           },
                           l: {
                               validator: l
                           }
                       },
                       onUnMask: function(e, t, i) {
                           return e;
                       },
                       inputmode: "decimal",
                       substitutes: {
                           ",": "."
                       }
                   },
                   email: {
                       mask: function(e) {
                           var t = e.separator, i = e.quantifier, n = "*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]", a = n;
                           if (t) for (var r = 0; r < i; r++) a += "[".concat(t).concat(n, "]");
                           return a;
                       },
                       greedy: !1,
                       casing: "lower",
                       separator: null,
                       quantifier: 5,
                       skipOptionalPartCharacter: "",
                       onBeforePaste: function(e, t) {
                           return (e = e.toLowerCase()).replace("mailto:", "");
                       },
                       definitions: {
                           "*": {
                               validator: "[0-9\uff11-\uff19A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5!#$%&'*+/=?^_`{|}~-]"
                           },
                           "-": {
                               validator: "[0-9A-Za-z-]"
                           }
                       },
                       onUnMask: function(e, t, i) {
                           return e;
                       },
                       inputmode: "email"
                   },
                   mac: {
                       mask: "##:##:##:##:##:##"
                   },
                   vin: {
                       mask: "V{13}9{4}",
                       definitions: {
                           V: {
                               validator: "[A-HJ-NPR-Za-hj-npr-z\\d]",
                               casing: "upper"
                           }
                       },
                       clearIncomplete: !0,
                       autoUnmask: !0
                   },
                   ssn: {
                       mask: "999-99-9999",
                       postValidation: function(e, t, i, n, a, s, l) {
                           var c = o.getMaskTemplate.call(this, !0, r.getLastValidPosition.call(this), !0, !0);
                           return /^(?!219-09-9999|078-05-1120)(?!666|000|9.{2}).{3}-(?!00).{2}-(?!0{4}).{4}$/.test(c.join(""));
                       }
                   }
               });
           },
           207: function(e, t, i) {
               var n = s(i(2394)), a = s(i(7184)), r = i(8711), o = i(2839);
               function s(e) {
                   return e && e.__esModule ? e : {
                       default: e
                   };
               }
               var l = n.default.dependencyLib;
               function c(e, t) {
                   for (var i = "", a = 0; a < e.length; a++) n.default.prototype.definitions[e.charAt(a)] || t.definitions[e.charAt(a)] || t.optionalmarker[0] === e.charAt(a) || t.optionalmarker[1] === e.charAt(a) || t.quantifiermarker[0] === e.charAt(a) || t.quantifiermarker[1] === e.charAt(a) || t.groupmarker[0] === e.charAt(a) || t.groupmarker[1] === e.charAt(a) || t.alternatormarker === e.charAt(a) ? i += "\\" + e.charAt(a) : i += e.charAt(a);
                   return i;
               }
               function u(e, t, i, n) {
                   if (e.length > 0 && t > 0 && (!i.digitsOptional || n)) {
                       var a = e.indexOf(i.radixPoint), r = !1;
                       i.negationSymbol.back === e[e.length - 1] && (r = !0, e.length--), -1 === a && (e.push(i.radixPoint), 
                       a = e.length - 1);
                       for (var o = 1; o <= t; o++) isFinite(e[a + o]) || (e[a + o] = "0");
                   }
                   return r && e.push(i.negationSymbol.back), e;
               }
               function f(e, t) {
                   var i = 0;
                   for (var n in "+" === e && (i = r.seekNext.call(this, t.validPositions.length - 1)), 
                   t.tests) if ((n = parseInt(n)) >= i) for (var a = 0, o = t.tests[n].length; a < o; a++) if ((void 0 === t.validPositions[n] || "-" === e) && t.tests[n][a].match.def === e) return n + (void 0 !== t.validPositions[n] && "-" !== e ? 1 : 0);
                   return i;
               }
               function d(e, t) {
                   for (var i = -1, n = 0, a = t.validPositions.length; n < a; n++) {
                       var r = t.validPositions[n];
                       if (r && r.match.def === e) {
                           i = n;
                           break;
                       }
                   }
                   return i;
               }
               function p(e, t, i, n, a) {
                   var r = t.buffer ? t.buffer.indexOf(a.radixPoint) : -1, o = (-1 !== r || n && a.jitMasking) && new RegExp(a.definitions[9].validator).test(e);
                   return a._radixDance && -1 !== r && o && null == t.validPositions[r] ? {
                       insert: {
                           pos: r === i ? r + 1 : r,
                           c: a.radixPoint
                       },
                       pos: i
                   } : o;
               }
               n.default.extendAliases({
                   numeric: {
                       mask: function(e) {
                           e.repeat = 0, e.groupSeparator === e.radixPoint && e.digits && "0" !== e.digits && ("." === e.radixPoint ? e.groupSeparator = "," : "," === e.radixPoint ? e.groupSeparator = "." : e.groupSeparator = ""), 
                           " " === e.groupSeparator && (e.skipOptionalPartCharacter = void 0), e.placeholder.length > 1 && (e.placeholder = e.placeholder.charAt(0)), 
                           "radixFocus" === e.positionCaretOnClick && "" === e.placeholder && (e.positionCaretOnClick = "lvp");
                           var t = "0", i = e.radixPoint;
                           !0 === e.numericInput && void 0 === e.__financeInput ? (t = "1", e.positionCaretOnClick = "radixFocus" === e.positionCaretOnClick ? "lvp" : e.positionCaretOnClick, 
                           e.digitsOptional = !1, isNaN(e.digits) && (e.digits = 2), e._radixDance = !1, i = "," === e.radixPoint ? "?" : "!", 
                           "" !== e.radixPoint && void 0 === e.definitions[i] && (e.definitions[i] = {}, e.definitions[i].validator = "[" + e.radixPoint + "]", 
                           e.definitions[i].placeholder = e.radixPoint, e.definitions[i].static = !0, e.definitions[i].generated = !0)) : (e.__financeInput = !1, 
                           e.numericInput = !0);
                           var n, r = "[+]";
                           if (r += c(e.prefix, e), "" !== e.groupSeparator ? (void 0 === e.definitions[e.groupSeparator] && (e.definitions[e.groupSeparator] = {}, 
                           e.definitions[e.groupSeparator].validator = "[" + e.groupSeparator + "]", e.definitions[e.groupSeparator].placeholder = e.groupSeparator, 
                           e.definitions[e.groupSeparator].static = !0, e.definitions[e.groupSeparator].generated = !0), 
                           r += e._mask(e)) : r += "9{+}", void 0 !== e.digits && 0 !== e.digits) {
                               var o = e.digits.toString().split(",");
                               isFinite(o[0]) && o[1] && isFinite(o[1]) ? r += i + t + "{" + e.digits + "}" : (isNaN(e.digits) || parseInt(e.digits) > 0) && (e.digitsOptional || e.jitMasking ? (n = r + i + t + "{0," + e.digits + "}", 
                               e.keepStatic = !0) : r += i + t + "{" + e.digits + "}");
                           } else e.inputmode = "numeric";
                           return r += c(e.suffix, e), r += "[-]", n && (r = [ n + c(e.suffix, e) + "[-]", r ]), 
                           e.greedy = !1, function(e) {
                               void 0 === e.parseMinMaxOptions && (null !== e.min && (e.min = e.min.toString().replace(new RegExp((0, 
                               a.default)(e.groupSeparator), "g"), ""), "," === e.radixPoint && (e.min = e.min.replace(e.radixPoint, ".")), 
                               e.min = isFinite(e.min) ? parseFloat(e.min) : NaN, isNaN(e.min) && (e.min = Number.MIN_VALUE)), 
                               null !== e.max && (e.max = e.max.toString().replace(new RegExp((0, a.default)(e.groupSeparator), "g"), ""), 
                               "," === e.radixPoint && (e.max = e.max.replace(e.radixPoint, ".")), e.max = isFinite(e.max) ? parseFloat(e.max) : NaN, 
                               isNaN(e.max) && (e.max = Number.MAX_VALUE)), e.parseMinMaxOptions = "done");
                           }(e), "" !== e.radixPoint && e.substituteRadixPoint && (e.substitutes["." == e.radixPoint ? "," : "."] = e.radixPoint), 
                           r;
                       },
                       _mask: function(e) {
                           return "(" + e.groupSeparator + "999){+|1}";
                       },
                       digits: "*",
                       digitsOptional: !0,
                       enforceDigitsOnBlur: !1,
                       radixPoint: ".",
                       positionCaretOnClick: "radixFocus",
                       _radixDance: !0,
                       groupSeparator: "",
                       allowMinus: !0,
                       negationSymbol: {
                           front: "-",
                           back: ""
                       },
                       prefix: "",
                       suffix: "",
                       min: null,
                       max: null,
                       SetMaxOnOverflow: !1,
                       step: 1,
                       inputType: "text",
                       unmaskAsNumber: !1,
                       roundingFN: Math.round,
                       inputmode: "decimal",
                       shortcuts: {
                           k: "1000",
                           m: "1000000"
                       },
                       placeholder: "0",
                       greedy: !1,
                       rightAlign: !0,
                       insertMode: !0,
                       autoUnmask: !1,
                       skipOptionalPartCharacter: "",
                       usePrototypeDefinitions: !1,
                       stripLeadingZeroes: !0,
                       substituteRadixPoint: !0,
                       definitions: {
                           0: {
                               validator: p
                           },
                           1: {
                               validator: p,
                               definitionSymbol: "9"
                           },
                           9: {
                               validator: "[0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]",
                               definitionSymbol: "*"
                           },
                           "+": {
                               validator: function(e, t, i, n, a) {
                                   return a.allowMinus && ("-" === e || e === a.negationSymbol.front);
                               }
                           },
                           "-": {
                               validator: function(e, t, i, n, a) {
                                   return a.allowMinus && e === a.negationSymbol.back;
                               }
                           }
                       },
                       preValidation: function(e, t, i, n, a, r, o, s) {
                           if (!1 !== a.__financeInput && i === a.radixPoint) return !1;
                           var l = e.indexOf(a.radixPoint), c = t;
                           if (t = function(e, t, i, n, a) {
                               return a._radixDance && a.numericInput && t !== a.negationSymbol.back && e <= i && (i > 0 || t == a.radixPoint) && (void 0 === n.validPositions[e - 1] || n.validPositions[e - 1].input !== a.negationSymbol.back) && (e -= 1), 
                               e;
                           }(t, i, l, r, a), "-" === i || i === a.negationSymbol.front) {
                               if (!0 !== a.allowMinus) return !1;
                               var u = !1, p = d("+", r), h = d("-", r);
                               return -1 !== p && (u = [ p, h ]), !1 !== u ? {
                                   remove: u,
                                   caret: c - a.negationSymbol.back.length
                               } : {
                                   insert: [ {
                                       pos: f.call(this, "+", r),
                                       c: a.negationSymbol.front,
                                       fromIsValid: !0
                                   }, {
                                       pos: f.call(this, "-", r),
                                       c: a.negationSymbol.back,
                                       fromIsValid: void 0
                                   } ],
                                   caret: c + a.negationSymbol.back.length
                               };
                           }
                           if (i === a.groupSeparator) return {
                               caret: c
                           };
                           if (s) return !0;
                           if (-1 !== l && !0 === a._radixDance && !1 === n && i === a.radixPoint && void 0 !== a.digits && (isNaN(a.digits) || parseInt(a.digits) > 0) && l !== t) return {
                               caret: a._radixDance && t === l - 1 ? l + 1 : l
                           };
                           if (!1 === a.__financeInput) if (n) {
                               if (a.digitsOptional) return {
                                   rewritePosition: o.end
                               };
                               if (!a.digitsOptional) {
                                   if (o.begin > l && o.end <= l) return i === a.radixPoint ? {
                                       insert: {
                                           pos: l + 1,
                                           c: "0",
                                           fromIsValid: !0
                                       },
                                       rewritePosition: l
                                   } : {
                                       rewritePosition: l + 1
                                   };
                                   if (o.begin < l) return {
                                       rewritePosition: o.begin - 1
                                   };
                               }
                           } else if (!a.showMaskOnHover && !a.showMaskOnFocus && !a.digitsOptional && a.digits > 0 && "" === this.__valueGet.call(this.el)) return {
                               rewritePosition: l
                           };
                           return {
                               rewritePosition: t
                           };
                       },
                       postValidation: function(e, t, i, n, a, r, o) {
                           if (!1 === n) return n;
                           if (o) return !0;
                           if (null !== a.min || null !== a.max) {
                               var s = a.onUnMask(e.slice().reverse().join(""), void 0, l.extend({}, a, {
                                   unmaskAsNumber: !0
                               }));
                               if (null !== a.min && s < a.min && (s.toString().length > a.min.toString().length || s < 0)) return !1;
                               if (null !== a.max && s > a.max) return !!a.SetMaxOnOverflow && {
                                   refreshFromBuffer: !0,
                                   buffer: u(a.max.toString().replace(".", a.radixPoint).split(""), a.digits, a).reverse()
                               };
                           }
                           return n;
                       },
                       onUnMask: function(e, t, i) {
                           if ("" === t && !0 === i.nullable) return t;
                           var n = e.replace(i.prefix, "");
                           return n = (n = n.replace(i.suffix, "")).replace(new RegExp((0, a.default)(i.groupSeparator), "g"), ""), 
                           "" !== i.placeholder.charAt(0) && (n = n.replace(new RegExp(i.placeholder.charAt(0), "g"), "0")), 
                           i.unmaskAsNumber ? ("" !== i.radixPoint && -1 !== n.indexOf(i.radixPoint) && (n = n.replace(a.default.call(this, i.radixPoint), ".")), 
                           n = (n = n.replace(new RegExp("^" + (0, a.default)(i.negationSymbol.front)), "-")).replace(new RegExp((0, 
                           a.default)(i.negationSymbol.back) + "$"), ""), Number(n)) : n;
                       },
                       isComplete: function(e, t) {
                           var i = (t.numericInput ? e.slice().reverse() : e).join("");
                           return i = (i = (i = (i = (i = i.replace(new RegExp("^" + (0, a.default)(t.negationSymbol.front)), "-")).replace(new RegExp((0, 
                           a.default)(t.negationSymbol.back) + "$"), "")).replace(t.prefix, "")).replace(t.suffix, "")).replace(new RegExp((0, 
                           a.default)(t.groupSeparator) + "([0-9]{3})", "g"), "$1"), "," === t.radixPoint && (i = i.replace((0, 
                           a.default)(t.radixPoint), ".")), isFinite(i);
                       },
                       onBeforeMask: function(e, t) {
                           var i = t.radixPoint || ",";
                           isFinite(t.digits) && (t.digits = parseInt(t.digits)), "number" != typeof e && "number" !== t.inputType || "" === i || (e = e.toString().replace(".", i));
                           var n = "-" === e.charAt(0) || e.charAt(0) === t.negationSymbol.front, r = e.split(i), o = r[0].replace(/[^\-0-9]/g, ""), s = r.length > 1 ? r[1].replace(/[^0-9]/g, "") : "", l = r.length > 1;
                           e = o + ("" !== s ? i + s : s);
                           var c = 0;
                           if ("" !== i && (c = t.digitsOptional ? t.digits < s.length ? t.digits : s.length : t.digits, 
                           "" !== s || !t.digitsOptional)) {
                               var f = Math.pow(10, c || 1);
                               e = e.replace((0, a.default)(i), "."), isNaN(parseFloat(e)) || (e = (t.roundingFN(parseFloat(e) * f) / f).toFixed(c)), 
                               e = e.toString().replace(".", i);
                           }
                           if (0 === t.digits && -1 !== e.indexOf(i) && (e = e.substring(0, e.indexOf(i))), 
                           null !== t.min || null !== t.max) {
                               var d = e.toString().replace(i, ".");
                               null !== t.min && d < t.min ? e = t.min.toString().replace(".", i) : null !== t.max && d > t.max && (e = t.max.toString().replace(".", i));
                           }
                           return n && "-" !== e.charAt(0) && (e = "-" + e), u(e.toString().split(""), c, t, l).join("");
                       },
                       onBeforeWrite: function(e, t, i, n) {
                           function r(e, t) {
                               if (!1 !== n.__financeInput || t) {
                                   var i = e.indexOf(n.radixPoint);
                                   -1 !== i && e.splice(i, 1);
                               }
                               if ("" !== n.groupSeparator) for (;-1 !== (i = e.indexOf(n.groupSeparator)); ) e.splice(i, 1);
                               return e;
                           }
                           var o, s;
                           if (n.stripLeadingZeroes && (s = function(e, t) {
                               var i = new RegExp("(^" + ("" !== t.negationSymbol.front ? (0, a.default)(t.negationSymbol.front) + "?" : "") + (0, 
                               a.default)(t.prefix) + ")(.*)(" + (0, a.default)(t.suffix) + ("" != t.negationSymbol.back ? (0, 
                               a.default)(t.negationSymbol.back) + "?" : "") + "$)").exec(e.slice().reverse().join("")), n = i ? i[2] : "", r = !1;
                               return n && (n = n.split(t.radixPoint.charAt(0))[0], r = new RegExp("^[0" + t.groupSeparator + "]*").exec(n)), 
                               !(!r || !(r[0].length > 1 || r[0].length > 0 && r[0].length < n.length)) && r;
                           }(t, n))) for (var c = t.join("").lastIndexOf(s[0].split("").reverse().join("")) - (s[0] == s.input ? 0 : 1), f = s[0] == s.input ? 1 : 0, d = s[0].length - f; d > 0; d--) delete this.maskset.validPositions[c + d], 
                           delete t[c + d];
                           if (e) switch (e.type) {
                             case "blur":
                             case "checkval":
                               if (null !== n.min) {
                                   var p = n.onUnMask(t.slice().reverse().join(""), void 0, l.extend({}, n, {
                                       unmaskAsNumber: !0
                                   }));
                                   if (null !== n.min && p < n.min) return {
                                       refreshFromBuffer: !0,
                                       buffer: u(n.min.toString().replace(".", n.radixPoint).split(""), n.digits, n).reverse()
                                   };
                               }
                               if (t[t.length - 1] === n.negationSymbol.front) {
                                   var h = new RegExp("(^" + ("" != n.negationSymbol.front ? (0, a.default)(n.negationSymbol.front) + "?" : "") + (0, 
                                   a.default)(n.prefix) + ")(.*)(" + (0, a.default)(n.suffix) + ("" != n.negationSymbol.back ? (0, 
                                   a.default)(n.negationSymbol.back) + "?" : "") + "$)").exec(r(t.slice(), !0).reverse().join(""));
                                   0 == (h ? h[2] : "") && (o = {
                                       refreshFromBuffer: !0,
                                       buffer: [ 0 ]
                                   });
                               } else if ("" !== n.radixPoint) {
                                   t.indexOf(n.radixPoint) === n.suffix.length && (o && o.buffer ? o.buffer.splice(0, 1 + n.suffix.length) : (t.splice(0, 1 + n.suffix.length), 
                                   o = {
                                       refreshFromBuffer: !0,
                                       buffer: r(t)
                                   }));
                               }
                               if (n.enforceDigitsOnBlur) {
                                   var v = (o = o || {}) && o.buffer || t.slice().reverse();
                                   o.refreshFromBuffer = !0, o.buffer = u(v, n.digits, n, !0).reverse();
                               }
                           }
                           return o;
                       },
                       onKeyDown: function(e, t, i, n) {
                           var a, r = l(this);
                           if (3 != e.location) {
                               var s, c = e.key;
                               if ((s = n.shortcuts && n.shortcuts[c]) && s.length > 1) return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) * parseInt(s)), 
                               r.trigger("setvalue"), !1;
                           }
                           if (e.ctrlKey) switch (e.key) {
                             case o.keys.ArrowUp:
                               return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) + parseInt(n.step)), 
                               r.trigger("setvalue"), !1;

                             case o.keys.ArrowDown:
                               return this.inputmask.__valueSet.call(this, parseFloat(this.inputmask.unmaskedvalue()) - parseInt(n.step)), 
                               r.trigger("setvalue"), !1;
                           }
                           if (!e.shiftKey && (e.key === o.keys.Delete || e.key === o.keys.Backspace || e.key === o.keys.BACKSPACE_SAFARI) && i.begin !== t.length) {
                               if (t[e.key === o.keys.Delete ? i.begin - 1 : i.end] === n.negationSymbol.front) return a = t.slice().reverse(), 
                               "" !== n.negationSymbol.front && a.shift(), "" !== n.negationSymbol.back && a.pop(), 
                               r.trigger("setvalue", [ a.join(""), i.begin ]), !1;
                               if (!0 === n._radixDance) {
                                   var f = t.indexOf(n.radixPoint);
                                   if (n.digitsOptional) {
                                       if (0 === f) return (a = t.slice().reverse()).pop(), r.trigger("setvalue", [ a.join(""), i.begin >= a.length ? a.length : i.begin ]), 
                                       !1;
                                   } else if (-1 !== f && (i.begin < f || i.end < f || e.key === o.keys.Delete && (i.begin === f || i.begin - 1 === f))) {
                                       var d = void 0;
                                       return i.begin === i.end && (e.key === o.keys.Backspace || e.key === o.keys.BACKSPACE_SAFARI ? i.begin++ : e.key === o.keys.Delete && i.begin - 1 === f && (d = l.extend({}, i), 
                                       i.begin--, i.end--)), (a = t.slice().reverse()).splice(a.length - i.begin, i.begin - i.end + 1), 
                                       a = u(a, n.digits, n).join(""), d && (i = d), r.trigger("setvalue", [ a, i.begin >= a.length ? f + 1 : i.begin ]), 
                                       !1;
                                   }
                               }
                           }
                       }
                   },
                   currency: {
                       prefix: "",
                       groupSeparator: ",",
                       alias: "numeric",
                       digits: 2,
                       digitsOptional: !1
                   },
                   decimal: {
                       alias: "numeric"
                   },
                   integer: {
                       alias: "numeric",
                       inputmode: "numeric",
                       digits: 0
                   },
                   percentage: {
                       alias: "numeric",
                       min: 0,
                       max: 100,
                       suffix: " %",
                       digits: 0,
                       allowMinus: !1
                   },
                   indianns: {
                       alias: "numeric",
                       _mask: function(e) {
                           return "(" + e.groupSeparator + "99){*|1}(" + e.groupSeparator + "999){1|1}";
                       },
                       groupSeparator: ",",
                       radixPoint: ".",
                       placeholder: "0",
                       digits: 2,
                       digitsOptional: !1
                   }
               });
           },
           9380: function(e, t, i) {
               var n;
               Object.defineProperty(t, "__esModule", {
                   value: !0
               }), t.default = void 0;
               var a = ((n = i(8741)) && n.__esModule ? n : {
                   default: n
               }).default ? window : {};
               t.default = a;
           },
           7760: function(e, t, i) {
               Object.defineProperty(t, "__esModule", {
                   value: !0
               }), t.HandleNativePlaceholder = function(e, t) {
                   var i = e ? e.inputmask : this;
                   if (s.ie) {
                       if (e.inputmask._valueGet() !== t && (e.placeholder !== t || "" === e.placeholder)) {
                           var n = r.getBuffer.call(i).slice(), a = e.inputmask._valueGet();
                           if (a !== t) {
                               var o = r.getLastValidPosition.call(i);
                               -1 === o && a === r.getBufferTemplate.call(i).join("") ? n = [] : -1 !== o && u.call(i, n), 
                               d(e, n);
                           }
                       }
                   } else e.placeholder !== t && (e.placeholder = t, "" === e.placeholder && e.removeAttribute("placeholder"));
               }, t.applyInputValue = c, t.checkVal = f, t.clearOptionalTail = u, t.unmaskedvalue = function(e) {
                   var t = e ? e.inputmask : this, i = t.opts, n = t.maskset;
                   if (e) {
                       if (void 0 === e.inputmask) return e.value;
                       e.inputmask && e.inputmask.refreshValue && c(e, e.inputmask._valueGet(!0));
                   }
                   for (var a = [], o = n.validPositions, s = 0, l = o.length; s < l; s++) o[s] && o[s].match && (1 != o[s].match.static || Array.isArray(n.metadata) && !0 !== o[s].generatedInput) && a.push(o[s].input);
                   var u = 0 === a.length ? "" : (t.isRTL ? a.reverse() : a).join("");
                   if ("function" == typeof i.onUnMask) {
                       var f = (t.isRTL ? r.getBuffer.call(t).slice().reverse() : r.getBuffer.call(t)).join("");
                       u = i.onUnMask.call(t, f, u, i);
                   }
                   return u;
               }, t.writeBuffer = d;
               var n = i(2839), a = i(4713), r = i(8711), o = i(7215), s = i(9845), l = i(6030);
               function c(e, t) {
                   var i = e ? e.inputmask : this, n = i.opts;
                   e.inputmask.refreshValue = !1, "function" == typeof n.onBeforeMask && (t = n.onBeforeMask.call(i, t, n) || t), 
                   f(e, !0, !1, t = t.toString().split("")), i.undoValue = i._valueGet(!0), (n.clearMaskOnLostFocus || n.clearIncomplete) && e.inputmask._valueGet() === r.getBufferTemplate.call(i).join("") && -1 === r.getLastValidPosition.call(i) && e.inputmask._valueSet("");
               }
               function u(e) {
                   e.length = 0;
                   for (var t, i = a.getMaskTemplate.call(this, !0, 0, !0, void 0, !0); void 0 !== (t = i.shift()); ) e.push(t);
                   return e;
               }
               function f(e, t, i, n, s) {
                   var c = e ? e.inputmask : this, u = c.maskset, f = c.opts, p = c.dependencyLib, h = n.slice(), v = "", m = -1, g = void 0, y = f.skipOptionalPartCharacter;
                   f.skipOptionalPartCharacter = "", r.resetMaskSet.call(c), u.tests = {}, m = f.radixPoint ? r.determineNewCaretPosition.call(c, {
                       begin: 0,
                       end: 0
                   }, !1, !1 === f.__financeInput ? "radixFocus" : void 0).begin : 0, u.p = m, c.caretPos = {
                       begin: m
                   };
                   var k = [], b = c.caretPos;
                   if (h.forEach((function(e, t) {
                       if (void 0 !== e) {
                           var n = new p.Event("_checkval");
                           n.key = e, v += e;
                           var o = r.getLastValidPosition.call(c, void 0, !0);
                           !function(e, t) {
                               for (var i = a.getMaskTemplate.call(c, !0, 0).slice(e, r.seekNext.call(c, e, !1, !1)).join("").replace(/'/g, ""), n = i.indexOf(t); n > 0 && " " === i[n - 1]; ) n--;
                               var o = 0 === n && !r.isMask.call(c, e) && (a.getTest.call(c, e).match.nativeDef === t.charAt(0) || !0 === a.getTest.call(c, e).match.static && a.getTest.call(c, e).match.nativeDef === "'" + t.charAt(0) || " " === a.getTest.call(c, e).match.nativeDef && (a.getTest.call(c, e + 1).match.nativeDef === t.charAt(0) || !0 === a.getTest.call(c, e + 1).match.static && a.getTest.call(c, e + 1).match.nativeDef === "'" + t.charAt(0)));
                               if (!o && n > 0 && !r.isMask.call(c, e, !1, !0)) {
                                   var s = r.seekNext.call(c, e);
                                   c.caretPos.begin < s && (c.caretPos = {
                                       begin: s
                                   });
                               }
                               return o;
                           }(m, v) ? (g = l.EventHandlers.keypressEvent.call(c, n, !0, !1, i, c.caretPos.begin)) && (m = c.caretPos.begin + 1, 
                           v = "") : g = l.EventHandlers.keypressEvent.call(c, n, !0, !1, i, o + 1), g ? (void 0 !== g.pos && u.validPositions[g.pos] && !0 === u.validPositions[g.pos].match.static && void 0 === u.validPositions[g.pos].alternation && (k.push(g.pos), 
                           c.isRTL || (g.forwardPosition = g.pos + 1)), d.call(c, void 0, r.getBuffer.call(c), g.forwardPosition, n, !1), 
                           c.caretPos = {
                               begin: g.forwardPosition,
                               end: g.forwardPosition
                           }, b = c.caretPos) : void 0 === u.validPositions[t] && h[t] === a.getPlaceholder.call(c, t) && r.isMask.call(c, t, !0) ? c.caretPos.begin++ : c.caretPos = b;
                       }
                   })), k.length > 0) {
                       var x, P, w = r.seekNext.call(c, -1, void 0, !1);
                       if (!o.isComplete.call(c, r.getBuffer.call(c)) && k.length <= w || o.isComplete.call(c, r.getBuffer.call(c)) && k.length > 0 && k.length !== w && 0 === k[0]) for (var S = w; void 0 !== (x = k.shift()); ) {
                           var M = new p.Event("_checkval");
                           if ((P = u.validPositions[x]).generatedInput = !0, M.key = P.input, (g = l.EventHandlers.keypressEvent.call(c, M, !0, !1, i, S)) && void 0 !== g.pos && g.pos !== x && u.validPositions[g.pos] && !0 === u.validPositions[g.pos].match.static) k.push(g.pos); else if (!g) break;
                           S++;
                       }
                   }
                   t && d.call(c, e, r.getBuffer.call(c), g ? g.forwardPosition : c.caretPos.begin, s || new p.Event("checkval"), s && ("input" === s.type && c.undoValue !== r.getBuffer.call(c).join("") || "paste" === s.type)), 
                   f.skipOptionalPartCharacter = y;
               }
               function d(e, t, i, a, s) {
                   var l = e ? e.inputmask : this, c = l.opts, u = l.dependencyLib;
                   if (a && "function" == typeof c.onBeforeWrite) {
                       var f = c.onBeforeWrite.call(l, a, t, i, c);
                       if (f) {
                           if (f.refreshFromBuffer) {
                               var d = f.refreshFromBuffer;
                               o.refreshFromBuffer.call(l, !0 === d ? d : d.start, d.end, f.buffer || t), t = r.getBuffer.call(l, !0);
                           }
                           void 0 !== i && (i = void 0 !== f.caret ? f.caret : i);
                       }
                   }
                   if (void 0 !== e && (e.inputmask._valueSet(t.join("")), void 0 === i || void 0 !== a && "blur" === a.type || r.caret.call(l, e, i, void 0, void 0, void 0 !== a && "keydown" === a.type && (a.key === n.keys.Delete || a.key === n.keys.Backspace)), 
                   !0 === s)) {
                       var p = u(e), h = e.inputmask._valueGet();
                       e.inputmask.skipInputEvent = !0, p.trigger("input"), setTimeout((function() {
                           h === r.getBufferTemplate.call(l).join("") ? p.trigger("cleared") : !0 === o.isComplete.call(l, t) && p.trigger("complete");
                       }), 0);
                   }
               }
           },
           2394: function(e, t, i) {
               Object.defineProperty(t, "__esModule", {
                   value: !0
               }), t.default = void 0;
               var n = i(157), a = m(i(4963)), r = m(i(9380)), o = i(2391), s = i(4713), l = i(8711), c = i(7215), u = i(7760), f = i(9716), d = m(i(7392)), p = m(i(3976)), h = m(i(8741));
               function v(e) {
                   return v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                       return typeof e;
                   } : function(e) {
                       return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                   }, v(e);
               }
               function m(e) {
                   return e && e.__esModule ? e : {
                       default: e
                   };
               }
               var g = r.default.document, y = "_inputmask_opts";
               function k(e, t, i) {
                   if (h.default) {
                       if (!(this instanceof k)) return new k(e, t, i);
                       this.dependencyLib = a.default, this.el = void 0, this.events = {}, this.maskset = void 0, 
                       !0 !== i && ("[object Object]" === Object.prototype.toString.call(e) ? t = e : (t = t || {}, 
                       e && (t.alias = e)), this.opts = a.default.extend(!0, {}, this.defaults, t), this.noMasksCache = t && void 0 !== t.definitions, 
                       this.userOptions = t || {}, b(this.opts.alias, t, this.opts)), this.refreshValue = !1, 
                       this.undoValue = void 0, this.$el = void 0, this.skipInputEvent = !1, this.validationEvent = !1, 
                       this.ignorable = !1, this.maxLength, this.mouseEnter = !1, this.clicked = 0, this.originalPlaceholder = void 0, 
                       this.isComposing = !1, this.hasAlternator = !1;
                   }
               }
               function b(e, t, i) {
                   var n = k.prototype.aliases[e];
                   return n ? (n.alias && b(n.alias, void 0, i), a.default.extend(!0, i, n), a.default.extend(!0, i, t), 
                   !0) : (null === i.mask && (i.mask = e), !1);
               }
               k.prototype = {
                   dataAttribute: "data-inputmask",
                   defaults: p.default,
                   definitions: d.default,
                   aliases: {},
                   masksCache: {},
                   get isRTL() {
                       return this.opts.isRTL || this.opts.numericInput;
                   },
                   mask: function(e) {
                       var t = this;
                       return "string" == typeof e && (e = g.getElementById(e) || g.querySelectorAll(e)), 
                       (e = e.nodeName ? [ e ] : Array.isArray(e) ? e : [].slice.call(e)).forEach((function(e, i) {
                           var s = a.default.extend(!0, {}, t.opts);
                           if (function(e, t, i, n) {
                               function o(t, a) {
                                   var o = "" === n ? t : n + "-" + t;
                                   null !== (a = void 0 !== a ? a : e.getAttribute(o)) && ("string" == typeof a && (0 === t.indexOf("on") ? a = r.default[a] : "false" === a ? a = !1 : "true" === a && (a = !0)), 
                                   i[t] = a);
                               }
                               if (!0 === t.importDataAttributes) {
                                   var s, l, c, u, f = e.getAttribute(n);
                                   if (f && "" !== f && (f = f.replace(/'/g, '"'), l = JSON.parse("{" + f + "}")), 
                                   l) for (u in c = void 0, l) if ("alias" === u.toLowerCase()) {
                                       c = l[u];
                                       break;
                                   }
                                   for (s in o("alias", c), i.alias && b(i.alias, i, t), t) {
                                       if (l) for (u in c = void 0, l) if (u.toLowerCase() === s.toLowerCase()) {
                                           c = l[u];
                                           break;
                                       }
                                       o(s, c);
                                   }
                               }
                               a.default.extend(!0, t, i), ("rtl" === e.dir || t.rightAlign) && (e.style.textAlign = "right");
                               ("rtl" === e.dir || t.numericInput) && (e.dir = "ltr", e.removeAttribute("dir"), 
                               t.isRTL = !0);
                               return Object.keys(i).length;
                           }(e, s, a.default.extend(!0, {}, t.userOptions), t.dataAttribute)) {
                               var l = (0, o.generateMaskSet)(s, t.noMasksCache);
                               void 0 !== l && (void 0 !== e.inputmask && (e.inputmask.opts.autoUnmask = !0, e.inputmask.remove()), 
                               e.inputmask = new k(void 0, void 0, !0), e.inputmask.opts = s, e.inputmask.noMasksCache = t.noMasksCache, 
                               e.inputmask.userOptions = a.default.extend(!0, {}, t.userOptions), e.inputmask.el = e, 
                               e.inputmask.$el = (0, a.default)(e), e.inputmask.maskset = l, a.default.data(e, y, t.userOptions), 
                               n.mask.call(e.inputmask));
                           }
                       })), e && e[0] && e[0].inputmask || this;
                   },
                   option: function(e, t) {
                       return "string" == typeof e ? this.opts[e] : "object" === v(e) ? (a.default.extend(this.userOptions, e), 
                       this.el && !0 !== t && this.mask(this.el), this) : void 0;
                   },
                   unmaskedvalue: function(e) {
                       if (this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache), 
                       void 0 === this.el || void 0 !== e) {
                           var t = ("function" == typeof this.opts.onBeforeMask && this.opts.onBeforeMask.call(this, e, this.opts) || e).split("");
                           u.checkVal.call(this, void 0, !1, !1, t), "function" == typeof this.opts.onBeforeWrite && this.opts.onBeforeWrite.call(this, void 0, l.getBuffer.call(this), 0, this.opts);
                       }
                       return u.unmaskedvalue.call(this, this.el);
                   },
                   remove: function() {
                       if (this.el) {
                           a.default.data(this.el, y, null);
                           var e = this.opts.autoUnmask ? (0, u.unmaskedvalue)(this.el) : this._valueGet(this.opts.autoUnmask);
                           e !== l.getBufferTemplate.call(this).join("") ? this._valueSet(e, this.opts.autoUnmask) : this._valueSet(""), 
                           f.EventRuler.off(this.el), Object.getOwnPropertyDescriptor && Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(this.el), "value") && this.__valueGet && Object.defineProperty(this.el, "value", {
                               get: this.__valueGet,
                               set: this.__valueSet,
                               configurable: !0
                           }) : g.__lookupGetter__ && this.el.__lookupGetter__("value") && this.__valueGet && (this.el.__defineGetter__("value", this.__valueGet), 
                           this.el.__defineSetter__("value", this.__valueSet)), this.el.inputmask = void 0;
                       }
                       return this.el;
                   },
                   getemptymask: function() {
                       return this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache), 
                       (this.isRTL ? l.getBufferTemplate.call(this).reverse() : l.getBufferTemplate.call(this)).join("");
                   },
                   hasMaskedValue: function() {
                       return !this.opts.autoUnmask;
                   },
                   isComplete: function() {
                       return this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache), 
                       c.isComplete.call(this, l.getBuffer.call(this));
                   },
                   getmetadata: function() {
                       if (this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache), 
                       Array.isArray(this.maskset.metadata)) {
                           var e = s.getMaskTemplate.call(this, !0, 0, !1).join("");
                           return this.maskset.metadata.forEach((function(t) {
                               return t.mask !== e || (e = t, !1);
                           })), e;
                       }
                       return this.maskset.metadata;
                   },
                   isValid: function(e) {
                       if (this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache), 
                       e) {
                           var t = ("function" == typeof this.opts.onBeforeMask && this.opts.onBeforeMask.call(this, e, this.opts) || e).split("");
                           u.checkVal.call(this, void 0, !0, !1, t);
                       } else e = this.isRTL ? l.getBuffer.call(this).slice().reverse().join("") : l.getBuffer.call(this).join("");
                       for (var i = l.getBuffer.call(this), n = l.determineLastRequiredPosition.call(this), a = i.length - 1; a > n && !l.isMask.call(this, a); a--) ;
                       return i.splice(n, a + 1 - n), c.isComplete.call(this, i) && e === (this.isRTL ? l.getBuffer.call(this).slice().reverse().join("") : l.getBuffer.call(this).join(""));
                   },
                   format: function(e, t) {
                       this.maskset = this.maskset || (0, o.generateMaskSet)(this.opts, this.noMasksCache);
                       var i = ("function" == typeof this.opts.onBeforeMask && this.opts.onBeforeMask.call(this, e, this.opts) || e).split("");
                       u.checkVal.call(this, void 0, !0, !1, i);
                       var n = this.isRTL ? l.getBuffer.call(this).slice().reverse().join("") : l.getBuffer.call(this).join("");
                       return t ? {
                           value: n,
                           metadata: this.getmetadata()
                       } : n;
                   },
                   setValue: function(e) {
                       this.el && (0, a.default)(this.el).trigger("setvalue", [ e ]);
                   },
                   analyseMask: o.analyseMask
               }, k.extendDefaults = function(e) {
                   a.default.extend(!0, k.prototype.defaults, e);
               }, k.extendDefinitions = function(e) {
                   a.default.extend(!0, k.prototype.definitions, e);
               }, k.extendAliases = function(e) {
                   a.default.extend(!0, k.prototype.aliases, e);
               }, k.format = function(e, t, i) {
                   return k(t).format(e, i);
               }, k.unmask = function(e, t) {
                   return k(t).unmaskedvalue(e);
               }, k.isValid = function(e, t) {
                   return k(t).isValid(e);
               }, k.remove = function(e) {
                   "string" == typeof e && (e = g.getElementById(e) || g.querySelectorAll(e)), (e = e.nodeName ? [ e ] : e).forEach((function(e) {
                       e.inputmask && e.inputmask.remove();
                   }));
               }, k.setValue = function(e, t) {
                   "string" == typeof e && (e = g.getElementById(e) || g.querySelectorAll(e)), (e = e.nodeName ? [ e ] : e).forEach((function(e) {
                       e.inputmask ? e.inputmask.setValue(t) : (0, a.default)(e).trigger("setvalue", [ t ]);
                   }));
               }, k.dependencyLib = a.default, r.default.Inputmask = k;
               var x = k;
               t.default = x;
           },
           5296: function(e, t, i) {
               function n(e) {
                   return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                       return typeof e;
                   } : function(e) {
                       return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                   }, n(e);
               }
               var a = h(i(9380)), r = h(i(2394)), o = h(i(8741));
               function s(e, t) {
                   for (var i = 0; i < t.length; i++) {
                       var a = t[i];
                       a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
                       Object.defineProperty(e, (r = a.key, o = void 0, o = function(e, t) {
                           if ("object" !== n(e) || null === e) return e;
                           var i = e[Symbol.toPrimitive];
                           if (void 0 !== i) {
                               var a = i.call(e, t || "default");
                               if ("object" !== n(a)) return a;
                               throw new TypeError("@@toPrimitive must return a primitive value.");
                           }
                           return ("string" === t ? String : Number)(e);
                       }(r, "string"), "symbol" === n(o) ? o : String(o)), a);
                   }
                   var r, o;
               }
               function l(e, t) {
                   if (t && ("object" === n(t) || "function" == typeof t)) return t;
                   if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                   return function(e) {
                       if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                       return e;
                   }(e);
               }
               function c(e) {
                   var t = "function" == typeof Map ? new Map : void 0;
                   return c = function(e) {
                       if (null === e || (i = e, -1 === Function.toString.call(i).indexOf("[native code]"))) return e;
                       var i;
                       if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
                       if (void 0 !== t) {
                           if (t.has(e)) return t.get(e);
                           t.set(e, n);
                       }
                       function n() {
                           return u(e, arguments, p(this).constructor);
                       }
                       return n.prototype = Object.create(e.prototype, {
                           constructor: {
                               value: n,
                               enumerable: !1,
                               writable: !0,
                               configurable: !0
                           }
                       }), d(n, e);
                   }, c(e);
               }
               function u(e, t, i) {
                   return u = f() ? Reflect.construct.bind() : function(e, t, i) {
                       var n = [ null ];
                       n.push.apply(n, t);
                       var a = new (Function.bind.apply(e, n));
                       return i && d(a, i.prototype), a;
                   }, u.apply(null, arguments);
               }
               function f() {
                   if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                   if (Reflect.construct.sham) return !1;
                   if ("function" == typeof Proxy) return !0;
                   try {
                       return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), 
                       !0;
                   } catch (e) {
                       return !1;
                   }
               }
               function d(e, t) {
                   return d = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                       return e.__proto__ = t, e;
                   }, d(e, t);
               }
               function p(e) {
                   return p = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                       return e.__proto__ || Object.getPrototypeOf(e);
                   }, p(e);
               }
               function h(e) {
                   return e && e.__esModule ? e : {
                       default: e
                   };
               }
               var v = a.default.document;
               if (o.default && v && v.head && v.head.attachShadow && a.default.customElements && void 0 === a.default.customElements.get("input-mask")) {
                   var m = function(e) {
                       !function(e, t) {
                           if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                           e.prototype = Object.create(t && t.prototype, {
                               constructor: {
                                   value: e,
                                   writable: !0,
                                   configurable: !0
                               }
                           }), Object.defineProperty(e, "prototype", {
                               writable: !1
                           }), t && d(e, t);
                       }(u, e);
                       var t, i, n, a, o, c = (t = u, i = f(), function() {
                           var e, n = p(t);
                           if (i) {
                               var a = p(this).constructor;
                               e = Reflect.construct(n, arguments, a);
                           } else e = n.apply(this, arguments);
                           return l(this, e);
                       });
                       function u() {
                           var e;
                           !function(e, t) {
                               if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                           }(this, u);
                           var t = (e = c.call(this)).getAttributeNames(), i = e.attachShadow({
                               mode: "closed"
                           }), n = v.createElement("input");
                           for (var a in n.type = "text", i.appendChild(n), t) Object.prototype.hasOwnProperty.call(t, a) && n.setAttribute(t[a], e.getAttribute(t[a]));
                           var o = new r.default;
                           return o.dataAttribute = "", o.mask(n), n.inputmask.shadowRoot = i, e;
                       }
                       return n = u, a && s(n.prototype, a), o && s(n, o), Object.defineProperty(n, "prototype", {
                           writable: !1
                       }), n;
                   }(c(HTMLElement));
                   a.default.customElements.define("input-mask", m);
               }
           },
           2839: function(e, t) {
               function i(e, t) {
                   return function(e) {
                       if (Array.isArray(e)) return e;
                   }(e) || function(e, t) {
                       var i = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                       if (null != i) {
                           var n, a, r, o, s = [], l = !0, c = !1;
                           try {
                               if (r = (i = i.call(e)).next, 0 === t) {
                                   if (Object(i) !== i) return;
                                   l = !1;
                               } else for (;!(l = (n = r.call(i)).done) && (s.push(n.value), s.length !== t); l = !0) ;
                           } catch (e) {
                               c = !0, a = e;
                           } finally {
                               try {
                                   if (!l && null != i.return && (o = i.return(), Object(o) !== o)) return;
                               } finally {
                                   if (c) throw a;
                               }
                           }
                           return s;
                       }
                   }(e, t) || function(e, t) {
                       if (!e) return;
                       if ("string" == typeof e) return n(e, t);
                       var i = Object.prototype.toString.call(e).slice(8, -1);
                       "Object" === i && e.constructor && (i = e.constructor.name);
                       if ("Map" === i || "Set" === i) return Array.from(e);
                       if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return n(e, t);
                   }(e, t) || function() {
                       throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                   }();
               }
               function n(e, t) {
                   (null == t || t > e.length) && (t = e.length);
                   for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
                   return n;
               }
               Object.defineProperty(t, "__esModule", {
                   value: !0
               }), t.keys = t.keyCode = void 0, t.toKey = function(e, t) {
                   return r[e] || (t ? String.fromCharCode(e) : String.fromCharCode(e).toLowerCase());
               }, t.toKeyCode = function(e) {
                   return a[e];
               };
               var a = {
                   AltGraph: 18,
                   ArrowDown: 40,
                   ArrowLeft: 37,
                   ArrowRight: 39,
                   ArrowUp: 38,
                   Backspace: 8,
                   BACKSPACE_SAFARI: 127,
                   CapsLock: 20,
                   Delete: 46,
                   End: 35,
                   Enter: 13,
                   Escape: 27,
                   Home: 36,
                   Insert: 45,
                   PageDown: 34,
                   PageUp: 33,
                   Space: 32,
                   Tab: 9,
                   c: 67,
                   x: 88,
                   z: 90,
                   Shift: 16,
                   Control: 17,
                   Alt: 18,
                   Pause: 19,
                   Meta_LEFT: 91,
                   Meta_RIGHT: 92,
                   ContextMenu: 93,
                   Process: 229,
                   Unidentified: 229,
                   F1: 112,
                   F2: 113,
                   F3: 114,
                   F4: 115,
                   F5: 116,
                   F6: 117,
                   F7: 118,
                   F8: 119,
                   F9: 120,
                   F10: 121,
                   F11: 122,
                   F12: 123
               };
               t.keyCode = a;
               var r = Object.entries(a).reduce((function(e, t) {
                   var n = i(t, 2), a = n[0], r = n[1];
                   return e[r] = void 0 === e[r] ? a : e[r], e;
               }), {}), o = Object.entries(a).reduce((function(e, t) {
                   var n = i(t, 2), a = n[0];
                   n[1];
                   return e[a] = "Space" === a ? " " : a, e;
               }), {});
               t.keys = o;
           },
           2391: function(e, t, i) {
               Object.defineProperty(t, "__esModule", {
                   value: !0
               }), t.analyseMask = function(e, t, i) {
                   var n, o, s, l, c, u, f = /(?:[?*+]|\{[0-9+*]+(?:,[0-9+*]*)?(?:\|[0-9+*]*)?\})|[^.?*+^${[]()|\\]+|./g, d = /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g, p = !1, h = new a.default, v = [], m = [], g = !1;
                   function y(e, n, a) {
                       a = void 0 !== a ? a : e.matches.length;
                       var o = e.matches[a - 1];
                       if (t) {
                           if (0 === n.indexOf("[") || p && /\\d|\\s|\\w|\\p/i.test(n) || "." === n) {
                               var s = i.casing ? "i" : "";
                               /^\\p\{.*}$/i.test(n) && (s += "u"), e.matches.splice(a++, 0, {
                                   fn: new RegExp(n, s),
                                   static: !1,
                                   optionality: !1,
                                   newBlockMarker: void 0 === o ? "master" : o.def !== n,
                                   casing: null,
                                   def: n,
                                   placeholder: void 0,
                                   nativeDef: n
                               });
                           } else p && (n = n[n.length - 1]), n.split("").forEach((function(t, n) {
                               o = e.matches[a - 1], e.matches.splice(a++, 0, {
                                   fn: /[a-z]/i.test(i.staticDefinitionSymbol || t) ? new RegExp("[" + (i.staticDefinitionSymbol || t) + "]", i.casing ? "i" : "") : null,
                                   static: !0,
                                   optionality: !1,
                                   newBlockMarker: void 0 === o ? "master" : o.def !== t && !0 !== o.static,
                                   casing: null,
                                   def: i.staticDefinitionSymbol || t,
                                   placeholder: void 0 !== i.staticDefinitionSymbol ? t : void 0,
                                   nativeDef: (p ? "'" : "") + t
                               });
                           }));
                           p = !1;
                       } else {
                           var l = i.definitions && i.definitions[n] || i.usePrototypeDefinitions && r.default.prototype.definitions[n];
                           l && !p ? e.matches.splice(a++, 0, {
                               fn: l.validator ? "string" == typeof l.validator ? new RegExp(l.validator, i.casing ? "i" : "") : new function() {
                                   this.test = l.validator;
                               } : new RegExp("."),
                               static: l.static || !1,
                               optionality: l.optional || !1,
                               defOptionality: l.optional || !1,
                               newBlockMarker: void 0 === o || l.optional ? "master" : o.def !== (l.definitionSymbol || n),
                               casing: l.casing,
                               def: l.definitionSymbol || n,
                               placeholder: l.placeholder,
                               nativeDef: n,
                               generated: l.generated
                           }) : (e.matches.splice(a++, 0, {
                               fn: /[a-z]/i.test(i.staticDefinitionSymbol || n) ? new RegExp("[" + (i.staticDefinitionSymbol || n) + "]", i.casing ? "i" : "") : null,
                               static: !0,
                               optionality: !1,
                               newBlockMarker: void 0 === o ? "master" : o.def !== n && !0 !== o.static,
                               casing: null,
                               def: i.staticDefinitionSymbol || n,
                               placeholder: void 0 !== i.staticDefinitionSymbol ? n : void 0,
                               nativeDef: (p ? "'" : "") + n
                           }), p = !1);
                       }
                   }
                   function k() {
                       if (v.length > 0) {
                           if (y(l = v[v.length - 1], o), l.isAlternator) {
                               c = v.pop();
                               for (var e = 0; e < c.matches.length; e++) c.matches[e].isGroup && (c.matches[e].isGroup = !1);
                               v.length > 0 ? (l = v[v.length - 1]).matches.push(c) : h.matches.push(c);
                           }
                       } else y(h, o);
                   }
                   function b(e) {
                       var t = new a.default(!0);
                       return t.openGroup = !1, t.matches = e, t;
                   }
                   function x() {
                       if ((s = v.pop()).openGroup = !1, void 0 !== s) if (v.length > 0) {
                           if ((l = v[v.length - 1]).matches.push(s), l.isAlternator) {
                               for (var e = (c = v.pop()).matches[0].matches ? c.matches[0].matches.length : 1, t = 0; t < c.matches.length; t++) c.matches[t].isGroup = !1, 
                               c.matches[t].alternatorGroup = !1, null === i.keepStatic && e < (c.matches[t].matches ? c.matches[t].matches.length : 1) && (i.keepStatic = !0), 
                               e = c.matches[t].matches ? c.matches[t].matches.length : 1;
                               v.length > 0 ? (l = v[v.length - 1]).matches.push(c) : h.matches.push(c);
                           }
                       } else h.matches.push(s); else k();
                   }
                   function P(e) {
                       var t = e.pop();
                       return t.isQuantifier && (t = b([ e.pop(), t ])), t;
                   }
                   t && (i.optionalmarker[0] = void 0, i.optionalmarker[1] = void 0);
                   for (;n = t ? d.exec(e) : f.exec(e); ) {
                       if (o = n[0], t) {
                           switch (o.charAt(0)) {
                             case "?":
                               o = "{0,1}";
                               break;

                             case "+":
                             case "*":
                               o = "{" + o + "}";
                               break;

                             case "|":
                               if (0 === v.length) {
                                   var w = b(h.matches);
                                   w.openGroup = !0, v.push(w), h.matches = [], g = !0;
                               }
                           }
                           switch (o) {
                             case "\\d":
                               o = "[0-9]";
                               break;

                             case "\\p":
                               o += d.exec(e)[0], o += d.exec(e)[0];
                           }
                       }
                       if (p) k(); else switch (o.charAt(0)) {
                         case "$":
                         case "^":
                           t || k();
                           break;

                         case i.escapeChar:
                           p = !0, t && k();
                           break;

                         case i.optionalmarker[1]:
                         case i.groupmarker[1]:
                           x();
                           break;

                         case i.optionalmarker[0]:
                           v.push(new a.default(!1, !0));
                           break;

                         case i.groupmarker[0]:
                           v.push(new a.default(!0));
                           break;

                         case i.quantifiermarker[0]:
                           var S = new a.default(!1, !1, !0), M = (o = o.replace(/[{}?]/g, "")).split("|"), _ = M[0].split(","), O = isNaN(_[0]) ? _[0] : parseInt(_[0]), E = 1 === _.length ? O : isNaN(_[1]) ? _[1] : parseInt(_[1]), T = isNaN(M[1]) ? M[1] : parseInt(M[1]);
                           "*" !== O && "+" !== O || (O = "*" === E ? 0 : 1), S.quantifier = {
                               min: O,
                               max: E,
                               jit: T
                           };
                           var j = v.length > 0 ? v[v.length - 1].matches : h.matches;
                           (n = j.pop()).isGroup || (n = b([ n ])), j.push(n), j.push(S);
                           break;

                         case i.alternatormarker:
                           if (v.length > 0) {
                               var A = (l = v[v.length - 1]).matches[l.matches.length - 1];
                               u = l.openGroup && (void 0 === A.matches || !1 === A.isGroup && !1 === A.isAlternator) ? v.pop() : P(l.matches);
                           } else u = P(h.matches);
                           if (u.isAlternator) v.push(u); else if (u.alternatorGroup ? (c = v.pop(), u.alternatorGroup = !1) : c = new a.default(!1, !1, !1, !0), 
                           c.matches.push(u), v.push(c), u.openGroup) {
                               u.openGroup = !1;
                               var D = new a.default(!0);
                               D.alternatorGroup = !0, v.push(D);
                           }
                           break;

                         default:
                           k();
                       }
                   }
                   g && x();
                   for (;v.length > 0; ) s = v.pop(), h.matches.push(s);
                   h.matches.length > 0 && (!function e(n) {
                       n && n.matches && n.matches.forEach((function(a, r) {
                           var o = n.matches[r + 1];
                           (void 0 === o || void 0 === o.matches || !1 === o.isQuantifier) && a && a.isGroup && (a.isGroup = !1, 
                           t || (y(a, i.groupmarker[0], 0), !0 !== a.openGroup && y(a, i.groupmarker[1]))), 
                           e(a);
                       }));
                   }(h), m.push(h));
                   (i.numericInput || i.isRTL) && function e(t) {
                       for (var n in t.matches = t.matches.reverse(), t.matches) if (Object.prototype.hasOwnProperty.call(t.matches, n)) {
                           var a = parseInt(n);
                           if (t.matches[n].isQuantifier && t.matches[a + 1] && t.matches[a + 1].isGroup) {
                               var r = t.matches[n];
                               t.matches.splice(n, 1), t.matches.splice(a + 1, 0, r);
                           }
                           void 0 !== t.matches[n].matches ? t.matches[n] = e(t.matches[n]) : t.matches[n] = ((o = t.matches[n]) === i.optionalmarker[0] ? o = i.optionalmarker[1] : o === i.optionalmarker[1] ? o = i.optionalmarker[0] : o === i.groupmarker[0] ? o = i.groupmarker[1] : o === i.groupmarker[1] && (o = i.groupmarker[0]), 
                           o);
                       }
                       var o;
                       return t;
                   }(m[0]);
                   return m;
               }, t.generateMaskSet = function(e, t) {
                   var i;
                   function a(e, t) {
                       var i = t.repeat, n = t.groupmarker, a = t.quantifiermarker, r = t.keepStatic;
                       if (i > 0 || "*" === i || "+" === i) {
                           var l = "*" === i ? 0 : "+" === i ? 1 : i;
                           e = n[0] + e + n[1] + a[0] + l + "," + i + a[1];
                       }
                       if (!0 === r) {
                           var c = e.match(new RegExp("(.)\\[([^\\]]*)\\]", "g"));
                           c && c.forEach((function(t, i) {
                               var n = function(e, t) {
                                   return function(e) {
                                       if (Array.isArray(e)) return e;
                                   }(e) || function(e, t) {
                                       var i = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                       if (null != i) {
                                           var n, a, r, o, s = [], l = !0, c = !1;
                                           try {
                                               if (r = (i = i.call(e)).next, 0 === t) {
                                                   if (Object(i) !== i) return;
                                                   l = !1;
                                               } else for (;!(l = (n = r.call(i)).done) && (s.push(n.value), s.length !== t); l = !0) ;
                                           } catch (e) {
                                               c = !0, a = e;
                                           } finally {
                                               try {
                                                   if (!l && null != i.return && (o = i.return(), Object(o) !== o)) return;
                                               } finally {
                                                   if (c) throw a;
                                               }
                                           }
                                           return s;
                                       }
                                   }(e, t) || function(e, t) {
                                       if (!e) return;
                                       if ("string" == typeof e) return s(e, t);
                                       var i = Object.prototype.toString.call(e).slice(8, -1);
                                       "Object" === i && e.constructor && (i = e.constructor.name);
                                       if ("Map" === i || "Set" === i) return Array.from(e);
                                       if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return s(e, t);
                                   }(e, t) || function() {
                                       throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                                   }();
                               }(t.split("["), 2), a = n[0], r = n[1];
                               r = r.replace("]", ""), e = e.replace(new RegExp("".concat((0, o.default)(a), "\\[").concat((0, 
                               o.default)(r), "\\]")), a.charAt(0) === r.charAt(0) ? "(".concat(a, "|").concat(a).concat(r, ")") : "".concat(a, "[").concat(r, "]"));
                           }));
                       }
                       return e;
                   }
                   function l(e, i, o) {
                       var s, l, c = !1;
                       return null !== e && "" !== e || ((c = null !== o.regex) ? e = (e = o.regex).replace(/^(\^)(.*)(\$)$/, "$2") : (c = !0, 
                       e = ".*")), 1 === e.length && !1 === o.greedy && 0 !== o.repeat && (o.placeholder = ""), 
                       e = a(e, o), l = c ? "regex_" + o.regex : o.numericInput ? e.split("").reverse().join("") : e, 
                       null !== o.keepStatic && (l = "ks_" + o.keepStatic + l), void 0 === r.default.prototype.masksCache[l] || !0 === t ? (s = {
                           mask: e,
                           maskToken: r.default.prototype.analyseMask(e, c, o),
                           validPositions: [],
                           _buffer: void 0,
                           buffer: void 0,
                           tests: {},
                           excludes: {},
                           metadata: i,
                           maskLength: void 0,
                           jitOffset: {}
                       }, !0 !== t && (r.default.prototype.masksCache[l] = s, s = n.default.extend(!0, {}, r.default.prototype.masksCache[l]))) : s = n.default.extend(!0, {}, r.default.prototype.masksCache[l]), 
                       s;
                   }
                   "function" == typeof e.mask && (e.mask = e.mask(e));
                   if (Array.isArray(e.mask)) {
                       if (e.mask.length > 1) {
                           null === e.keepStatic && (e.keepStatic = !0);
                           var c = e.groupmarker[0];
                           return (e.isRTL ? e.mask.reverse() : e.mask).forEach((function(t) {
                               c.length > 1 && (c += e.alternatormarker), void 0 !== t.mask && "function" != typeof t.mask ? c += t.mask : c += t;
                           })), l(c += e.groupmarker[1], e.mask, e);
                       }
                       e.mask = e.mask.pop();
                   }
                   i = e.mask && void 0 !== e.mask.mask && "function" != typeof e.mask.mask ? l(e.mask.mask, e.mask, e) : l(e.mask, e.mask, e);
                   null === e.keepStatic && (e.keepStatic = !1);
                   return i;
               };
               var n = l(i(4963)), a = l(i(9695)), r = l(i(2394)), o = l(i(7184));
               function s(e, t) {
                   (null == t || t > e.length) && (t = e.length);
                   for (var i = 0, n = new Array(t); i < t; i++) n[i] = e[i];
                   return n;
               }
               function l(e) {
                   return e && e.__esModule ? e : {
                       default: e
                   };
               }
           },
           157: function(e, t, i) {
               Object.defineProperty(t, "__esModule", {
                   value: !0
               }), t.mask = function() {
                   var e = this, t = this.opts, i = this.el, u = this.dependencyLib;
                   o.EventRuler.off(i);
                   var f = function(t, i) {
                       "textarea" !== t.tagName.toLowerCase() && i.ignorables.push(n.keys.Enter);
                       var s = t.getAttribute("type"), l = "input" === t.tagName.toLowerCase() && i.supportsInputType.includes(s) || t.isContentEditable || "textarea" === t.tagName.toLowerCase();
                       if (!l) if ("input" === t.tagName.toLowerCase()) {
                           var c = document.createElement("input");
                           c.setAttribute("type", s), l = "text" === c.type, c = null;
                       } else l = "partial";
                       return !1 !== l ? function(t) {
                           var n, s;
                           function l() {
                               return this.inputmask ? this.inputmask.opts.autoUnmask ? this.inputmask.unmaskedvalue() : -1 !== a.getLastValidPosition.call(e) || !0 !== i.nullable ? (this.inputmask.shadowRoot || this.ownerDocument).activeElement === this && i.clearMaskOnLostFocus ? (e.isRTL ? r.clearOptionalTail.call(e, a.getBuffer.call(e).slice()).reverse() : r.clearOptionalTail.call(e, a.getBuffer.call(e).slice())).join("") : n.call(this) : "" : n.call(this);
                           }
                           function c(e) {
                               s.call(this, e), this.inputmask && (0, r.applyInputValue)(this, e);
                           }
                           if (!t.inputmask.__valueGet) {
                               if (!0 !== i.noValuePatching) {
                                   if (Object.getOwnPropertyDescriptor) {
                                       var f = Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(t), "value") : void 0;
                                       f && f.get && f.set ? (n = f.get, s = f.set, Object.defineProperty(t, "value", {
                                           get: l,
                                           set: c,
                                           configurable: !0
                                       })) : "input" !== t.tagName.toLowerCase() && (n = function() {
                                           return this.textContent;
                                       }, s = function(e) {
                                           this.textContent = e;
                                       }, Object.defineProperty(t, "value", {
                                           get: l,
                                           set: c,
                                           configurable: !0
                                       }));
                                   } else document.__lookupGetter__ && t.__lookupGetter__("value") && (n = t.__lookupGetter__("value"), 
                                   s = t.__lookupSetter__("value"), t.__defineGetter__("value", l), t.__defineSetter__("value", c));
                                   t.inputmask.__valueGet = n, t.inputmask.__valueSet = s;
                               }
                               t.inputmask._valueGet = function(t) {
                                   return e.isRTL && !0 !== t ? n.call(this.el).split("").reverse().join("") : n.call(this.el);
                               }, t.inputmask._valueSet = function(t, i) {
                                   s.call(this.el, null == t ? "" : !0 !== i && e.isRTL ? t.split("").reverse().join("") : t);
                               }, void 0 === n && (n = function() {
                                   return this.value;
                               }, s = function(e) {
                                   this.value = e;
                               }, function(t) {
                                   if (u.valHooks && (void 0 === u.valHooks[t] || !0 !== u.valHooks[t].inputmaskpatch)) {
                                       var n = u.valHooks[t] && u.valHooks[t].get ? u.valHooks[t].get : function(e) {
                                           return e.value;
                                       }, o = u.valHooks[t] && u.valHooks[t].set ? u.valHooks[t].set : function(e, t) {
                                           return e.value = t, e;
                                       };
                                       u.valHooks[t] = {
                                           get: function(t) {
                                               if (t.inputmask) {
                                                   if (t.inputmask.opts.autoUnmask) return t.inputmask.unmaskedvalue();
                                                   var r = n(t);
                                                   return -1 !== a.getLastValidPosition.call(e, void 0, void 0, t.inputmask.maskset.validPositions) || !0 !== i.nullable ? r : "";
                                               }
                                               return n(t);
                                           },
                                           set: function(e, t) {
                                               var i = o(e, t);
                                               return e.inputmask && (0, r.applyInputValue)(e, t), i;
                                           },
                                           inputmaskpatch: !0
                                       };
                                   }
                               }(t.type), function(e) {
                                   o.EventRuler.on(e, "mouseenter", (function() {
                                       var e = this, t = e.inputmask._valueGet(!0);
                                       t != (e.inputmask.isRTL ? a.getBuffer.call(e.inputmask).slice().reverse() : a.getBuffer.call(e.inputmask)).join("") && (0, 
                                       r.applyInputValue)(e, t);
                                   }));
                               }(t));
                           }
                       }(t) : t.inputmask = void 0, l;
                   }(i, t);
                   if (!1 !== f) {
                       e.originalPlaceholder = i.placeholder, e.maxLength = void 0 !== i ? i.maxLength : void 0, 
                       -1 === e.maxLength && (e.maxLength = void 0), "inputMode" in i && null === i.getAttribute("inputmode") && (i.inputMode = t.inputmode, 
                       i.setAttribute("inputmode", t.inputmode)), !0 === f && (t.showMaskOnFocus = t.showMaskOnFocus && -1 === [ "cc-number", "cc-exp" ].indexOf(i.autocomplete), 
                       s.iphone && (t.insertModeVisual = !1, i.setAttribute("autocorrect", "off")), o.EventRuler.on(i, "submit", c.EventHandlers.submitEvent), 
                       o.EventRuler.on(i, "reset", c.EventHandlers.resetEvent), o.EventRuler.on(i, "blur", c.EventHandlers.blurEvent), 
                       o.EventRuler.on(i, "focus", c.EventHandlers.focusEvent), o.EventRuler.on(i, "invalid", c.EventHandlers.invalidEvent), 
                       o.EventRuler.on(i, "click", c.EventHandlers.clickEvent), o.EventRuler.on(i, "mouseleave", c.EventHandlers.mouseleaveEvent), 
                       o.EventRuler.on(i, "mouseenter", c.EventHandlers.mouseenterEvent), o.EventRuler.on(i, "paste", c.EventHandlers.pasteEvent), 
                       o.EventRuler.on(i, "cut", c.EventHandlers.cutEvent), o.EventRuler.on(i, "complete", t.oncomplete), 
                       o.EventRuler.on(i, "incomplete", t.onincomplete), o.EventRuler.on(i, "cleared", t.oncleared), 
                       !0 !== t.inputEventOnly && o.EventRuler.on(i, "keydown", c.EventHandlers.keyEvent), 
                       (s.mobile || t.inputEventOnly) && i.removeAttribute("maxLength"), o.EventRuler.on(i, "input", c.EventHandlers.inputFallBackEvent)), 
                       o.EventRuler.on(i, "setvalue", c.EventHandlers.setValueEvent), a.getBufferTemplate.call(e).join(""), 
                       e.undoValue = e._valueGet(!0);
                       var d = (i.inputmask.shadowRoot || i.ownerDocument).activeElement;
                       if ("" !== i.inputmask._valueGet(!0) || !1 === t.clearMaskOnLostFocus || d === i) {
                           (0, r.applyInputValue)(i, i.inputmask._valueGet(!0), t);
                           var p = a.getBuffer.call(e).slice();
                           !1 === l.isComplete.call(e, p) && t.clearIncomplete && a.resetMaskSet.call(e), t.clearMaskOnLostFocus && d !== i && (-1 === a.getLastValidPosition.call(e) ? p = [] : r.clearOptionalTail.call(e, p)), 
                           (!1 === t.clearMaskOnLostFocus || t.showMaskOnFocus && d === i || "" !== i.inputmask._valueGet(!0)) && (0, 
                           r.writeBuffer)(i, p), d === i && a.caret.call(e, i, a.seekNext.call(e, a.getLastValidPosition.call(e)));
                       }
                   }
               };
               var n = i(2839), a = i(8711), r = i(7760), o = i(9716), s = i(9845), l = i(7215), c = i(6030);
           },
           9695: function(e, t) {
               Object.defineProperty(t, "__esModule", {
                   value: !0
               }), t.default = function(e, t, i, n) {
                   this.matches = [], this.openGroup = e || !1, this.alternatorGroup = !1, this.isGroup = e || !1, 
                   this.isOptional = t || !1, this.isQuantifier = i || !1, this.isAlternator = n || !1, 
                   this.quantifier = {
                       min: 1,
                       max: 1
                   };
               };
           },
           3194: function() {
               Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
                   value: function(e, t) {
                       if (null == this) throw new TypeError('"this" is null or not defined');
                       var i = Object(this), n = i.length >>> 0;
                       if (0 === n) return !1;
                       for (var a = 0 | t, r = Math.max(a >= 0 ? a : n - Math.abs(a), 0); r < n; ) {
                           if (i[r] === e) return !0;
                           r++;
                       }
                       return !1;
                   }
               });
           },
           9302: function() {
               var e = Function.bind.call(Function.call, Array.prototype.reduce), t = Function.bind.call(Function.call, Object.prototype.propertyIsEnumerable), i = Function.bind.call(Function.call, Array.prototype.concat), n = Object.keys;
               Object.entries || (Object.entries = function(a) {
                   return e(n(a), (function(e, n) {
                       return i(e, "string" == typeof n && t(a, n) ? [ [ n, a[n] ] ] : []);
                   }), []);
               });
           },
           7149: function() {
               function e(t) {
                   return e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                       return typeof e;
                   } : function(e) {
                       return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                   }, e(t);
               }
               "function" != typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" === e("test".__proto__) ? function(e) {
                   return e.__proto__;
               } : function(e) {
                   return e.constructor.prototype;
               });
           },
           4013: function() {
               String.prototype.includes || (String.prototype.includes = function(e, t) {
                   return "number" != typeof t && (t = 0), !(t + e.length > this.length) && -1 !== this.indexOf(e, t);
               });
           },
           8711: function(e, t, i) {
               Object.defineProperty(t, "__esModule", {
                   value: !0
               }), t.caret = function(e, t, i, n, a) {
                   var r, o = this, s = this.opts;
                   if (void 0 === t) return "selectionStart" in e && "selectionEnd" in e ? (t = e.selectionStart, 
                   i = e.selectionEnd) : window.getSelection ? (r = window.getSelection().getRangeAt(0)).commonAncestorContainer.parentNode !== e && r.commonAncestorContainer !== e || (t = r.startOffset, 
                   i = r.endOffset) : document.selection && document.selection.createRange && (i = (t = 0 - (r = document.selection.createRange()).duplicate().moveStart("character", -e.inputmask._valueGet().length)) + r.text.length), 
                   {
                       begin: n ? t : c.call(o, t),
                       end: n ? i : c.call(o, i)
                   };
                   if (Array.isArray(t) && (i = o.isRTL ? t[0] : t[1], t = o.isRTL ? t[1] : t[0]), 
                   void 0 !== t.begin && (i = o.isRTL ? t.begin : t.end, t = o.isRTL ? t.end : t.begin), 
                   "number" == typeof t) {
                       t = n ? t : c.call(o, t), i = "number" == typeof (i = n ? i : c.call(o, i)) ? i : t;
                       var l = parseInt(((e.ownerDocument.defaultView || window).getComputedStyle ? (e.ownerDocument.defaultView || window).getComputedStyle(e, null) : e.currentStyle).fontSize) * i;
                       if (e.scrollLeft = l > e.scrollWidth ? l : 0, e.inputmask.caretPos = {
                           begin: t,
                           end: i
                       }, s.insertModeVisual && !1 === s.insertMode && t === i && (a || i++), e === (e.inputmask.shadowRoot || e.ownerDocument).activeElement) if ("setSelectionRange" in e) e.setSelectionRange(t, i); else if (window.getSelection) {
                           if (r = document.createRange(), void 0 === e.firstChild || null === e.firstChild) {
                               var u = document.createTextNode("");
                               e.appendChild(u);
                           }
                           r.setStart(e.firstChild, t < e.inputmask._valueGet().length ? t : e.inputmask._valueGet().length), 
                           r.setEnd(e.firstChild, i < e.inputmask._valueGet().length ? i : e.inputmask._valueGet().length), 
                           r.collapse(!0);
                           var f = window.getSelection();
                           f.removeAllRanges(), f.addRange(r);
                       } else e.createTextRange && ((r = e.createTextRange()).collapse(!0), r.moveEnd("character", i), 
                       r.moveStart("character", t), r.select());
                   }
               }, t.determineLastRequiredPosition = function(e) {
                   var t, i, r = this, s = r.maskset, l = r.dependencyLib, c = n.getMaskTemplate.call(r, !0, o.call(r), !0, !0), u = c.length, f = o.call(r), d = {}, p = s.validPositions[f], h = void 0 !== p ? p.locator.slice() : void 0;
                   for (t = f + 1; t < c.length; t++) h = (i = n.getTestTemplate.call(r, t, h, t - 1)).locator.slice(), 
                   d[t] = l.extend(!0, {}, i);
                   var v = p && void 0 !== p.alternation ? p.locator[p.alternation] : void 0;
                   for (t = u - 1; t > f && (((i = d[t]).match.optionality || i.match.optionalQuantifier && i.match.newBlockMarker || v && (v !== d[t].locator[p.alternation] && 1 != i.match.static || !0 === i.match.static && i.locator[p.alternation] && a.checkAlternationMatch.call(r, i.locator[p.alternation].toString().split(","), v.toString().split(",")) && "" !== n.getTests.call(r, t)[0].def)) && c[t] === n.getPlaceholder.call(r, t, i.match)); t--) u--;
                   return e ? {
                       l: u,
                       def: d[u] ? d[u].match : void 0
                   } : u;
               }, t.determineNewCaretPosition = function(e, t, i) {
                   var a = this, c = a.maskset, u = a.opts;
                   t && (a.isRTL ? e.end = e.begin : e.begin = e.end);
                   if (e.begin === e.end) {
                       switch (i = i || u.positionCaretOnClick) {
                         case "none":
                           break;

                         case "select":
                           e = {
                               begin: 0,
                               end: r.call(a).length
                           };
                           break;

                         case "ignore":
                           e.end = e.begin = l.call(a, o.call(a));
                           break;

                         case "radixFocus":
                           if (a.clicked > 1 && 0 == c.validPositions.length) break;
                           if (function(e) {
                               if ("" !== u.radixPoint && 0 !== u.digits) {
                                   var t = c.validPositions;
                                   if (void 0 === t[e] || t[e].input === n.getPlaceholder.call(a, e)) {
                                       if (e < l.call(a, -1)) return !0;
                                       var i = r.call(a).indexOf(u.radixPoint);
                                       if (-1 !== i) {
                                           for (var o = 0, s = t.length; o < s; o++) if (t[o] && i < o && t[o].input !== n.getPlaceholder.call(a, o)) return !1;
                                           return !0;
                                       }
                                   }
                               }
                               return !1;
                           }(e.begin)) {
                               var f = r.call(a).join("").indexOf(u.radixPoint);
                               e.end = e.begin = u.numericInput ? l.call(a, f) : f;
                               break;
                           }

                         default:
                           var d = e.begin, p = o.call(a, d, !0), h = l.call(a, -1 !== p || s.call(a, 0) ? p : -1);
                           if (d <= h) e.end = e.begin = s.call(a, d, !1, !0) ? d : l.call(a, d); else {
                               var v = c.validPositions[p], m = n.getTestTemplate.call(a, h, v ? v.match.locator : void 0, v), g = n.getPlaceholder.call(a, h, m.match);
                               if ("" !== g && r.call(a)[h] !== g && !0 !== m.match.optionalQuantifier && !0 !== m.match.newBlockMarker || !s.call(a, h, u.keepStatic, !0) && m.match.def === g) {
                                   var y = l.call(a, h);
                                   (d >= y || d === h) && (h = y);
                               }
                               e.end = e.begin = h;
                           }
                       }
                       return e;
                   }
               }, t.getBuffer = r, t.getBufferTemplate = function() {
                   var e = this.maskset;
                   void 0 === e._buffer && (e._buffer = n.getMaskTemplate.call(this, !1, 1), void 0 === e.buffer && (e.buffer = e._buffer.slice()));
                   return e._buffer;
               }, t.getLastValidPosition = o, t.isMask = s, t.resetMaskSet = function(e) {
                   var t = this.maskset;
                   t.buffer = void 0, !0 !== e && (t.validPositions = [], t.p = 0);
               }, t.seekNext = l, t.seekPrevious = function(e, t) {
                   var i = this, a = e - 1;
                   if (e <= 0) return 0;
                   for (;a > 0 && (!0 === t && (!0 !== n.getTest.call(i, a).match.newBlockMarker || !s.call(i, a, void 0, !0)) || !0 !== t && !s.call(i, a, void 0, !0)); ) a--;
                   return a;
               }, t.translatePosition = c;
               var n = i(4713), a = i(7215);
               function r(e) {
                   var t = this, i = t.maskset;
                   return void 0 !== i.buffer && !0 !== e || (i.buffer = n.getMaskTemplate.call(t, !0, o.call(t), !0), 
                   void 0 === i._buffer && (i._buffer = i.buffer.slice())), i.buffer;
               }
               function o(e, t, i) {
                   var n = this.maskset, a = -1, r = -1, o = i || n.validPositions;
                   void 0 === e && (e = -1);
                   for (var s = 0, l = o.length; s < l; s++) o[s] && (t || !0 !== o[s].generatedInput) && (s <= e && (a = s), 
                   s >= e && (r = s));
                   return -1 === a || a == e ? r : -1 == r || e - a < r - e ? a : r;
               }
               function s(e, t, i) {
                   var a = this, r = this.maskset, o = n.getTestTemplate.call(a, e).match;
                   if ("" === o.def && (o = n.getTest.call(a, e).match), !0 !== o.static) return o.fn;
                   if (!0 === i && void 0 !== r.validPositions[e] && !0 !== r.validPositions[e].generatedInput) return !0;
                   if (!0 !== t && e > -1) {
                       if (i) {
                           var s = n.getTests.call(a, e);
                           return s.length > 1 + ("" === s[s.length - 1].match.def ? 1 : 0);
                       }
                       var l = n.determineTestTemplate.call(a, e, n.getTests.call(a, e)), c = n.getPlaceholder.call(a, e, l.match);
                       return l.match.def !== c;
                   }
                   return !1;
               }
               function l(e, t, i) {
                   var a = this;
                   void 0 === i && (i = !0);
                   for (var r = e + 1; "" !== n.getTest.call(a, r).match.def && (!0 === t && (!0 !== n.getTest.call(a, r).match.newBlockMarker || !s.call(a, r, void 0, !0)) || !0 !== t && !s.call(a, r, void 0, i)); ) r++;
                   return r;
               }
               function c(e) {
                   var t = this.opts, i = this.el;
                   return !this.isRTL || "number" != typeof e || t.greedy && "" === t.placeholder || !i || (e = this._valueGet().length - e) < 0 && (e = 0), 
                   e;
               }
           },
           4713: function(e, t, i) {
               Object.defineProperty(t, "__esModule", {
                   value: !0
               }), t.determineTestTemplate = c, t.getDecisionTaker = o, t.getMaskTemplate = function(e, t, i, n, a) {
                   var r = this, o = this.opts, u = this.maskset, f = o.greedy;
                   a && o.greedy && (o.greedy = !1, r.maskset.tests = {});
                   t = t || 0;
                   var p, h, v, m, g = [], y = 0;
                   do {
                       if (!0 === e && u.validPositions[y]) h = (v = a && u.validPositions[y].match.optionality && void 0 === u.validPositions[y + 1] && (!0 === u.validPositions[y].generatedInput || u.validPositions[y].input == o.skipOptionalPartCharacter && y > 0) ? c.call(r, y, d.call(r, y, p, y - 1)) : u.validPositions[y]).match, 
                       p = v.locator.slice(), g.push(!0 === i ? v.input : !1 === i ? h.nativeDef : s.call(r, y, h)); else {
                           h = (v = l.call(r, y, p, y - 1)).match, p = v.locator.slice();
                           var k = !0 !== n && (!1 !== o.jitMasking ? o.jitMasking : h.jit);
                           (m = (m && h.static && h.def !== o.groupSeparator && null === h.fn || u.validPositions[y - 1] && h.static && h.def !== o.groupSeparator && null === h.fn) && u.tests[y] && 1 === u.tests[y].length) || !1 === k || void 0 === k || "number" == typeof k && isFinite(k) && k > y ? g.push(!1 === i ? h.nativeDef : s.call(r, g.length, h)) : m = !1;
                       }
                       y++;
                   } while (!0 !== h.static || "" !== h.def || t > y);
                   "" === g[g.length - 1] && g.pop();
                   !1 === i && void 0 !== u.maskLength || (u.maskLength = y - 1);
                   return o.greedy = f, g;
               }, t.getPlaceholder = s, t.getTest = u, t.getTestTemplate = l, t.getTests = d, t.isSubsetOf = f;
               var n, a = (n = i(2394)) && n.__esModule ? n : {
                   default: n
               };
               function r(e, t) {
                   var i = (null != e.alternation ? e.mloc[o(e)] : e.locator).join("");
                   if ("" !== i) for (;i.length < t; ) i += "0";
                   return i;
               }
               function o(e) {
                   var t = e.locator[e.alternation];
                   return "string" == typeof t && t.length > 0 && (t = t.split(",")[0]), void 0 !== t ? t.toString() : "";
               }
               function s(e, t, i) {
                   var n = this.opts, a = this.maskset;
                   if (void 0 !== (t = t || u.call(this, e).match).placeholder || !0 === i) return "function" == typeof t.placeholder ? t.placeholder(n) : t.placeholder;
                   if (!0 === t.static) {
                       if (e > -1 && void 0 === a.validPositions[e]) {
                           var r, o = d.call(this, e), s = [];
                           if (o.length > 1 + ("" === o[o.length - 1].match.def ? 1 : 0)) for (var l = 0; l < o.length; l++) if ("" !== o[l].match.def && !0 !== o[l].match.optionality && !0 !== o[l].match.optionalQuantifier && (!0 === o[l].match.static || void 0 === r || !1 !== o[l].match.fn.test(r.match.def, a, e, !0, n)) && (s.push(o[l]), 
                           !0 === o[l].match.static && (r = o[l]), s.length > 1 && /[0-9a-bA-Z]/.test(s[0].match.def))) return n.placeholder.charAt(e % n.placeholder.length);
                       }
                       return t.def;
                   }
                   return n.placeholder.charAt(e % n.placeholder.length);
               }
               function l(e, t, i) {
                   return this.maskset.validPositions[e] || c.call(this, e, d.call(this, e, t ? t.slice() : t, i));
               }
               function c(e, t) {
                   var i = this.opts, n = 0, a = function(e, t) {
                       var i = 0, n = !1;
                       t.forEach((function(e) {
                           e.match.optionality && (0 !== i && i !== e.match.optionality && (n = !0), (0 === i || i > e.match.optionality) && (i = e.match.optionality));
                       })), i && (0 == e || 1 == t.length ? i = 0 : n || (i = 0));
                       return i;
                   }(e, t);
                   e = e > 0 ? e - 1 : 0;
                   var o, s, l, c = r(u.call(this, e));
                   i.greedy && t.length > 1 && "" === t[t.length - 1].match.def && (n = 1);
                   for (var f = 0; f < t.length - n; f++) {
                       var d = t[f];
                       o = r(d, c.length);
                       var p = Math.abs(o - c);
                       (void 0 === s || "" !== o && p < s || l && !i.greedy && l.match.optionality && l.match.optionality - a > 0 && "master" === l.match.newBlockMarker && (!d.match.optionality || d.match.optionality - a < 1 || !d.match.newBlockMarker) || l && !i.greedy && l.match.optionalQuantifier && !d.match.optionalQuantifier) && (s = p, 
                       l = d);
                   }
                   return l;
               }
               function u(e, t) {
                   var i = this.maskset;
                   return i.validPositions[e] ? i.validPositions[e] : (t || d.call(this, e))[0];
               }
               function f(e, t, i) {
                   function n(e) {
                       for (var t, i = [], n = -1, a = 0, r = e.length; a < r; a++) if ("-" === e.charAt(a)) for (t = e.charCodeAt(a + 1); ++n < t; ) i.push(String.fromCharCode(n)); else n = e.charCodeAt(a), 
                       i.push(e.charAt(a));
                       return i.join("");
                   }
                   return e.match.def === t.match.nativeDef || !(!(i.regex || e.match.fn instanceof RegExp && t.match.fn instanceof RegExp) || !0 === e.match.static || !0 === t.match.static) && -1 !== n(t.match.fn.toString().replace(/[[\]/]/g, "")).indexOf(n(e.match.fn.toString().replace(/[[\]/]/g, "")));
               }
               function d(e, t, i) {
                   var n, r, o = this, s = this.dependencyLib, l = this.maskset, u = this.opts, d = this.el, p = l.maskToken, h = t ? i : 0, v = t ? t.slice() : [ 0 ], m = [], g = !1, y = t ? t.join("") : "";
                   function k(t, i, r, s) {
                       function c(r, s, p) {
                           function v(e, t) {
                               var i = 0 === t.matches.indexOf(e);
                               return i || t.matches.every((function(n, a) {
                                   return !0 === n.isQuantifier ? i = v(e, t.matches[a - 1]) : Object.prototype.hasOwnProperty.call(n, "matches") && (i = v(e, n)), 
                                   !i;
                               })), i;
                           }
                           function x(e, t, i) {
                               var n, a;
                               if ((l.tests[e] || l.validPositions[e]) && (l.tests[e] || [ l.validPositions[e] ]).every((function(e, r) {
                                   if (e.mloc[t]) return n = e, !1;
                                   var o = void 0 !== i ? i : e.alternation, s = void 0 !== e.locator[o] ? e.locator[o].toString().indexOf(t) : -1;
                                   return (void 0 === a || s < a) && -1 !== s && (n = e, a = s), !0;
                               })), n) {
                                   var r = n.locator[n.alternation];
                                   return (n.mloc[t] || n.mloc[r] || n.locator).slice((void 0 !== i ? i : n.alternation) + 1);
                               }
                               return void 0 !== i ? x(e, t) : void 0;
                           }
                           function P(e, t) {
                               var i = e.alternation, n = void 0 === t || i === t.alternation && -1 === e.locator[i].toString().indexOf(t.locator[i]);
                               if (!n && i > t.alternation) for (var a = t.alternation; a < i; a++) if (e.locator[a] !== t.locator[a]) {
                                   i = a, n = !0;
                                   break;
                               }
                               if (n) {
                                   e.mloc = e.mloc || {};
                                   var r = e.locator[i];
                                   if (void 0 !== r) {
                                       if ("string" == typeof r && (r = r.split(",")[0]), void 0 === e.mloc[r] && (e.mloc[r] = e.locator.slice()), 
                                       void 0 !== t) {
                                           for (var o in t.mloc) "string" == typeof o && (o = o.split(",")[0]), void 0 === e.mloc[o] && (e.mloc[o] = t.mloc[o]);
                                           e.locator[i] = Object.keys(e.mloc).join(",");
                                       }
                                       return !0;
                                   }
                                   e.alternation = void 0;
                               }
                               return !1;
                           }
                           function w(e, t) {
                               if (e.locator.length !== t.locator.length) return !1;
                               for (var i = e.alternation + 1; i < e.locator.length; i++) if (e.locator[i] !== t.locator[i]) return !1;
                               return !0;
                           }
                           if (h > e + u._maxTestPos) throw "Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. " + l.mask;
                           if (h === e && void 0 === r.matches) {
                               if (m.push({
                                   match: r,
                                   locator: s.reverse(),
                                   cd: y,
                                   mloc: {}
                               }), !r.optionality || void 0 !== p || !(u.definitions && u.definitions[r.nativeDef] && u.definitions[r.nativeDef].optional || a.default.prototype.definitions[r.nativeDef] && a.default.prototype.definitions[r.nativeDef].optional)) return !0;
                               g = !0, h = e;
                           } else if (void 0 !== r.matches) {
                               if (r.isGroup && p !== r) return function() {
                                   if (r = c(t.matches[t.matches.indexOf(r) + 1], s, p)) return !0;
                               }();
                               if (r.isOptional) return function() {
                                   var t = r, a = m.length;
                                   if (r = k(r, i, s, p), m.length > 0) {
                                       if (m.forEach((function(e, t) {
                                           t >= a && (e.match.optionality = e.match.optionality ? e.match.optionality + 1 : 1);
                                       })), n = m[m.length - 1].match, void 0 !== p || !v(n, t)) return r;
                                       g = !0, h = e;
                                   }
                               }();
                               if (r.isAlternator) return function() {
                                   o.hasAlternator = !0;
                                   var n, a, v, y = r, k = [], b = m.slice(), S = s.length, M = !1, _ = i.length > 0 ? i.shift() : -1;
                                   if (-1 === _ || "string" == typeof _) {
                                       var O, E = h, T = i.slice(), j = [];
                                       if ("string" == typeof _) j = _.split(","); else for (O = 0; O < y.matches.length; O++) j.push(O.toString());
                                       if (void 0 !== l.excludes[e]) {
                                           for (var A = j.slice(), D = 0, B = l.excludes[e].length; D < B; D++) {
                                               var C = l.excludes[e][D].toString().split(":");
                                               s.length == C[1] && j.splice(j.indexOf(C[0]), 1);
                                           }
                                           0 === j.length && (delete l.excludes[e], j = A);
                                       }
                                       (!0 === u.keepStatic || isFinite(parseInt(u.keepStatic)) && E >= u.keepStatic) && (j = j.slice(0, 1));
                                       for (var R = 0; R < j.length; R++) {
                                           O = parseInt(j[R]), m = [], i = "string" == typeof _ && x(h, O, S) || T.slice();
                                           var L = y.matches[O];
                                           if (L && c(L, [ O ].concat(s), p)) r = !0; else if (0 === R && (M = !0), L && L.matches && L.matches.length > y.matches[0].matches.length) break;
                                           n = m.slice(), h = E, m = [];
                                           for (var F = 0; F < n.length; F++) {
                                               var I = n[F], N = !1;
                                               I.match.jit = I.match.jit || M, I.alternation = I.alternation || S, P(I);
                                               for (var V = 0; V < k.length; V++) {
                                                   var G = k[V];
                                                   if ("string" != typeof _ || void 0 !== I.alternation && j.includes(I.locator[I.alternation].toString())) {
                                                       if (I.match.nativeDef === G.match.nativeDef) {
                                                           N = !0, P(G, I);
                                                           break;
                                                       }
                                                       if (f(I, G, u)) {
                                                           P(I, G) && (N = !0, k.splice(k.indexOf(G), 0, I));
                                                           break;
                                                       }
                                                       if (f(G, I, u)) {
                                                           P(G, I);
                                                           break;
                                                       }
                                                       if (v = G, !0 === (a = I).match.static && !0 !== v.match.static && v.match.fn.test(a.match.def, l, e, !1, u, !1)) {
                                                           w(I, G) || void 0 !== d.inputmask.userOptions.keepStatic ? P(I, G) && (N = !0, k.splice(k.indexOf(G), 0, I)) : u.keepStatic = !0;
                                                           break;
                                                       }
                                                   }
                                               }
                                               N || k.push(I);
                                           }
                                       }
                                       m = b.concat(k), h = e, g = m.length > 0, r = k.length > 0, i = T.slice();
                                   } else r = c(y.matches[_] || t.matches[_], [ _ ].concat(s), p);
                                   if (r) return !0;
                               }();
                               if (r.isQuantifier && p !== t.matches[t.matches.indexOf(r) - 1]) return function() {
                                   for (var a = r, o = !1, f = i.length > 0 ? i.shift() : 0; f < (isNaN(a.quantifier.max) ? f + 1 : a.quantifier.max) && h <= e; f++) {
                                       var d = t.matches[t.matches.indexOf(a) - 1];
                                       if (r = c(d, [ f ].concat(s), d)) {
                                           if (m.forEach((function(t, i) {
                                               (n = b(d, t.match) ? t.match : m[m.length - 1].match).optionalQuantifier = f >= a.quantifier.min, 
                                               n.jit = (f + 1) * (d.matches.indexOf(n) + 1) > a.quantifier.jit, n.optionalQuantifier && v(n, d) && (g = !0, 
                                               h = e, u.greedy && null == l.validPositions[e - 1] && f > a.quantifier.min && -1 != [ "*", "+" ].indexOf(a.quantifier.max) && (m.pop(), 
                                               y = void 0), o = !0, r = !1), !o && n.jit && (l.jitOffset[e] = d.matches.length - d.matches.indexOf(n));
                                           })), o) break;
                                           return !0;
                                       }
                                   }
                               }();
                               if (r = k(r, i, s, p)) return !0;
                           } else h++;
                       }
                       for (var p = i.length > 0 ? i.shift() : 0; p < t.matches.length; p++) if (!0 !== t.matches[p].isQuantifier) {
                           var v = c(t.matches[p], [ p ].concat(r), s);
                           if (v && h === e) return v;
                           if (h > e) break;
                       }
                   }
                   function b(e, t) {
                       var i = -1 != e.matches.indexOf(t);
                       return i || e.matches.forEach((function(e, n) {
                           void 0 === e.matches || i || (i = b(e, t));
                       })), i;
                   }
                   if (e > -1) {
                       if (void 0 === t) {
                           for (var x, P = e - 1; void 0 === (x = l.validPositions[P] || l.tests[P]) && P > -1; ) P--;
                           void 0 !== x && P > -1 && (v = function(e, t) {
                               var i, n = [];
                               return Array.isArray(t) || (t = [ t ]), t.length > 0 && (void 0 === t[0].alternation || !0 === u.keepStatic ? 0 === (n = c.call(o, e, t.slice()).locator.slice()).length && (n = t[0].locator.slice()) : t.forEach((function(e) {
                                   "" !== e.def && (0 === n.length ? (i = e.alternation, n = e.locator.slice()) : e.locator[i] && -1 === n[i].toString().indexOf(e.locator[i]) && (n[i] += "," + e.locator[i]));
                               }))), n;
                           }(P, x), y = v.join(""), h = P);
                       }
                       if (l.tests[e] && l.tests[e][0].cd === y) return l.tests[e];
                       for (var w = v.shift(); w < p.length; w++) {
                           if (k(p[w], v, [ w ]) && h === e || h > e) break;
                       }
                   }
                   return (0 === m.length || g) && m.push({
                       match: {
                           fn: null,
                           static: !0,
                           optionality: !1,
                           casing: null,
                           def: "",
                           placeholder: ""
                       },
                       locator: [],
                       mloc: {},
                       cd: y
                   }), void 0 !== t && l.tests[e] ? r = s.extend(!0, [], m) : (l.tests[e] = s.extend(!0, [], m), 
                   r = l.tests[e]), m.forEach((function(e) {
                       e.match.optionality = e.match.defOptionality || !1;
                   })), r;
               }
           },
           7215: function(e, t, i) {
               Object.defineProperty(t, "__esModule", {
                   value: !0
               }), t.alternate = s, t.checkAlternationMatch = function(e, t, i) {
                   for (var n, a = this.opts.greedy ? t : t.slice(0, 1), r = !1, o = void 0 !== i ? i.split(",") : [], s = 0; s < o.length; s++) -1 !== (n = e.indexOf(o[s])) && e.splice(n, 1);
                   for (var l = 0; l < e.length; l++) if (a.includes(e[l])) {
                       r = !0;
                       break;
                   }
                   return r;
               }, t.handleRemove = function(e, t, i, o, l) {
                   var c = this, u = this.maskset, f = this.opts;
                   if ((f.numericInput || c.isRTL) && (t === a.keys.Backspace ? t = a.keys.Delete : t === a.keys.Delete && (t = a.keys.Backspace), 
                   c.isRTL)) {
                       var d = i.end;
                       i.end = i.begin, i.begin = d;
                   }
                   var p, h = r.getLastValidPosition.call(c, void 0, !0);
                   i.end >= r.getBuffer.call(c).length && h >= i.end && (i.end = h + 1);
                   t === a.keys.Backspace ? i.end - i.begin < 1 && (i.begin = r.seekPrevious.call(c, i.begin)) : t === a.keys.Delete && i.begin === i.end && (i.end = r.isMask.call(c, i.end, !0, !0) ? i.end + 1 : r.seekNext.call(c, i.end) + 1);
                   if (!1 !== (p = v.call(c, i))) {
                       if (!0 !== o && !1 !== f.keepStatic || null !== f.regex && -1 !== n.getTest.call(c, i.begin).match.def.indexOf("|")) {
                           var m = s.call(c, !0);
                           if (m) {
                               var g = void 0 !== m.caret ? m.caret : m.pos ? r.seekNext.call(c, m.pos.begin ? m.pos.begin : m.pos) : r.getLastValidPosition.call(c, -1, !0);
                               (t !== a.keys.Delete || i.begin > g) && i.begin;
                           }
                       }
                       !0 !== o && (u.p = t === a.keys.Delete ? i.begin + p : i.begin, u.p = r.determineNewCaretPosition.call(c, {
                           begin: u.p,
                           end: u.p
                       }, !1, !1 === f.insertMode && t === a.keys.Backspace ? "none" : void 0).begin);
                   }
               }, t.isComplete = c, t.isSelection = u, t.isValid = f, t.refreshFromBuffer = p, 
               t.revalidateMask = v;
               var n = i(4713), a = i(2839), r = i(8711), o = i(6030);
               function s(e, t, i, a, o, l) {
                   var c, u, d, p, h, v, m, g, y, k, b, x = this, P = this.dependencyLib, w = this.opts, S = x.maskset, M = P.extend(!0, [], S.validPositions), _ = P.extend(!0, {}, S.tests), O = !1, E = !1, T = void 0 !== o ? o : r.getLastValidPosition.call(x);
                   if (l && (k = l.begin, b = l.end, l.begin > l.end && (k = l.end, b = l.begin)), 
                   -1 === T && void 0 === o) c = 0, u = (p = n.getTest.call(x, c)).alternation; else for (;T >= 0; T--) if ((d = S.validPositions[T]) && void 0 !== d.alternation) {
                       if (T <= (e || 0) && p && p.locator[d.alternation] !== d.locator[d.alternation]) break;
                       c = T, u = S.validPositions[c].alternation, p = d;
                   }
                   if (void 0 !== u) {
                       m = parseInt(c), S.excludes[m] = S.excludes[m] || [], !0 !== e && S.excludes[m].push((0, 
                       n.getDecisionTaker)(p) + ":" + p.alternation);
                       var j = [], A = -1;
                       for (h = m; h < r.getLastValidPosition.call(x, void 0, !0) + 1; h++) -1 === A && e <= h && void 0 !== t && (j.push(t), 
                       A = j.length - 1), (v = S.validPositions[h]) && !0 !== v.generatedInput && (void 0 === l || h < k || h >= b) && j.push(v.input), 
                       delete S.validPositions[h];
                       for (-1 === A && void 0 !== t && (j.push(t), A = j.length - 1); void 0 !== S.excludes[m] && S.excludes[m].length < 10; ) {
                           for (S.tests = {}, r.resetMaskSet.call(x, !0), O = !0, h = 0; h < j.length && (g = O.caret || r.getLastValidPosition.call(x, void 0, !0) + 1, 
                           y = j[h], O = f.call(x, g, y, !1, a, !0)); h++) h === A && (E = O), 1 == e && O && (E = {
                               caretPos: h
                           });
                           if (O) break;
                           if (r.resetMaskSet.call(x), p = n.getTest.call(x, m), S.validPositions = P.extend(!0, [], M), 
                           S.tests = P.extend(!0, {}, _), !S.excludes[m]) {
                               E = s.call(x, e, t, i, a, m - 1, l);
                               break;
                           }
                           var D = (0, n.getDecisionTaker)(p);
                           if (-1 !== S.excludes[m].indexOf(D + ":" + p.alternation)) {
                               E = s.call(x, e, t, i, a, m - 1, l);
                               break;
                           }
                           for (S.excludes[m].push(D + ":" + p.alternation), h = m; h < r.getLastValidPosition.call(x, void 0, !0) + 1; h++) delete S.validPositions[h];
                       }
                   }
                   return E && !1 === w.keepStatic || delete S.excludes[m], E;
               }
               function l(e, t, i) {
                   var n = this.opts, r = this.maskset;
                   switch (n.casing || t.casing) {
                     case "upper":
                       e = e.toUpperCase();
                       break;

                     case "lower":
                       e = e.toLowerCase();
                       break;

                     case "title":
                       var o = r.validPositions[i - 1];
                       e = 0 === i || o && o.input === String.fromCharCode(a.keyCode.Space) ? e.toUpperCase() : e.toLowerCase();
                       break;

                     default:
                       if ("function" == typeof n.casing) {
                           var s = Array.prototype.slice.call(arguments);
                           s.push(r.validPositions), e = n.casing.apply(this, s);
                       }
                   }
                   return e;
               }
               function c(e) {
                   var t = this, i = this.opts, a = this.maskset;
                   if ("function" == typeof i.isComplete) return i.isComplete(e, i);
                   if ("*" !== i.repeat) {
                       var o = !1, s = r.determineLastRequiredPosition.call(t, !0), l = r.seekPrevious.call(t, s.l);
                       if (void 0 === s.def || s.def.newBlockMarker || s.def.optionality || s.def.optionalQuantifier) {
                           o = !0;
                           for (var c = 0; c <= l; c++) {
                               var u = n.getTestTemplate.call(t, c).match;
                               if (!0 !== u.static && void 0 === a.validPositions[c] && !0 !== u.optionality && !0 !== u.optionalQuantifier || !0 === u.static && e[c] !== n.getPlaceholder.call(t, c, u)) {
                                   o = !1;
                                   break;
                               }
                           }
                       }
                       return o;
                   }
               }
               function u(e) {
                   var t = this.opts.insertMode ? 0 : 1;
                   return this.isRTL ? e.begin - e.end > t : e.end - e.begin > t;
               }
               function f(e, t, i, a, o, d, m) {
                   var g = this, y = this.dependencyLib, k = this.opts, b = g.maskset;
                   i = !0 === i;
                   var x = e;
                   function P(e) {
                       if (void 0 !== e) {
                           if (void 0 !== e.remove && (Array.isArray(e.remove) || (e.remove = [ e.remove ]), 
                           e.remove.sort((function(e, t) {
                               return g.isRTL ? e.pos - t.pos : t.pos - e.pos;
                           })).forEach((function(e) {
                               v.call(g, {
                                   begin: e,
                                   end: e + 1
                               });
                           })), e.remove = void 0), void 0 !== e.insert && (Array.isArray(e.insert) || (e.insert = [ e.insert ]), 
                           e.insert.sort((function(e, t) {
                               return g.isRTL ? t.pos - e.pos : e.pos - t.pos;
                           })).forEach((function(e) {
                               "" !== e.c && f.call(g, e.pos, e.c, void 0 === e.strict || e.strict, void 0 !== e.fromIsValid ? e.fromIsValid : a);
                           })), e.insert = void 0), e.refreshFromBuffer && e.buffer) {
                               var t = e.refreshFromBuffer;
                               p.call(g, !0 === t ? t : t.start, t.end, e.buffer), e.refreshFromBuffer = void 0;
                           }
                           void 0 !== e.rewritePosition && (x = e.rewritePosition, e = !0);
                       }
                       return e;
                   }
                   function w(t, i, o) {
                       var s = !1;
                       return n.getTests.call(g, t).every((function(c, f) {
                           var d = c.match;
                           if (r.getBuffer.call(g, !0), !1 !== (s = (!d.jit || void 0 !== b.validPositions[r.seekPrevious.call(g, t)]) && (null != d.fn ? d.fn.test(i, b, t, o, k, u.call(g, e)) : (i === d.def || i === k.skipOptionalPartCharacter) && "" !== d.def && {
                               c: n.getPlaceholder.call(g, t, d, !0) || d.def,
                               pos: t
                           }))) {
                               var p = void 0 !== s.c ? s.c : i, h = t;
                               return p = p === k.skipOptionalPartCharacter && !0 === d.static ? n.getPlaceholder.call(g, t, d, !0) || d.def : p, 
                               !0 !== (s = P(s)) && void 0 !== s.pos && s.pos !== t && (h = s.pos), !0 !== s && void 0 === s.pos && void 0 === s.c ? !1 : (!1 === v.call(g, e, y.extend({}, c, {
                                   input: l.call(g, p, d, h)
                               }), a, h) && (s = !1), !1);
                           }
                           return !0;
                       })), s;
                   }
                   void 0 !== e.begin && (x = g.isRTL ? e.end : e.begin);
                   var S = !0, M = y.extend(!0, {}, b.validPositions);
                   if (!1 === k.keepStatic && void 0 !== b.excludes[x] && !0 !== o && !0 !== a) for (var _ = x; _ < (g.isRTL ? e.begin : e.end); _++) void 0 !== b.excludes[_] && (b.excludes[_] = void 0, 
                   delete b.tests[_]);
                   if ("function" == typeof k.preValidation && !0 !== a && !0 !== d && (S = P(S = k.preValidation.call(g, r.getBuffer.call(g), x, t, u.call(g, e), k, b, e, i || o))), 
                   !0 === S) {
                       if (S = w(x, t, i), (!i || !0 === a) && !1 === S && !0 !== d) {
                           var O = b.validPositions[x];
                           if (!O || !0 !== O.match.static || O.match.def !== t && t !== k.skipOptionalPartCharacter) {
                               if (k.insertMode || void 0 === b.validPositions[r.seekNext.call(g, x)] || e.end > x) {
                                   var E = !1;
                                   if (b.jitOffset[x] && void 0 === b.validPositions[r.seekNext.call(g, x)] && !1 !== (S = f.call(g, x + b.jitOffset[x], t, !0, !0)) && (!0 !== o && (S.caret = x), 
                                   E = !0), e.end > x && (b.validPositions[x] = void 0), !E && !r.isMask.call(g, x, k.keepStatic && 0 === x)) for (var T = x + 1, j = r.seekNext.call(g, x, !1, 0 !== x); T <= j; T++) if (!1 !== (S = w(T, t, i))) {
                                       S = h.call(g, x, void 0 !== S.pos ? S.pos : T) || S, x = T;
                                       break;
                                   }
                               }
                           } else S = {
                               caret: r.seekNext.call(g, x)
                           };
                       }
                       g.hasAlternator && !0 !== o && !i && (!1 === S && k.keepStatic && (c.call(g, r.getBuffer.call(g)) || 0 === x) ? S = s.call(g, x, t, i, a, void 0, e) : (u.call(g, e) && b.tests[x] && b.tests[x].length > 1 && k.keepStatic || 1 == S && !0 !== k.numericInput && b.tests[x] && b.tests[x].length > 1 && r.getLastValidPosition.call(g, void 0, !0) > x) && (S = s.call(g, !0))), 
                       !0 === S && (S = {
                           pos: x
                       });
                   }
                   if ("function" == typeof k.postValidation && !0 !== a && !0 !== d) {
                       var A = k.postValidation.call(g, r.getBuffer.call(g, !0), void 0 !== e.begin ? g.isRTL ? e.end : e.begin : e, t, S, k, b, i, m);
                       void 0 !== A && (S = !0 === A ? S : A);
                   }
                   S && void 0 === S.pos && (S.pos = x), !1 === S || !0 === d ? (r.resetMaskSet.call(g, !0), 
                   b.validPositions = y.extend(!0, [], M)) : h.call(g, void 0, x, !0);
                   var D = P(S);
                   void 0 !== g.maxLength && (r.getBuffer.call(g).length > g.maxLength && !a && (r.resetMaskSet.call(g, !0), 
                   b.validPositions = y.extend(!0, [], M), D = !1));
                   return D;
               }
               function d(e, t, i) {
                   for (var a = this.maskset, r = !1, o = n.getTests.call(this, e), s = 0; s < o.length; s++) {
                       if (o[s].match && (o[s].match.nativeDef === t.match[i.shiftPositions ? "def" : "nativeDef"] && (!i.shiftPositions || !t.match.static) || o[s].match.nativeDef === t.match.nativeDef || i.regex && !o[s].match.static && o[s].match.fn.test(t.input, a, e, !1, i))) {
                           r = !0;
                           break;
                       }
                       if (o[s].match && o[s].match.def === t.match.nativeDef) {
                           r = void 0;
                           break;
                       }
                   }
                   return !1 === r && void 0 !== a.jitOffset[e] && (r = d.call(this, e + a.jitOffset[e], t, i)), 
                   r;
               }
               function p(e, t, i) {
                   var n, a, s = this, l = this.maskset, c = this.opts, u = this.dependencyLib, f = c.skipOptionalPartCharacter, d = s.isRTL ? i.slice().reverse() : i;
                   if (c.skipOptionalPartCharacter = "", !0 === e) r.resetMaskSet.call(s), l.tests = {}, 
                   e = 0, t = i.length, a = r.determineNewCaretPosition.call(s, {
                       begin: 0,
                       end: 0
                   }, !1).begin; else {
                       for (n = e; n < t; n++) delete l.validPositions[n];
                       a = e;
                   }
                   var p = new u.Event("keypress");
                   for (n = e; n < t; n++) {
                       p.key = d[n].toString(), s.ignorable = !1;
                       var h = o.EventHandlers.keypressEvent.call(s, p, !0, !1, !1, a);
                       !1 !== h && void 0 !== h && (a = h.forwardPosition);
                   }
                   c.skipOptionalPartCharacter = f;
               }
               function h(e, t, i) {
                   var a = this, o = this.maskset, s = this.dependencyLib;
                   if (void 0 === e) for (e = t - 1; e > 0 && !o.validPositions[e]; e--) ;
                   for (var l = e; l < t; l++) {
                       if (void 0 === o.validPositions[l] && !r.isMask.call(a, l, !1)) if (0 == l ? n.getTest.call(a, l) : o.validPositions[l - 1]) {
                           var c = n.getTests.call(a, l).slice();
                           "" === c[c.length - 1].match.def && c.pop();
                           var u, d = n.determineTestTemplate.call(a, l, c);
                           if (d && (!0 !== d.match.jit || "master" === d.match.newBlockMarker && (u = o.validPositions[l + 1]) && !0 === u.match.optionalQuantifier) && ((d = s.extend({}, d, {
                               input: n.getPlaceholder.call(a, l, d.match, !0) || d.match.def
                           })).generatedInput = !0, v.call(a, l, d, !0), !0 !== i)) {
                               var p = o.validPositions[t].input;
                               return o.validPositions[t] = void 0, f.call(a, t, p, !0, !0);
                           }
                       }
                   }
               }
               function v(e, t, i, a) {
                   var o = this, s = this.maskset, l = this.opts, c = this.dependencyLib;
                   function u(e, t, i) {
                       var n = t[e];
                       if (void 0 !== n && !0 === n.match.static && !0 !== n.match.optionality && (void 0 === t[0] || void 0 === t[0].alternation)) {
                           var a = i.begin <= e - 1 ? t[e - 1] && !0 === t[e - 1].match.static && t[e - 1] : t[e - 1], r = i.end > e + 1 ? t[e + 1] && !0 === t[e + 1].match.static && t[e + 1] : t[e + 1];
                           return a && r;
                       }
                       return !1;
                   }
                   var p = 0, h = void 0 !== e.begin ? e.begin : e, v = void 0 !== e.end ? e.end : e, m = !0;
                   if (e.begin > e.end && (h = e.end, v = e.begin), a = void 0 !== a ? a : h, void 0 === i && (h !== v || l.insertMode && void 0 !== s.validPositions[a] || void 0 === t || t.match.optionalQuantifier || t.match.optionality)) {
                       var g, y = c.extend(!0, {}, s.validPositions), k = r.getLastValidPosition.call(o, void 0, !0);
                       for (s.p = h, g = k; g >= h; g--) delete s.validPositions[g], void 0 === t && delete s.tests[g + 1];
                       var b, x, P = a, w = P;
                       for (t && (s.validPositions[a] = c.extend(!0, {}, t), w++, P++), g = t ? v : v - 1; g <= k; g++) {
                           if (void 0 !== (b = y[g]) && !0 !== b.generatedInput && (g >= v || g >= h && u(g, y, {
                               begin: h,
                               end: v
                           }))) {
                               for (;"" !== n.getTest.call(o, w).match.def; ) {
                                   if (!1 !== (x = d.call(o, w, b, l)) || "+" === b.match.def) {
                                       "+" === b.match.def && r.getBuffer.call(o, !0);
                                       var S = f.call(o, w, b.input, "+" !== b.match.def, !0);
                                       if (m = !1 !== S, P = (S.pos || w) + 1, !m && x) break;
                                   } else m = !1;
                                   if (m) {
                                       void 0 === t && b.match.static && g === e.begin && p++;
                                       break;
                                   }
                                   if (!m && r.getBuffer.call(o), w > s.maskLength) break;
                                   w++;
                               }
                               "" == n.getTest.call(o, w).match.def && (m = !1), w = P;
                           }
                           if (!m) break;
                       }
                       if (!m) return s.validPositions = c.extend(!0, [], y), r.resetMaskSet.call(o, !0), 
                       !1;
                   } else t && n.getTest.call(o, a).match.cd === t.match.cd && (s.validPositions[a] = c.extend(!0, {}, t));
                   return r.resetMaskSet.call(o, !0), p;
               }
           }
       }, t = {};
       function i(n) {
           var a = t[n];
           if (void 0 !== a) return a.exports;
           var r = t[n] = {
               exports: {}
           };
           return e[n](r, r.exports, i), r.exports;
       }
       var n = {};
       return function() {
           var e, t = n;
           Object.defineProperty(t, "__esModule", {
               value: !0
           }), t.default = void 0, i(7149), i(3194), i(9302), i(4013), i(3851), i(219), i(207), 
           i(5296);
           var a = ((e = i(2394)) && e.__esModule ? e : {
               default: e
           }).default;
           t.default = a;
       }(), n;
   }();
}));
window.addEventListener('load', function() {
   
const forms = document.querySelectorAll("form");
for (let index = 0; index < forms.length; index++) {
   const form = forms[index];
   

const inputsOnly = form.getElementsByTagName("input");
const textareas = form.getElementsByTagName("textarea");
const inputs = [...inputsOnly,...textareas];
const tel = form.querySelector("input[type='tel']");
if (tel) {
   let im = new Inputmask(tel.getAttribute("data-tel-mask"));
im.mask(tel);
}


form.addEventListener("submit", function(event) {
   event.preventDefault();
   errors = [];
   validateForm(inputs);
 
 
   if (!errors.includes("error")) {
      
      async function telegram() {
         if (form.closest(".popup")) {
            let phone = form.querySelector("input[type='tel']").value;
         let name = form.querySelector(".form__input-login").value;
         let email = form.querySelector(".form__input-email").value;
         let data = {chat_id: 623214753, text: `клиент оставил данные в форме обратной связи, номер телефона - ${phone}, имя - ${name}, email - ${email}`};
         let response = await fetch('https://api.telegram.org/bot1314353899:AAEWq_naaa5_NR8qtA08G3hS-TkfyMcGzJ4/sendMessage', {
                // Метод, если не указывать, будет использоваться GET
       method: 'POST',
       // Заголовок запроса
        headers: {
          'Content-Type': 'application/json'
        },
        // Данные
        body: JSON.stringify(data)
         });
         if (response.ok) {
            alert("Ваши данные отправлены");
      } else {
         alert("Возникла ошибка, попробуйте отправить ваши данные снова");
      }

         }
         telegram(); 

         }
         
      form.reset();
      for (let index = 0; index < inputs.length; index++) {
         const element = inputs[index];
        if (element.classList.contains("checked")) {
         element.classList.remove("checked");
         element.parentElement.classList.remove("checked");
        }
      }
      let sent = document.getElementById("sent");
      popupOpen(sent);
      if (form.closest('.popup')) {
         popupClose(form.closest('.popup'));
      }
    
      if (form.closest('.popup') && !(form.closest('.popup').getAttribute("id") == "sent")) {
         let sentPopup = document.getElementById("sent");

         setTimeout(function() {
            popupOpen(sentPopup);
         }, timeout) 
         
      }
   }
 
})

function validateForm(items) {
   
   for (let index = 0; index < items.length; index++) {
      let input = items[index];
      listenerInputs(input);
      validateRequiredFields(input);
      validateRegExp(input);
      validatePassword(input);
      validatePasswordConfirmation(input);
      validateRequredCheckbox(input);
   }
}

     function listenerInputs(input) {
      input.addEventListener('input', function(){
         
         validateRequiredFields(input);
         validateRegExp(input);
         validatePassword(input);
         validatePasswordConfirmation(input);
         validateRequredCheckbox(input);
         })
      }
 



function validateRequiredFields(input) {
   let data = input.getAttribute("data-input-required");
   if (input.value == "" && data == "true") {
      errorText = "Это поле обязательное для заполнения";
      addErrorHtml(input, errorText);
      errors.push("error");
      
   } else if (input.value == "" && data == "false" || input.value !== "" && data == "true") {
      removeErrorHtml(input);
      errors.push("ok");
   }
}

function validateRegExp(input) {
   let regExp1 = input.getAttribute("data-regexp");
   
   if (regExp1) {
      let regExp2 = regExp1.slice(1,-1);
      let regExp = new RegExp(regExp2,"i");
      if (!regExp.test(input.value)) {
         let text = input.getAttribute("data-error");
         if (text && !input.value == "") {
            addErrorHtml(input,text);
            errors.push("error");
         }
           
      } else if ((regExp.test(input.value))) {
         removeErrorHtml(input);
         errors.push("ok");
      }
      
   }
}

function validatePassword(input) {
   if (input.name == "password") {
      let passwordConf = form.querySelector("input[name='passwordConfirmation']");
      if (input.value !== passwordConf.value) {
         let text = "Это поле не совпадает с полем пароля";
         addErrorHtml(passwordConf,text);
         errors.push("error");
      } else if (input.value == passwordConf.value && passwordConf.value !== "") {
         removeErrorHtml(passwordConf);
         errors.push("ok");
      }
   }
}

function validatePasswordConfirmation(input) {
   if (input.name == "passwordConfirmation") {
      let mainPassword = form.querySelector("input[name='password']");
      if (input.value !== mainPassword.value) {
         let text = "Это поле не совпадает с полем пароля";
         addErrorHtml(input,text);
         errors.push("error");
      } else if (input.value == mainPassword.value && input.value !== "") {
         removeErrorHtml(input);
         errors.push("ok");
      }
   }
}

function validateRequredCheckbox(input) {
   if (input.getAttribute("data-input-required") == "true"  && input.getAttribute("type") == "checkbox" && !input.checked) {
      input.parentElement.classList.add("error");
      errors.push("error");
   } else  if (input.getAttribute("type") == "checkbox" && input.getAttribute("data-input-required") == "true" && input.checked) {
      input.parentElement.classList.remove("error");
      errors.push("ok");
   }
}



function addErrorHtml(input, errorText) {
   if (!input.classList.contains("error")) {
      input.classList.add("error");
      input.parentElement.classList.add("error");
      if (input.classList.contains("checked")) {
         input.classList.remove("checked");
         input.parentElement.classList.remove("checked");
      }
      if (input.getAttribute("type") !== "checkbox") {
         let html = `<div class="error-block"><span>${errorText}</span></div>`;
         input.parentElement.insertAdjacentHTML("beforeEnd", html);
      }
      
   }
 
}


function removeErrorHtml(input) {
   if (input.classList.contains("error")) {
      input.classList.remove("error");
      input.parentElement.classList.remove("error");
      input.nextElementSibling.remove();
      
   }
   if (input.value !== "") {
      input.classList.add("checked");
      input.parentElement.classList.add("checked");
   }
   
}
}
})


const filter = document.querySelector(".body-catalog__btn-filter");
if (filter) {
   filter.addEventListener("click", function() {
      const filterBody = document.querySelector(".filter-body");
      filterBody.classList.toggle("show");
   })
}


let num1 = document.querySelector('#outnum-1');
let num2 = document.querySelector('#outnum-2');
let num3 = document.querySelector('#outnum-3');

if (num1) {
   let number1 = parseInt(num1.innerHTML);
let number2 = parseInt(num2.innerHTML);
let number3 = parseInt(num3.innerHTML);

let stepNumber = number1 / 1;

let stepNum1 = number1 / stepNumber;
let stepNum2 = number2 / stepNumber;
let stepNum3 = number3 / stepNumber;

let time = 2000; //ms

let t = Math.round(time / stepNumber);
num1.innerHTML = 0;
num2.innerHTML = 0;
num3.innerHTML = 0;


let section = document.querySelector('.reliably__numbers');
let observer = new IntersectionObserver(setNumbers, {
   threshold: 0.7
});
observer.observe(section);




function setNumbers(entries) {
   entries.forEach(entry => {
      
      if (entry.isIntersecting) {
         setNumber(number1, stepNum1, num1);
         setNumber(number2, stepNum2, num2);
         setNumber(number3, stepNum3, num3);
      }
     
   })
  
}


function setNumber(number, step, elem) { 
const interval =  setInterval(() => {
   if (parseInt(elem.innerHTML) >= number) {
      clearInterval(interval); 
   } else {
      elem.innerHTML = parseInt(elem.innerHTML) + step + "+";
      
   }
  
}, t);
}
}











