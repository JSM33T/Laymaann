(()=>{let e=()=>localStorage.getItem("theme"),t=e=>localStorage.setItem("theme",e),d=()=>e()||"dark",c=e=>{"auto"===e&&window.matchMedia("(prefers-color-scheme: dark)").matches?document.documentElement.setAttribute("data-bs-theme","dark"):document.documentElement.setAttribute("data-bs-theme",e)};c(d());let a=e=>{let t=document.querySelector('[data-bs-toggle="mode"]');if(!t)return;let d=t.querySelector('input[type="checkbox"]');"dark"===e?d.checked=!0:d.checked=!1};window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>{let t=e();"light"!==t&&"dark"!==t&&c(d())}),window.addEventListener("DOMContentLoaded",()=>{a(d()),document.querySelectorAll('[data-bs-toggle="mode"]').forEach(e=>{e.addEventListener("click",()=>{let d=!0===e.querySelector('input[type="checkbox"]').checked?"dark":"light";t(d),c(d),a(d)})})})})();
//# sourceMappingURL=theme-switcher.js.map