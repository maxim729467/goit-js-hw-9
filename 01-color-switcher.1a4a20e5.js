const t=document.querySelector("[data-start"),e=document.querySelector("[data-stop");let a=null;function d(){document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}t.addEventListener("click",(()=>{a=setInterval(d,1e3),t.disabled=!0})),e.addEventListener("click",(()=>{clearInterval(a),t.disabled=!1}));
//# sourceMappingURL=01-color-switcher.1a4a20e5.js.map
