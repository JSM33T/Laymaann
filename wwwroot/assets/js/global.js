function t(t,e,n,r,a,o,i){try{var s=t[o](i),l=s.value}catch(t){n(t);return}s.done?e(l):Promise.resolve(l).then(r,a)}function e(e){return function(){var n=this,r=arguments;return new Promise(function(a,o){var i=e.apply(n,r);function s(e){t(i,a,o,s,l,"next",e)}function l(e){t(i,a,o,s,l,"throw",e)}s(void 0)})}}let n=document.querySelector('input[name="__RequestVerificationToken"]');function r(t){let e=t||window.location.href;return{path:new URL(e).pathname,fullUrl:e}}function a(t){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)}function o(t){let e=t.trim();return(e=e.replace(/['"]/g,"")).replace(/<[^>]*>/g,"")}function i(t,e){return s.apply(this,arguments)}function s(){return(s=e(function*(t,e){try{if(!n)return{type:"error",message:"Anti-forgery token element not found"};let r=n.value;axios.defaults.headers.common.RequestVerificationToken=r;let a=yield axios.post(t,e);return{type:"ok",data:a.data}}catch(t){if(t)return{type:"error",data:t.response.data};return{type:"error",data:"Something went wrong"}}})).apply(this,arguments)}function l(t){return c.apply(this,arguments)}function c(){return(c=e(function*(t){try{if(!n)return{type:"error",message:"Anti-forgery token element not found"};let e=n.value;axios.defaults.headers.common.RequestVerificationToken=e;let r=yield axios.get(t);return{type:"ok",data:r.data}}catch(t){if(t)return{type:"error",data:t.response.data};return{type:"error",data:"Something went wrong"}}})).apply(this,arguments)}function u(t){return d.apply(this,arguments)}function d(){return(d=e(function*(t){try{let e=yield fetch(t);if(!e.ok)throw Error(`Failed to fetch JSON file. Status: ${e.status}`);return yield e.json()}catch(t){throw console.error(`Error fetching JSON file: ${t.message}`),t}})).apply(this,arguments)}function h(t,e,n){let r=document.getElementById(t);if(r){let t=r.getElementsByTagName(e);for(var a=0;a<t.length;a++)t[a].classList.add(n)}}function f(t,e){var n=document.getElementsByTagName(t);if(n.length>0)for(var r=e.split(" "),a=0;a<n.length;a++)for(var o=0;o<r.length;o++)n[a].classList.add(r[o]);else console.error("No elements with tag '"+t+"' found.")}function m(){let t=document.getElementsByTagName("a");if(t.length>0){for(var e=0;e<t.length;e++)t[e].setAttribute("target","_blank");console.log(e+" anchor tags found"),console.log("applied target=_blank to a tags")}else console.log("no a tags")}function p(t){"complete"===document.readyState?t.forEach(t=>t()):document.addEventListener("DOMContentLoaded",()=>{t.forEach(t=>t())})}function g(t,e){let n=document.getElementById(t);n&&n.addEventListener("click",e)}function y(t,e,n){let r=document.getElementById(t);if(r){let t=r.innerHTML.replace(/\{\{(\w+)\}\}/g,(t,n)=>e[n]||t),a=document.getElementById(n);a&&(a.innerHTML=t)}else console.error("template rendering failed")}function b(){var t=window.location.search,e={};return t&&t.substring(1).split("&").forEach(function(t){var n=t.split("="),r=decodeURIComponent(n[0]),a=decodeURIComponent(n[1]||"");e[r]?Array.isArray(e[r])?e[r].push(a):e[r]=[e[r],a]:e[r]=a}),e}function w(t){let[e,n,r]=t.split("-").map(Number),a=new Date(e,n-1,r),o=Math.floor((new Date().getTime()-a.getTime())/864e5);switch(!0){case 0===o:return"Today";case 1===o:return"Yesterday";case o<=7:return"This week";case o<=30:return`${o} days ago`;default:return a.toLocaleDateString("en-US",{day:"numeric",month:"long",year:"numeric"})}}function v(){Array.from(document.querySelectorAll("[acmodel]")).forEach(t=>{let e=t.getAttribute("acmodel");null!==e&&("radio"===t.type||"checkbox"===t.type?(window[e]=window[e]||[],window[e].push(t)):window[e]=t)})}function E(t,e){let n=document.getElementById("toast-container"),r=document.createElement("div");r.classList.add("toast"),r.setAttribute("role","alert"),r.setAttribute("autohide","false"),r.setAttribute("aria-live","assertive"),r.setAttribute("aria-atomic","true");let a=document.createElement("div");a.classList.add("toast-header","bg-primary","text-white");let o=document.createElement("strong");o.classList.add("mr-auto"),o.textContent=t,a.appendChild(o);let i=document.createElement("button");i.type="button",i.classList.add("btn-close","btn-close-white","ms-auto"),i.setAttribute("data-dismiss","toast"),i.setAttribute("aria-label","Close"),i.setAttribute("data-bs-dismiss","toast"),a.appendChild(i);let s=document.createElement("div");s.classList.add("toast-body"),s.textContent=e,r.appendChild(a),r.appendChild(s),n.appendChild(r),new bootstrap.Toast(r).show(),r.addEventListener("hidden.bs.toast",function(){n.removeChild(r)})}function T(){}function L(t,e){let n=new URL(window.location.href);n.searchParams.has(t)?n.searchParams.set(t,e):n.searchParams.append(t,e),history.pushState({},"",n.href)}function k(){}function A(t,n){let r=document.getElementById(t);if(r){var a;r.addEventListener("submit",(a=e(function*(t){t.preventDefault(),yield n(t)}),function(t){return a.apply(this,arguments)}))}}class O{get protocol(){return this.urlObject.protocol}get host(){return this.urlObject.host}get hostname(){return this.urlObject.hostname}get port(){return this.urlObject.port}get path(){return this.urlObject.pathname}get query(){return this.urlObject.search}get hash(){return this.urlObject.hash}get fullUrl(){return this.urlObject.href}constructor(t){var e,n;n=void 0,(e="urlObject")in this?Object.defineProperty(this,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):this[e]=n;let r=t||window.location.href;this.urlObject=new URL(r)}}export{p as acInit,y as acTemplate,g as acSetEvent,v as asBinder,o as acSanitize,L as acQueryParams,k as acClearParams,b as getQueryParameters,l as acGetData,i as acPostData,u as fetchJsonFile,A as acFormHandler,a as validateEmail,f as classesToTags,h as classesToTagsWDiv,m as addTargetBlankToLinks,w as prettifyDate,r as getUrl,E as acToast,T as shareIt,O as Url};
//# sourceMappingURL=global.js.map